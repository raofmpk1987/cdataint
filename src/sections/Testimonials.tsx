import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import testimonials from '@/data/testimonials'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = testimonials.length

  const go = (delta: number) => {
    setIndex((current) => (current + delta + total) % total)
  }

  const active = testimonials[index]

  return (
    <section id="testimonials" className="scroll-mt-24 bg-ice">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading eyebrow="Client Voices" title="What Our Clients Say" />

        <Reveal delay={100} className="relative mt-14">
          <div className="rounded-3xl border border-navy/8 bg-white p-8 shadow-[0_30px_60px_-30px_rgba(6,27,58,0.25)] sm:p-12">
            <Quote className="size-9 text-gold" strokeWidth={1.5} />
            <div className="mt-4 flex gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4" fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-5 text-lg leading-relaxed text-navy/80 sm:text-xl">"{active.quote}"</p>
            <div className="mt-6 border-t border-navy/8 pt-5">
              <p className="font-display text-base font-bold text-navy">{active.name}</p>
              <p className="text-sm italic text-navy/45">{active.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-royal hover:text-royal"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.name + i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-royal' : 'w-2 bg-navy/15'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:border-royal hover:text-royal"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
