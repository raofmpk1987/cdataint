import { Link } from '@tanstack/react-router'

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="10" fill="#061B3A" />
      <path
        d="M27 14.5C25.3 12.6 22.9 11.4 20.2 11.4C15.2 11.4 11.1 15.4 11.1 20.4C11.1 25.4 15.2 29.4 20.2 29.4C22.9 29.4 25.3 28.2 27 26.3"
        stroke="#F4C542"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="27.2" cy="20.4" r="2.6" fill="#16A9FF" />
    </svg>
  )
}

export function Logo({
  variant = 'dark',
  className = '',
  to = '/',
}: {
  variant?: 'dark' | 'light'
  className?: string
  to?: string
}) {
  const textColor = variant === 'dark' ? 'text-navy' : 'text-white'
  const subColor = variant === 'dark' ? 'text-royal' : 'text-electric'

  return (
    <Link to={to} className={`flex items-center gap-3 shrink-0 ${className}`}>
      <LogoMark className="size-9" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
          C-DATA <span className="text-gold">INTERNATIONAL</span>
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${subColor}`}>
          Business Support Ecosystem
        </span>
      </span>
    </Link>
  )
}
