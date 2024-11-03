"use client"

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoLocation } from "react-icons/io5";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { FaWhatsapp } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
export default function HeroSlider() {
  // let [cross, setCross] = useState(false)
  // let close=()=>{
  //   setCross(true)
  // }
  return (
    <>
      <div className='relative'>
        <Swiper
          scrollbar={{ hide: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='w-[100vw] h-[100vh] grid lg:grid-cols-2 grid-cols-1 items-center lg:ps-[70px] ps-3 text-white lg:pt-0 pt-[150px]'>
              <div>
                <h2 className='font-Forum text-[40px] mb-[10px] text-center lg:text-left lg:mb-[20px]'>Beauty Salon of Jodhpur</h2>
                <p className='lg:mb-[50px] mb-[30px] md:text-[16px] lg:text-left text-center text-[14px]'>
                  At Vanikka&apos;s, we believe in the harmony of beauty and excellence.
                  Our mission is to provide top-notch beauty services using the
                  finest premium products. We strive to create an oasis of
                  serenity where you can relax, rejuvenate, and leave looking and
                  feeling your best.
                </p>
                <div className='flex gap-2 lg:justify-start justify-center'>
                  <button className='bg-white text-primary text-[16px] lg:px-4 px-2 lg:py-2 py-1 rounded-lg'>
                    Book Appointment
                  </button>
                  <button className='text-[16px] lg:px-4 px-2 lg:py-2 py-1 rounded-lg border flex items-center gap-2 hover:shadow'>
                    Salon Locator <IoLocation className='text-[16px]' />
                  </button>
                </div>
              </div>
              <div className='ps-[40px] md:ps-0'>
                <Image 
                  src="/assets/banner_girl.png" 
                  alt="A woman at the salon" // Provide descriptive alt text
                  width={600} // Set appropriate width
                  height={400} // Set appropriate height
                  className='w-[100%] h-auto' // Use responsive width
                />
              </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-[100%] h-[100vh] md:bg-banner-2 bg-banner-m-2 bg-no-repeat bg-cover '></div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='relative h-[200px]'>
        <div className='bg-white rounded-[80px_80px_0_0] lg:py-12 py-6 lg:px-[200px] absolute top-[80px] w-[100%] -translate-y-[60%] z-[10] grid lg:grid-cols-2 grid-cols-1'>
          <div className=''></div>
          <div className='lg:text-right text-center text-primary'>
            <h4 className='text-[40px] font-Forum '>Why Choose Us?</h4>
            <p className='lg:text-[16px] text-[14px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of
              over two decades of expertise in the beauty industry. Our
              personalized services are tailored to meet your unique needs
              and preferences, ensuring that you receive the care and
              attention you deserve. We are committed not to compromise
              quality, using only the highest quality premium products to
              provide exceptional care.
            </p>
          </div>
        </div>
        <div className=' fixed right-[20] bottom-[20] flex flex-col items-end z-[999999]'>

          {/* we will use this feature in future */}

          {/* <div className=' h-[50px] mb-[10px] flex items-center gap-2'>
            <div className={cross?"hidden":`text-[12px] py-[8px] px-[16px] shadow-[2px_3px_0_#00e785] text-nowrap text-[#202020] border-[#363636] border-[1px] rounded-[24px] leading-[150%] font-medium bg-white`}>Book your Appointment</div>
            <RxCrossCircled className={cross?"hidden":'bg-white rounded-full cursor-pointer'} onClick={()=>close()}/>
          </div> */}
          <div className='w-[52px] h-[52px] rounded-full bg-[#00e785] shadow-[4px_5px_10px_rgba(0,0,0,0.4)] grid grid-cols place-items-center'>
          <FaWhatsapp className='text-[35px] text-white cursor-pointer' />
          </div>
        </div>
      </div>
    </>
  )
}
