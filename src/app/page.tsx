import Link from 'next/link'

import { Arrow } from '@/components/icons/Arrow'
import Players from '@/components/Players'
import { MarqueeAnimation } from '@/components/ui/marquee-effect'

export default function Home() {
  return (
    <>
      {/* SESSION #1 */}
      <div className="w-100vw pt-52 pb-28 gap-12 flex flex-col text-18 items-center text-center  text-kcire-w kcire-gradient bg-center bg-cover justify-center">
        <div className="gap-10 w-100vw itens-center flex-col flex items-center">
          <div className="badge w-fit">
            <h3 className="py-2.5 px-5 bg-kcire-2 rounded-full">Branding forte.</h3>
            <h3>Resultado bruto!</h3>
          </div>
          <h1 className="text-40 font-bold">
            Seu design é a primeira impressão. <br></br>A gente faz ele ser{' '}
            <span className="gradient-detail">inesquecível.</span>
          </h1>
          <p className="text-28 font-bold">
            Identidade visual consistente e branding vibrante<br></br> que converte{' '}
            <span className="text-kcire-3">curiosos em clientes.</span>
          </p>
        </div>
        <Link href="#services" className="text-24 kcire-btn-1 font-bold">
          CONHEÇA NOSSOS SERVIÇOS <Arrow className="w-[15px] h-[15px] text-kcire-1" />
        </Link>
        <Players />

        <MarqueeAnimation direction="right" baseVelocity={-1} className="marquee">
          <div className="flex flex-row ">
            <p className="text-36 opacity-50 mr-5 -my-3 font-bold text-kcire-1">•</p>
            <p className="text-18 mx-5 font-bold text-kcire-2">TORNE-SE REFERÊNCIA</p>
            <p className="text-40 opacity-50 mx-5 -my-3 font-bold text-kcire-1">•</p>
            <p className="text-18 ml-5 font-bold text-kcire-1">O FUTURO CHEGOU</p>
          </div>
        </MarqueeAnimation>
      </div>
    </>
  )
}
