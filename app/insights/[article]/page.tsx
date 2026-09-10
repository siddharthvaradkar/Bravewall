import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes } from 'react';
import { insightArticles } from '../../site-data';
import { Footer, Header } from '../../wireframe';
import './article.css';

function Link(
  props: AnchorHTMLAttributes<HTMLAnchorElement> & { prefetch?: boolean },
) {
  const { prefetch: _prefetch, ...anchorProps } = props;
  return <a {...anchorProps} />;
}

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ article: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: slug } = await params;
  const item = insightArticles.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: `https://bravewall.com/insights/${item.slug}/` },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://bravewall.com/insights/${item.slug}/`,
      type: 'article',
    },
    robots: { index: item.date !== 'Editorial placeholder', follow: true },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article: slug } = await params;
  const item = insightArticles.find((entry) => entry.slug === slug);
  if (!item) notFound();
  const canonical = `https://bravewall.com/insights/${item.slug}/`;
  const articleSchema =
    item.date === 'Editorial placeholder'
      ? null
      : {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: item.title,
          description: item.description,
          author: { '@type': 'Person', name: item.author },
          datePublished: new Date(item.date).toISOString(),
          dateModified: new Date(item.date).toISOString(),
          mainEntityOfPage: canonical,
          publisher: {
            '@type': 'Organization',
            name: 'Bravewall',
            url: 'https://bravewall.com/',
          },
        };

  return (
    <div className="site-shell">
      <Header path="/insights" />
      {articleSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      ) : null}
      <main className="article-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link prefetch={false} href="/insights">
            Insights
          </Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{item.category}</span>
        </nav>
        <article className="article-layout">
          <div className="article-copy">
            <p className="eyebrow">{item.category}</p>
            <h1>{item.title}</h1>
            <p className="article-standfirst">{item.standfirst}</p>
            <div className="article-meta">
              <span>Author: {item.author}</span>
              <span>Published: {item.date}</span>
              <span>{item.readMin} min read</span>
            </div>
            {item.image ? (
              <figure className="article-hero-image">
                <Image src={item.image} alt="" width={900} height={600} unoptimized priority />
                <figcaption className="sr-only">Editorial visual for {item.title}</figcaption>
              </figure>
            ) : (
              <div
                className="article-placeholder"
                aria-label={`${item.title} visual placeholder. Approved visual asset pending.`}
              />
            )}
            {item.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <div
              className="article-placeholder"
              aria-label="Editorial visual placeholder. Approved visual asset pending."
            />
            <h2>Sources and editorial review</h2>
            <p>
              This article is adapted from Bravewall editorial work. Regulatory
              and sector-specific decisions should be checked against current
              primary sources and the applicable authority before action.
            </p>
          </div>
          <aside className="article-aside">
            <p className="eyebrow">Next useful action</p>
            <h2>Discuss the requirement</h2>
            <p>
              Bring the decision, constraint or unresolved question to
              Bravewall.
            </p>
            <Link prefetch={false} className="button" href="/contact">
              Talk to Bravewall <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </aside>
        </article>
      </main>
      <Footer />
    </div>
  );
}
