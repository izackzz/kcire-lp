import Image from 'next/image'

interface ProjectCardProps {
  pr1: string
  pr2: string
  title: string
  image: string
}

export function ProjectCard({ pr1, pr2, title, image }: ProjectCardProps) {
  return (
    <div className="project-card gap-2 sm:px-16 max-sm:px-6 max-sm:pt-6 sm:pt-16 justify-between max-h-[440px] flex flex-row overflow-hidden">
      <div className="flex flex-col !z-10 w-fit gap-4 pb-16 text-left">
        <p className="shadow-detail px-5 py-4 w-fit bg-kcire-4/5 whitespace-nowrap rounded-[10px] border-[3px] text-20 font-bold border-kcire-3/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr1}
        </p>
        <p className="shadow-detail px-5 py-4 w-fit bg-kcire-4/5 rounded-[10px] whitespace-nowrap border-[3px] text-20 font-bold border-[#99FFCC]/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr2}
        </p>
        <h3 className="project-title max-md:text-20 pt-6 text-52">{title}</h3>
      </div>
      <div className="max-h-[440px] hover:-translate-y-[18rem] transition-all duration-[2000ms] max-sm:min-w-full sm:min-w-[500px] z-0 max-sm:-ml-10 max-sm:mt-10 max-w-[500px]">
        <Image
          src={image}
          alt={title}
          width={600}
          height={440}
          style={{ objectFit: 'contain' }} // mantém proporção dentro do container
        />
      </div>
    </div>
  )
}
