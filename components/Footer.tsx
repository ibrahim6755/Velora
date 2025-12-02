import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black max-w-5xl mx-auto py-12 flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-5 border-b border-white my-4 pb-8">
          <div className="p-3 m-3">
            <Link href={"/"}>
              {" "}
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={120}
                height={120}
                className="cursor-pointer bg-transparent rounded-2xl"
              />
            </Link>
            <h1 className="text-white text-xs mb-7 mt-4">
              Classic looks for Men, Women & Kids.
            </h1>
            <div className="flex gap-4 items-center">
              <Instagram
                size={18}
                className="hover:text-custom-red cursor-pointer"
              />{" "}
              <Facebook
                className="hover:text-custom-red cursor-pointer"
                size={18}
              />
              <Linkedin
                className="hover:text-custom-red cursor-pointer"
                size={18}
              />
              <Twitter
                className="hover:text-custom-red cursor-pointer"
                size={18}
              />
            </div>
          </div>
          <div className="p-3 m-3 md:block flex flex-col justify-center items-center">
            <h1 className="text-white font-bold mb-6">Quick Links</h1>
            <ul>
              <Link href={"/"}>
                <li className="my-3 text-xs text-custom-red font-medium">
                  Home
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Shop
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  About
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-3 m-3 md:block flex flex-col justify-center items-center">
            <h1 className="text-white font-bold mb-6">Shop</h1>
            <ul>
              <Link href={"/"}>
                <li className="my-3 text-xs hover:text-custom-red font-medium">
                  Mens Wear
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Womes Wear
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Kids Wear
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Accessories
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-3 m-3 md:block flex flex-col justify-center items-center">
            <h1 className="text-white font-bold mb-6">Help</h1>
            <ul>
              <Link href={"/"}>
                <li className="my-3 text-xs hover:text-custom-red font-medium">
                  FAQs
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Return Policy
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Order Status
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Shipping & Delivery
                </li>
              </Link>
            </ul>
          </div>
          <div className="p-3 m-3 md:block flex flex-col justify-center items-center">
            <h1 className="text-white font-bold mb-6">My Profile</h1>
            <ul>
              <Link href={"/"}>
                <li className="my-3 text-xs hover:text-custom-red font-medium">
                  My Account
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Track Order
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  My Cart
                </li>
              </Link>
              <Link href={"/"}>
                <li className="my-3 text-white text-xs font-medium hover:text-custom-red transition-all duration-300">
                  Order History
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row w-full">
          <span className="text-white text-sm my-4 md:m-0">
            copyright © 2025 Velora All rights reserved.
          </span>
          <div className="">
            <Image
              src={"/images/payments.png"}
              alt="payments"
              width={240}
              height={240}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
