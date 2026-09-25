export interface CaseStudy {
  category: string
  title: string
  challenge: string
  solution: string
  result: string
}

const caseStudies: Array<CaseStudy> = [
  {
    category: 'Website Development',
    title: 'Rebuilding a service business online',
    challenge: 'An outdated website was no longer reflecting the business or converting visitor interest into inquiries.',
    solution:
      'A new responsive website was designed and built around clear service pages, calls to action and a simplified contact process.',
    result: 'A modern, professional site the team could confidently share with prospective clients.',
  },
  {
    category: 'Branding',
    title: 'A brand identity built for growth',
    challenge: 'A growing business was operating without a consistent visual identity across its materials.',
    solution: 'A full brand identity system was developed, covering logo, colour, typography and usage guidelines.',
    result: 'A consistent brand presence applied across the website, social media and printed materials.',
  },
  {
    category: 'Digital Marketing',
    title: 'Bringing structure to social media',
    challenge: 'Social media activity was inconsistent, with no clear content plan or posting schedule.',
    solution: 'A content calendar and management process were introduced, aligned to the business goals.',
    result: 'A steady publishing rhythm and a more consistent brand presence across channels.',
  },
  {
    category: 'HR Solutions',
    title: 'Structuring HR for a first-time hiring business',
    challenge: 'A small business hiring its first employees had no formal HR documentation or process in place.',
    solution: 'Core HR policies, onboarding documents and a recruitment workflow were put in place.',
    result: 'A clear, repeatable hiring and onboarding process the team could rely on.',
  },
  {
    category: 'E-Commerce',
    title: 'Organising a growing product catalogue',
    challenge: 'An online store’s catalogue had grown faster than its organisation, making it hard to manage.',
    solution: 'Listings were restructured and standardised, with clearer categories and content.',
    result: 'A more organised, easier-to-manage storefront for the business to build on.',
  },
  {
    category: 'Virtual Assistance',
    title: 'Reclaiming time from daily admin',
    challenge: 'A founder was spending several hours a week on scheduling, email and administrative tasks.',
    solution: 'Ongoing virtual assistance support took over recurring administrative workflows.',
    result: 'More founder time available for client work and business development.',
  },
]

export default caseStudies
