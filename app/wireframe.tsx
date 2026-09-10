'use client';

import Image from 'next/image';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { AnchorHTMLAttributes, CSSProperties } from 'react';
import { capabilities, industries, nav, PageSpec, Section } from './site-data';

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  prefetch?: boolean;
};

function Link({ prefetch: _prefetch, ...props }: SiteLinkProps) {
  const { href, onClick, ...anchorProps } = props;
  return (
    <a
      {...anchorProps}
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (
          !event.defaultPrevented &&
          typeof href === 'string' &&
          href.startsWith('/')
        ) {
          event.preventDefault();
          window.location.assign(href);
        }
      }}
    />
  );
}

const evidence = [
  [
    'Requirements brief',
    'What must the programme achieve and why?',
    'Current context, priorities and constraints.',
    'Leaders and delivery stakeholders.',
    'A shared starting point.',
  ],
  [
    'Capability map',
    'Which capabilities and controls are required?',
    'Functional, technical and operating considerations.',
    'Security, technology and risk teams.',
    'A defensible design direction.',
  ],
  [
    'PoC or validation plan',
    'How will the approach be tested?',
    'Success criteria, scope, roles and evidence.',
    'Buyers and specialist contributors.',
    'A clear decision gate.',
  ],
  [
    'Delivery plan',
    'Who does what, when and with which dependencies?',
    'Milestones, responsibilities and escalation paths.',
    'Customer and delivery teams.',
    'Governed coordination.',
  ],
  [
    'Improvement roadmap',
    'What should happen after the first delivery step?',
    'Review points, ownership and next priorities.',
    'Programme owners.',
    'A path to measurable progress.',
  ],
];

function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <span className={`logo${inverse ? ' logo--inverse' : ''}`}>
      <Image
        src={
          inverse
          ? '/brand/bravewall-logo-dark.png?v=2'
          : '/brand/bravewall-logo-light.png?v=2'
        }
        alt="Bravewall"
        width={1500}
        height={750}
        unoptimized
      />
    </span>
  );
}

