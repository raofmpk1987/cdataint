import { Check } from 'lucide-react'
import { Button } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import packages from '@/data/packages'

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 bg-ice">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Packages & Pricing"
          title="Simple Packages. Flexible Business Support."
          description="Choose a solution that matches your business needs and scale as you grow."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <Reveal
              key={pkg.id}
              delay={index * 80}
              className={`relative flex h-full flex-col gap-6 rounded-3xl border p-8 ${
                pkg.popular
                  ? 'border-gold bg-navy text-white shadow-[0_30px_60px_-25px_rgba(6,27,58,0.5)] lg:-translate-y-3'
                  : 'border-navy/8 bg-white text-navy'
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wide text-navy shadow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className={`font-display text-xl font-extrabold ${pkg.popular ? 'text-white' : 'text-navy'}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-2 text-sm leading-relaxed ${pkg.popular ? 'text-white/60' : 'text-navy/55'}`}>
                  {pkg.bestFor}
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className={`font-display text-4xl font-extrabold ${pkg.popular ? 'text-gold' : 'text-navy'}`}>
                  {pkg.price}
                </span>
                <span className={`text-xs font-medium ${pkg.popular ? 'text-white/50' : 'text-navy/45'}`}>
                  {pkg.priceNote}
                </span>
              </div>

              <ul className="flex flex-1 flex-col gap-3">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2.5 text-sm ${pkg.popular ? 'text-white/80' : 'text-navy/70'}`}
                  >
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${pkg.popular ? 'text-gold' : 'text-royal'}`}
                      strokeWidth={2.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? 'gold' : 'outline'}
                size="md"
                to="/"
                hash="contact"
                className="w-full"
              >
                {pkg.cta}
              </Button>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-4 rounded-2xl border border-royal/15 bg-white px-8 py-8 text-center">
          <p className="text-base text-navy/70">
            Need something different? We can create a customized package around your business
            requirements.
          </p>
          <Button variant="royal" size="md" to="/" hash="contact">
            Request Custom Package
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
