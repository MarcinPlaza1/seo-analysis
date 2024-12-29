import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://seo-master.vercel.app'),
  title: 'SEO Master - Professional SEO Analysis Tool',
  description: 'Comprehensive SEO analysis tool for optimizing your website\'s search engine performance. Get detailed insights and actionable recommendations.',
  keywords: 'SEO, SEO analysis, website optimization, search engine optimization, SEO tools',
  authors: [{ name: 'SEO Master' }],
  openGraph: {
    title: 'SEO Master - Professional SEO Analysis Tool',
    description: 'Comprehensive SEO analysis tool for optimizing your website\'s search engine performance.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEO Master Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Master - Professional SEO Analysis Tool',
    description: 'Comprehensive SEO analysis tool for optimizing your website\'s search engine performance.',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}