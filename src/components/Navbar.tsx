import Link from 'next/link'

import { KcireIcon } from './icons/KcireIcon'
export function Navbar() {
  return (
    <nav className="navbar ">
      <>
        <KcireIcon className="mx-12" />
        <ul className="lg:flex hidden space-x-6 text-18 text-kcire-3">
          <li>
            <Link href="#about" className="">
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link href="#services" className="">
              Serviços
            </Link>
          </li>
          <li>
            <Link href="#depoiments" className="">
              Depoimentos
            </Link>
          </li>
        </ul>
        <Link href="#contact" className="text-24 kcire-btn-2 ">
          <span className="text-18 text-kcire-3">CONTATO</span>
        </Link>
      </>
    </nav>
  )
}
