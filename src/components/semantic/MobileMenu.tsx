"use client";

import { fadeIn } from '@/components/motion/MotionComponents';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  
  const menuItems = [
    { label: 'Ana Səhifə', href: '/' },
    { label: 'Haqqımızda', href: '/about' },
    { label: 'Qalereya', href: '/gallery' },
    { label: 'Əlaqə', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 h-full w-72 bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="mt-16">
              <ul className="space-y-6">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                    >
                      <Link
                        href={item.href}
                        className={`block text-lg font-medium transition-colors ${
                          isActive
                            ? 'text-pink-500'
                            : 'text-gray-800 hover:text-pink-500'
                        }`}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="absolute bottom-8 left-6 right-6">
              <Link
                href="https://instagram.com/buketchim"
                target="_blank"
                className="block w-full bg-pink-500 text-white text-center py-4 rounded-lg hover:bg-pink-600 transition-colors font-medium"
                onClick={onClose}
              >
                Sifariş Et
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};