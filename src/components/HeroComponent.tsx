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
      className="!fixed top-0 lg:w-[750px] max-sm:w-full max-sm:px-10 left-1/2 -translate-x-2/4 z-0 pt-46 flex flex-col gap-12"
    >
      <div className="gap-10 w-100vw flex-col flex items-center">
        <div className="badge w-fit text-16">
          <h3 className="py-2.5 px-5 bg-kcire-2 rounded-full">Branding forte.</h3>
          <h3>Resultado bruto!</h3>
        </div>
        <h1 className="text-36 sm:text-center  sm:text-40 font-bold">
          Seu design é a primeira impressão. <br />A gente faz ele ser{' '}
          <span className="gradient-detail">inesquecível.</span>
        </h1>
        <p className="sm:text-28 text-24 font-bold">
          Identidade visual consistente e branding vibrante que converte{' '}
          <span className="text-kcire-3">curiosos em clientes.</span>
        </p>
      </div>
      <Link
        href="#services"
        className="sm:text-24 text-20 sm:px-[70px] px-10 sm:pt-[28px] sm:pb-[25px] max-sm:py-4 kcire-btn-1 font-bold"
      >
        CONHEÇA NOSSOS SERVIÇOS <Arrow className="w-[15px] h-[15px] text-kcire-1" />
      </Link>
      <Players />
    </div>
  )
}
