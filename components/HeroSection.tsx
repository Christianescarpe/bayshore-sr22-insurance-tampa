import React from 'react';
import Image from 'next/image';
import { Phone, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/content';

interface HeroSectionProps {
  title: string;
  category?: string;
  introHtml?: string;
  imageSrc: string;
  imageAlt: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  pills?: string[];
}

export default function HeroSection({
  title,
  category = 'SR-22 INSURANCE SPECIALISTS',
  introHtml,
  imageSrc,
  imageAlt,
  primaryCtaText = `Call ${COMPANY_INFO.phone}`,
  primaryCtaHref = `tel:${COMPANY_INFO.phoneTel}`,
  pills = ['Direct FLHSMV Filing', 'Same-Day Submission', 'Owner & Non-Owner']
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/5">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{category}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight sm:leading-tight">
              {title}
            </h1>

            {/* Intro paragraphs from sheet */}
            {introHtml ? (
              <div 
                className="sheet-prose text-base sm:text-lg text-slate-300 font-normal leading-relaxed"
                dangerouslySetInnerHTML={{ __html: introHtml }}
              />
            ) : null}

            {/* ONLY Phone CTA Button */}
            <div className="pt-2 flex items-center">
              <a
                href={primaryCtaHref}
                className="inline-flex items-center space-x-3 px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-xl shadow-cyan-500/20 hover:shadow-cyan-400/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>{primaryCtaText}</span>
              </a>
            </div>

            {/* Subtle decorative curved line indicator */}
            <div className="relative py-2 hidden sm:block">
              <div className="w-48 h-px bg-gradient-to-r from-cyan-500/50 via-cyan-400/20 to-transparent" />
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {pills.map((pill, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0f1725] border border-white/10 text-slate-300 text-xs font-medium"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{pill}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Image with framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 to-sky-500/10 rounded-3xl blur-md opacity-75" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d131f] shadow-2xl">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c12]/80 via-transparent to-transparent" />
                </div>

                {/* Floating badge inside image card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#080c12]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                      <Zap className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wider">Fast FLHSMV Filing</div>
                      <div className="text-[11px] text-slate-400">Direct electronic certificate submission</div>
                    </div>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
