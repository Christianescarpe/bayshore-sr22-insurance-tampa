import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import RibbonTicker from '@/components/RibbonTicker';
import SplitFeatureSection from '@/components/SplitFeatureSection';
import CardGridSection from '@/components/CardGridSection';
import ServicesGridSection from '@/components/ServicesGridSection';
import TestimonialStatsSection from '@/components/TestimonialStatsSection';
import CtaBanner from '@/components/CtaBanner';
import { getPageBySlug, getLocationPages, cleanSeoTitle, COMPANY_INFO } from '@/lib/content';

interface LocationPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const locationPages = getLocationPages();
  return locationPages.map((loc) => ({
    slug: loc.slug,
  }));
}

export function generateMetadata({ params }: LocationPageProps): Metadata {
  const page = getPageBySlug(params.slug);
  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: cleanSeoTitle(page.seoTitle),
    description: page.metaDescription,
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const pageData = getPageBySlug(params.slug);
  if (!pageData) {
    notFound();
  }

  const cityName = pageData.page.replace(' (Location Page)', '').replace(', FL', '');

  const whyWorkWithUs = pageData.sections.find(s => s.heading.includes('Why') && s.heading.includes('Drivers Work With Us'));
  const triggersSection = pageData.sections.find(s => s.heading.includes('What Triggers an SR-22 Requirement'));
  const ownerNonOwnerSection = pageData.sections.find(s => s.heading.includes('Owner and Non-Owner Coverage'));
  const gettingStartedSection = pageData.sections.find(s => s.heading.includes('Getting Started'));
  const motorcycleSection = pageData.sections.find(s => s.heading.includes('Motorcycle and Non-Standard Coverage'));
  const speedSection = pageData.sections.find(s => s.heading.includes('Why Speed Matters'));
  const responsiveServiceSection = pageData.sections.find(s => s.heading.includes('Local, Responsive Service'));

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <HeroSection
        title={pageData.h1}
        category={`// ${cityName.toUpperCase()}, FL SR-22 COVERAGE`}
        introHtml={pageData.introHtml}
        imageSrc="/images/insurance-concept-of-person-protecting-blue-car-wi-2026-08-04-06-18-31-utc.webp"
        imageAlt={`SR-22 Insurance in ${cityName}, Florida`}
        primaryCtaText={`Call ${COMPANY_INFO.phone}`}
        primaryCtaHref={`tel:${COMPANY_INFO.phoneTel}`}
        pills={[
          `${cityName} Local Specialists`,
          'Direct FLHSMV Submission',
          'Owner & Non-Owner Policies'
        ]}
      />

      {/* 2. Ribbon Ticker */}
      <RibbonTicker />

      {/* 3. Section 2: Why City Drivers Work With Us */}
      {whyWorkWithUs && (
        <CardGridSection
          subtitle={`${cityName.toUpperCase()} DRIVER SERVICES`}
          title={whyWorkWithUs.heading}
          introHtml={whyWorkWithUs.content}
          cards={[
            {
              title: 'Fast Turnaround',
              description: `We know ${cityName} drivers cannot afford extended license suspensions. We quote and file electronically without delay.`,
              imageSrc: '/images/car-insurance-form-on-a-tablet-device-2026-01-08-07-15-09-utc.webp',
              badge: 'Fast Filing'
            },
            {
              title: 'Owner & Non-Owner Paths',
              description: `Whether you own your vehicle in ${cityName} or need a non-owner policy to reinstate your license affordably.`,
              imageSrc: '/images/car-insurance-concept-with-toy-car-and-umbrella-2026-01-08-08-12-26-utc.webp',
              badge: 'Options'
            },
            {
              title: 'Accurate State Filing',
              description: 'We submit directly to the Florida FLHSMV system so your certificate is accepted the first time with zero paperwork errors.',
              imageSrc: '/images/car-insurance-agreement-with-toy-car-and-keys-2026-01-08-07-27-34-utc.webp',
              badge: 'FLHSMV Approved'
            },
            {
              title: 'Ongoing 3-Year Support',
              description: 'We track your policy continuously to prevent accidental lapses that would trigger secondary state suspensions.',
              imageSrc: '/images/man-holding-insurance-document-in-a-corporate-sett-2026-01-09-11-36-08-utc.webp',
              badge: 'Continuous Care'
            }
          ]}
        />
      )}

      {/* 4. Section 3: Triggers Split Feature */}
      {triggersSection && (
        <SplitFeatureSection
          subtitle="FLORIDA FLHSMV MANDATES"
          title={triggersSection.heading}
          contentHtml={triggersSection.content}
          imageLeft="/images/insurance-adjuster-inspecting-damage-on-wrecked-ca-2026-03-27-02-57-59-utc.webp"
          imageAltLeft={`SR-22 requirement triggers for ${cityName} drivers`}
          imageRight="/images/car-insurance-form-on-clipboard-pen-desk-2026-01-08-06-24-10-utc.webp"
          imageAltRight="Florida insurance certificate verification"
          ctaText={`Call ${COMPANY_INFO.phone}`}
          ctaHref={`tel:${COMPANY_INFO.phoneTel}`}
          pills={[
            'Uninsured Crash Verification',
            'Point Accumulation Reinstatement',
            'Court Judgments & Orders',
            'Hardship Driver Licenses'
          ]}
        />
      )}

      {/* 5. Section 4: Coverage Services Grid */}
      <ServicesGridSection
        subtitle="AVAILABLE COVERAGE"
        title="Coverage Tailored to Your Situation"
        items={[
          {
            title: ownerNonOwnerSection ? ownerNonOwnerSection.heading : 'Owner and Non-Owner Coverage',
            description: `We offer full owner liability policies as well as driver-only non-owner SR-22 certificates for ${cityName} residents.`,
            iconName: 'car'
          },
          {
            title: motorcycleSection ? motorcycleSection.heading : 'Motorcycle & Non-Standard Coverage',
            description: `Specialized high-risk coverage for motorcyclists and non-standard vehicles throughout ${cityName} and Pinellas/Hillsborough counties.`,
            iconName: 'alert'
          },
          {
            title: speedSection ? speedSection.heading : 'Why Speed Matters',
            description: 'Every day without a valid license complicates work, family, and daily life. Our electronic filings minimize downtime.',
            iconName: 'clock'
          },
          {
            title: gettingStartedSection ? gettingStartedSection.heading : `Getting Started From ${cityName}`,
            description: 'Call our team with your driver license number, and we will find the lowest available rate and bind coverage immediately.',
            iconName: 'check'
          }
        ]}
      />

      {/* 6. Section 5: Responsive Service & Stats */}
      {responsiveServiceSection && (
        <TestimonialStatsSection
          subtitle="LOCAL TAMPA BAY COMMITMENT"
          title={responsiveServiceSection.heading}
          quoteText={`We've helped drivers across ${cityName} and the Tampa Bay Area navigate Florida SR-22 requirements quickly, affordably, and without judgment. We listen to your situation and get your paperwork submitted directly to the FLHSMV.`}
          authorTitle={`Bayshore SR22 Insurance • Serving ${cityName}`}
          imageMain="/images/insurance-agent-reviewing-car-coverage-with-custom-2026-01-08-07-32-47-utc.webp"
          imageSmall="/images/signing-auto-insurance-document-with-car-key-and-c-2026-01-06-09-05-16-utc.webp"
          stats={[
            { value: '100%', label: 'Electronic Filing' },
            { value: 'SAME-DAY', label: 'Processing Available' },
            { value: cityName.toUpperCase(), label: 'Dedicated Service' },
            { value: '3-YEAR', label: 'Mandate Compliance' }
          ]}
        />
      )}

      {/* 7. Section 6: CTA Banner */}
      <CtaBanner
        title={`GET YOUR FREE ${cityName.toUpperCase()} SR-22 QUOTE TODAY`}
        description={`Call Bayshore SR22 Insurance Tampa at ${COMPANY_INFO.phone}. Our specialists will answer your questions and file your certificate electronically with the FLHSMV.`}
        buttonText={`Call ${COMPANY_INFO.phone}`}
        buttonHref={`tel:${COMPANY_INFO.phoneTel}`}
      />
    </div>
  );
}
