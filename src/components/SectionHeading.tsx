import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  invert = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  invert?: boolean
}) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <Reveal className={`flex flex-col gap-4 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span
          className={`text-xs font-bold uppercase tracking-[0.25em] ${invert ? 'text-electric' : 'text-royal'}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight ${invert ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${invert ? 'text-white/70' : 'text-navy/65'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
