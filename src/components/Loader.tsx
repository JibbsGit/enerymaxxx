import { motion } from 'framer-motion'

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
    >
      <motion.img
        src="/icons/icon-192.png"
        alt="EnergyMaxx"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="h-16 w-16 drop-shadow-xl"
      />
    </motion.div>
  )
}
