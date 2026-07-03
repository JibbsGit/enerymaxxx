import { Phone, Mail, MapPin } from 'lucide-react'
import { Container } from './ui/Container'
import { navLinks, site } from '../data/site'
import { serviceCategories } from '../data/services'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './ui/SocialIcons'

export function Footer() {
  return (
    <footer className="bg-charcoal pt-16 pb-8 text-white/70">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2 font-heading text-lg font-bold text-white">
              <img src="/icons/icon-192.png" alt="" className="h-10 w-10" width={40} height={40} />
              Energy<span className="text-emerald">Maxx</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Powering a cleaner tomorrow through renewable energy, biodigesters, and clean gas plant solutions.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: FacebookIcon, href: site.social.facebook },
                { icon: TwitterIcon, href: site.social.twitter },
                { icon: InstagramIcon, href: site.social.instagram },
                { icon: LinkedinIcon, href: site.social.linkedin },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-emerald hover:text-emerald"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-emerald">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceCategories.map((category) => (
                <li key={category.id}>
                  <a href="#services" className="transition-colors hover:text-emerald">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="mt-0.5 shrink-0 text-emerald" />
                <span>
                  {site.phones.map((phone) => (
                    <span key={phone} className="block">
                      {phone}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-emerald" />
                {site.email}
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-emerald" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>&copy; 2026 {site.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="transition-colors hover:text-emerald">
              Privacy Policy
            </a>
            <a href="#home" className="transition-colors hover:text-emerald">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
