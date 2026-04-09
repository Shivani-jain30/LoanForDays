import React from "react";

export default function AnimatedBg() {
  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-black">
      
      <div className="absolute w-[500px] h-[400px] bg-[#1C9833] rounded-full blur-[150px] opacity-70 animate-pulse top-10 left-10"></div>

      <div className="absolute w-[400px] h-[400px] bg-[#8BBE1F] rounded-full blur-[150px] opacity-70 animate-pulse bottom-10 right-10"></div>

      <div className="text-center mt-30">
        <h1 className="text-white text-4xl font-bold">
          Check Your Repayment
        </h1>
        <p className="mt-4 leading-relaxed text-gray-300">Enter the mobile number you registered with, and we'll show you your loan details and what's due.</p>
      </div>
    </div>
  );
}














