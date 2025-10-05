import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import EmployAILogo from './EmployAILogo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'About Us', href: '#about' },
              { label: 'Why Us', href: '#why-us' },
              { label: 'Architecture', href: '#architecture' },
              { label: 'Contact Us', href: '#contact' }
            ].map((item) => (
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

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-white text-dark-950 text-sm font-semibold rounded-full hover:bg-accent-muted transition-all"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

