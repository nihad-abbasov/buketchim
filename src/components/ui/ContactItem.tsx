import React from "react";
import { IconType } from "react-icons";

interface ContactItemProps {
  icon: IconType;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, title, content }) => {
  return (
    <li className="flex items-start space-x-4">
      <div className="text-pink-500 mt-1">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </li>
  );
};

export default ContactItem; 