'use client'
import { ReactNode, useRef } from 'react'
import { wrap } from '@motionone/utils'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'

import { cn } from '@/lib/utils'

type MarqueeAnimationProps = {
  children: ReactNode
  className?: string
  direction?: 'left' | 'right'
  baseVelocity: number
}

function MarqueeAnimation({
  children,
  className,
  direction = 'left',
  baseVelocity = 10,
}: MarqueeAnimationProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  })

  const x = useTransform(baseX, v => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

    if (direction == 'left') {
      directionFactor.current = 1
    } else if (direction == 'right') {
      directionFactor.current = -1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="overflow-hidden marquee-custom max-w-[100vw] text-nowrap flex-nowrap flex relative">
      <motion.div
        className={cn(
          'font-bold uppercase text-5xl flex flex-nowrap text-nowrap *:block *:me-10',
          className
        )}
        style={{ x }}
      >
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
        <div>{children}</div>
      </motion.div>
    </div>
  )
}

export { MarqueeAnimation }
