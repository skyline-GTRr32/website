import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const reasons = [
  {
    title: 'True Autonomy',
    description: 'Our AI Employees don\'t just follow scripts—they think, adapt, and make decisions like real team members.',
    icon: '⚡'
  },
  {
    title: 'Multi-Channel Native',
    description: 'Chat, call, or join meetings. Our digital employees work across every communication channel seamlessly.',
    icon: '🔗'
  },
  {
    title: 'Enterprise-Ready',
    description: 'Built for scale with enterprise security, compliance, and integration capabilities from day one.',
    icon: '🛡️'
  },
  {
    title: 'Always Learning',
    description: 'Every interaction makes them smarter. They continuously improve and adapt to your business needs.',
    icon: '🧠'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto">
            We're not building chatbots. We're building the future of work.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.19, 1, 0.22, 1]
              }}
              whileHover={{ y: -5, borderColor: 'rgba(167, 191, 255, 0.5)' }}
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{reason.title}</h3>
              <p className="text-base text-accent-muted leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

