'use client'

import { motion } from 'framer-motion'

interface DecorativeDotsProps {
  rows?: number
  columns?: number
  width?: number
  height?: number
  viewBoxWidth?: number
  viewBoxHeight?: number
  dotRadius?: number
  dotColor?: string
  className?: string
  animationDelay?: number
  animationDuration?: number
  keyPrefix?: string
}

export default function DecorativeDots({
  rows = 8,
  columns = 4,
  width = 64,
  height = 128,
  viewBoxWidth = 64,
  viewBoxHeight = 128,
  dotRadius = 3,
  dotColor = "#3B82F6",
  className = "",
  animationDelay = 0.8,
  animationDuration = 0.6,
  keyPrefix = "decorative-dot"
}: DecorativeDotsProps) {
  const totalDots = rows * columns
  const cellWidth = viewBoxWidth / columns
  const cellHeight = viewBoxHeight / rows

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: animationDuration, delay: animationDelay }}
      className={className}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: totalDots }).map((_, i) => {
          const row = Math.floor(i / columns)
          const col = i % columns
          const x = col * cellWidth + cellWidth / 2 // Center each dot in cell
          const y = row * cellHeight + cellHeight / 2
          
          return (
            <motion.circle
              key={`${keyPrefix}-${i}`}
              cx={x}
              cy={y}
              r={dotRadius}
              fill={dotColor}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: animationDelay + 0.2 + (i * 0.02),
                ease: "easeOut"
              }}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}
