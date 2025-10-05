import { motion } from 'framer-motion'
import EmployAILogo from './EmployAILogo'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <EmployAILogo className="w-10 h-10 text-white" />
            <span className="text-lg font-bold">Employ AI</span>
          </div>

          <div className="flex items-center space-x-8 text-sm text-accent-muted">
            <a href="#about" className="hover:text-white transition-colors">About Us</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-accent-muted">
          <p>&copy; 2025 Employ AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

