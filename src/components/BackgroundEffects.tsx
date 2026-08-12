import React, { useState } from 'react';

interface BackgroundEffectsProps {
  parallaxOffset: { bgX: number; bgY: number };
  backgroundImage: string;
  showRain: boolean;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ 
  parallaxOffset, 
  backgroundImage,
  showRain 
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden select-none pointer-events-none z-0">
      
      {/* 1. Fullscreen Background Image with Mouse Parallax (5px movement) */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-out scale-105"
        style={{
          backgroundImage: imgError ? 'none' : `url(${backgroundImage})`,
          transform: `translate3d(${parallaxOffset.bgX}px, ${parallaxOffset.bgY}px, 0) scale(1.06)`,
          backgroundColor: imgError ? '#0a0a12' : 'transparent'
        }}
      >
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="hidden" 
          onError={() => setImgError(true)} 
        />
      </div>

      {/* Fallback Gradient if background image fails */}
      {imgError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0814] via-[#08080c] to-[#040914]" />
      )}

      {/* 2. Dark Gradient Overlay & Soft Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/60 to-[#08080c]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)]" />

      {/* 3. Rain & Floating Light Particles Layer (Lightweight CSS) */}
      {showRain && (
        <div className="absolute inset-0 overflow-hidden opacity-30 transition-opacity duration-500">
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
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

    </div>
  );
};
