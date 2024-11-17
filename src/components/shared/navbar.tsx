"use client";

import Link from "next/link";
import { CalendarRange, CircleDollarSign, Settings, Users } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  if (pathname === "/auth") return null;

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  shadow-lg">
      <div className="flex justify-between items-center px-5 py-4">
        <Link
          href="/"
          className={`flex flex-col items-center ${
            isActive("/") ? "text-gray-500 scale-125 cursor-not-allowed" : ""
          }`}
        >
          <CalendarRange size={32} />
        </Link>

        <Link href="/asdasd" className="flex flex-col items-center">
          <Users size={32} />
        </Link>

        <Link href="/asdasad" className="flex flex-col items-center">
          <CircleDollarSign size={32} />
        </Link>

        <Link
          href="/profile"
          className={`flex flex-col items-center ${
            isActive("/profile") ? "text-gray-400 cursor-not-allowed" : ""
          }`}
        >
          <Settings size={32} />
        </Link>
      </div>
    </div>
  );
};
