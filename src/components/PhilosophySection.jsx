import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

export default function PhilosophySection() {
  const highlightColor = '#A7BFFF'

  const lines = [
    { 
      text: "We're not building tools. We're building teammates.",
      highlights: ["tools", "teammates"]
    },
    { 
      text: "AI Employees that don't just assist—they own their role,",
      highlights: ["own"]
    },
    { 
      text: "make decisions, and deliver results while you sleep.",
      highlights: ["deliver results"]
    }
  ]

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        delay: i * 0.2,
        ease: [0.19, 1, 0.22, 1] // easeOutExpo
      }
    })
  }

  const renderLineWithHighlights = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text
    
    // Create a regex pattern that matches any of the highlight phrases
    const pattern = highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
    const parts = text.split(new RegExp(`(${pattern})`, 'gi'))
    
    return parts.map((part, index) => {
      const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase())
      
      if (isHighlight) {
        return (
          <motion.span
            key={index}
            style={{ 
              color: highlightColor, 
              fontStyle: 'italic',
              display: 'inline-block'
            }}
            animate={{
              rotateY: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          >
            {part}
          </motion.span>
        )
      }
      return part
    })
  }

  return (
    <section className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <span className="text-sm font-medium text-accent-muted uppercase tracking-wider">
                Our Philosophy
              </span>
            </div>
          </motion.div>

          {/* Quote Container */}
          <div className="w-full max-w-[900px]">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="text-3xl lg:text-[42px] font-semibold leading-[1.4] tracking-tight mb-2"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.85)',
                  textAlign: 'left',
                  letterSpacing: '-0.03em'
                }}
              >
                {renderLineWithHighlights(line.text, line.highlights)}
              </motion.p>
            ))}
          </div>

          {/* Author Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <p className="text-base text-white/60">Founder & Chief AI Architect</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

