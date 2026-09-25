export interface CategoryItem {
  label: string
  slug?: string
}

export interface ServiceCategoryGroup {
  name: string
  description: string
  items: Array<CategoryItem>
}

const categories: Array<ServiceCategoryGroup> = [
  {
    name: 'Digital & Technology',
    description: 'Websites, design and technical foundations for your digital presence.',
    items: [
      { label: 'Web Development', slug: 'web-development' },
      { label: 'Web Design' },
      { label: 'Software Solutions' },
      { label: 'Graphic Design', slug: 'graphic-design' },
      { label: 'Content', slug: 'content-writing' },
      { label: 'Brand Development', slug: 'brand-development' },
    ],
  },
  {
    name: 'Business & Consulting',
    description: 'Strategic guidance and research to support confident decisions.',
    items: [
      { label: 'Business Consulting', slug: 'business-consulting' },
      { label: 'Research & Analysis', slug: 'research-analysis' },
      { label: 'Business Strategy' },
      { label: 'E-Commerce Support', slug: 'ecommerce-support' },
    ],
  },
  {
    name: 'People & Operations',
    description: 'Reliable human support for HR, admin and day-to-day operations.',
    items: [
      { label: 'HR Solutions', slug: 'hr-solutions' },
      { label: 'Virtual Assistance', slug: 'virtual-assistance' },
      { label: 'Administrative Support' },
      { label: 'Online Tutoring', slug: 'online-tutoring' },
    ],
  },
  {
    name: 'Marketing & Growth',
    description: 'Visibility, audience growth and campaigns built for results.',
    items: [
      { label: 'Digital Marketing', slug: 'digital-marketing' },
      { label: 'Social Media' },
      { label: 'Lead Generation' },
      { label: 'Brand Development', slug: 'brand-development' },
      { label: 'Content Marketing' },
    ],
  },
]

export default categories
