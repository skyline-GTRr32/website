import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

export default function PhilosophySection() {
  const highlightColor = '#A7BFFF'

  const lines = [
    { 
      text: "We find what to automate, who your users are",
      highlight: "automate",
      align: "left"
    },
    { 
      text: "& how AI can optimize your workflow.",
      highlight: "workflow",
      align: "left"
    },
    { 
      text: "Best part is we also build and launch real solutions.",
      highlight: "real solutions",
      align: "left"
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

  const renderLineWithHighlight = (text, highlight) => {
    if (!highlight) return text
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
    return parts.map((part, index) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return (
          <span key={index} style={{ color: highlightColor, fontStyle: 'italic' }}>
            {part}
          </span>
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
          {/* Quote Container with Custom Alignment */}
          <div className="w-full max-w-[900px]">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineVariants}
                className="text-3xl lg:text-[38px] font-medium leading-[1.4] tracking-tight mb-2"
                style={{ 
                  color: 'rgba(255, 255, 255, 0.75)',
                  textAlign: line.align,
                  letterSpacing: '-0.03em'
                }}
              >
                {renderLineWithHighlight(line.text, line.highlight)}
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
            <p className="text-base text-white/60">Co-founder & AI Strategy Lead</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

