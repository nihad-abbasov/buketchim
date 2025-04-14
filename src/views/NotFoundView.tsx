"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/components/motion/MotionComponents";

export const NotFoundView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="myContainer">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center"
        >
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Səhifə tapılmadı
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Axtardığınız səhifə mövcud deyil və ya silinib. Ana səhifəyə
            qayıtmaq üçün aşağıdakı düyməyə klikləyin.
          </p>

          <Link
            href="/"
            className="inline-block bg-pink-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors"
          >
            Ana Səhifəyə Qayıt
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
