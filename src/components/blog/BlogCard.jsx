import React from "react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import blog1 from "@/assets/images/blog-1.jpg";
import blog2 from "@/assets/images/blog-2.jpg";
import blog3 from "@/assets/images/blog-3.jpg";
import blog4 from "@/assets/images/blog-4.jpg";
import blog5 from "@/assets/images/blog-5.jpg";
import blog6 from "@/assets/images/blog-6.jpg";

const blogdata = [
  {
    image: blog1,
    title: "Credit Score",
    date: "Mar 25, 2026",
    value: "5 Smart Tips to Boost Your Credit Score This Month",
    desc: "Your credit score opens doors — or closes them. Here are 5 things you can do right now to start improving",
    icon: <ArrowBigRight />,
  },
  {
    image: blog2,
    title: "Personal Finance",
    date: "Mar 20, 2026",
    value: "When a Short-Term Loan Actually Makes Sense",
    desc: "Short-term loans aren't for everyone — but in these situations, they can be a smart financial move.",
    icon: <ArrowBigRight />,
  },
  {
    image: blog3,
    title: "Loan Tips",
    date: "Mar 15, 2026",
    value: "Interest Rates Explained (Without the Jargon)",
    desc: "Confused by finance charges, flat rates, and loan fees? We break it down in plain English so you can make",
    icon: <ArrowBigRight />,
  },
  {
    image: blog4,
    title: "Personal Finance",
    date: "Mar 10, 2026",
    value: "How Digital Lending Is Changing Lives Across India",
    desc: "From small towns to metro cities, digital loans are helping millions bridge the gap between payday and",
    icon: <ArrowBigRight />,
  },
  {
    image: blog5,
    title: "Loan Tips",
    date: "Mar 5, 2026",
    value: "Mistakes People Make When Borrowing Money",
    desc: "Borrowing isn't bad — but borrowing without a plan can be. Here are the most common mistakes and how to",
    icon: <ArrowBigRight />,
  },
  {
    image: blog6,
    title: "Credit Score",
    date: "Feb 28, 2026",
    value: "Why Your CIBIL Score Matters More Than You Think",
    desc: "It affects your loan approval, interest rate, and even your rental application. Here's how to take control of it.",
    icon: <ArrowBigRight />,
  },
];
const BlogCard = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-15">
          {blogdata.map((item, index) => (
            <div className="bg-bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 mb-5"
              key={index}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden ">
                <Image
                  src={item.image}
                  alt="blog"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-5">
                {/* Tag + Date */}
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                    {item.title}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {item.date}
                  </span>
                </div>
                {/* Title */}
                <h3 className="text-lg font-semibold mb-2 hover:text-green-400">
                  {item.value}
                </h3>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {item.desc}
                </p>
                {/* Read More */}
                <button className="text-green-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
