import React from 'react';
import Image from 'next/image';

export interface GridCardItem {
  title: string;
  description: string;
  imageSrc?: string;
  badge?: string;
}

interface CardGridSectionProps {
  subtitle?: string;
  title: string;
  cards: GridCardItem[];
  introHtml?: string;
}

export default function CardGridSection({
  subtitle,
  title,
  cards,
  introHtml
}: CardGridSectionProps) {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {subtitle && (
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              {subtitle}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
            {title}
          </h2>
          {introHtml && (
            <div 
              className="sheet-prose mt-4 text-slate-300 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: introHtml }}
            />
          )}
        </div>

        {/* 4-Card Grid matching template */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="glow-card group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0d1420] p-5 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Image if available */}
                {card.imageSrc && (
                  <div className="relative aspect-[16/10] w-full mb-4 overflow-hidden rounded-xl bg-slate-900">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-transparent opacity-60" />
                  </div>
                )}

                {card.badge && (
                  <span className="inline-block text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                    {card.badge}
                  </span>
                )}

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
