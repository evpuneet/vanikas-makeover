"use client";
import React, { useEffect, useRef } from 'react';
import Tabs from './ui/Tabs';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  // Refs for elements to animate
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const tabdivRef = useRef(null);

  useEffect(() => {
    // Title Animation (from right)
    gsap.from(titleRef.current, {
      x: 100,
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
      x: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Image Animation (from left)
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Subtitle Animation (from right)
    gsap.from(tabdivRef.current, {
      x: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: tabdivRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  

  return (
    <>
      <section className='h-[430px] grid md:grid-cols-[30%_auto] grid-cols-1 md:gap-[300px] md:px-14 px-4 lg:pe-[200px] text-white mb-8'>
        <div className='relative'>
          <Image 
            src="/assets/services_women_v2.png" 
            alt="Services for Women" 
            layout="responsive"
            width={400}
            height={300}
            className='absolute md:bottom-[47px] bottom-[-530px] scale-50 md:scale-150 md:left-[60px] left-[-30] transition-all'
            ref={imageRef} // Ref for the image
          />
        </div>
        <div className='text-right'>
          <h3
            ref={titleRef} // Ref for the title
            className='mt-[30px] text-[50px] md:mb-[40px] mb-[20px] font-Forum md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-clip-text pt-5'
          >
            Our Services
          </h3>
          <h4 ref={subtitleRef} className='mb-[30px]'>
            Exclusively for Women Only!
          </h4>
          <div ref={tabdivRef}>
          <Tabs />
          </div>
        </div>
      </section>
    </>
  );
}
