"use client"
import React from 'react';
import Image from 'next/image';
import { TextGenerateEffect } from '../components/ui/Text-Generate-Effect';
import { ParaGenEffect } from '../components/ui/ParaGen-Effect';
import { CardHoverEffect } from '../components/ui/Card-Hover-Effect';

export default function Services() {
  let tagline="Our Services"
  const services = [
    {
      title: "Hair Care",
      description: "Professional hair cutting, styling, coloring, highlights, hair spa treatments, and more.",
      image: "/assets/hair-services.png"
    },
    {
      title: "Facial & Skincare", 
      description: "Rejuvenating facials, clean-ups, anti-aging treatments, and specialized skin treatments.",
      image: "/assets/facial-service.jpg"
    },
    {
      title: "Makeup",
      description: "Professional makeup services for all occasions - bridal, party, or everyday glamour.",
      image: "/assets/makeup-service.jpg"
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, nail art, and gel polish services for beautiful hands and feet.",
      image: "/assets/nails-service.jpg"
    },
    {
      title: "Body Treatments",
      description: "Relaxing massages, body wraps, scrubs, and specialized therapeutic treatments.",
      image: "/assets/body-service.jpg"
    },
    {
      title: "Threading & Waxing",
      description: "Professional hair removal services using premium products for smooth, glowing skin.",
      image: "/assets/waxing-service.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] flex items-center justify-center">
          <div className="text-center text-white px-4">
          <TextGenerateEffect words={tagline} className={"text-4xl md:text-6xl font-bold font-Forum mb-4"} />
          <ParaGenEffect words={"Discover Beauty & Wellness Solutions"} className={"text-lg md:text-xl italic"} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-[200px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-[#6d0000]">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <button className="mt-4 bg-[#6d0000] text-white px-6 py-2 rounded-full hover:bg-[#8a0000] transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CardHoverEffect items={services} />

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#6d0000]">Ready to Transform Your Look?</h2>
          <p className="text-gray-600 mb-8">Experience the best in beauty care with our expert professionals</p>
          <button className="bg-[#6d0000] text-white px-8 py-3 rounded-full text-lg hover:bg-[#8a0000] transition-colors">
            Schedule an Appointment
          </button>
        </div>
      </section>
    </main>
  );
}
