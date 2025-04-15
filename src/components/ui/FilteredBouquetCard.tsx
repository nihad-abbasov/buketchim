import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface Bouquet {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

interface FilteredBouquetCardProps {
  bouquet: Bouquet;
  hoveredItem: number | null;
  setHoveredItem: (id: number | null) => void;
}

const FilteredBouquetCard: React.FC<FilteredBouquetCardProps> = ({
  bouquet,
  hoveredItem,
  setHoveredItem,
}) => {
  return (
    <motion.li
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
          <h3 className="text-xl font-semibold text-gray-800">{bouquet.name}</h3>
          <span className="text-pink-500 font-bold">{bouquet.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{bouquet.description}</p>
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors">
          Add to Cart
        </button>
      </div>
    </motion.li>
  );
};

export default FilteredBouquetCard; 