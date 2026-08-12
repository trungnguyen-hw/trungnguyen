import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  onCopied?: () => void;
  label?: string;
  className?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({ 
  textToCopy, 
  onCopied,
  label,
  className = "" 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    if (onCopied) onCopied();

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 dark:bg-white/5 dark:hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all ${className}`}
      title={`Sao chép ${label || textToCopy}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-emerald-400 text-[11px] font-medium">Đã chép</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-neutral-400" />
          {label && <span className="text-[11px] font-medium">{label}</span>}
        </>
      )}
    </button>
  );
};
