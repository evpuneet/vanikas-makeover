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
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000]/90 to-[#8a0000]/90 flex items-center justify-center">
          <div className="text-center text-white">
            <TextGenerateEffect words={tagline} className={"text-4xl md:text-6xl font-bold font-Forum mb-4"} />
            <ParaGenEffect words={"Vanikas Makeover - Creating Experiences With Businesses"} className={"text-xl md:text-2xl"} />
          </div>
        </div>
      </section>

      {/* Creating Beautiful World Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">Creating A Beautiful World</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/public/assets/vanikkas-about.jpg"
              alt="Creating Beautiful World"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-700">
              Vanikas Makeover was conceived with the idea of the modern Indian. Founded by K. Veena, 
              whose knowledge of the international beauty industry pioneered a new era in the hair
              and beauty care industry in India, Vanikas Makeover has made a path-breaking change in the
              way the beauty industry has been perceived.
            </p>
            <p className="text-gray-700">
              So in the early 2000s, she made that dream a reality by setting up her first salon in Chennai.
              It took her only a while to understand the market potential and the ever-increasing demand for
              professional grooming. In 2004 her husband co-founder & CEO, CK Kumaravel joined and ever since
              then, the Vanikas Makeover team has been able to meet every challenge in this competitive industry.
            </p>
            <p className="text-gray-700">
              Today, Vanikas Makeover is India&apos;s most prominent chain of hair and beauty salons. Thanks to our
              world-class service, courteous staff and loyal support from our patrons, Vanikas Makeover now has 750+ salons across
              the sub-continent and aims to expand to 3000 salons by 2029.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-16 bg-gradient-to-r from-[#6d0000]/10 to-[#8a0000]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">Milestones Over The Years</h2>
          <div className="relative h-[300px] md:h-[500px] w-full">
            <Image
              src="/assets/milestone.jpg"
              alt="Milestones"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* World of Vanikas Makeover Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">The World Of Vanikas Makeover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="relative h-[200px] transform transition-transform hover:scale-105">
                <Image
                  src={`/assets/fran_opp_${num}.png`}
                  alt={`Franchise Opportunity ${num}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              href="/franchise"
              className="bg-[#6d0000] text-white px-8 py-3 rounded-full text-center hover:bg-[#8a0000] transition-colors"
            >
              Enquire Now
            </Link>
            <button className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-[#6d0000] text-[#6d0000] hover:bg-[#6d0000]/10 transition-colors">
              Know More
              <span className="material-icons">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gradient-to-r from-[#6d0000]/10 to-[#8a0000]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">Awards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { year: "2024", title: "The Rise - Global award of excellence" },
              { year: "2019", title: "BCN Award" },
              { year: "2019", title: "Woman on a Mission Award" },
              { year: "2019", title: "Retail Icons of India" },
              { year: "2018", title: "Inspirational Business Icon" },
              { year: "2017", title: "Promising Retail Brand 2017" },
              { year: "2016", title: "Gold Trophy, Best Small Scale Private Org Award" },
              { year: "2015", title: "Images Retail Award for Most Admired Retailer of the Year" },
              { year: "2013", title: "Images Retail Awards for the Most Admired Salon" }
            ].map((award, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/assets/award_1.svg"
                  alt="Award Icon"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="font-semibold text-[#6d0000]">{award.year}</p>
                  <p className="text-gray-700">{award.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">The Vanikas Makeover Nationwide Wave</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { id: 1, number: "800", label: "SALON" },
              { id: 2, number: "24", label: "YEARS" },
              { id: 3, number: "20+", label: "STATE" },
              { id: 4, number: "7000000", label: "HAPPY CUSTOMERS" },
              { id: 5, text: "WOMENPRENEURS" }
            ].map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="relative h-20 w-20 mx-auto mb-4">
                  <Image
                    src={`/assets/nat_wave_${stat.id}.png`}
                    alt={stat.label || stat.text}
                    fill
                    className="object-contain"
                  />
                </div>
                {stat.number && <h3 className="text-2xl font-bold text-[#6d0000]">{stat.number}</h3>}
                <h3 className="text-lg text-gray-700">{stat.label || stat.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2029 Section */}
      <section className="py-16 bg-gradient-to-r from-[#6d0000]/10 to-[#8a0000]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#6d0000]">Vision 2029</h2>
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
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-4 text-[#6d0000]">{vision.title}</h3>
                <p className="text-gray-700">{vision.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
