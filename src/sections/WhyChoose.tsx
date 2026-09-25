import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import { whyChooseItems } from '@/data/content'

export function WhyChoose() {
  return (
    <section id="why-cdata" className="scroll-mt-24 relative overflow-hidden bg-navy text-white">
      <img
        src="/.netlify/images?url=/img/why-team-bg.png&w=1800&fm=webp&q=70"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Why C-DATA"
          title="Why Businesses Choose C-DATA INTERNATIONAL"
          invert
        />

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item, index) => (
            <Reveal key={item.number} delay={index * 70} className="flex flex-col gap-3">
              <span className="font-display text-3xl font-extrabold text-gold">{item.number}</span>
              <h3 className="font-display text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
