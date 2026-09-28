import React from 'react';
import { 
  FileCheck2, 
  Car, 
  HelpCircle, 
  MapPin, 
  Clock, 
  ShieldAlert, 
  FileText,
  LucideIcon 
} from 'lucide-react';

export interface ServiceCardItem {
  title: string;
  description: string;
  iconName?: 'file' | 'car' | 'faq' | 'map' | 'clock' | 'alert' | 'check';
}

interface ServicesGridSectionProps {
  subtitle?: string;
  title: string;
  items: ServiceCardItem[];
  introHtml?: string;
}

const iconMap: Record<string, LucideIcon> = {
  file: FileCheck2,
  car: Car,
  faq: HelpCircle,
  map: MapPin,
  clock: Clock,
  alert: ShieldAlert,
  check: FileText,
};

export default function ServicesGridSection({
  subtitle,
  title,
  items,
  introHtml
}: ServicesGridSectionProps) {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* 4-Card Grid matching template Section 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const Icon = (item.iconName && iconMap[item.iconName]) || FileCheck2;
            return (
              <div
                key={idx}
                className="glow-card group flex flex-col justify-between rounded-2xl bg-[#0c121d] border border-white/10 p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div>
                  {/* Glowing Circular Icon matching template */}
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/25 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
