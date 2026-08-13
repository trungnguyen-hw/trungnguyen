import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import type { TimelineMilestone } from '../data/profileData';
import { playSound } from '../utils/audio';

interface CareerTimelineProps {
  timeline: TimelineMilestone[];
}

export const CareerTimeline: React.FC<CareerTimelineProps> = ({ timeline }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    playSound('click');
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="relative max-w-4xl mx-auto space-y-6">
      
      {/* Central Line for Large Screens */}
      <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 bg-gradient-to-b from-[var(--accent-primary)] via-white/20 to-transparent -translate-x-1/2 hidden md:block" />

      {timeline.map((item, idx) => {
        const isExpanded = expandedIndex === idx;
        const isEven = idx % 2 === 0;

        return (
          <div 
            key={idx} 
            className={`relative flex flex-col md:flex-row items-center ${
              isEven ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Node Badge */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#121218] border-2 border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)] z-10 shadow-lg shadow-[var(--accent-glow)]">
              <Briefcase className="w-4 h-4" />
            </div>

            {/* Timeline Content Card */}
            <div className="w-full md:w-[46%] pl-10 sm:pl-12 md:pl-0">
              <div 
                onClick={() => toggleExpand(idx)}
                onMouseEnter={() => playSound('hover')}
                className="glass-panel rounded-2xl border border-[var(--border-color)] hover:border-[var(--border-hover)] bg-[#121218] p-5 cursor-pointer transition-all duration-300 shadow-xl space-y-3"
              >
                
                <div className="flex items-center justify-between">
                  <span className="badge badge-online text-[10px] font-mono">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                  <div className="p-1 rounded-lg bg-white/5 text-[var(--text-muted)]">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>

                <div>
                  <h3 className="display-font text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--accent-primary)] font-semibold mt-0.5">
                    <span>{item.company}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-secondary)] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[var(--text-muted)]" /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

                {/* Collapsible Key Achievements */}
                {isExpanded && (
                  <div className="pt-3 border-t border-white/10 space-y-2 animate-fadeIn">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      Key Impact Highlights
                    </div>
                    <ul className="space-y-1.5 text-xs text-[var(--text-primary)]">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>

          </div>
        );
      })}

    </div>
  );
};
