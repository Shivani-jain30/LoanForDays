"use client";

import { Upload } from "lucide-react";

const Step6 = ({ form, handleFileChange, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* Back */}
      <button type="button" onClick={prevStep}>
        ← Back
      </button>

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl font-semibold">Upload Documents</h2>
        <p className="text-gray-500">
          All documents are required (PDF, JPG, PNG — max 5MB each)
        </p>
      </div>

      {/* PAN */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">PAN Card *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.pancard?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="pancard"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Aadhaar Front */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Aadhaar Front *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.aadharrfront?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="aadharrfront"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Aadhaar Back */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Aadhaar Back *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.aadharrback?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="aadharrback"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Salary 1 */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Salary Slip 1 *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.salary1?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="salary1"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Salary 2 */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Salary Slip 2 *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.salary2?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="salary2"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Salary 3 */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Salary Slip 3 *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.salary3?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="salary3"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Bank */}
      <div className="border p-3 rounded-2xl">
        <p className="text-sm">Bank Statement *</p>
        <label className="flex gap-3 border p-3 rounded-lg cursor-pointer mt-2">
          <Upload size={18} />
          <span>
            {form.documents?.bank?.name || "Click to upload"}
          </span>
          <input
            type="file"
            name="bank"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      {/* Continue */}
      <button
        type="submit"
        className="bg-green-600 text-white w-full py-3 rounded-lg"
      >
        Review Application →
      </button>
    </form>
  );
};

export default Step6;


































































































































































