import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import CardGridSection from '@/components/CardGridSection';
import ServicesGridSection from '@/components/ServicesGridSection';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

const pageData = getPageBySlug('non-owners-sr22-insurance')!;

export const metadata: Metadata = {
  title: cleanSeoTitle(pageData.seoTitle),
  description: pageData.metaDescription,
};

export default function NonOwnersSr22Page() {
  const howWorksSection = pageData.sections.find(s => s.heading.includes('How Non-Owner Coverage Works'));
  const whoNeedsSection = pageData.sections.find(s => s.heading.includes('Who Typically Needs'));
  const whyCostsLessSection = pageData.sections.find(s => s.heading.includes('Why It Usually Costs Less'));
  const doesntCoverSection = pageData.sections.find(s => s.heading.includes("What It Doesn't Cover"));
  const switchingSection = pageData.sections.find(s => s.heading.includes('Switching From Non-Owner'));

  return (
    <div className="space-y-0">
      {/* Hero */}
      <HeroSection
        title={pageData.h1}
        category="// AFFORDABLE DRIVER-ONLY COVERAGE"
        introHtml={pageData.introHtml}
        imageSrc="/images/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp"
        imageAlt="Non-owner SR-22 insurance policy concept"
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          'No Vehicle Required',
          'Significantly Lower Premiums',
          'Full FLHSMV Compliance'
        ]}
      />

      <RibbonTicker />

      {/* Split Feature: How Non-Owner Coverage Works */}
      {howWorksSection && (
        <SplitFeatureSection
          subtitle="DRIVER-CENTRIC PROTECTION"
          title={howWorksSection.heading}
          contentHtml={howWorksSection.content}
          imageLeft="/images/protecting-a-toy-car-with-hands-insurance-concept-2026-01-07-02-05-26-utc.webp"
          imageAltLeft="Protecting your license with non-owner SR-22"
          imageRight="/images/car-insurance-coverage-with-protection-concept-2026-01-08-08-12-25-utc.webp"
          imageAltRight="Florida bodily injury and property damage coverage"
          ctaText={`Call ${COMPANY_INFO.phone}`}
          ctaHref={`tel:${COMPANY_INFO.phoneTel}`}
          pills={[
            'Covers You When Borrowing Cars',
            'Satisfies State Reinstatement Mandate',
            'Does Not Cover Vehicles Kept In Household'
          ]}
        />
      )}

      {/* Card Grid: Who Needs & Why It Costs Less */}
      <CardGridSection
        subtitle="BENEFITS & ELIGIBILITY"
        title="Who Qualifies for Non-Owner SR-22?"
        introHtml={whoNeedsSection ? whoNeedsSection.content : undefined}
        cards={[
          {
            title: 'Drivers Without Vehicles',
            description: 'You need an SR-22 certificate to get your license back, but you do not own a registered vehicle.',
            imageSrc: '/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
            badge: 'No Car Owned'
          },
          {
            title: 'Occasional Drivers',
            description: 'You occasionally rent cars or borrow vehicles from friends or relatives outside your immediate household.',
            imageSrc: '/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp',
            badge: 'Occasional Driving'
          },
          {
            title: 'Lower Premium Rates',
            description: 'Because there is no physical vehicle collision or comprehensive risk, premiums are typically much cheaper than owner policies.',
            imageSrc: '/images/car-insurance-concept-toy-car-covered-by-umbrella-2026-03-26-23-19-45-utc.webp',
            badge: 'Cost Savings'
          },
          {
            title: 'Easy Policy Upgrades',
            description: 'If you buy a car later during your 3-year filing requirement, we easily convert your non-owner policy to an owner policy.',
            imageSrc: '/images/man-holding-insurance-document-in-a-corporate-sett-2026-01-09-11-36-08-utc.webp',
            badge: 'Flexible'
          }
        ]}
      />

      {/* Exclusions & Policy Switching */}
      <ServicesGridSection
        subtitle="POLICY DETAILS"
        title="Important Non-Owner Guidelines"
        items={[
          {
            title: doesntCoverSection ? doesntCoverSection.heading : "What It Doesn't Cover",
            description: "Non-owner policies do not provide collision or comprehensive physical damage to the vehicle you are driving, nor vehicles owned by household members.",
            iconName: 'alert'
          },
          {
            title: whyCostsLessSection ? whyCostsLessSection.heading : 'Why It Usually Costs Less',
            description: 'Insurers take on significantly less risk since you do not have constant daily vehicle exposure, leading to reduced liability rates.',
            iconName: 'car'
          },
          {
            title: switchingSection ? switchingSection.heading : 'Switching to Owner Coverage',
            description: 'Transitioning your policy when you purchase a vehicle is seamless. We update your FLHSMV certificate without any lapse in coverage.',
            iconName: 'check'
          },
          {
            title: 'Fast Electronic Filing',
            description: 'Get your non-owner SR-22 policy quoted, bound, and filed with the state within the same business day.',
            iconName: 'clock'
          }
        ]}
      />

      {/* CTA */}
      <CtaBanner
        title="NEED AFFORDABLE NON-OWNER SR-22 COVERAGE?"
        description={`Call Bayshore SR22 Insurance Tampa at ${COMPANY_INFO.phone}. We will set up your non-owner policy and submit your certificate immediately.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
