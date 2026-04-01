import React from "react";
import Image from "next/image";
import Link from "next/link";


const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="relative w-full h-[380px] flex items-center justify-center overflow-hidden bg-black">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#061a0b] to-black opacity-90"></div>

          {/* GRAPH LINES */}
          <svg className="absolute inset-0 w-full h-full opacity-50">
            <path
              d="M0 220 Q 150 120 300 200 T 600 180 T 900 140 T 1200 240"
              fill="none"
              stroke="#8BBE1F"
              strokeWidth="2"
              className="graph-line"
            />
            <path
              d="M0 260 Q 200 180 400 240 T 800 200 T 1200 280"
              fill="none"
              stroke="#1C9833"
              strokeWidth="1.5"
              className="graph-line delay"
            />
          </svg>

          {/* GLOW BALL */}
          <div className="glow-ball"></div>

          {/* STARS */}
          <div className="stars"></div>

          {/* CONTENT */}
          <div className="relative text-center z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              About
            </h1>

            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Empowering your financial journey with transparent, flexible, and
              accessible lending solutions
            </p>

              <ul className="flex text-center  justify-center gap-3 items-center mt-3 text-sm text-gray-400 tracking-wider">
                <li><Link href="/">HOME / </Link></li>
                <li><Link href="/about-us">ABOUT US</Link></li>
                </ul>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
