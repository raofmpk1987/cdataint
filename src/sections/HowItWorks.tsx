import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { howItWorksSteps } from '@/data/content'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-ice">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="How It Works" title="A Simple Path From Inquiry to Impact" />

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-navy/10 lg:left-0 lg:top-6 lg:h-px lg:w-full" />
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-8">
            {howItWorksSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90} className="relative flex gap-5 lg:flex-col lg:gap-5">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-royal font-display text-base font-extrabold text-white shadow-[0_10px_24px_-8px_rgba(7,86,184,0.5)]">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="font-display text-base font-bold text-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-navy/60">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
