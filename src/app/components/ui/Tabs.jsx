"use client"
import React, { useState } from 'react'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Pre-wedding & Bridal");

  const tabs = [
    {
      id: "Pre-wedding & Bridal",
      label: "Pre-wedding & Bridal",
      content: "Vanikka's specializes in bridal beauty with customized hair styling, flawless makeup, skin treatments, and pampering services to ensure you look and feel stunning on your special day."
    },
    {
      id: "Body",
      label: "Body",
      content: "Vanikka's provides women's body services including relaxing massages, exfoliating scrubs, detoxifying treatments, body wraps, and full-body pampering, ensuring a revitalized and refreshed experience."
    },
    {
      id: "Skin",
      label: "Skin",
      content: "Vanikka's offers comprehensive women's skin services, featuring rejuvenating facials, deep cleansing, hydration treatments, exfoliation, and anti-aging solutions to achieve radiant, flawless skin."
    },
    {
      id: "Hair",
      label: "Hair",
      content: "At Vanikka's, women's hair services include expert cuts, vibrant coloring, luxurious conditioning, precise styling, and smoothing treatments, all tailored to enhance your unique beauty."
    }
  ];

  return (
    <div>
      <div className="flex justify-end gap-8 text-[13px] lg:text-[16px]">
        {tabs.map((tab) => (
          <h5
            key={tab.id}
            className={`cursor-pointer mb-6 ${activeTab === tab.id ? 'text-white lg:font-bold md:font-semibold font-medium rounded-lg px-2 transition-all drop-shadow-white-glow' : 'text-white transition-all duration-500 ease-in-out hover:opacity-100 opacity-[.6]'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </h5>
        ))}
      </div>

      <div>
        {tabs.map((tab) => (
          activeTab === tab.id && (
            <div key={tab.id} className="mb-8">
              <p className="lg:text-[16px] text-[14px] mb-4 duration-500 transition-all h-auto">{tab.content}</p>
              <a
                href="tel:54651635155"
                className="bg-white rounded px-4 py-2 text-primary text-[12px] font-semibold "
              >
                Book Now
              </a>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
