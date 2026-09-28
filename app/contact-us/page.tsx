import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, COMPANY_INFO } from '@/lib/content';
import { Phone, MapPin, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

const pageData = getPageBySlug('contact-us')!;

export const metadata: Metadata = {
  title: pageData.seoTitle.split(/ [|\-–—] /)[0].trim(),
  description: pageData.metaDescription,
};

export default function ContactUsPage() {
  const readySection = pageData.sections.find(s => s.heading.includes('What to Have Ready'));
  const afterReachSection = pageData.sections.find(s => s.heading.includes('What Happens After You Reach Out'));
  const responseTimeSection = pageData.sections.find(s => s.heading.includes('How Quickly We Respond'));
  const commitmentSection = pageData.sections.find(s => s.heading.includes('Our Commitment to You'));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection
        title={pageData.h1}
        category="// SPEAK DIRECTLY WITH A LOCAL SPECIALIST"
        introHtml={pageData.introHtml}
        imageSrc="/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp"
        imageAlt="Contact Bayshore SR22 Insurance Tampa specialists"
        pills={[
          'No Automated Menus',
          'Fast Electronic Filing',
          'Free No-Pressure Quotes'
        ]}
      />

      <RibbonTicker />

      {/* Direct Contact Details Section - NO FORMS */}
      <section className="py-16 sm:py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-6 space-y-8">
              
              <div className="space-y-4">
                <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase">
                  DIRECT PHONE & OFFICE
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                  Visit or Call Our Tampa Office
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Every call is answered by someone who actually understands Florida SR-22 filings &mdash; not a general call center reading from a script.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phoneTel}`}
                  className="glow-card flex items-center space-x-4 p-6 rounded-2xl bg-[#0c121e] border border-white/10 hover:border-cyan-400/50 transition-all block group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 fill-cyan-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Direct Specialist Line</div>
                    <div className="text-xl sm:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">{COMPANY_INFO.phone}</div>
                    <div className="text-xs text-cyan-400 mt-0.5">Click to call &bull; Free instant quote & consultation</div>
                  </div>
                </a>

                <div className="glow-card flex items-start space-x-4 p-6 rounded-2xl bg-[#0c121e] border border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Office Address</div>
                    <div className="text-base sm:text-lg font-bold text-white">{COMPANY_INFO.address}</div>
                    <div className="text-xs text-slate-400 mt-1">Tampa, Hillsborough County, FL</div>
                  </div>
                </div>
              </div>

              {/* What to Have Ready */}
              {readySection && (
                <div className="rounded-2xl bg-[#0d1422] border border-white/10 p-6 sm:p-8 space-y-3">
                  <h3 className="text-base font-bold text-white uppercase flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span>{readySection.heading}</span>
                  </h3>
                  <div 
                    className="sheet-prose text-xs sm:text-sm text-slate-300"
                    dangerouslySetInnerHTML={{ __html: readySection.content }}
                  />
                </div>
              )}

            </div>

            {/* Right: What Happens After You Call & Response Time */}
            <div className="lg:col-span-6 space-y-6">
              
              {afterReachSection && (
                <div className="glow-card rounded-2xl bg-[#0c121e] border border-white/10 p-6 sm:p-8 space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    <span>{afterReachSection.heading}</span>
                  </h3>
                  <div 
                    className="sheet-prose text-xs sm:text-sm text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: afterReachSection.content }}
                  />
                  <div className="pt-2">
                    <a
                      href={`tel:${COMPANY_INFO.phoneTel}`}
                      className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95"
                    >
                      <Phone className="w-4 h-4 fill-slate-950" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              )}

              {responseTimeSection && (
                <div className="glow-card rounded-2xl bg-[#0c121e] border border-white/10 p-6 sm:p-8 space-y-3">
                  <h3 className="text-base font-bold text-white uppercase flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-cyan-400" />
                    <span>{responseTimeSection.heading}</span>
                  </h3>
                  <div 
                    className="sheet-prose text-xs sm:text-sm text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: responseTimeSection.content }}
                  />
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Commitment Section */}
      {commitmentSection && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-[#080d16]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center">
              <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
                LOCAL EXPERTISE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                {commitmentSection.heading}
              </h2>
            </div>
            <div 
              className="sheet-prose text-slate-300 text-sm sm:text-base leading-relaxed rounded-2xl bg-[#0c121e] p-6 sm:p-8 border border-white/10"
              dangerouslySetInnerHTML={{ __html: commitmentSection.content }}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title="REACH OUT TODAY"
        description={`Don't wait on a suspended license longer than you have to. Call ${COMPANY_INFO.phone} now, and let's get your SR-22 filed correctly and affordably.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
