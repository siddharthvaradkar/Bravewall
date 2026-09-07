import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>That page is not available.</h1>
      <p>
        Return to the Bravewall homepage or start with the requirement you need
        to structure.
      </p>
      <Link prefetch={false} className="button" href="/">
        Go to the homepage <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </main>
  );
}
