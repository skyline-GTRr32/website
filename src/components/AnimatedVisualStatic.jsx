import { motion } from 'framer-motion'

export default function AnimatedVisualStatic() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.3 }}
    >
      {/* Animated flowing lines */}
      {[...Array(20)].map((_, i) => (
        <motion.line
          key={i}
          x1={`${(i * 5)}%`}
          y1="0%"
          x2={`${(i * 5) + 10}%`}
          y2="100%"
          stroke="white"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.2, 0],
            x1: `${(i * 5) + Math.sin(i) * 10}%`,
            x2: `${(i * 5) + 10 + Math.cos(i) * 10}%`,
          }}
          transition={{
            duration: 3 + i * 0.2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.1,
          }}
        />
      ))}

      {/* Grid pattern that pulses */}
      <defs>
        <pattern
          id="gridStatic"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <motion.path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            animate={{
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#gridStatic)" />

      {/* Glow filter for dots */}
      <defs>
        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Floating dots - NO MOUSE INTERACTION - Brighter with Glow */}
      {[...Array(30)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r="2.5"
          fill="white"
          filter="url(#dotGlow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

