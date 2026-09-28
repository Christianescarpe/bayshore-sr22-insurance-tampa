'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Phone, ChevronDown, Menu, X, MapPin, FileCheck2 } from 'lucide-react';
import { COMPANY_INFO, getLocationPages } from '@/lib/content';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const locationPages = getLocationPages();

  const services = [
    { name: 'What is SR-22?', href: '/what-is-sr22/', desc: 'Certificate of Financial Responsibility explained' },
    { name: 'How to Get SR-22', href: '/how-to-get-an-sr22-in-tampa/', desc: 'Step-by-step license reinstatement guide' },
    { name: 'Non-Owners SR-22', href: '/non-owners-sr22-insurance/', desc: 'Affordable coverage for carless drivers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  }, [pathname]);

  const isServiceActive = services.some(s => pathname === s.href);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080c12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
        : 'bg-[#080c12] border-b border-white/5 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <Shield className="w-6 h-6 text-slate-950" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                BAYSHORE SR22
              </div>
              <div className="text-[10px] tracking-widest text-cyan-400 font-semibold uppercase">
                Insurance Tampa
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/' 
                  ? 'text-cyan-400 bg-white/5' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* SR-22 Insurance Dropdown with Services */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isServiceActive 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>SR-22 Insurance</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-80 bg-[#0c121c] border border-cyan-500/20 rounded-xl shadow-2xl p-2 z-50 animate-fade-in backdrop-blur-xl"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-cyan-400 uppercase border-b border-white/5 mb-1">
                    SR-22 Coverage Services
                  </div>
                  {services.map((svc) => {
                    const isActive = pathname === svc.href;
                    return (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className={`flex items-start space-x-3 p-2.5 rounded-lg text-xs font-medium transition-colors ${
                          isActive 
                            ? 'bg-cyan-500/10 text-cyan-400' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <FileCheck2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div>
                          <div className="font-semibold text-white">{svc.name}</div>
                          <div className="text-[11px] text-slate-400">{svc.desc}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                onClick={() => setLocationsOpen(!locationsOpen)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  pathname.includes('-fl') 
                    ? 'text-cyan-400 bg-white/5' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Service Areas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${locationsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
              </button>

              {locationsOpen && (
                <div
                  className="absolute top-full right-0 mt-1 w-72 bg-[#0c121c] border border-cyan-500/20 rounded-xl shadow-2xl p-2 z-50 grid grid-cols-1 gap-1 animate-fade-in backdrop-blur-xl"
                >
                  <div className="px-3 py-1.5 text-[11px] font-semibold tracking-wider text-cyan-400 uppercase border-b border-white/5">
                    Tampa Bay Communities
                  </div>
                  {locationPages.map((loc) => {
                    const cleanName = loc.page.replace(' (Location Page)', '');
                    const isLocActive = pathname === loc.url;
                    return (
                      <Link
                        key={loc.url}
                        href={loc.url}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                          isLocActive 
                            ? 'bg-cyan-500/10 text-cyan-400' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <MapPin className="w-3.5 h-3.5 text-cyan-400/80 flex-shrink-0" />
                        <span>{cleanName}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              href="/faq/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/faq/' 
                  ? 'text-cyan-400 bg-white/5' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact-us/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                pathname === '/contact-us/' 
                  ? 'text-cyan-400 bg-white/5' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Phone CTA Button ONLY */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="flex items-center space-x-2.5 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4 fill-slate-950" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneTel}`}
              className="p-2.5 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-md"
              title={`Call ${COMPANY_INFO.phone}`}
            >
              <Phone className="w-4 h-4 fill-slate-950" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 pb-6 space-y-3 animate-fade-in">
            <Link
              href="/"
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/'
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Home
            </Link>

            {/* Mobile SR-22 Services */}
            <div>
              <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                SR-22 Insurance Services
              </div>
              <div className="space-y-1 pl-2">
                {services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium ${
                      pathname === svc.href
                        ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {svc.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Service Areas */}
            <div>
              <div className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                Tampa Bay Service Areas
              </div>
              <div className="grid grid-cols-2 gap-1 px-2">
                {locationPages.map((loc) => {
                  const cleanName = loc.page.replace(' (Location Page)', '');
                  return (
                    <Link
                      key={loc.url}
                      href={loc.url}
                      className="px-3 py-1.5 text-xs text-slate-300 hover:text-cyan-400 rounded-md hover:bg-white/5 flex items-center space-x-1 truncate"
                    >
                      <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="truncate">{cleanName}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/faq/"
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/faq/'
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              FAQ
            </Link>

            <Link
              href="/contact-us/"
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium ${
                pathname === '/contact-us/'
                  ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile Phone CTA Button ONLY */}
            <div className="pt-2 px-2">
              <a
                href={`tel:${COMPANY_INFO.phoneTel}`}
                className="flex items-center justify-center space-x-2.5 w-full py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-transform"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
