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

export default function App() {
  const { toasts, showToast, removeToast } = useToast();
  
  // HTML5 Video Element Reference
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // User Interaction Entry State (Autoplay Compliance)
  const [isEntered, setIsEntered] = useState(false);

  // Realtime Clock State
  const [timeStr, setTimeStr] = useState('');

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
    <div className="relative w-full h-full min-h-svh h-svh overflow-hidden bg-[#08080c] text-[#f8fafc] font-sans select-none flex flex-col justify-between p-3.5 sm:p-6">
      
      {/* 1. Initial Fast Loading Screen */}
      <LoadingScreen />

      {/* 2. User Entry Overlay (Browser Autoplay Compliance) */}
      <EnterOverlay isVisible={!isEntered} onEnter={handleEnterSite} />

      {/* 3. Fullscreen Synchronized Background Video Layer (z-0 to z-2) */}
      <BackgroundVideo 
        videoRef={videoRef}
        parallaxOffset={{ bgX: parallax.bgX, bgY: parallax.bgY }} 
        videoSrc="/video_nen.mp4"
        showRain={true}
      />

      {/* 4. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 5. Top Floating Bar (HUD Controls: Volume Button, Clock, Weather, Views) */}
      <header className="relative z-20 flex items-center justify-between w-full max-w-6xl mx-auto pointer-events-none">
        
        {/* Top-Left: Volume Button & Floating Clock/Weather Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto">
          <VolumeButton videoRef={videoRef} />

          {/* Live Clock Badge (Fluid Responsive) */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl glass-hud-subtle border border-white/10 text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-mono text-neutral-300">
            <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
            <span>{timeStr || '12:48 AM'}</span>
          </div>

          {/* Weather Badge */}
          {PROFILE_DATA.weather && (
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-hud-subtle border border-white/10 text-xs md:text-sm font-mono text-neutral-300">
              <CloudSun className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{PROFILE_DATA.weather}</span>
            </div>
          )}
        </div>

        {/* Top-Right: Views Indicator */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 rounded-xl glass-hud-subtle border border-white/10 text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-mono text-neutral-400 pointer-events-auto">
          <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400 shrink-0" />
          <span>{PROFILE_DATA.views} views</span>
        </div>

      </header>

      {/* 6. Centerpiece Floating Profile (z-10, overflow-visible) */}
      <main className="relative z-10 my-auto flex flex-col items-center justify-center overflow-visible w-full">
        <Profile 
          onShowToast={showToast}
          parallaxOffset={{ profileX: parallax.profileX, profileY: parallax.profileY }}
        />
      </main>

      {/* 7. Bottom Minimal Footer Bar (z-20) */}
      <footer className="relative z-20 flex items-end justify-between w-full max-w-6xl mx-auto pointer-events-none">
        <div className="text-[10px] sm:text-xs md:text-sm text-neutral-400 font-mono pointer-events-auto flex items-center gap-1.5 sm:gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span>ONLINE & CONNECTED</span>
        </div>

        {/* Footer Name: 2026 TRUNG NGUYỄN */}
        <div className="text-[10px] sm:text-xs md:text-sm text-neutral-500 font-mono pointer-events-auto">
          © 2026 TRUNG NGUYỄN
        </div>
      </footer>

      {/* 8. Toast Haptics Overlay */}
      <Toast toasts={toasts} onRemove={removeToast} />

    </div>
  );
}
