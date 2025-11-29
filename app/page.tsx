import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/industrial.mp4" type="video/mp4" />
      </video>

      {/* SVG filter definition for text (optional, kept if needed for future) */}
      <svg className="absolute w-0 h-0">
        <filter id="textNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
        <div className="relative w-[480px] h-[160px] lg:w-[960px] lg:h-[320px]">
          <Image
            src="/logo.png"
            alt="Diskotech Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
