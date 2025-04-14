"use client";

import { fadeIn, scaleIn } from '@/components/motion/MotionComponents';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Aysel Əliyeva',
    role: 'Baş Florist',
    image: '/team/aysel.jpg',
    description: '10 illik təcrübəsi ilə hər buketdə özünün bənzərsiz bədii görüşünü əks etdirir.'
  },
  {
    id: 2,
    name: 'Nərminə Hüseynova',
    role: 'Dizayner',
    image: '/team/narmine.jpg',
    description: 'Müasir və klassik üslubları harmoniya ilə birləşdirərək unikal buketlər yaradır.'
  },
  {
    id: 3,
    name: 'Leyla Quliyeva',
    role: 'Müştəri Xidmətləri',
    image: '/team/leyla.jpg',
    description: 'Hər müştərinin ehtiyaclarını anlamaq və onlara mükəmməl xidmət göstərmək üçün çalışır.'
  }
];


const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="About Buketchim"
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
              Buketchim Haqqında
            </h1>
            <p className="text-xl text-white">
              Güllərlə həyatınıza rəng və gözəllik gətiririk
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="myContainer">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bizim Hekayəmiz</h2>
            <p className="text-lg text-gray-600 mb-8">
              2024-cü ildə yaradılan Buketchim, güllərlə insanların həyatına gözəllik və sevinc gətirmək məqsədi ilə yola çıxdı. 
              Hər bir buketimizdə diqqətlə seçilmiş güllər və zərif düzülüşlərlə müştərilərimizin xüsusi anlarını daha da xüsusi edirik.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="myContainer">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Komandamız</h2>
            <p className="text-lg text-gray-600">
              Hər biri öz sahəsində peşəkar olan komandamız
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={scaleIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-pink-500 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 