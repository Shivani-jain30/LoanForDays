"use client";

const Step7 = ({ form, prevStep, nextStep }) => {
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
        <h2 className="text-xl font-semibold">Review & Submit</h2>
        <p className="text-gray-500">
          Please verify all details before submitting
        </p>
      </div>

      <div className="space-y-4 border p-4 rounded-lg">

        {/* Basic Info */}
        <div className="border rounded-lg">
          <h2 className="text-sm font-bold bg-bg-card p-2">Basic Info</h2>

          <div className="p-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Name</span>
              <span>{form.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Email</span>
              <span>{form.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Mobile</span>
              <span>{form.tel}</span>
            </div>
          </div>
        </div>

        {/* Personal */}
        <div className="border rounded-lg">
          <h2 className="text-sm font-bold bg-bg-card p-2">Personal Details</h2>

          <div className="p-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span>PAN</span>
              <span>{form.pan}</span>
            </div>
            <div className="flex justify-between">
              <span>Aadhaar</span>
              <span>{form.aadhaar}</span>
            </div>
            <div className="flex justify-between">
              <span>DOB</span>
              <span>{form.dob}</span>
            </div>
            <div className="flex justify-between">
              <span>Gender</span>
              <span>{form.gender}</span>
            </div>
          </div>
        </div>

        {/* Loan */}
        <div className="border rounded-lg">
          <h2 className="text-sm font-bold bg-bg-card p-2">Loan Details</h2>

          <div className="p-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span>Employment</span>
              <span>{form.employment}</span>
            </div>
            <div className="flex justify-between">
              <span>Loan Type</span>
              <span>{form.loan}</span>
            </div>
            <div className="flex justify-between">
              <span>Salary</span>
              <span>{form.salary}</span>
            </div>
            <div className="flex justify-between">
              <span>Loan Amount</span>
              <span>{form.loanAmount}</span>
            </div>
            <div className="flex justify-between">
              <span>Tenure</span>
              <span>{form.tenure}</span>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="border rounded-lg">
          <h2 className="text-sm font-bold bg-bg-card p-2">Address</h2>

          <div className="p-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span>State</span>
              <span>{form.state}</span>
            </div>
            <div className="flex justify-between">
              <span>City</span>
              <span>{form.city}</span>
            </div>
            <div className="flex justify-between">
              <span>Current Address</span>
              <span>{form.address}</span>
            </div>
            <div className="flex justify-between">
              <span>Permanent Address</span>
              <span>{form.permanentAddress}</span>
            </div>
            <div className="flex justify-between">
              <span>Pincode</span>
              <span>{form.pincode}</span>
            </div>
          </div>
        </div>

        {/* Documents */}
        <div className="border rounded-lg">
          <h2 className="text-sm font-bold bg-bg-card p-2">Documents</h2>

          <div className="p-3 text-sm space-y-2">
            <div className="flex justify-between">
              <span>PAN</span>
              <span>{form.documents?.pancard?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Aadhaar Front</span>
              <span>{form.documents?.aadharrfront?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Aadhaar Back</span>
              <span>{form.documents?.aadharrback?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Salary 1</span>
              <span>{form.documents?.salary1?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Salary 2</span>
              <span>{form.documents?.salary2?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Salary 3</span>
              <span>{form.documents?.salary3?.name || "Not uploaded"}</span>
            </div>
            <div className="flex justify-between">
              <span>Bank</span>
              <span>{form.documents?.bank?.name || "Not uploaded"}</span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-green-600 text-white w-full py-3 rounded-lg"
        >
          Submit Application ✅
        </button>

      </div>
    </form>
  );
};

export default Step7;







































































































































































