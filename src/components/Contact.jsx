import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (res.ok) setStatus({ ok: true, message: data.message || 'Submitted!' })
      else setStatus({ ok: false, message: data.detail || 'Something went wrong' })
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-t from-white to-indigo-50/50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center"
        >
          Contact
        </motion.h2>

        <form onSubmit={handleSubmit} className="mt-10 grid sm:grid-cols-2 gap-6 bg-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
          <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" required rows="4" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-gray-500">DB-only mode: submissions are stored and email attempts are logged.</p>
            <button
              disabled={loading}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </div>
          {status && (
            <div className={`sm:col-span-2 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
