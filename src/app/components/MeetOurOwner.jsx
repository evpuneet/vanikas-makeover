"use client";
import React, { useEffect, useRef } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MeetOurOwner() {
  const sectionRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 40%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      }
    });

    timeline
      .from(imageRef.current, { opacity: 0, y: 50, duration: 1 })
      .from(nameRef.current, { opacity: 0, y: 30, duration: 0.8 }, "-=0.5")
      .from(descRef.current, { opacity: 0, y: 20, duration: 0.8 }, "-=0.5");

    return () => {
      if (timeline.scrollTrigger) timeline.scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="lg:h-[550px] h-[100%] bg-primary py-[50px]">
      <h2 className="text-[50px] font-Forum text-white text-center mb-[40px] md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-clip-text pt-5">Meet The Owner</h2>
      <div className="w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center lg:place-items-start place-items-center">
        <div ref={imageRef} className="lg:w-auto w-[200px]">
          <Image src="/assets/vanikas.png" className="rounded-full shadow-[4px_5px_10px_rgba(0,0,0,0.4)]" width={300} height={300} alt="Owner Image" />
        </div>
        <div ref={descRef} className="text-white text-center mb-[10px]">
          <h2 ref={nameRef} className="text-[40px] mb-[20px]">Yogita Joshi</h2>
          <p className="text-[16px] mb-[20px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div>
            <h4 className="mb-[10px]">Follow Us On</h4>
            <div className="flex justify-center gap-[30px]">
              <span className="hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1 cursor-pointer"><RiInstagramFill />Instagram</span>
              <span className="hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1 cursor-pointer"><FaFacebook />Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
