import React, { ButtonHTMLAttributes } from "react";

interface GalleryFilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const GalleryFilterButton: React.FC<GalleryFilterButtonProps> = ({
  category,
  isSelected,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`px-6 py-2 rounded-full transition-all duration-300 ${isSelected
          ? "bg-pink-500 text-white"
          : "bg-white text-gray-700 hover:bg-gray-100 cursor-pointer"
        }`}
    >
      {category}
    </button>
  );
};

export default GalleryFilterButton;