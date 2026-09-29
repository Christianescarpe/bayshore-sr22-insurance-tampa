import parsedPagesData from './parsed_pages.json';

export interface PageSection {
  heading: string;
  content: string;
}

export interface PageData {
  page: string;
  url: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  introHtml: string;
  sections: PageSection[];
  rawHtml: string;
  internalLinks: string[];
  externalLink: string;
}

export const pages: PageData[] = parsedPagesData as PageData[];

/**
 * Removes the second part after any separator (|, -, –, —) in the SEO title
 */
export function cleanSeoTitle(title: string): string {
  if (!title) return '';
  // Split on separator patterns like " | ", " - ", " – ", " — "
  const parts = title.split(/\s+[|\-–—]\s+/);
  return parts[0].trim();
}

export function getPageBySlug(slug: string): PageData | undefined {
  if (slug === '' || slug === 'home') {
    return pages.find(p => p.url === '/' || p.slug === 'home');
  }
  return pages.find(p => p.slug === slug || p.url === `/${slug}/` || p.url === `/${slug}`);
}

export function getAllPages(): PageData[] {
  return pages;
}

export function getLocationPages(): PageData[] {
  return pages.filter(p => p.page.includes('(Location Page)'));
}

export function getMainNavPages(): { name: string; url: string }[] {
  return [
    { name: 'Home', url: '/' },
    { name: 'What is SR-22?', url: '/what-is-sr22/' },
    { name: 'How to Get SR-22', url: '/how-to-get-an-sr22-in-tampa/' },
    { name: 'Non-Owners', url: '/non-owners-sr22-insurance/' },
    { name: 'FAQ', url: '/faq/' },
    { name: 'Contact Us', url: '/contact-us/' },
  ];
}

export const COMPANY_INFO = {
  name: 'Bayshore SR22 Insurance Tampa',
  phone: '(656) 206-5888',
  phoneTel: '+16562065888',
  address: '1012 N Howard Ave ste 105, Tampa, FL 33607, United States',
  street: '1012 N Howard Ave ste 105',
  city: 'Tampa',
  state: 'FL',
  zip: '33607',
  country: 'United States',
  mapUrl: 'https://maps.app.goo.gl/Rht9vG4SLvWJ4U1x6',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4217.285472732379!2d-82.48573042452382!3d27.95264247604286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3a791a09bc5%3A0x3960df130f36d389!2sBayshore%20SR22%20Insurance%20Tampa!5e1!3m2!1sen!2sph!4v1790676795162!5m2!1sen!2sph',
};
