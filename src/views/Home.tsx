import FeaturedCard from "../components/ui/FeaturedCard";
import { Bouquet } from "../types/bouquet";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhyUsItem from "../components/ui/WhyUsItem";
import { motion } from "framer-motion";

interface WhyUsItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const whyUsItems: WhyUsItem[] = [
  {
    id: 1,
    icon: "🌸",
    title: "Tazə Güllər",
    description: "Yalnız təcrübəli gülçümüzün təcrübəsi ilə yaradılır"
  },
  {
    id: 2,
    icon: "🎨",
    title: "Yaradıcı Dizaynlar",
    description: "Hər tədbir üçün mükəmməl dizayn"
  },
  {
    id: 3,
    icon: "💝",
    title: "Xüsusi Tədbirlər",
    description: "Hər tədbir üçün mükəmməl dizayn"
  }
];

const featuredBouquets: Bouquet[] = [
  {
    id: 1,
    name: "Klassik Gül Buketi",
    description: "Qırmızı güllərdən ibarət klassik buket",
    imageUrl: "/bouquets/classic.jpg",
    price: "50 AZN"
  },
  {
    id: 2,
    name: "Romantik Buket",
    description: "Çəhrayı və ağ güllərdən ibarət romantik kompozisiya",
    imageUrl: "/bouquets/romantic.jpg",
    price: "65 AZN"
  },
  {
    id: 3,
    name: "Müasir Buket",
    description: "Müxtəlif rəngli güllərdən ibarət müasir dizayn",
    imageUrl: "/bouquets/modern.jpg",
    price: "75 AZN"
  },
  {
    id: 4,
    name: "Müasir Buket",
    description: "Müxtəlif rəngli güllərdən ibarət müasir dizayn",
    imageUrl: "/bouquets/modern.jpg",
    price: "75 AZN"
  },
  {
    id: 5,
    name: "Müasir Buket",
    description: "Müxtəlif rəngli güllərdən ibarət müasir dizayn",
    imageUrl: "/bouquets/modern.jpg",
    price: "75 AZN"
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
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-500 ease-out rounded-full shadow-lg group hover:shadow-xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm hover:from-white/20 hover:via-white/10 hover:to-white/20"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-600 group-hover:translate-x-0 ease-in-out rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-500 transform group-hover:translate-x-full ease-in-out">
                Gül Kolleksiyamızı Kəşf Et
              </span>
              <span className="relative invisible">Gül Kolleksiyamızı Kəşf Et</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="myContainer">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Biz Kimik</h2>
            <p className="text-lg text-gray-600 mb-8">
              Buketchim inanır ki, hər buket bir hekayə danışır. Peşəkar
              floristlərimiz hər gülü diqqətlə seçir və hər tədbirə  sevinc
              gətirən unikal, mənalı kompozisiyalar yaradır.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {whyUsItems.map((item) => (
                <WhyUsItem
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-20 bg-gray-50">
        <div className="myContainer">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Ən çox satılan buketlərimiz
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {featuredBouquets.map((bouquet) => (
              <FeaturedCard key={bouquet.id} bouquet={bouquet} />
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="myContainer">
          <div className="max-w-5xl mx-auto text-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
                Bizlə danış
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Xüsusi bir tədbir yaxınlaşır? Sizə kömək edək və mükəmməl gül
                kompozisiyası yaradaq.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />

                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  {/* <span className="text-pink-500 mr-3">📱</span> */}
                  Telefon
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                    <span className="text-pink-500">📞</span>
                  </div>
                  <div>
                    {/* <p className="text-sm text-gray-500 text-left">Əlaqə nömrəsi</p> */}
                    <p className="text-gray-800 font-medium text-xl">055 551 21 02</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />

                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  {/* <span className="text-pink-500 mr-3">✉️</span> */}
                  Email
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                    <span className="text-pink-500">📧</span>
                  </div>
                  <div>
                    {/* <p className="text-sm text-gray-500 text-left">Elektron poçt</p> */}
                    <p className="text-gray-800 font-medium text-xl">buketchim@gamil.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />

                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  Instagram
                </h3>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
                    <span className="text-pink-500">📸</span>
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium text-xl">@buketchim</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
