'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode
}

export default function SplitText({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const fixedRef = useRef<HTMLDivElement>(null)
  const isString = typeof children === 'string'

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const container = containerRef.current!
    const fixed = fixedRef.current!
    // 1) layout scroll + fixo
    Object.assign(container.style, { position: 'relative', height: '100vh', width: '100%' })
    Object.assign(fixed.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      pointerEvents: 'none',
    })

    const animateElems = (elems: HTMLElement[]) => {
      gsap.set(elems, { autoAlpha: 0, y: 0 })
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top 50%',
            end: 'top 0%',
            scrub: true,
          },
        })
        .to(elems, { autoAlpha: 1, y: 10, ease: 'none', stagger: { each: 0.1 } })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: 'bottom bottom',
            end: 'bottom 50%',
            scrub: true,
          },
        })
        .to(elems, { autoAlpha: 0, y: -10, ease: 'none', stagger: { each: 0.1 } })
    }

    let observer: MutationObserver | null = null

    if (isString) {
      // 2a) split texto
      fixed.innerHTML = ''
      const chars: HTMLElement[] = []
      ;(children as string).split(' ').forEach((w, wi, arr) => {
        const wr = document.createElement('span')
        Object.assign(wr.style, { display: 'inline-block', whiteSpace: 'nowrap' })
        for (const c of w) {
          const sp = document.createElement('span')
          sp.textContent = c
          sp.style.display = 'inline-block'
          chars.push(sp)
          wr.appendChild(sp)
        }
        fixed.append(wr)
        if (wi < arr.length - 1) fixed.append(document.createTextNode('\u00A0'))
      })
      animateElems(chars)
    } else {
      // 2b) qualquer componente filho
      observer = new MutationObserver((_, obs) => {
        const kids = Array.from(fixed.children) as HTMLElement[]
        if (kids.length) {
          animateElems(kids)
          obs.disconnect()
        }
      })
      observer.observe(fixed, { childList: true })
    }

    return () => {
      observer?.disconnect()
      ScrollTrigger.getAll().forEach(t => t.kill())
      gsap.killTweensOf('*')
    }
  }, [children, isString])

  return (
    <div className="shine" ref={containerRef}>
      <div
        className="sm:w-[500px] [&>div]:mx-auto max-sm:w-full max-sm:px-6 justify-center"
        ref={fixedRef}
        aria-label={isString ? (children as string) : undefined}
      >
        {!isString && children}
      </div>
    </div>
  )
}
