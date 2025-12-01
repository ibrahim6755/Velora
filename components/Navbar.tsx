"use client";

import { NavItems } from "@/data";
import { CircleUser, Menu, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [navToggler, setNavToggler] = useState(false);

  const handleNavbar = () => {
    setNavToggler(!navToggler);
  };
  return (
    <nav className=" p-3 bg-white w-full relative">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <div>
          <Link href={"/"}>
            {" "}
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={120}
              height={120}
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* LINKS */}
        <div className="hidden md:flex">
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-sm ${
                pathname === item.link
                  ? "text-custom-red font-semibold"
                  : "text-gray-600"
              } mx-4 transition-all transform duration-300 hover:text-custom-red`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        {/* CART */}
        <div className="flex items-center gap-4">
          <Link href={"#"}>
            <CircleUser
              size={22}
              strokeWidth={1.25}
              className="text-black cursor-pointer"
            />
          </Link>
          <Link href={"#"} className="relative">
            <ShoppingBag
              size={22}
              strokeWidth={1.25}
              className="text-black cursor-pointer "
            />
            <span className="absolute -top-2 -right-2 text-white px-1 text-xs h-4 w-4 rounded-full bg-black">
              0
            </span>
          </Link>
          <button className="md:hidden" onClick={handleNavbar}>
            <Menu
              size={22}
              strokeWidth={0.75}
              className="text-black cursor-pointer "
            />
          </button>
        </div>

        {/* MOBILE NAV */}
        <div
          className={`bg-white z-[100] p-4 md:hidden flex flex-col w-[95%] absolute top-18 left-[2.5%] shadow-lg rounded-md transition-all duration-500 ease-out origin-top ${
            navToggler
              ? "scale-y-100 opacity-100 visible"
              : "scale-y-0 opacity-0 invisible"
          }`}
        >
          {NavItems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className={`text-sm ${
                pathname === item.link
                  ? "text-custom-red font-semibold"
                  : "text-gray-600"
              } m-4 transition-all transform duration-300 hover:text-custom-red`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;