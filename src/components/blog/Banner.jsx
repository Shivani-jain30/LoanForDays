"use client";

export default function AnimatedBackground() {
  return (
    <div className="relative h-[400px] overflow-hidden">
      {/* LIGHT MODE ANIMATED BG */}
      <div className="absolute inset-0 z-0 dark:hidden">
        <div className="absolute w-[500px] h-[500px] bg-[#8BBE1F40] rounded-full blur-3xl top-[-100px] right-[-100px] animate-blob"></div>

        <div className="absolute w-[500px] h-[500px] bg-[#1C983340] rounded-full blur-3xl bottom-[-100px] left-[-100px] animate-blob animation-delay-2000"></div>

        <div className="absolute w-[400px] h-[400px] bg-[#8BBE1F30] rounded-full blur-3xl top-[50%] left-[40%] animate-blob animation-delay-4000"></div>
      </div>

      {/* DARK MODE  */}
      <div
        className="absolute inset-0 z-0 hidden dark:block 
    bg-[linear-gradient(135deg,#0f1f14,#13281a,#0f1f14)]"
      />

      <div
        className="absolute inset-0 z-0 hidden dark:block 
    bg-[radial-gradient(circle_at_80%_20%,#8BBE1F22,transparent_40%),
        radial-gradient(circle_at_20%_80%,#1C983322,transparent_40%)]"
      />

      {/* CONTENT */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Blog
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Practical tips, honest advice, and everything you need to make smarter
          money decisions.
        </p>

        <div className="flex mt-6 gap-4 flex-wrap justify-center">
          <span
            className="px-4 py-1.5 rounded-full 
            bg-[#8BBE1F]/10 border border-[#8BBE1F]/20 
            text-sm font-medium text-[#1C9833] 
            dark:bg-[#1C9833]/20 dark:text-[#8BBE1F]"
          >
            Personal finance
          </span>

          <span
            className="px-4 py-1.5 rounded-full 
            bg-[#8BBE1F]/10 border border-[#8BBE1F]/20 
            text-sm font-medium text-[#1C9833]
            dark:bg-[#1C9833]/20 dark:text-[#8BBE1F]"
          >
            Loan Tips
          </span>

          <span
            className="px-4 py-1.5 rounded-full 
            bg-[#8BBE1F]/10 border border-[#8BBE1F]/20 
            text-sm font-medium text-[#1C9833]
            dark:bg-[#1C9833]/20 dark:text-[#8BBE1F]"
          >
            Credit scores
          </span>
        </div>
      </div>
    </div>
  );
}
