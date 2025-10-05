import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const agentTeams = [
  {
    id: 'team-1',
    title: 'Market Intelligence Team',
    tasks: ['Competitor Analysis', 'User Feedback', 'Trend Analysis']
  },
  {
    id: 'team-2',
    title: 'Product Strategy Team',
    tasks: ['Prioritization', 'Roadmapping', 'Resource Allocation']
  },
  {
    id: 'team-3',
    title: 'Engineering Collab Team',
    tasks: ['User Story & Ticketing', 'Launch Coordination', 'QA & Testing']
  }
]

const channels = ['WhatsApp', 'Phone Line', 'MS Teams']

export default function ArchitectureSection() {
  return (
    <section className="relative py-32 px-6 lg:px-20">
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
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            The Anatomy of a Digital PM
          </h2>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto">
            Each Digital Employee is a team of specialized agentic teams, orchestrated by a central core.
          </p>
        </motion.div>

        {/* Flow Diagram Container */}
        <div className="flex flex-col items-center gap-5 mt-20">
          
          {/* Stage 1: The Core */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="w-[300px] bg-[#1A1A1A] border-2 border-[#A7BFFF] rounded-xl p-6 text-center"
          >
            <h4 className="text-lg font-bold text-white mb-1">AI Product Manager</h4>
            <p className="text-sm text-accent-muted">(Central Core)</p>
          </motion.div>

          {/* Stage 2: Connecting Line */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="w-0.5 h-12 bg-[#444]"
            style={{ transformOrigin: 'top' }}
          />

          {/* Stage 3: Agent Teams Row */}
          <div className="flex gap-6 items-stretch">
            {agentTeams.map((team, index) => (
              <motion.div
                key={team.id}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 1.0 + index * 0.15,
                  ease: [0.19, 1, 0.22, 1]
                }}
                whileHover={{ y: -5 }}
                className="w-[280px] bg-[#1A1A1A] border border-[#333] rounded-xl p-6 transition-transform duration-300"
              >
                <h4 className="text-base font-bold text-white mb-4 text-center">{team.title}</h4>
                <ul className="space-y-2 text-left">
                  {team.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="text-sm text-white/60">
                      • {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Stage 4: Communications Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.85, ease: [0.19, 1, 0.22, 1] }}
            className="w-full bg-[#1A1A1A] border border-[#333] rounded-xl p-6 mt-5 text-center"
          >
            <h4 className="text-base font-bold text-white mb-4">Universal Communication Channels</h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {channels.map((channel) => (
                <span
                  key={channel}
                  className="px-4 py-2 bg-[#222] border border-white/10 rounded-lg text-sm text-white/80"
                >
                  {channel}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stage 5: Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.3 }}
          className="text-center text-sm italic text-white/50 mt-16"
        >
          *This is a simplified architecture. Each team is composed of 5-10+ specialized agents.
        </motion.p>
      </div>
    </section>
  )
}

