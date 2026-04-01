"use client";
import React from "react";
import Image from "next/image";
import aboutimg from "@/assets/images/about-img.png";
import { Users, TrendingUp, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const AboutContent = () => {
  const CardData = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-[#1C9833]" />,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <TrendingUp className="w-10 h-10 text-[#1C9833]" />,
      value: "$ 500M+",
      label: "Loans Approved",
    },
    {
      id: 3,
      icon: <BadgeCheck className="w-10 h-10 text-[#1C9833]" />,
      value: "4.9/5",
      label: "Customer Rating",
    },
  ];

  return (
    <section>
      <div className="container">
        {/* Top Content */}
        <div className="grid md:grid-cols-2 gap-7 items-center max-w-7xl mx-auto px-6 mt-30 ">
          <div>
            <h1 className="text-xl md:text-5xl mt-13 font-bold">
              About LoanForDays
            </h1>
            <p className="mt-4">
              {" "}
              LoanForDays is a modern digital platform designed to make
              borrowing simple, fast, and accessible for everyone. We understand
              that financial needs can arise anytime, and getting a loan
              shouldn’t be complicated. Our platform connects users with
              reliable financial solutions, ensuring a smooth, transparent, and
              hassle-free experience. Whether it’s for personal needs,
              emergencies, or business growth — LoanForDays is here to support
              you every step of the way.{" "}
            </p>
          </div>
          <div className="pr-6 md:pr-12">
            <div className="relative w-[90%] h-[300px] md:h-[350px]">
              <Image
                src={aboutimg}
                alt="aboutimg"
                className="rounded-2xl object-cover mt-6 mr-10"
              />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-5 mt-30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {CardData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[350px] max-h-[300px] mx-auto p-[1.5px] rounded-2xl bg-gradient-to-r from-[#1C9833] to-[#8BBE1F]"
              >
                <div className="bg-white dark:bg-[#111] rounded-2xl p-8 text-center hover:scale-105 transition">
                  {/* ICON */}
                  <div className="flex justify-center mb-4">{item.icon}</div>

                  {/* VALUE */}
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h2>

                  {/* LABEL */}
                  <p className="mt-2 text-gray-500">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
