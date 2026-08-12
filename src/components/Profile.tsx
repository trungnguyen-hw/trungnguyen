import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { Avatar } from './Avatar';
import { SocialIcons } from './SocialIcons';
import { playSound } from '../utils/audio';

interface ProfileProps {
  onShowToast: (msg: string) => void;
  parallaxOffset: { profileX: number; profileY: number };
}

export const Profile: React.FC<ProfileProps> = ({ onShowToast, parallaxOffset }) => {

  const handleCopyUsername = () => {
    playSound('copy');
    navigator.clipboard.writeText(PROFILE_DATA.username);
    onShowToast("Username copied to clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: `translate3d(${parallaxOffset.profileX}px, ${parallaxOffset.profileY}px, 0)`
      }}
      className="relative w-full max-w-md sm:max-w-2xl mx-auto text-center space-y-3.5 sm:space-y-5 px-3 sm:px-4 z-10 select-none overflow-visible pt-2"
    >
      {/* 1. Avatar with Purple Energy Ring */}
      <Avatar />

      {/* 2. Large Fluid Clamp Responsive Name & Verification Stamp */}
      <div className="space-y-1">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 group/name cursor-default">
          <h1 
            className="display-font font-extrabold tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] group-hover/name:text-neutral-100 transition-colors whitespace-nowrap sm:whitespace-normal"
            style={{
              fontSize: 'clamp(1.5rem, 5.5vw, 3.25rem)',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)'
            }}
          >
            {PROFILE_DATA.name}
          </h1>
          <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-300 shrink-0 group-hover/name:text-amber-700/80 transition-colors" />
        </div>

        {/* Username Click to Copy Interaction */}
        <button
          onClick={handleCopyUsername}
          onMouseEnter={() => playSound('hover')}
          className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg border border-transparent hover:border-neutral-800 hover:bg-white/5 transition-all text-[11px] sm:text-xs md:text-sm text-neutral-400 hover:text-neutral-200 mono-font cursor-pointer group/user"
          title="Click to copy username"
        >
          <span>{PROFILE_DATA.username}</span>
          <Copy className="w-3 h-3 opacity-0 group-hover/user:opacity-100 transition-opacity text-neutral-400" />
        </button>
      </div>

      {/* 3. Subtitle ("Welcome to my page.") */}
      <p 
        className="text-neutral-300 font-medium tracking-wide max-w-sm mx-auto leading-relaxed"
        style={{
          fontSize: 'clamp(1rem, 2.8vw, 1.25rem)'
        }}
      >
        {PROFILE_DATA.bio}
      </p>

      {/* 4. Location & Online Status Row */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-neutral-300">
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" />
          <span>{PROFILE_DATA.location}</span>
        </div>

        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2.5 sm:px-3 py-1 rounded-full text-emerald-400 font-bold backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{PROFILE_DATA.status}</span>
        </div>
      </div>

      {/* 5. Social & Contact Icons Hub */}
      <SocialIcons onShowToast={onShowToast} />

    </motion.div>
  );
};
