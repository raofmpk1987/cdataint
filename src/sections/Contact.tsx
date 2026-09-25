import { useState } from 'react'
import { Mail, MessageCircle, Phone, Share2 } from 'lucide-react'
import services from '@/data/services'
import packages from '@/data/packages'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const budgetRanges = ['Under $150', '$150 – $500', '$500 – $1,500', '$1,500+', 'Custom Quote']

const initialFields = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  service: '',
  package: '',
  budget: '',
  message: '',
  'bot-field': '',
}

export function Contact() {
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'business-inquiry', ...fields }),
      })
      setStatus('submitted')
      setFields(initialFields)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:py-28">
        <div className="flex flex-col gap-7">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-royal">Get In Touch</span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl">
            Let's Talk About Your Business
          </h2>
          <p className="max-w-md text-base leading-relaxed text-navy/65">
            Our team will review your requirements and contact you regarding the next steps.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <ContactOption icon={Mail} label="Email" value="hello@cdatainternational.com" href="mailto:hello@cdatainternational.com" />
            <ContactOption icon={MessageCircle} label="WhatsApp" value="Message our business team" href="#" />
            <ContactOption icon={Phone} label="Phone" value="+1 (000) 000-0000" href="tel:+10000000000" />
            <ContactOption icon={Share2} label="Social Media" value="@cdatainternational" href="#" />
          </div>
        </div>

        <div className="rounded-3xl border border-navy/8 bg-ice/50 p-6 shadow-[0_30px_60px_-35px_rgba(6,27,58,0.25)] sm:p-9">
          {status === 'submitted' ? (
            <div className="flex flex-col items-center gap-3 py-16 text-center">
              <h3 className="font-display text-xl font-bold text-navy">Thank you for reaching out.</h3>
              <p className="max-w-sm text-sm text-navy/60">
                Our team will review your requirements and contact you regarding the next steps.
              </p>
            </div>
          ) : (
            <form
              name="business-inquiry"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid gap-5 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="business-inquiry" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" value={fields['bot-field']} onChange={handleChange} />
                </label>
              </p>

              <Field label="Full Name" name="fullName" value={fields.fullName} onChange={handleChange} required />
              <Field label="Business / Company" name="company" value={fields.company} onChange={handleChange} />
              <Field label="Email" name="email" type="email" value={fields.email} onChange={handleChange} required />
              <Field label="Phone / WhatsApp" name="phone" value={fields.phone} onChange={handleChange} />
              <Field label="Country" name="country" value={fields.country} onChange={handleChange} />

              <SelectField label="Service Required" name="service" value={fields.service} onChange={handleChange}>
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </SelectField>

              <SelectField label="Package" name="package" value={fields.package} onChange={handleChange}>
                <option value="">Select a package</option>
                {packages.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>
                    {pkg.name}
                  </option>
                ))}
              </SelectField>

              <SelectField label="Budget Range" name="budget" value={fields.budget} onChange={handleChange}>
                <option value="">Select a range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </SelectField>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/50">
                  Message
                </label>
                <textarea
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-royal"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy shadow-[0_8px_24px_-8px_rgba(244,197,66,0.6)] transition-all hover:bg-gold-dark disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Submitting…' : 'Submit Inquiry'}
                </button>
                {status === 'error' && (
                  <p className="mt-3 text-center text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function ContactOption({
  icon: IconComponent,
  label,
  value,
  href,
}: {
  icon: typeof Mail
  label: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-navy/8 bg-ice/50 px-5 py-4 transition-colors hover:border-royal/25 hover:bg-ice"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-royal/10 text-royal">
        <IconComponent className="size-4.5" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-bold uppercase tracking-wide text-navy/45">{label}</span>
        <span className="text-sm font-semibold text-navy/80">{value}</span>
      </span>
    </a>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/50">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-royal"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  children,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-navy/50">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-navy/12 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-royal"
      >
        {children}
      </select>
    </div>
  )
}
