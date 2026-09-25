export interface ServiceFaq {
  question: string
  answer: string
}

export interface Service {
  slug: string
  name: string
  category: 'Digital & Technology' | 'Business & Consulting' | 'People & Operations' | 'Marketing & Growth'
  icon: string
  shortDescription: string
  tagline: string
  overview: string
  whoItsFor: Array<string>
  whatsIncluded: Array<string>
  benefits: Array<string>
  process: Array<{ title: string; description: string }>
  deliverables: Array<string>
  faq: Array<ServiceFaq>
}

const services: Array<Service> = [
  {
    slug: 'brand-development',
    name: 'Brand Development',
    category: 'Digital & Technology',
    icon: 'Fingerprint',
    shortDescription:
      'Build a professional and memorable brand identity designed for long-term recognition.',
    tagline: 'A brand your market remembers and trusts.',
    overview:
      'C-DATA INTERNATIONAL builds brand foundations that hold up as a business scales — naming direction, visual identity, tone of voice and brand guidelines that stay consistent across every market and every channel you operate in.',
    whoItsFor: [
      'New businesses defining their identity for the first time',
      'Founders preparing to launch in international markets',
      'Teams that have outgrown a do-it-yourself logo and style',
    ],
    whatsIncluded: [
      'Brand discovery and positioning workshop',
      'Logo and visual identity system',
      'Colour palette, typography and imagery direction',
      'Brand voice and messaging guidelines',
      'Brand style guide document',
    ],
    benefits: [
      'A consistent identity across web, print and social',
      'Stronger first impressions with international clients',
      'A foundation your marketing and product teams can build on',
      'Reduced back-and-forth on future design decisions',
    ],
    process: [
      { title: 'Discovery', description: 'We learn your business, audience and long-term goals.' },
      { title: 'Direction', description: 'We present positioning and visual directions to choose from.' },
      { title: 'Development', description: 'Your selected direction is refined into a full identity system.' },
      { title: 'Delivery', description: 'Final assets and a brand guide are handed over, ready to use.' },
    ],
    deliverables: ['Logo files (all formats)', 'Brand style guide (PDF)', 'Colour and typography specification', 'Social media brand kit'],
    faq: [
      {
        question: 'Do you work with existing brands or only new ones?',
        answer:
          'Both. If you already have a brand in place, our Brand Recreation service is designed to refresh and modernise it rather than start from zero.',
      },
      {
        question: 'How long does brand development take?',
        answer:
          'Timelines depend on scope and how quickly feedback is turned around. Your account team will confirm an estimated timeline once requirements are confirmed.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    category: 'Digital & Technology',
    icon: 'PenTool',
    shortDescription:
      'Professional visual designs for businesses, campaigns, marketing and digital platforms.',
    tagline: 'Visuals built for professional, global-facing brands.',
    overview:
      'From social media graphics to sales decks and campaign creative, our design team produces visuals that keep every touchpoint looking like it belongs to the same professional organisation.',
    whoItsFor: [
      'Marketing teams running ongoing campaigns',
      'Businesses that need consistent, on-brand visuals at volume',
      'Founders who need presentation and pitch materials that look credible internationally',
    ],
    whatsIncluded: [
      'Social media graphics and templates',
      'Marketing and campaign creative',
      'Presentation and pitch deck design',
      'Print-ready design (brochures, flyers, business cards)',
      'Digital ad creative',
    ],
    benefits: [
      'Consistent visual quality across every channel',
      'Faster turnaround than building an in-house design team',
      'Design that reflects an established, professional business',
    ],
    process: [
      { title: 'Brief', description: 'You share what the piece needs to communicate and where it will appear.' },
      { title: 'Concepts', description: 'We produce initial design directions for your review.' },
      { title: 'Refinement', description: 'We revise based on your feedback until it is right.' },
      { title: 'Handover', description: 'Final files are delivered in the formats you need.' },
    ],
    deliverables: ['Source design files', 'Export files (PNG, JPG, PDF as needed)', 'Usage-ready templates where applicable'],
    faq: [
      {
        question: 'Can you match our existing brand guidelines?',
        answer: 'Yes. Share your existing guidelines and every design will be produced to match them.',
      },
      {
        question: 'Do you design for both digital and print?',
        answer: 'Yes, our team produces both digital-first assets and print-ready files.',
      },
    ],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    category: 'Digital & Technology',
    icon: 'Code2',
    shortDescription:
      'Modern responsive websites and web solutions designed for performance, usability and growth.',
    tagline: 'A website built to represent your business globally.',
    overview:
      'We design and build responsive, fast-loading websites and web applications suited to how your business actually operates — from a professional brochure site to a more complex web platform with forms, bookings or e-commerce.',
    whoItsFor: [
      'Businesses launching their first professional website',
      'Companies replacing an outdated or underperforming site',
      'Organisations needing a web platform integrated with business tools',
    ],
    whatsIncluded: [
      'Responsive website design and development',
      'Content structure and on-page SEO setup',
      'Contact, booking and lead-capture forms',
      'Performance and accessibility optimisation',
      'Basic training on managing your site',
    ],
    benefits: [
      'A site that works cleanly on desktop, tablet and mobile',
      'Faster load times and stronger search visibility',
      'A platform that can grow in features as your business grows',
    ],
    process: [
      { title: 'Plan', description: 'We map site structure, content needs and required functionality.' },
      { title: 'Design', description: 'Pages are designed for your review before development starts.' },
      { title: 'Build', description: 'The site is developed, tested across devices and refined.' },
      { title: 'Launch', description: 'We publish the site and confirm everything works as expected.' },
    ],
    deliverables: ['Live, deployed website', 'Source files and access credentials', 'Basic usage documentation'],
    faq: [
      {
        question: 'Do you also handle ongoing maintenance?',
        answer:
          'Yes, ongoing support and updates can be arranged as part of a Business, Professional or Enterprise package.',
      },
      {
        question: 'Can you work with an existing website instead of rebuilding it?',
        answer: 'Yes, we can review, improve or extend an existing website rather than starting over.',
      },
    ],
  },
  {
    slug: 'content-writing',
    name: 'Content Writing',
    category: 'Digital & Technology',
    icon: 'FileText',
    shortDescription: 'Professional website, marketing, business and SEO-focused content.',
    tagline: 'Words that read as professional and convert as intended.',
    overview:
      'Clear, professional copywriting for websites, marketing materials, product descriptions and business documents — written for the audience and market you are trying to reach.',
    whoItsFor: [
      'Businesses launching or refreshing a website',
      'Teams running content or email marketing campaigns',
      'Companies needing SEO-aware content for organic growth',
    ],
    whatsIncluded: [
      'Website copywriting',
      'Blog and article content',
      'Product and service descriptions',
      'SEO-focused keyword-aware writing',
      'Editing and proofreading of existing content',
    ],
    benefits: [
      'Professional tone consistent across every page',
      'Content structured to support search visibility',
      'Freeing your team from writing everything in-house',
    ],
    process: [
      { title: 'Brief', description: 'We confirm audience, tone and the goal of each piece of content.' },
      { title: 'Draft', description: 'A first draft is written for your review.' },
      { title: 'Revise', description: 'Feedback is incorporated until the content is approved.' },
      { title: 'Deliver', description: 'Final copy is delivered ready to publish.' },
    ],
    deliverables: ['Final content documents', 'SEO metadata where applicable', 'Revision notes if requested'],
    faq: [
      {
        question: 'Can you write in a specific brand voice?',
        answer: 'Yes, share any existing tone-of-voice guidelines or examples and we will write to match them.',
      },
      {
        question: 'Do you write for non-English-speaking markets?',
        answer: 'Let us know your target market and language requirements when you submit your request.',
      },
    ],
  },
  {
    slug: 'research-analysis',
    name: 'Research & Analysis',
    category: 'Business & Consulting',
    icon: 'BarChart3',
    shortDescription: 'Business research, market research, competitor analysis and actionable insights.',
    tagline: 'Decisions backed by research, not guesswork.',
    overview:
      'We gather and structure the market, competitor and industry information business leaders need to make confident decisions — from entering a new market to evaluating a new product idea.',
    whoItsFor: [
      'Founders evaluating a new market or product',
      'Businesses assessing competitors before a strategic decision',
      'Teams that need structured research without building an in-house analyst function',
    ],
    whatsIncluded: [
      'Market research and sizing',
      'Competitor analysis',
      'Industry and trend reports',
      'Customer and audience research',
      'Summary findings with actionable recommendations',
    ],
    benefits: [
      'Clear, structured findings instead of raw data',
      'Faster decision-making backed by evidence',
      'Reduced risk when entering a new market or segment',
    ],
    process: [
      { title: 'Scope', description: 'We define the specific questions the research needs to answer.' },
      { title: 'Gather', description: 'Data is collected from relevant, credible sources.' },
      { title: 'Analyse', description: 'Findings are structured into clear, usable insights.' },
      { title: 'Report', description: 'You receive a report with practical recommendations.' },
    ],
    deliverables: ['Research report document', 'Key findings summary', 'Supporting data where applicable'],
    faq: [
      {
        question: 'What industries can you research?',
        answer: 'Our research process adapts to most industries; share your sector and scope when requesting a consultation.',
      },
      {
        question: 'How is the research delivered?',
        answer: 'As a structured written report, typically with an executive summary and supporting detail.',
      },
    ],
  },
  {
    slug: 'online-tutoring',
    name: 'Online Tutoring',
    category: 'People & Operations',
    icon: 'GraduationCap',
    shortDescription: 'Professional online learning and tutoring support across selected subjects and skills.',
    tagline: 'Structured learning support, delivered remotely.',
    overview:
      'Our tutoring support connects learners with structured, professional online sessions across a range of subjects and business or academic skills — useful for individuals, teams and organisations investing in skill development.',
    whoItsFor: [
      'Individuals building skills for career or academic growth',
      'Teams needing structured upskilling in a specific subject',
      'Organisations offering learning support as an employee benefit',
    ],
    whatsIncluded: [
      'One-to-one or small-group tutoring sessions',
      'Session scheduling and coordination',
      'Progress tracking where applicable',
      'Subject and skill matching to the right tutor',
    ],
    benefits: [
      'Flexible scheduling around your availability',
      'Structured sessions with clear learning goals',
      'Support across a range of subjects and skill levels',
    ],
    process: [
      { title: 'Assess', description: 'We understand the subject, level and goals involved.' },
      { title: 'Match', description: 'A suitable tutor and session structure is arranged.' },
      { title: 'Learn', description: 'Sessions run on the agreed schedule.' },
      { title: 'Review', description: 'Progress is reviewed and the plan adjusted if needed.' },
    ],
    deliverables: ['Confirmed session schedule', 'Session summaries where applicable'],
    faq: [
      {
        question: 'What subjects are available?',
        answer: 'Availability depends on current tutor coverage — share the subject you need when you get in touch.',
      },
      {
        question: 'Can sessions be arranged for a team rather than one person?',
        answer: 'Yes, group and organisational learning arrangements can be scoped on request.',
      },
    ],
  },
  {
    slug: 'hr-solutions',
    name: 'HR Solutions',
    category: 'People & Operations',
    icon: 'Users',
    shortDescription:
      'Flexible HR support designed to simplify recruitment, employee administration and business processes.',
    tagline: 'HR support that scales with your headcount.',
    overview:
      'From recruitment support to employee documentation and HR process design, we help growing businesses manage people operations professionally without carrying the full cost of an in-house HR department.',
    whoItsFor: [
      'Small businesses hiring their first employees',
      'Growing teams without a dedicated HR function',
      'Organisations formalising existing HR processes',
    ],
    whatsIncluded: [
      'Recruitment and candidate screening support',
      'Employee onboarding documentation',
      'HR policy and process design',
      'Employee record administration support',
      'Ongoing HR advisory support',
    ],
    benefits: [
      'Professional HR processes without a full internal team',
      'Faster, more structured hiring',
      'Reduced administrative load on founders and managers',
    ],
    process: [
      { title: 'Assess', description: 'We review your current HR processes and immediate needs.' },
      { title: 'Design', description: 'Relevant policies, documents or hiring workflows are prepared.' },
      { title: 'Implement', description: 'Processes are put into practice with your team.' },
      { title: 'Support', description: 'Ongoing HR assistance continues as your team grows.' },
    ],
    deliverables: ['HR policy documents', 'Onboarding templates', 'Recruitment support materials'],
    faq: [
      {
        question: 'Can you help with recruitment for international hires?',
        answer: 'Yes, let us know the roles and locations involved so we can scope the right support.',
      },
      {
        question: 'Do you handle payroll?',
        answer: 'Payroll requirements can be discussed during your consultation to confirm what is included.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing & Social Media',
    category: 'Marketing & Growth',
    icon: 'Megaphone',
    shortDescription:
      'Strategic digital marketing, social media management, content campaigns and audience growth.',
    tagline: 'Reach the audience your business is built for.',
    overview:
      'We plan and run digital marketing that builds visibility and audience growth across the channels that matter to your business — social media, content campaigns, email and paid channels where appropriate.',
    whoItsFor: [
      'Businesses building a digital presence from scratch',
      'Teams needing consistent social media management',
      'Companies preparing to reach international audiences online',
    ],
    whatsIncluded: [
      'Social media strategy and content calendars',
      'Social media account management',
      'Digital campaign planning and execution',
      'Email marketing support',
      'Performance reporting',
    ],
    benefits: [
      'Consistent presence across your key platforms',
      'Campaigns aligned to actual business goals',
      'Clear reporting on what is working',
    ],
    process: [
      { title: 'Strategy', description: 'We define channels, goals and target audience.' },
      { title: 'Plan', description: 'A content and campaign calendar is built.' },
      { title: 'Execute', description: 'Content and campaigns go live on schedule.' },
      { title: 'Report', description: 'Performance is reviewed and the plan refined.' },
    ],
    deliverables: ['Content calendar', 'Published social content', 'Performance report'],
    faq: [
      {
        question: 'Which platforms do you manage?',
        answer: 'Coverage depends on where your audience is active — this is confirmed during strategy planning.',
      },
      {
        question: 'Do you handle paid advertising too?',
        answer: 'Paid campaign support can be scoped in alongside organic content management.',
      },
    ],
  },
  {
    slug: 'virtual-assistance',
    name: 'Virtual Assistance',
    category: 'People & Operations',
    icon: 'Headset',
    shortDescription: 'Reliable remote administrative, operational and business support.',
    tagline: 'Dependable support for the tasks that pile up.',
    overview:
      'Our virtual assistance service gives founders and teams back their time by handling administrative, scheduling, communication and operational tasks reliably and professionally.',
    whoItsFor: [
      'Founders spending too much time on administrative work',
      'Teams that need overflow operational support',
      'Businesses without the volume to justify a full-time hire',
    ],
    whatsIncluded: [
      'Email and calendar management',
      'Data entry and document preparation',
      'Customer communication support',
      'Scheduling and coordination',
      'General administrative and operational tasks',
    ],
    benefits: [
      'More time back for high-value work',
      'Consistent coverage for routine operational tasks',
      'Flexible support that scales with workload',
    ],
    process: [
      { title: 'Onboard', description: 'We understand your tools, workflows and priorities.' },
      { title: 'Assign', description: 'Tasks are structured and assigned to your support team.' },
      { title: 'Support', description: 'Ongoing tasks are handled on an agreed schedule.' },
      { title: 'Review', description: 'Workload and priorities are reviewed regularly.' },
    ],
    deliverables: ['Completed task logs', 'Regular status updates'],
    faq: [
      {
        question: 'What tools do your assistants work with?',
        answer: 'Our team adapts to the tools your business already uses; let us know your setup during onboarding.',
      },
      {
        question: 'Is support available across time zones?',
        answer: 'Scheduling can be arranged to match your business hours and location where possible.',
      },
    ],
  },
  {
    slug: 'business-consulting',
    name: 'Business Consulting',
    category: 'Business & Consulting',
    icon: 'Compass',
    shortDescription: 'Practical guidance to help businesses improve strategy, operations and growth.',
    tagline: 'Practical guidance, not theory.',
    overview:
      'We work alongside founders and leadership teams on the strategy, operations and growth decisions that matter most — with practical recommendations rather than generic advice.',
    whoItsFor: [
      'Founders planning their next stage of growth',
      'Businesses reviewing operations for efficiency',
      'Teams facing a specific strategic decision',
    ],
    whatsIncluded: [
      'Business strategy sessions',
      'Operational review and recommendations',
      'Growth planning support',
      'Process improvement guidance',
    ],
    benefits: [
      'Clearer strategic direction',
      'Practical, actionable recommendations',
      'An outside perspective on internal challenges',
    ],
    process: [
      { title: 'Understand', description: 'We learn your business, goals and current challenges.' },
      { title: 'Assess', description: 'We review relevant operations, data and context.' },
      { title: 'Recommend', description: 'Practical recommendations are presented for discussion.' },
      { title: 'Support', description: 'We stay available as recommendations are put into action.' },
    ],
    deliverables: ['Consulting summary document', 'Action plan recommendations'],
    faq: [
      {
        question: 'Is this a one-off engagement or ongoing?',
        answer: 'Both formats are available — a single strategy session or ongoing advisory support.',
      },
      {
        question: 'Do you specialise in a particular industry?',
        answer: 'Our consulting approach adapts across industries; share your sector when requesting a consultation.',
      },
    ],
  },
  {
    slug: 'ecommerce-support',
    name: 'E-Commerce Support',
    category: 'Business & Consulting',
    icon: 'ShoppingCart',
    shortDescription: 'Support for online stores, product management, content, operations and digital commerce.',
    tagline: 'Everything an online store needs to run smoothly.',
    overview:
      'From product listings to store operations, we support online sellers with the day-to-day and strategic work needed to run a professional e-commerce business.',
    whoItsFor: [
      'Businesses launching a new online store',
      'Sellers managing a growing product catalogue',
      'Teams needing operational support for order and inventory processes',
    ],
    whatsIncluded: [
      'Product listing creation and optimisation',
      'Store setup and configuration support',
      'Catalogue and inventory management support',
      'E-commerce content and imagery coordination',
      'Order and operations process support',
    ],
    benefits: [
      'A more professional, better-organised storefront',
      'Less time spent on repetitive catalogue work',
      'Support that scales with catalogue size',
    ],
    process: [
      { title: 'Review', description: 'We review your current store and catalogue structure.' },
      { title: 'Organise', description: 'Listings, categories and content are structured and improved.' },
      { title: 'Support', description: 'Ongoing catalogue and operational support continues.' },
      { title: 'Optimise', description: 'Store performance is reviewed and refined over time.' },
    ],
    deliverables: ['Updated product listings', 'Store organisation summary'],
    faq: [
      {
        question: 'Which e-commerce platforms do you support?',
        answer: 'Let us know your current platform during your consultation so we can confirm compatibility.',
      },
      {
        question: 'Can you help set up a store from scratch?',
        answer: 'Yes, store setup support is available alongside our web development service.',
      },
    ],
  },
  {
    slug: 'brand-recreation',
    name: 'Brand Recreation',
    category: 'Marketing & Growth',
    icon: 'RefreshCw',
    shortDescription: 'Refresh, modernize and reposition existing brands for a stronger digital presence.',
    tagline: 'A modern update, without losing what works.',
    overview:
      'For businesses with an existing brand that no longer reflects where the company is today, we refresh the identity, messaging and digital presence while preserving the recognition already built.',
    whoItsFor: [
      'Established businesses with a dated visual identity',
      'Companies repositioning for a new market or audience',
      'Brands merging or expanding their service offering',
    ],
    whatsIncluded: [
      'Brand audit and repositioning review',
      'Refreshed visual identity',
      'Updated messaging and brand voice',
      'Rollout guidance across existing materials',
    ],
    benefits: [
      'A modernised presence without starting from zero',
      'Stronger alignment between brand and current business',
      'Renewed relevance with existing and new audiences',
    ],
    process: [
      { title: 'Audit', description: 'We review the existing brand and identify what to keep and change.' },
      { title: 'Reposition', description: 'Updated direction is proposed based on current business goals.' },
      { title: 'Refresh', description: 'Visual identity and messaging are updated accordingly.' },
      { title: 'Rollout', description: 'Guidance is provided for applying the refreshed brand.' },
    ],
    deliverables: ['Updated brand identity assets', 'Brand transition guide'],
    faq: [
      {
        question: 'Will we lose existing brand recognition?',
        answer: 'The process is designed to modernise the brand while preserving the recognisable elements worth keeping.',
      },
      {
        question: 'How do you decide what to change?',
        answer: 'A brand audit at the start identifies what is working and what is holding the brand back.',
      },
    ],
  },
]

export default services

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
