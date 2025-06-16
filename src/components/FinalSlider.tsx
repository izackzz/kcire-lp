'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

export const FinalSlider = () => {
  return (
    <div className="w-full min-w-0 !overflow-visible">
      <Swiper
        slidesPerView={1}
        centeredSlides
        loop={false}
        spaceBetween={40}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="min-w-0 !overflow-visible"
      >
        <SwiperSlide>
          <div className="card-project w-fit ">
            <h3 className="sm:text-36 text-28 text-kcire-w">
              Social Media de
              <br />
              alta conversão
            </h3>
            <Image
              src="/images/works-01.png"
              alt="Slide 1"
              width={600}
              height={380}
              className="final-card-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-project w-fit ">
            <h3 className="sm:text-36 text-28 text-kcire-w">
              Páginas de venda que
              <br />
              vendem sozinhas
            </h3>
            <Image
              src="/images/works-02.png"
              alt="Slide 2"
              width={600}
              height={380}
              className="final-card-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-project w-fit ">
            <h3 className="sm:text-36 text-28 text-kcire-w">
              Lojas e Mascotes de
              <br />
              Branding disruptivo
            </h3>
            <Image
              src="/images/works-03.png"
              alt="Slide 3"
              width={600}
              height={380}
              className="final-card-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
