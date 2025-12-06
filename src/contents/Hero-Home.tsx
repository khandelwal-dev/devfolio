"use client";

import { Oswald } from "next/font/google";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });

export default function HeroHome() {
  const [name, setName] = useState("");
  const [storedName, setStoredName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("visitorName");
    if (saved) setStoredName(saved);
  }, []);

  const handleEnter = (e: any) => {
    if (e.key === "Enter" && name.trim()) {
      localStorage.setItem("visitorName", name);
      setStoredName(name);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`${oswald.className} text-white`}
    >
      {/* Terminal-style breadcrumb */}
      <div className="text-xs text-[#ffffff40] tracking-widest mb-6">
        ~/portfolio/home
      </div>

      {/* Main Headings */}
      <h1 className="text-[62px] font-extrabold leading-[1.1]">
        Hey{storedName ? `, ${storedName}` : name ? `, ${name}` : "."}
      </h1>

      <h1 className="text-[62px] font-extrabold leading-[1.1] mt-2">
        I’m <span className="border-b border-white/30 pb-1">Dev</span>
      </h1>

      {/* Subtext */}
      <p className="text-[17px] text-[#ffffff90] mt-6 max-w-[550px] leading-[1.6]">
        A computer science student who loves building minimal, functional,
        and thoughtfully engineered digital experiences.  
        I believe simplicity is the highest form of elegance.
      </p>

      {/* Name Input */}
      {!storedName && (
        <input
          placeholder="What should I call you?"
          className="mt-10 w-full max-w-[360px] h-[46px] bg-transparent 
                     border border-[#ffffff22] rounded-md px-4 text-sm 
                     text-white placeholder:text-[#ffffff40]
                     outline-none focus:border-white transition-all"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleEnter}
        />
      )}

      {/* Tiny terminal hint */}
      <p className="text-xs text-[#ffffff30] mt-4">
        {storedName ? `saved as visitorName → "${storedName}"` : `press ENTER to continue`}
      </p>
    </motion.div>
  );
}
