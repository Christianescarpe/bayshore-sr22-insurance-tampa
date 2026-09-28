import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

interface CtaBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CtaBanner({
  title = "LET'S GET YOUR SR-22 FILED CORRECTLY TODAY",
  description = `Call ${COMPANY_INFO.phone} and one of our SR-22 specialists will walk you through your options in minutes. We answer questions fast and file paperwork faster.`,
  buttonText = `Call ${COMPANY_INFO.phone}`,
  buttonHref = `tel:${COMPANY_INFO.phoneTel}`
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-cyan-600 to-sky-700 py-16 sm:py-20 text-white text-center shadow-2xl">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] pointer-events-none" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
          {title}
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-cyan-50 font-normal leading-relaxed">
          {description}
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buttonHref}
            className="inline-flex items-center space-x-2.5 px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm sm:text-base shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
