"use client";

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsApp() {
  let phoneNumber="8696878228"
  let encodedMessage="Hey! I want to Enquire more about service."
  return (
    <>
        <div className=' fixed right-[20px] bottom-[20px] z-[999999]'>

        {/* we will use this feature in future */}

        {/* <div className=' h-[50px] mb-[10px] flex items-center gap-2'>
        <div className={cross?"hidden":text-[12px] py-[8px] px-[16px] shadow-[2px_3px_0_#00e785] text-nowrap text-[#202020] border-[#363636] border-[1px] rounded-[24px] leading-[150%] font-medium bg-white}>Book your Appointment</div>
        <RxCrossCircled className={cross?"hidden":'bg-white rounded-full cursor-pointer'} onClick={()=>close()}/>
        </div> */}
        <div className='w-[52px] h-[52px] rounded-full bg-[#00e785] shadow-[4px_5px_10px_rgba(0,0,0,0.4)] flex justify-center items-center'>
        <FaWhatsapp className='text-[35px] text-white cursor-pointer' 
        onClick={() => window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')}/>
        {/* <FaWhatsapp className='text-[35px] text-white cursor-pointer'/> */}
        </div>
        </div>
    </>
  )
}
