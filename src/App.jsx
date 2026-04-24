import { useEffect, useRef } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    /* ── Scroll-reveal observer ──────────────────────── */
    const els = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    els.forEach((el) => observer.observe(el))

    /* ── Custom cursor glow (desktop only) ───────────── */
    const cursor = cursorRef.current
    let animId
    const onMove = (e) => {
      if (cursor) {
        cancelAnimationFrame(animId)
        animId = requestAnimationFrame(() => {
          cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        })
      }
    }
    const isMobile = window.matchMedia('(max-width: 1024px)').matches
    if (!isMobile) {
      window.addEventListener('mousemove', onMove, { passive: true })
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <div className="main-wrapper">
      {/* Cursor glow */}
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />

      {/* Animated background */}
      <div className="bg-wrap" aria-hidden="true">
        <div className="bg-orb bg-orb--cyan" />
        <div className="bg-orb bg-orb--violet" />
        <div className="bg-orb bg-orb--mid" />
      </div>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
