import Link from 'next/link'

import { Arrow } from '@/components/icons/Arrow'
import { KcirePlus } from '@/components/icons/KcirePlus'
import Players from '@/components/Players'
import { MarqueeAnimation } from '@/components/ui/marquee-effect'

export default function Home() {
  return (
    <main className="">
      {/* SESSION #1 */}
      <div className="w-100vw kcire-gradient-2 overflow-hidden pb-28 gap-12 flex flex-col text-18 items-center text-center  text-kcire-w bg-center min-h-[800px] h-[80vh] bg-cover justify-center">
        <div className="!fixed top-0 lg:min-w-[750px] left-1/2 -translate-x-2/4 z-0 pt-46 flex flex-col gap-12">
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

        <div className="w-full p-16 px-16 lg:px-46 -translate-x-4 flex flex-col lg:flex-row justify-between">
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

      <div className="min-h-[50vh] items-center bg-kcire-4 container flex flex-col p-5 mx-auto gap-20 text-center font-bold text-kcire-w">
        <div className="lamp"></div>
        <h2 className="text-52">
          Apenas alguns de nossos <br /> cases de sucesso
        </h2>
        <div className=" px-[35px] py-2.5 bg-[#f399ff]/5 rounded-[7px] outline-2 outline-white/20 inline-flex gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="-mb-1"
          >
            <path
              d="M15.4361 3.32443L12.9893 5.64869M4.54784 8.09509L1 7.11646M5.64907 12.9883L3.32462 15.4349M7.11696 1L8.09567 4.54754M9.36428 10.1624C9.31684 10.0507 9.30387 9.92729 9.32703 9.80812C9.3502 9.68895 9.40844 9.57943 9.49429 9.49359C9.58013 9.40775 9.68967 9.34951 9.80885 9.32635C9.92802 9.30318 10.0514 9.31615 10.1632 9.36359L23.6205 14.8684C23.7402 14.9175 23.8413 15.0034 23.9092 15.1136C23.9771 15.2239 24.0082 15.3528 23.9981 15.4818C23.9881 15.6109 23.9373 15.7334 23.8532 15.8318C23.7691 15.9302 23.6559 15.9993 23.5299 16.0293L18.2094 17.3027C17.9898 17.3552 17.7889 17.4674 17.6291 17.627C17.4694 17.7865 17.3569 17.9872 17.3041 18.2068L16.0318 23.5281C16.0021 23.6544 15.933 23.7681 15.8345 23.8526C15.736 23.9371 15.6132 23.9881 15.4837 23.9982C15.3543 24.0082 15.2251 23.9769 15.1147 23.9087C15.0043 23.8404 14.9184 23.7388 14.8695 23.6186L9.36428 10.1624Z"
              stroke="#99FFCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="pt-1 pr-2">clique para ver</p>
        </div>
      </div>
    </main>
  )
}
