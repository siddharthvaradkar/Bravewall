export type Card = {
  title: string;
  body: string;
  href?: string;
  meta?: string;
  image?: string;
};

export type Section =
  | {
      kind: 'prose';
      eyebrow?: string;
      title: string;
      body: string;
      bullets?: string[];
    }
  | {
      kind: 'cards';
      eyebrow?: string;
      title: string;
      body: string;
      cards: Card[];
    }
  | { kind: 'journey'; eyebrow?: string; title: string; body: string }
  | { kind: 'map'; eyebrow?: string; title: string; body: string }
  | { kind: 'evidence'; eyebrow?: string; title: string; body: string }
  | {
      kind: 'people';
      eyebrow?: string;
      title: string;
      body: string;
      cards: Card[];
    }
  | {
      kind: 'articles';
      eyebrow?: string;
      title: string;
      body: string;
      cards: Card[];
    }
  | {
      kind: 'comparison';
      eyebrow?: string;
      title: string;
      body: string;
      rows: { segment: string; anchor: string; proof: string }[];
    }
  | { kind: 'form'; eyebrow?: string; title: string; body: string };

export type PageSpec = {
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  cta: string;
  sections: Section[];
};

export const nav = [
  ['Industries', '/industries'],
  ['Solutions', '/solutions'],
  ['Services', '/services'],
  ['Partners', '/partners'],
  ['Insights', '/insights'],
  ['About', '/about'],
] as const;

export const industries: Card[] = [
  {
    title: 'BFSI',
    body: 'Control confidence for regulated, high-availability environments.',
    href: '/industries/bfsi',
  },
  {
    title: 'Government & public sector',
    body: 'Protect essential services across mandates and delivery boundaries.',
    href: '/industries/government-public-sector',
  },
  {
    title: 'Healthcare',
    body: 'Protect care delivery and sensitive data across connected environments.',
    href: '/industries/healthcare',
  },
  {
    title: 'Manufacturing & critical infrastructure',
    body: 'Treat cyber risk as operational risk where connected systems matter.',
    href: '/industries/manufacturing-critical-infrastructure',
  },
  {
    title: 'Higher education & cyber academies',
    body: 'Prepare people to perform in real security roles while protecting open digital environments.',
    href: '/industries/higher-education-cyber-academies',
  },
];

export const capabilities: Card[] = [
  {
    title: 'Cyber Workforce Readiness',
    body: 'Move from awareness and certificates to role-relevant practice and evidence.',
    href: '/solutions/cyber-workforce-readiness',
  },
  {
    title: 'Governance, Privacy & AI Risk',
    body: 'Turn obligations and emerging risk into owned controls and reviewable evidence.',
    href: '/solutions/governance-privacy-ai-risk',
  },
  {
    title: 'Identity, Endpoint & User Security',
    body: 'Reduce identity-led exposure across users, devices and privileged access.',
    href: '/solutions/identity-endpoint-user-security',
  },
  {
    title: 'Cloud & Application Security',
    body: 'Build security into cloud foundations and software delivery.',
    href: '/solutions/cloud-application-security',
  },
  {
    title: 'Data & Database Security',
    body: 'Protect sensitive data by knowing where it is, why it is held and who can reach it.',
    href: '/solutions/data-database-security',
  },
  {
    title: 'Network Security & Threat Operations',
    body: 'Connect visibility, validation and response around the operating requirement.',
    href: '/solutions/network-threat-operations',
  },
];

const journeyText =
  'Outputs depend on agreed scope. A programme may begin at the stage where the requirement is currently stuck.';

const insightCards: Card[] = [
  {
    title: 'CERT-In incident reporting: the six-hour rule',
    body: 'Prepare the decision path and evidence before an incident starts the reporting clock.',
    href: '/insights/cert-in-incident-reporting',
    meta: 'Regulation & assurance · 6 min read',
    image: '/images/insights/cert-in-incident-reporting-thumb.webp',
  },
  {
    title: 'The DPDP Act, in plain English',
    body: 'Turn personal-data obligations into owned operating controls.',
    href: '/insights/dpdp-act-compliance',
    meta: 'Regulation & assurance · 5 min read',
    image: '/images/insights/dpdp-act-compliance-thumb.webp',
  },
  {
    title: 'How fast are leaked credentials exploited?',
    body: 'Connect exposure monitoring, identity controls and response speed.',
    href: '/insights/how-fast-are-leaked-credentials-exploited',
    meta: 'Threat & exposure · 6 min read',
    image: '/images/insights/how-fast-are-leaked-credentials-exploited-thumb.webp',
  },
  {
    title: 'The cybersecurity skills gap in India',
    body: 'Why role readiness needs evidence beyond qualifications and attendance.',
    href: '/insights/cybersecurity-skills-gap-india',
    meta: 'Cyber workforce readiness · 5 min read',
    image: '/images/insights/cybersecurity-skills-gap-india-thumb.webp',
  },
  {
    title: 'Building the internal case for practical cyber training',
    body: 'Make workforce readiness measurable for education and placement decisions.',
    href: '/insights/cyber-training-business-case',
    meta: 'Cyber workforce readiness · 5 min read',
    image: '/images/insights/cyber-training-business-case-thumb.webp',
  },
  {
    title: 'IMO cyber risk management for Indian shipping operators',
    body: 'Bring cyber risk into safety management, accountability and audit evidence.',
    href: '/insights/imo-cyber-risk-management-indian-shipping',
    meta: 'Operational resilience · 7 min read',
    image: '/images/insights/imo-cyber-risk-management-indian-shipping-thumb.webp',
  },
  {
    title: 'A regulatory decision brief',
    body: 'Translate an obligation into a governed security requirement.',
    href: '/insights/regulatory-risk-brief',
    meta: 'Regulation & assurance · 6 min read',
  },
];

