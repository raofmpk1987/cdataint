import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Check, ArrowRight } from 'lucide-react'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { getServiceBySlug } from '@/data/services'

export const Route = createFileRoute('/services/$serviceId')({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.serviceId)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — C-DATA INTERNATIONAL` },
          { name: 'description', content: loaderData.shortDescription },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: ServiceNotFound,
})

function ServiceNotFound() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center gap-5 px-5 py-32 text-center">
      <h1 className="font-display text-2xl font-bold text-navy">Service Not Found</h1>
      <p className="text-navy/60">We couldn't find the service you're looking for.</p>
      <Button variant="royal" to="/services">
        View All Services
      </Button>
    </main>
  )
}

function ServiceDetail() {
  const service = Route.useLoaderData()

  return (
    <main>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
          <Reveal className="flex flex-col items-center gap-5">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-electric">
              <Icon name={service.icon} className="size-7" />
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-electric">{service.category}</span>
            <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {service.name}
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{service.tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy">Overview</h2>
            <p className="mt-4 text-base leading-relaxed text-navy/65">{service.overview}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-navy">Who It's For</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/65">
                  <Check className="mt-0.5 size-4 shrink-0 text-royal" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-xl font-bold text-navy">What's Included</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy/65">
                  <Check className="mt-0.5 size-4 shrink-0 text-gold-dark" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-navy">Benefits</h2>
          </Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit, index) => (
              <Reveal
                key={benefit}
                delay={index * 60}
                className="rounded-2xl border border-navy/8 bg-ice/50 p-6 text-sm font-medium leading-relaxed text-navy/70"
              >
                {benefit}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-white">Our Process</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 70}>
                <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                  <span className="font-display text-2xl font-extrabold text-electric">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-base font-bold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <Reveal>
            <h2 className="font-display text-xl font-bold text-navy">Deliverables</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-royal/20 bg-royal/5 px-4 py-2 text-sm font-semibold text-royal"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="mt-8 rounded-2xl border border-gold/25 bg-gold/10 p-5 text-sm text-navy/70">
            Pricing for this service is scoped to your requirements — see our{' '}
            <Link to="/" hash="packages" className="font-bold text-royal hover:underline">
              packages
            </Link>{' '}
            or request a custom quote.
          </p>
        </div>
      </section>

      {service.faq.length > 0 && (
        <section className="bg-ice">
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
            <Reveal>
              <h2 className="font-display text-xl font-bold text-navy">Frequently Asked Questions</h2>
            </Reveal>
            <div className="mt-6 flex flex-col gap-4">
              {service.faq.map((item) => (
                <Reveal key={item.question} className="rounded-2xl border border-navy/8 bg-white p-6">
                  <h3 className="font-display text-base font-bold text-navy">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{item.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-navy text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 py-20 text-center sm:px-8">
          <Reveal>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Ready to get started with {service.name}?</h2>
          </Reveal>
          <Reveal delay={100} className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="gold" size="lg" to="/" hash="contact" showArrow>
              Get Started
            </Button>
            <Button variant="outline-invert" size="lg" to="/services">
              Explore Other Services
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
