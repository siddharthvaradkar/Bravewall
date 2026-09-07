# Bravewall image requirements register

This is the production handoff list for approved visual assets. The current site
uses restrained placeholders for items without an approved visual. Three existing
draft visuals are recorded below; their launch-pack approval remains outstanding.

## Required visuals

| ID | Image / component | Page and section reference | Purpose | Desktop source size | Mobile rendering | Ratio | Recommended creative direction | Alt-text treatment | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| IMG-01 | Homepage hero visual | `/` - hero, right column (`Homepage hero banner`) | Establish the security operating model beside the proposition | 1440 x 810 px minimum; render up to 560 x 315 px | Dedicated 4:5 composition below hero copy | 16:9 desktop; 4:5 mobile | Abstract security operating map: requirements, people, evidence and responsibilities; navy, blue, cyan and cool grey | Describe the operating map if informative; otherwise `alt=""` and keep the explanation in HTML | Refined desktop and mobile v2 ready; replace v1 only after approval |
| IMG-02 | Educate - Detect - Protect diagram | `/` - Bravewall promise / `Educate. Detect. Protect.` | Explain the three narrative pillars and their relationship | 1200 x 900 px minimum; render up to 960 x 720 px | Stack the three nodes vertically; minimum 320 x 240 px | 4:3 | Rounded nodes connecting capability, signals and controls; no product screens or claims | Short description of the three connected pillars; do not put essential text only in the image | Placeholder in use |
| IMG-03 | Industry context visual | `/industries/[industry]` - hero or operating challenge | Add sector texture without implying a real customer or facility | 1600 x 900 px minimum; render up to 1200 x 675 px | Dedicated 4:5 composition below intro | 16:9 desktop; 4:5 mobile | Editorial illustration of dependencies, continuity, stakeholders and evidence for the sector | Use the sector and operating idea, e.g. `Abstract BFSI control and dependency map` | BFSI desktop and mobile v2 ready; other industries pending |
| IMG-04 | Capability visual | `/solutions/[solution]` - hero or capability scope | Support the business outcome without presenting a product interface | 1600 x 900 px minimum; render up to 1200 x 675 px | Dedicated 4:5 composition below outcome copy; retain labels in HTML | 16:9 desktop; 4:5 mobile | Diagram of requirement -> capability -> delivery -> evidence | Describe the capability relationship, not a fictional product or result | Workforce readiness desktop and mobile v2 ready; other solutions pending |
| IMG-05 | Services lifecycle visual | `/services` - lifecycle / engagement method | Show discovery, design, coordination and governance as a sequence | 1600 x 900 px minimum; render up to 1200 x 675 px | Convert to a vertical process; minimum 320 x 180 px | 16:9 | Four- or five-stage process strip with clear ownership and checkpoints | Explain the lifecycle stages if informative; otherwise decorative empty alt | Placeholder recommended |
| IMG-06 | Partner pathway visual | `/partners` - partner pathway | Explain customer context, qualification, capability fit, PoC, roles and governance | 1600 x 900 px minimum; render up to 1200 x 675 px | Vertical pathway below copy | 16:9 | Neutral ecosystem pathway; no partner, OEM, distributor or customer marks | `Requirements-led partner pathway from context to governed delivery` | Placeholder recommended |
| IMG-07 | Article card visual set | `/insights` - article grid | Give each editorial taxonomy a consistent visual identity | 900 x 600 px minimum; render 360 x 240 px cards | Full card width; never hide category, date or reading time | 3:2 | Abstract editorial marks for regulation, workforce, threat exposure and operational resilience | Article-specific topic description; never imply evidence or a customer story | Placeholder in use |
| IMG-08 | Article lead visual | `/insights/[article]` - article opening | Establish the article topic before long-form reading | 1200 x 800 px minimum; render up to 760 x 507 px | Full reading width; minimum 320 x 213 px | 3:2 | Same taxonomy style as the hub card, with a single decision-led idea | Describe the article subject and decision context | Placeholder in use |
| IMG-09 | Article supporting visual | `/insights/[article]` - before Sources and editorial review | Break up long-form content with a relevant model, checklist or timeline | 1200 x 800 px minimum; render up to 760 x 507 px | Full reading width; keep adjacent explanation in HTML | 3:2 | A restrained evidence model or decision tree; no fabricated regulatory text | Describe the model or leave decorative if text is fully present in HTML | Placeholder in use |
| IMG-10 | Leadership portraits | `/about` - Leadership cards | Add approved human context | 800 x 1000 px minimum; render about 240 x 300 px | Full card width above the name and role | 4:5 | Authentic approved portrait on a neutral background; consistent crop and lighting | Person's approved name and role | Not supplied |
| IMG-11 | Approved light logo | Header on light surfaces | Identify Bravewall consistently | 1500 x 750 px supplied; render about 150 x 75 px | Same asset; do not upscale | 2:1 | Supplied blue Bravewall logo only | `Bravewall` | Approved and in use |
| IMG-12 | Approved dark logo | Footer / dark surfaces | Maintain contrast on navy surfaces | 1500 x 750 px supplied; render about 150 x 75 px | Same asset; do not upscale | 2:1 | Supplied white Bravewall logo only | `Bravewall` | Approved and in use |

