import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPANY_INFO } from '@/lib/content';
import { Phone } from 'lucide-react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bayshoresr22tampa.com'),
  title: {
    default: 'SR22 Insurance Tampa FL',
    template: '%s'
  },
  description: 'Need SR-22 insurance in Tampa? Bayshore SR22 Insurance gets high-risk drivers affordable coverage and fast FLHSMV filings. Call (656) 206-5888 for a free quote.',
  keywords: [
    'SR22 insurance Tampa',
    'SR-22 insurance Florida',
    'non-owner SR22 Tampa',
    'Tampa license reinstatement',
    'FLHSMV filing Tampa',
    'cheap SR-22 Tampa FL'
  ],
  authors: [{ name: 'Bayshore SR22 Insurance Tampa' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bayshoresr22tampa.com',
    siteName: 'Bayshore SR22 Insurance Tampa',
    title: 'SR22 Insurance Tampa FL',
    description: 'Need SR-22 insurance in Tampa? Fast electronic FLHSMV filings and affordable coverage for high-risk drivers.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-[#080c12] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Mobile floating call button */}
        <div className="fixed bottom-4 right-4 z-40 sm:hidden">
          <a
            href={`tel:${COMPANY_INFO.phoneTel}`}
            className="flex items-center space-x-2 px-5 py-3 rounded-full bg-cyan-400 text-slate-950 font-bold shadow-2xl shadow-cyan-400/50 active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call (656) 206-5888</span>
          </a>
        </div>
      </body>
    </html>
  );
}
