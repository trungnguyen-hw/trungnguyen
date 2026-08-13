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
    <div className="relative pt-3 sm:pt-4 pb-2 px-5 overflow-visible inline-flex items-center justify-center mx-auto z-10">
      <div onClick={handleClick} className="relative w-[92px] h-[92px] xs:w-[104px] xs:h-[104px] sm:w-[120px] sm:h-[120px] md:w-[135px] md:h-[135px] aspect-square shrink-0 group select-none cursor-pointer overflow-visible">
        {ripple && <span className="absolute inset-[-12px] rounded-full border border-sky-100/60 animate-ping pointer-events-none" />}
        <div className="absolute inset-[-11px] rounded-full bg-sky-100/20 blur-xl avatar-aura pointer-events-none" />
        <div className="absolute inset-[-6px] rounded-full p-[2px] bg-gradient-to-br from-white via-slate-200 to-sky-200 shadow-[0_10px_28px_rgba(125,180,220,0.28)] pointer-events-none">
          <div className="w-full h-full rounded-full bg-slate-950/70" />
        </div>
        <div className="relative w-full h-full rounded-full overflow-hidden border border-white/75 p-1 bg-slate-950/75 shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.025] z-10">
          <img
            src={imgSrc}
            alt={PROFILE_DATA.name}
            onError={() => setImgSrc(PROFILE_DATA.fallbackAvatar)}
            className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 via-transparent to-sky-950/25 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
