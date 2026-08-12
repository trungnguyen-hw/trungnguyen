import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/profile';
import { playSound } from '../utils/audio';

export const Avatar: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(PROFILE_DATA.avatar);
  const [ripple, setRipple] = useState(false);

  const handleClick = () => {
    playSound('click');
    setRipple(true);
    setTimeout(() => setRipple(false), 600);
  };

  return (
    <div className="relative pt-8 pb-4 px-6 overflow-visible inline-flex items-center justify-center mx-auto z-10">
      <div 
        onClick={handleClick}
        className="relative w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] aspect-square group select-none cursor-pointer overflow-visible"
      >
        
        {/* 1. Click Purple Energy Ripple Wave */}
        {ripple && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+36px)] h-[calc(100%+36px)] rounded-full border-2 border-[#D58AFF] animate-ping pointer-events-none z-30" />
        )}

        {/* 2. Layer 3: Soft Dark Purple Outer Ambient Glow (Un-clipped 1:1 Circle with Ample Top Padding) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+24px)] h-[calc(100%+24px)] aspect-square rounded-full bg-gradient-to-tr from-[#4B087F] via-[#8B2CFF]/70 to-[#B44CFF]/50 opacity-80 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 animate-purple-plasma pointer-events-none z-0"
        />
        
        {/* 3. Layer 2: Main Electric Purple Energy Ring (Centered 1:1 Circle) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+12px)] h-[calc(100%+12px)] aspect-square rounded-full p-[3px] bg-gradient-to-tr from-[#4B087F] via-[#8B2CFF] to-[#D58AFF] shadow-[0_0_20px_#8B2CFF] group-hover:shadow-[0_0_35px_#B44CFF] transition-all duration-500 pointer-events-none z-1"
        />

        {/* 4. Layer 1: Orbiting Energy Highlight Wave (Centered 360° Circular Orbit) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+12px)] h-[calc(100%+12px)] aspect-square rounded-full pointer-events-none z-2 animate-purple-ring-flow"
        >
          <div className="w-full h-full rounded-full relative">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#D58AFF] shadow-[0_0_12px_#D58AFF,0_0_20px_#B44CFF] group-hover:scale-125 transition-transform duration-300" />
          </div>
        </div>

        {/* 5. Deep Obsidian Dark Inner Mask Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] aspect-square rounded-full bg-[#0d0417] border border-[#8B2CFF]/40 shadow-inner pointer-events-none z-3" />

        {/* 6. Main Circular Avatar Photo Container */}
        <div className="relative w-full h-full aspect-square rounded-full overflow-hidden border border-[#B44CFF]/70 p-1 bg-[#0d0417] shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:border-[#D58AFF] z-10">
          
          {/* Purple Shimmer Reflection Layer */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/15 via-transparent to-[#4B087F]/70 pointer-events-none z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

          {/* Avatar Photo (Stable, Un-distorted, Centered) */}
          <img 
            src={imgSrc} 
            alt={PROFILE_DATA.name}
            onError={() => setImgSrc(PROFILE_DATA.fallbackAvatar)}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

      </div>
    </div>
  );
};
