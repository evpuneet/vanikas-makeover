"use client";
import React from 'react';
import Tabs from './ui/Tabs';
import Image from 'next/image';

export default function OurServices() {
  return (
    <>
      <section className='h-[430px] grid md:grid-cols-[30%_auto] grid-cols-1 md:gap-[300px] md:px-14 px-4 lg:pe-[200px] text-white mb-8'>
        <div className='relative'>
          <Image 
            src="/assets/services_women_v2.png" 
            alt="Services for Women" 
            layout="responsive" 
            className='absolute md:bottom-[47px] bottom-[-530px] scale-50 md:scale-150 md:left-[60px] left-[-30] transition-all' 
            width={400} // Adjust width and height based on your design
            height={300} // Adjust height accordingly
          />
        </div>
        <div className='text-right'>
          <h3 className='mt-[30px] text-[50px] md:mb-[40px] mb-[20px] font-Forum md:text-[54px] md:leading-[60px] font-bold tracking-tighter  bg-clip-text pt-5'>Our Services</h3>
          <h4 className='mb-[30px]'>Exclusively for Women Only!</h4>
          <Tabs />
        </div>
      </section>
    </>
  );
}