## Asset rules

- Do not use customer, partner, OEM or CyCube names, marks, screenshots or
  implied deployment evidence.
- Do not use hacker imagery, neon locks, random code, anonymous server rooms or
  fictional dashboards.
- Keep diagrams in one style: 1.5-2 px lines, rounded nodes, limited palette
  and short labels.
- Do not place essential copy inside an image. Repeat meaningful context in HTML.
- Supply modern formats where possible (`.webp` or `.avif`), with a descriptive
  filename such as `bfsi-control-dependency-map.webp`.
- Preserve fixed aspect ratios to prevent layout shift. Provide explicit width
  and height in the component when final assets are added.
- Every final asset needs an approved source, copyright/usage confirmation,
  alt-text decision and mobile crop review before release.

## Generated review batch 1

These files are generated concepts, not automatically approved production assets. Do not wire
them into page components until the content/design owner records approval below. Source PNGs are
retained for editing; optimized WebP derivatives are the proposed web assets.

| Asset ID | Review asset | Source master | Proposed placement | Proposed alt text | Approval status |
| --- | --- | --- | --- | --- | --- |
| IMG-01 | `/images/generated/homepage-requirements-operating-map-v1.webp` | `/images/generated/source/homepage-requirements-operating-map-v1.png` | Home hero, right side of proposition | `Abstract map connecting security requirements, capabilities and evidence` | Pending design and mobile-crop approval |
| IMG-03-BFSI | `/images/generated/bfsi-control-dependency-map-v1.webp` | `/images/generated/source/bfsi-control-dependency-map-v1.png` | BFSI hero or operating-context section | `Abstract BFSI map connecting identity, data, third parties and control evidence` | Pending regulatory-context and mobile-crop approval |
| IMG-04-WORKFORCE | `/images/generated/cyber-workforce-readiness-pathway-v1.webp` | `/images/generated/source/cyber-workforce-readiness-pathway-v1.png` | Cyber Workforce Readiness hero or capability section | `Abstract pathway showing practical cyber capability developing through scenarios and feedback` | Pending capability-owner and mobile-crop approval |

### Generation record

- Generation method: OpenAI built-in image generation.
- Shared visual direction: premium consulting editorial visual; restrained 3D/vector hybrid;
  deep navy, electric blue, cyan, cool grey and white; no embedded text.
- Shared exclusions: no customers, partners, OEMs, CyCube, product interfaces, dashboards,
  certifications, performance evidence, padlocks, shields, hooded hackers, random code or
  watermarks.
- Homepage prompt intent: a requirement signal becomes a connected operating system of people,
  controls, evidence and accountable delivery, with negative space for HTML copy.
- BFSI prompt intent: a regulated financial ecosystem connecting banking, payment, identity,
  data, third-party and evidence dependencies without representing a real institution.
- Workforce prompt intent: practical capability develops through scenarios, decisions, feedback
  and readiness evidence without certificates, scores or placement claims.

### Approval record

For each asset, record the reviewer, decision, date and any required crop or revision. Only change
the corresponding status to `Approved for production` after desktop and 360 px mobile review.

## Refined review batch 2

Batch 2 closes the visual findings from the first review. Version 1 remains available for audit and
comparison; implementation should use version 2 only after approval.

| Asset | Desktop review file | Dedicated mobile review file | Improvements completed | Status |
| --- | --- | --- | --- | --- |
| Homepage | `/images/generated/homepage-requirements-operating-map-v2.webp` | `/images/generated/homepage-requirements-operating-map-v2-mobile-art.webp` | Reduced glow; simplified hierarchy; repeatable requirement, capability, ownership, validation, evidence and governance shapes | Pending owner approval |
| BFSI | `/images/generated/bfsi-control-dependency-map-v2.webp` | `/images/generated/bfsi-control-dependency-map-v2-mobile-art.webp` | Removed bank monument, globe and skyline; reduced to five abstract dependencies; added copy space and complete mobile composition | Pending owner and regulatory-context approval |
| Workforce readiness | `/images/generated/cyber-workforce-readiness-pathway-v2.webp` | `/images/generated/cyber-workforce-readiness-pathway-v2-mobile-art.webp` | Removed brain silhouette; introduced scenario branches, feedback, validation and evidence; reduced glow; complete mobile pathway | Pending capability-owner approval |

### Batch 2 visual vocabulary

- Open circular origin: requirement or starting condition.
- Rounded module: capability or structured work package.
- Paired circular markers: accountable ownership or practised capability.
- Diamond: validation, decision or evidence checkpoint.
- Layered record: evidence or reviewable output.
- Subtle outer boundary: governance and programme scope.

These meanings must be explained by nearby HTML where they materially affect understanding. Do not
embed a legend or essential labels inside raster artwork.
