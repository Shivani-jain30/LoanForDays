"use client";

import { CreditCard, Calendar, User } from "lucide-react";

const Step3 = ({ form, handleChange, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Back */}
      <button
        type="button"
        onClick={prevStep}
        className="text-gray-500 flex items-center gap-2"
      >
        ← Back
      </button>

      {/* Top Section */}
      <div className="flex flex-col items-center text-center">
        <div className="rounded-full bg-green-600 w-16 h-16 flex items-center justify-center mb-4">
          <CreditCard className="text-white" size={28} />
        </div>

        <h2 className="text-2xl font-semibold">Personal Details</h2>
        <p className="text-gray-500">
          Identity & personal information
        </p>
      </div>

      {/* PAN */}
      <div>
        <p className="text-sm mb-1">PAN Number *</p>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="pan"
            value={form.pan || ""}
            onChange={handleChange}
            placeholder="ABCDE1234F"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      {/* Aadhaar */}
      <div>
        <p className="text-sm mb-1">Aadhaar Number *</p>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            name="aadhaar"
            value={form.aadhaar || ""}
            onChange={handleChange}
            placeholder="1234 5678 9012"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      {/* DOB + Gender */}
      <div className="flex gap-4">
        
        {/* DOB */}
        <div className="w-1/2">
          <p className="text-sm mb-1">Date of Birth *</p>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              name="dob"
              value={form.dob || ""}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
              required
            />
          </div>
        </div>

        {/* Gender */}
        <div className="w-1/2">
          <p className="text-sm mb-1">Gender *</p>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select
              name="gender"
              value={form.gender || ""}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <button onClick={nextStep}
        type="submit"
        className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
      >
        Continue →
      </button>
    </form>
  );
};

export default Step3;




























