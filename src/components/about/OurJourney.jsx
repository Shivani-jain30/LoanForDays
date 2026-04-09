"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "@/assets/images/image1.png";
import img2 from "@/assets/images/image2.png";
import img3 from "@/assets/images/image3.png";
import img4 from "@/assets/images/image4 (2).png";

const tabs = ["The idea", "Platform Launch", "50k+ Users", "AI- Powered"];

const CardData = [
  {
    id: "1",
    title: "The idea",
    text: "Identified the gap in quick, small-ticket lending for everyday Indians.",
    image: img1,

  },
  {
    id: "2",
    title: "Platform Launch",
    text: "Launched LoanForDays with a mission to disburse loans in under 10 minutes.",
    image: img2,

  },
  {
    id: "3",
    title: "50k+ Users",
    text: "Crossed 50,000 happy customers with a 95% satisfaction rate.",
    image: img3,
  },
  {
    id: "4",
    title: "AI-Powered",
    text: "Introduced AI-driven risk assessment for faster and fairer approvals.",
    image: img4,
  },
];

export default function OurJourney() {
  const [activeTab, setActiveTab] = useState(0);
  const cardRefs = useRef([]);

  // 🔥 Tab click scroll
  const handleTabClick = (index) => {
    setActiveTab(index);

    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const handleNext = () => {
    if (activeTab < CardData.length - 1) {
      handleTabClick(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 0) {
      handleTabClick(activeTab - 1);
    }
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center mt-20">
          <h1 className="text-xl md:text-3xl font-bold">Our Journey</h1>
          <p className="mt-4 leading-relaxed">
            From a simple idea to serving thousands — here's how we got here.
          </p>
        </div>

        {/* 🔹 TABS */}
        <div className="flex justify-center gap-8 mb-10 mt-10">
          {/* 🔙 LEFT ARROW */}
          <button
            onClick={handlePrev}
            className="p-2 border rounded-full disabled:opacity-30"
            disabled={activeTab === 0}
          >
            <ChevronLeft />
          </button>
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`px-6 py-2 rounded-full border transition-all
              ${
                activeTab === index
                  ? "bg-white text-black"
                  : "border-gray-600 text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}

          {/* 🔜 RIGHT ARROW */}
          <button
            onClick={handleNext}
            className="p-2 border rounded-full disabled:opacity-30"
            disabled={activeTab === CardData.length - 1}
          >
            <ChevronRight />
          </button>
        </div>

        {/* 🔹 SLIDER */}
        <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          <div className="flex">
            {CardData.map((card, index) => (
              <motion.div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="min-w-full snap-center flex justify-center px-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeTab === index ? 1 : 0.5,
                  scale: activeTab === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.4 }}
              >
                {/* CARD */}
                <div className="bg-bg-card  rounded-3xl p-10 flex justify-between w-full max-w-6xl  flex-col md:flex-row items-center gap-10 ">
                  {/* LEFT */}
                  <div className="max-w-[500px]">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="border  rounded-full px-3 py-1">
                        {card.id}
                      </span>
                      <span>{card.title}</span>
                    </div>

                    <h2 className="text-4xl leading-tight">{card.text}</h2>
                  </div>

                  {/* RIGHT */}
                  <div className="  w-[400px] h-[350px] flex items-center justify-center ">
                    <Image 
                    src={card.image} 
                    alt="Journey Image" 
                    className="w-full h-full object-cover rounded-2xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
