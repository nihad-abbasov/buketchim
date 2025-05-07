"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionDiv, MotionLink } from "../motion/MotionComponents";
import Image from "next/image";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <MotionDiv
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            <Image
              src="/logo.png"
              alt="Buketchim"
              width={150}
              height={50}
              sizes="100vw"
              className="h-12 w-auto mb-4 brightness-200"
            />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <MotionDiv
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={`block text-lg font-medium transition-colors duration-300 ${pathname === link.href
                  ? "text-primary"
                  : "text-gray-600 hover:text-primary"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </MotionLink>
            ))}
          </div>
        </MotionDiv>
      </nav>
    </MotionDiv>
  );
};

export default MobileNav; 