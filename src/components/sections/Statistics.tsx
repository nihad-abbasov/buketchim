"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";
import { useEffect, useState } from "react";

interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  {
    id: 1,
    number: 1000,
    suffix: "+",
    label: "Məmnun Müştəri",
    icon: "😊",
  },
  {
    id: 2,
    number: 5,
    suffix: "+",
    label: "İllik Təcrübə",
    icon: "⭐",
  },
  {
    id: 3,
    number: 50,
    suffix: "+",
    label: "Buket Növü",
    icon: "🌹",
  },
  {
    id: 4,
    number: 24,
    suffix: "/7",
    label: "Xidmət",
    icon: "⏰",
  },
];

const Counter = ({ end, suffix, duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Göstəricilərimiz
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Buketchim olaraq müştərilərimizə ən yaxşı xidməti göstərmək üçün çalışırıq
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <SlideUp key={stat.id} delay={0.2 * index}>
              <div className="relative bg-gradient-to-br from-pink-100 via-white to-purple-100 rounded-3xl p-8 shadow-2xl hover:shadow-pink-200 transition-all duration-300 text-center group overflow-hidden border border-pink-100 hover:border-pink-300">
                {/* Animated Glow Ring */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-tr from-pink-300 via-purple-200 to-pink-100 opacity-30 rounded-full blur-2xl z-0 animate-pulse" />
                {/* Decorative corner gradients */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-pink-200 to-transparent rounded-bl-full opacity-60" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-200 to-transparent rounded-tr-full opacity-60" />

                {/* Icon with glass effect */}
                <div className="relative z-10 flex items-center justify-center mb-6">
                  <div className="bg-white/70 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-pink-200 group-hover:scale-110 group-hover:border-pink-400 transition-all duration-300">
                    <span className="text-4xl">{stat.icon}</span>
                  </div>
                </div>
                {/* Animated Counter */}
                <div className="mb-2 relative z-10">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </div>
                {/* Label with accent underline */}
                <p className="text-gray-700 font-semibold text-lg tracking-wide relative z-10">
                  {stat.label}
                  <span className="block mx-auto mt-2 w-8 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
                </p>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
} 