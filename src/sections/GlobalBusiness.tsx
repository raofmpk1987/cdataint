import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'

const pillars = ['Connect', 'Collaborate', 'Grow', 'Globally']

export function GlobalBusiness() {
  return (
    <section id="global" className="relative overflow-hidden bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-7">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-electric">Global Business Section</span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
            Your Business Can Go Further.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            Whether you're launching a new business, improving your digital presence, outsourcing
            operations or looking for professional support, C-DATA INTERNATIONAL connects you with
            practical solutions designed for modern business.
          </p>

          <div className="flex flex-wrap gap-3">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar}
                delay={index * 70}
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.15em] text-gold"
              >
                {pillar}
              </Reveal>
            ))}
          </div>

          <div>
            <Button variant="gold" size="lg" to="/" hash="contact" showArrow>
              Start Your Global Journey
            </Button>
          </div>
        </div>

        <Reveal delay={100} className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <GlobalNetworkGraphic />
        </Reveal>
      </div>
    </section>
  )
}

function GlobalNetworkGraphic() {
  const nodes = [
    { x: 100, y: 40 },
    { x: 170, y: 80 },
    { x: 40, y: 90 },
    { x: 180, y: 160 },
    { x: 30, y: 160 },
    { x: 100, y: 190 },
    { x: 140, y: 120 },
    { x: 65, y: 130 },
  ]

  return (
    <svg viewBox="0 0 200 200" className="size-full">
      <circle cx="100" cy="100" r="94" stroke="#16A9FF" strokeOpacity="0.25" fill="none" />
      <circle cx="100" cy="100" r="70" stroke="#16A9FF" strokeOpacity="0.2" fill="none" />
      <circle cx="100" cy="100" r="46" stroke="#F4C542" strokeOpacity="0.25" fill="none" />
      {nodes.map((node, index) => (
        <line
          key={`line-${index}`}
          x1="100"
          y1="100"
          x2={node.x}
          y2={node.y}
          stroke="#ffffff"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}
      <circle cx="100" cy="100" r="6" fill="#F4C542" />
      {nodes.map((node, index) => (
        <circle key={`node-${index}`} cx={node.x} cy={node.y} r="3.5" fill="#16A9FF" />
      ))}
    </svg>
  )
}
