"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// This would typically come from an API or database
const getBouquetDetails = (id: string) => {
  const bouquets = {
    "1": {
      id: 1,
      name: "Klassik Gül Buketi",
      description: "Ən təravətli güllərdən hazırlanmış klassik buket",
      image: "/bouquets/classic.jpg",
      category: "classic",
      price: "50 AZN",
      details: "Qırmızı güllərdən hazırlanmış klassik buket. Hər gül diqqətlə seçilir və professional floristlərimiz tərəfindən hazırlanır.",
      features: [
        "Təravətli güllər",
        "Professional dizayn",
        "Pulsuz çatdırılma",
        "Hədiyyə qutusu"
      ]
    },
    "2": {
      id: 2,
      name: "Romantik Buket",
      description: "Romantik mərasimlər üçün ideal buket",
      image: "/bouquets/romantic.jpg",
      category: "romantic",
      price: "65 AZN",
      details: "Çəhrayı və ağ güllərdən hazırlanmış romantik buket. Xüsusi tədbirlər üçün ideal seçim.",
      features: [
        "Çəhrayı və ağ güllər",
        "Romantik dizayn",
        "Pulsuz çatdırılma",
        "Hədiyyə qutusu"
      ]
    },
    "3": {
      id: 3,
      name: "Müasir Buket",
      description: "Müasir dizayn və təravətli güllər",
      image: "/bouquets/modern.jpg",
      category: "modern",
      price: "75 AZN",
      details: "Müxtəlif rəngli güllərdən hazırlanmış müasir dizayn buket. Unikal və müasir görünüş.",
      features: [
        "Qarışıq rəngli güllər",
        "Müasir dizayn",
        "Pulsuz çatdırılma",
        "Hədiyyə qutusu"
      ]
    }
  };
  return bouquets[id as keyof typeof bouquets];
};

export default function BouquetDetails() {
  const params = useParams();
  const bouquet = getBouquetDetails(params.id as string);

  if (!bouquet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Buket tapılmadı</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <FadeIn>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={bouquet.image}
                alt={bouquet.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          {/* Details Section */}
          <div className="space-y-8">
            <SlideUp>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {bouquet.name}
              </h1>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {bouquet.price}
                </span>
                <span className="text-sm text-gray-500">+ çatdırılma</span>
              </div>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                {bouquet.details}
              </p>
            </SlideUp>

            <SlideUp delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Xüsusiyyətlər</h3>
                <ul className="space-y-2">
                  {bouquet.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-pink-500">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>

            <SlideUp delay={0.5}>
              <Link 
                href={`https://wa.me/994552910650?text=Salam, sifariş etmək istəyirəm.%0A%0AMəhsul ID: ${bouquet.id}%0AMəhsul: ${encodeURIComponent(bouquet.name)}%0AQiymət: ${bouquet.price}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Sifariş et
              </Link>
            </SlideUp>
          </div>
        </div>
      </div>
    </main>
  );
} 