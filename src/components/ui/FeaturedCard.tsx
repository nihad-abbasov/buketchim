import { Bouquet } from "../../types/bouquet";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

interface FeaturedCardProps {
  bouquet: Bouquet;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ bouquet }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    router.push(`/bouquets/${bouquet.id}`);
  };

  return (
    <li className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Gradient background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />

      {/* Image container with gradient overlay */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={bouquet.image}
          alt={bouquet.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="relative p-6">
        <div className="flex flex-col justify-between items-start mb-3">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {bouquet.name}
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="absolute bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg group-hover:blur-md transition-all duration-300" />
              <div className="relative pt-2">
                <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {bouquet.price}
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {bouquet.description}
        </p>

        <button 
          onClick={handleDetailsClick}
          className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer"
        >
          Ətraflı bax
        </button>
      </div>
    </li>
  );
};

export default FeaturedCard; 