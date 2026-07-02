export function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.35c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9V10.5H8v3h2.42V21h3.08Z" />
    </svg>
  )
}

export function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 3H21.6l-5.86 6.7L22.7 21h-5.4l-4.24-5.55L8.2 21H5.5l6.27-7.16L4.9 3h5.53l3.83 5.07L18.9 3Zm-.94 16.17h1.5L8.1 4.74H6.49l11.47 14.43Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.1" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20.5H6.94V8.5ZM5.25 3.5A1.97 1.97 0 1 0 5.25 7.44 1.97 1.97 0 0 0 5.25 3.5ZM20.5 20.5V14c0-3.14-1.68-4.6-3.92-4.6-1.81 0-2.62 1-3.07 1.7V8.5H10.13c.04.94 0 12 0 12h3.38v-6.7c0-.36.03-.72.13-.97.28-.72.94-1.47 2.04-1.47 1.44 0 2.02 1.1 2.02 2.7v6.44h3.8Z" />
    </svg>
  )
}
