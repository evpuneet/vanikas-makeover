// src/app/components/Loader.jsx
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling when the loader is visible
    if (isVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Simulate loading duration (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("no-scroll"); // Ensure scrolling is enabled on unmount
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="flex items-center justify-center w-full h-[100vh] bg-primary text-white fixed top-0 left-0 z-[999999999]">
      <div>
        <Image src="/vanikasLogo.svg" className="max-w-[200px] lg:max-w-[auto]" width={500} height={100} alt="Brand Logo" />
      </div>
    </div>
  );
}
