import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { cn } from '../../lib/utils'

interface CompareProps {
  firstImage: string
  secondImage: string
  firstImageClassName?: string
  secondImageClassname?: string
  className?: string
  slideMode?: 'hover' | 'drag' | 'auto'
  autoSpeed?: number
}

export const Compare = ({
  firstImage,
  secondImage,
  firstImageClassName,
  secondImageClassname,
  className,
  slideMode = 'hover',
  autoSpeed = 3000,
}: CompareProps) => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  
  const handleMouseMove = (event: React.MouseEvent) => {
    if (containerRef.current && slideMode === 'hover') {
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width))
      const percentage = (x / rect.width) * 100
      setSliderPosition(percentage)
    }
  }
  
  useEffect(() => {
    if (slideMode === 'auto') {
      controls.start({
        clipPath: ['inset(0 100% 0 0)', 'inset(0 0% 0 0)', 'inset(0 100% 0 0)'],
        transition: {
          duration: 5,
          times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }
      });
    }
    
    return () => {
      controls.stop();
    };
  }, [slideMode, controls]);
  
  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
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
          animate={controls}
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
        >
          <img
            src={secondImage}
            alt="Second comparison image"
            className={cn('h-full w-full', secondImageClassname)}
          />
        </motion.div>
      </div>
    </div>
  )
}
