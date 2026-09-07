import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WireframePage from "../wireframe";
import { pages } from "../site-data";

const seo: Record<string, { title: string; description: string }> = {
  "/industries": {
    title: "Cybersecurity Solutions by Industry | Bravewall",
    description: "Industry cybersecurity programmes in India shaped around operating context, dependencies, consequences and evidence needs.",
  },
  "/industries/bfsi": {
    title: "BFSI Cybersecurity Solutions India | Bravewall",
    description: "Requirements-led cybersecurity programmes for regulated financial environments, connecting controls, delivery ownership and evidence.",
  },
  "/industries/government-public-sector": {
    title: "Government Cybersecurity Solutions India | Bravewall",
    description: "Government cybersecurity programmes that connect mandates, citizen-data protection, workforce readiness and incident coordination.",
  },
  "/industries/healthcare": {
    title: "Healthcare Cybersecurity Solutions India | Bravewall",
    description: "Healthcare cybersecurity programmes for care continuity, sensitive-data governance, identity control and supplier readiness.",
  },
  "/industries/manufacturing-critical-infrastructure": {
    title: "OT Cybersecurity Solutions India | Bravewall",
    description: "Industrial cybersecurity programmes connecting IT and OT dependencies, access governance, exercises and recovery evidence.",
  },
  "/industries/higher-education-cyber-academies": {
    title: "Higher Education Cybersecurity India | Bravewall",
    description: "Cybersecurity and workforce-readiness programmes for higher education, cyber academies and practical role-based learning.",
  },
  "/solutions": {
    title: "Enterprise Cybersecurity Capabilities | Bravewall",
    description: "Cybersecurity capabilities assembled around operating requirements, responsibilities, controls and evidence needs.",
  },
  "/solutions/cyber-workforce-readiness": {
    title: "Cybersecurity Workforce Readiness | Bravewall",
    description: "Build practical cybersecurity capability through role baselines, exercises, readiness evidence and governed improvement.",
  },
  "/solutions/governance-privacy-ai-risk": {
    title: "Cybersecurity Governance Consulting India | Bravewall",
    description: "Turn privacy, regulatory and AI-risk expectations into owned controls, operating decisions and reviewable evidence.",
  },
  "/solutions/identity-endpoint-user-security": {
    title: "Identity and Endpoint Security Solutions | Bravewall",
    description: "Reduce identity-led exposure through access governance, endpoint architecture, privileged-access review and remediation.",
  },
  "/solutions/cloud-application-security": {
    title: "Cloud and Application Security Consulting | Bravewall",
    description: "Connect cloud architecture, application threat modelling, secure delivery controls and remediation governance.",
  },
  "/solutions/data-database-security": {
    title: "Data and Database Security Solutions | Bravewall",
    description: "Protect sensitive data through discovery, access governance, retention controls and database assurance evidence.",
  },
  "/solutions/network-threat-operations": {
    title: "Network Security and Threat Operations | Bravewall",
    description: "Connect network controls, detection use cases, validation and incident readiness around the operating requirement.",
  },
  "/services": {
    title: "Cybersecurity Programme Consulting India | Bravewall",
    description: "Move from fragmented requirements to assessed, designed and governed cybersecurity delivery with decision-ready outputs.",
  },
  "/partners": {
    title: "Cybersecurity OEM Partner India | Bravewall",
    description: "A requirements-led route for cybersecurity OEMs, specialist providers, distributors and delivery partners in India.",
  },
  "/insights": {
    title: "Cybersecurity Insights India | Bravewall",
    description: "Practical cybersecurity insights on BFSI resilience, privacy, workforce readiness, identity and governed delivery.",
  },
  "/about": {
    title: "About Bravewall Cybersecurity",
    description: "Bravewall is a requirements-led cybersecurity solutions integrator and programme coordinator across India and Australia.",
  },
  "/contact": {
    title: "Contact Bravewall Cybersecurity",
    description: "Share your cybersecurity requirement with Bravewall and start a conversation about assessment, capability and governed delivery.",
  },
  "/privacy": {
    title: "Privacy | Bravewall",
    description: "Read how Bravewall handles information submitted through this website and contact routes.",
  },
};

export function generateStaticParams() {
  return Object.keys(pages)
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = pages[path];
  const pageSeo = seo[path] ?? {
    title: page?.title ?? "Bravewall Cybersecurity",
    description: page?.description ?? "Requirements-led cybersecurity solutions integration and programme coordination.",
  };
  if (!page) return {};
  return {
    title: pageSeo.title,
    description: pageSeo.description,
    alternates: { canonical: `https://bravewall.com${path}/` },
    openGraph: {
      title: pageSeo.title,
      description: pageSeo.description,
      url: `https://bravewall.com${path}/`,
      type: "website",
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = `/${slug.join("/")}`;
  const page = pages[path];
  if (!page) notFound();
  return <WireframePage page={page} path={path} />;
}
