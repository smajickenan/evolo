import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
interface CompareProps {
  firstImage: string
  secondImage: string
  firstImageClassName?: string
  secondImageClassname?: string
  className?: string
  slideMode?: 'hover' | 'drag'
}
export const Compare = ({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = 'hover',
}: CompareProps) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
      const percentage = (x / rect.width) * 100
      setSliderPosition(percentage)
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={slideMode === 'hover' ? handleMouseMove : undefined}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0">
          <img
            src={firstImage}
            alt="First comparison image"
            className={cn('h-full w-full', firstImageClassName)}
          />
        </div>
        <motion.div
          className="absolute inset-0"
          animate={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
          transition={{
            type: 'tween',
            duration: 0.1,
          }}
        >
          <img
            src={secondImage}
            alt="Second comparison image"
            className={cn('h-full w-full', secondImageClassname)}
          />
        </motion.div>
        <div
          className="absolute inset-y-0"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          <div className="h-full w-0.5 bg-white" />
        </div>
      </div>
    </div>
  )
}
