import React from 'react';
import { playSound } from '../utils/audio';
import { 
  AppleIphoneIcon, 
  ApplePhoneIcon, 
  AppleStackedDevicesIcon, 
  AppleMacBookIcon, 
  AppleOnlineIcon 
} from './BrandIcons';

const services = [
  {
    icon: AppleIphoneIcon,
    title: 'Mua Bán iPhone',
    detail: 'Ký Gửi',
  },
  {
    icon: ApplePhoneIcon,
    title: 'Số Điện thoại',
    detail: '0363.0.54321 · 0353.715.517',
    phones: [
      { label: '0363.0.54321', href: 'tel:0363054321' },
      { label: '0353.715.517', href: 'tel:0353715517' },
    ],
  },
  {
    icon: AppleStackedDevicesIcon,
    title: 'Nhận Cầm',
    detail: 'Điện Thoại · Máy Tính · Vàng Bạc',
  },
  {
    icon: AppleMacBookIcon,
    title: 'Hỗ trợ iPhone',
    detail: 'Từ XSM đến 17 Pro Max',
  },
  {
    icon: AppleOnlineIcon,
    title: 'Online 24/7',
    detail: 'Luôn sẵn sàng hỗ trợ',
    status: true,
  },
];

export const Services: React.FC = () => (
  <section className="services-section w-full" aria-labelledby="services-title">
    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
      <span className="services-rule" />
      <h2 id="services-title" className="text-sm sm:text-base font-medium tracking-wide text-slate-100">Services</h2>
      <span className="services-rule" />
    </div>

    <div className="services-grid">
      {services.map(({ icon: Icon, title, detail, phones, status }) => (
        <article 
          key={title} 
          className="service-card cursor-pointer"
          onMouseEnter={() => playSound('hover')}
        >
          <div className="service-icon shrink-0"><Icon aria-hidden="true" /></div>
          <div className="min-w-0 flex-1 text-left">
            <h3 className="service-title">{title}</h3>
            {phones ? (
              <div className="service-phones">
                {phones.map((phone, index) => (
                  <React.Fragment key={phone.href}>
                    {index > 0 && <span className="service-separator">·</span>}
                    <a 
                      href={phone.href} 
                      onClick={() => playSound('click')}
                      className="service-phone"
                    >
                      {phone.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <p className={`service-detail ${status ? 'service-online' : ''}`}>
                {status && <span className="service-status-dot" />}{detail}
              </p>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);
