export interface NavLink {
  label: string
  to: string
  hash?: string
}

export const navLinks: Array<NavLink> = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/', hash: 'about' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/', hash: 'packages' },
  { label: 'Industries', to: '/', hash: 'industries' },
  { label: 'Why C-DATA', to: '/', hash: 'why-cdata' },
  { label: 'Success Stories', to: '/', hash: 'portfolio' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/', hash: 'contact' },
]

export interface CredibilityPoint {
  label: string
}

export const credibilityPoints: Array<CredibilityPoint> = [
  { label: 'Professional Support' },
  { label: 'Flexible Solutions' },
  { label: 'Global Business Focus' },
  { label: 'Scalable Services' },
  { label: 'Dedicated Assistance' },
]

export interface WhyChooseItem {
  number: string
  title: string
  description: string
}

export const whyChooseItems: Array<WhyChooseItem> = [
  {
    number: '01',
    title: 'Global Business Focus',
    description: 'Solutions designed for businesses serving local and international markets.',
  },
  {
    number: '02',
    title: 'One Business Ecosystem',
    description: 'Multiple professional services available through one platform.',
  },
  {
    number: '03',
    title: 'Flexible Solutions',
    description: 'Choose individual services or customized packages.',
  },
  {
    number: '04',
    title: 'Professional Support',
    description: 'Dedicated assistance focused on your business requirements.',
  },
  {
    number: '05',
    title: 'Scalable Services',
    description: 'Start small and expand your services as your business grows.',
  },
  {
    number: '06',
    title: 'Growth-Oriented Approach',
    description: 'Solutions designed around efficiency, digital presence and business growth.',
  },
]

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export const howItWorksSteps: Array<ProcessStep> = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Share your business goals, challenges and the support you are looking for.',
  },
  {
    number: '02',
    title: 'Choose Your Service or Package',
    description: 'Select an individual service or a package that matches how your business operates.',
  },
  {
    number: '03',
    title: 'Our Team Gets to Work',
    description: 'A dedicated team member or specialist begins work on your requirements.',
  },
  {
    number: '04',
    title: 'Build, Improve & Grow',
    description: 'Your business moves forward with practical, ongoing support behind it.',
  },
]

export const teamExpertise: Array<string> = [
  'Digital',
  'Technology',
  'Marketing',
  'HR',
  'Research',
  'Consulting',
  'Operations',
]

export const heroStats: Array<{ label: string }> = [
  { label: 'Global Business Support' },
  { label: '15+ Business Solutions' },
  { label: 'Professional Support' },
  { label: 'International Client Focus' },
]
