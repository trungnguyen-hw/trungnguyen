import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const coreRef = useRef<HTMLDivElement | null>(null);
  const auraRef = useRef<HTMLDivElement | null>(null);
  
  // Realtime mouse and aura physics coordinates
  const mousePos = useRef({ x: -200, y: -200 });
  const auraPos = useRef({ x: -200, y: -200 });
  const isHovered = useRef(false);
  const isAvatarHovered = useRef(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check touch devices or reduced motion preferences
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isAvatar = target.closest('.group') && target.closest('.group')?.querySelector('img');
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.getAttribute('role') === 'button';

      isHovered.current = !!isInteractive;
      isAvatarHovered.current = !!isAvatar;
    };

    // 60 FPS Smooth Spring Loop with Delayed Follow Physics (80-120ms lerp)
    const animate = () => {
      // Lerp aura position towards mouse position (0.15 lerp factor ~ 100ms smooth delay)
      auraPos.current.x += (mousePos.current.x - auraPos.current.x) * 0.15;
      auraPos.current.y += (mousePos.current.y - auraPos.current.y) * 0.15;

      // Update Core Dot DOM directly (zero React re-renders)
      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px, 0) scale(${isHovered.current ? 0.7 : 1})`;
      }

      // Update Shadow Aura DOM directly
      if (auraRef.current) {
        const scale = isHovered.current ? 1.25 : 1;
        const opacity = isHovered.current ? 0.14 : 0.08;
        const warmTint = isAvatarHovered.current ? 'rgba(61, 20, 10, 0.25)' : 'rgba(20, 20, 20, 0.15)';
        
        auraRef.current.style.transform = `translate3d(${auraPos.current.x - 100}px, ${auraPos.current.y - 100}px, 0) scale(${scale})`;
        auraRef.current.style.opacity = `${opacity}`;
        auraRef.current.style.background = `radial-gradient(circle at center, ${warmTint} 0%, rgba(10, 10, 10, 0.1) 50%, transparent 75%)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* 1. Very Small Cursor Core Focal Point (6px Dark Charcoal/Ember Ring) */}
      <div 
        ref={coreRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#181514] border border-[#3d140a]/60 pointer-events-none z-[9999] transition-transform duration-150 ease-out shadow-[0_0_6px_rgba(0,0,0,0.9)]"
      />

      {/* 2. Main Shadow Cursor Aura (200px Radial Gradient with Delayed Follow Physics) */}
      <div 
        ref={auraRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[9998] transition-opacity duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at center, rgba(20, 20, 20, 0.15) 0%, rgba(10, 10, 10, 0.1) 50%, transparent 75%)',
          opacity: 0.08
        }}
      />
    </>
  );
};
