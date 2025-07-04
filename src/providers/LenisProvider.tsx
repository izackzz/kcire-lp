'use client'

import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t)

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenis = useRef<Lenis | null>(null)

  useEffect(() => {
    if (!lenis.current) {
      lenis.current = new Lenis({
        duration: 0.8,
        easing: easeOutQuad,
        smoothWheel: true,
        lerp: 0.1,
      })

      function raf(time: number) {
        lenis.current?.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }
    return () => {
      lenis.current?.destroy()
      lenis.current = null
    }
  }, [])

  return <>{children}</>
}
