"use client";
import React, { useState } from "react";
import { Zap, Brain, FileX, Heart } from "lucide-react";

const MakeDifferent = () => {
  const [flipped, setFlipped] = useState(null);
  const CardData1 = [
    {
      id: "1",
      icon: <Zap className="w-10 h-10 text-[#1C9833]" />,
      value: "Money in Minutes",
      label:
        "No waiting for days -- once approved, funds hit your bank account in minutes, not business days.",
    },
    {
      id: "2",
      icon: <Brain className="w-10 h-10 text-[#1C9833]" />,
      value: "Smart AI Decisions",
      label:
        "Our technology understands your profile better than traditional scoring.",
    },
    {
      id: "3",
      icon: <FileX className="w-10 h-10 text-[#1C9833]" />,
      value: "Zero Paperwork",
      label: "Everything is digital. No printouts, no signatures, no courier.",
    },
    {
      id: "4",
      icon: <Heart className="w-10 h-10 text-[#1C9833]" />,
      value: "Built for you",
      label: "Transparent fees, friendly support, and no judgment.",
    },
  ];

  return (
    <section>
      <div className="container">
        {/* Heading */}
        <div className="text-center mt-20">
          <h1 className="text-xl md:text-3xl font-bold">
            What Makes Us Different
          </h1>
          <p className="mt-4 leading-relaxed">
            We're not just another lending app. Here's why people choose us.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-5 mt-15">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CardData1.map((item) => (
              <div
                key={item.id}
                className="group [perspective:1000px]"
                onClick={() => setFlipped(flipped === item.id ? null : item.id)}
              >
                <div
                  className={`relative h-[230px] w-full transition-transform duration-700 
                  [transform-style:preserve-3d] 
                   group-hover:rotate-y-180 
                   ${flipped === item.id ? "rotate-y-180" : ""}`}
                >
                  {/*front */}

                  <div className="absolute w-full h-full backface-hidden bg-bg-card rounded-2xl p-6 text-center flex flex-col justify-center items-center">
                    <div className="mb-4">{item.icon}</div>

                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </h2>
                  </div>

                  {/* BACK */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#1C9833] text-white rounded-2xl p-6 flex items-center justify-center text-center">
                    <p className="text-sm">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeDifferent;
