"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function CardBGHover({ list }) {
  return (
    <>
      {list.map((item, index) => (
        <div key={index} className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto",
              "bg-cover bg-center text-white transition-all duration-300"
            )}
            style={{
              backgroundImage: `url(${item.image || '/assets/default-bg.jpg'})`
            }}
          >
            {/* Dark overlay that gets darker on hover */}
            <div className="absolute inset-0 bg-black/50 group-hover/card:bg-black/70 transition-colors duration-300" />
            
            <div className="relative z-10 h-full p-1 flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="font-bold text-xl md:text-2xl mb-4">
                  {item.title}
                </h1>
                <p className="font-normal text-sm opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
