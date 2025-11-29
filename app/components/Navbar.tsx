"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "EVENTS", href: "https://www.instagram.com/p/DQ4r1qniO92/" },
    { name: "ABOUT", href: "https://www.instagram.com/diskotech.no/" },
    { name: "CONTACT", href: "mailto:pagani@diskotech.no" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[70] flex items-center justify-end md:justify-between px-6 md:px-16 py-10 bg-transparent">
        {/* Logo - Desktop Only */}
        <div className="hidden md:block flex-shrink-0 z-50">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <div className="relative w-[240px] h-[80px]">
              <Image
                src="/navlogo.png"
                alt="Diskotech Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links - Right Aligned */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white text-xl tracking-[0.2em] hover:text-gray-300 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Top Right */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 relative w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="relative w-full h-full">
            <Image
              src={isMenuOpen ? "/x-close.svg" : "/menu.svg"}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              fill
              className="object-contain invert" // Invert to make black icons white
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[60] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-full"
        }`}
      >
        {/* Mobile Menu Logo */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[200px] h-[70px]">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/navlogo.png"
              alt="Diskotech Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl tracking-[0.2em] font-medium hover:text-gray-300 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-10 left-0 w-full text-center">
          <p className="text-sm text-white/80">
            © 2025 Diskotech. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
