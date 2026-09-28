import React from 'react';
import { ShieldCheck, Clock, Phone, MapPin, CheckCircle, FileCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

export default function RibbonTicker() {
  const items = [
    { icon: ShieldCheck, text: 'FLHSMV DIRECT ELECTRONIC FILING' },
    { icon: Clock, text: 'SAME-DAY QUOTES & SUBMISSION' },
    { icon: Phone, text: `CALL ${COMPANY_INFO.phone}` },
    { icon: CheckCircle, text: 'OWNER & NON-OWNER POLICIES' },
    { icon: MapPin, text: 'SERVING THE ENTIRE TAMPA BAY AREA' },
    { icon: FileCheck, text: 'ACCURATE FIRST-TIME FILING GUARANTEE' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 py-3 shadow-lg shadow-cyan-500/20 text-slate-950 font-bold uppercase text-xs sm:text-sm tracking-wider select-none border-y border-cyan-300/30">
      <div className="flex w-[200%] animate-marquee">
        {/* First set */}
        <div className="flex items-center space-x-8 sm:space-x-12 shrink-0">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center space-x-2">
                <Icon className="w-4 h-4 text-slate-950" />
                <span className="whitespace-nowrap">{item.text}</span>
                <span className="text-slate-950/40 ml-6">•</span>
              </div>
            );
          })}
        </div>
        {/* Duplicate set for seamless infinite loop */}
        <div className="flex items-center space-x-8 sm:space-x-12 shrink-0 ml-8 sm:ml-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={`dup-${idx}`} className="flex items-center space-x-2">
                <Icon className="w-4 h-4 text-slate-950" />
                <span className="whitespace-nowrap">{item.text}</span>
                <span className="text-slate-950/40 ml-6">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
