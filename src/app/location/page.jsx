"use client"

import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { SiGooglemaps } from "react-icons/si";
import { SiUber } from "react-icons/si";
import Image from 'next/image'
import { TextGenerateEffect } from '../components/ui/Text-Generate-Effect';

export default function Page() {
  let tagline = "Find Us";
  let description = "Find us at BJS, Jodhpur";
  const location = {
    name: "BJS, Jodhpur",
    address: "H/B/71, Main B Road, Opposite Hari Kangan, Near Bijlighar, Bjs, Gali No. 11, Jodhpur, Rajasthan 342001",
    latitude: 26.3036669,
    longitude: 73.0566243
  }

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`
    window.open(url, '_blank')
  }

  const openUber = () => {
    const url = `uber://?action=setPickup&pickup=my_location&dropoff[latitude]=${location.latitude}&dropoff[longitude]=${location.longitude}`
    window.location.href = url
    // Fallback for desktop
    setTimeout(() => {
      window.open('https://m.uber.com', '_blank')
    }, 500)
  }

  const openOla = () => {
    const url = `olacabs://app/launch?lat=${location.latitude}&lng=${location.longitude}`
    window.location.href = url
    // Fallback for desktop
    setTimeout(() => {
      window.open('https://book.olacabs.com', '_blank')
    }, 500)
  }

  const openRapido = () => {
    const url = `rapido://app/launch?lat=${location.latitude}&lng=${location.longitude}`
    window.location.href = url
    // Fallback for desktop
    setTimeout(() => {
      window.open('https://onlineapp.rapido.bike', '_blank')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-[#6d0000] text-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
            <TextGenerateEffect words={tagline} className={"text-[60px] font-bold mt-[90px] font-Forum mb-8 text-center text-white"} />
        
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/30">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-3xl text-white mr-3 animate-pulse" />
            <div>
              <h2 className="text-xl font-semibold text-white">{location.name}</h2>
              <p className="text-white/80">{location.address}</p>
            </div>
          </div>
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d447.0881049965566!2d73.0566243!3d26.3036669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941f3b30b6b21ff%3A0x41bcf2921b5de789!2sVanikkas%20Makeover!5e0!3m2!1sen!2sin!4v1731917240063!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="cursor-pointer"
              onClick={openGoogleMaps}
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-center text-white">Navigate Using</h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openUber}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-300 border border-black/30 w-full sm:w-auto hover:scale-105 hover:shadow-lg"
          >
            <SiUber className="text-[50px] text-black transition-transform duration-300 hover:rotate-12" />
          </button>

          <button
            onClick={openOla}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-300 border border-black/30 w-full sm:w-auto hover:scale-105 hover:shadow-lg"
          >
            <Image 
              src="/assets/ola-logo.webp" 
              alt="Ola" 
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain transition-transform duration-300 hover:rotate-12"
            />
          </button>

          <button
            onClick={openRapido}
            className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 p-4 rounded-lg transition-all duration-300 border border-black/30 w-full sm:w-auto hover:scale-105 hover:shadow-lg"
          >
            <Image 
              src="/assets/Rapido-Logo.png" 
              alt="Rapido"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-contain transition-transform duration-300 hover:rotate-12" 
            />
          </button>
        </div>
      </div>
    </div>
  )
}