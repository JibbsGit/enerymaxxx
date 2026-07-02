import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary: 'bg-emerald text-white shadow-lg shadow-emerald/30 hover:bg-deep-green hover:shadow-xl hover:shadow-deep-green/30 hover:-translate-y-0.5',
  outline:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10 backdrop-blur-sm',
  outlineDark:
    'border-2 border-deep-green/30 text-deep-green hover:bg-deep-green hover:text-white dark:border-emerald/40 dark:text-emerald dark:hover:bg-emerald dark:hover:text-charcoal',
  gold: 'bg-gold text-charcoal shadow-lg shadow-gold/30 hover:brightness-105 hover:-translate-y-0.5',
}

type Variant = keyof typeof variants

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: { children: ReactNode; variant?: Variant; className?: string } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: { children: ReactNode; variant?: Variant; className?: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
