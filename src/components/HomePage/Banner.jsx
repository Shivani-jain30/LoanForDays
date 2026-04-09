"use client";
import React from "react";
import gridBg from "@/assets/images/banner_bg.png";
import bannerImg from "@/assets/images/banner_img.png";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section
        className=" py-20 max-md:text-center "
        style={{ backgroundImage: `url(${gridBg.src})` }}
      >
        <div className="relative z-1 container ">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="max-w-xl ">
              {/* Top badge */}
              <div className="">
                <div className=" gap-2 mx-auto   inline-flex items-center  bg-primary/8 border border-primary-color rounded-full px-4 py-1.5 mb-6">
                  <span className="text-xs gradient-text font-medium  mx-auto flex gap-2 items-center ">
                    <div className="w-[7px] h-[7px] rounded-full bg-gradient-primary  animate-pulse "></div>
                    Same-day approval · 100% online
                  </span>
                </div>
                {/* Heading */}

                <h1 className="text-4xl md:text-5xl font-extrabold text-forward   sm:text-5xl lg:text-[3.25rem] xl:text-6xl  leading-[1.08] mb-8">
                  Instant cash,
                  <br />
                  <span className="gradient-text">straight to your bank.</span>
                </h1>
              </div>
              {/* Description */}
              <p className="text-gray-400  mx-auto mb-8 ">
                Short-term loans from{" "}
                <strong className="text-white">₹2,000 to ₹25,000</strong> with
                flexible 5–30 day tenures. No hidden fees, no surprises.
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mb-10 max-sm:justify-center">
                <button
                  onClick={() => setPage("apply")}
                  className="px-5 py-2.5 bg-gradient-primary  hover:bg-orange-600 text-white font-semibold rounded-lg transition"
                >
                  Apply Now →
                </button>

                <button className="px-5 py-2.5 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition">
                  Check Eligibility
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  ["₹25K", "Max loan"],
                  ["30", "Max days"],
                  ["1%", "Rate/day"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-extrabold text-white">
                      {n}
                    </div>
                    <div className="text-xs text-gray-500">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Image
                src={bannerImg}
                alt="banner_img"
                width={624}
                height={624}
                className=" mx-auto animate-float-glow"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
