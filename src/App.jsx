import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import UniqueFeatures from './components/UniqueFeatures'
import ArchitectureSection from './components/ArchitectureSection'
import UseCases from './components/UseCases'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <UniqueFeatures />
      <ArchitectureSection />
      <UseCases />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

