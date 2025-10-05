import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-20 pt-20">
      {/* Nebula Background with Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        {/* Text Content */}
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block mb-8">
            <div className="relative px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                <span className="text-sm font-medium text-accent-muted">
                  Multi-Agent AI Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold mb-8 leading-[0.9] tracking-tight"
          >
            Meet Your First
            <br />
            <span className="text-accent-muted">AI Employee</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-accent-muted leading-relaxed mb-12 max-w-3xl mx-auto px-4"
          >
            Fully autonomous digital teammates that chat, call, and join meetings
            — just like a human.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#E5E5E5' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-dark-950 text-base sm:text-lg font-semibold rounded-full transition-all"
            >
              Book a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border border-white/20 text-white text-base sm:text-lg font-semibold rounded-full hover:bg-white/5 transition-all"
            >
              Learn How It Works
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 flex-wrap"
          >
            {[
              { value: '24/7', label: 'Always Active' },
              { value: '3', label: 'Channels' },
              { value: '100%', label: 'Ownership' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-accent-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

