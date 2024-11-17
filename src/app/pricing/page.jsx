"use client"
import React from 'react';
import Image from 'next/image';

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Pricing</h1>
            <h3 className="text-xl md:text-2xl">Our Service Rates & Packages</h3>
          </div>
        </div>
      </section>

      {/* Under Development Notice */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold text-[#6d0000] mb-4">Under Development</h2>
            <p className="text-xl text-gray-600">
              We&apos;re currently working on bringing you our comprehensive pricing details.
              This page will be available soon with all our service rates and special packages.
            </p>
            <div className="mt-8">
              <div className="inline-block animate-bounce bg-[#6d0000] hover:bg-[#8a0000] text-white px-6 py-3 rounded-full">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
