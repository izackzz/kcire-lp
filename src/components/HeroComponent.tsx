'use client'
import Link from 'next/link'

import { Arrow } from '@/components/icons/Arrow'
import Players from '@/components/Players'
import { useHeroController } from '@/functions/useHeroController'

export function HeroComponent() {
  useHeroController()
  return (
    <div
      id="hero"
      className="!fixed top-0 lg:min-w-[750px] left-1/2 -translate-x-2/4 z-0 pt-46 flex flex-col gap-12"
    >
      <div className="gap-10 w-100vw itens-center flex-col flex items-center">
        <div className="badge w-fit">
          <h3 className="py-2.5 px-5 bg-kcire-2 rounded-full">Branding forte.</h3>
          <h3>Resultado bruto!</h3>
        </div>
        <h1 className="text-40 font-bold">
          Seu design é a primeira impressão. <br />A gente faz ele ser{' '}
          <span className="gradient-detail">inesquecível.</span>
        </h1>
        <p className="text-28 font-bold">
          Identidade visual consistente e branding vibrante
          <br /> que converte <span className="text-kcire-3">curiosos em clientes.</span>
        </p>
      </div>
      <Link href="#services" className="text-24 kcire-btn-1 font-bold">
        CONHEÇA NOSSOS SERVIÇOS <Arrow className="w-[15px] h-[15px] text-kcire-1" />
      </Link>
      <Players />
    </div>
  )
}
