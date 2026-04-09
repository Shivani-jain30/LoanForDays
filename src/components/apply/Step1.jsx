"use client";

import { User, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Step1 = ({ form, handleChange, nextStep }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep(); // 👉 Step2 open
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-green-600 w-16 h-16 flex items-center justify-center mb-4">
          <User size={30} className="text-white" />
        </div>

        <h2 className="text-xl font-semibold">Apply for a Loan</h2>
        <p className="text-gray-500 mt-2">
          Fill in your basic details to get started
        </p>
      </div>

      {/* Name */}
      <div>
        <p className="text-sm mb-1 mt-6">Full Name*</p>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <p className="text-sm mb-1">Email Address*</p>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <p className="text-sm mb-1">Mobile Number*</p>
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="tel"
            name="tel"
            value={form.tel}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      <button className="bg-green-600 text-white w-full rounded-lg py-2 hover:bg-green-700">
        Submit & Get OTP →
      </button>

      <p className="text-xs text-gray-500 text-center">
        By submitting, you agree to our{" "}
        <Link href="/terms" className="underline text-green-600">Terms</Link> &{" "}
        <Link href="/privacy" className="underline text-green-600">Privacy</Link>
      </p>

    </form>
  );
};

export default Step1;






























































































































