import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Container } from './ui/Container'
import { LinkButton } from './ui/Button'
import { navLinks, site } from '../data/site'

export function Navbar({ isDark, toggleDark }: { isDark: boolean; toggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const iconButtonClass = `flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
    scrolled || open
      ? 'border-charcoal/10 text-charcoal hover:border-emerald hover:text-emerald dark:border-white/15 dark:text-white'
      : 'border-white/30 text-white hover:border-emerald hover:text-emerald'
  }`

  const navLinkClass = `text-sm font-medium transition-colors hover:text-emerald ${
    scrolled ? 'text-charcoal/80 dark:text-white/80' : 'text-white/90'
  }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-charcoal/5' : 'bg-transparent'
      }`}
    >
      <Container className="flex h-32 items-center justify-between py-2">
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="EnergyMaxx Solutions Limited"
            className="h-24 w-auto sm:h-28"
            width={1218}
            height={360}
          />
        </a>

        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={toggleDark} aria-label="Toggle dark mode" className={iconButtonClass}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className={iconButtonClass}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      <div className="hidden lg:block">
        <Container className="flex h-16 items-center justify-between">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleDark} aria-label="Toggle dark mode" className={iconButtonClass}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <LinkButton href="#contact" variant="accent" className="px-5 py-3 text-sm">
              Get a Free Consultation
            </LinkButton>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden glass lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-6 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-emerald/10 hover:text-emerald dark:text-white dark:hover:bg-emerald/15"
                >
                  {link.label}
                </a>
              ))}
              <LinkButton href="#contact" variant="accent" onClick={() => setOpen(false)} className="mt-3 w-full">
                Get a Free Consultation
              </LinkButton>
              <p className="mt-3 text-center text-xs text-charcoal/50 dark:text-white/50">{site.phones[0]}</p>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
