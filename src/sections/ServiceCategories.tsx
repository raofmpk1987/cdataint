import { Link } from '@tanstack/react-router'
import { SectionHeading } from '@/components/SectionHeading'
import { Reveal } from '@/components/Reveal'
import categories from '@/data/categories'

export function ServiceCategories() {
  return (
    <section id="categories" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Explore By Category"
          title="Find the Right Support, Organized Your Way"
          description="Browse services grouped by the part of your business they support."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal
              key={category.name}
              delay={index * 80}
              className="flex h-full flex-col gap-4 rounded-2xl border border-navy/8 bg-navy p-7 text-white"
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-gold">{category.name}</span>
              <p className="text-sm leading-relaxed text-white/60">{category.description}</p>
              <ul className="mt-2 flex flex-col gap-2.5 border-t border-white/10 pt-4">
                {category.items.map((item) =>
                  item.slug ? (
                    <li key={item.label}>
                      <Link
                        to="/services/$serviceId"
                        params={{ serviceId: item.slug }}
                        className="text-sm font-medium text-white/80 transition-colors hover:text-electric"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ) : (
                    <li key={item.label} className="text-sm font-medium text-white/45">
                      {item.label}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
