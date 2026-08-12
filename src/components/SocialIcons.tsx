import React from 'react';
import { 
  Phone, 
  Mail, 
  ExternalLink
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import type { SocialItem } from '../data/profile';
import { playSound } from '../utils/audio';
import { 
  GithubIcon, 
  FacebookIcon, 
  TiktokIcon,
  ZaloIcon,
  DiscordIcon,
  TelegramIcon
} from './BrandIcons';

interface SocialIconsProps {
  onShowToast: (msg: string) => void;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ onShowToast }) => {
  const enabledSocials = PROFILE_DATA.socials.filter(s => s.enabled);

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'discord': return <DiscordIcon className="w-5 h-5 text-indigo-400" />;
      case 'zalo': return <ZaloIcon className="w-5 h-5 text-blue-400" />;
      case 'phone': return <Phone className="w-5 h-5 text-emerald-400" />;
      case 'facebook': return <FacebookIcon className="w-5 h-5 text-blue-500" />;
      case 'tiktok': return <TiktokIcon className="w-5 h-5 text-pink-500" />;
      case 'telegram': return <TelegramIcon className="w-5 h-5 text-sky-400" />;
      case 'github': return <GithubIcon className="w-5 h-5 text-white" />;
      case 'email': return <Mail className="w-5 h-5 text-red-400" />;
      default: return <ExternalLink className="w-5 h-5 text-neutral-300" />;
    }
  };

  const getTooltipContent = (item: SocialItem) => {
    if (item.id === 'zalo' || item.id === 'phone') {
      return item.username || "0867671066";
    }
    if (item.id === 'email') {
      return item.username || "trungngo1903206@gmail.com";
    }
    return item.name;
  };

  const handleClick = (item: SocialItem, e: React.MouseEvent) => {
    playSound('click');

    if (item.id === 'zalo') {
      e.preventDefault();
      navigator.clipboard.writeText(item.copyText || "0867671066");
      onShowToast("Zalo: 0867671066 copied");
    } else if (item.id === 'phone') {
      navigator.clipboard.writeText(item.copyText || "0867671066");
      onShowToast("Phone: 0867671066 copied");
    } else if (item.id === 'email') {
      navigator.clipboard.writeText(item.copyText || "trungngo1903206@gmail.com");
      onShowToast("Email copied to clipboard");
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 overflow-visible">
      
      {/* Elegant Centered "Contact Me" Heading */}
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80 animate-pulse shrink-0" />
        <h2 className="text-sm sm:text-base font-semibold tracking-wide text-neutral-200 drop-shadow-sm">
          Contact Me
        </h2>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400/80 animate-pulse shrink-0" />
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-2.5 w-full max-w-[240px] sm:max-w-none mx-auto">
        {enabledSocials.map((item) => (
          <div key={item.id} className="relative group shrink-0">
            
            {/* Elegant Translucent Dark Purple Tooltip (Desktop Only) */}
            <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-xl bg-[#0f0c16]/95 border border-[#542080]/60 backdrop-blur-md text-white text-[11px] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out shadow-[0_8px_20px_rgba(0,0,0,0.8)] pointer-events-none z-50">
              <span className="text-purple-300 font-bold">{getTooltipContent(item)}</span>
            </div>

            <a
              href={item.url}
              target={item.actionType === 'phone' || item.actionType === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleClick(item, e)}
              onMouseEnter={() => playSound('hover')}
              className="w-11 h-11 sm:w-11 sm:h-11 rounded-2xl bg-[#0f0f15]/80 hover:bg-[#181822] flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-95 shadow-lg hover:shadow-[0_8px_20px_rgba(0,0,0,0.8)] border border-white/10 hover:border-purple-500/40"
              aria-label={item.name}
            >
              {getPlatformIcon(item.id)}
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};
