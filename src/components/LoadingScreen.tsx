import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return prev + 5;
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] bg-[#08080c] flex flex-col items-center justify-center pointer-events-none select-none p-4"
        >
          {/* Ambient Background Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-purple-600/15 blur-[100px] animate-pulse" />

          {/* Minimal Glass Floating Pill Container */}
          <div className="relative px-8 py-6 rounded-3xl glass-hud border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col items-center gap-4 text-center">
            
            {/* Top Minimal Loading Ring */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/20" />
              <div 
                className="absolute inset-0 rounded-full border-2 border-purple-400 border-t-transparent animate-spin"
                style={{ animationDuration: '0.8s' }}
              />
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </div>

            {/* Title & Progress Percentage */}
            <div className="space-y-1">
              <div className="mono-font text-xs font-bold tracking-[0.25em] uppercase text-white flex items-center gap-2">
                <span>IDENTITY INITIALIZING</span>
                <span className="text-purple-400 font-extrabold">{progress}%</span>
              </div>
              <div className="text-[10px] text-neutral-400 mono-font tracking-wider">
                LOADING ASSETS & ATMOSPHERE
              </div>
            </div>

            {/* Minimal Progress Bar Line */}
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-500 rounded-full transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
