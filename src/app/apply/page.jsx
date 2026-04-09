"use client";

import { useState } from "react";
import Step1 from "@/components/apply/Step1";
import Step2 from "@/components/apply/Step2";
import Step3 from "@/components/apply/Step3";
import Step4 from "@/components/apply/Step4";
import Step5 from "@/components/apply/Step5";
import Step6 from "@/components/apply/Step6";
import Step7 from "@/components/apply/Step7";

export default function ApplyForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    pan: "",
    aadhaar: "",
    dob: "",
    gender: "",
    employment: "",
    loan: "",
    salary: "",
    loanAmount: "",
    tenure: "",
    state: "",
    city: "",
    address: "",
    permanentAddress: "",
    pincode: "",

    // ✅ FIXED DOCUMENT STRUCTURE
    documents: {
      pancard: null,
      aadharrfront: null,
      aadharrback: null,
      salary1: null,
      salary2: null,
      salary3: null,
      bank: null,
    },
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setForm((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        [name]: files[0], // ✅ file store ho rahi hai
      },
    }));
  };

  const totalSteps = 8;
  const progress = (step / totalSteps) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      
      {/* Progress Bar */}
      <div className="w-[700px] mb-4">
        <div className="w-full bg-gray-300 h-2 rounded">
          
          <div
           
            className="bg-green-600 h-2 rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
            
            
          > </div>
        </div>
      </div>

      {/* Form Box */}
      <div className="w-[700px] border p-7 rounded-2xl shadow-xl">
        
        {step === 1 && (
          <Step1 form={form} handleChange={handleChange} nextStep={nextStep} />
        )}

        {step === 2 && (
          <Step2 form={form} nextStep={nextStep} prevStep={prevStep} />
        )}

        {step === 3 && (
          <Step3 form={form} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        )}

        {step === 4 && (
          <Step4 form={form} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        )}

        {step === 5 && (
          <Step5 form={form} handleChange={handleChange} nextStep={nextStep} prevStep={prevStep} />
        )}

        {step === 6 && (
          <Step6 form={form} handleFileChange={handleFileChange} nextStep={nextStep} prevStep={prevStep} />
        )}

        {step === 7 && (
          <Step7 form={form} nextStep={nextStep} prevStep={prevStep} />
        )}
      </div>
    </div>
  );
}

























































































































