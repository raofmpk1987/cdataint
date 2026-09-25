import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import industries from '@/data/industries'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Solutions Across Multiple Industries"
          description="Our services adapt to the way your industry actually operates."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <Reveal
              key={industry.name}
              delay={(index % 5) * 60}
              className="flex flex-col gap-4 rounded-2xl border border-navy/8 bg-ice/60 p-6 transition-colors hover:border-royal/25 hover:bg-ice"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-white text-royal shadow-sm">
                <Icon name={industry.icon} className="size-5" />
              </span>
              <h3 className="font-display text-base font-bold text-navy">{industry.name}</h3>
              <p className="text-sm leading-relaxed text-navy/55">{industry.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <Button variant="royal" size="lg" to="/services" showArrow>
            Explore Industry Solutions
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
