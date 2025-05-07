"use client";

import FeaturedCard from "@/components/ui/FeaturedCard";
import WhyUsItem from "@/components/ui/WhyUsItem";
import { useRouter } from "next/navigation";
import { Bouquet } from "@/types/bouquet";
import { useState } from "react";
import {
  PageTransition,
  FadeIn,
  SlideUp,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverScale,
} from "@/components/animations/AnimationComponents";
import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const [, setActiveFilter] = useState("all");

  const featuredBouquets: Bouquet[] = [
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
  ];

  const whyUsItems = [
    {
      title: "Təravətli Güllər",
      description: "Hər gün təzə güllərlə işləyirik",
      icon: "🌹",
    },
    {
      title: "Professional Dizayn",
      description: "Hər buket unikal və gözəldir",
      icon: "✨",
    },
    {
      title: "Sürətli Çatdırılma",
      description: "Bakı şəhəri daxilində sürətli çatdırılma",
      icon: "🚚",
    },
  ];

  return (
    <PageTransition>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="Beautiful flower arrangements"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Buketçim
              </h1>
            </FadeIn>
            <SlideUp delay={0.4}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Gözəl buketlər, xüsusi anlar
              </p>
            </SlideUp>
            <SlideUp delay={0.6}>
              <button
                onClick={() => router.push("/catalog")}
                className="bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition-colors"
              >
                Kataloqa bax
              </button>
            </SlideUp>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Seçilmiş Buketlər
              </h2>
            </FadeIn>
            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
                {featuredBouquets.map((bouquet, index) => (
                  <StaggerItem key={bouquet.id}>
                    <HoverScale>
                      <FeaturedCard bouquet={bouquet} />
                    </HoverScale>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Niyə Biz?
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyUsItems.map((item, index) => (
                <SlideInLeft key={index} delay={0.2 * index}>
                  <WhyUsItem {...item} />
                </SlideInLeft>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <SlideInRight>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Xüsusi Təkliflər
              </h2>
            </SlideInRight>
            <SlideInRight delay={0.2}>
              <p className="text-xl mb-8">
                İndi sifariş verin və 10% endirim qazanın
              </p>
            </SlideInRight>
            <SlideInRight delay={0.4}>
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Əlaqə
              </button>
            </SlideInRight>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
