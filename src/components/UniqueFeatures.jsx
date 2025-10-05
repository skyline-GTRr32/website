import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const features = [
  {
    id: 1,
    title: 'True Role Autonomy',
    description: 'We delegate entire roles, not just tasks. From market research to stakeholder updates, your Digital Employee handles the entire lifecycle, taking full responsibility.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    isMain: true
  },
  {
    id: 2,
    title: 'Full Communication Suite',
    description: 'Equipped with its own phone number and accounts to call, text, and join meetings microsoft teams.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    isMain: false
  },
  {
    id: 3,
    title: 'Powered by Agentic Teams',
    description: 'Each Digital Employee is powered by a specialized teamsof AI agents to ensure expert-level performance.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    isMain: false
  }
]

export default function UniqueFeatures() {
  return (
    <section className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl lg:text-6xl font-bold text-center mb-16"
        >
          What Makes Us Unique
        </motion.h2>

        {/* Features Grid */}
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.a
              key={feature.id}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: [0.19, 1, 0.22, 1] // easeOutExpo
              }}
              whileHover={{ y: -5 }}
              className={`group relative block bg-white/[0.02] border border-white/20 rounded-2xl p-8 text-left transition-all duration-300 hover:border-[#A7BFFF] ${
                feature.isMain ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Feature Icon */}
              <div className="text-white/60 mb-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-white/70 leading-relaxed pr-8">
                {feature.description}
              </p>

              {/* Arrow Icon */}
              <div className="absolute bottom-8 right-8 text-white/40 group-hover:text-white/80 transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
