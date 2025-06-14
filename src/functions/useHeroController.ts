'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useHeroController() {
  useEffect(() => {
    const heroHidden = document.querySelector('.hero-hidden')
    const hero = document.getElementById('hero')

    if (!heroHidden || !hero) return

    const trigger = ScrollTrigger.create({
      trigger: heroHidden,
      start: 'top top',
      onEnter: () => hero.classList.add('opacity-0'),
      onLeaveBack: () => hero.classList.remove('opacity-0'),
    })

    return () => {
      trigger.kill()
    }
  }, [])
}
