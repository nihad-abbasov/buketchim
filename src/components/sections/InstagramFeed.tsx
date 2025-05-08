"use client";

import { FadeIn, SlideUp } from "@/components/animations/AnimationComponents";
import Image from "next/image";

interface InstagramPost {
    id: number;
    image: string;
    title: string;
    category: string;
    likes: number;
}

const posts: InstagramPost[] = [
    {
        id: 1,
        image: "/instagram/post1.jpg",
        title: "Romantik Toy Buketi",
        category: "Toy",
        likes: 245
    },
    {
        id: 2,
        image: "/instagram/post2.jpg",
        title: "Doğum Günü Buketi",
        category: "Xüsusi Tədbir",
        likes: 189
    },
    {
        id: 3,
        image: "/instagram/post3.jpg",
        title: "Yubiley Buketi",
        category: "Xüsusi Tədbir",
        likes: 156
    },
    {
        id: 4,
        image: "/instagram/post2.jpg",
        title: "Klassik Gül Buketi",
        category: "Klassik",
        likes: 278
    },
    {
        id: 5,
        image: "/instagram/post3.jpg",
        title: "Müasir Buket",
        category: "Müasir",
        likes: 312
    },
    {
        id: 6,
        image: "/instagram/post1.jpg",
        title: "Pastel Buket",
        category: "Müasir",
        likes: 198
    }
];

export default function InstagramFeed() {
    return (
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Instagram Qalereyası
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Ən son işlərimiz və müştəri təəssüratları
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                    {posts.map((post, index) => (
                        <SlideUp key={post.id} delay={0.1 * index}>
                            <div className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer">
                                {/* Image */}
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-white px-3 py-1 rounded-full" style={{
                                                background: "linear-gradient(90deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)"
                                            }}>
                                                {post.category}
                                            </span>
                                            <div className="flex items-center text-white/90">
                                                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                </svg>
                                                <span className="text-sm">{post.likes}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {post.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Instagram Icon */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                            </div>
                        </SlideUp>
                    ))}
                </div>

                {/* Instagram Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com/buketchim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white rounded-full font-semibold hover:from-[#f58529]/90 hover:via-[#dd2a7b]/90 hover:to-[#8134af]/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Instagram-da bizi izləyin
                    </a>
                </div>
            </div>
        </section>
    );
} 