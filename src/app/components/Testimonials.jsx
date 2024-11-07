"use client";

import React, { useEffect, useRef } from 'react';
import { animate, motion } from 'framer-motion';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import gsap from 'gsap';

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/assets/avatar-1.png",
    name: "Jamie Rivera",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/assets/avatar-1.png",
    name: "Josh Smith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/assets/avatar-1.png",
    name: "Morgan Lee",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/assets/avatar-1.png",
    name: "Casey Jordan",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/assets/avatar-1.png",
    name: "Taylor Kim",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/assets/avatar-1.png",
    name: "Riley Smith",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/assets/avatar-1.png",
    name: "Jordan Patels",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/assets/avatar-1.png",
    name: "Sam Dawson",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/assets/avatar-1.png",
    name: "Casey Harper",
  },
];



const TestimonialsColumn = ({ className, testimonials, duration }) => (
  <motion.div 
    animate={{
      translateY: "-50%",
    }} 
    transition={{
      repeat: Infinity, 
      repeatType: "loop", 
      ease: "linear", 
      duration: duration || 10,
    }} 
    className={twMerge('flex flex-col gap-6 pb-6 -translate-y-1/2', className)}
  >
    {[...new Array(2)].fill(0).map((_, index) => (
      <React.Fragment key={index}>
        {testimonials.map(({ text, imageSrc, name, username }) => (
          <div className="card" key={name}>
            <div className="flex items-center gap-2 mt-5">
              <Image src={imageSrc} alt={name} className="w-10 h-10 rounded-full" width={40} height={40} />
              <div>
                <div className="flex flex-col">{name}</div>
              </div>
            </div>
            <div>{text}</div>
          </div>
        ))}
      </React.Fragment>
    ))}
  </motion.div>
);

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);



export default function Testimonials() {
    const titleRef = useRef(null);
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
    }, []);

  return (
    <section className="bg-white py-12">
      <div className="">
        <div className="section-heading">
          <h2 className="section-title my-5 hidden md:block" ref={titleRef}>What our customers say</h2>
          <h2 className="section-title my-5 py-2 text-[50px] md:hidden" ref={titleRef}>Customer Feedback</h2>
        </div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 max-h-[738px] overflow-clip">
          <TestimonialsColumn testimonials={firstColumn} duration={12} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={17} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={15} />
        </div>
      </div>
    </section>
  );
}
