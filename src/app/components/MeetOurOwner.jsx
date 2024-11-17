"use client";
import React, { useEffect, useRef } from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once outside component
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MeetOurOwner() {
  // Group refs into a single object
  const refs = {
    section: useRef(null),
    image: useRef(null),
    name: useRef(null),
    desc: useRef(null)
  };

  useEffect(() => {
    const elements = [
      { ref: refs.image, y: 50, duration: 1 },
      { ref: refs.name, y: 30, duration: 0.5 },
      { ref: refs.desc, y: 20, duration: 0.6 }
    ];

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: refs.section.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      }
    });

    // Add animations to timeline
    elements.forEach(({ ref, y, duration }, index) => {
      timeline.from(ref.current, 
        { 
          opacity: 0, 
          y, 
          duration 
        }, 
        index === 0 ? 0 : "-=0.5"
      );
    });

    return () => timeline.scrollTrigger && timeline.scrollTrigger.kill();
  }, []);

  return (
    <section 
      ref={refs.section} 
      className="lg:h-[550px] h-[100%] bg-primary py-[50px]"
    >
      <h2 className="text-[50px] font-Forum text-white text-center mb-[40px] md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-clip-text pt-5">
        Meet The Owner
      </h2>
      
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center lg:place-items-start place-items-center">
        <div ref={refs.image} className="lg:w-auto w-[200px]">
          <Image 
            src="/assets/vanikas.png" 
            className="rounded-full shadow-[4px_5px_10px_rgba(0,0,0,0.4)]" 
            width={300} 
            height={300} 
            alt="Yogita Joshi - Owner"
            priority
          />
        </div>
        
        <div ref={refs.desc} className="text-white text-center mb-[10px]">
          <h2 ref={refs.name} className="text-[40px] mb-[20px]">
            Yogita Joshi
          </h2>
          <p className="text-[16px] mb-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div>
            <div className="flex justify-center gap-[30px]">
              <a 
                href='https://www.instagram.com/vanikkas14' 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1 cursor-pointer"
              >
                <RiInstagramFill />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
