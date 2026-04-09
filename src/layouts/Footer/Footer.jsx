import React from "react";
import Image from "next/image";
import logo1 from "@/assets/images/loanfordays logo-01.png";
import logo2 from "@/assets/images/loanfordays logo-02.png";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Mail, PhoneCall, User } from "lucide-react";


const Footer = () => {
  const itemsLinks = [
    {
      title: "QUICKS LINKS",
      Links: [
        { label: "Home", href: "/" },
        { label: "About", href: "about-us" },
        { label: "LoanRepayment", href: "loan-repayment" },
        { label: "Blog", href: "blog" },
        { label: "ContactUs", href: "contact-us" },
        { label: "FAQ", href: "faq" },
        { label: "Complaint", href: "complaint" },
      ],
    },
    {
      title: "LEGAL",
      Links: [
        { label: "Terms&Conditions", href: "terms-&-conditions" },
        { label: "PrivacyPolicy", href: "privacy-policy" },
        { label: "Disclaimer", href: "disclaimer" },
        { label: "RefundPolicy", href: "refund-policy" },
        { label: "Grievance", href: "grievance" },
        { label: "Disclosure", href: "disclosure" },
      ],
    },
  ];
  return (
    <footer
      className="relative overflow-hidden 
bg-[linear-gradient(135deg,#0f1f14,#13281a,#0f1f14)] mt-30"
    >
      <div className="container relative z-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 mb-10 ">
          <div>
            {/* Logo */}
            
            <Image
              src={logo1}
              alt="logo"
              width={200}
              height={200}
              
            ></Image>

            {/* content */}

            <p className="text-gray-400 text-sm">
              Your trusted partner for instant short-term digital loans. Fast,
              transparent, and secure.
            </p>

            {/* icons */}
            <div className="flex items-center text-3xl gap-4 mt-5 ">
              <RiFacebookFill className="rounded-2xl bg-bg-card p-1 hover:text-green-600" />
              <RiInstagramLine className="rounded-2xl bg-bg-card p-1 hover:text-green-600" />
              <RiLinkedinFill className="rounded-2xl bg-bg-card p-1 hover:text-green-600" />
              <RiTwitterFill className="rounded-2xl bg-bg-card p-1 hover:text-green-600" />
            </div>
          </div>

          {/* Quick links  and legal links*/}

          {itemsLinks.map((item, i) => (
            <div key={i}>
              <h3 className="font-bold text-gray-400 mt-3 ml-5">{item.title}</h3>

              {item.Links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block hover:text-green-600 transition ml-5 text-sm mb-2 mt-2 text-gray-400 "
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          {/*Contact */}
          <div>
            <h2 className=" mb-3 font-bold text-gray-400 ml-5">CONTACT</h2>

            {/* Address */}
            <div className="flex items-start gap-2 mb-2 ">
              <User size={50} className="text-4xl text-green-600 p-1 " />
              <p className="text-gray-400">
                4th Floor, Build High Construction Tower 2, Rama Road, Moti
                Nagar, Delhi 110015
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 mb-2 ">
              <Mail  className="text-3xl text-green-600 p-1  " />
              <p className="text-gray-400">support@loanfordays.com</p>
            </div>

            {/* Phone / Timing */}
            <div className="flex items-center gap-2 ">
              <PhoneCall className="text-3xl text-green-600 p-1 " />
              <p className="text-gray-400">Mon–Sat, 10 AM – 6 PM</p>
            </div>
          </div>
        </div>
        <hr className="text-gray-800" />
        <p className="mt-8  text-center mb-3 text-sm text-gray-400">
          © 2026 LoanForDays. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
