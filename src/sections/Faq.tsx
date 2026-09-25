import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import faq from '@/data/faq'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 bg-ice">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="Frequently Asked" title="Questions, Answered" />

        <div className="mt-12 flex flex-col gap-3">
          {faq.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={item.question} delay={index * 40}>
                <div className="overflow-hidden rounded-2xl border border-navy/8 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-bold text-navy">{item.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-royal transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-navy/60">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
