"use client";
import React from "react";
import Image from "next/image";
import aboutimg from "@/assets/images/about-img.png";
import { Users, TrendingUp, BadgeCheck, Clock } from "lucide-react";

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
      label: "Loans Disbursed",
    },
    {
      id: 3,
      icon: <BadgeCheck className="w-10 h-10 text-[#1C9833]" />,
      value: "4.9/5",
      label: "Customer Rating",
    },

    {
      id: 4,
      icon: <Clock className="w-10 h-10 text-[#1C9833]"/>,
      value: "<5 Min",
      label: "Avg. Approval Time", 
    },

  ];

  return (
    <section>
        {/* Cards */}
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            {CardData.map((item, index) => (
                <div key={index} className=" rounded-2xl p-8 text-center hover:scale-105 transition">
                  {/* ICON */}
                  <div className="flex justify-center mb-4">{item.icon}</div>

                  {/* VALUE */}
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {item.value}
                  </h2>

                  {/* LABEL */}
                  <p className="mt-2 text-gray-500">{item.label}</p>
                </div>
              
            ))}
          </div>
          <hr className="w-full mt-7"/>
        </div>
      
    </section>
  );
};

export default AboutContent;
