import Image from 'next/image';
import React from 'react';

export default function Bridal() {
  return (
    <>
      <section className='bg-[#fef9f5] px-[130px] lg:block hidden'>
        <div className='bg-bridal-texture h-[550px] bg-no-repeat bg-cover grid grid-cols-2 items-center'>
          <div className='px-[130px] text-primary'>
            <h4 className='section-title text-left py-5 '>Birdal</h4>
            <p className='text-[16px] mb-[10px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of
              over two decades of expertise in the beauty industry. Our
              personalized services are tailored to meet your unique needs
              and preferences, ensuring that you receive the care and
              attention you deserve. We are committed not to compromised
              quality, using only the highest quality premium products to
              provide exceptional care.
            </p>
            <a href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image 
              src="/assets/bridal_img.png" 
              className='absolute w-[700px] object-cover bottom-0 right-0' 
              width={700} 
              height={100} 
              alt="" 
            />
          </div>
        </div>
      </section>

      <section className='bg-bridal-m-texture bg-left bg-no-repeat bg-cover h-[700px] px-[50px] block lg:hidden text-center overflow-hidden'>
        <div className='h-full grid grid-cols-1 items-center'>
          <div className='text-primary'>
            <h4 className='section-title text-[60px] py-4 pb-8'>Birdal</h4>
            <p className='text-[16px] md:mb-[10px] mb-[30px]'>
              With 24 years of experience, Vanikka&apos;s offers the benefit of
              over two decades of expertise in the beauty industry. Our
              personalized services are tailored to meet your unique needs
              and preferences, ensuring that you receive the care and
              attention you deserve. We are committed not to compromised
              quality, using only the highest quality premium products to
              provide exceptional care.
            </p>
            <a href="tel:54651635165" className='text-nowrap bg-primary rounded-[5px] text-white px-4 py-2 text-[14px] font-semibold'>Book Now</a>
          </div>
          <div className='relative z-[96] h-full'>
            <Image
              src="/assets/bridal_img_mobile.png"
              className='absolute object-cover md:left-[100px] md:bottom-[-90px] sm:bottom-[-100px] sm:left-[50px]'
              width={700} // Adjust width as necessary
              height={400} // Adjust height as necessary
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
