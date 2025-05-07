"use client";

import { FadeIn } from "@/components/animations/AnimationComponents";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "all", name: "Hamısı" },
  { id: "classic", name: "Klassik" },
  { id: "romantic", name: "Romantik" },
  { id: "modern", name: "Müasir" },
];

const bouquets = [
  {
    id: 1,
    name: "Klassik Gül Buketi",
    description: "Ən təravətli güllərdən hazırlanmış klassik buket",
    image: "/bouquets/classic.jpg",
    category: "classic",
    price: "50 AZN",
  },
  {
    id: 2,
    name: "Romantik Buket",
    description: "Romantik mərasimlər üçün ideal buket",
    image: "/bouquets/romantic.jpg",
    category: "romantic",
    price: "65 AZN",
  },
  {
    id: 3,
    name: "Müasir Buket",
    description: "Müasir dizayn və təravətli güllər",
    image: "/bouquets/modern.jpg",
    category: "modern",
    price: "75 AZN",
  },
  {
    id: 4,
    name: "Pastel Rəngli Buket",
    description: "Pastel tonlarında seçilmiş güllərdən ibarət zərif buket",
    image: "/bouquets/romantic.jpg",
    category: "modern",
    price: "80 AZN",
  },
  {
    id: 5,
    name: "Qırmızı Gül Buketi",
    description: "Sevgililər üçün xüsusi qırmızı güllərdən hazırlanmış buket",
    image: "/bouquets/modern.jpg",
    category: "romantic",
    price: "90 AZN",
  },
  {
    id: 6,
    name: "Ağ Gül Buketi",
    description: "Təmiz və zərif ağ güllərdən ibarət klassik buket",
    image: "/bouquets/romantic.jpg",
    category: "classic",
    price: "55 AZN",
  },
  {
    id: 7,
    name: "Çəhrayı Gül Buketi",
    description: "Çəhrayı güllərin romantik harmoniyası",
    image: "/bouquets/modern.jpg",
    category: "romantic",
    price: "70 AZN",
  },
  {
    id: 8,
    name: "Ekzotik Buket",
    description: "Nadir və ekzotik güllərdən hazırlanmış müasir buket",
    image: "/bouquets/modern.jpg",
    category: "modern",
    price: "120 AZN",
  },
  {
    id: 9,
    name: "Sarı Gül Buketi",
    description: "Günəş kimi parlaq sarı güllərdən ibarət buket",
    image: "/bouquets/romantic.jpg",
    category: "classic",
    price: "60 AZN",
  },
  {
    id: 10,
    name: "Lavanda Buketi",
    description: "Təbii lavanda və bənövşəyi güllərdən ibarət sakitləşdirici buket",
    image: "/bouquets/modern.jpg",
    category: "modern",
    price: "85 AZN",
  },
  {
    id: 11,
    name: "Mini Buket",
    description: "Kiçik ölçülü, lakin çox zərif buket",
    image: "/bouquets/romantic.jpg",
    category: "classic",
    price: "35 AZN",
  },
  {
    id: 12,
    name: "Deluxe Buket",
    description: "Ən gözəl və zəngin güllərdən hazırlanmış lüks buket",
    image: "/bouquets/modern.jpg",
    category: "romantic",
    price: "150 AZN",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBouquets = activeCategory === "all"
    ? bouquets
    : bouquets.filter(bouquet => bouquet.category === activeCategory);

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Buket Qalereyası
          </h1>
        </FadeIn>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${activeCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Bouquet Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBouquets.map((bouquet) => (
            <li key={bouquet.id} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
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

                <Link
                  href={`/bouquets/${bouquet.id}`}
                  className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Ətraflı bax
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
