"use client";

import { motion } from "framer-motion";

export default function UnderConstruction() {
  return (
    <div className="min-h-[60vh] w-full flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center"
      >
        {/* Terminal-style breadcrumb */}
        <p className="text-xs text-white/30 tracking-widest mb-4">
          ~/portfolio/coming-soon
        </p>

        {/* Main Heading */}
        <h1 className="text-[60px] sm:text-[72px] font-extrabold leading-[1.1]">
          🚧
        </h1>

        <h2 className="text-[26px] sm:text-[30px] font-semibold mt-4">
          Page Under Construction
        </h2>

        {/* Description */}
        <p className="text-white/70 mt-4 text-[16px] max-w-[500px] mx-auto leading-[1.6]">
          Sorry, this page isn’t ready yet. I’m probably coding something awesome 
          here, so check back soon!
        </p>

        {/* Optional hint */}
        <p className="text-white/30 mt-6 text-xs tracking-wide">
          Meanwhile, explore other pages of my portfolio.
        </p>
      </motion.div>
    </div>
  );
}
