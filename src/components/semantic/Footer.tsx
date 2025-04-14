import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com/buketchim",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/buketchim",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/buketchim",
  },
];

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="footer_inner myContainer py-12">
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
                <a
                  key={social.id}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Qısa yollar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Ana səhifə
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Qalareya
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Əlaqə
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: 055 551 21 02</li>
              <li>Email: buketchim@gamil.com</li>
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
