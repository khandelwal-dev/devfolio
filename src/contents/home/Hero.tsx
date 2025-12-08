"use client";

import { Oswald } from "next/font/google";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });

export default function Hero() {
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
    <div className={oswald.className}>
      <div className="text-xs text-white/40 tracking-widest mb-6">
        ~/portfolio/home
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[60px] md:text-[72px] font-extrabold leading-[1.05]"
      >
        Hey{storedName ? `, ${storedName}` : name ? `, ${name}` : "."}
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-[60px] md:text-[72px] font-extrabold mt-2 leading-[1.05] flex items-center"
      >
        I'm&nbsp;<span className="border-b border-white/30 pb-1">Dev</span>
        &nbsp;
        <img
          src={`https://github.com/khandelwal-dev.png`}
          alt="Avatar"
          className="w-[70px] aspect-square rounded-full cursor-pointer rotate-45 hover:rotate-0 hover:scale-150 transition-all duration-300"
        />
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-[16px] md:text-[18px] text-white/80 mt-6 max-w-[550px] leading-[1.65]"
      >
        A computer science student who builds clean, minimal, functional digital
        experiences. I believe simplicity is the highest form of elegance.
      </motion.p>

      {!storedName && (
        <input
          placeholder="What should I call you?"
          className="mt-10 w-full max-w-[360px] h-[46px] bg-transparent 
                     border border-white/20 rounded-md px-4 text-sm 
                     text-white placeholder:text-white/40
                     outline-none focus:border-white transition"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleEnter}
        />
      )}

      <p className="text-xs text-white/30 mt-4">
        {storedName
          ? `saved as visitorName → "${storedName}"`
          : "press ENTER to continue"}
      </p>
    </div>
  );
}
