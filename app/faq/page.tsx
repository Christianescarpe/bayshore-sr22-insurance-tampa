import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

const pageData = getPageBySlug('faq')!;

export const metadata: Metadata = {
  title: cleanSeoTitle(pageData.seoTitle),
  description: pageData.metaDescription,
};

export default function FaqPage() {
  const faqItems = pageData.sections
    .filter(s => !s.heading.includes('Still Have Questions'))
    .map(s => ({
      question: s.heading,
      answerHtml: s.content
    }));

  const stillHaveQuestionsSection = pageData.sections.find(s => s.heading.includes('Still Have Questions'));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection
        title={pageData.h1}
        category="// ANSWERS & GUIDANCE"
        introHtml={pageData.introHtml}
        imageSrc="/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp"
        imageAlt="SR-22 frequently asked questions"
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          'Filing Timelines & Costs',
          'Owner vs Non-Owner Rules',
          'Lapse & Reinstatement Laws'
        ]}
      />

      <RibbonTicker />

      {/* Interactive FAQ Accordion */}
      <FaqAccordion
        title="Frequently Asked Questions"
        subtitle="CLEAR, HONEST ANSWERS FROM LOCAL SPECIALISTS"
        items={faqItems}
      />

      {/* Still Have Questions Box */}
      {stillHaveQuestionsSection && (
        <section className="py-16 sm:py-20 border-b border-white/5 bg-[#090e17]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white">
              {stillHaveQuestionsSection.heading}
            </h2>
            <div 
              className="sheet-prose text-sm sm:text-base text-slate-300 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: stillHaveQuestionsSection.content }}
            />
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBanner
        title="HAVE QUESTIONS ABOUT YOUR SPECIFIC CASE?"
        description={`Call Bayshore SR22 Insurance Tampa today at ${COMPANY_INFO.phone} for a free, no-pressure SR-22 quote. We answer questions fast and file paperwork faster.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
