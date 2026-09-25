import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import caseStudies from '@/data/case-studies'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Success Stories"
          title="Built to Support Real Business Goals"
          description="A look at the kind of work our ecosystem is built to deliver."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal
              key={study.title}
              delay={(index % 3) * 80}
              className="flex h-full flex-col gap-4 rounded-2xl border border-navy/8 bg-ice/50 p-7"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-royal">{study.category}</span>
                <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-dark">
                  Illustrative Example
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-navy">{study.title}</h3>
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-navy/65">
                <p>
                  <span className="font-bold text-navy">Challenge — </span>
                  {study.challenge}
                </p>
                <p>
                  <span className="font-bold text-navy">Solution — </span>
                  {study.solution}
                </p>
                <p>
                  <span className="font-bold text-navy">Result — </span>
                  {study.result}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center text-sm text-navy/45">
          These are illustrative examples of our service scope. Contact us to discuss real client success
          stories relevant to your industry.
        </Reveal>
      </div>
    </section>
  )
}
