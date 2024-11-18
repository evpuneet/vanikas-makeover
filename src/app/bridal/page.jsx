import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from '../components/ui/Text-Generate-Effect';
import { ParaGenEffect } from '../components/ui/ParaGen-Effect';

export default function Bridal() {
  let tagline = "Bridal Collection";
  let description = "Discover our exquisite collection of wedding dresses designed to make your special day unforgettable.";
  const collections = [
    {
      title: "Classic Collection",
      description: "Timeless designs for the traditional bride.",
      image: "/assets/classic-bridal.jpg"
    },
    {
      title: "Modern Collection", 
      description: "Contemporary styles for the fashion-forward bride.",
      image: "/assets/modern-bridal.jpg"
    },
    {
      title: "Luxury Collection",
      description: "Exclusive designs for the sophisticated bride.", 
      image: "/assets/luxury-bridal.png"
    }
  ];

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
        <div className="relative z-20 container mx-auto h-full flex justify-center items-center">
          <div className="text-white text-center px-4">
            <TextGenerateEffect words={tagline} className={"text-4xl md:text-6xl font-bold font-Forum mb-4"} />
            <ParaGenEffect words={description} className={"text-lg md:text-xl max-w-2xl italic"} />
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#6d0000]">Our Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="relative h-[400px]">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#6d0000]">{collection.title}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
