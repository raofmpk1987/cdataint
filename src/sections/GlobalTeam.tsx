import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { teamExpertise } from '@/data/content'

export function GlobalTeam() {
  return (
    <section id="team" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <Reveal className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_-30px_rgba(6,27,58,0.3)]">
          <img
            src="/.netlify/images?url=/img/global-team.png&w=900&fm=webp&q=82"
            alt="Diverse group of C-DATA INTERNATIONAL specialists"
            className="aspect-[4/3.2] w-full object-cover"
            loading="lazy"
            width={900}
            height={720}
          />
        </Reveal>

        <div className="flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-royal">Our People</span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl">
            Your Global Success Team
          </h2>
          <p className="text-base leading-relaxed text-navy/65 sm:text-lg">
            A network of specialists dedicated to helping your business move forward — across every
            discipline your growth depends on.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {teamExpertise.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-royal/20 bg-royal/5 px-4 py-2 text-sm font-semibold text-royal"
              >
                {skill}
              </span>
            ))}
          </div>

          <div>
            <Button variant="royal" size="lg" to="/" hash="contact" showArrow>
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
