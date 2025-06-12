import Link from 'next/link'

import { Arrow } from '@/components/icons/Arrow'
import { KcirePlus } from '@/components/icons/KcirePlus'
import Players from '@/components/Players'
import { MarqueeAnimation } from '@/components/ui/marquee-effect'

export default function Home() {
  return (
    <main>
      {/* SESSION #1 */}

      <div className="w-100vw !overflow-hidden pb-28 gap-12 flex flex-col text-18 items-center text-center  text-kcire-w kcire-gradient bg-center min-h-[800px] h-[80vh] bg-cover justify-center">
        <div className="!fixed top-0 lg:min-w-[750px] left-1/2 -translate-x-2/4 z-0 pt-46 flex flex-col gap-12">
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
        </div>
      </div>

      {/* SESSION #2 */}

      <div className="min-h-[50vh] shine text-kcire-w text-28 kcire-gradient-2 gap-12 pb-20 justify-center">
        <MarqueeAnimation direction="right" baseVelocity={-1} className="marquee">
          <div className="flex flex-row ">
            <p className="text-36 opacity-50 mr-5 -my-3 font-bold text-kcire-1">•</p>
            <p className="text-18 mx-5 font-bold text-kcire-2">TORNE-SE REFERÊNCIA</p>
            <p className="text-40 opacity-50 mx-5 -my-3 font-bold text-kcire-1">•</p>
            <p className="text-18 ml-5 font-bold text-kcire-1">O FUTURO CHEGOU</p>
          </div>
        </MarqueeAnimation>
        <KcirePlus className="mx-auto my-20 mb-[-450px]" />

        {/*  */}

        <div className="w-full p-16 px-50 -translate-x-4 flex flex-row justify-between">
          <div className="flex flex-col my-auto gap-7 max-w-[430px]">
            <div className="card-s2">
              A Kcire te faz referência no seu nicho, seja qual for, pois vamos{' '}
              <span className="text-kcire-3 font-bold">além do comum.</span>
            </div>
            <div className="card-s2">
              Quebramos padrões, e desenvolvemos seu Branding como ninguém...
            </div>
          </div>

          {/*  */}

          <div className="flex flex-col gap-7 max-w-[295px]">
            <div className="dot-timeline gap-0 card-s2 outline-1 justify-center items-center flex flex-col outline-offset-8 outline-kcire-2">
              um design que <span className=" text-kcire-3 -mt-2 font-bold text-48">provoca</span>
            </div>
            <div className="dot-timeline gap-2 card-s2 outline-1 justify-center items-center flex flex-row outline-offset-8 outline-kcire-2">
              que <span className=" text-[#9FC] font-bold text-48">vende</span>
            </div>
            <div className="dot-timeline gap-2 card-s2 outline-1 justify-center items-center flex flex-row outline-offset-8 outline-kcire-2">
              que dá <span className=" text-[#9FC] font-bold text-48">ROI!</span>
            </div>
          </div>
        </div>

        {/*  */}
      </div>

      {/* SESSION #3 */}

      <div className="min-h-[50vh]"></div>
    </main>
  )
}
