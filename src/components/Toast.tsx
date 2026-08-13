import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';
import type { ToastMessage } from '../hooks/useToast';

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts }) => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 sm:left-auto right-auto sm:right-6 -translate-x-1/2 sm:translate-x-0 z-50 flex flex-col items-center sm:items-end gap-2 pointer-events-none max-w-[92vw] sm:max-w-md w-full sm:w-auto">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-[#18181f]/95 border border-[#38bdf8]/30 text-white shadow-2xl backdrop-blur-md flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold max-w-full"
          >
            {toast.type === 'info' ? (
              <Info className="w-4 h-4 text-[#38bdf8]" />
            ) : (
              <CheckCircle className="w-4 h-4 text-emerald-400" />
            )}
            <span>{toast.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
