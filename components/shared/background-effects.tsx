import { cn } from '@/lib/utils'

interface BackgroundEffectsProps {
  size?: string
  gradient?: string
  opacity?: number
  zIndex?: number
  className?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
}

export default function BackgroundEffects({
  size = '800',
  gradient = 'radial-gradient(50% 50% at 50% 50%, rgba(248, 188, 38, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
  opacity = 10,
  zIndex = 0,
  className = '',
  top,
  right,
  bottom,
  left
}: BackgroundEffectsProps) {
  // Check if any positioning props are provided
  const hasCustomPosition = top !== undefined || right !== undefined || bottom !== undefined || left !== undefined
  
  return (
    <div
      className={cn(
        `absolute aspect-square ${!hasCustomPosition ? 'inset-0' : ''} ${className}`
      )}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        aspectRatio: 'square',
        ...(hasCustomPosition && {
          top: top,
          right: right,
          bottom: bottom,
          left: left,
        }),
        background: gradient,
        opacity: opacity,
        zIndex: zIndex,
        pointerEvents: 'none'
      }}
    />
  )
}