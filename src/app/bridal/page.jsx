import React from 'react'
import Image from 'next/image'

export default function Bridal() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] z-10" />
        <Image
          src="/bridal-hero.jpg" 
          alt="Bridal Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 container mx-auto h-full flex items-center">
          <div className="text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Bridal Collection</h1>
            <p className="text-lg md:text-xl max-w-2xl">Discover our exquisite collection of wedding dresses designed to make your special day unforgettable.</p>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#6d0000]">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Collection Cards */}
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative h-[400px]">
                <Image
                  src="/classic-bridal.jpg"
                  alt="Classic Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6d0000]">Classic Collection</h3>
                <p className="text-gray-600">Timeless designs for the traditional bride.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative h-[400px]">
                <Image
                  src="/modern-bridal.jpg"
                  alt="Modern Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6d0000]">Modern Collection</h3>
                <p className="text-gray-600">Contemporary styles for the fashion-forward bride.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative h-[400px]">
                <Image
                  src="/luxury-bridal.jpg"
                  alt="Luxury Collection"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#6d0000]">Luxury Collection</h3>
                <p className="text-gray-600">Exclusive designs for the sophisticated bride.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
