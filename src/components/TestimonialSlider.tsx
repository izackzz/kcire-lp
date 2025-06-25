'use client'
import 'swiper/css'
import 'swiper/css/pagination'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

export const TestimonialSlider = () => {
  return (
    <div className="w-full min-w-0 !overflow-visible">
      <Swiper
        slidesPerView={2}
        centeredSlides
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="min-w-0 !overflow-visible"
      >
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/person.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">João | Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <iframe
              className="testimonial-img aspect-[9/16] h-[465px] w-[300px]"
              src="
              https://www.youtube.com/embed/0-ydYhSl2ys?feature=shorts
              &controls=0
              &autoplay=1
              &loop=1
              &rel=0
              &modestbranding=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* <Image
              src="/images/testimonials/dp-0.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            /> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/person.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-01.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/player-2.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-02.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/person.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-03.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/person.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-04.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/person.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-05.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/player-1.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-06.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/player-4.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Tiago | Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-07.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/player-3.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Gustavo | Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-08.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="testimonial-card flex flex-col gap-3 w-fit ">
            <div className="w-full flex p-3 flex-row gap-5 justify-start items-start">
              <Image
                src="/images/player-5.png"
                alt="Player"
                width={60}
                height={60}
                className="player rounded-full object-cover hover:-translate-y-1 transition-transform duration-300 ease-in-out"
              />
              <div className="flex flex-col gap-1 my-auto font-normal pt-1 text-kcire-3 text-left">
                <p className="text-14">Marcos | Cliente Kcire</p>
                <p className="text-14 py-[1px] px-2 border border-kcire-3/20 rounded-[3px]">
                  Dropshipper
                </p>
              </div>
            </div>
            <Image
              src="/images/testimonials/dp-09.png"
              alt="Slide 1"
              width={450}
              height={700}
              className="testimonial-img"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
