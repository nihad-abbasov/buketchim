"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const steps: ProcessStep[] = [
    {
        id: 1,
        title: "Sifariş",
        description: "Veb saytımız və ya WhatsApp vasitəsilə sifariş verin. İstədiyiniz buket növünü və çatdırılma tarixini seçin.",
        icon: "📱"
    },
    {
        id: 2,
        title: "Dizayn Məsləhəti",
        description: "Professional floristlərimiz sizinlə əlaqə saxlayaraq, sifarişiniz haqqında ətraflı məlumat alacaq və tövsiyələr verəcək.",
        icon: "💭"
    },
    {
        id: 3,
        title: "Yaradılış Prosesi",
        description: "Təcrübəli floristlərimiz seçilmiş ən təravətli güllərlə unikal buketinizi hazırlayır.",
        icon: "✨"
    },
    {
        id: 4,
        title: "Çatdırılma",
        description: "Buketiniz qoruyucu qablaşdırmada, təyin olunmuş vaxtda və ünvanda çatdırılır.",
        icon: "🚚"
    }
];

export default function Process() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-pink-50">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Necə İşləyirik?
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Buketçim ilə sifariş prosesi sadə və rahatdır
                    </p>
                </FadeIn>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 transform -translate-y-1/2" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <SlideUp key={step.id} delay={0.2 * index}>
                                <div className="relative flex flex-col items-center group h-full">
                                    {/* Animated Step Number with Glow */}
                                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                                        <div className="relative flex items-center justify-center">
                                            <span className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 via-purple-400 to-pink-400 shadow-lg flex items-center justify-center text-white font-bold text-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                                {step.id}
                                            </span>
                                            {/* Glow effect */}
                                            <span className="absolute w-16 h-16 rounded-full bg-pink-200 opacity-30 blur-xl group-hover:opacity-50 transition-all duration-300"></span>
                                        </div>
                                    </div>

                                    {/* Step Card */}
                                    <div className="relative bg-white rounded-3xl p-8 pt-14 shadow-2xl hover:shadow-pink-200 transition-all duration-300 border border-pink-100 h-full w-full flex flex-col items-center text-center group overflow-hidden">
                                        {/* Decorative gradient ring */}
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-pink-200 via-purple-100 to-pink-100 opacity-40 rounded-full blur-2xl z-0 animate-pulse pointer-events-none" />

                                        {/* Icon with glass effect */}
                                        <div className="relative z-10 flex items-center justify-center mb-4">
                                            <div className="bg-white/70 backdrop-blur-md rounded-full w-16 h-16 flex items-center justify-center shadow-lg border-2 border-pink-200 group-hover:scale-110 group-hover:border-pink-400 transition-all duration-300">
                                                <span className="text-3xl md:text-4xl">{step.icon}</span>
                                            </div>
                                        </div>

                                        {/* Title with accent underline */}
                                        <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 relative z-10">
                                            {step.title}
                                            <span className="block mx-auto mt-2 w-8 h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-70 group-hover:opacity-100 transition-all duration-300"></span>
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed relative z-10">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </SlideUp>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-16 text-center">
                    <FadeIn>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hər addımda sizinlə əlaqədə oluruq və sifarişinizin mükəmməl olması üçün əlimizdən gələni edirik.
                            Suallarınız varsa, bizimlə əlaqə saxlayın.
                        </p>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
} 