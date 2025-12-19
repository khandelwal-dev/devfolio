"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const navLinks = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "blog", href: "/blog" },
    { label: "links", href: "/links" },
    { label: "Spotify", href: "/spotify" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-[900px] mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="font-mono text-[17px] text-white">
          dev<span className="text-white/40">()</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((item, i) => {
            const active = pathname === item.href;
            return (
              <Link
                key={i}
                href={item.href}
                className="relative group text-white/60 hover:text-white transition"
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-px bg-white/70 transition-all duration-300 
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile menu */}
        <div className="md:hidden" ref={menuRef}>
          <button
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
            className=" text-white/80 text-xl"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div
          ref={menuRef}
          className="md:hidden fixed right-3 top-16 bg-[#ffffff13] backdrop-blur-md
                     rounded-2xl py-3 w-[140px] px-5 space-y-2.5"
        >
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block text-[16px] transition
                  ${active ? "text-white" : "text-white/70 hover:text-white"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
