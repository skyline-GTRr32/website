import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import PhilosophySection from './components/PhilosophySection'
import UniqueFeatures from './components/UniqueFeatures'
import ArchitectureSection from './components/ArchitectureSection'
import WhyChooseUs from './components/UseCases'
import AboutUs from './components/AboutUs'
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
      <WhyChooseUs />
      <AboutUs />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App

