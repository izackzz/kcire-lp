import Image from 'next/image'

interface ProjectCardProps {
  pr1: string
  pr2: string
  title: string
  image: string
}

export function ProjectCard({ pr1, pr2, title, image }: ProjectCardProps) {
  return (
    <div className="project-card gap-2 sm:px-16 max-sm:px-6 max-sm:pt-6 sm:pt-16 justify-between max-h-[440px] max-md:h-[380px] flex flex-row overflow-hidden">
      <div className="flex flex-col max-md:justify-end !z-10 w-fit gap-4 max-md:pb-8 pb-16 text-left">
        <p className="shadow-detail px-5 py-4 w-fit bg-kcire-4/60 whitespace-nowrap rounded-[10px] border-[3px] text-20 font-bold border-kcire-3/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr1}
        </p>
        <p className="shadow-detail px-5 py-4 w-fit bg-kcire-4/60 rounded-[10px] whitespace-nowrap border-[3px] text-20 font-bold border-[#99FFCC]/50 backdrop-blur inline-flex items-center gap-2.5">
          {pr2}
        </p>
        <h3 className="project-title max-md:text-24 max-md:pt-2 pt-6 text-52">{title}</h3>
      </div>
      <div className="max-md:absolute md:hidden top-0 left-0 !w-full !h-full bg-gradient-to-b from-transparent to-kcire-4/5"></div>
      <div className="max-h-[440px] hover:-translate-y-[18rem] transition-all duration-[2000ms] md:min-w-[500px] z-0 max-md:-ml-10 max-md:mt-5 max-md:-right-10 max-md:!absolute max-md:!w-[300px] max-w-[500px]">
        <Image src={image} alt={title} width={600} height={440} style={{ objectFit: 'contain' }} />
      </div>
    </div>
  )
}
