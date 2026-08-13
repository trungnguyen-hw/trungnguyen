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
  name: "HOÀN RÙA ICLOUD",
  username: "@hoanruaicloud",
  bio: "Welcome to my iCloud.",
  location: "Vietnam",
  status: "Online",
  weather: "27°C Vietnam",
  
  avatar: "/hoanrua.png",
  fallbackAvatar: "/hoanrua.png",
  backgroundImage: "/videoapple2.mp4",

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
      url: "#",
      username: "Chưa Cập Nhập",
      actionType: "link",
      enabled: true
    },
    {
      id: "facebook",
      name: "Facebook",
      url: "https://www.facebook.com/ruasaker06",
      username: "Facebook",
      actionType: "link",
      enabled: true
    },
    {
      id: "tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@saulebong.06?_r=1&_t=ZS-98ptWCCWDjj",
      username: "@saulebong.06",
      actionType: "link",
      enabled: true
    },
    {
      id: "telegram",
      name: "Telegram",
      url: "#",
      username: "Chưa Cập Nhập",
      actionType: "link",
      enabled: true
    },
    {
      id: "zalo",
      name: "Zalo",
      url: "#",
      username: "0363.0.54321 - 0353.715.517",
      actionType: "copy",
      copyText: "0363.0.54321 - 0353.715.517",
      enabled: true
    },
    {
      id: "github",
      name: "GitHub",
      url: "#",
      username: "Chưa Cập Nhập",
      actionType: "link",
      enabled: true
    },
    {
      id: "phone",
      name: "Phone",
      url: "tel:0363054321",
      username: "0363.0.54321 - 0353.715.517",
      actionType: "phone",
      copyText: "0363.0.54321 - 0353.715.517",
      enabled: true
    },
    {
      id: "email",
      name: "Email",
      url: "#",
      username: "Chưa Cập Nhập",
      actionType: "link",
      enabled: true
    }
  ] as SocialItem[]
};
