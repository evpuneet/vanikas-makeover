"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Bridal() {
  const refs = {
    text: useRef(null),
    image: useRef(null), 
    title: useRef(null),
    subtitle: useRef(null),
    image2: useRef(null),
    button: useRef(null),
  };

  useEffect(() => {
    // Only register and use GSAP on client-side
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const createScrollTrigger = (element, config) => {
        return {
          ...config,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
            ...config.scrollTrigger,
          },
        };
      };

      // Animations
      if (refs.text.current && refs.image.current) {
        gsap.fromTo(
          refs.text.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: refs.text.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );

        gsap.fromTo(
          refs.image.current,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: refs.image.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      const elements = [
        { ref: refs.title, delay: 0 },
        { ref: refs.subtitle, delay: 0.3 },
        { ref: refs.button, delay: 0.6 },
      ];

      elements.forEach(({ ref, delay }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              delay,
              scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });

      if (refs.image2.current) {
        gsap.fromTo(
          refs.image2.current,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: refs.image2.current,
              start: 'top 100%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <section className='relative bg-[#fef9f5] px-4 lg:px-[130px] lg:block hidden'>
        <div className='bg-bridal-texture h-[550px] bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2 items-center'>
          <div className='px-4 lg:px-[130px] text-primary'>
            <h4 ref={refs.title} className='section-title text-left py-5 opacity-100'>Bridal</h4>
            <p ref={refs.subtitle} className='text-[16px] mb-[10px] opacity-100'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <a ref={refs.button} href="tel:54651635165" className='inline-block text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold opacity-100'>Book Now</a>
          </div>
          <div className='relative z-10 h-full'>
            <Image 
              src="/assets/bridal_img.png" 
              className='absolute w-full lg:w-[700px] object-contain lg:object-cover bottom-0 right-0 opacity-100' 
              width={700} 
              height={500}
              ref={refs.image2}
              alt="Bridal Image"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mobile Version */}
      <section className='relative bg-bridal-m-texture bg-left bg-no-repeat bg-cover min-h-[700px] px-4 block lg:hidden overflow-hidden'>
        <div className='h-full py-8 flex flex-col justify-center'>
          <div ref={refs.text} className='text-primary opacity-100'>
            <h4 className='section-title text-[40px] sm:text-[60px] py-4 pb-8 text-center opacity-100'>Bridal</h4>
            <p className='text-[16px] mb-[30px] lg:mb-[10px] text-center opacity-100'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. 
              Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. 
              We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <div className='text-center'>
              <a href="tel:54651635165" className='inline-block text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold opacity-100'>Book Now</a>
            </div>
          </div>
          <div className='relative z-10 mt-8'>
            <Image
              ref={refs.image}
              src="/assets/bridal_img_mobile.png"
              className='w-full object-contain mx-auto opacity-100'
              width={700}
              height={400}
              alt="Bridal Image Mobile"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
