import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute -top-48 right-1/2 translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-indigo-300/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 sm:py-28 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
        >
          Aakash | zx2apt.exe
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Digital Marketer, Designer & Content Creator
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="mt-2 text-base sm:text-lg text-gray-600"
        >
          Freelancing as zx2apt.exe | Building brands with creativity & tech.
        </motion.p>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="mt-2 text-sm sm:text-base text-gray-500"
        >
          Proudly from Maharashtra.
        </motion.p>
      </div>
    </section>
  )
}
