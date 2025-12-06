"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "projects", href: "/projects" },
    { label: "blog", href: "/blog" },
    { label: "links", href: "/links" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-[900px] mx-auto flex items-center justify-between h-[64px] px-4">

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
                  className={`absolute left-0 -bottom-[4px] h-[1px] bg-white/70 transition-all duration-300 
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile menu */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg px-4 pb-4 space-y-3">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block text-white/70 text-[16px] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
