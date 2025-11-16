import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-indigo-100"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-indigo-600 shadow-md shadow-indigo-300" />
          <span className="font-extrabold tracking-tight text-gray-900 text-lg">
            ZX2APT.EXE
          </span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#gallery" className="hover:text-indigo-600 transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          <a
            href="https://www.instagram.com/zx2apt.exe?igsh=MTllNTBkMml6ZWYZef4eQ=="
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
            <span className="hidden md:inline">Instagram</span>
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
