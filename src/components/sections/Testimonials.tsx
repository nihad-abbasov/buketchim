"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aynur Məmmədova",
    role: "Müştəri",
    text: "Buketchim ilə işləmək çox xoş təəssürat yaratdı. Güllərin keyfiyyəti və dizaynı mükəmməl idi. Çox təşəkkür edirəm!",
    rating: 5
  },
  {
    id: 2,
    name: "Əli Hüseynov",
    role: "Müştəri",
    text: "Sevgilim üçün sifariş etdiyim buket çox gözəl oldu. Çatdırılma vaxtında və professional şəkildə həyata keçirildi.",
    rating: 5
  },
  {
    id: 3,
    name: "Leyla Əliyeva",
    role: "Müştəri",
    text: "Doğum günü üçün sifariş etdiyim buket hər kəsi heyrətləndirdi. Güllərin təravəti və dizaynı mükəmməl idi.",
    rating: 5
  },
  {
    id: 4,
    name: "Rəşad Məmmədli",
    role: "Müştəri",
    text: "Buketchim-in xidməti və məhsullarının keyfiyyəti mükəmməldir. Mütəmadi müştəriyəm və həmişə razı qalıram.",
    rating: 5
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Müştəri Rəyləri
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Müştərilərimizin bizimlə bağlı fikirləri və təəssüratları bizim üçün çox dəyərlidir
          </p>
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 py-12">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 first:pl-5 last:pr-5"
                >
                  <SlideUp>
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden group">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-50 to-transparent rounded-bl-full opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-50 to-transparent rounded-tr-full opacity-100 transition-opacity duration-500" />

                      {/* Quote icon */}
                      <div className="absolute top-6 right-6 text-pink-100 group-hover:text-pink-200 transition-colors duration-300">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <div className="relative">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        </div>

                        <p className="text-gray-600 leading-relaxed relative z-10">
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </SlideUp>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
} 