const contextLabel = (title: string) => title.split(/[,.]/)[0];

type SegmentRow = { segment: string; anchor: string; proof: string; body: string };

const segmentRows: Record<string, SegmentRow[]> = {
  '/industries/bfsi': [
    { segment: 'Banks', anchor: 'RBI IT Governance, Risk, Controls and Assurance Master Direction', proof: 'Named accountability for continuous vulnerability management', body: 'RBI does not ask if you patched; it asks who is accountable for what remains. Put a named owner against the requirement.' },
    { segment: 'NBFCs & financial services', anchor: 'RBI Digital Lending Directions', proof: 'A control map before the regulator asks for it', body: 'Growth can outpace access controls. Build the map of who can touch what before review begins.' },
    { segment: 'Fintech', anchor: 'Investor and partner-bank due-diligence expectations', proof: 'An access-review trail ready for diligence', body: 'Keep evidence ready before a diligence request turns into a delivery delay.' },
    { segment: 'Insurance', anchor: 'IRDAI Information and Cyber Security Guidelines', proof: 'Governed access across every handoff', body: 'Claims move across systems, agents and brokers. Make responsibility visible at each handoff.' },
  ],
  '/solutions/cyber-workforce-readiness': [
    { segment: 'Education institutes', anchor: 'Placement and role-readiness outcomes', proof: 'Cyber curricula graduates can perform against', body: 'A certificate shows attendance; practical scenarios show readiness for the role.' },
    { segment: 'Software organisations', anchor: 'Role-readiness assessment', proof: 'Objective evidence of who is ready', body: 'Measure the skills gap before an incident exposes it.' },
    { segment: 'Other organisations', anchor: 'Human-element breach exposure', proof: 'Measurable recognition and reporting behaviour', body: 'Train the people most likely to be first to encounter a suspicious signal.' },
  ],
  '/industries/healthcare': [
    { segment: 'Drug manufacturers', anchor: 'CDSCO revised Schedule M', proof: 'Protected batch records and formulation data', body: 'Protect the data trail behind the production line and the records an auditor may review.' },
    { segment: 'Hospitals & clinics', anchor: 'ABDM Health Data Management Policy', proof: 'Governed patient data and connected devices', body: 'Connected care makes data responsibility cross organisational boundaries.' },
    { segment: 'Diagnostics & health-tech', anchor: 'DPDP Act and ABDM interoperability', proof: 'Secure handoff of results across systems', body: 'Make the journey from test to patient report governable.' },
  ],
  '/industries/manufacturing-critical-infrastructure': [
    { segment: 'Shopfloor', anchor: 'IEC 62443', proof: 'IT/OT segmentation without disrupting production', body: 'Bring IT and OT responsibilities together without treating production like an ordinary patch window.' },
    { segment: 'Ongoing research', anchor: 'Pre-patent IP and design-data exposure', proof: 'Protected formulation and design data', body: 'Protect the design work that represents the next commercial step.' },
    { segment: 'Logistics', anchor: 'Third-party and IoT tracking access', proof: 'Governed supply-chain access boundaries', body: 'Make every carrier, device and supplier connection visible.' },
  ],
  '/industries/government-public-sector': [
    { segment: 'Institutes', anchor: 'CERT-In directions and MeitY guidance', proof: 'Traceable mandate-to-control accountability', body: 'Make responsibility traceable without slowing essential service delivery.' },
    { segment: 'Citizen-facing services', anchor: 'DPDP Act', proof: 'Governed personal data across departments', body: 'Make cross-department data handoffs reviewable and owned.' },
    { segment: 'Critical public locations', anchor: 'NCIIPC-designated critical information infrastructure', proof: 'Layered digital and perimeter security', body: 'Treat critical locations according to their distinct operating consequences.' },
  ],
  '/solutions/governance-privacy-ai-risk': [
    { segment: 'Privacy & compliance teams', anchor: 'DPDP Act programme ownership', proof: 'One governed, reviewable privacy programme', body: 'Turn scattered ownership into a programme that can be reviewed.' },
    { segment: 'AI-adopting organisations', anchor: 'AI risk and model governance expectations', proof: 'Documented sign-off and accountability', body: 'Make accountability visible before a model-driven decision is challenged.' },
    { segment: 'Boards & audit committees', anchor: 'Board-level security and privacy reporting', proof: 'Posture a board can question and act on', body: 'Turn posture into a decision surface rather than a passive report.' },
  ],
  '/solutions/identity-endpoint-user-security': [
    { segment: 'Workforce identity & endpoints', anchor: 'Hybrid and remote-work endpoint sprawl', proof: 'One governed identity and endpoint picture', body: 'Bring identity and endpoint ownership into one view wherever people work.' },
    { segment: 'Privileged access', anchor: 'Admin and privileged-account review cycles', proof: 'Monitored, not assumed, privileged access', body: 'Make the highest-impact accounts visible and reviewable.' },
    { segment: 'Customer identity', anchor: 'Consumer login and account-takeover exposure', proof: 'Secure customer identity without added friction', body: 'Strengthen customer identity without losing the business experience.' },
  ],
  '/solutions/cloud-application-security': [
    { segment: 'Cloud-native scale-ups', anchor: 'Fast-moving delivery pipelines', proof: 'Security that matches shipping speed', body: 'Build security into the pipeline instead of adding a late-stage gate.' },
    { segment: 'Cloud migration programmes', anchor: 'Legacy-to-cloud security-model gaps', proof: 'A security model that migrates with the application', body: 'Carry the security model forward with the workload.' },
    { segment: 'SaaS & product security', anchor: 'Customer security questionnaires', proof: 'Evidence that answers the trust question', body: 'Make the evidence behind product trust ready for review.' },
  ],
  '/solutions/data-database-security': [
    { segment: 'Customer & personal data', anchor: 'DPDP Act data-liability exposure', proof: 'Know where data lives and who can reach it', body: 'Make sensitive data locations and access paths visible.' },
    { segment: 'Third-party & vendor sharing', anchor: 'Vendor data-sharing risk', proof: 'Governed data leaving and returning', body: 'Keep responsibility visible when data crosses a supplier boundary.' },
    { segment: 'Legacy database modernisation', anchor: 'Ageing systems holding sensitive data', proof: 'Modernised access and controls', body: 'Improve controls around systems that cannot be replaced immediately.' },
  ],
  '/solutions/network-threat-operations': [
    { segment: 'Detection capability', anchor: 'SOC and detection-use-case maturity', proof: 'Response muscle behind the tooling', body: 'A SIEM is not a response plan. Define the use cases and decisions behind the alert.' },
    { segment: 'Distributed & branch networks', anchor: 'Multi-site segmentation and visibility', proof: 'Consistent control across every site', body: 'Bring visibility and segmentation to the edge that is easiest to miss.' },
    { segment: 'Incident readiness', anchor: 'Tested response and validation', proof: 'A validated incident response plan', body: 'Exercise the plan before an actual incident tests it.' },
  ],
};

