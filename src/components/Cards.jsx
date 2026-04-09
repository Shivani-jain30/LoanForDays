"use client";

import { motion } from "framer-motion";
import { Bolt } from "lucide-react";

export default function AnimatedCard({ title, description , icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="relative w-full  p-8 rounded-2xl card-gradient shadow-2xl overflow-hidden"
    >
      {/* Animated Glow Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 blur-2xl"
      />

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-1 h-1 bg-green-400 rounded-full"
          style={{
            top: `${20 + i * 10}%`,
            left: `${10 + i * 12}%`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          animate={{
            boxShadow: [
              "0 0 0px #22c55e",
              "0 0 20px #22c55e",
              "0 0 0px #22c55e",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500 mb-4"
        >
          <Icon className="text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className=" text-xl font-semibold mb-2"
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-zinc-400 text-sm leading-relaxed"
        >
          {description}
        </motion.p>
      </div>

      {/* Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-green-500/20"
        animate={{
          boxShadow: [
            "0 0 0px rgba(34,197,94,0.2)",
            "0 0 25px rgba(34,197,94,0.6)",
            "0 0 0px rgba(34,197,94,0.2)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </motion.div>
  );
}