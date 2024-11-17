"use client"
import React from 'react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Hair Care",
      description: "Professional hair cutting, styling, coloring, highlights, hair spa treatments, and more.",
      image: "/public/assets/hair-services.png"
    },
    {
      title: "Facial & Skincare", 
      description: "Rejuvenating facials, clean-ups, anti-aging treatments, and specialized skin treatments.",
      image: "/facial-service.jpg"
    },
    {
      title: "Makeup",
      description: "Professional makeup services for all occasions - bridal, party, or everyday glamour.",
      image: "/makeup-service.jpg"
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, nail art, and gel polish services for beautiful hands and feet.",
      image: "/nails-service.jpg"
    },
    {
      title: "Body Treatments",
      description: "Relaxing massages, body wraps, scrubs, and specialized therapeutic treatments.",
      image: "/body-service.jpg"
    },
    {
      title: "Threading & Waxing",
      description: "Professional hair removal services using premium products for smooth, glowing skin.",
      image: "/waxing-service.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl">Discover Beauty & Wellness Solutions</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-[200px]">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
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
      </section>

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
