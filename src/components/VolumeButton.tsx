import React, { useState, useEffect } from 'react';
import type { RefObject } from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { playSound } from '../utils/audio';

interface VolumeButtonProps {
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const VolumeButton: React.FC<VolumeButtonProps> = ({ videoRef }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
    }
  }, [videoRef, volume, isMuted]);

  const handleToggleMute = () => {
    playSound('click');
    if (!videoRef.current) return;
    const nextMuteState = !videoRef.current.muted;
    videoRef.current.muted = nextMuteState;
    setIsMuted(nextMuteState);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      if (val === 0) {
        videoRef.current.muted = true;
        setIsMuted(true);
      } else {
        videoRef.current.muted = false;
        setIsMuted(false);
      }
    }
  };

  return (
    <div 
      className="relative flex items-center gap-2 pointer-events-auto"
      onMouseEnter={() => setShowSlider(true)}
      onMouseLeave={() => setShowSlider(false)}
    >
      <button
        onClick={handleToggleMute}
        onMouseEnter={() => playSound('hover')}
        className={`p-2.5 rounded-xl glass-hud-subtle border border-white/10 transition-all shadow-lg flex items-center justify-center ${
          isMuted ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'text-neutral-300 hover:text-white hover:border-purple-400/50'
        }`}
        title={isMuted ? 'Bật âm thanh video' : 'Tắt âm thanh video'}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : volume < 0.5 ? (
          <Volume1 className="w-4 h-4 text-purple-400" />
        ) : (
          <Volume2 className="w-4 h-4 text-purple-400" />
        )}
      </button>

      {/* Floating Volume Slider Popup */}
      {showSlider && (
        <div className="absolute left-12 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl glass-hud border border-white/15 shadow-xl flex items-center gap-2 animate-fadeIn z-30">
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-purple-400"
          />
          <span className="text-[10px] font-mono text-neutral-300 min-w-[24px]">
            {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
          </span>
        </div>
      )}
    </div>
  );
};