function segmentSections(path: string): Section[] {
  const rows = segmentRows[path];
  if (!rows) return [];
  return [
    {
      kind: 'cards',
      eyebrow: 'Who this matters to',
      title: 'Start with the operating pressure',
      body: 'Different teams face different decisions. The requirement remains the starting point.',
      cards: rows.map((row) => ({
        title: row.segment,
        body: row.body,
        href: `/contact?segment=${encodeURIComponent(row.segment.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}`,
        meta: row.anchor,
        image: 'Approved visual asset pending',
      })),
    },
    {
      kind: 'comparison',
      eyebrow: 'Evidence and ownership',
      title: 'What the programme should make visible',
      body: 'Anchors are starting points for review, not legal or audit advice. Confirm current applicability before action.',
      rows: rows.map(({ segment, anchor, proof }) => ({ segment, anchor, proof })),
    },
  ];
}

const solutionPage = (
  path: string,
  title: string,
  intro: string,
  body: string,
  bullets: string[],
  hrefs: Card[] = industries,
): PageSpec => ({
  title,
  description: intro,
  eyebrow: 'Capability',
  intro,
  cta: 'Shape a programme',
  sections: [
    ...segmentSections(path),
    {
      kind: 'prose',
      eyebrow: 'The outcome',
      title: 'A decision-ready programme',
      body,
    },
    {
      kind: 'cards',
      eyebrow: 'Capability scope',
      title: 'What the requirement may include',
      body: 'Relevant capabilities depend on the operating environment, existing investments and agreed outcomes.',
      cards: bullets.map((item) => ({
        title: item,
        body: 'Defined and evaluated according to the requirement, constraints and evidence needed.',
      })),
    },
    {
      kind: 'journey',
      eyebrow: 'How Bravewall helps',
      title: `${contextLabel(title)}: from capability to delivery`,
      body: `${journeyText} For this capability, the starting point is ${intro.toLowerCase()}`,
    },
    {
      kind: 'evidence',
      eyebrow: 'Engagement outputs',
      title: `${contextLabel(title)}: evidence for the next decision`,
      body: 'The engagement should leave reviewable ownership, decision records and an improvement path appropriate to the agreed scope.',
    },
    {
      kind: 'cards',
      eyebrow: 'Relevant contexts',
      title: 'Where this requirement appears',
      body: 'The same capability can serve different operating contexts. The starting point remains the requirement.',
      cards: hrefs.slice(0, 4),
    },
    {
      kind: 'articles',
      eyebrow: 'Related reading',
      title: 'Questions to resolve before delivery',
      body: 'Use these practical notes to sharpen the requirement and the next decision.',
      cards: insightCards.filter((card) =>
        ['cyber-workforce-readiness', 'dpdp-act-compliance'].some((slug) =>
          card.href?.includes(slug),
        ),
      ),
    },
    {
      kind: 'cards',
      eyebrow: 'Next step',
      title: 'Coordinate the programme',
      body: 'Services connect assessment, design, validation, delivery coordination and governance around the agreed outcome.',
      cards: [
        {
          title: 'Cybersecurity programme consulting',
          body: 'Move from fragmented requirements to governed delivery with decision-ready outputs.',
          href: '/services',
        },
      ],
    },
  ],
});

