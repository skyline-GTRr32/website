import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const features = [
  {
    icon: '💬',
    title: 'WhatsApp',
    description: 'Send messages, receive replies, share files—just like a real team member.',
    detail: 'Instant messaging • File sharing • Group chats • Voice notes',
  },
  {
    icon: '📞',
    title: 'Phone Line',
    description: 'Dedicated number. Makes outbound calls. Answers incoming. Handles voicemail.',
    detail: 'Outbound calling • Call screening • Voicemail transcription • SMS',
  },
  {
    icon: '🎥',
    title: 'Microsoft Teams',
    description: 'Joins meetings. Hosts calls. Speaks like a real participant. Takes notes.',
    detail: 'Meeting participation • Auto note-taking • Action items • Screen sharing',
  },
]

export default function FeatureCards() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Three Channels.
            <br />
            <span className="text-accent-muted">One Experience.</span>
          </h2>
        </motion.div>

        {/* Stacked Expanding Layout */}
        <div className="space-y-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              onHoverStart={() => setActiveIndex(index)}
              onHoverEnd={() => setActiveIndex(null)}
              className="group relative"
            >
              <motion.div
                className="relative overflow-hidden cursor-pointer"
                animate={{
                  height: activeIndex === index ? 'auto' : '140px',
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Background */}
                <motion.div
                  className="absolute inset-0 bg-white/[0.02] border border-white/10"
                  animate={{
                    backgroundColor: activeIndex === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                    borderColor: activeIndex === index ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)',
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-12">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-6 mb-4">
                        <motion.div
                          className="text-5xl lg:text-6xl"
                          animate={{
                            scale: activeIndex === index ? 1.1 : 1,
                            rotate: activeIndex === index ? 5 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-3xl lg:text-4xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-lg text-accent-muted max-w-3xl">
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Expanded Details */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: activeIndex === index ? 1 : 0,
                          height: activeIndex === index ? 'auto' : 0,
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                          {feature.detail.split(' • ').map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: activeIndex === index ? 1 : 0,
                                x: activeIndex === index ? 0 : -20,
                              }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-1 h-1 bg-white rounded-full" />
                              <span className="text-accent-muted">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Indicator */}
                    <motion.div
                      animate={{
                        rotate: activeIndex === index ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl text-accent-muted ml-4"
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Animated bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

