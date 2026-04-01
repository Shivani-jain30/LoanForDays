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
    { label: "Loan Repayment", href: "/LoanRepayment" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contactus" },
    { label: "Apply Now", href: "/applynow" },
  ];

  return (
    <header className="w-full border">
      <div className="max-W-7xl px-7 py-4 border">
        {/* MAIN ROW */}
        <div className="flex justify-between items-center">
          {/* Logo  dark mode*/}
          <Image src={logo} height={300} width={300} alt="logo" className="hidden dark:block"/>
          {/* logo light mode */}
          <Image src={logo2} height={300} width={300} alt="logo" className="block dark:hidden" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-7">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            <ModeToggle />

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
        </div>
      </div>
    </header>
  );
};

export default Header;
