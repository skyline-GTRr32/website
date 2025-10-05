import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function AnimatedVisual() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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

      {/* Animated circles that follow mouse */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={`circle-${i}`}
          cx={`${mousePosition.x}%`}
          cy={`${mousePosition.y}%`}
          r={50 + i * 30}
          fill="none"
          stroke="white"
          strokeWidth="1"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Grid pattern that pulses */}
      <defs>
        <pattern
          id="grid"
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
      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Floating dots */}
      {[...Array(30)].map((_, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={`${Math.random() * 100}%`}
          cy={`${Math.random() * 100}%`}
          r="2"
          fill="white"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
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

