import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0ee?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        >
          Gallery
        </motion.h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl border border-indigo-100 bg-white shadow-sm"
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
