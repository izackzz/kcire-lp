// components/RocketLottie.tsx
'use client'
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'

// por quê: carrega Lottie apenas no cliente
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const RocketLottie: React.FC = () => {
  const [animationData, setAnimationData] = useState<any>(null)

  useEffect(() => {
    // por quê: fetch do JSON sem export default
    fetch('/anm/rocket.json')
      .then(res => res.json())
      .then(setAnimationData)
      .catch(console.error)
  }, [])

  if (!animationData) return null // evita render SSR
  return <Lottie animationData={animationData} loop autoplay style={{ width: 200, height: 200 }} />
}

export default RocketLottie
