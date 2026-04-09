"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Heart,
  User,
  Award,
  TrendingUp,
} from "lucide-react";

const WhyCustomerTrust = () => {
  const TrustData = [
    {
      id: "1",
      icon: <ShieldCheck className="w-10 h-10 text-primary-dark " />,
      value: "RBI Compliant",
      label:
        "We operate through registered NBFC partners and follow all RBI guidelines strictly.",
    },
    {
      id: "2",
      icon: <Clock className="w-10 h-10 text-primary-dark " />,
      value: "24/7 Availability",
      label:
        "Apply for a loan anytime — our platform is available round the clock, even on holidays.",
    },
    {
      id: "3",
      icon: <Heart className="w-10 h-10 text-primary-dark " />,
      value: "No Hidden Charges",
      label:
        "Every fee is disclosed upfront before you accept the loan. What you see is what you pay.",
    },
    {
      id: "4",
      icon: <User className="w-10 h-10 text-primary-dark " />,
      value: "Dedicated Support",
      label:
        "Our customer support team is always ready to help you with any queries or concerns.",
    },
    {
      id: "5",
      icon: <Award className="w-10 h-10 text-primary-dark " />,
      value: "Trusted by 50K+",
      label:
        "Over 50,000 customers have successfully used our platform with a 95% satisfaction rate.",
    },
    {
      id: "6",
      icon: <TrendingUp className="w-10 h-10 text-primary-dark " />,
      value: "Improve Credit Score",
      label:
        "Timely repayments through LoanForDays help build your credit history positively.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mt-20">
          <h1 className="text-xl md:text-3xl font-bold">
            Why Customers Trust Us
          </h1>
          <p className="mt-4 leading-relaxed">
            Thousands of Indians rely on LoanForDays for their urgent financial
            needs.
          </p>
        </div>

        <div className="overflow-hidden w-full">
          {/* 🔥 SLIDER */}
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "easeInOut",
            }}
          >
            {/* Trust Data */}
            <div className="flex gap-6 mb-6">
              {[...TrustData, ...TrustData].map((item, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-2xl p-8 text-center hover:scale-105 transition min-w-[280px] max-w-[280px] h-[250px] mt-20 mb-10"
                >
                  {/* ID */}
                  <div
                    className="w-15 h-12 mx-auto mb-5 flex items-center justify-center rounded  border-gray-300 text-lg 
                    font-semibold bg-primary-color/10"
                  >
                    {item.icon}
                  </div>
                  {/* VALUE */}
                  <h2 className="text-xl font-bold  ">{item.value}</h2>
                  {/* LABEL */}
                  <p className="mt-2 text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomerTrust;
