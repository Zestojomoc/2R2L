import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  Bike,
  Camera,
  ChevronLeft,
  ChevronRight,
  Globe,
  MapPinned,
  Menu,
  MessageSquareText,
  Play,
  Sparkles,
  X,
} from 'lucide-react'
import {
  galleryItems,
  groupInfo,
  marilaqueStops,
  navItems,
  socialLinks,
  stats,
} from './data/siteData'
import './App.css'

const sectionIds = navItems.map((item) => item.id)
const aboutImages = [
  { src: '/images/about-1.jpg', alt: '2R2L group motorcycles' },
  { src: '/images/about-2.jpg', alt: '2R2L riders at a meetup' },
  { src: '/images/about-3.jpg', alt: '2R2L motorcycle meetup' },
  { src: '/images/about-4.jpg', alt: '2R2L motorcycles at night' },
  { src: '/images/about-5.jpg', alt: '2R2L group ride viewpoint' },
  { src: '/images/about-6.jpg', alt: '2R2L motorcycles outside the venue' },
]
const venueImages = [
  { src: '/images/venue-1.jpg', alt: '2R2L venue view one' },
  { src: '/images/venue-2.jpg', alt: '2R2L venue view two' },
  { src: '/images/venue-3.jpg', alt: '2R2L venue view three' },
  { src: '/images/venue-4.jpg', alt: '2R2L venue view four' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [selectedStop, setSelectedStop] = useState(marilaqueStops[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [aboutImageIndex, setAboutImageIndex] = useState(0)
  const [venueImageIndex, setVenueImageIndex] = useState(0)
  const headerRef = useRef(null)

  const visibleGalleryItems = galleryItems

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target?.id) {
          setActiveSection(visible.target.id)
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    )

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return
      const scrolled = window.scrollY > 32
      headerRef.current.classList.toggle('is-scrolled', scrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (lightboxIndex === null) return

      if (event.key === 'Escape') {
        setLightboxIndex(null)
      }

      if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % visibleGalleryItems.length)
      }

      if (event.key === 'ArrowLeft') {
        setLightboxIndex(
          (prev) => (prev - 1 + visibleGalleryItems.length) % visibleGalleryItems.length,
        )
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex, visibleGalleryItems.length])

  const selectedStopData = marilaqueStops.find((stop) => stop.id === selectedStop) ?? marilaqueStops[0]
  const currentImage = visibleGalleryItems[lightboxIndex] ?? null

  return (
    <div className="page-shell text-stone-100">
      <header ref={headerRef} className="topbar">
        <nav className="nav container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="Home">
            <img src="/images/logo.png" alt="2R2L group logo" className="brand-mark" />
          </a>

          <div className="desktop-nav" aria-label="Desktop navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="menu-button"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'mobile-link active' : 'mobile-link'}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="hero-section">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="container hero-content">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="hero-logo-wrap"
            >
              <img src="/images/logo.png" alt="2R2L group logo" className="hero-logo" />
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              href="#about"
              className="scroll-cue"
              aria-label="Scroll to about section"
            >
              <span>Scroll</span>
              <ArrowDown size={18} />
            </motion.a>
          </div>
        </section>

        <section id="about" className="section-shell">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="section-heading"
            >
              <p className="eyebrow">ABOUT US</p>
              <h2>Built on miles, stories, and brotherhood.</h2>
            </motion.div>

            <div className="about-grid">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="about-image-panel"
              >
                  <div className="about-image-stack">
                    {aboutImages.map((image, index) => {
                      const offset = (index - aboutImageIndex + aboutImages.length) % aboutImages.length

                      if (offset > 2) return null

                      return (
                        <motion.button
                          key={image.src}
                          type="button"
                          className="about-stack-card"
                          aria-label={`View next About photo from ${image.alt}`}
                          animate={{
                            x: offset * 14,
                            y: offset * -12,
                            rotate: offset === 0 ? 0 : offset === 1 ? 3 : -4,
                            scale: 1 - offset * 0.04,
                            opacity: 1 - offset * 0.16,
                          }}
                          transition={{ duration: 0.45, ease: 'easeOut' }}
                          style={{ zIndex: aboutImages.length - offset }}
                          onClick={() => setAboutImageIndex((index) => (index + 1) % aboutImages.length)}
                        >
                          <img src={image.src} alt={image.alt} />
                        </motion.button>
                      )
                    })}
                  </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="about-copy"
              >
                <p>{groupInfo.intro}</p>
                <p>{groupInfo.story}</p>
                {groupInfo.mission && <p>{groupInfo.mission}</p>}

                <div className="stats-grid" aria-label="Group stats overview">
                  {stats.map((stat) => (
                    <div key={stat.label} className="stat-card">
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="marilaque" className="section-shell muted-panel">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="section-heading narrow"
            >
              <p className="eyebrow">THE CHASE</p>
              <h2>Marilaque, our signature route.</h2>
            </motion.div>

            <div className="marilaque-layout">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7 }}
                className="map-panel"
              >
                <img src="/images/marilaque-map.jpg" alt="Marilaque route map" />
                <div className="map-markers" aria-label="Route checkpoints">
                  {marilaqueStops.map((stop, index) => (
                    <button
                      key={stop.id}
                      type="button"
                      className={selectedStop === stop.id ? 'map-marker active' : 'map-marker'}
                      style={{ left: `${18 + index * 20}%`, top: `${28 + index * 14}%` }}
                      aria-label={`Select ${stop.name}`}
                      onClick={() => setSelectedStop(stop.id)}
                    >
                      <span>{stop.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>

              <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="stop-panel"
              >
                <div className="stop-card">
                  <p className="eyebrow small">STOP {selectedStopData.label}</p>
                  <h3>{selectedStopData.name}</h3>
                  <p>{selectedStopData.description}</p>
                  <div className="stop-note">
                    <Sparkles size={16} />
                    <span>{selectedStopData.note}</span>
                  </div>
                </div>
              </motion.aside>
            </div>
          </div>
        </section>

        <section id="spot" className="section-shell">
          <div className="container venue-grid">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="venue-photo"
            >
              <div className="venue-image-stack">
                {venueImages.map((image, index) => {
                  const offset = (index - venueImageIndex + venueImages.length) % venueImages.length

                  if (offset > 2) return null

                  return (
                    <motion.button
                      key={image.src}
                      type="button"
                      className="venue-stack-card"
                      aria-label={`View next venue photo from ${image.alt}`}
                      animate={{
                        x: offset * 14,
                        y: offset * -12,
                        rotate: offset === 0 ? 0 : offset === 1 ? 3 : -4,
                        scale: 1 - offset * 0.04,
                        opacity: 1 - offset * 0.16,
                      }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      style={{ zIndex: venueImages.length - offset }}
                      onClick={() => setVenueImageIndex((current) => (current + 1) % venueImages.length)}
                    >
                      <img src={image.src} alt={image.alt} />
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="venue-copy"
            >
              <p className="eyebrow">OUR SPOT</p>
              <h2>Where the ride begins.</h2>
              <div className="venue-meta">
                <span>
                  <MapPinned size={16} />
                  Dunkin' - Unioil Sumulong Antipolo Drive Thru
                </span>
                <span>
                  <Bike size={16} />
                  Ride check and coffee before the chase
                </span>
              </div>
                <p>
                  This place is our usual meetup location, the energy of the group before departure, and the community rhythm that makes every ride feel like home.
              </p>
              <div className="cta-row">
                <a href="#contact" className="primary-button">
                  Ride with us <ArrowRight size={16} />
                </a>
                <a
                  href="https://www.google.com/maps/place/Dunkin'+-+Unioil+Sumulong+Antipolo+Drive+Thru/@14.5932349,121.1755485,2669m/data=!3m1!1e3!4m10!1m2!2m1!1sdunkin!3m6!1s0x3397bf0018b32aad:0x11ecf88c152459c1!8m2!3d14.5934489!4d121.175702!15sCgZkdW5raW4iA4gBAVoIIgZkdW5raW6SAQpkb251dF9zaG9w4AEA!16s%2Fg%2F11yk_n7pqh?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  View map
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="gallery" className="section-shell muted-panel">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="section-heading"
            >
              <p className="eyebrow">GALLERY</p>
              <h2>THE UNITS.</h2>
            </motion.div>

            <div className="gallery-grid">
              {visibleGalleryItems.map((item, index) => (
                <motion.button
                  key={`${item.title}-${index}`}
                  type="button"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="gallery-card"
                  onClick={() => setLightboxIndex(index)}
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <span>{item.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell contact-section">
          <div className="container contact-panel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="contact-copy"
            >
              <p className="eyebrow">RIDE WITH US</p>
              <h2>Lean with confidence.</h2>
              <p>
                Same passion, different machines. Connect with us, ride with the crew, and be part of the miles ahead.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="contact-links"
            >
              {socialLinks.map((link) => {
                const Icon =
                  link.platform === 'instagram'
                    ? Camera
                    : link.platform === 'facebook'
                      ? Globe
                      : link.platform === 'tiktok'
                        ? MessageSquareText
                        : Play

                return (
                  <a key={link.label} href={link.href} className="social-link" aria-label={link.label}>
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </a>
                )
              })}

              <div className="contact-facebook-image">
                <img
                  src="/images/contact-facebook.jpg"
                  alt="2R2L Facebook page"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand footer-brand">
            <img src="/images/logo.png" alt="2R2L group logo" className="brand-mark" />
            <span>{groupInfo.name}</span>
          </div>

          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-socials">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 {groupInfo.name}. All rights reserved.</span>
        </div>
      </footer>

      <AnimatePresence>
        {currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={() => setLightboxIndex(null)}
          >
            <div className="lightbox-shell" onClick={(event) => event.stopPropagation()}>
              <button type="button" className="lightbox-close" onClick={() => setLightboxIndex(null)}>
                <X size={20} />
              </button>

              <button
                type="button"
                className="lightbox-nav left"
                aria-label="Previous image"
                onClick={() => setLightboxIndex((prev) => (prev - 1 + visibleGalleryItems.length) % visibleGalleryItems.length)}
              >
                <ChevronLeft size={22} />
              </button>

              <img src={currentImage.image} alt={currentImage.title} className="lightbox-image" />

              <button
                type="button"
                className="lightbox-nav right"
                aria-label="Next image"
                onClick={() => setLightboxIndex((prev) => (prev + 1) % visibleGalleryItems.length)}
              >
                <ChevronRight size={22} />
              </button>

              <div className="lightbox-caption">
                <span>{currentImage.category}</span>
                <strong>{currentImage.title}</strong>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
