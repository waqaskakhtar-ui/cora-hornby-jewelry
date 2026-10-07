import sharp from 'sharp';
import fs from 'fs';

async function processImage() {
  const inputPath = 'C:/Users/Hammad/.gemini/antigravity/scratch/cora-hornby-editorial/public/hero-zebra-jasper-3d.jpg';
  const outputPath = 'C:/Users/Hammad/.gemini/antigravity/scratch/cora-hornby-editorial/public/hero-zebra-jasper-3d.png';

  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  console.log(`Processing image: ${width}x${height}, channels: ${channels}`);

  // Create RGBA buffer
  const rgba = Buffer.alloc(width * height * 4);

  // Background sample at corners:
  // Let's sample top-left, top-right
  const bgR = data[0];
  const bgG = data[1];
  const bgB = data[2];
  console.log(`Sampled BG color: R=${bgR}, G=${bgG}, B=${bgB}`);

  // We want to detect background pixels from outside and from the inner loop
  // Let's do a flood fill mask for the background!
  const isBgCandidate = new Uint8Array(width * height);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      // Difference from background color or very high brightness near ivory
      // Off-white ivory background: R > 235, G > 232, B > 225, with low saturation (|R-G| < 12 and |G-B| < 14)
      const diffR = Math.abs(r - bgR);
      const diffG = Math.abs(g - bgG);
      const diffB = Math.abs(b - bgB);
      const colorDist = Math.sqrt(diffR * diffR + diffG * diffG + diffB * diffB);

      if (colorDist < 26 || (r > 236 && g > 234 && b > 226 && Math.abs(r - g) < 14 && Math.abs(g - b) < 14)) {
        isBgCandidate[y * width + x] = 1;
      }
    }
  }

  // Flood fill from borders (0,0) and from center (inside the bracelet ring)
  const isBackground = new Uint8Array(width * height);
  const queue = [];

  // Seed borders
  for (let x = 0; x < width; x++) {
    if (isBgCandidate[x]) { queue.push(x); isBackground[x] = 1; }
    const btm = (height - 1) * width + x;
    if (isBgCandidate[btm]) { queue.push(btm); isBackground[btm] = 1; }
  }
  for (let y = 0; y < height; y++) {
    const lft = y * width;
    if (isBgCandidate[lft]) { queue.push(lft); isBackground[lft] = 1; }
    const rgt = y * width + (width - 1);
    if (isBgCandidate[rgt]) { queue.push(rgt); isBackground[rgt] = 1; }
  }

  // Seed center hole of bracelet: around x = width * 0.52, y = height * 0.48
  const cx = Math.floor(width * 0.52);
  const cy = Math.floor(height * 0.48);
  const centerIdx = cy * width + cx;
  if (isBgCandidate[centerIdx]) {
    queue.push(centerIdx);
    isBackground[centerIdx] = 1;
  }

  // Also seed a few points in the center area
  for (let dy = -30; dy <= 30; dy += 10) {
    for (let dx = -30; dx <= 30; dx += 10) {
      const pIdx = (cy + dy) * width + (cx + dx);
      if (isBgCandidate[pIdx] && !isBackground[pIdx]) {
        queue.push(pIdx);
        isBackground[pIdx] = 1;
      }
    }
  }

  // BFS flood fill
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && isBgCandidate[n] && !isBackground[n]) {
        isBackground[n] = 1;
        queue.push(n);
      }
    }
  }

  console.log(`Identified ${queue.length} background pixels out of ${width * height}`);

  // Now create smooth alpha channel
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      const srcIdx = p * channels;
      const destIdx = p * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      rgba[destIdx] = r;
      rgba[destIdx + 1] = g;
      rgba[destIdx + 2] = b;

      if (isBackground[p]) {
        rgba[destIdx + 3] = 0; // transparent!
      } else {
        rgba[destIdx + 3] = 255;
      }
    }
  }

  // Smooth alpha edges slightly with morphological erosion/feather
  // Write to PNG
  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
  .png()
  .toFile(outputPath);

  console.log('Successfully saved transparent PNG cutout to:', outputPath);
}

processImage().catch(console.error);
