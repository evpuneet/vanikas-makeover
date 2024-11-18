"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card-asset";
import Link from "next/link";


export function ThreeDCardDemo() {
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
    <>
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {collections.map((item, idx) => (
              <CardContainer key={idx}>
                <CardBody
                  className="bg-gray-50 relative group/card dark:hover:shadow-2xl shadow-xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[30rem] h-auto rounded-xl p-3 sm:p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-2xl sm:text-3xl font-black dark:text-white section-title">
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300">
                    {item.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-3 sm:mt-4">
                    <Image
                      src={item.image}
                      height={800}
                      width={1200}
                      priority
                      className="h-48 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={item.title} />
                  </CardItem>
                  <div className="flex justify-between items-center mt-12 sm:mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="/"
                      className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl text-primary text-[10px] sm:text-xs font-normal dark:text-white hover:bg-primary/10 transition-colors duration-200">
                      View Collection →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-2 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-primary dark:bg-white dark:text-black text-white text-[10px] sm:text-xs font-bold hover:bg-primary/80 dark:hover:bg-white/80 transition-colors duration-200">
                      Book Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
    </>
  );
}
