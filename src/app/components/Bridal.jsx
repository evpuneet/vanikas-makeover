"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Bridal() {
  const refs = {
    text: useRef(null),
    image: useRef(null),
    title: useRef(null),
    subtitle: useRef(null),
    image2: useRef(null),
    button: useRef(null),
  };

  const createScrollTrigger = (element, config) => {
    return {
      opacity: 0,
      ...config,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
        ...config.scrollTrigger,
      },
    };
  };

  useEffect(() => {
    if (refs.text.current && refs.image.current) {
      gsap.fromTo(
        refs.text.current,
        { opacity: 0, y: 50 },
        createScrollTrigger(refs.text.current, {
          y: 0,
          duration: 1,
          ease: 'power3.out',
        })
      );

      gsap.fromTo(
        refs.image.current,
        { opacity: 0, x: 50 },
        createScrollTrigger(refs.image.current, {
          x: 0,
          duration: 1,
          ease: 'power3.out',
        })
      );
    }

    const elements = [
      { ref: refs.title, delay: 0 },
      { ref: refs.subtitle, delay: 0.3 },
      { ref: refs.button, delay: 0.6 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        gsap.from(
          ref.current,
          createScrollTrigger(ref.current, {
            x: -100,
            duration: 1,
            delay,
          })
        );
      }
    });

    if (refs.image2.current) {
      gsap.from(
        refs.image2.current,
        createScrollTrigger(refs.image2.current, {
          x: 100,
          duration: 0.8,
          scrollTrigger: {
            start: 'top 100%',
          },
        })
      );
    }
  }, []);

  return (
    <>
      <section className='bg-[#fef9f5] px-[130px] lg:block hidden'>
        <div className='bg-bridal-texture h-[550px] bg-no-repeat bg-cover grid grid-cols-2 items-center'>
          <div className='px-[130px] text-primary'>
            <h4 ref={refs.title} className='section-title text-left py-5'>Bridal</h4>
            <p ref={refs.subtitle} className='text-[16px] mb-[10px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <a ref={refs.button} href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image 
              src="/assets/bridal_img.png" 
              className='absolute w-[700px] object-cover bottom-0 right-0' 
              width={700} 
              height={100} 
              ref={refs.image2}
              alt="Bridal Image" 
            />
          </div>
        </div>
      </section>

      <section className='bg-bridal-m-texture bg-left bg-no-repeat bg-cover h-[700px] px-[50px] block lg:hidden text-center overflow-hidden'>
        <div className='h-full grid grid-cols-1 items-center'>
          <div ref={refs.text} className='text-primary'>
            <h4 className='section-title text-[60px] py-4 pb-8'>Bridal</h4>
            <p className='text-[16px] md:mb-[10px] mb-[30px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <a href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image
              ref={refs.image}
              src="/assets/bridal_img_mobile.png"
              className='absolute object-cover md:left-[100px] md:bottom-[-90px] sm:bottom-[-100px] sm:left-[50px]'
              width={700}
              height={400}
              alt="Bridal Image Mobile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
