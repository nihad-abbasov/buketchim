"use client";

import { fadeIn, scaleIn } from "@/components/motion/MotionComponents";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const categories = ["Hamısı", "Toy", "Ad günü", "İldönümü", "Xüsusi Tədbir"];
const bouquets = [
  {
    id: 1,
    name: "Bahar Romansi",
    price: "89.99 ₼",
    category: "Toy",
    image: "/bouquets/classic.jpg",
    description: "Zərif pastel rənglərdə bahar güllərinin incə düzülüşü",
  },
  {
    id: 2,
    name: "Yay Nəsimi",
    price: "79.99 ₼",
    category: "Ad günü",
    image: "/bouquets/modern.jpg",
    description: "Canlı yay güllərinin möhtəşəm düzülüşü",
  },
  {
    id: 3,
    name: "Əbədi Sevgi",
    price: "129.99 ₼",
    category: "İldönümü",
    image: "/bouquets/romantic.jpg",
    description: "Zərif yaşıllıqlarla lüks qırmızı qızılgüllər",
  },
  {
    id: 4,
    name: "Bağça Zövqü",
    price: "69.99 ₼",
    category: "Xüsusi Tədbir",
    image: "/bouquets/romantic.jpg",
    description: "Qarışıq bağ güllərinin cazibədar düzülüşü",
  },
  {
    id: 5,
    name: "Gəlin Sevinci",
    price: "149.99 ₼",
    category: "Toy",
    image: "/bouquets/classic.jpg",
    description: "Gəlin buketləri üçün mükəmməl ağ güllər",
  },
  {
    id: 6,
    name: "Bayram",
    price: "99.99 ₼",
    category: "Ad günü",
    image: "/bouquets/modern.jpg",
    description: "Hər bayram üçün rəngarəng düzülüş",
  },
];

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hamısı");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredBouquets =
    selectedCategory === "Hamısı"
      ? bouquets
      : bouquets.filter((bouquet) => bouquet.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="myContainer">
        {/* Header Section */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Gül Kolleksiyamız
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Diqqətlə seçilmiş güllər və zərif düzülüşlərlə öz unikal hekayəsini
            danışan əl işi buketlərimizi kəşf edin.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Bouquet Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={scaleIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBouquets.map((bouquet) => (
            <motion.div
              key={bouquet.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onHoverStart={() => setHoveredItem(bouquet.id)}
              onHoverEnd={() => setHoveredItem(null)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <Image
                  src={bouquet.image}
                  alt={bouquet.name}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                    hoveredItem === bouquet.id ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {bouquet.name}
                  </h3>
                  <span className="text-pink-500 font-bold">
                    {bouquet.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{bouquet.description}</p>
                <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
