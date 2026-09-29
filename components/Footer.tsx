import React from 'react';
import Link from 'next/link';
import { Shield, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, getLocationPages } from '@/lib/content';

export default function Footer() {
  const locationPages = getLocationPages();

  return (
    <footer className="bg-[#05080d] border-t border-white/10 text-slate-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PROMINENT GOOGLE MAP SECTION AS REQUIRED */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 bg-[#0d131f] shadow-2xl p-4 sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-1">
                <MapPin className="w-4 h-4" />
                <span>Visit Our Tampa Office</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                {COMPANY_INFO.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {COMPANY_INFO.address} • Call <a href={`tel:${COMPANY_INFO.phoneTel}`} className="text-cyan-400 hover:underline">{COMPANY_INFO.phone}</a>
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={COMPANY_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-xl overflow-hidden border border-white/10 shadow-inner bg-slate-900">
            <iframe
              src={COMPANY_INFO.mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Bayshore SR22 Insurance Tampa Office Location"
              className="w-full h-full filter contrast-105"
            />
          </div>
        </div>

        {/* Footer Columns matching template */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-cyan-500/20">
                <Shield className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-base font-bold text-white tracking-tight uppercase group-hover:text-cyan-400 transition-colors">
                Bayshore SR22 Insurance
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Helping high-risk drivers across Tampa and the Tampa Bay Area find affordable SR-22 coverage and get filings submitted correctly the first time.
            </p>

            <div className="pt-2 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>1012 N Howard Ave ste 105, Tampa, FL 33607, United States</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneTel}`} className="hover:text-cyan-400 font-semibold transition-colors">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/what-is-sr22/" className="hover:text-cyan-400 transition-colors">What is SR-22?</Link>
              </li>
              <li>
                <Link href="/how-to-get-an-sr22-in-tampa/" className="hover:text-cyan-400 transition-colors">How to Get SR-22</Link>
              </li>
              <li>
                <Link href="/non-owners-sr22-insurance/" className="hover:text-cyan-400 transition-colors">Non-Owners SR-22</Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-cyan-400 transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Location Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Tampa Bay Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
              {locationPages.map((loc) => {
                const name = loc.page.replace(' (Location Page)', '');
                return (
                  <Link
                    key={loc.url}
                    href={loc.url}
                    className="hover:text-cyan-400 transition-colors truncate"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Official Resources & CTA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              State Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://www.flhsmv.gov/insurance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>FLHSMV Insurance</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/contact-us/" className="hover:text-cyan-400 transition-colors">
                  Office Location & Hours
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="inline-flex items-center space-x-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-3.5 py-2 rounded-lg transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span>Call (656) 206-5888</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bayshore SR22 Insurance Tampa. All rights reserved.</p>
          <div className="flex space-x-6 text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Privacy & Terms</Link>
            <Link href="/contact-us/" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
