import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const roles = [
  { emoji: '👔', title: 'Product Manager', tasks: ['Roadmap planning', 'Stakeholder comms', 'Sprint management'] },
  { emoji: '📞', title: 'Sales SDR', tasks: ['Lead qualification', 'Outbound calling', 'CRM updates'] },
  { emoji: '🎧', title: 'Support Agent', tasks: ['Ticket resolution', '24/7 availability', 'Multi-channel help'] },
  { emoji: '📊', title: 'Data Analyst', tasks: ['Report generation', 'Insight delivery', 'Dashboard monitoring'] },
  { emoji: '✍️', title: 'Content Writer', tasks: ['Blog posts', 'Social media', 'Email campaigns'] },
]

export default function UseCases() {
  return (
    <section className="relative py-32 px-6 lg:px-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedVisualStatic />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            Replace These Roles,
            <br />
            <span className="text-accent-muted">Day One</span>
          </h2>
        </motion.div>

        {/* Marquee-style flowing roles */}
        <div className="space-y-8">
          {/* First row - scrolls right */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...roles, ...roles].map((role, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 px-8 py-6 border border-white/10 rounded-full hover:border-white/30 transition-all cursor-pointer"
              >
                <span className="text-4xl">{role.emoji}</span>
                <span className="text-2xl font-bold">{role.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Second row - scrolls left */}
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -100 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...roles, ...roles].reverse().map((role, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-4 px-8 py-6 border border-white/10 rounded-full hover:border-white/30 transition-all cursor-pointer"
              >
                <span className="text-4xl">{role.emoji}</span>
                <span className="text-2xl font-bold">{role.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed list below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 space-y-1"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              className="flex items-center justify-between py-6 px-4 border-t border-white/10 last:border-b group cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <span className="text-5xl">{role.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold mb-1">{role.title}</h3>
                  <div className="flex gap-4 text-sm text-accent-muted">
                    {role.tasks.map((task, i) => (
                      <span key={i}>{task}</span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="text-3xl text-accent-muted"
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