const industryPage = (
  path: string,
  title: string,
  intro: string,
  risks: string[],
  related: Card[],
): PageSpec => ({
  title,
  description: intro,
  eyebrow: 'Industry pathway',
  intro,
  cta: 'Discuss your industry priorities',
  sections: [
    ...segmentSections(path),
    {
      kind: 'prose',
      eyebrow: 'Why this matters',
      title: 'Make the same priorities visible',
      body: 'Cybersecurity becomes useful when business, risk and technology teams can see the same priorities and make decisions from the same evidence.',
    },
    {
      kind: 'cards',
      eyebrow: 'Priority decisions',
      title: 'What leaders need to resolve',
      body: 'The right starting point depends on the environment, obligations, dependencies and consequences of disruption.',
      cards: risks.map((item) => ({
        title: item,
        body: 'A requirement to define, evidence and govern with the teams responsible for the outcome.',
      })),
    },
    {
      kind: 'journey',
      eyebrow: 'Practical pathway',
      title: `${contextLabel(title)}: make the requirement governable`,
      body: 'Discover the current state, define the target capability, coordinate delivery and govern through checkpoints that fit this operating environment.',
    },
    {
      kind: 'evidence',
      eyebrow: 'Expected evidence',
      title: `${contextLabel(title)}: leave a reviewable trail`,
      body: 'Evidence should make ownership, decisions, exceptions and next priorities visible to the teams responsible for the outcome.',
    },
    {
      kind: 'cards',
      eyebrow: 'Relevant capabilities',
      title: 'Continue with the right requirement',
      body: 'Explore the capabilities most relevant to this operating context.',
      cards: related,
    },
    {
      kind: 'articles',
      eyebrow: 'Related reading',
      title: 'Practical notes for this operating context',
      body: 'Use reviewed insights to frame the next priority, evidence question or delivery decision.',
      cards: insightCards.slice(0, 2),
    },
  ],
});

