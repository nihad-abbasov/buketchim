"use client";

import { fadeIn, scaleIn } from '@/components/motion/MotionComponents';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactItem from '../components/ui/ContactItem';
import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ContactItem {
  icon: IconType;
  title: string;
  content: string;
}

const contactItems: ContactItem[] = [
  {
    icon: FaPhone,
    title: "Telefon",
    content: "055 551 21 02"
  },
  {
    icon: FaEnvelope,
    title: "Email",
    content: "buketchim@gamil.com"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Ünvan",
    content: "Bakı şəhəri"
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Əlaqə
            </h1>
            <p className="text-xl text-white">
              Sizinlə əlaqə saxlamaqdan məmnun olarıq
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="myContainer">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Bizimlə Əlaqə</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors font-medium"
                >
                  Göndər
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={scaleIn}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Əlaqə Məlumatları</h2>
                <ul className="space-y-4">
                  {contactItems.map((item, index) => (
                    <ContactItem
                      key={index}
                      icon={item.icon}
                      title={item.title}
                      content={item.content}
                    />
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.0077128905477!2d49.87056962625365!3d40.40209752438401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d0032182725%3A0xc724405e3ad6765!2sNariman%20Narimanov%20park!5e1!3m2!1sen!2saz!4v1744788293225!5m2!1sen!2saz"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 