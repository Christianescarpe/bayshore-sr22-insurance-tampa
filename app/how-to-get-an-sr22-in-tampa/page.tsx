import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

const pageData = getPageBySlug('how-to-get-an-sr22-in-tampa')!;

export const metadata: Metadata = {
  title: cleanSeoTitle(pageData.seoTitle),
  description: pageData.metaDescription,
};

export default function HowToGetSr22Page() {
  const steps = pageData.sections.filter(s => s.heading.startsWith('Step '));
  const timelineSection = pageData.sections.find(s => s.heading.includes('How Long the Process Takes'));
  const mistakesSection = pageData.sections.find(s => s.heading.includes('Common Mistakes'));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection
        title={pageData.h1}
        category="// STEP-BY-STEP REINSTATEMENT GUIDE"
        introHtml={pageData.introHtml}
        imageSrc="/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp"
        imageAlt="How to get an SR-22 in Tampa filing process"
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          '7-Step Reinstatement Roadmap',
          'Same-Day FLHSMV Submission',
          'Avoid Costly Filing Errors'
        ]}
      />

      <RibbonTicker />

      {/* Steps Roadmap Section */}
      <section className="py-16 sm:py-24 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
              THE 7-STEP WALKTHROUGH
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
              From Notice to License Reinstatement
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base">
              Follow these straightforward steps to satisfy your Florida requirement without unnecessary delays or overpaying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="glow-card rounded-2xl bg-[#0c121e] border border-white/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 font-black text-sm flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      Action Required
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {step.heading}
                  </h3>

                  <div 
                    className="sheet-prose text-xs sm:text-sm text-slate-300 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: step.content }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Split Feature: Timeline and Local Help */}
      {timelineSection && (
        <SplitFeatureSection
          subtitle="PROCESSING SPEED"
          title={timelineSection.heading}
          contentHtml={timelineSection.content}
          imageLeft="/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp"
          imageAltLeft="SR-22 turnaround time and fee processing"
          imageRight="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
          imageAltRight="Florida license reinstatement authorization"
          ctaText={`Call ${COMPANY_INFO.phone}`}
          ctaHref={`tel:${COMPANY_INFO.phoneTel}`}
          pills={[
            'Same-Day Electronic Submission',
            'FLHSMV System Sync in 24-48 Hours',
            'No Physical DMV Lines Required'
          ]}
        />
      )}

      {/* Mistakes to Avoid */}
      {mistakesSection && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-[#080d16]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">
                PROTECT YOUR PROGRESS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
                {mistakesSection.heading}
              </h2>
            </div>

            <div className="rounded-2xl bg-[#0d1422] border border-white/10 p-6 sm:p-8">
              <div 
                className="sheet-prose text-slate-300 text-sm sm:text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: mistakesSection.content }}
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title="READY TO GET STARTED TODAY?"
        description={`Call ${COMPANY_INFO.phone} now. Our Tampa SR-22 specialists will quote your policy, bind coverage, and file your certificate electronically.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
