import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

export default function AboutUs() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            About Us
          </h2>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-lg leading-relaxed"
        >
          <p className="text-white/75">
            We believe the next generation of companies won't just hire people — they'll hire{' '}
            <span className="text-[#A7BFFF] font-semibold">Digital Employees</span>.
          </p>
          
          <p className="text-white/75">
            These AI teammates don't just automate — they{' '}
            <span className="text-[#A7BFFF] font-semibold">perform real roles</span> inside your business, 
            handling communication, coordination, and execution across your tools.
          </p>

          <p className="text-white/75">
            Our mission is to help every team{' '}
            <span className="text-[#A7BFFF] font-semibold">scale effortlessly</span> by giving them access 
            to digital workers that{' '}
            <span className="text-white/90 font-medium">never sleep, never forget, and always deliver</span>{' '}
            — so humans can focus on creativity and growth.
          </p>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 mt-8 border-t border-white/10"
          >
            <p className="text-xl font-semibold text-white">
              Join us in building the future of work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
