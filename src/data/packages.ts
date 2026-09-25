export interface PricingPackage {
  id: string
  name: string
  bestFor: string
  price: string
  priceNote: string
  features: Array<string>
  cta: string
  popular?: boolean
}

const packages: Array<PricingPackage> = [
  {
    id: 'starter',
    name: 'Starter',
    bestFor: 'Individuals, freelancers and new businesses.',
    price: '$49',
    priceNote: 'per month',
    features: [
      'Basic Business Support',
      'Consultation',
      'Basic Digital Support',
      'Email Support',
      'Basic Content Assistance',
      'Basic Design Support',
    ],
    cta: 'Get Started',
  },
  {
    id: 'business',
    name: 'Business',
    bestFor: 'Small and growing businesses.',
    price: '$149',
    priceNote: 'per month',
    features: [
      'Business Support',
      'Website Assistance',
      'Marketing Support',
      'Content Services',
      'Social Media Support',
      'Virtual Assistance',
      'Priority Support',
    ],
    cta: 'Choose Business',
  },
  {
    id: 'professional',
    name: 'Professional',
    bestFor: 'Established businesses and professionals.',
    price: '$349',
    priceNote: 'per month',
    features: [
      'Advanced Business Support',
      'Website & Digital Solutions',
      'Digital Marketing',
      'HR Support',
      'Research & Analysis',
      'Virtual Assistance',
      'Business Consulting',
      'Priority Assistance',
    ],
    cta: 'Choose Professional',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    bestFor: 'Organizations requiring customized solutions.',
    price: 'Custom Quote',
    priceNote: 'tailored to scope',
    features: [
      'Dedicated Business Support',
      'Customized Service Plans',
      'Advanced Digital Solutions',
      'HR Solutions',
      'Marketing & Growth Support',
      'Business Consulting',
      'Dedicated Account Support',
      'Custom Workflows',
      'Scalable Services',
    ],
    cta: 'Talk to Our Team',
  },
]

export default packages
