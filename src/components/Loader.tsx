import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'

export function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotate: [0, 8, -8, 0] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald to-deep-green text-white shadow-xl shadow-emerald/30"
      >
        <Leaf size={30} />
      </motion.div>
    </motion.div>
  )
}
