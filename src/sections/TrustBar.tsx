import { Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { credibilityPoints } from '@/data/content'

export function TrustBar() {
  return (
    <section className="border-b border-navy/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Business Solutions Designed Around Your Growth
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {credibilityPoints.map((point, index) => (
            <Reveal
              key={point.label}
              delay={index * 60}
              className="flex flex-col items-center gap-3 rounded-2xl border border-navy/8 bg-ice/60 px-4 py-6 text-center transition-colors hover:border-royal/25 hover:bg-ice"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-royal text-white">
                <Check className="size-5" strokeWidth={2.25} />
              </span>
              <span className="text-sm font-semibold text-navy/80">{point.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
