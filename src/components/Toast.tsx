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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto px-4 py-3 rounded-xl bg-[#18181f]/95 dark:bg-[#18181f]/95 border border-[#38bdf8]/30 text-white shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs font-semibold"
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
