"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/assets/images/work1.png"
import img2 from "@/assets/images/work2.png"
import img3 from "@/assets/images/work3.png"

const steps = [
  {
    id: "1",
    value: "You Apply",
    label:
      "Fill a simple form in under 2 minutes-- just basic details, no lengthy documents.",
    image: img1,
  },
  {
    id: "2",
    value: "We verify",
    label:
      "Our AI-powered system checks your eligibility instantly using smart risk assessment.",
    image: img2,
  },
  {
    id: "3",
    value: "You Get Cash",
    label:
      "Once approved, money is transferred directly to your bank account within minutes.",
    image: img3,
  },
];

export default function Stepper() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
        <div className="container">
          <h1  className="text-xl md:text-4xl font-bold mt-7 text-center">How We work</h1>
<p className="mt-4 leading-relaxed mb-4 text-center ">Our process is designed to be simple, fast, and completely digital.</p>
          
    <div className="grid md:grid-cols-2 gap-10 items-center mt-10">


      {/* LEFT SIDE */}
      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={step.id}
            onMouseEnter={() => setActiveStep(index)}
            className={`p-5 rounded-xl border transition-all duration-500 cursor-pointer
              ${
                activeStep === index
                  ? "border-green-500 scale-105 shadow-lg bg-bg-card"
                  : "border-gray-300"
              }
            `}
          >
            <h3 className="text-lg font-semibold">{step.value}</h3>
            <p className="text-sm text-gray-500">{step.label}</p>
          </div>
        ))}

        {/* Progress Bar */}
        <div className="mt-5">
          <p className="text-sm mb-2">
            {activeStep + 1}/{steps.length} completed
          </p>
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-green-500 rounded-full transition-all duration-500"
              style={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-full h-[400px]">
        <Image
          src={steps[activeStep].image}
          alt="step image"
          fill
          className="object-contain transition-all duration-500"
        />
      </div>
    </div>
    </div>
    </section>
  );
}
