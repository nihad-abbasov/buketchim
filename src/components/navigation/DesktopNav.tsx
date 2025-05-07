"use client";

import { MotionDiv, MotionLink } from "../motion/MotionComponents";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DesktopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
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
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <MotionLink
                key={link.href}
                href={link.href}
                className={`relative text-lg font-medium transition-colors duration-300 ${pathname === link.href
                    ? "text-primary"
                    : "text-gray-600 hover:text-primary"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                {pathname === link.href && (
                  <MotionDiv
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </MotionLink>
            ))}
          </div>
        </div>
      </nav>
    </MotionDiv>
  );
};

export default DesktopNav; 