"use client"
import React from 'react'
import gridBg from "@/assets/images/banner_bg.png";
import bannerImg from "@/assets/images/banner_img.png";
import Image from 'next/image';

const Banner = () => {
  return (
    <>
<section className='text-white py-20 max-md:text-center' style={{ backgroundImage: `url(${gridBg.src})` }}>
 <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 md:pt-0 block sm:flex gap-9'>
           <div className="grid lg:grid-cols-1 gap-12 items-center min-h-[80vh] ">
  {/* Top badge */}
  <div className=''>
  <div className=" gap-2 mb-3 mx-auto">
   
    <span className="text-xs gradient-text font-medium  mx-auto flex gap-2 items-center ">
     <div className="w-[7px] h-[7px] rounded-full bg-gradient-primary  animate-pulse "></div>
      Same-day approval · 100% online
    </span>
  </div>
  {/* Heading */}

  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
    Money when <br />
    you need it
    <span className="gradient-text">.</span>
  </h1>
  
</div>
  {/* Description */}
  <p className="text-gray-400 max-w-[380px] mx-auto mb-8 text-center">
    Short-term loans from{" "}
    <strong className="text-white">₹2,000 to ₹25,000</strong> with flexible
    5–30 day tenures. No hidden fees, no surprises.
  </p>




  {/* Buttons */}
  <div className="flex gap-3 mb-10">
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
    {[["₹25K", "Max loan"], ["30", "Max days"], ["1%", "Rate/day"]].map(
      ([n, l]) => (
        <div key={l}>
          <div className="text-2xl font-extrabold text-white">{n}</div>
          <div className="text-xs text-gray-500">{l}</div>
        </div>
      )
    )}
  </div>
</div>
<div>
    <Image src={bannerImg} alt="banner_img" width={768} height={768} ></Image>
</div>
          </div>
</section>
    </>
  )
}

export default Banner