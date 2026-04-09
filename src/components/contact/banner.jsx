import React from "react";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* LIGHT MODE BACKGROUND */}
      <div className="absolute inset-0 z-0 
        bg-gradient-to-br from-green-50 via-white to-green-100 
        dark:hidden"
      />

      {/* DARK MODE BACKGROUND */}
      <div className="absolute inset-0 z-0 hidden dark:block 
        bg-[linear-gradient(135deg,#0f1f14,#13281a,#0f1f14)]"
      />

      <div className="container relative z-10 py-16">
        <div className="text-center mt-10 mb-10">
          
          <h1 className="text-2xl md:text-4xl font-bold  ">
            Let's Talk
          </h1>

          <p className="mt-4  text-gray-400  max-w-2xl mx-auto">
            Got a question, feedback, or just want to say hi? We'd love to hear
            from you. Our team typically responds within 24 hours.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Banner;





















