"use client";
import Image from 'next/image';
import React, { useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Bridal() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!textRef.current || !imageRef.current) return;

    // Text Animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Image Animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  // Refs for elements to animate
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef2 = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Title Animation (from right)
    gsap.from(titleRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%", // Adjust start position
        toggleActions: "play none none reverse",
      },
    });

    // Subtitle Animation (from right)
    gsap.from(subtitleRef.current, {
      x: -100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Subtitle Animation (from right)
    gsap.from(buttonRef.current, {
      x: -100,
      opacity: 0,
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Image Animation (from left)
    gsap.from(imageRef2.current, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: imageRef2.current,
        start: "top 100%",
        toggleActions: "play none none reverse",
      },
    });

  }, []);

  return (
    <>
      <section className='bg-[#fef9f5] px-[130px] lg:block hidden'>
        <div className='bg-bridal-texture h-[550px] bg-no-repeat bg-cover grid grid-cols-2 items-center'>
          <div className='px-[130px] text-primary'>
            <h4 ref={titleRef} className='section-title text-left py-5'>Bridal</h4>
            <p ref={subtitleRef} className='text-[16px] mb-[10px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <a ref={buttonRef} href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image 
              src="/assets/bridal_img.png" 
              className='absolute w-[700px] object-cover bottom-0 right-0' 
              width={700} 
              height={100} 
              ref={imageRef2}
              alt="Bridal Image" 
            />
          </div>
        </div>
      </section>

      <section className='bg-bridal-m-texture bg-left bg-no-repeat bg-cover h-[700px] px-[50px] block lg:hidden text-center overflow-hidden'>
        <div className='h-full grid grid-cols-1 items-center'>
          <div ref={textRef} className='text-primary'>
            <h4 className='section-title text-[60px] py-4 pb-8'>Bridal</h4>
            <p className='text-[16px] md:mb-[10px] mb-[30px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
            </p>
            <a href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image
              ref={imageRef}
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
