export interface FaqItem {
  question: string
  answer: string
}

const faq: Array<FaqItem> = [
  {
    question: 'What services does C-DATA INTERNATIONAL provide?',
    answer:
      'We provide a full ecosystem of business support services, including brand development, graphic design, web development, content writing, research and analysis, online tutoring, HR solutions, digital marketing, virtual assistance, business consulting, e-commerce support and brand recreation.',
  },
  {
    question: 'Who can use C-DATA services?',
    answer:
      'Our services are built for professionals, entrepreneurs, startups, small businesses and established organizations that want professional support without building every function in-house.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. C-DATA INTERNATIONAL is built around a global business support model and works with clients across regions and time zones.',
  },
  {
    question: 'Can I choose individual services instead of a package?',
    answer:
      'Yes, individual services can be requested directly. Packages simply bundle related services together at a more flexible structure for ongoing support.',
  },
  {
    question: 'Can you create a customized package?',
    answer:
      'Yes. If none of our standard packages match your needs exactly, we can put together a customized plan built around your specific requirements.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Submit an inquiry through our contact form or book a consultation. Our team will review your requirements and follow up with next steps.',
  },
  {
    question: 'How quickly can services begin?',
    answer:
      'Start times depend on the service and current scope, and will be confirmed with you directly once your requirements are reviewed.',
  },
  {
    question: 'Do you provide ongoing business support?',
    answer:
      'Yes. Many of our clients work with us on an ongoing basis through our Business, Professional and Enterprise packages.',
  },
  {
    question: 'How can I request a consultation?',
    answer:
      'Use the "Book a Consultation" button in the navigation or the contact form at the bottom of this page to reach our team directly.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We support a wide range of industries, including education, healthcare, finance, IT, creative and media, legal and consulting, real estate, e-commerce, professional services, and startups.',
  },
]

export default faq
