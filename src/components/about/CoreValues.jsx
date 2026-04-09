import React from "react";
import { ShieldCheck, Heart, Target, Users } from "lucide-react";

const CoreValues = () => {
  const Card = [
    {
      id: "1",
      icon: <ShieldCheck className="w-10 h-10 text-[#1C9833]" />,
      value: "Transparency",
      label:
        "Every fee, charge, and condition is shown upfront -- no hidden surprises.",
    },
    {
      id: "2",
      icon: <Heart className="w-10 h-10 text-primary-dark " />,
      value: "Empathy",
      label:
        "We understand financial stress. Our support team treats every customer with respect",
    },
    {
      id: "3",
      icon: <Target className="w-10 h-10 text-lg text-primary-dark" />,
      value: "Innovation",
      label:
        "We use cutting-edge technology to make lending faster and smarter every day.",
    },
    {
      id: "4",
      icon: <Users className="w-10 h-10 text-primary-dark " />,
      value: "Inclusion",
      label:
        "We serve people often overlooked by traditional banks-- freelancers, gig workers, and students.",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mt-20">
          <h1 className="text-xl md:text-3xl font-bold">Our Core Values</h1>
          <p className="mt-4 leading-relaxed">
            The principles that guide every decision we make.
          </p>
        </div>

        {/* Card */}

        <div className="max-w-7xl mx-auto px-7 mt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {Card.map((item, index) => (
              <div key={index}className="bg-bg-card rounded-2xl p-8 hover:scale-105 transition">
                <div className="flex items-start gap-5">
                  {/* ICON */}
                  <div className="bg-primary-color/10 rounded-lg p-3 text-lg">{item.icon}</div>

                  {/* TEXT BLOCK */}
                  <div>
                    {/* VALUE */}
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.value}
                    </h2>

                    {/* LABEL */}
                    <p className="mt-1 text-gray-500">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
