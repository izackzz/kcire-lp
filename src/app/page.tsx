import { HeroComponent } from '@/components/HeroComponent'
import { KcireIcon } from '@/components/icons/KcireIcon'
import { KcirePlus } from '@/components/icons/KcirePlus'
import Lamp from '@/components/Lamp'
import { ProjectCard } from '@/components/ProjectCard'
import RocketLottie from '@/components/RocketLottie'
import SplitText from '@/components/SplitText'
import { MarqueeAnimation } from '@/components/ui/marquee-effect'

export default function Home() {
  return (
    <main className="mx-auto">
      {/* SESSION #1 */}
      <div className="w-100vw kcire-gradient-2 overflow-hidden pb-28 gap-12 flex flex-col text-18 items-center text-center  text-kcire-w bg-center min-h-[800px] h-[80vh] bg-cover justify-center">
        <HeroComponent />
      </div>

      {/* SESSION #2 */}

      <div className="min-h-[50vh] hero-hidden shine text-kcire-w text-28 kcire-gradient-2 gap-12 pb-20 justify-center">
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

      <div className="min-h-[50vh] shine items-center bg-kcire-4 container flex flex-col p-5 mx-auto gap-10 text-center font-bold text-kcire-w">
        {/* <div className="lamp"></div> */}
        <Lamp />
        <h2 className="text-52 w-[700px] heading pt-20">
          Apenas alguns de nossos cases de sucesso
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

        {/* cards dos cases de sucesso */}

        <div className="w-full max-w-[1140px] gap-8 flex flex-col">
          <ProjectCard
            pr1="SITE INSTITUCIONAL"
            pr2="+6D Gerados"
            title="Projeto Hydra"
            image="/images/project-01.png"
          />
          <ProjectCard
            pr1="LOJA LATAM"
            pr2="+6D Gerados"
            title="Projeto Alpha Center"
            image="/images/project-02.png"
          />
          <ProjectCard
            pr1="LANDING PAGE"
            pr2="+5D Gerados"
            title="Projeto Midnight Society"
            image="/images/project-03.png"
          />
          <ProjectCard
            pr1="LOJA NACIONAL"
            pr2="+6D Gerados"
            title="Projeto Koala"
            image="/images/project-04.png"
          />
        </div>
        <div className=" px-[35px] py-2.5 bg-[#f399ff]/5 rounded-[7px] outline-2 outline-white/20 inline-flex gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
          >
            <path
              d="M18.825 6.675H18.8365M6.75 1.5H18.25C21.4256 1.5 24 4.07436 24 7.25V18.75C24 21.9256 21.4256 24.5 18.25 24.5H6.75C3.57436 24.5 1 21.9256 1 18.75V7.25C1 4.07436 3.57436 1.5 6.75 1.5ZM17.1 12.2755C17.2419 13.2326 17.0784 14.21 16.6328 15.0689C16.1872 15.9277 15.4821 16.6241 14.6179 17.0591C13.7536 17.4941 12.7742 17.6455 11.819 17.4918C10.8637 17.3381 9.98122 16.8871 9.29706 16.2029C8.6129 15.5188 8.16189 14.6363 8.00818 13.681C7.85446 12.7258 8.00587 11.7464 8.44088 10.8821C8.87588 10.0179 9.57231 9.3128 10.4311 8.86718C11.29 8.42155 12.2674 8.25808 13.2245 8.4C14.2008 8.54477 15.1046 8.99968 15.8024 9.69755C16.5003 10.3954 16.9552 11.2992 17.1 12.2755Z"
              stroke="#99FFCC"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="pt-0.5 pr-2">São dezenas, você verá mais em nosso instagram</p>
        </div>
      </div>

      {/* SESSION #4 */}
      <div className="min-h-[50vh]  outline-amber-300 outline shine items-center bg-kcire-4 container flex flex-col p-5 pt-30 mx-auto gap-30 text-center font-bold text-kcire-w">
        <Lamp />
        <h2 className="text-52 max-w-[450px] heading pt-20">O que dizem nossos clientes</h2>
      </div>

      {/* SESSION #5 */}
      <div className=" w-full text-kcire-3 text-52 font-bold h-[120vh] items-center justify-start text-3 flex flex-col gap-10 p-30 pt-0 ">
        <SplitText>Pare de perder tempo com o que não funciona.</SplitText>
      </div>

      <div className=" w-full text-kcire-3 text-52 font-bold h-[120vh] items-center justify-start text-3 flex flex-col gap-10 p-30 pt-0 ">
        <SplitText>Na Kcire, o impacto é</SplitText>
      </div>

      <div className=" w-full text-kcire-3 text-68 font-bold h-[120vh] items-center justify-start text-3 flex flex-col gap-10 p-30 pt-0 ">
        <SplitText>imediato.</SplitText>
      </div>
      <div className=" w-full text-kcire-3 text-68 font-bold h-[100vh] -mt-80 items-center justify-start text-3 flex flex-col gap-10 p-30 pt-0 ">
        <SplitText>
          <RocketLottie />
        </SplitText>
      </div>

      {/* SESSION #6 */}
      <div className="shine items-center bg-kcire-4 container flex flex-col p-5 pt-30 mx-auto gap-30 text-center font-bold text-kcire-w">
        <Lamp />
        <h2 className="text-68 heading pt-10">O PLANO</h2>
        {/* CARDS */}
        <div className="w-fit flex justify-start flex-row">
          <div className="card-plans flex-col flex items-start justify-center z-[1] -ml-5 hover:mr-10 mr-0 hover:-ml-0 origin-bottom-right hover:rotate-6 -rotate-1 transition-all duration-300">
            <span className="card-number">1</span>
            <h3 className="heading text-left text-36">Diagnóstico de Oportunidades</h3>
            <p className="text-kcire-3 text-18 font-normal text-left">
              Escutamos metas, analisamos dados e revelamos o ponto exato que vai destravar suas
              vendas.
            </p>
            <div className="card-detail"></div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="card-plans flex-col flex items-start justify-center z-[2] -ml-5 hover:mr-10 mr-0 hover:-ml-0 origin-bottom-right hover:rotate-6 -rotate-1 transition-all duration-300">
            <span className="card-number">2</span>
            <h3 className="heading text-left text-36">Criação Orientada a Meta</h3>
            <p className="text-kcire-3 text-18 font-normal text-left">
              Designers, devs e copywriters entram em ação, unindo visual forte e funil claro para
              gerar conversão real.
            </p>
            <div className="card-detail"></div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="card-plans flex-col flex items-start justify-center z-[3] -ml-5 hover:mr-10 mr-0 hover:-ml-0 origin-bottom-right hover:rotate-6 -rotate-1 transition-all duration-300">
            <span className="card-number">3</span>
            <h3 className="heading text-left text-36">Lançamento & Crescimento</h3>
            <p className="text-kcire-3 text-18 font-normal text-left">
              Publicamos, monitoramos métricas e otimizamos continuamente para escalar resultados
              sem estagnar
            </p>
            <div className="card-detail"></div>
          </div>
        </div>

        <div className="info-card mx-40 flex flex-row items-center gap-10 justify-between">
          <div className="detail-lamp"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="78"
            viewBox="0 0 69 78"
            fill="none"
            className="min-w-[80px]"
          >
            <path
              d="M27.1058 38.3459C27.0998 36.3495 27.082 1.02413 27.0879 0.743203C27.0879 0.734027 27.0868 0.7233 27.0858 0.71342C27.0841 0.697619 27.0827 0.683927 27.0864 0.682293C27.1099 0.672075 27.3357 1.13062 28.9735 4.45638L30.3323 7.21672C31.792 10.1822 31.9991 10.6032 32.1261 10.8387C32.37 11.2751 34.1664 14.9929 34.1664 15.0467C34.1664 15.0826 34.1902 15.1125 34.214 15.1125C34.2437 15.1125 34.327 15.2499 34.327 15.2499C34.327 15.2499 56.8544 28.2517 62.2066 31.1852C63.1643 31.7232 64.3361 32.5719 65.0023 33.2175C66.2693 34.4488 67.3757 36.2001 67.8515 37.7363C67.981 38.1494 68.0253 38.316 68.171 38.8653L68.1965 38.9616C68.2917 39.3441 68.5058 41.0357 68.4999 41.4122C68.4939 42.0279 68.2501 43.8091 68.1132 44.2514C68.0597 44.4128 67.9705 44.7117 67.9169 44.9089C67.792 45.3393 67.4827 46.0924 67.2269 46.5826C67.0426 46.9352 66.3525 48.047 66.2871 48.1067C66.2633 48.1247 66.1563 48.2681 66.0492 48.4355C65.6685 48.9914 64.3718 50.2346 63.7294 50.653C63.5807 50.7487 63.4498 50.8383 63.4319 50.8563C61.5165 52.7806 49.2869 58.8658 49.2869 58.8658C49.2869 58.8658 48.5374 58.1963 47.7106 57.3774C46.8838 56.5585 46.1462 55.8293 46.063 55.7576C45.9797 55.6918 44.8495 54.5801 43.5409 53.289C42.7276 52.483 41.664 51.4347 40.7204 50.5048C40.1527 49.9452 39.6284 49.4284 39.2284 49.0332C38.1636 47.9752 37.0632 46.8993 36.7896 46.6423C36.0282 45.9191 35.594 45.4708 35.594 45.3991C35.594 45.3632 36.0579 44.8731 36.629 44.3172C37.0246 43.9238 37.9393 43.0206 38.9381 42.0343L40.2336 40.7548C41.6493 39.3561 42.8925 38.1248 42.9936 38.0112C43.1721 37.814 43.2613 37.7303 43.5647 37.4673C43.642 37.3956 44.8079 36.2479 46.1522 34.909C47.4965 33.5701 49.043 32.04 49.5903 31.508C50.4944 30.6234 50.7086 30.3544 50.5123 30.3544C50.4766 30.3544 50.3993 30.3185 50.3517 30.2707C50.2981 30.2289 50.1078 30.1093 49.9293 30.0137C47.8629 28.8511 44.6557 27.5703 42.8152 25.985C42.7736 25.9492 42.6843 25.9312 42.613 25.9432C42.5475 25.9551 41.8992 26.5409 41.1675 27.2582C40.4418 27.9695 39.5139 28.878 39.1035 29.2785C38.9014 29.4757 38.5883 29.783 38.2436 30.1212L38.2414 30.1234C37.8867 30.4715 37.4988 30.8522 37.1643 31.1792C35.5642 32.7632 31.2517 36.9951 30.187 38.0351C29.8424 38.3684 29.295 38.9086 28.7956 39.4015C28.6054 39.5892 28.4222 39.77 28.2597 39.9299C27.6768 40.5157 27.1772 40.9938 27.1593 40.9938C27.1355 40.9938 27.1117 39.8044 27.1058 38.3459Z"
              fill="#E6E6E6"
            />
            <path
              d="M10.9666 4.6824C9.53897 4.85574 8.33742 5.19645 7.15966 5.77624C5.63095 6.52339 4.45914 7.414 3.38845 8.63335C2.83526 9.26694 2.75793 9.36257 2.75793 9.4343C2.75793 9.46419 2.72224 9.512 2.67466 9.53591C2.63302 9.55982 2.47836 9.76902 2.34155 10.0021C2.20474 10.2293 2.06793 10.4265 2.03819 10.4385C2.00845 10.4504 1.98465 10.4863 1.98465 10.5222C1.98465 10.6118 1.49095 11.61 1.43741 11.6339C1.40767 11.6459 1.38983 11.7056 1.38983 11.7654C1.38983 11.8312 1.34819 11.9806 1.29465 12.1061C1.19353 12.3333 1.17569 12.3811 1.03888 12.7815C0.908015 13.1462 0.771205 13.8455 0.604653 14.9333C0.585081 15.075 0.560358 15.9361 0.542348 17.1013L0.5 17.0236L0.5 65.3134C0.5 74.705 10.518 80.6606 18.7095 76.1386C23.3341 73.5857 33.2438 68.011 33.2438 68.011C33.2438 68.011 34.9867 67.0248 35.3852 66.8275C35.7124 66.6661 35.8194 66.6363 35.9027 66.6901C35.9622 66.7259 36.0455 66.7558 36.0871 66.7558C36.1585 66.7558 37.5742 67.2698 38.0619 67.4731C38.3534 67.5926 39.0077 67.8377 39.6085 68.0409C39.775 68.1007 39.9892 68.1844 40.0963 68.2262C40.1974 68.274 40.3104 68.3099 40.3461 68.3099C40.4056 68.3099 40.8398 68.4892 41.0658 68.6087C41.1194 68.6326 41.2443 68.6745 41.3513 68.6924C41.4525 68.7163 41.5536 68.7642 41.5714 68.794C41.5952 68.8239 41.6606 68.8478 41.7201 68.8478C41.7856 68.8478 41.9343 68.8897 42.0592 68.9435C42.3685 69.0809 42.4756 69.1228 42.8206 69.2363C42.9871 69.2961 43.225 69.3858 43.3559 69.4456C43.4868 69.5053 43.6593 69.5711 43.7425 69.589C43.8258 69.6129 43.9448 69.6548 44.0102 69.6846C44.0757 69.7145 44.2482 69.7803 44.3969 69.8281C44.5456 69.8759 44.7835 69.9656 44.9322 70.0313C45.0809 70.0911 45.4557 70.2286 45.765 70.3362C46.0743 70.4438 46.3955 70.5573 46.4788 70.5932C46.7048 70.6888 46.8297 70.7366 47.252 70.8801C47.5851 70.9996 48.2514 71.2567 48.6499 71.418C48.87 71.5077 49.2745 71.6571 49.3042 71.6571C49.3339 71.6571 49.0841 71.4061 45.8482 68.2202C44.6467 67.0367 43.1775 65.5843 42.5826 64.9925C41.9878 64.4008 41.2859 63.7194 41.0301 63.4743C39.781 62.2908 37.2292 59.7804 33.1249 55.7099C31.4356 54.0303 29.2763 51.9203 29.1693 51.8366C29.0979 51.7769 28.9194 51.9323 28.2056 52.6436C27.7298 53.1218 27.3015 53.582 27.2599 53.6657C27.2004 53.7792 27.1885 54.6459 27.1944 57.521C27.1944 59.5592 27.2182 61.4062 27.2361 61.6273C27.2658 61.9083 27.2599 62.0338 27.2123 62.0338C27.1766 62.0338 27.1468 62.0697 27.1468 62.1055C27.1468 62.6864 19.3297 66.6264 18.0556 67.3835L18.0556 50.3061C18.0654 45.8382 18.0688 39.4859 18.0688 30.51L18.0748 6.13487L17.6881 5.93762C16.9148 5.54313 16.2427 5.26219 15.7549 5.1307C15.7071 5.11568 15.623 5.09306 15.5281 5.06752C15.434 5.04222 15.3291 5.01399 15.2374 4.98724C13.9942 4.64654 12.299 4.527 10.9666 4.6824Z"
              fill="#E6E6E6"
            />
          </svg>
          <p className="text-kcire-w text-22 font-normal text-left ">
            <b>A Kcire é a engrenagem</b> que conecta <b>estratégia</b>, <b>design</b> e{' '}
            <b>inovação</b> num fluxo contínuo de resultados. Ao final do processo, você recebe um
            ecossistema digital pronto para crescer: identidade visual consistente, layout que
            prende o olhar e estrutura escalável sustentada por dados reais.
          </p>
        </div>
      </div>

      <div className="items-center bg-kcire-4 container flex flex-col p-5 pt-30 mx-auto gap-30 text-center font-bold text-kcire-w">
        <div className="info-card p-30 mx-40 flex flex-col items-center gap-10 justify-between">
          <div className="flex flex-row items-center gap-10 justify-between">
            <KcireIcon className="w-[300px]" />

            <p className="text-kcire-w text-22 w-[400px] font-normal text-left ">
              <b>Conheça nossos serviços</b> <br /> Cada Projeto conta uma história... Deixe que
              façamos o mundo conhecer a história de sua empresa
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
