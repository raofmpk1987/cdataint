import { Globe2, ShieldCheck, Users2, Layers } from 'lucide-react'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { heroStats } from '@/data/content'

const statIcons = [Globe2, Layers, ShieldCheck, Users2]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ice">
      <div
        className="pointer-events-none absolute -top-40 -right-40 size-[560px] rounded-full bg-royal/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 size-[420px] -translate-x-1/3 translate-y-1/3 rounded-full bg-electric/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
        <div className="flex flex-col gap-7">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-royal/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-royal">
              Your Global Business Support Partner
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              Build Your Business.
              <br />
              Reach Global Markets.
              <br />
              Grow With <span className="text-royal">Confidence.</span>
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="max-w-xl text-base leading-relaxed text-navy/65 sm:text-lg">
              C-DATA INTERNATIONAL provides professional digital, business, HR, marketing, research,
              consulting and technology solutions designed to help businesses build stronger operations
              and reach international opportunities.
            </p>
          </Reveal>

          <Reveal delay={220} className="flex flex-wrap items-center gap-4">
            <Button variant="gold" size="lg" to="/services" showArrow>
              Explore Our Services
            </Button>
            <Button variant="outline" size="lg" to="/" hash="contact">
              Get a Free Consultation
            </Button>
          </Reveal>

          <Reveal delay={280} className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-8 rounded-full border-2 border-ice bg-royal/15"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-navy/55">
              Supporting professionals, startups and businesses with scalable solutions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120} className="relative">
          <div className="relative mx-auto aspect-[4/3.05] w-full max-w-lg overflow-hidden rounded-[28px] shadow-[0_40px_80px_-30px_rgba(6,27,58,0.35)]">
            <img
              src="/.netlify/images?url=/img/hero-professional.png&w=1000&fm=webp&q=82"
              alt="Confident business professional working with a laptop in a modern international office"
              className="size-full object-cover"
              width={1000}
              height={760}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/25 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-4 top-8 hidden w-52 rounded-2xl border border-navy/5 bg-white/95 p-4 shadow-[0_20px_45px_-20px_rgba(6,27,58,0.3)] backdrop-blur sm:block">
            <p className="font-display text-2xl font-extrabold text-navy">15+</p>
            <p className="text-xs font-medium text-navy/55">Business Solutions</p>
          </div>

          <div className="absolute -bottom-6 -right-4 hidden w-56 rounded-2xl border border-navy/5 bg-white/95 p-4 shadow-[0_20px_45px_-20px_rgba(6,27,58,0.3)] backdrop-blur sm:block">
            <div className="flex items-center gap-2">
              <Globe2 className="size-4 text-royal" strokeWidth={1.75} />
              <p className="text-xs font-bold uppercase tracking-wide text-navy/70">International Focus</p>
            </div>
            <p className="mt-1 text-xs text-navy/55">Serving clients across global markets</p>
          </div>
        </Reveal>
      </div>

      <div className="relative border-t border-navy/5 bg-white/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4">
          {heroStats.map((stat, index) => {
            const StatIcon = statIcons[index % statIcons.length]
            return (
              <Reveal key={stat.label} delay={index * 60} className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
                  <StatIcon className="size-4" strokeWidth={1.75} />
                </span>
                <span className="text-sm font-semibold text-navy/75">{stat.label}</span>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
