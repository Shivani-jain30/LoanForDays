"use client";

const Step2 = ({ form, prevStep, nextStep }) => {
  return (
    <div className="text-center space-y-5">

      <h2 className="text-xl font-semibold">Verify OTP</h2>

      <p className="text-gray-500">
        We've sent a 6-digit OTP to <span className="font-medium">{form.email}</span>
      </p>

      <input
        type="text"
        placeholder="Enter OTP"
        className="border p-2 rounded w-full"
      />

      <div className="flex gap-3">
        <button
          onClick={prevStep}
          className="w-1/2 border py-2 rounded"
        >
          Back
        </button>

        <button onClick={nextStep}
          className="w-1/2 bg-green-600 text-white py-2 rounded"
        >
          Verify OTP →
        </button>
      </div>

    </div>
  );
};

export default Step2;
















