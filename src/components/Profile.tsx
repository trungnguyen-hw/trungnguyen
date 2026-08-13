import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Copy } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import { Avatar } from './Avatar';
import { SocialIcons } from './SocialIcons';
import { Services } from './Services';
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
      className="profile-card relative w-full max-w-md sm:max-w-xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-5 px-3 sm:px-8 py-2.5 sm:py-5 z-10 select-none overflow-visible"
    >
      {/* 1. Avatar with Purple Energy Ring */}
      <Avatar />

      {/* 2. Large Fluid Clamp Responsive Name & Verification Stamp */}
      <div className="space-y-1 w-full max-w-full">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 group/name cursor-default max-w-full">
          <h1 
            className="display-font font-semibold tracking-[-0.04em] text-white transition-colors whitespace-normal drop-shadow-md break-words max-w-full"
            style={{
              fontSize: 'clamp(1.35rem, 5vw + 0.5rem, 3.25rem)',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.85), 0 1px 3px rgba(0, 0, 0, 0.9)'
            }}
          >
            {PROFILE_DATA.name}
          </h1>
          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-sky-100 shrink-0 drop-shadow-md" />
        </div>

        {/* Username Click to Copy Interaction */}
        <button
          onClick={handleCopyUsername}
          onMouseEnter={() => playSound('hover')}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-black/45 hover:bg-black/70 backdrop-blur-md shadow-md transition-all text-[11px] sm:text-xs md:text-sm text-slate-200 hover:text-white cursor-pointer group/user max-w-full"
          title="Click to copy username"
        >
          <span className="truncate">{PROFILE_DATA.username}</span>
          <Copy className="w-3 h-3 opacity-0 group-hover/user:opacity-100 transition-opacity text-neutral-400 shrink-0" />
        </button>
      </div>

      {/* 3. Subtitle ("Welcome to my page.") */}
      <p 
        className="text-slate-100 font-normal tracking-wide max-w-sm mx-auto leading-relaxed drop-shadow"
        style={{
          fontSize: 'clamp(0.95rem, 2.5vw + 0.3rem, 1.25rem)',
          textShadow: '0 2px 14px rgba(0, 0, 0, 0.85)'
        }}
      >
        {PROFILE_DATA.bio}
      </p>

      {/* 4. Location & Online Status Row */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm text-slate-200">
        <div className="apple-pill flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-100 shrink-0" />
          <span>{PROFILE_DATA.location}</span>
        </div>

        <div className="apple-pill flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-emerald-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse shrink-0" />
          <span>{PROFILE_DATA.status}</span>
        </div>
      </div>

      {/* 5. Social & Contact Icons Hub */}
      <SocialIcons onShowToast={onShowToast} />

      {/* 6. Personal service information */}
      <Services />

    </motion.div>
  );
};
