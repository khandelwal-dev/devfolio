"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setProgress((scrolled / total) * 100);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-white/80 z-[999]"
      style={{ width: `${progress}%` }}
    />
  );
}
