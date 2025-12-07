"use client";
import { useEffect, useState } from "react";

export default function TOC({ headings }: { headings: any[] }) {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    });

    document.querySelectorAll("h2, h3").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MOBILE TOC BUTTON */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 right-6 md:hidden bg-white text-black px-4 py-2 rounded-full text-sm shadow"
      >
        Table of Contents
      </button>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden">
          <div className="absolute bottom-0 left-0 right-0 bg-black border-t border-white/10 p-6 rounded-t-2xl">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold">Contents</h2>
              <button onClick={() => setMobileOpen(false)}>Close</button>
            </div>

            <ul className="space-y-3">
              {headings.map((h) => (
                <li key={h.text}>
                  <a
                    href={`#${h.text.replace(/\s+/g, "-").toLowerCase()}`}
                    className={`text-white/70 ${
                      active === h.text.replace(/\s+/g, "-").toLowerCase()
                        ? "text-white"
                        : ""
                    } ${h.level === 3 ? "ml-4 text-sm" : ""}`}
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* DESKTOP FLOATING SIDEBAR */}
      <aside className="hidden md:block fixed top-32 right-12 w-[240px] text-white/70 text-sm">
        <p className="uppercase text-[11px] tracking-widest text-white/40 mb-4">
          Contents
        </p>

        <ul className="space-y-3">
          {headings.map((h) => (
            <li key={h.text}>
              <a
                href={`#${h.text.replace(/\s+/g, "-").toLowerCase()}`}
                className={`hover:text-white transition ${
                  active === h.text.replace(/\s+/g, "-").toLowerCase()
                    ? "text-white"
                    : ""
                } ${h.level === 3 ? "ml-4 text-xs" : ""}`}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
