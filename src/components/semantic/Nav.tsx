"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItems {
  id: number;
  name: string;
  url: string;
}

const navItems: NavItems[] = [
  { id: 1, name: "Qalareya", url: "/gallery" },
  { id: 2, name: "Haqqımızda", url: "/about" },
  { id: 3, name: "Əlaqə", url: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="w-full flex flex-row items-center gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.url;
          return (
            <li
              key={item.id}
              className={`relative py-2 px-2 ${
                isActive
                  ? "text-pink-500 after:bg-pink-500 after:w-full"
                  : "text-gray-600 hover:text-gray-800 after:bg-black after:w-0"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-200`}
            >
              <Link href={item.url}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