export const pages: Record<string, PageSpec> = {
  '/': {
    title: 'Turn security requirements into a deliverable programme.',
    description:
      'Bravewall helps organisations define what security must achieve, assemble the right capabilities and govern delivery from decision to improvement.',
    eyebrow: 'Requirements first. Solutions second.',
    intro:
      'Bravewall helps organisations define what security must achieve, assemble the right capabilities and govern delivery from decision to improvement.',
    cta: 'Start with your requirement',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'The coordination gap',
        title: 'The hard part is rarely finding another security product.',
        body: 'Most organisations already manage multiple technologies, providers and compliance demands. The harder problem is deciding what is required, how the parts should work together and who will coordinate delivery when responsibilities cross organisational boundaries.',
        bullets: [
          'Unclear ownership across business and technology',
          'Overlapping tools without an operating model',
          'Compliance disconnected from operational risk',
          'Training measured by attendance rather than capability',
        ],
      },
      {
        kind: 'map',
        eyebrow: 'The Bravewall promise',
        title: 'Educate. Detect. Protect.',
        body: 'People, signals and controls combine into one governed security programme.',
      },
      {
        kind: 'cards',
        eyebrow: 'Our capability areas',
        title: 'Five outcomes. One requirements-led approach.',
        body: 'Capabilities are evaluated for technical fit, deployment needs, support model, commercial suitability and the assurance needs of the engagement.',
        cards: [
          {
            title: 'Cyber Workforce Readiness',
            body: 'Establish a practical baseline and build role-based cyber capability through hands-on learning and realistic scenarios.',
            href: '/solutions/cyber-workforce-readiness',
            meta: 'Higher education · Enterprise teams · Public-sector skilling',
          },
          {
            title: 'Exposure and Identity Risk',
            body: 'Identify compromised credentials, exposed assets, sensitive information and external attack paths so teams can prioritise response.',
            href: '/solutions/identity-endpoint-user-security',
            meta: 'Insurance · Asset management · Fintech · Enterprise',
          },
          {
            title: 'Security Validation and Threat Detection',
            body: 'Validate applications, APIs, infrastructure, cloud environments and networks through assessment and appropriate detection capabilities.',
            href: '/solutions/network-threat-operations',
            meta: 'Regulated enterprises · Digital businesses · Security teams',
          },
          {
            title: 'OT and Operational Resilience',
            body: 'Strengthen visibility, remote access, continuity and incident preparedness across connected operational environments.',
            href: '/industries/manufacturing-critical-infrastructure',
            meta: 'Shipping · Data centres · Energy · Industrial operations',
          },
          {
            title: 'Governance and Control Assurance',
            body: 'Turn policies and regulatory requirements into operating controls, evidence, exception workflows and coordinated remediation.',
            href: '/solutions/governance-privacy-ai-risk',
            meta: 'BFSI · Pharma · Healthcare · Data-intensive enterprise',
          },
        ],
      },
      {
        kind: 'prose',
        eyebrow: 'Bravewall Encompass',
        title: 'The framework that brings the engagement together.',
        body: 'Bravewall Encompass is our Security Engagement Framework for coordinating security requirements, specialist capabilities, delivery teams and governance within one customer programme. It is not software or a fixed technology stack.',
      },
      {
        kind: 'journey',
        eyebrow: 'How we work',
        title:
          'Clear requirements. Appropriate capabilities. Coordinated delivery.',
        body: 'Define what matters, coordinate the right capabilities, govern delivery and improve with visible responsibilities. Outputs depend on agreed scope.',
      },
      {
        kind: 'cards',
        eyebrow: 'Where we focus',
        title: 'Focused on environments where readiness and resilience matter.',
        body: 'Our primary focus is regulated organisations, cyber workforce development and operational environments where fragmented security responsibilities can create material risk.',
        cards: industries,
      },
      {
        kind: 'articles',
        eyebrow: 'Insights',
        title: 'Practical thinking for security decisions.',
        body: 'Useful enough to act on. Careful enough to trust.',
        cards: insightCards,
      },
    ],
  },
  '/industries': {
    title:
      'Security programmes shaped around the environment they must protect.',
    description:
      'Choose an operating context and start with the requirement, not the product.',
    eyebrow: 'Industries',
    intro:
      'Different operating models create different consequences, dependencies and evidence needs. Choose the context closest to yours.',
    cta: 'Discuss your industry priorities',
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Choose a pathway',
        title: 'Start with operating context',
        body: 'Bravewall remains technology-agnostic at the requirement stage, then coordinates the capabilities and specialist contributors the programme calls for.',
        cards: industries,
      },
      {
        kind: 'prose',
        eyebrow: 'A consistent method',
        title: 'Requirements before products.',
        body: 'We translate the operating context into a requirement and risk brief, current-state view, capability roadmap and responsibility and evidence matrix.',
      },
    ],
  },
  '/industries/bfsi': industryPage(
    '/industries/bfsi',
    'Control confidence for regulated, high-availability environments.',
    'BFSI programmes connect regulatory and control assurance with identity, data, third-party and detection readiness.',
    [
      'Regulatory and control assurance',
      'Identity and privileged-access exposure',
      'Data protection and third-party dependencies',
      'Detection, validation and incident readiness',
    ],
    capabilities,
  ),
  '/industries/government-public-sector': industryPage(
    '/industries/government-public-sector',
    'Protect essential services across mandates and delivery boundaries.',
    'Government and public-sector programmes need traceability from mandate to control while coordinating diverse stakeholders.',
    [
      'Mandate-to-control traceability',
      'Citizen-data protection',
      'Workforce and role readiness',
      'Incident coordination and continuity',
    ],
    capabilities,
  ),
  '/industries/healthcare': industryPage(
    '/industries/healthcare',
    'Protect care delivery and sensitive data across connected environments.',
    'Healthcare programmes balance clinical continuity, sensitive-data governance, identity control and supplier readiness.',
    [
      'Clinical continuity',
      'Sensitive-data governance',
      'Identity and endpoint control',
      'Supplier and incident readiness',
    ],
    capabilities,
  ),
  '/industries/manufacturing-critical-infrastructure': industryPage(
    '/industries/manufacturing-critical-infrastructure',
    'Treat cyber risk as operational risk where connected systems affect production, safety or essential services.',
    'Manufacturing and critical infrastructure programmes connect IT and OT dependencies with segmentation, exercises and recovery priorities.',
    [
      'IT/OT dependency visibility',
      'Segmentation and access governance',
      'Operational incident exercises',
      'Recovery priorities and evidence',
    ],
    capabilities,
  ),
  '/industries/higher-education-cyber-academies': industryPage(
    '/industries/higher-education-cyber-academies',
    'Protect open digital environments while preparing people to perform in real security roles.',
    'Higher education and cyber academies need practical learning environments, role baselines and measurable progress alongside campus protection.',
    [
      'Campus identity and data protection',
      'Practical cyber learning environments',
      'Placement-aligned capability baselines',
      'Faculty enablement and measurable progress',
    ],
    [capabilities[0], capabilities[2], capabilities[3], capabilities[4]],
  ),
  '/solutions': {
    title: 'Capabilities assembled around the requirement.',
    description:
      'Bravewall defines the outcome, maps necessary controls and builds a governed programme before technology is selected.',
    eyebrow: 'Solutions',
    intro:
      'Bravewall does not begin with a product shortlist. We define the outcome, map necessary controls and build a governed programme.',
    cta: 'Shape a programme',
    sections: [
      {
        kind: 'cards',
        eyebrow: 'Capability pathways',
        title: 'Explore the requirement areas',
        body: 'Architecture, operating ownership, adoption and evidence are designed together. Specialist technologies enter only where they serve the agreed requirement.',
        cards: capabilities,
      },
      {
        kind: 'journey',
        eyebrow: 'Evaluation principle',
        title: 'Requirements first. Solutions second.',
        body: 'Options are considered against functional fit, architecture, deployment, compliance, support, operating effort and commercial suitability.',
      },
    ],
  },
  '/solutions/cyber-workforce-readiness': solutionPage(
    '/solutions/cyber-workforce-readiness',
    'Move from awareness and certificates to role-relevant practice, exercised judgement and measurable evidence of capability.',
    'Cyber Workforce Readiness connects risk, architecture, delivery ownership and evidence to practical capability development.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Role and readiness baselines',
      'Scenario-based practical learning',
      'Cyber range and simulated incident exercises',
      'Faculty or internal-trainer enablement',
      'Progress and capability evidence',
    ],
    [industries[0], industries[4]],
  ),
  '/solutions/governance-privacy-ai-risk': solutionPage(
    '/solutions/governance-privacy-ai-risk',
    'Turn regulatory, privacy and emerging AI-risk expectations into owned controls and reviewable evidence.',
    'Governance, Privacy & AI Risk connects obligations, ownership, control design and improvement evidence.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Obligation and control mapping',
      'Policy and operating-model design',
      'Data and AI-risk assessment',
      'Evidence and improvement roadmap',
    ],
    [industries[0], industries[1], industries[2]],
  ),
  '/solutions/identity-endpoint-user-security': solutionPage(
    '/solutions/identity-endpoint-user-security',
    'Reduce identity-led exposure across users, devices and privileged access.',
    'Identity, Endpoint & User Security connects access governance, endpoint architecture and exposure-led remediation.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Identity and access review',
      'Privileged-access governance',
      'Endpoint security architecture',
      'Exposure-led remediation',
    ],
    [industries[0], industries[2], industries[4]],
  ),
  '/solutions/cloud-application-security': solutionPage(
    '/solutions/cloud-application-security',
    'Build security into cloud foundations and software delivery without making it a late-stage gate.',
    'Cloud & Application Security connects cloud posture, application risk, secure delivery controls and remediation governance.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Cloud posture and architecture',
      'Application threat modelling',
      'Secure delivery controls',
      'Validation and remediation governance',
    ],
    [industries[1], industries[2], industries[3]],
  ),
  '/solutions/data-database-security': solutionPage(
    '/solutions/data-database-security',
    'Protect sensitive data by knowing where it is, why it is held, who can reach it and how controls are evidenced.',
    'Data & Database Security connects discovery, access, protection, retention and privacy evidence.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Discovery and classification',
      'Access and activity governance',
      'Protection and retention controls',
      'Privacy and assurance evidence',
    ],
    [industries[0], industries[2], industries[4]],
  ),
  '/solutions/network-threat-operations': solutionPage(
    '/solutions/network-threat-operations',
    'Connect visibility, validation and response so teams can detect what matters and act with confidence.',
    'Network Security & Threat Operations connects network control architecture, detection use cases, validation and incident readiness.',
    'A decision-ready programme connecting risk, architecture, delivery ownership and evidence.',
    [
      'Network control architecture',
      'Threat-detection use cases',
      'Exposure and control validation',
      'Incident readiness and exercises',
    ],
    [industries[0], industries[1], industries[3]],
  ),
  '/services': {
    title: 'From uncertainty to governed delivery.',
    description:
      'Bravewall structures requirements, evaluates suitable options and coordinates commercial and delivery activity.',
    eyebrow: 'Services & how we work',
    intro: 'Use the complete lifecycle or begin where the programme is stuck.',
    cta: 'Talk to Bravewall',
    sections: [
      {
        kind: 'journey',
        eyebrow: 'The lifecycle',
        title:
          'Discover. Define & design. Coordinate delivery. Govern & improve.',
        body: 'Bravewall can support the complete lifecycle or begin with advisory, assessment, architecture, PoC planning, delivery coordination or improvement governance.',
      },
      {
        kind: 'evidence',
        eyebrow: 'Outputs',
        title: 'Leave with decision-ready artefacts.',
        body: 'Every engagement should leave ownership and a path to measurable progress. Outputs depend on agreed scope.',
      },
      {
        kind: 'prose',
        eyebrow: 'Engagement modes',
        title: 'Begin where the programme is stuck.',
        body: 'Relevant modes may include advisory and requirements definition, assessment and current-state mapping, architecture and solution design, PoC and validation planning, delivery coordination, and governance and continual improvement.',
      },
    ],
  },
  '/partners': {
    title: 'Bring the right capability into a well-defined customer outcome.',
    description:
      'A requirements-led route for OEMs, specialist providers, distributors and system integrators.',
    eyebrow: 'Partners & OEMs',
    intro:
      'Bravewall creates a clear route from customer context to capability fit, delivery roles and governance without promising market access, exclusivity, pipeline or customer acceptance.',
    cta: 'Explore a partner conversation',
    sections: [
      {
        kind: 'journey',
        eyebrow: 'Partner pathway',
        title:
          'Customer context → qualification → capability fit → PoC → delivery roles → governance',
        body: 'Bravewall translates context, qualifies the opportunity, supports solution evaluation and makes responsibility boundaries visible.',
      },
      {
        kind: 'cards',
        eyebrow: 'Two routes',
        title: 'Choose the contribution you bring',
        body: 'The route depends on whether you provide technology capability or delivery capability.',
        cards: [
          {
            title: 'OEM or technology provider',
            body: 'Bring differentiated capability relevant to a defined customer requirement. Explore a structured OEM enquiry.',
            href: '/contact?type=oem',
          },
          {
            title: 'SI or delivery partner',
            body: 'Bring delivery capacity for a governed programme with clear roles, dependencies and escalation.',
            href: '/contact?type=partner',
          },
        ],
      },
      {
        kind: 'prose',
        eyebrow: 'Trust signals',
        title: 'A disciplined way to work together.',
        body: 'Opportunity qualification, solution-evaluation criteria, PoC definition, responsibility boundaries, customer-context translation and delivery governance keep the engagement clear.',
      },
    ],
  },
  '/about': {
    title: 'Clarity at the point security gets complicated.',
    description:
      'Bravewall is a requirements-led cybersecurity solutions integrator and programme coordinator.',
    eyebrow: 'About Bravewall',
    intro:
      'Bravewall turns fragmented needs and specialist inputs into one governed programme.',
    cta: 'Talk to Bravewall',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Positioning',
        title: 'Requirements-led cybersecurity solutions integration.',
        body: 'Bravewall helps organisations define cybersecurity requirements, assemble appropriate specialist capabilities and coordinate delivery across India and Australia.',
      },
      {
        kind: 'prose',
        eyebrow: 'Encompass',
        title: 'A Security Engagement Framework, not software.',
        body: 'Bravewall Encompass is a working method for discovery, design, coordination, governance and improvement. It is not a fixed product or technology stack.',
      },
      {
        kind: 'people',
        eyebrow: 'Leadership',
        title: 'Senior attention from requirement through delivery.',
        body: 'Leadership biographies are included as approved organisational context, not as customer evidence.',
        cards: [
          {
            title: 'Krishna Gollamudi',
            body: 'Managing Director. Customer and strategic direction across India and Australia.',
          },
          {
            title: 'Sandeep Madhavan',
            body: 'Chief Operating Officer. Engagement planning and operational coordination.',
          },
          {
            title: 'Siddharth Varadkar',
            body: 'Head, Strategic Partnerships. Specialist delivery ecosystem coordination.',
          },
          {
            title: 'Vidya Vishwanathan',
            body: 'Head, Market Outreach. Sector priorities and buyer communication.',
          },
        ],
      },
    ],
  },
  '/insights': {
    title: 'Practical thinking for security decisions.',
    description:
      'Decision-grade explainers and practical field notes for security leaders.',
    eyebrow: 'Insights',
    intro:
      'Useful enough to act on. Careful enough to trust. Every article should have a clear thesis, primary sources, author, review date and relevant next step.',
    cta: 'Discuss the requirement',
    sections: [
      {
        kind: 'articles',
        eyebrow: 'Featured',
        title: 'A decision-led editorial system.',
        body: 'Decision-led explainers adapted for Bravewall’s security engagement framework, with scope, ownership and next actions kept visible.',
        cards: insightCards,
      },
    ],
  },
  '/contact': {
    title: 'Start with the requirement.',
    description:
      'Share a brief description of your organisation, current requirement and preferred contact details.',
    eyebrow: 'Talk to Bravewall',
    intro:
      'Tell us what you are trying to protect, improve or demonstrate. A member of the Bravewall team will respond to arrange an initial discussion.',
    cta: 'Send an enquiry',
    sections: [
      {
        kind: 'form',
        eyebrow: 'Contact form',
        title: 'Share the context we need to start well.',
        body: 'Required fields are marked. Please do not submit credentials, payment data, security logs or incident evidence.',
      },
      {
        kind: 'prose',
        eyebrow: 'Direct contact',
        title: 'Prefer a direct conversation?',
        body: 'Email tech@bravewall.com or call +91 93223 90680 / +91 97022 80999.',
      },
    ],
  },
  '/privacy': {
    title: 'Privacy notice.',
    description:
      'How Bravewall handles information shared through this website and contact route.',
    eyebrow: 'Privacy',
    intro:
      'This short notice covers the information shared through the Bravewall website contact route.',
    cta: 'Return to contact',
    sections: [
      {
        kind: 'prose',
        eyebrow: 'Information collected',
        title: 'Only share what is needed to respond.',
        body: 'The contact route asks for business contact details and a description of the requirement. Do not submit credentials, payment data, security logs or incident evidence.',
      },
      {
        kind: 'prose',
        eyebrow: 'Use and retention',
        title: 'Purpose-limited handling.',
        body: "Bravewall uses submitted details to review and respond to the enquiry. The data owner, retention period and deletion process must be confirmed before any production form endpoint is enabled; this launch route opens the visitor's own email client.",
      },
    ],
  },
};

