import { Check } from 'lucide-react'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'

const highlights = [
  'Digital business solutions',
  'Professional services',
  'Marketing support',
  'HR solutions',
  'Virtual assistance',
  'Business consulting',
  'Research and analysis',
  'Technology solutions',
  'E-commerce support',
  'Creative services',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_70px_-30px_rgba(6,27,58,0.3)]">
            <img
              src="/.netlify/images?url=/img/about-team.png&w=900&fm=webp&q=82"
              alt="Diverse professional team collaborating in a modern office"
              className="aspect-[4/3.2] w-full object-cover"
              loading="lazy"
              width={900}
              height={720}
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl border border-navy/5 bg-white px-5 py-4 shadow-[0_20px_45px_-20px_rgba(6,27,58,0.3)]">
            <p className="font-display text-xl font-extrabold text-navy">One Platform.</p>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-royal">Multiple Solutions.</p>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-royal">About C-DATA International</span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl">
            Your Business Growth Partner
          </h2>
          <p className="text-base leading-relaxed text-navy/65 sm:text-lg">
            C-DATA INTERNATIONAL is a business support and digital solutions platform built to help
            professionals, entrepreneurs, startups and organizations access the services, expertise and
            digital resources they need to grow. We bring multiple business services together under one
            ecosystem, so you never have to piece together a dozen different vendors.
          </p>

          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm font-medium text-navy/75">
                <Check className="mt-0.5 size-4 shrink-0 text-gold-dark" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <div>
            <Button variant="royal" size="lg" to="/services" showArrow>
              Discover C-DATA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
