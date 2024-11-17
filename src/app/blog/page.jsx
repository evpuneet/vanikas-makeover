"use client";
import React from 'react';
import Image from 'next/image';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: "/Types+of+layer+haircuts+at+Naturals+Salon.png",
      date: "26/10/2024",
      title: "Layer Cut Styles & Prices at Naturals Salon | Find the Best Fit for Your Budget",
      description: "Discover stunning layer cut styles at Naturals Salon, starting from Rs. 1,000. From subtle layers to bold transformations, explore affordable options tailored to every hair type and budget. Enhance your look today...",
      dataId: "Types-of-Layer-Cuts-with-Prices-Get-the-Best-for-Your-Budget-at-Naturals-Salon"
    },
    {
      id: 2, 
      image: "/keratin+treatment+at+Naturals+Salon.png",
      date: "24/10/2024",
      title: "Cost of Keratin Treatment and Their Benefits | Naturals Salon",
      description: "Find out how much a Keratin Treatment costs and discover its benefits for healthier, shinier hair. To visit Naturals Salon, just type 'Naturals salon near me...",
      dataId: "cost-of-keratin-treatment-and-their-benefits"
    },
    {
        id: 3, 
        image: "/keratin+treatment+at+Naturals+Salon.png",
        date: "24/10/2024",
        title: "Cost of Keratin Treatment and Their Benefits | Naturals Salon",
        description: "Find out how much a Keratin Treatment costs and discover its benefits for healthier, shinier hair. To visit Naturals Salon, just type 'Naturals salon near me...",
        dataId: "cost-of-keratin-treatment-and-their-benefits"
      },
    // Add remaining blog posts here...
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/assets/banner_blogs.jpg"
          alt="Blog Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6d0000] to-[#8a0000] flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Blogs</h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <p className="text-sm text-[#6d0000] mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-[#6d0000]">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <button 
                  data-id={post.dataId}
                  className="bg-[#6d0000] text-white px-6 py-2 rounded-full hover:bg-[#8a0000] transition-colors"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