export const article = {
  title:
    'A regulatory decision brief: from obligation to governed requirement.',
  description:
    'A carefully scoped editorial placeholder showing the Bravewall article pattern.',
  category: 'Regulation & assurance',
};

export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  date: string;
  readMin: number;
  standfirst: string;
  image?: string;
  sections: { title: string; body: string }[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: 'regulatory-risk-brief',
    title: 'A regulatory decision brief: from obligation to governed requirement',
    description:
      'How to translate an obligation into a governed security requirement with clear ownership and evidence.',
    category: 'Regulation & assurance',
    author: 'Bravewall editorial',
    date: 'Editorial placeholder',
    readMin: 6,
    standfirst:
      'A decision-led brief should clarify the obligation, its scope and the practical questions a security leader must resolve next.',
    sections: [
      {
        title: 'Define the obligation',
        body:
          'Start with the primary source, effective dates and scope. Separate mandatory requirements from guidance and interpretation before assigning work.',
      },
      {
        title: 'Turn it into an operating requirement',
        body:
          'Translate the obligation into an owned control, evidence path, exception process and review cadence that delivery teams can actually use.',
      },
    ],
  },
  {
    slug: 'cert-in-incident-reporting',
    title: 'CERT-In incident reporting: the six-hour rule',
    description:
      'What Indian organisations need to decide, prepare and evidence before a cyber incident starts the CERT-In reporting clock.',
    category: 'Regulation & assurance',
    author: 'Krishna Gollamudi',
    date: '25 August 2026',
    readMin: 6,
    image: '/images/insights/cert-in-incident-reporting-thumb.webp',
    standfirst:
      'Six hours is not a recovery window. It is a decision window, and it cannot be met by a process that begins with scheduling a meeting.',
    sections: [
      {
        title: 'The clock starts at noticing',
        body:
          'CERT-In reporting requirements make the moment an incident is noticed operationally important. Waiting for certainty about scope can consume the window, so the organisation needs a documented decision rule and a named owner before an event occurs.',
      },
      {
        title: 'Reportable is broader than damaging',
        body:
          'The relevant incident types extend beyond confirmed data loss. Probing, unauthorised access, malicious code, ransomware, denial-of-service, phishing, attacks on critical systems and data leaks all require an organisation to know how it will assess and escalate what it sees.',
      },
      {
        title: 'Prepare the evidence path',
        body:
          'A practical readiness check covers contact routes, current reporting formats, secure log retention, access to the people who can make the call and a record of the decisions taken. The aim is not to predict the incident; it is to make the response governable.',
      },
    ],
  },
  {
    slug: 'dpdp-act-compliance',
    title: 'The DPDP Act, in plain English',
    description:
      'A practical readiness view of India’s Digital Personal Data Protection Act: purpose, notice, deletion, rights and breach response.',
    category: 'Regulation & assurance',
    author: 'Krishna Gollamudi',
    date: '20 August 2026',
    readMin: 5,
    image: '/images/insights/dpdp-act-compliance-thumb.webp',
    standfirst:
      'Data protection readiness starts with knowing what personal data you hold, why you hold it and what happens when the purpose ends.',
    sections: [
      {
        title: 'Start with the data, not the policy',
        body:
          'The first useful step is to map the personal data held across customer, workforce, support and operational systems. That makes notice, purpose, retention and access questions concrete instead of abstract.',
      },
      {
        title: 'Purpose and deletion need owners',
        body:
          'A defensible programme explains why data is collected, how people are informed, when it should be deleted and how suppliers handle their copies. These are operating controls, not documents that can sit separately from delivery teams.',
      },
      {
        title: 'Treat breach response as a capability',
        body:
          'If personal data is breached, the organisation needs an escalation path, decision authority, communications plan and evidence trail. Preparation should be based on the applicable law and current source material, not on generic compliance language.',
      },
    ],
  },
  {
    slug: 'cyber-training-business-case',
    title: 'Building the internal case for practical cyber training',
    description:
      'How education and placement teams can turn practical cyber training into a measurable, decision-ready programme.',
    category: 'Cyber workforce readiness',
    author: 'Krishna Gollamudi',
    date: '10 August 2026',
    readMin: 5,
    image: '/images/insights/cyber-training-business-case-thumb.webp',
    standfirst:
      'A fundable training case connects employer expectations, a baseline of current readiness and an outcome the institution already measures.',
    sections: [
      {
        title: 'Write for the decision-maker',
        body:
          'The person who wants practical training and the person who approves recurring spend are measured on different outcomes. A useful proposal connects role-relevant practice to placement, capability or delivery outcomes rather than leading with modules and certificates.',
      },
      {
        title: 'Establish the baseline before buying',
        body:
          'Ask what employers test for, how many learners can currently demonstrate it and what the gap looks like under realistic conditions. A baseline makes improvement visible and gives the institution a reference point for later decisions.',
      },
      {
        title: 'Evidence beats attendance',
        body:
          'A practical programme should leave evidence of judgement, investigation, communication and response under scenario conditions. Attendance can be recorded, but it does not by itself demonstrate readiness for a real security role.',
      },
    ],
  },
  {
    slug: 'cybersecurity-skills-gap-india',
    title: 'The cybersecurity skills gap in India is a readiness gap',
    description:
      'Why degrees and certifications do not always translate into first-role readiness, and how organisations can make practical capability visible.',
    category: 'Cyber workforce readiness',
    author: 'Krishna Gollamudi',
    date: '6 July 2026',
    readMin: 5,
    image: '/images/insights/cybersecurity-skills-gap-india-thumb.webp',
    standfirst:
      'The distance between a syllabus and the first ninety days in a security operations role is where many hiring and onboarding problems begin.',
    sections: [
      {
        title: 'Knowledge is not the same as performance',
        body:
          'Exams reward recall under known conditions. A live incident brings incomplete information, competing signals and consequences for guessing. A candidate can explain a technique and still need practice recognising and handling it in context.',
      },
      {
        title: 'Build readiness through scenarios',
        body:
          'Closing the gap means realistic environments, hands-on investigation, communication and decision-making. Frameworks such as MITRE ATT&CK can help structure scenarios, but the evidence must remain tied to the role and the operating context.',
      },
      {
        title: 'What employers and educators can measure',
        body:
          'Both sides benefit from clearer role expectations, practical baselines and evidence that shows what a person can do. Certifications remain useful; they are strongest when paired with demonstrated capability under realistic conditions.',
      },
    ],
  },
  {
    slug: 'how-fast-are-leaked-credentials-exploited',
    title: 'How fast are leaked credentials exploited?',
    description:
      'Why exposure monitoring, identity controls and detection speed determine whether leaked credentials become an incident or a crisis.',
    category: 'Threat & exposure',
    author: 'Krishna Gollamudi',
    date: '22 June 2026',
    readMin: 6,
    image: '/images/insights/how-fast-are-leaked-credentials-exploited-thumb.webp',
    standfirst:
      'A leaked password can be tested quickly. The operational question is how soon the organisation will know and what it can do next.',
    sections: [
      {
        title: 'Exposure is a timing problem',
        body:
          'Credentials can move from leak to testing without waiting for a quarterly review. The longer the gap between exposure and detection, the more opportunity there is for unauthorised access, persistence or abuse of valid sessions.',
      },
      {
        title: 'Controls work as a chain',
        body:
          'MFA, password resets, session revocation, access reviews, external exposure monitoring and useful logs each reduce part of the risk. No single control answers the whole question, especially when attackers use stolen session material or work around user prompts.',
      },
      {
        title: 'Ask the uncomfortable question',
        body:
          'If a privileged or business-critical credential appeared today, who would know, who could act and what evidence would show that the response was complete? The answer exposes the real readiness gap.',
      },
    ],
  },
  {
    slug: 'imo-cyber-risk-management-indian-shipping',
    title: 'IMO cyber risk management for Indian shipping operators',
    description:
      'What the maritime cyber risk framework means for Indian operators, safety-management systems, accountability and audit evidence.',
    category: 'Operational resilience',
    author: 'Krishna Gollamudi',
    date: '3 September 2026',
    readMin: 7,
    image: '/images/insights/imo-cyber-risk-management-indian-shipping-thumb.webp',
    standfirst:
      'Maritime cyber risk belongs in the existing safety-management framework, where operational ownership and audit evidence matter as much as technical controls.',
    sections: [
      {
        title: 'Cyber risk sits inside the safety case',
        body:
          'The practical question is not whether a vessel has a list of security products. It is whether cyber risk has been identified, assessed and governed alongside other operational risks in the safety-management system.',
      },
      {
        title: 'Accountability must be explicit',
        body:
          'A current programme needs a person or entity accountable for planning, resourcing and executing cyber security activities, with the authority and expertise to do the work. A policy without an owner is not an operating model.',
      },
      {
        title: 'Evidence should reflect the ship and shore interface',
        body:
          'Readiness includes identifying systems whose disruption affects operations, controlling IT and OT exposure, preparing response and recovery procedures, training relevant people and practising what the plan requires. The audit trail should show that these activities are real.',
      },
    ],
  },
];
