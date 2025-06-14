import Image from 'next/image'

interface ProjectCardProps {
  pr1: string
  pr2: string
  title: string
  image: string
}

export function ProjectCard({ pr1, pr2, title, image }: ProjectCardProps) {
  return (
    <div className="project-card gap-2 px-16 pt-16 justify-between max-h-[440px] flex flex-row overflow-hidden">
      <div className="flex flex-col w-fit gap-4 pb-16 text-left">
        <p className="shadow-detail px-6 py-5 w-fit bg-kcire-4/5 whitespace-nowrap rounded-[10px] border-[3px] text-20 font-bold border-kcire-3/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr1}
        </p>
        <p className="shadow-detail px-[30px] py-5 w-fit bg-kcire-4/5 rounded-[10px] whitespace-nowrap border-[3px] text-20 font-bold border-[#99FFCC]/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr2}
        </p>
        <h3 className="project-title pt-6 text-52">{title}</h3>
      </div>
      <div className="max-h-[440px] min-w-[500px] max-w-[500px]">
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
