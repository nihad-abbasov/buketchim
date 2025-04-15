"use client";

import FilteredBouquetCard from "../components/ui/FilteredBouquetCard";
import GalleryFilterButton from "../components/ui/GalleryFilterButton";
import { fadeIn, scaleIn } from "@/components/motion/MotionComponents";
import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = ["Hamısı", "Toy", "Ad günü", "İldönümü", "Xüsusi Tədbir"];

interface Bouquet {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

const bouquets: Bouquet[] = [
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
            <GalleryFilterButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </motion.div>

        {/* Bouquet Grid */}
        <motion.ul
          initial="initial"
          animate="animate"
          variants={scaleIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredBouquets.map((bouquet) => (
            <FilteredBouquetCard
              key={bouquet.id}
              bouquet={bouquet}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Gallery;
