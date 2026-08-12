import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Volume2 } from 'lucide-react';
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
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 select-none"
        >
          <div className="relative max-w-sm w-full space-y-6 flex flex-col items-center">
            
            {/* Pulsing Status Dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>READY TO CONNECT</span>
            </div>

            {/* Glowing Main Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                playSound('enter');
                onEnter();
              }}
              onMouseEnter={() => playSound('hover')}
              className="group relative px-8 py-4 rounded-3xl bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all flex items-center gap-3 cursor-pointer"
            >
              <div className="p-2 rounded-xl bg-black/20 text-black group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </div>
              <span>CLICK TO ENTER</span>
              <Sparkles className="w-4 h-4 text-black animate-pulse" />
            </motion.button>

            {/* Subtext info */}
            <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mono-font pt-2">
              <Volume2 className="w-3.5 h-3.5 text-purple-400" />
              <span>Enables synchronized background video & audio</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
