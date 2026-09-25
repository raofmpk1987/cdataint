import { useState } from 'react'
import { Mail, Phone, MessageCircle, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'
import { Logo } from './Logo'
import { Link } from '@tanstack/react-router'

const companyLinks = [
  { label: 'About Us', to: '/', hash: 'about' },
  { label: 'Why C-DATA', to: '/', hash: 'why-cdata' },
  { label: 'Our Team', to: '/', hash: 'team' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/', hash: 'contact' },
]

const serviceLinks = [
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'HR Solutions', to: '/services/hr-solutions' },
  { label: 'Digital Marketing', to: '/services/digital-marketing' },
  { label: 'Virtual Assistance', to: '/services/virtual-assistance' },
  { label: 'Business Consulting', to: '/services/business-consulting' },
  { label: 'Research & Analysis', to: '/services/research-analysis' },
]

const resourceLinks = [
  { label: 'FAQ', to: '/', hash: 'faq' },
  { label: 'Blog', to: '/resources' },
  { label: 'Business Resources', to: '/resources' },
  { label: 'Success Stories', to: '/', hash: 'portfolio' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'newsletter', email }),
      })
      setStatus('submitted')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex flex-col gap-4 border-b border-white/10 pb-12 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h3 className="font-display text-lg font-bold text-white">Stay Ahead With Business Insights</h3>
        <p className="mt-1 text-sm text-white/55">
          Practical growth tips and global business updates, sent occasionally.
        </p>
      </div>
      {status === 'submitted' ? (
        <p className="text-sm font-semibold text-gold">Thanks — you're subscribed.</p>
      ) : (
        <form
          name="newsletter"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="flex w-full max-w-md gap-3"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            aria-label="Subscribe"
            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-bold text-navy transition-colors hover:bg-gold-dark disabled:opacity-60"
          >
            <ArrowRight className="size-4" strokeWidth={2} />
          </button>
        </form>
      )}
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto max-w-7xl px-5 pt-14 sm:px-8">
        <NewsletterSignup />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-3 lg:col-span-1">
            <Logo variant="light" />
            <p className="max-w-[220px] text-sm leading-relaxed text-white/60">
              Your Ultimate Business Support Ecosystem
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'X (Twitter)' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
              ].map(({ icon: SocialIcon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Contact</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-electric" strokeWidth={1.75} />
                <a href="mailto:hello@cdatainternational.com" className="hover:text-gold">
                  hello@cdatainternational.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-electric" strokeWidth={1.75} />
                <span>+1 (000) 000-0000</span>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 size-4 shrink-0 text-electric" strokeWidth={1.75} />
                <span>WhatsApp Business Support</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-electric" strokeWidth={1.75} />
                <span>Serving clients globally, remote-first</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Connect. Collaborate. Grow. Globally.
          </p>
          <p className="text-sm text-white/40">© 2026 C-DATA INTERNATIONAL. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; to: string; hash?: string }>
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">{title}</h3>
      <ul className="flex flex-col gap-3 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.label}>
            <Link to={link.to} hash={link.hash} className="transition-colors hover:text-gold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
