import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 size-[480px] rounded-full bg-electric/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Ready to Build Your Next Level of Business?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Let's turn your ideas, challenges and opportunities into practical business solutions.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="gold" size="lg" to="/" hash="packages" showArrow>
            Get Started
          </Button>
          <Button variant="outline-invert" size="lg" to="/" hash="contact">
            Book a Consultation
          </Button>
          <Button variant="ghost-invert" size="lg" to="/" hash="contact">
            Request a Custom Package
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
