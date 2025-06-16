'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

export const TestimonialSlider = () => {
  return (
    <div className="w-full min-w-0 !overflow-visible">
      <Swiper
        slidesPerView={1.5}
        centeredSlides
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="min-w-0 !overflow-visible"
      >
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/jesus.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">@agenciakcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  infoprodutor
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/joao.png"
              alt="Slide 1"
              width={300}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
