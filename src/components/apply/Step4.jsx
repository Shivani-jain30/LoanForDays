"use client";

import { IndianRupee, Calendar } from "lucide-react";

const Step4 = ({ form, handleChange, nextStep, prevStep }) => {
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
          <IndianRupee className="text-white" size={28} />
        </div>

        <h2 className="text-2xl font-semibold">Loan Details</h2>
        <p className="text-gray-500">
          We currently offer personal loans for salaried individuals.
        </p>
      </div>

      {/* Info Section */}
      <div className="flex justify-between  p-4 rounded-lg">
        <div className="bg-bg-card w-[250px] h-[60px] p-2 rounded-xl ">
          <p className="text-sm text-gray-500">Employment type</p>
          <h3 className="font-semibold">Salaried</h3>
        </div>

        <div className="bg-bg-card w-[250] h-[60] p-2 rounded-xl">
          <p className="text-sm text-gray-500">Loan Type</p>
          <h3 className="font-semibold">Personal Loan</h3>
        </div>
      </div>

      {/* Loan Amount */}
      <div>
        <p className="text-sm mb-1">Monthly Salary *</p>
        <div className="relative">
          <IndianRupee
            className="absolute left-2 top-[35%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <input
            type="number"
            name="salary"
            value={form.salary || ""}
            onChange={handleChange}
            placeholder="e.g 30,000"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
          <p className="text-xs text-gray-500">Minimum salary: ₹15,000</p>
        </div>
      </div>

      <div>
        <p className="text-sm mb-1">Loan Amount Required *</p>
        <div className="relative">
          <IndianRupee
            className="absolute left-2 top-[35%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <input
            type="number"
            name="loanAmount"
            value={form.loanAmount || ""}
            onChange={handleChange}
            placeholder="e.g 20,000"
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
          <p className="text-xs text-gray-500"> ₹2,000 - ₹30,000</p>
        </div>
      </div>

      <div>
        <p className="text-sm mb-1">Repayment Tenure (Days) *</p>
        <div className="relative">
          <Calendar
            className="absolute left-2 top-[35%] -translate-y-1/2 text-gray-400 "
            size={18}
          />
          <input
            type="number"
            name="tenure"
            value={form.tenure || ""}
            onChange={handleChange}
            placeholder="e.g 15.."
            className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm"
            required
          />
          <p className="text-xs text-gray-500">
            5-30days, One time Repayment after tenure ends
          </p>
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

export default Step4;
