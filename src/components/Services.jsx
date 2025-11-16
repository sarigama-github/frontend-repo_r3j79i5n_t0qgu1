import { motion } from 'framer-motion'

const services = [
  {
    title: 'Poster/Banner Design',
    price: '₹750/month',
    desc: 'Customized posters for festivals, colleges & businesses',
  },
  {
    title: 'Social Media Handling',
    price: '₹750/month',
    desc: 'Instagram, Facebook, Google My Business management',
  },
  {
    title: 'Video Editing',
    price: '₹750/month',
    desc: 'Transitions, color grading, music, best angles',
  },
  {
    title: 'Website Analytics',
    price: '₹750/month',
    desc: 'AI Web/App Trial: Visitor insights, actionable reports',
  },
  {
    title: 'AI Prototype Apps',
    price: '₹750/month',
    desc: 'Prototype shopping/web apps using AI tools',
  },
]

function ServiceCard({ title, price, desc, delay }) {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className="group relative rounded-2xl p-6 bg-white border border-indigo-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-50/0 to-indigo-100/0 group-hover:from-indigo-50/80 group-hover:to-indigo-100/40 transition" />
      <div className="relative">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="mt-1 text-indigo-600 font-semibold">{price}</p>
        <p className="mt-3 text-gray-600 text-sm">{desc}</p>
        <button className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
          Get it now!
        </button>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        >
          Services & Pricing
        </motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}
