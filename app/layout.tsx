import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://bravewall.com'),
  title: {
    default:
      'Bravewall | Turn security requirements into a deliverable programme',
    template: '%s | Bravewall',
  },
  description:
    'Bravewall helps organisations define cybersecurity requirements, assemble appropriate specialist capabilities and coordinate delivery.',
  alternates: { canonical: 'https://bravewall.com/' },
  openGraph: {
    type: 'website',
    siteName: 'Bravewall',
    title:
      'Bravewall | Turn security requirements into a deliverable programme',
    description:
      'Requirements-led cybersecurity solutions integration and programme coordination',
    url: 'https://bravewall.com',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-feature-navigator="off" data-feature-bfsi-map="off">
      <body>{children}</body>
    </html>
  );
}