export function Header({ path }: { path: string }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.add('js');
    return () => document.documentElement.classList.remove('js');
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link prefetch={false} href="/" aria-label="Bravewall home">
          <Logo />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="nav-group">
            <details className="nav-detail">
              <summary>
                Industries <ChevronDown aria-hidden="true" />
              </summary>
              <div className="mega-panel">
                {industries.map((item) => (
                  <Link
                    prefetch={false}
                    href={item.href ?? '/industries'}
                    key={item.title}
                    onClick={() => setOpen(false)}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </Link>
                ))}
              </div>
            </details>
            <details className="nav-detail">
              <summary>
                Solutions <ChevronDown aria-hidden="true" />
              </summary>
              <div className="mega-panel mega-panel--solutions">
                {capabilities.map((item) => (
                  <Link
                    prefetch={false}
                    href={item.href ?? '/solutions'}
                    key={item.title}
                    onClick={() => setOpen(false)}
                  >
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </Link>
                ))}
              </div>
            </details>
            {nav.slice(2).map(([label, href]) => (
              <Link
                prefetch={false}
                href={href}
                key={href}
                className={
                  path === href || path.startsWith(`${href}/`) ? 'active' : ''
                }
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
          <Link
            prefetch={false}
            className="button button--small"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Talk to us <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Breadcrumbs({ page }: { page: PageSpec }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link prefetch={false} href="/">
        Home
      </Link>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{page.eyebrow}</span>
    </nav>
  );
}

function Placeholder({
  label = 'Branded visual placeholder',
  ratio = '16 / 9',
  image,
  alt,
}: {
  label?: string;
  ratio?: string;
  image?: string;
  alt?: string;
}) {
  if (image) {
    return (
      <figure className="visual visual--image" style={{ aspectRatio: ratio }}>
        <Image
          src={image}
          alt={alt ?? label}
          width={1599}
          height={900}
          unoptimized
        />
        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    );
  }
  return (
    <div
      className={`visual-placeholder${label === 'Homepage hero banner' ? ' visual-placeholder--hero' : ''}`}
      style={{ aspectRatio: ratio }}
      aria-label={`${label}. Approved visual asset pending.`}
    >
      <span>{label}</span>
      <small>Approved visual asset pending</small>
    </div>
  );
}

function RequirementLine() {
  const stages = [
    ['01', 'Requirement', 'Define the outcome'],
    ['02', 'Capability', 'Shape what is needed'],
    ['03', 'Ownership', 'Make roles visible'],
    ['04', 'Evidence', 'Enable the decision'],
  ];
  return (
    <figure className="requirement-line" aria-labelledby="requirement-line-title">
      <figcaption id="requirement-line-title">
        <span>Bravewall Requirement Line</span>
        From an unresolved requirement to reviewable evidence.
      </figcaption>
      <ol>
        {stages.map(([index, title, detail], stageIndex) => (
          <li key={title} style={{ '--stage': stageIndex } as CSSProperties}>
            <span className="requirement-line__index">{index}</span>
            <span className="requirement-line__mark" aria-hidden="true" />
            <strong>{title}</strong>
            <small>{detail}</small>
          </li>
        ))}
      </ol>
      <div className="requirement-line__outcome">
        <span aria-hidden="true">◆</span>
        Decision-ready programme
      </div>
    </figure>
  );
}

function BfsiDecisionMap() {
  const decisions = [
    ['Obligation', 'What must be demonstrated?'],
    ['Identity', 'Who can act, and with what privilege?'],
    ['Data', 'What needs protection and traceability?'],
    ['Dependency', 'Where can another party affect the outcome?'],
    ['Response', 'Can the organisation decide and act in time?'],
  ];
  return (
    <figure className="decision-map" aria-labelledby="decision-map-title">
      <figcaption>
        <span>BFSI operating context</span>
        <strong id="decision-map-title">Five decisions. One control story.</strong>
      </figcaption>
      <div className="decision-map__field">
        <div className="decision-map__core">
          <span>CONTROL<br />CONFIDENCE</span>
          <small>reviewable evidence</small>
        </div>
        <ol>
          {decisions.map(([title, question], index) => (
            <li key={title} style={{ '--position': index } as CSSProperties}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <small>{question}</small>
            </li>
          ))}
        </ol>
      </div>
      <p>Each decision connects obligations, operating ownership and evidence—without assuming a product or vendor.</p>
    </figure>
  );
}

function EditorialSignal({
  index,
  title,
  meta,
  image,
}: {
  index: number;
  title: string;
  meta?: string;
  image?: string;
}) {
  const signals = ['06h', 'DATA', 'ID', 'ROLE', 'CASE', 'OT', 'CTRL'];
  return (
    <div className="editorial-signal">
      {image ? (
        <Image src={image} alt="" width={900} height={600} unoptimized />
      ) : (
        <>
          <span>{meta?.split('·')[0]?.trim() ?? 'Insight'}</span>
          <strong>{signals[index % signals.length]}</strong>
          <i>{String(index + 1).padStart(2, '0')} / {title.split(' ').slice(0, 3).join(' ')}</i>
        </>
      )}
    </div>
  );
}

function OperatingMap() {
  return (
    <section className="edp" aria-labelledby="edp-title">
      <div className="edp__copy">
        <p className="eyebrow">The Bravewall promise</p>
        <h2 id="edp-title">Educate. Detect. Protect.</h2>
        <article data-edp-step="educate">
          <span className="step-index">01</span>
          <div>
            <h3>Educate</h3>
            <p>Build role-relevant capability through practical experience.</p>
          </div>
        </article>
        <article data-edp-step="detect">
          <span className="step-index">02</span>
          <div>
            <h3>Detect</h3>
            <p>Identify exposure and recognise the signals that matter.</p>
          </div>
        </article>
        <article data-edp-step="protect">
          <span className="step-index">03</span>
          <div>
            <h3>Protect</h3>
            <p>Apply and govern controls around the operating requirement.</p>
          </div>
        </article>
      </div>
      <figure className="edp__map" aria-describedby="edp-caption">
        <svg viewBox="0 0 480 360" aria-labelledby="map-title map-desc">
          <title id="map-title">
            Educate, detect and protect operating map
          </title>
          <desc id="map-desc">
            People, signals and controls connect into one governed security
            programme.
          </desc>
          <path
            className="map-line"
            d="M90 90 C210 10 270 120 390 80 M90 180 C210 110 270 230 390 180 M90 270 C210 200 270 320 390 280"
          />
          <circle cx="90" cy="90" r="30" />
          <circle cx="90" cy="180" r="30" />
          <circle cx="90" cy="270" r="30" />
          <circle cx="390" cy="80" r="30" />
          <circle cx="390" cy="180" r="30" />
          <circle cx="390" cy="280" r="30" />
          <text x="90" y="95" textAnchor="middle">
            People
          </text>
          <text x="90" y="185" textAnchor="middle">
            Signals
          </text>
          <text x="90" y="275" textAnchor="middle">
            Controls
          </text>
          <text x="390" y="85" textAnchor="middle">
            Learn
          </text>
          <text x="390" y="185" textAnchor="middle">
            Prioritise
          </text>
          <text x="390" y="285" textAnchor="middle">
            Govern
          </text>
        </svg>
        <figcaption id="edp-caption">
          People, signals and controls combine into one governed security
          programme.
        </figcaption>
      </figure>
      <p className="sr-only" aria-live="polite" data-edp-status />
    </section>
  );
}

function Journey({
  section,
}: {
  section: Extract<Section, { kind: 'journey' }>;
}) {
  const steps = [
    ['Define', 'Requirements brief'],
    ['Design', 'Capability and control map'],
    ['Coordinate', 'Delivery plan'],
    ['Govern', 'Responsibility and evidence matrix'],
    ['Improve', 'Improvement roadmap'],
  ];
  return (
    <section className="section section--journey" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <ol className="journey" aria-label="Bravewall engagement journey">
        {steps.map(([name, output], index) => (
          <li key={name}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{name}</strong>
            <em>{output}</em>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Evidence({
  section,
}: {
  section: Extract<Section, { kind: 'evidence' }>;
}) {
  const [active, setActive] = useState(0);
  return (
    <section className="section section--evidence" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <div className="evidence" data-tabs>
        <div
          className="evidence-tabs"
          role="tablist"
          aria-label="Engagement outputs"
        >
          {evidence.map(([name], index) => (
            <button
              type="button"
              role="tab"
              key={name}
              id={`tab-${index}`}
              aria-controls={`panel-${index}`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="evidence-panels">
          {evidence.map(([name, question, contents, user, decision], index) => (
            <section
              role="tabpanel"
              id={`panel-${index}`}
              aria-labelledby={`tab-${index}`}
              hidden={active !== index}
              key={name}
            >
              <h3>{name}</h3>
              <dl>
                <dt>Question answered</dt>
                <dd>{question}</dd>
                <dt>Typical contents</dt>
                <dd>{contents}</dd>
                <dt>Intended user</dt>
                <dd>{user}</dd>
                <dt>Decision enabled</dt>
                <dd>{decision}</dd>
              </dl>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cards({
  section,
}: {
  section: Extract<Section, { kind: 'cards' | 'people' | 'articles' }>;
}) {
  return (
    <section className={`section section--${section.kind}`} data-reveal>
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
        <p>{section.body}</p>
      </div>
      <div className="card-grid">
        {section.cards.map((card, index) => {
          const content = (
            <>
              {section.kind === 'articles' && (
                <EditorialSignal
                  index={index}
                  title={card.title}
                  meta={card.meta}
                  image={card.image}
                />
              )}
              {section.kind !== 'articles' && card.image && (
                <div className="card-image-slot" aria-hidden="true">
                  <span>{card.image}</span>
                </div>
              )}
              <span className="card-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              {card.meta && <span className="card-meta">{card.meta}</span>}
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.href && (
                <span className="card-link">
                  Explore <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              )}
            </>
          );
          return card.href ? (
            <Link
              prefetch={false}
              className="card"
              href={card.href}
              key={card.title}
            >
              {content}
            </Link>
          ) : (
            <article className="card" key={card.title}>
              {content}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Prose({ section }: { section: Extract<Section, { kind: 'prose' }> }) {
  return (
    <section className="section section--prose" data-reveal>
      <div className="section-heading">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2>{section.title}</h2>
      </div>
      <div className="prose-content">
        <p>{section.body}</p>
        {section.bullets && (
          <ul>
            {section.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function ContactForm() {
  const [context] = useState(() => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    const segment = params.get('segment');
    const type = params.get('type');
    return segment ? `Segment: ${segment}` : type ? `Enquiry: ${type}` : '';
  });
  return (
    <form
      className="contact-form"
      action="mailto:tech@bravewall.com"
      method="post"
      encType="text/plain"
    >
      <input type="hidden" name="source_context" value={context} />
      <div className="form-grid">
        <label>
          Name *<input name="name" required autoComplete="name" />
        </label>
        <label>
          Work email *
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Organisation *
          <input name="organisation" required autoComplete="organization" />
        </label>
        <label>
          Enquiry type *
          <select name="enquiry" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Customer / programme</option>
            <option>OEM / partner</option>
            <option>Workforce readiness</option>
            <option>Media / general</option>
          </select>
        </label>
        <label>
          Role
          <input name="role" autoComplete="organization-title" />
        </label>
        <label>
          Industry
          <input name="industry" />
        </label>
        <label>
          Timing
          <input name="timing" />
        </label>
        <label>
          Telephone
          <input name="telephone" type="tel" autoComplete="tel" />
        </label>
        <label className="form-wide">
          Requirement *<textarea name="requirement" required rows={6} />
        </label>
        <label className="form-wide checkbox-label">
          <input type="checkbox" name="consent" required />{' '}
          <span>
            I agree that Bravewall may use these details to respond to this
            enquiry. See the{' '}
            <Link prefetch={false} href="/privacy">
              privacy notice
            </Link>
            .
          </span>
        </label>
      </div>
      <button className="button" type="submit">
        Send an enquiry <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-note">
        The form opens your email client. Do not send credentials, payment data,
        security logs or incident evidence.
      </p>
    </form>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  if (section.kind === 'comparison') {
    return (
      <section className="section section--comparison" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
        <div className="comparison-wrap">
          <table>
            <thead>
              <tr>
                <th scope="col">Segment</th>
                <th scope="col">Anchor</th>
                <th scope="col">What the programme should make visible</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row) => (
                <tr key={row.segment}>
                  <th scope="row">{row.segment}</th>
                  <td>{row.anchor}</td>
                  <td>{row.proof}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
  if (section.kind === 'journey') return <Journey section={section} />;
  if (section.kind === 'evidence') return <Evidence section={section} />;
  if (
    section.kind === 'cards' ||
    section.kind === 'people' ||
    section.kind === 'articles'
  )
    return <Cards section={section} />;
  if (section.kind === 'map') return <OperatingMap />;
  if (section.kind === 'form')
    return (
      <section className="section section--form" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <p>{section.body}</p>
        </div>
        <ContactForm />
      </section>
    );
  return <Prose section={section} />;
}

export default function WireframePage({
  page,
  path,
}: {
  page: PageSpec;
  path: string;
}) {
  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]'),
    );
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [path]);

  return (
    <div className="site-shell">
      <Header path={path} />
      <JsonLd path={path} page={page} />
      <main>
        <Breadcrumbs page={page} />
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="hero-intro">{page.intro}</p>
            <Link
              prefetch={false}
              className="button"
              href={path === '/partners' ? '/contact?type=partner' : '/contact'}
            >
              {page.cta} <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
          {path === '/' ? (
            <RequirementLine />
          ) : path === '/industries/bfsi' ? (
            <BfsiDecisionMap />
          ) : (
            <Placeholder
              label="Security operating map"
              image={
                path === '/solutions/cyber-workforce-readiness'
                  ? '/images/generated/cyber-workforce-readiness-pathway-v1.webp'
                  : undefined
              }
              alt={
                path === '/solutions/cyber-workforce-readiness'
                  ? 'Abstract cyber workforce readiness pathway connecting practical capability and evidence.'
                  : undefined
              }
            />
          )}
        </section>
        {page.sections.map((section, index) => (
          <SectionRenderer
            key={`${section.title}-${index}`}
            section={section}
          />
        ))}
        <section className="closing-cta" data-reveal>
          <div>
            <p className="eyebrow">Next useful action</p>
            <h2>{page.cta}</h2>
            <p>
              Bring the requirement, constraint or unresolved decision. We will
              help structure what comes next.
            </p>
          </div>
          <Link
            prefetch={false}
            className="button button--light"
            href="/contact"
          >
            Talk to Bravewall <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function JsonLd({ path, page }: { path: string; page: PageSpec }) {
  const canonical = `https://bravewall.com${path === '/' ? '/' : `${path}/`}`;
  const breadcrumb =
    path === '/'
      ? undefined
      : {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://bravewall.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: page.eyebrow,
              item: canonical,
            },
          ],
        };
  const graph =
    path === '/'
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Bravewall',
            url: 'https://bravewall.com/',
            description:
              'Requirements-led cybersecurity solutions integration and programme coordination.',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Bravewall',
            url: 'https://bravewall.com/',
          },
        ]
      : breadcrumb;
  if (!graph) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <Link prefetch={false} href="/">
            <Logo inverse />
          </Link>
          <p>
            Bravewall helps organisations define cybersecurity requirements,
            assemble appropriate specialist capabilities and coordinate delivery
            across India and Australia.
          </p>
        </div>
        <div className="footer-links">
          <Link prefetch={false} href="/industries">
            Industries
          </Link>
          <Link prefetch={false} href="/solutions">
            Solutions
          </Link>
          <Link prefetch={false} href="/services">
            Services
          </Link>
          <Link prefetch={false} href="/partners">
            Partners
          </Link>
          <Link prefetch={false} href="/insights">
            Insights
          </Link>
          <Link prefetch={false} href="/about">
            About
          </Link>
          <Link prefetch={false} href="/contact">
            Talk to us
          </Link>
          <Link prefetch={false} href="/privacy">
            Privacy
          </Link>
        </div>
        <div className="footer-contact">
          <a href="mailto:tech@bravewall.com">tech@bravewall.com</a>
          <a href="tel:+919322390680">+91 93223 90680</a>
          <a href="tel:+919702280999">+91 97022 80999</a>
        </div>
      </div>
    </footer>
  );
}
