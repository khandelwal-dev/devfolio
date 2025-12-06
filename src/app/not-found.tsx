"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] w-full bg-black text-white flex items-center justify-center px-4">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-lg text-center"
      >
        {/* Terminal breadcrumb */}
        <p className="text-xs text-white/30 tracking-widest mb-4">
          ~/portfolio/error
        </p>

        {/* Big heading */}
        <h1 className="text-[96px] sm:text-[120px] font-extrabold leading-[1]">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-[28px] sm:text-[32px] font-semibold mt-4">
          Page not found
        </h2>

        {/* Description */}
        <p className="text-white/70 mt-6 text-[16px] leading-[1.6]">
          Looks like this route doesn't exist. Maybe you mistyped it, or maybe I haven’t built it yet 😎.
        </p>

        {/* Home button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block"
        >
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 rounded-md text-white text-sm hover:bg-white/10 transition-all"
          >
            Go back home
          </Link>
        </motion.div>

        {/* Footer note */}
        <p className="text-white/30 text-xs mt-12 tracking-wide">
          or just wander around, it’s a portfolio — you might discover something cool
        </p>
      </motion.main>
    </div>
  );
}
