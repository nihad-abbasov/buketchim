"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { MotionHeader } from "../motion/MotionComponents";
import { MobileMenu } from "./MobileMenu";
import React, { useState } from "react";
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
        className={`w-full bg-white shadow-sm z-50 ${isFixed ? "fixed top-0" : "relative"
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
              href="https://instagram.com/buketchim"
              target="_blank"
              className="hidden md:block relative overflow-hidden group bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-2.5 rounded-full font-medium transition-all duration-300 hover:from-pink-600 hover:to-pink-700 hover:shadow-lg hover:shadow-pink-500/30"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">Sifariş Et</span>
                <svg
                  className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
