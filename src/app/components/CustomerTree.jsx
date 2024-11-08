import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function CustomerTree() {
  return (
    <>
      <h2 className='font-Forum lg:text-[40px] text-[40px] text-white py-[50px] text-center'>What Our Valued Customers Say</h2>
      <section className='h-[400px] md:flex items-center justify-center my-[100px] hidden'>
        <div className='relative py-[30px] w-full'>
          <div className='w-full h-[5px] bg-white absolute top-[308px] z-[90]' />
          <Marquee className='relative w-full top-[-50%] pt-[250px] h-[600px]'>
            {/* First Customer */}
            <div className='absolute top-[-200px] text-white text-[16px]'>
              <div className='w-[20px] h-[20px] rounded-full bg-white absolute top-[220px] left-[50%] translate-x-[-50%]' />
              <div className='w-[100px] h-[100px] overflow-clip rounded-full object-cover absolute left-[-50px] top-[-20px] z-[90]'>
                <Image 
                  className='w-full h-full object-cover' 
                  src="/assets/val_cust_dummy.jpeg" 
                  alt="Customer 1" 
                  width={100} 
                  height={100} 
                />
              </div>
              <p className='absolute top-[100px] left-[20px] w-[300px] h-[120px]'>
                I recently went for a haircut, and one of their senior staff attended to me. The whole experience was comfortable, and I absolutely love the result.
              </p>
              <div className='border-dashed border rotate-90 absolute left-[-100px] w-[200px] bottom-[-130px]' />
            </div>

            {/* Second Customer */}
            <div className='absolute top-[10px] left-[450px] text-white text-[16px]'>
              <div className='w-[20px] h-[20px] rounded-full bg-white absolute top-[10px] left-[50%] translate-x-[-50%]' />
              <div className='w-[100px] h-[100px] overflow-clip rounded-full object-cover absolute left-[-50px] top-[180px] z-[90]'>
                <Image 
                  className='w-full h-full object-cover rotate-180' 
                  src="/assets/val_cust_dummy_3.jpeg" 
                  alt="Customer 2" 
                  width={100} 
                  height={100} 
                />
              </div>
              <p className='absolute top-[40px] left-[20px] w-[300px] h-[120px]'>
                I recently went for a haircut, and one of their senior staff attended to me. The whole experience was comfortable, and I absolutely love the result.
              </p>
              <div className='border-dashed border rotate-90 absolute left-[-100px] w-[200px] bottom-[-130px]' />
            </div>

            {/* Third Customer */}
            <div className='absolute top-[-200px] left-[900px] text-white text-[16px]'>
              <div className='w-[20px] h-[20px] rounded-full bg-white absolute top-[220px] left-[50%] translate-x-[-50%]' />
              <div className='w-[100px] h-[100px] overflow-clip rounded-full object-cover absolute left-[-50px] top-[-20px] z-[90]'>
                <Image 
                  className='w-full h-full object-cover' 
                  src="/assets/val_cust_dummy.jpeg" 
                  alt="Customer 3" 
                  width={100} 
                  height={100} 
                />
              </div>
              <p className='absolute top-[100px] left-[20px] w-[300px] h-[120px]'>
                I recently went for a haircut, and one of their senior staff attended to me. The whole experience was comfortable, and I absolutely love the result.
              </p>
              <div className='border-dashed border rotate-90 absolute left-[-100px] w-[200px] bottom-[-130px]' />
            </div>

            {/* Fourth Customer */}
            <div className='absolute top-[10px] left-[1300px] text-white text-[16px]'>
              <div className='w-[20px] h-[20px] rounded-full bg-white absolute top-[10px] left-[50%] translate-x-[-50%]' />
              <div className='w-[100px] h-[100px] overflow-clip rounded-full object-cover absolute left-[-50px] top-[180px] z-[90]'>
                <Image 
                  className='w-full h-full object-cover rotate-180' 
                  src="/assets/val_cust_dummy_3.jpeg" 
                  alt="Customer 4" 
                  width={100} 
                  height={100} 
                />
              </div>
              <p className='absolute top-[40px] left-[20px] w-[300px] h-[120px]'>
                I recently went for a haircut, and one of their senior staff attended to me. The whole experience was comfortable, and I absolutely love the result.
              </p>
              <div className='border-dashed border rotate-90 absolute left-[-100px] w-[200px] bottom-[-130px]' />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}
