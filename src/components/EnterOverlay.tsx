import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import { playSound } from '../utils/audio';

interface EnterOverlayProps {
  isVisible: boolean;
  onEnter: () => void;
}

export const EnterOverlay: React.FC<EnterOverlayProps> = ({ isVisible, onEnter }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-slate-950/65 backdrop-blur-md flex flex-col items-center justify-center text-center p-4 sm:p-6 select-none"
        >
          <div className="relative max-w-[92vw] sm:max-w-sm w-full space-y-5 sm:space-y-6 flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-xl text-[11px] sm:text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>READY TO CONNECT</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                playSound('enter');
                onEnter();
              }}
              onMouseEnter={() => playSound('hover')}
              className="group relative px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-gradient-to-b from-white to-slate-200 text-slate-900 font-semibold text-xs sm:text-sm md:text-base tracking-wide shadow-[0_12px_35px_rgba(0,0,0,0.32)] hover:shadow-[0_16px_42px_rgba(0,0,0,0.42)] transition-all flex items-center gap-2.5 sm:gap-3 cursor-pointer touch-manipulation"
            >
              <div className="p-2 rounded-xl bg-black/20 text-black group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>CLICK TO ENTER</span>
            </motion.button>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-300 pt-2">
              <Volume2 className="w-3.5 h-3.5 text-sky-200" />
              <span>Enables synchronized background video & audio</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
