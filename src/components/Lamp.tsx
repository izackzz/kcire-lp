'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Lamp() {
  const lampRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lampRef.current) return

    const trigger = ScrollTrigger.create({
      trigger: lampRef.current,
      start: 'top 99%', // quando o topo do lamp atingir 95% da viewport
      end: 'bottom top', // enquanto o lamp estiver visível (até sair do topo da viewport)
      toggleClass: { targets: lampRef.current, className: 'active' },
      // toggleClass adiciona a classe active quando dentro da área e remove quando sai
    })

    return () => {
      trigger.kill() // limpa o listener ao desmontar componente
    }
  }, [])

  return <div ref={lampRef} className="lamp"></div>
}
