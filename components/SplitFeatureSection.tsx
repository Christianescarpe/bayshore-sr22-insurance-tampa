import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

interface SplitFeatureSectionProps {
  subtitle?: string;
  title: string;
  contentHtml: string;
  imageLeft: string;
  imageAltLeft: string;
  imageRight?: string;
  imageAltRight?: string;
  ctaText?: string;
  ctaHref?: string;
  pills?: string[];
}

export default function SplitFeatureSection({
  subtitle,
  title,
  contentHtml,
  imageLeft,
  imageAltLeft,
  imageRight,
  imageAltRight,
  ctaText = `Call ${COMPANY_INFO.phone}`,
  ctaHref = `tel:${COMPANY_INFO.phoneTel}`,
  pills
}: SplitFeatureSectionProps) {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          {subtitle && (
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              {subtitle}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* Asymmetric Split Layout matching template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Large Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c121c]">
              <Image
                src={imageLeft}
                alt={imageAltLeft}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c12]/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right/Middle Content & Secondary Image */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Text Area */}
              <div className={imageRight ? 'sm:col-span-7 space-y-4' : 'sm:col-span-12 space-y-4'}>
                <div 
                  className="sheet-prose text-sm sm:text-base text-slate-300 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

                <div className="pt-2">
                  <a
                    href={ctaHref}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                  >
                    <Phone className="w-3.5 h-3.5 fill-slate-950" />
                    <span>{ctaText}</span>
                  </a>
                </div>
              </div>

              {/* Smaller Secondary Image if provided */}
              {imageRight && (
                <div className="sm:col-span-5">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border border-white/10 shadow-xl bg-[#0c121c]">
                    <Image
                      src={imageRight}
                      alt={imageAltRight || 'Insurance verification'}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Angled line motif from template */}
            <div className="relative py-2">
              <svg className="w-full h-8 text-cyan-400/40" viewBox="0 0 500 24" fill="none" preserveAspectRatio="none">
                <path d="M0 20 L250 4 L450 18 L500 2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>
            </div>

            {/* Feature Pills */}
            {pills && pills.length > 0 && (
              <div className="flex flex-wrap gap-2.5 pt-2">
                {pills.map((pill, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#0d1420] border border-cyan-500/20 text-slate-200 text-xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
