import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import services from '@/data/services'
import categories from '@/data/categories'

export const Route = createFileRoute('/services/')({
  component: ServicesIndex,
  head: () => ({
    meta: [
      { title: 'Our Services — C-DATA INTERNATIONAL' },
      {
        name: 'description',
        content:
          'Explore the full range of business, digital and growth services offered by C-DATA INTERNATIONAL — from brand development and web development to HR solutions and virtual assistance.',
      },
    ],
  }),
})

function ServicesIndex() {
  return (
    <main>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-electric">Our Services</span>
            <h1 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Everything Your Business Needs. Under One Roof.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              A complete ecosystem of professional business, digital and growth services — built to support you
              wherever you're growing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((group) => (
              <Reveal key={group.name} className="rounded-2xl border border-navy/8 bg-ice/50 p-6">
                <h2 className="font-display text-base font-bold text-navy">{group.name}</h2>
                <p className="mt-1.5 text-sm text-navy/55">{group.description}</p>
              </Reveal>
            ))}
          </div>

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
            <Button variant="gold" size="lg" to="/" hash="contact" showArrow>
              Book a Consultation
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
