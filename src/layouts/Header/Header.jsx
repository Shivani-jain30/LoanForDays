"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import logo from "@/assets/images/loanfordays logo-01.png";
import logo2 from "@/assets/images/loanfordays logo-02.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";

const Header = () => {
  const [open, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About ", href: "/about-us" },
    { label: "Loan Repayment", href: "/loan-repayment" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="bg-background shadow-md py-2 sticky top-0 z-50">
      <div className="container">
        {/* MAIN ROW */}
        <div className="flex justify-between items-center">
          <Link href="/">
            {/* Logo  dark mode*/}
            <Image
              src={logo}
              height={300}
              width={300}
              alt="logo"
              className="hidden dark:block"
            />
            {/* logo light mode */}
            <Image
              src={logo2}
              height={300}
              width={300}
              alt="logo"
              className="block dark:hidden"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-7">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <ModeToggle />
            <div className="hidden lg:flex gap-3">
              <Link href="/login" className="border  px-5 py-1  rounded-full hover:bg-green-600 text-whitetransition">
                Login
              </Link>
              <Link href="/apply" className="bg-green-500 text-white px-5 py-1 font-bold rounded-full  transition">
                Apply Now
              </Link>
            </div>

            <button
              className="text-2xl lg:hidden"
              onClick={() => setIsOpen(!open)}
            >
              <Menu />
            </button>
          </div>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[320px] z-50 transform transition-transform duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
          bg-background text-black dark:text-white`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold text-lg">Menu</h2>
            <button onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-4 p-4 text-gray-600 dark:text-gray-400">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-black dark:hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
          {/* buttons */}
          <Link href="/login" className="w-full text-center py-2 rounded-lg"> Login
          </Link>

          <Link
            href="/apply">
            <button className="w-full border py-2 rounded-lg bg-green-500">Apply Now</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
