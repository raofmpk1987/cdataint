import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/sections/Hero'
import { TrustBar } from '@/sections/TrustBar'
import { About } from '@/sections/About'
import { Services } from '@/sections/Services'
import { ServiceCategories } from '@/sections/ServiceCategories'
import { Packages } from '@/sections/Packages'
import { Industries } from '@/sections/Industries'
import { WhyChoose } from '@/sections/WhyChoose'
import { HowItWorks } from '@/sections/HowItWorks'
import { GlobalBusiness } from '@/sections/GlobalBusiness'
import { Portfolio } from '@/sections/Portfolio'
import { Testimonials } from '@/sections/Testimonials'
import { GlobalTeam } from '@/sections/GlobalTeam'
import { Faq } from '@/sections/Faq'
import { FinalCta } from '@/sections/FinalCta'
import { Contact } from '@/sections/Contact'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <ServiceCategories />
      <Packages />
      <Industries />
      <WhyChoose />
      <HowItWorks />
      <GlobalBusiness />
      <Portfolio />
      <Testimonials />
      <GlobalTeam />
      <Faq />
      <FinalCta />
      <Contact />
    </main>
  )
}
