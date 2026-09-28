import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import CardGridSection from '@/components/CardGridSection';
import ServicesGridSection from '@/components/ServicesGridSection';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

const pageData = getPageBySlug('what-is-sr22')!;

export const metadata: Metadata = {
  title: cleanSeoTitle(pageData.seoTitle),
  description: pageData.metaDescription,
};

export default function WhatIsSr22Page() {
  const whyFinancialSection = pageData.sections.find(s => s.heading.includes("Why It's Called Financial Responsibility"));
  const whoNeedsSection = pageData.sections.find(s => s.heading.includes('Who Actually Needs One'));
  const howLongSection = pageData.sections.find(s => s.heading.includes("How Long You'll Need to Keep It"));
  const vsRegularSection = pageData.sections.find(s => s.heading.includes('SR-22 vs. Regular Auto Insurance'));
  const whatHappensSection = pageData.sections.find(s => s.heading.includes("What Happens If You Don't File"));
  const mythsSection = pageData.sections.find(s => s.heading.includes('Common Myths'));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection
        title={pageData.h1}
        category="// CERTIFICATE OF FINANCIAL RESPONSIBILITY"
        introHtml={pageData.introHtml}
        imageSrc="/images/man-holding-insurance-document-in-a-corporate-sett-2026-01-09-11-36-08-utc.webp"
        imageAlt="Certificate of financial responsibility explanation"
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          'Not A Policy: A Certificate',
          'Electronic FLHSMV Submission',
          '3-Year Standard Requirement'
        ]}
      />

      {/* Ribbon Ticker */}
      <RibbonTicker />

      {/* Split Feature: Why It's Called Financial Responsibility */}
      {whyFinancialSection && (
        <SplitFeatureSection
          subtitle="STATE VERIFICATION"
          title={whyFinancialSection.heading}
          contentHtml={whyFinancialSection.content}
          imageLeft="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
          imageAltLeft="Signing auto insurance document and certificate"
          imageRight="/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp"
          imageAltRight="Florida state minimum liability protection"
          ctaText={`Call ${COMPANY_INFO.phone}`}
          ctaHref={`tel:${COMPANY_INFO.phoneTel}`}
          pills={[
            '10/20/10 State Minimum Limits',
            'FLHSMV Automatic Notifications',
            'Certificate Tracking'
          ]}
        />
      )}

      {/* Card Grid: Who Actually Needs One */}
      {whoNeedsSection && (
        <CardGridSection
          subtitle="QUALIFYING SCENARIOS"
          title={whoNeedsSection.heading}
          introHtml={whoNeedsSection.content}
          cards={[
            {
              title: 'Uninsured Crash Involvement',
              description: 'Involved in a collision while uninsured or unable to prove financial responsibility at the time of the crash.',
              imageSrc: '/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp',
              badge: 'Crash Filing'
            },
            {
              title: 'Points & Traffic Convictions',
              description: 'Accumulation of excessive points on your driving record resulting in statutory driver license suspension.',
              imageSrc: '/images/insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp',
              badge: 'Points'
            },
            {
              title: 'Suspended License Driving',
              description: 'Convictions for driving while your Florida license was previously suspended, canceled, or revoked.',
              imageSrc: '/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp',
              badge: 'Reinstatement'
            },
            {
              title: 'Hardship Permit Application',
              description: 'Applying for a restricted or hardship driving permit to commute to employment, school, or medical appointments.',
              imageSrc: '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
              badge: 'Hardship'
            }
          ]}
        />
      )}

      {/* Services Grid: Duration, Comparison, Non-Filing */}
      <ServicesGridSection
        subtitle="ESSENTIAL KNOWLEDGE"
        title="Key SR-22 Regulations in Florida"
        items={[
          {
            title: howLongSection ? howLongSection.heading : "How Long You'll Need to Keep It",
            description: 'In Florida, the standard filing period is three continuous years from the reinstatement date. Any policy lapse resets the clock.',
            iconName: 'clock'
          },
          {
            title: vsRegularSection ? vsRegularSection.heading : 'SR-22 vs. Regular Insurance',
            description: 'The insurance coverage works identically to standard liability, but the state requires mandatory continuous electronic verification.',
            iconName: 'file'
          },
          {
            title: whatHappensSection ? whatHappensSection.heading : "What Happens If You Don't File",
            description: 'Failing to file results in immediate license suspension, canceled registration, and possible impoundment if caught driving.',
            iconName: 'alert'
          },
          {
            title: mythsSection ? mythsSection.heading : 'Common Myths About SR-22',
            description: "SR-22 is not permanent, it doesn't always cost thousands, and you don't even need to own a car to get compliant.",
            iconName: 'faq'
          }
        ]}
      />

      {/* CTA */}
      <CtaBanner
        title="NEED YOUR SR-22 CERTIFICATE FILED TODAY?"
        description={`Call Bayshore SR22 Insurance Tampa at ${COMPANY_INFO.phone}. We answer questions fast and submit electronic filings directly to the Florida FLHSMV.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
