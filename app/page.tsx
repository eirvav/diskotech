export default function Home() {
  return (
    <div className="relative min-h-screen flex items-end justify-center overflow-hidden pb-12 sm:pb-20 md:pb-32">
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

      {/* SVG filter definition for text */}
      <svg className="absolute w-0 h-0">
        <filter id="textNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 px-4">
        {/* COMING SOON text with noise filter */}
        <h1
          className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.6em] lg:tracking-[0.8em] text-center opacity-0 animate-fade-in-slow"
          style={{
            filter: 'url(#textNoise) contrast(1.1) brightness(1.05)',
            textShadow: '0 0 1px rgba(255, 255, 255, 0.3)',
          }}
        >
          COMING SOON
        </h1>
      </div>
    </div>
  );
}
