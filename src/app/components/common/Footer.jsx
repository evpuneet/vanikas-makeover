import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
    const openLocationInGoogleMaps = () => {
        const latitude = 26.036669;  // Replace with your location's latitude
        const longitude = 73.0566243; // Replace with your location's longitude
        // const googleMapsURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
        const googleMapsURL = `https://maps.app.goo.gl/S796T8u7HGekEuWW8`;
        window.open(googleMapsURL, '_blank');
    }
  return (
    <>
        <footer className='grid lg:grid-cols-4 grid-cols-2 gap-x-4 gap-y-6 bg-[#6d0000] text-white py-8 lg:px-14 px-8'>
            <div>
                <h4 className='mb-4 text-[16px] font-semibold'>Quick Links</h4>
                <ul className='text-[14px] flex flex-col font-light'>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Home</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>About Us</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Contact Us</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Blogs</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Privacy Policy</span></li>
                </ul>
            </div>
            <div>
                <h4 className='mb-4 text-[16px] font-semibold text-right lg:text-left'>Our Services</h4>
                <ul className='text-[14px] flex flex-col font-light text-right lg:text-left'>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Hair Care</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Skin Care</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Body Care</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Events</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>Locate Us</span></li>
                </ul>
            </div>
            <div>
                <h4 className='mb-4 text-[16px] font-semibold'>Address</h4>
                <ul className='text-[14px] flex flex-col font-light'>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>H\b\71, Main B Road, <br/> Opposite Hari Kangan, <br/> Near Bijlighar, Bjs, Gali No. 11, <br/> Jodhpur, Rajasthan 342001</span></li>
                </ul>
            </div>
            <div>
                <h4 className='mb-4 text-[16px] font-semibold text-right lg:text-left'>Get in Touch</h4>
                <ul className='text-[14px] flex flex-col font-light text-right lg:text-left'>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1'><RiInstagramFill />Instagram</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all flex items-center justify-end lg:justify-start gap-1'><FaFacebook />Facebook</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>+91 98944866</span></li>
                    <li className='cursor-pointer '><span className='hover:underline underline-offset-2 transition-all'>care@vanikkas.in</span></li>
                </ul>
            </div>
        </footer>
    </>
  )
}
