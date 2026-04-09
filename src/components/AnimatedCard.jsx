"use client";
import { motion } from "framer-motion";

const AnimatedCard = ({ children, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#1C9833] to-[#8BBE1F]"
    >
      <div className="bg-white dark:bg-[#111] rounded-2xl p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedCard;