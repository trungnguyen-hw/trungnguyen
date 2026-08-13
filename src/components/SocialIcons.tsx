import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';
import type { SocialItem } from '../data/profile';
import { playSound } from '../utils/audio';
import { 
  GithubIcon, 
  FacebookIcon, 
  TiktokIcon,
  ZaloIcon,
  DiscordIcon,
  TelegramIcon,
  PhoneIcon,
  MailIcon
} from './BrandIcons';

interface SocialIconsProps {
  onShowToast: (msg: string) => void;
}

export const SocialIcons: React.FC<SocialIconsProps> = ({ onShowToast }) => {
  const enabledSocials = PROFILE_DATA.socials.filter(s => s.enabled);

  const getPlatformIcon = (id: string) => {
    switch (id) {
      case 'discord': return <DiscordIcon className="w-5 h-5 text-white" />;
      case 'zalo': return <ZaloIcon className="w-5 h-5 text-white" />;
      case 'phone': return <PhoneIcon className="w-5 h-5 text-white" />;
      case 'facebook': return <FacebookIcon className="w-5 h-5 text-white" />;
      case 'tiktok': return <TiktokIcon className="w-5 h-5 text-white" />;
      case 'telegram': return <TelegramIcon className="w-5 h-5 text-white" />;
      case 'github': return <GithubIcon className="w-5 h-5 text-white" />;
      case 'email': return <MailIcon className="w-5 h-5 text-white" />;
      default: return <ExternalLink className="w-5 h-5 text-white" />;
    }
  };

  const getTooltipContent = (item: SocialItem) => {
    if (item.id === 'discord' || item.id === 'telegram' || item.id === 'github' || item.id === 'email') {
      return "Chưa Cập Nhập";
    }
    if (item.id === 'zalo' || item.id === 'phone') {
      return "0363.0.54321 - 0353.715.517";
    }
    return item.username || item.name;
  };

  const handleClick = (item: SocialItem, e: React.MouseEvent) => {
    playSound('click');

    if (item.id === 'discord' || item.id === 'telegram' || item.id === 'github' || item.id === 'email') {
      e.preventDefault();
      onShowToast(`${item.name}: Chưa Cập Nhập`);
    } else if (item.id === 'zalo') {
      e.preventDefault();
      navigator.clipboard.writeText(item.copyText || "0363.0.54321 - 0353.715.517");
      onShowToast("Zalo: 0363.0.54321 - 0353.715.517");
    } else if (item.id === 'phone') {
      onShowToast("Hotline: 0363.0.54321 - 0353.715.517");
    }
  };

  const getBrandHoverClass = (id: string) => {
    switch (id) {
      case 'discord':
        return 'hover:border-[#5865F2]/80 hover:shadow-[0_0_22px_rgba(88,101,242,0.55)] hover:bg-[#5865F2]/25';
      case 'facebook':
        return 'hover:border-[#1877F2]/80 hover:shadow-[0_0_22px_rgba(24,119,242,0.55)] hover:bg-[#1877F2]/25';
      case 'tiktok':
        return 'hover:border-[#EE1D52]/80 hover:shadow-[0_0_22px_rgba(238,29,82,0.55)] hover:bg-[#EE1D52]/25';
      case 'telegram':
        return 'hover:border-[#24A1DE]/80 hover:shadow-[0_0_22px_rgba(36,161,222,0.55)] hover:bg-[#24A1DE]/25';
      case 'zalo':
        return 'hover:border-[#0068FF]/80 hover:shadow-[0_0_22px_rgba(0,104,255,0.55)] hover:bg-[#0068FF]/25';
      case 'phone':
        return 'hover:border-[#10B981]/80 hover:shadow-[0_0_22px_rgba(16,185,129,0.55)] hover:bg-[#10B981]/25';
      case 'github':
        return 'hover:border-white/90 hover:shadow-[0_0_22px_rgba(255,255,255,0.45)] hover:bg-white/20';
      case 'email':
        return 'hover:border-[#EA4335]/80 hover:shadow-[0_0_22px_rgba(234,67,53,0.55)] hover:bg-[#EA4335]/25';
      default:
        return 'hover:border-sky-300/80 hover:shadow-[0_0_22px_rgba(125,211,252,0.55)] hover:bg-sky-500/25';
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pt-2 overflow-visible">
      
      {/* Elegant Centered "Contact Me" Heading */}
      <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 select-none">
        <span className="w-1 h-1 rounded-full bg-sky-200/90 shrink-0" />
        <h2 className="text-sm sm:text-base font-medium tracking-wide text-slate-100">
          Contact Me
        </h2>
        <span className="w-1 h-1 rounded-full bg-sky-200/90 shrink-0" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 w-full max-w-full mx-auto px-1">
        {enabledSocials.map((item) => (
          <div key={item.id} className="relative group shrink-0">
            
            <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 rounded-xl bg-slate-950/85 border border-white/15 backdrop-blur-xl text-white text-[11px] font-medium max-w-[85vw] sm:max-w-xs truncate opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 ease-out shadow-[0_8px_20px_rgba(0,0,0,0.5)] pointer-events-none z-50">
              <span className="text-slate-100">{getTooltipContent(item)}</span>
            </div>

            <a
              href={item.url}
              target={item.actionType === 'phone' || item.actionType === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => handleClick(item, e)}
              onMouseEnter={() => playSound('hover')}
              className={`social-button w-10 h-10 sm:w-11 sm:h-11 rounded-xl xs:rounded-2xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-[2px] active:scale-95 ${getBrandHoverClass(item.id)}`}
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
