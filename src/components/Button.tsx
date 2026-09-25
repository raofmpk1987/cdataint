import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Variant = 'gold' | 'royal' | 'outline' | 'outline-invert' | 'ghost-invert'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric'

const variants: Record<Variant, string> = {
  gold: 'bg-gold text-navy hover:bg-gold-dark shadow-[0_8px_24px_-8px_rgba(244,197,66,0.6)] hover:shadow-[0_12px_28px_-8px_rgba(244,197,66,0.7)] hover:-translate-y-0.5',
  royal: 'bg-royal text-white hover:bg-navy-light hover:-translate-y-0.5 shadow-[0_8px_24px_-8px_rgba(7,86,184,0.5)]',
  outline: 'border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-white',
  'outline-invert': 'border border-white/30 text-white hover:bg-white hover:text-navy',
  'ghost-invert': 'text-white/90 hover:text-gold',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  to?: string
  hash?: string
  href?: string
  className?: string
  showArrow?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  children,
  variant = 'royal',
  size = 'md',
  to,
  hash,
  href,
  className = '',
  showArrow = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="size-4" strokeWidth={2} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} hash={hash} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={isExternal && href.startsWith('http') ? '_blank' : undefined}
        rel={isExternal && href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
