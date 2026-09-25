export interface Industry {
  name: string
  icon: string
  description: string
}

const industries: Array<Industry> = [
  {
    name: 'Education & Training',
    icon: 'BookOpen',
    description: 'Digital and operational support for schools, trainers and learning organisations.',
  },
  {
    name: 'Healthcare & Wellness',
    icon: 'HeartPulse',
    description: 'Professional support for clinics, practitioners and wellness businesses.',
  },
  {
    name: 'Finance & Accounting',
    icon: 'Landmark',
    description: 'Business and digital support for financial and accounting practices.',
  },
  {
    name: 'IT & Software',
    icon: 'Cpu',
    description: 'Technology-aligned support for software teams and IT service businesses.',
  },
  {
    name: 'Creative & Media',
    icon: 'Palette',
    description: 'Brand, content and digital solutions for creative and media businesses.',
  },
  {
    name: 'Legal & Consulting',
    icon: 'Scale',
    description: 'Professional digital presence and operational support for advisory firms.',
  },
  {
    name: 'Real Estate',
    icon: 'Building2',
    description: 'Marketing, content and digital tools for agents and property businesses.',
  },
  {
    name: 'E-Commerce & Retail',
    icon: 'ShoppingBag',
    description: 'Store, catalogue and marketing support for online and retail sellers.',
  },
  {
    name: 'Professional Services',
    icon: 'Briefcase',
    description: 'Business support built around consultancies and service-based firms.',
  },
  {
    name: 'Startups & Entrepreneurs',
    icon: 'Rocket',
    description: 'Flexible, scalable support for founders building from the ground up.',
  },
]

export default industries
