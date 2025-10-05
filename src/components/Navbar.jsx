import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import EmployAILogo from './EmployAILogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Contact Us', href: '#contact' }
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-950/80 backdrop-blur-2xl border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <EmployAILogo className="w-10 h-10 text-white" />
            <span className="text-lg font-bold tracking-tight">Employ AI</span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-accent-muted hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2.5 bg-white text-dark-950 text-sm font-semibold rounded-full hover:bg-accent-muted transition-all"
          >
            Contact Us
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-950 border-t border-white/5"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block text-base font-medium text-accent-muted hover:text-white transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block text-center px-6 py-3 bg-white text-dark-950 text-sm font-semibold rounded-full mt-4"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

