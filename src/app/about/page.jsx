"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TextGenerateEffect } from '../components/ui/Text-Generate-Effect';
import { ParaGenEffect } from '../components/ui/ParaGen-Effect';

export default function AboutUs() {
  let tagline = "About Us";
  let description = "Vanikas Makeover was conceived with the idea of the modern Indian. Founded by K. Veena, whose knowledge of the international beauty industry pioneered a new era in the hair and beauty care industry in India, Vanikas Makeover has made a path-breaking change in the way the beauty industry has been perceived.";
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/assets/abt_banner.jpg"
          alt="About Us Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000]/90 to-[#8a0000]/90 flex items-center justify-center">
          <div className="text-center text-white">
            <TextGenerateEffect words={tagline} className={"text-4xl md:text-6xl font-bold font-Forum mb-4"} />
            <ParaGenEffect words={"Vanikas Makeover - Creating Experiences With Businesses"} className={"text-xl md:text-2xl"} />
          </div>
        </div>
      </section>

      {/* Creating Beautiful World Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-[#6d0000]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Creating A Beautiful World</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/assets/vanikkas-about.jpg"
              alt="Creating Beautiful World"
              width={1200}
              height={800}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-white">
              Vanikas Makeover was conceived with the idea of the modern Indian. Founded by K. Veena, 
              whose knowledge of the international beauty industry pioneered a new era in the hair
              and beauty care industry in India, Vanikas Makeover has made a path-breaking change in the
              way the beauty industry has been perceived.
            </p>
            <p className="text-white">
              So in the early 2000s, she made that dream a reality by setting up her first salon in Chennai.
              It took her only a while to understand the market potential and the ever-increasing demand for
              professional grooming. In 2004 her husband co-founder & CEO, CK Kumaravel joined and ever since
              then, the Vanikas Makeover team has been able to meet every challenge in this competitive industry.
            </p>
            <p className="text-white">
              Today, Vanikas Makeover is India&apos;s most prominent chain of hair and beauty salons. Thanks to our
              world-class service, courteous staff and loyal support from our patrons, Vanikas Makeover now has 750+ salons across
              the sub-continent and aims to expand to 3000 salons by 2029.
            </p>
          </div>
        </div>
      </section>
      
      {/* Vision 2029 Section */}
      <section className="py-16 bg-[#6d0000]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Vision 2029</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vanikas Makeover 3.0",
                description: "Vanikas Makeover 3.0 aims to revolutionize the beauty industry by seamlessly integrating cutting-edge technology. We will leverage AI for personalized beauty solutions, enhance salon experiences with virtual consultations, and streamline operations with advanced tech tools, setting a new standard in beauty innovation."
              },
              {
                title: "1000+ Women Entrepreneurs", 
                description: "Our vision includes empowering over 1000 women to become successful beauty entrepreneurs. By providing comprehensive training, mentorship, and support, we will create opportunities for women to launch and grow their own beauty businesses, fostering a thriving community of female leaders in the industry"
              },
              {
                title: "3000 Salons",
                description: "We plan to expand our presence by opening 3000 new outlets by the end of 2029. This ambitious goal will be achieved through a scalable business model, strategic location investments, and strong partnerships, ensuring widespread access to our exceptional beauty services and products"
              }
            ].map((vision, index) => (
              <div key={index} className="bg-white/20 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#6d0000]">{vision.title}</h3>
                <p className="text-white">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-[#6d0000]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Milestones Over The Years</h2>
          <div className="relative h-[300px] md:h-[500px] w-full">
            <Image
              src="/assets/"
              alt="Milestones"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

    </main>
  );
}
