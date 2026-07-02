import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { site } from '../data/site'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.1c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.11.11-1.79-.11a16.5 16.5 0 0 1-1.6-.59c-2.82-1.22-4.65-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.29.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.11.99 2.05 1.29 2.33 1.43.29.14.45.12.62-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.93.29.14.48.21.55.33.07.12.07.7-.17 1.38Z" />
    </svg>
  )
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-charcoal/20 dark:bg-charcoal"
          >
            <div className="flex items-center justify-between bg-[#25D366] px-4 py-3 text-white">
              <span className="text-sm font-semibold">Chat with us on WhatsApp</span>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X size={16} />
              </button>
            </div>
            <div className="space-y-2 p-3">
              {site.whatsappLinks.map((link) => (
                <a
                  key={link.number}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-charcoal/10 p-3 text-sm font-medium text-charcoal transition-colors hover:border-[#25D366] hover:bg-[#25D366]/5 dark:border-white/10 dark:text-white"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                    <WhatsAppIcon />
                  </span>
                  {link.number}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/60" />
        {open ? <X size={24} className="relative" /> : <MessageCircle size={26} className="relative" />}
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-charcoal px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Chat with us on WhatsApp
        </span>
      </motion.button>
    </div>
  )
}
