// src/app/components/Loader.jsx
"use client"; // This component should be a client component

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading duration (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-primary text-white">
      <div className="">
        <Image src="/vanikasLogo.svg" className="max-w-[200px] lg:max-w-[auto]" width={500} height={100} alt="Brand Logo"/>
      </div>
    </div>
  );
}
