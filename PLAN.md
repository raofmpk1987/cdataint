# PLAN.md — C-DATA INTERNATIONAL Website

## Done

1. ✅ Brand system: colors, fonts (Manrope + Public Sans), logo mark
2. ✅ Sticky header + mobile menu, footer with 5 columns + newsletter signup
3. ✅ Full homepage in exact required order: Hero, Trust Bar, About, Services, Service Categories, Packages, Industries, Why Choose, How It Works, Global Business, Portfolio, Testimonials, Global Team, FAQ, Final CTA, Contact
4. ✅ Contact form wired to Netlify Forms (static skeleton at `public/__forms.html`, AJAX submission)
5. ✅ `/services` overview page and `/services/$serviceId` detail pages for all 12 services (hero, overview, who it's for, what's included, benefits, process, deliverables, FAQ, CTA)
6. ✅ Custom-generated on-brand photography for hero, about, why-choose and team sections
7. ✅ Placeholder testimonials and case studies clearly marked as editable, per spec (no invented names/numbers)

## Remaining

8. ⬜ Create placeholder pages referenced by the footer: `/resources`, `/careers`, `/privacy-policy`, `/terms-conditions`
9. ⬜ Verify footer/nav links resolve once the above pages exist (no dead links)
10. ⬜ Final cross-browser responsive QA pass (mobile menu, accordion, testimonial slider, form validation)

## Notes

- Pricing is centralized in `src/data/packages.ts` — editable without touching layout code.
- Contact form requires the Netlify Forms feature (already enabled) to be live on the deployed site for submissions to register.
