import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SocialMedia {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
}

interface QuickLink {
  id: number;
  label: string;
  href: string;
}

interface ContactInfo {
  id: number;
  label: string;
  value: string;
}

const socialMedia: SocialMedia[] = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook className="w-6 h-6" />,
    url: "https://facebook.com/buketchim",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
    url: "https://instagram.com/buketchim",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter className="w-6 h-6" />,
    url: "https://twitter.com/buketchim",
  },
];

const quickLinks: QuickLink[] = [
  { id: 1, label: "Ana səhifə", href: "/" },
  { id: 2, label: "Qalareya", href: "/gallery" },
  { id: 3, label: "Haqqımızda", href: "/about" },
  { id: 4, label: "Əlaqə", href: "/contact" }
];

const contactInfo: ContactInfo[] = [
  { id: 1, label: "Phone", value: "055 551 21 02" },
  { id: 2, label: "Email", value: "buketchim@gamil.com" }
];

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="footer_inner myContainer py-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.png"
              alt="Buketchim"
              width={150}
              height={50}
              className="h-12 w-auto mb-4 brightness-200"
            />
            <p className="text-gray-400 mb-4">
              2024-cü ildən bəri diqqətlə hazırlanmış gül kompozisiyaları ilə
              gözəllik və sevinc bəxş edirik.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Qısa yollar</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              {contactInfo.map((info) => (
                <li key={info.id}>
                  {info.label}: {info.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Buketchim. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};
