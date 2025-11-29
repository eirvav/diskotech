"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on all devices, especially mobile power-saving modes
    if (videoRef.current) {
      videoRef.current.muted = true; // Force muted state
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/industrial.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-black" />
      </video>

      {/* SVG filter definition for text (optional, kept if needed for future) */}
      <svg className="absolute w-0 h-0">
        <filter id="textNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 px-4">
        <div className="relative w-[480px] h-[160px] lg:w-[960px] lg:h-[320px]">
          <Image
            src="/logo.png"
            alt="Diskotech Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <a
          href="https://stiftelsenbergenkjott.ticketco.events/no/nb/e/kokekveld"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full font-medium text-base tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
        >
          Buy Tickets
        </a>
      </div>
    </div>
  );
}
