import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'
import { Button } from './Button'
import { navLinks } from '@/data/content'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(6,27,58,0.12)] border-b border-navy/5'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 transition-all duration-300 ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-[13.5px] font-semibold text-navy/70 tracking-tight transition-colors hover:text-royal"
              activeProps={{ className: 'text-royal' }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="md" to="/" hash="contact">
            Book a Consultation
          </Button>
          <Button variant="gold" size="md" to="/" hash="packages">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-navy lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 flex flex-col overflow-y-auto bg-white lg:hidden">
          <nav className="flex flex-1 flex-col gap-1 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                className="border-b border-navy/8 py-4 text-lg font-semibold text-navy"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 pb-10">
            <Button variant="outline" size="lg" to="/" hash="contact" onClick={() => setMenuOpen(false)}>
              Book a Consultation
            </Button>
            <Button variant="gold" size="lg" to="/" hash="packages" onClick={() => setMenuOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
