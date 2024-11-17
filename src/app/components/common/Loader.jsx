// src/app/components/Loader.jsx
"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  // Separate the scroll management logic
  const toggleScroll = useCallback((disable) => {
    document.body.classList.toggle('no-scroll', disable);
  }, []);

  useEffect(() => {
    // Apply scroll lock immediately
    toggleScroll(isVisible);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      toggleScroll(false);
    };
  }, []); // Remove isVisible dependency since we only want this to run once

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999999999] flex items-center justify-center bg-primary">
      <div className="flex items-center justify-center w-full">
        <Image
          src="/vanikasLogo.svg"
          width={500}
          height={100}
          alt="Brand Logo"
          priority
          className="w-[200px] md:w-[400px] animate-pulse hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
