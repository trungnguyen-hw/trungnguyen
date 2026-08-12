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
  videoSrc = "/video_nen.mp4"
}) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="fixed inset-0 w-full h-full min-h-svh h-svh overflow-hidden select-none pointer-events-none z-0">
      
      {/* 1. Fullscreen Background Video Layer (Layer 0: object-cover object-center) */}
      {!videoError ? (
        <video
          ref={videoRef}
          src={videoSrc}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out scale-105"
          style={{
            transform: `translate3d(${parallaxOffset.bgX}px, ${parallaxOffset.bgY}px, 0) scale(1.06)`
          }}
          loop
          playsInline
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

      {/* 2. Dark Cinematic Overlay & Vignette (Layer 1) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/50 to-[#08080c]/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.8)_100%)]" />

      {/* 3. Rain & Floating Light Particles Layer (Layer 2) */}
      {showRain && (
        <div className="absolute inset-0 overflow-hidden opacity-25 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
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
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stroke-width='0' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

    </div>
  );
};
