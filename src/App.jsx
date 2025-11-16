import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Contact />
      <footer className="py-10 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} ZX2APT.EXE — Design. Build. Grow.</p>
      </footer>
    </div>
  )
}

export default App
