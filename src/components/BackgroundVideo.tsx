import React, { useState } from 'react';
import type { RefObject } from 'react';
import { PROFILE_DATA } from '../data/profile';

interface BackgroundVideoProps {
  videoRef: RefObject<HTMLVideoElement | null>;
  parallaxOffset: { bgX: number; bgY: number };
  showRain: boolean;
  videoSrc?: string;
}

export const BackgroundVideo: React.FC<BackgroundVideoProps> = ({
  videoRef,
  parallaxOffset,
  showRain,
  videoSrc = "/videoapple2.mp4"
}) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen min-h-dvh h-dvh overflow-hidden select-none pointer-events-none z-0">
      
      {/* 1. Fullscreen Background Video Layer (Layer 0: object-cover object-center) */}
      {!videoError ? (
        <video
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate3d(${parallaxOffset.bgX}px, ${parallaxOffset.bgY}px, 0) scale(1.025)`
          }}
          loop
          playsInline
          muted
          autoPlay
          controls={false}
          preload="auto"
          onError={() => setVideoError(true)}
        />
      ) : (
        /* Fallback Background Image if video fails to load */
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out scale-105"
          style={{
            backgroundImage: `url(${PROFILE_DATA.backgroundImage})`,
            transform: `translate3d(${parallaxOffset.bgX}px, ${parallaxOffset.bgY}px, 0) scale(1.06)`
          }}
        />
      )}

      {/* Keep the original soundtrack and volume controls independent from the new visual. */}
      <video
        ref={videoRef}
        src="/videoapple2.mp4"
        className="hidden"
        loop
        playsInline
        controls={false}
        preload="auto"
      />

      {/* Apple-style contrast control, keeping the moving video visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/38 via-slate-950/22 to-[#070a0e]/62" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,220,255,0.05)_0%,transparent_48%,rgba(0,0,0,0.34)_100%)]" />

      {/* 3. Rain & Floating Light Particles Layer (Layer 2) */}
      {showRain && (
        <div className="absolute inset-0 overflow-hidden opacity-[0.08] transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100/15 via-transparent to-transparent" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.4), rgba(0,0,0,0)),
                                radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.3), rgba(0,0,0,0)),
                                radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.5), rgba(0,0,0,0)),
                                radial-gradient(1px 1px at 160px 120px, rgba(255, 255, 255, 0.3), rgba(0,0,0,0))`,
              backgroundSize: '200px 200px',
              animation: 'rainDrop 4s linear infinite'
            }}
          />
        </div>
      )}

      {/* 4. Film Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stroke-width='0' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

    </div>
  );
};
