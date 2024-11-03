"use client"
import React from 'react'
import Tabs from './ui/Tabs'

export default function OurServices() {
  return (
    <>
        <section className='h-[430px] grid md:grid-cols-[30%_auto] grid-cols-1 gap-[300px] md:px-14 px-4 lg:pe-[200px] text-white mb-8'>
            <div className='relative md:block hidden'>
                <img src="https://naturals.in/assets/services_women_v2.png" alt="" className='absolute bottom-[33px] scale-150 left-[60px] transition-all'/>
            </div>
            <div className='text-right '>
                <h3 className='mt-[30px] text-[50px] md:mb-[40px] mb-[20px] font-Forum'>Our Services</h3>
                <h4 className='mb-[30px]'>Exclusively for Women Only!</h4>
                <Tabs/>
            </div>
        </section>
    </>
  )
}
