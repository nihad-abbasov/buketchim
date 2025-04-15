import Image from "next/image";
import React from "react";

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    role: string;
    description: string;
    image: string;
  };
}

const TeamMember: React.FC<TeamMemberProps> = ({ member }) => {
  return (
    <li className="bg-white rounded-xl overflow-hidden shadow-lg">
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
    </li>
  );
};

export default TeamMember; 