import WireframePage from './wireframe';
import { pages } from './site-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cybersecurity Solutions India | Bravewall',
  description:
    'Bravewall helps organisations define security requirements, assemble capabilities and govern cybersecurity delivery across India.',
  alternates: { canonical: 'https://bravewall.com/' },
  openGraph: {
    title: 'Cybersecurity Solutions India | Bravewall',
    description:
      'Bravewall helps organisations define security requirements, assemble capabilities and govern cybersecurity delivery across India.',
    url: 'https://bravewall.com/',
    type: 'website',
  },
};

export default function Home() {
  return <WireframePage page={pages['/']} path="/" />;
}
