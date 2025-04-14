"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MotionHeader } from "../motion/MotionComponents";
import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "./Nav";

export const Header = () => {
  const scrollPosition = useScrollPosition();
  const isFixed = scrollPosition > 100;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <MotionHeader
        initial={{ y: 0 }}
        animate={{
          y: isFixed ? 0 : 0,
          position: isFixed ? "fixed" : "relative",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          mass: 0.5,
          restDelta: 0.001,
        }}
        className={`w-full bg-white shadow-sm z-50 ${
          isFixed ? "fixed top-0" : "relative"
        }`}
      >
        <div className="header_inner myContainer flex flex-row items-center justify-between py-4">
          <Link href="/" className="logo_container">
            <Image
              src="/logo.png"
              alt="Buketchim"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Nav />
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/gallery"
              className="hidden md:block bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition-colors"
            >
              Sifariş Et
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </MotionHeader>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
};
