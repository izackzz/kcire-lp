// components/Carousel.tsx
'use client'

import React, { FC, ReactNode } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

interface CarouselProps {
  children: ReactNode
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const slides = React.Children.toArray(children)
  return (
    <div className="overflow-visible w-full py-4">
      <Swiper
        slidesPerView="auto" // largura definida pelo conteúdo
        centeredSlides // slide ativo sempre no centro
        spaceBetween={30} // gap máximo de 30px
        grabCursor // cursor “pega” o slide
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="flex-shrink-0">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
