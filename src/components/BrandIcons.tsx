import React from 'react';

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

// Pure Inline GitHub Logo SVG
export const GithubIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Pure Inline Discord Clyde Logo SVG
export const DiscordIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Pure Inline Zalo Logo SVG
export const ZaloIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M1.5 4.5A3 3 0 014.5 1.5h15a3 3 0 013 3v15a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15zm13.1 9.3h2.6v-1.8h-2.6v1.8zm-4.2 0h2.6v-6.3h-2.6v6.3zm-4.3 0h2.7l-2.7-3.7h2.7v-1.8H6.1l2.7 3.7H6.1v1.8z" />
  </svg>
);

// Pure Inline Facebook Logo SVG
export const FacebookIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Pure Inline Instagram Logo SVG
export const InstagramIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Pure Inline TikTok Logo SVG
export const TiktokIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.33 1.52-1.33 2.52.01.87.42 1.72 1.11 2.25.86.66 2.05.77 3.03.35 1.05-.44 1.78-1.48 1.83-2.63.03-2.9.01-5.79.02-8.69z" />
  </svg>
);

// Pure Inline Telegram Logo SVG
export const TelegramIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.74 6.66-2.89 8.01-3.46 3.82-1.61 4.61-1.89 5.13-1.9.11 0 .37.03.54.17.14.12.18.28.2.4.02.07.02.21 0 .37z" />
  </svg>
);

// Pure Inline Apple Official Logo SVG (Trading Card)
export const AppleIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.67-.82 1.12-1.96.99-3.1-.96.04-2.13.64-2.82 1.44-.61.71-1.15 1.87-1.01 2.98 1.07.08 2.17-.5 2.84-1.32z" />
  </svg>
);

// iPhone Trading & Consignment (Apple Logo Icon)
export const AppleIphoneIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <AppleIcon className={className} width={width} height={height} />
);

// Apple Phone Contact SVG Icon
export const ApplePhoneIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Pure Inline iPad Icon for Device Pawn Services
export const AppleStackedDevicesIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="3" />
    <circle cx="12" cy="18.5" r="1" fill="#FFFFFF" />
  </svg>
);

// Pure Inline MacBook Pro / iMac Icon for IT & Tech Support
export const AppleMacBookIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="11" rx="2" />
    <path d="M2 18h20a1 1 0 0 0 1-1v-1H1v1a1 1 0 0 0 1 1z" />
    <line x1="10" y1="15.5" x2="14" y2="15.5" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Pure Inline Phone Contact SVG Icon (Pure White #FFFFFF)
export const PhoneIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 20, height = 20 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

// Pure Inline Mail Email SVG Icon (Pure White #FFFFFF)
export const MailIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 20, height = 20 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Pure Inline Online 24/7 Live Support Clock SVG Icon
export const AppleOnlineIcon: React.FC<IconProps> = ({ className = "w-5 h-5", width = 24, height = 24 }) => (
  <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
