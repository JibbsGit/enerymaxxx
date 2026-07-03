import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { ScrollToTop } from './components/ScrollToTop'
import { Loader } from './components/Loader'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDark, toggle } = useDarkMode()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <Projects />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export default App
