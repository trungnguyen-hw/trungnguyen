import { useState, useEffect, useRef } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Profile } from './components/Profile';
import { VolumeButton } from './components/VolumeButton';
import { LoadingScreen } from './components/LoadingScreen';
import { EnterOverlay } from './components/EnterOverlay';
import { CustomCursor } from './components/CustomCursor';
import { Toast } from './components/Toast';
import { useToast } from './hooks/useToast';
import { PROFILE_DATA } from './data/profile';
import { Eye, CloudSun, Clock } from 'lucide-react';

// This lives outside the component so React StrictMode's development remount
// cannot send a second increment request for the same document load.
let hasRequestedViewIncrement = false;

export default function App() {
  const { toasts, showToast, removeToast } = useToast();
  
  // HTML5 Video Element Reference
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // User Interaction Entry State (Autoplay Compliance)
  const [isEntered, setIsEntered] = useState(false);

  // Realtime Clock State
  const [timeStr, setTimeStr] = useState('');

  // The API is the sole source of truth. We deliberately do not use a frontend
  // fallback value, so the initial database value is never hard-coded here.
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    if (hasRequestedViewIncrement) return;
    hasRequestedViewIncrement = true;

    const incrementViews = async () => {
      try {
        const response = await fetch('/api/views', {
          method: 'POST',
          cache: 'no-store',
        });

        if (!response.ok) return;
        const data: unknown = await response.json();
        if (
          typeof data === 'object' &&
          data !== null &&
          'views' in data &&
          typeof data.views === 'number'
        ) {
          setViews(data.views);
        }
      } catch {
        // A counter outage must never prevent the profile page from loading.
      }
    };

    void incrementViews();
  }, []);

  // Mouse Parallax Offsets: Background 5px, Profile -2px
  const [parallax, setParallax] = useState({
    bgX: 0, bgY: 0,
    profileX: 0, profileY: 0
  });

  useEffect(() => {
    // Realtime Clock Update
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Mouse Parallax Calculation (Desktop Only)
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const normX = (e.clientX - centerX) / centerX;
      const normY = (e.clientY - centerY) / centerY;

      setParallax({
        bgX: normX * 5,
        bgY: normY * 5,
        profileX: normX * -2,
        profileY: normY * -2
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Handle User Click to Enter -> Start Video & Synchronized Embedded Audio
  const handleEnterSite = () => {
    setIsEntered(true);
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.debug('Autoplay fallback error:', err);
      });
    }
  };

  return (
    <div 
      className="relative w-full max-w-full min-h-screen min-h-dvh overflow-x-hidden bg-[#0a0d12] text-[#f5f7fa] font-sans select-none flex flex-col justify-between gap-4 sm:gap-6 md:gap-8 p-3 xs:p-4 sm:p-6 md:p-8"
      style={{
        paddingTop: 'max(0.75rem, var(--sat))',
        paddingBottom: 'max(0.75rem, var(--sab))',
        paddingLeft: 'max(0.75rem, var(--sal))',
        paddingRight: 'max(0.75rem, var(--sar))'
      }}
    >
      
      {/* 1. Initial Fast Loading Screen */}
      <LoadingScreen />

      {/* 2. User Entry Overlay (Browser Autoplay Compliance) */}
      <EnterOverlay isVisible={!isEntered} onEnter={handleEnterSite} />

      {/* 3. Fullscreen Synchronized Background Video Layer (z-0 to z-2) */}
      <BackgroundVideo 
        videoRef={videoRef}
        parallaxOffset={{ bgX: parallax.bgX, bgY: parallax.bgY }} 
        videoSrc="/videoapple2.mp4"
        showRain={true}
      />

      {/* 4. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 5. Top Floating Bar (HUD Controls: Volume Button, Clock, Weather, Views) */}
      <header className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto pointer-events-none gap-2 min-w-0 max-w-full">
        
        {/* Top-Left: Volume Button & Floating Clock/Weather Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 pointer-events-auto">
          <VolumeButton videoRef={videoRef} />

          {/* Live Clock Badge (Fluid Responsive) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl glass-hud-subtle text-[11px] sm:text-xs md:text-sm text-slate-200 shrink-0">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-200 shrink-0" />
            <span>{timeStr || '12:48 AM'}</span>
          </div>

          {/* Weather Badge (Visible on sm and up) */}
          {PROFILE_DATA.weather && (
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl glass-hud-subtle text-[11px] sm:text-xs md:text-sm text-slate-200">
              <CloudSun className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{PROFILE_DATA.weather}</span>
            </div>
          )}
        </div>

        {/* Top-Right: Views Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl glass-hud-subtle text-[11px] sm:text-xs md:text-sm text-slate-300 pointer-events-auto shrink-0">
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-200 shrink-0" />
          <span>{views === null ? '…' : views} views</span>
        </div>

      </header>

      {/* 6. Centerpiece Floating Profile (z-10, overflow-visible) */}
      <main className="relative z-10 my-auto flex flex-col items-center justify-center overflow-visible w-full py-2 sm:py-4">
        <Profile 
          onShowToast={showToast}
          parallaxOffset={{ profileX: parallax.profileX, profileY: parallax.profileY }}
        />
      </main>

      {/* 7. Bottom Minimal Footer Bar (z-20) */}
      <footer className="relative z-20 flex flex-wrap items-center justify-between gap-2.5 w-full max-w-6xl mx-auto pt-2 sm:pt-4 shrink-0">
        <div className="apple-pill flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs text-emerald-300 font-medium shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 status-pulse shrink-0" />
          <span>ONLINE</span>
        </div>

        <div className="apple-pill px-3 py-1 rounded-full text-[11px] sm:text-xs text-slate-100 font-medium shadow-md" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.9)' }}>
          © 2026 HOÀN RÙA ICLOUD
        </div>
      </footer>

      {/* 8. Toast Haptics Overlay */}
      <Toast toasts={toasts} onRemove={removeToast} />

    </div>
  );
}
