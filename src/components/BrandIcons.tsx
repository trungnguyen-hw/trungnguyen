import React from 'react';
import { SiZalo, SiDiscord, SiGithub, SiFacebook, SiInstagram, SiTiktok, SiTelegram } from 'react-icons/si';

interface IconProps {
  className?: string;
}

// Official GitHub Logo via react-icons/si
export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiGithub className={className} />
);

// Official Discord Clyde Logo via react-icons/si SiDiscord
export const DiscordIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiDiscord className={className} />
);

// Official Zalo Logo via react-icons/si SiZalo
export const ZaloIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiZalo className={className} />
);

// Official Facebook Logo via react-icons/si
export const FacebookIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiFacebook className={className} />
);

// Official Instagram Logo via react-icons/si
export const InstagramIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiInstagram className={className} />
);

// Official TikTok Logo via react-icons/si
export const TiktokIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiTiktok className={className} />
);

// Official Telegram Logo via react-icons/si
export const TelegramIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
  <SiTelegram className={className} />
);
