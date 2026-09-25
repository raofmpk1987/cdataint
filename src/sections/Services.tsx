import { Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import services from '@/data/services'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ice">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything Your Business Needs. Under One Roof."
          description="Access a complete ecosystem of professional business, digital and growth services."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 70}>
              <article className="group flex h-full flex-col gap-4 rounded-2xl border border-navy/8 bg-white p-7 shadow-[0_1px_2px_rgba(6,27,58,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-royal/20 hover:shadow-[0_24px_48px_-24px_rgba(6,27,58,0.25)]">
                <span className="flex size-12 items-center justify-center rounded-xl bg-royal/10 text-royal transition-colors group-hover:bg-royal group-hover:text-white">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h3 className="font-display text-lg font-bold text-navy">{service.name}</h3>
                <p className="flex-1 text-sm leading-relaxed text-navy/60">{service.shortDescription}</p>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: service.slug }}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-royal transition-colors group-hover:text-gold-dark"
                >
                  Learn More
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button variant="royal" size="lg" to="/services" showArrow>
            View All Services
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
