import React from "react";

interface WhyUsItemProps {
  icon: string;
  title: string;
  description: string;
}

const WhyUsItem: React.FC<WhyUsItemProps> = ({ icon, title, description }) => {
  return (
    <li className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Gradient background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />
      
      <div className="relative flex flex-col items-center text-center">
        {/* Icon container with gradient border */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative w-20 h-20 flex items-center justify-center bg-white rounded-full shadow-lg">
            <span className="text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {icon}
            </span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </li>
  );
};

export default WhyUsItem; 