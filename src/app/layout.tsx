import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Navbar } from '@/components/Navbar'
import { LenisProvider } from '@/providers/LenisProvider'
import './globals.css'

/* carrega todos os pesos necessários e expõe a CSS var --font-mont */
const mont = localFont({
  variable: '--font-mont',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Mont-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Mont-Bold.woff2', weight: '700', style: 'normal' },
  ],
})

export const metadata: Metadata = {
  title: 'Agência Kcire | Design, Lojas Virtuais e Landing Pages que Convertem',
  description:
    'Agência Kcire cria sites, lojas virtuais e landing pages que convertem. Design impactante, branding consistente e estratégias de venda para escalar seu negócio de maneira eficiente',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={mont.variable}>
      <body className="antialiased overflow-x-hidden">
        <Navbar></Navbar>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
