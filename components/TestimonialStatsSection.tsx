import React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
}

interface TestimonialStatsSectionProps {
  subtitle?: string;
  title: string;
  quoteText: string;
  authorTitle?: string;
  imageMain: string;
  imageSmall?: string;
  stats?: StatItem[];
}

export default function TestimonialStatsSection({
  subtitle = 'OUR COMMITMENT TO TAMPA DRIVERS',
  title,
  quoteText,
  authorTitle = 'Bayshore SR22 Insurance Tampa • Local Specialists',
  imageMain,
  imageSmall,
  stats = [
    { value: '100%', label: 'Direct FLHSMV Submission' },
    { value: '1-DAY', label: 'Electronic Processing' },
    { value: '10+', label: 'Tampa Bay Service Areas' },
    { value: '3-YEAR', label: 'Continuous Filing Support' },
  ]
}: TestimonialStatsSectionProps) {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative overflow-hidden bg-[#070b10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {subtitle && (
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              {subtitle}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
            {title}
          </h2>
        </div>

        {/* Main Content: Split Quote and Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Images */}
          <div className="lg:col-span-5 flex items-center space-x-4">
            {imageSmall && (
              <div className="relative aspect-[3/4] w-1/3 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src={imageSmall}
                  alt="SR22 documentation support"
                  fill
                  sizes="(max-width: 1024px) 33vw, 15vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className={`relative aspect-square ${imageSmall ? 'w-2/3' : 'w-full'} rounded-2xl overflow-hidden border border-white/10 shadow-2xl`}>
              <Image
                src={imageMain}
                alt="Bayshore SR22 insurance service"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c12]/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Quote Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative">
              <Quote className="w-10 h-10 text-cyan-500/30 mb-2 rotate-180" />
              <blockquote className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
                &ldquo;{quoteText}&rdquo;
              </blockquote>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-white/10 gap-4">
              <div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {authorTitle}
                </div>
                <div className="text-xs text-slate-400">
                  Dedicated High-Risk Auto & Non-Owner Specialists
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 4 Large Stats Banner matching template */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-16 sm:pt-20 border-t border-white/10 mt-16 sm:mt-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cyan-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
