"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";
import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Çatdırılma müddəti nə qədərdir?",
    answer: "Bakı şəhəri daxilində çatdırılma 1-2 saat ərzində həyata keçirilir. Şəhər kənarı bölgələr üçün çatdırılma müddəti 2-3 saat ola bilər."
  },
  {
    id: 2,
    question: "Ödəniş üsulları hansılardır?",
    answer: "Nağd ödəniş, kartla ödəniş və online ödəniş (Bakıcell, Nağd) üsullarından istifadə edə bilərsiniz. Çatdırılma zamanı nağd ödəniş də mümkündür."
  },
  {
    id: 3,
    question: "Xüsusi tədbirlər üçün sifariş verə bilərəmmi?",
    answer: "Bəli, toy, doğum günü, yubiley və digər xüsusi tədbirlər üçün xüsusi buketlər hazırlayırıq. Əvvəlcədən sifariş verməyinizi tövsiyə edirik."
  },
  {
    id: 4,
    question: "Güllərin təravət müddəti nə qədərdir?",
    answer: "Biz yalnız ən təravətli güllərlə işləyirik. Buketlərin təravət müddəti 5-7 gün ola bilər. Düzgün qayğı göstərilməsi şərtilə bu müddət daha da uzana bilər."
  },
  {
    id: 5,
    question: "Buketlərin qayğısına necə qalmalıyıq?",
    answer: "Buketləri günəş şüalarından uzaq, sərin yerdə saxlayın. Hər gün suyunu dəyişin və güllərin saplarını kəsin. Bu, güllərin təravətini daha uzun müddət qoruyub saxlayacaq."
  },
  {
    id: 6,
    question: "Sifarişi ləğv edə bilərəmmi?",
    answer: "Bəli, çatdırılma vaxtından ən az 2 saat əvvəl sifarişi ləğv edə bilərsiniz. Ləğv edilmiş sifarişlər üçün ödəniş qaytarılır."
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Tez-tez soruşulan suallar
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Müştərilərimizin ən çox soruşduğu suallar və cavabları
          </p>
        </FadeIn>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <SlideUp key={faq.id} delay={0.1 * index}>
              <div 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-100"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left focus:outline-none group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                    <span className={`transform transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}>
                      <svg 
                        className="w-6 h-6 text-gray-500 group-hover:text-pink-500 transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                </button>
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    openId === faq.id ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
} 