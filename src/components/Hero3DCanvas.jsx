import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Create Hammered Sculpted Organic Talisman Geometry
    // Parametric Torus Knot with micro-displaced vertices for hand-hammered texture
    const geometry = new THREE.TorusKnotGeometry(1.15, 0.38, 180, 42, 2, 3);
    
    // Displace vertices subtly to emulate hand-hammered artisan anvil strokes
    const positionAttribute = geometry.attributes.position;
    const vertex = new THREE.Vector3();
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i);
      const noise =
        Math.sin(vertex.x * 6.5) *
        Math.cos(vertex.y * 6.5) *
        Math.sin(vertex.z * 6.5) *
        0.035;
      vertex.addScaledVector(vertex.clone().normalize(), noise);
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
    }
    geometry.computeVertexNormals();

    // High-Gloss Liquid Luxury Physical Material
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xd4af37), // rich hammered atelier brass/gold
      emissive: new THREE.Color(0x221706),
      metalness: 0.94,
      roughness: 0.22,
      clearcoat: 0.85,
      clearcoatRoughness: 0.18,
      reflectivity: 0.95,
      flatShading: true // highlights individual hammered facets
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = 0.45;
    mesh.rotation.y = 0.65;
    scene.add(mesh);

    // Lighting: Studio 3-Point Lighting + Mouse-Tracking Specular Light
    const ambientLight = new THREE.AmbientLight(0xfff5e6, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeedd, 2.8);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xcceeff, 1.6);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xffaa44, 2.2, 12);
    fillLight.position.set(0, -3, 3);
    scene.add(fillLight);

    // Dynamic mouse light for specular highlight gloss movement
    const mouseLight = new THREE.PointLight(0xffffff, 3.5, 8);
    mouseLight.position.set(0, 0, 3.5);
    scene.add(mouseLight);

    // Mouse Tracking with Inertia
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 1.2;
      mouse.targetY = y * 1.2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Scroll parallax rotation
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update specular light position to glide along surface
      mouseLight.position.x = mouse.x * 2.5;
      mouseLight.position.y = mouse.y * 2.5;

      // Anti-gravity floating oscillation + mouse tilt + scroll scrub
      const scrollRotation = scrollY * 0.0018;
      mesh.rotation.y = 0.65 + elapsedTime * 0.35 + mouse.x * 0.8 + scrollRotation;
      mesh.rotation.x = 0.45 + Math.sin(elapsedTime * 0.8) * 0.08 - mouse.y * 0.6;
      mesh.rotation.z = Math.cos(elapsedTime * 0.6) * 0.06 + mouse.x * 0.3;

      mesh.position.y = Math.sin(elapsedTime * 1.4) * 0.12 + mouse.y * 0.15;
      mesh.position.x = mouse.x * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full pointer-events-none ${className}`}
      aria-label="3D Interactive Sculptural Jewelry Render"
    />
  );
}
