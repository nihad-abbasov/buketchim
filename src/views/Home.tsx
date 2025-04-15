import Image from "next/image";
import Link from "next/link";
import React from "react";

type Bouquet = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
};

const featuredBouquets: Bouquet[] = [
  {
    id: 1,
    name: "Klassik Gül Buketi",
    description: "Qırmızı güllərdən ibarət klassik buket",
    imageUrl: "/bouquets/classic.jpg"
  },
  {
    id: 2,
    name: "Romantik Buket",
    description: "Çəhrayı və ağ güllərdən ibarət romantik kompozisiya",
    imageUrl: "/bouquets/romantic.jpg"
  },
  {
    id: 3,
    name: "Müasir Buket",
    description: "Müxtəlif rəngli güllərdən ibarət müasir dizayn",
    imageUrl: "/bouquets/modern.jpg"
  }
];

const Home: React.FC = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Beautiful flower arrangements"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Buketchim - Güllərin Hekayənizi Danışdığı Yer
            </h1>
            <p className="text-xl text-white mb-8">
              Hər mərasimin mahiyyətini əks etdirən əl işi buketlər
            </p>
            <Link
              href="/gallery"
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Gül Kolleksiyamızı Kəşf Et
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="myContainer">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Biz Kimik</h2>
            <p className="text-lg text-gray-600 mb-8">
              Buketchim inanır ki, hər buket bir hekayə danışır. Peşəkar
              floristlərimiz hər gülü diqqətlə seçir və hər tədbirə  sevinc
              gətirən unikal, mənalı kompozisiyalar yaradır.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6">
                <div className="text-4xl text-pink-500 mb-4">🌸</div>
                <h3 className="text-xl font-semibold mb-2">Tazə Güllər</h3>
                <p className="text-gray-600">
                  Yalnız təcrübəli gülçümüzün təcrübəsi ilə yaradılır
                </p>
              </div>
              <div className="p-6">
                <div className="text-4xl text-pink-500 mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">
                  Yaradıcı Dizaynlar
                </h3>
                <p className="text-gray-600">Hər tədbir üçün mükəmməl dizayn</p>
              </div>
              <div className="p-6">
                <div className="text-4xl text-pink-500 mb-4">💝</div>
                <h3 className="text-xl font-semibold mb-2">Xüsusi Tədbirlər</h3>
                <p className="text-gray-600">Hər tədbir üçün mükəmməl dizayn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-gray-50">
        <div className="myContainer">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Ən çox satılan buketlərimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBouquets.map((bouquet) => (
              <div
                key={bouquet.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={bouquet.imageUrl}
                    alt={bouquet.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{bouquet.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {bouquet.description}
                  </p>
                  <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer">
                    Ətraflı bax
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="myContainer">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Bizlə danış
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Xüsusi bir tədbir yaxınlaşır? Sizə kömək edək və mükəmməl gül
              kompozisiyası yaradaq.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {/* <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-gray-600">123 Flower Street, City</p>
                <p className="text-gray-600">Monday - Saturday: 9am - 6pm</p>
              </div> */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Bizimlə Əlaqə</h3>
                <p className="text-gray-600">Telefon: 055 551 21 02</p>
                <p className="text-gray-600">Email: buketchim@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
