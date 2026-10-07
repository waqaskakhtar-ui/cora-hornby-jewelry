import React, { useEffect, useState, useRef } from 'react';

export default function EnvironmentalCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState({
    active: false,
    text: '',
    variant: 'default', // 'default', 'inspect', 'explore', 'button', 'text'
  });
  const [isVisible, setIsVisible] = useState(false);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Check if pointer is fine (desktop/mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Check hovered element for cursor traits
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor');
        const customText = target.getAttribute('data-cursor-text') || type.toUpperCase();
        setCursorState({
          active: true,
          text: customText,
          variant: type,
        });
      } else if (e.target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorState({
          active: true,
          text: '',
          variant: 'button',
        });
      } else {
        setCursorState({
          active: false,
          text: '',
          variant: 'default',
        });
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth animation loop for organic liquid follow
    const updatePosition = () => {
      const ease = 0.16;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;
      
      setPosition({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      rafId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isInspect = cursorState.variant === 'inspect' || cursorState.variant === 'view';
  const isExplore = cursorState.variant === 'explore';
  const isButton = cursorState.variant === 'button';

  return (
    <div className="hidden lg:block fixed inset-0 pointer-events-none z-9999 select-none overflow-hidden">
      
      {/* 1. Large Ambient Aura (Environmental Lighting that illuminates surfaces) */}
      <div
        className="absolute rounded-full transition-opacity duration-500 ease-out will-change-transform"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isInspect || isExplore ? '240px' : '180px',
          height: isInspect || isExplore ? '240px' : '180px',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(168, 139, 88, 0.14) 0%, rgba(168, 139, 88, 0.04) 40%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* 2. Interactive Focus Ring & Inspection Lens */}
      <div
        className={`absolute rounded-full flex items-center justify-center transition-all duration-300 ease-out will-change-transform ${
          isInspect || isExplore
            ? 'w-20 h-20 bg-[#FAF9F5]/40 dark:bg-[#111111]/60 backdrop-blur-md border border-[#111111]/30 dark:border-white/40 shadow-xl'
            : isButton
            ? 'w-10 h-10 bg-[#111111]/10 dark:bg-white/15 border border-[#111111]/40 dark:border-white/50 scale-110'
            : 'w-7 h-7 border border-[#111111]/30 dark:border-white/35 bg-transparent'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Fine Center Reticle Dot */}
        {!isInspect && !isExplore && (
          <div
            className={`w-1 h-1 rounded-full transition-all duration-200 ${
              isButton
                ? 'bg-[#A88B58] scale-150'
                : 'bg-[#111111] dark:bg-[#FAF9F5]'
            }`}
          />
        )}

        {/* Editorial Text Badge on Inspection */}
        {(isInspect || isExplore) && (
          <span className="font-editorial-mono text-[9px] uppercase tracking-[0.2em] font-bold text-[#111111] dark:text-[#FAF9F5] text-center px-2 animate-fade-in">
            {cursorState.text}
          </span>
        )}
      </div>

    </div>
  );
}
