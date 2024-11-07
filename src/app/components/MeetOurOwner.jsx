import Image from 'next/image'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

export default function MeetOurOwner() {
  return (
    <>
        <section className='lg:h-[550px] h-[100%] bg-primary py-[50px]'>
            <h2 className='text-[50px] font-Forum text-white text-center mb-[40px] md:text-[54px] md:leading-[60px] font-bold tracking-tighter  bg-clip-text pt-5'>Meet The Owner</h2>
            <div className='w-[80%] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center lg:place-items-start place-items-center '>
                <div className='lg:w-[auto] w-[200px]'>
                    <Image src="/assets/vanikas.png" className='rounded-full shadow-[4px_5px_10px_rgba(0,0,0,0.4)]' width={300} height={300} alt='Owner Image'/>
                </div>
                <div className='text-white text-center mb-[10px]'>
                    <h2 className='text-[40px] mb-[20px]'>Yogita Joshi</h2>
                    <p className='text-[16px] mb-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <h4 className='mb-[10px]'>Follow Us On</h4>
                        <div className='flex justify-center gap-[30px]'>
                        <span className='hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1 cursor-pointer'><RiInstagramFill />Instagram</span>
                        <span className='hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1 cursor-pointer'><FaFacebook />Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
