import { motion } from 'framer-motion'
import AnimatedVisualStatic from './AnimatedVisualStatic'

const agentTeams = [
  {
    id: 'team-1',
    step: '02',
    title: 'Market Intelligence Team',
    description: 'Analyzes market trends, competitors, and user feedback',
    tasks: ['Competitor Analysis', 'User Feedback', 'Trend Analysis']
  },
  {
    id: 'team-2',
    step: '03',
    title: 'Product Strategy Team',
    description: 'Creates roadmaps and prioritizes features based on data',
    tasks: ['Prioritization', 'Roadmapping', 'Resource Allocation']
  },
  {
    id: 'team-3',
    step: '04',
    title: 'Engineering Collab Team',
    description: 'Manages development workflow and quality assurance',
    tasks: ['User Story & Ticketing', 'Launch Coordination', 'QA & Testing']
  }
]

const channels = ['WhatsApp', 'Phone Line', 'MS Teams']

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="relative py-32 px-6 lg:px-20">
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
          {/* Badge */}
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
              <span className="text-sm font-medium text-accent-muted">
                An Example of Project Manager AI Employee
              </span>
            </div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto">
            A Digital PM is powered by multiple AI agent teams that work together to deliver results—just like a real product manager would.
          </p>
        </motion.div>

        {/* Flow Diagram Container */}
        <div className="flex flex-col items-center gap-5 mt-20">
          
          {/* Stage 1: The Core Brain */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="w-full max-w-[600px] bg-[#1A1A1A] border-2 border-[#A7BFFF] rounded-xl p-8 text-center"
          >
            <div className="inline-block px-3 py-1 bg-[#A7BFFF]/20 rounded-full text-xs font-bold text-[#A7BFFF] mb-4">
              STEP 01
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">Central AI Core</h4>
            <p className="text-base text-accent-muted">
              The central brain that orchestrates all agent teams, makes final decisions, and coordinates communication across all channels.
            </p>
          </motion.div>

          {/* Flow Arrow Down */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center"
            style={{ transformOrigin: 'top' }}
          >
            <div className="w-0.5 h-8 bg-[#444]" />
            <div className="text-2xl text-[#444]">↓</div>
          </motion.div>

          {/* Stage 2-4: Agent Teams Row */}
          <div className="flex gap-6 items-stretch flex-wrap justify-center max-w-[1000px]">
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
                whileHover={{ y: -5, borderColor: 'rgba(167, 191, 255, 0.3)' }}
                className="w-[300px] bg-[#1A1A1A] border border-[#333] rounded-xl p-6 transition-all duration-300"
              >
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white/60 mb-3">
                  STEP {team.step}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{team.title}</h4>
                <p className="text-sm text-accent-muted mb-4">{team.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/40 mb-2 uppercase tracking-wide">Key Tasks</p>
                  <ul className="space-y-1.5">
                    {team.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="text-sm text-white/60 flex items-start">
                        <span className="text-[#A7BFFF] mr-2">•</span>
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Arrow Down */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center"
            style={{ transformOrigin: 'top' }}
          >
            <div className="w-0.5 h-8 bg-[#444]" />
            <div className="text-2xl text-[#444]">↓</div>
          </motion.div>

          {/* Stage 5: Communications Layer */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.85, ease: [0.19, 1, 0.22, 1] }}
            className="w-full max-w-[600px] bg-[#1A1A1A] border border-[#333] rounded-xl p-8 text-center"
          >
            <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-bold text-white/60 mb-3">
              STEP 05
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Output & Communication</h4>
            <p className="text-sm text-accent-muted mb-6">
              All insights and actions are delivered through your preferred channels—chat, call, or meeting.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {channels.map((channel) => (
                <span
                  key={channel}
                  className="px-5 py-3 bg-[#222] border border-white/20 rounded-lg text-sm font-medium text-white hover:border-[#A7BFFF]/50 transition-colors"
                >
                  {channel}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Explanation Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="mt-16 max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-white mb-3 text-center">The Result?</h3>
          <p className="text-base text-accent-muted text-center leading-relaxed">
            A fully autonomous Digital PM that researches, strategizes, coordinates with engineering, 
            and communicates with stakeholders—all without human intervention. It works 24/7, learns 
            from every interaction, and scales with your business.
          </p>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2.4 }}
          className="text-center text-xs italic text-white/40 mt-8"
        >
          *This is a simplified architecture. Each team is composed of 5-10+ specialized agents working in parallel.
        </motion.p>
      </div>
    </section>
  )
}

