"use client";

import { LocationEdit, IndianRupee } from "lucide-react";

const Step5 = ({ form, handleChange, nextStep, prevStep }) => {
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
          <LocationEdit className="text-white" size={28} />
        </div>

        <h2 className="text-2xl font-semibold">Address Details</h2>
        <p className="text-gray-500">Your current and permanent address</p>
      </div>

      {/* state Section */}
      <div className="flex justify-between  p-4 rounded-lg">
        <div className="relative">
          <LocationEdit
            className="absolute left-2 top-[70%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <p>State*</p>
          <input
            type="text"
            name="state"
            value={form.state || ""}
            onChange={handleChange}
            placeholder="Select State"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>

        <div className="relative">
          <LocationEdit
            className="absolute left-2 top-[70%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <p>City*</p>
          <input
            type="text"
            name="city"
            value={form.city || ""}
            onChange={handleChange}
            placeholder="Select State"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <p className="text-sm mb-1">Current Address *</p>
        <div className="relative">
          <IndianRupee
            className="absolute left-2 top-[35%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <input
            type="text"
            name="address"
            value={form.address || ""}
            onChange={handleChange}
            placeholder="Enter your current Address"
            className="w-full pl-5 pr-2 py-2 border rounded-lg text-sm"
            required
          />
          </div>
        
      </div>

      <div>
        <p className="text-sm mb-1">Permanent Address*</p>
        <div className="relative">
          
          
          
          <input
            type="text"
            name="permanentAddress"
            value={form.permanentAddress || ""}
            onChange={handleChange}
            placeholder="Enter your permanentAddress"
            className="w-full pl-5 pr-3 py-2 border rounded-lg text-sm"
            required
          />
          
        </div>
      </div>

      <div>
        <p className="text-sm mb-1">Pincode *</p>
        <div className="relative">
          <LocationEdit
            className="absolute left-2 top-[45%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <input
            type="pincode"
            name="pincode"
            value={form.pincode || ""}
            onChange={handleChange}
            placeholder="Enter 6- digit pin code"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
          
          
          
        </div>
      </div>

      {/* Continue Button */}
      <button
        type="submit"
        className="bg-green-600 text-white w-full py-3 rounded-lg hover:bg-green-700"
      >
        Continue →
      </button>
    </form>
  );
};

export default Step5;
