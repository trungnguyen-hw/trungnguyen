export interface SocialItem {
  id: string;
  name: string;
  url: string;
  username: string;
  enabled: boolean;
  actionType?: 'link' | 'copy' | 'phone' | 'email';
  copyText?: string;
}

export const PROFILE_DATA = {
  // Primary Personal Identity Data
  name: "TRUNG NGUYỄN",
  username: "@trungnguyen",
  bio: "Welcome to my page.",
  location: "Vietnam",
  status: "Online",
  views: 128,
  weather: "27°C Vietnam",
  
  avatar: "/anhdaidien/anhdaidien.jpg",
  fallbackAvatar: "/anhdaidien.jpg",
  backgroundImage: "/video_nen.mp4",

  // Direct Contacts
  phone: "0867671066",
  phoneFormatted: "0867 671 066",
  zalo: "0867671066",
  zaloUrl: "https://zalo.me/0867671066",
  discord: "https://discord.com/users/1349817900441145346",
  email: "trungngo1903206@gmail.com",

  // Social Links Matrix (Ordered: Discord, Facebook, TikTok, Telegram, Zalo, GitHub, Phone, Email)
  socials: [
    {
      id: "discord",
      name: "Discord",
      url: "https://discord.com/users/1349817900441145346",
      username: "Discord Profile",
      actionType: "link",
      enabled: true
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/trung.nguyenphu.9275",
      username: "TRUNG NGUYỄN",
      actionType: "link",
      enabled: true
    },
    {
      id: "tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@trungnguyenzkz",
      username: "@trungnguyenzkz",
      actionType: "link",
      enabled: true
    },
    {
      id: "telegram",
      name: "Telegram",
      url: "https://t.me/trungnguyen",
      username: "@trungnguyen",
      actionType: "link",
      enabled: true
    },
    {
      id: "zalo",
      name: "Zalo",
      url: "https://zalo.me/0867671066",
      username: "0867671066",
      actionType: "copy",
      copyText: "0867671066",
      enabled: true
    },
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/trungnguyen-hw",
      username: "@trungnguyen-hw",
      actionType: "link",
      enabled: true
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:0867671066",
      username: "0867671066",
      actionType: "phone",
      copyText: "0867671066",
      enabled: true
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:trungngo1903206@gmail.com",
      username: "trungngo1903206@gmail.com",
      actionType: "email",
      copyText: "trungngo1903206@gmail.com",
      enabled: true
    }
  ] as SocialItem[]
};
