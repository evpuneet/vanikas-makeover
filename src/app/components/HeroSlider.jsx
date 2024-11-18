"use client"

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoLocation } from "react-icons/io5";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { FaWhatsapp } from "react-icons/fa";
import { TextGenerateEffect } from './ui/Text-Generate-Effect';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSlider() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Fade-in from the left for heading
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%', // Adjust start position as needed
        }
      }
    );

    // Fade-in from the right for paragraph
    gsap.fromTo(
      paragraphRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: 'top 80%',
        }
      }
    );

    // Fade-in for the image from the left
    gsap.fromTo(
      imageRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  const phoneNumber = '917877446041';
  const message = 'Hello! I am interested in learning more about your services.';
  const encodedMessage = encodeURIComponent(message);

  const openLocationInGoogleMaps = () => {
    const googleMapsURL = `https://maps.app.goo.gl/S796T8u7HGekEuWW8`;
    window.open(googleMapsURL, '_blank');
  };

  let tagline = "Beauty Salon of Jodhpur";

  return (
    <>
      <div className='relative'>
        <Swiper
          scrollbar={{ hide: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='w-[100vw] h-[100vh] grid lg:grid-cols-2 grid-cols-1 items-center lg:ps-[70px] ps-3 text-white lg:pt-0 pt-[150px]'>
              <div>
                <h2
                  ref={headingRef}
                  className='font-Forum text-[40px] mb-[10px] text-center lg:text-left lg:mb-[20px]'
                >
                  <TextGenerateEffect words={tagline} />
                </h2>
                <p
                  ref={paragraphRef}
                  className='lg:mb-[50px] mb-[30px] md:text-[16px] lg:text-left text-center text-[14px]'
                >
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
                  <button
                    className='text-[16px] lg:px-4 px-2 lg:py-2 py-1 rounded-lg border flex items-center gap-2 hover:shadow'
                    onClick={openLocationInGoogleMaps}
                  >
                    Salon Locator <IoLocation className='text-[16px]' />
                  </button>
                </div>
              </div>
              <div className='ps-[40px] md:ps-0'>
                <Image
                  ref={imageRef}
                  src="/assets/banner_girl.png"
                  alt="A woman at the salon"
                  width={600}
                  height={400}
                  layout="responsive"
                  className='w-[100%] h-auto'
                />
              </div>
            </div>
          </SwiperSlide>
          {/* Add additional SwiperSlides as needed */}
          <SwiperSlide>
            <div className='w-[100%] h-[100vh] md:bg-banner-2 bg-banner-m-2 bg-no-repeat bg-cover relative'>
            <button className='bg-white text-primary text-[16px] lg:px-4 px-2 lg:py-2 py-1 md:bottom-[150px] lg:left-[10%] rounded-lg absolute bottom-[90px] left-[50%] translate-x-[-50%]'>
              Book Appointment
            </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Additional content here */}
      <div className='relative h-[200px]'>
        <div className='bg-white rounded-[80px_80px_0_0] py-6 lg:px-[200px] absolute top-[100px] w-[100%] -translate-y-[60%] z-[10] grid lg:grid-cols-2 grid-cols-1'>
          <div className='hidden md:block'></div>
          <div className='lg:text-right text-center text-primary'>
            <h4 className='section-title text-right lg:py-5 pb-3 pe-3 lg:pe-1 hidden md:block'>Why Choose Us?</h4>
            <h4 className='section-title text-center lg:py-5 py-3 pb-6 pe-3 lg:pe-1 md:hidden text-[50px]'>Why Choose Us?</h4>
            <p className='lg:text-[16px] text-[14px] md:px-[0px] px-[20px]'>
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

          {/* whatsapp icon */}

        
      </div>
    </>
  );
}
