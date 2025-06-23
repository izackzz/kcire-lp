import Image from 'next/image'
export default function Players() {
  return (
    <div className="flex flex-row gap-6 items-center justify-center ">
      <div className="flex flex-row ">
        <Image
          src="/images/player-1.png"
          alt="Player"
          width={70}
          height={70}
          className="-ml-5 player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        />
        <Image
          src="/images/player-2.png"
          alt="Player"
          width={70}
          height={70}
          className="-ml-5 player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        />
        <Image
          src="/images/player-3.png"
          alt="Player"
          width={70}
          height={70}
          className="-ml-5 player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        />
        <Image
          src="/images/player-4.png"
          alt="Player"
          width={70}
          height={70}
          className="-ml-5 player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        />
        <Image
          src="/images/player-5.png"
          alt="Player"
          width={70}
          height={70}
          className="-ml-5 player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        />
      </div>

      <p className="text-left">
        Confiado pelos<br></br>maiores players
      </p>
      {/* Render player components here */}
    </div>
  )
}
