import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import CardGridSection from '@/components/CardGridSection';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import ServicesGridSection from '@/components/ServicesGridSection';
import TestimonialStatsSection from '@/components/TestimonialStatsSection';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

const homeData = getPageBySlug('home')!;

export const metadata: Metadata = {
  title: cleanSeoTitle(homeData.seoTitle),
  description: homeData.metaDescription,
};

export default function HomePage() {
  const chooseSection = homeData.sections.find(s => s.heading.includes('Why Drivers Across Tampa Choose Bayshore'));
  const whoNeedsSection = homeData.sections.find(s => s.heading.includes('Who Needs an SR-22'));
  const coverageSection = homeData.sections.find(s => s.heading.includes('Coverage Options'));
  const fastFilingsSection = homeData.sections.find(s => s.heading.includes('Fast, Accurate Filings'));
  const differentSection = homeData.sections.find(s => s.heading.includes('What Makes Bayshore Different'));

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        title={homeData.h1}
        category="// SR-22 INSURANCE TAMPA, FLORIDA"
        introHtml={homeData.introHtml}
        imageSrc="/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp"
        imageAlt="Bayshore SR22 Insurance Tampa specialist consulting with customer"
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          'FLHSMV Direct Filing',
          'Same-Day Processing',
          'Owner & Non-Owner Policies'
        ]}
      />

      {/* 2. Ribbon Ticker */}
      <RibbonTicker />

      {/* 3. Section 2: 4-Card Grid */}
      <CardGridSection
        subtitle="DEDICATED TAMPA SPECIALISTS"
        title={chooseSection ? chooseSection.heading : 'Why Drivers Across Tampa Choose Bayshore'}
        introHtml={chooseSection ? chooseSection.content : undefined}
        cards={[
          {
            title: 'Personalized Coverage Matching',
            description: 'We ask about your situation, your budget, and your timeline, then match you with coverage that actually fits your needs.',
            imageSrc: '/images/car-insurance-and-finance-with-blue-toy-car-2026-03-17-20-04-52-utc.webp',
            badge: 'Listening First'
          },
          {
            title: 'Direct & Correct Filings',
            description: 'Mistakes on SR-22 forms can cost you weeks of delay. Our specialists submit paperwork correctly the first time to FLHSMV.',
            imageSrc: '/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
            badge: 'Fast Processing'
          },
          {
            title: 'Owner & Non-Owner Options',
            description: 'Whether you own a car, drive a borrowed vehicle, or need a driver-only certificate, we have the right policy path.',
            imageSrc: '/images/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp',
            badge: 'Flexible Solutions'
          },
          {
            title: 'Greater Tampa Bay Service',
            description: 'Serving Tampa, St. Petersburg, Clearwater, Brandon, Riverview, and all surrounding Hillsborough and Pinellas communities.',
            imageSrc: '/images/man-holding-insurance-document-in-a-corporate-sett-2026-01-09-11-36-08-utc.webp',
            badge: 'Local Coverage'
          }
        ]}
      />

      {/* 4. Section 3: Split Asymmetric Section */}
      {whoNeedsSection && (
        <SplitFeatureSection
          subtitle="FLORIDA STATE REQUIREMENTS"
          title={whoNeedsSection.heading}
          contentHtml={whoNeedsSection.content}
          imageLeft="/images/car-and-motorcycle-crash-on-a-city-street-2026-03-10-04-00-40-utc.webp"
          imageAltLeft="Vehicle collision requiring SR-22 insurance filing in Florida"
          imageRight="/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp"
          imageAltRight="Florida FLHSMV SR-22 documentation"
          ctaText={`Call ${COMPANY_INFO.phone}`}
          ctaHref={`tel:${COMPANY_INFO.phoneTel}`}
          pills={[
            'Uninsured Accident Filings',
            'Point Accumulation & Suspensions',
            'Hardship & Restricted Permits',
            'Court Judgments'
          ]}
        />
      )}

      {/* 5. Section 4: 4-Card Icon Services Grid */}
      <ServicesGridSection
        subtitle="TAILORED SOLUTIONS"
        title={coverageSection ? coverageSection.heading : 'Coverage Options for Every Situation'}
        introHtml={coverageSection ? coverageSection.content : undefined}
        items={[
          {
            title: 'Non-Owners SR-22 Policy',
            description: "If you don't own a vehicle, non-owner policies satisfy Florida filing requirements at a fraction of the cost.",
            iconName: 'car'
          },
          {
            title: 'Owner Vehicle SR-22',
            description: 'Complete liability protection for vehicle owners with immediate electronic FLHSMV filing.',
            iconName: 'file'
          },
          {
            title: 'Motorcycle SR-22 Coverage',
            description: 'High-risk motorcycle policies for riders needing license restoration under Florida traffic law.',
            iconName: 'alert'
          },
          {
            title: 'Fast FLHSMV Filing',
            description: 'Direct submission to the Florida Department of Highway Safety and Motor Vehicles to reinstate your license quickly.',
            iconName: 'clock'
          }
        ]}
      />

      {/* 6. Section 5: Quote & Big Stats */}
      <TestimonialStatsSection
        subtitle="WHAT MAKES BAYSHORE DIFFERENT"
        title={differentSection ? differentSection.heading : 'Dedicated Support For High-Risk Drivers'}
        quoteText="We've spent years helping Tampa-area drivers with less-than-perfect driving records navigate the paperwork, deadlines, and insurance requirements tied to SR-22 filings. We understand the stress that comes with a suspended license. That's exactly why our approach starts with listening."
        authorTitle="Bayshore SR22 Insurance Tampa Specialists"
        imageMain="/images/insurance-adjuster-inspecting-damage-after-car-cra-2026-01-05-05-08-40-utc.webp"
        imageSmall="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
        stats={[
          { value: '100%', label: 'Direct FLHSMV Submission' },
          { value: '1-DAY', label: 'Electronic Processing' },
          { value: '10+', label: 'Tampa Bay Service Areas' },
          { value: '3-YEAR', label: 'Continuous Filing Support' }
        ]}
      />

      {/* 7. Section 6: Cyan CTA Banner */}
      <CtaBanner
        title="LET'S GET YOUR SR-22 FILED CORRECTLY TODAY"
        description={`Call ${COMPANY_INFO.phone} and one of our SR-22 specialists will walk you through your options in minutes. We answer questions fast and file paperwork faster.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
