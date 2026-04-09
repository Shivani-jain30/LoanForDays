"use client";
import { useState } from "react";
import { Shield, CircleAlert } from "lucide-react";

const CheckMyRepayment = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleCheck = () => {
    //validation
    if (!phone) {
      setError("Please enter a valid 10-digit mobile number");
      setShowMessage(false);
    } else if (!/^\d{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit mobile number");
      setShowMessage(false);
    } else {
      setError("");
      setShowMessage(true);
    }
  };
  return (
    <section>
      <div className="container">
        <div className="border rounded-3xl mt-20 p-5 max-w-md mx-auto text-center mb-7 shadow-lg">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-dark " />
            <p className="text-sm text-gray-500">
              Your information is encrypted & secure
            </p>
          </div>
          <h5 className="mt-4 text-left text-sm">Your Mobile Number</h5>
          <input
            type="tel"
            placeholder="e.g. 9834265906"
            onChange={(e) => {
              setPhone(e.target.value);
              setError("");
            }}
            className={`border-2 w-full h-[50px] p-2 rounded-2xl mt-3 focus:outline-none focus:border-green-500`}
          />
          {/* Error */}
          {error && (
            <p className="text-red-700 text-sm mt-1 text-left">{error}</p>
          )}

          <br />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-2xl hover:bg-green-600 mt-5 w-full h-[50px] cursor-pointer"
            onClick={handleCheck}
          >
            Check Repayment
          </button>
          {/*Result Message */}

          {showMessage && (
            <div className=" rounded-2xl p-4 flex gap-3 mt-5 i bg-bg-card">
              {/* Icon */}
              <CircleAlert className="w-10 h-10 text-gray-500 -mt-2" />

              {/* Text Section */}
              <div>
                <h3 className="font-semibold  text-left">
                  No Active Loan Found
                </h3>
                <p className="text-gray-400 text-sm mt-1 text-left">
                  We couldn't find any active loans for this number. If you
                  think this is a mistake, please reach out to us at
                  support@loanfordays.com.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckMyRepayment;
