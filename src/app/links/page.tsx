export const metadata = {
  title: "Links — Dev Khandelwal",
  description:
    "All my social media links in one place.",
  openGraph: {
    title: "Links — Dev Khandelwal",
    description:
      "All my social media links in one place.",
  },
  twitter: {
    title: "Links — Dev Khandelwal",
    description:
      "All my social media links in one place.",
  },
};

export default function LinksPage() {
  const links = [
    {
      label: "GitHub",
      link: "https://github.com/khandelwal-dev",
      desc: "Where all my chaos and creation lives.",
    },
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/devkhandelwal",
      desc: "Professional, polished, pretending to be serious.",
    },
    {
      label: "Twitter / X",
      link: "https://twitter.com/kkndev",
      desc: "Thoughts, tech, randomness, and late-night dev struggles.",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/kkndev",
      desc: "Photos, moments, and the occasional good hair day.",
    },
    {
      label: "Mail",
      link: "mailto:dev-khandelwal@outlook.com",
      desc: "Reach out. I don’t bite (mostly).",
    },
  ];

  return (
    <main className="text-white">
      {/* Breadcrumb */}
      <div className="text-xs text-white/40 tracking-widest mb-10">
        ~/portfolio/links
      </div>

      {/* Heading */}
      <h1 className="text-[40px] font-semibold tracking-tight mb-6">Links</h1>

      <p className="text-white/70 text-[16px] max-w-[600px] leading-[1.6] mb-10">
        A single place containing all my major social links. Whether you want to
        stalk me, hire me, or just say hi — here you go.
      </p>

      {/* Links list */}
      <div className="flex flex-col gap-4 mt-10">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="group border border-white/10 rounded-lg p-5 
                       hover:border-white/30 backdrop-blur-sm transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[18px] font-medium group-hover:text-white transition">
                  {item.label}
                </h3>
                <p className="text-white/40 text-[14px] mt-1">{item.desc}</p>
              </div>

              {/* → arrow */}
              <span className="text-white/30 group-hover:text-white transition-all text-[20px]">
                →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-white/30 text-xs mt-10">more links coming soon…</p>
    </main>
  );
}

// export default function LinksPage() {
//   const links = [
//     {
//       label: "GitHub",
//       link: "https://github.com/khandelwal-dev",
//       user: "@khandelwal-dev",
//       desc: "My code, experiments, commits and chaos.",
//     },
//     {
//       label: "LinkedIn",
//       link: "https://linkedin.com/in/yourprofile",
//       user: "Dev Khandelwal",
//       desc: "Professional presence. No memes (usually).",
//     },
//     {
//       label: "Twitter / X",
//       link: "https://twitter.com/yourusername",
//       user: "@yourusername",
//       desc: "Thoughts, tech, rants, and midnight dev energy.",
//     },
//     {
//       label: "Instagram",
//       link: "https://instagram.com/yourusername",
//       user: "@yourusername",
//       desc: "Photos, moments, and rare non-coding glimpses.",
//     },
//     {
//       label: "Email",
//       link: "mailto:dev@example.com",
//       user: "dev@example.com",
//       desc: "Reach out. For work, ideas, or just vibes.",
//     },
//   ];

//   return (
//     <main className="text-white">
//       {/* Breadcrumb */}
//       <div className="text-xs text-white/40 tracking-widest mb-8">
//         ~/portfolio/links
//       </div>

//       {/* Heading */}
//       <h1 className="text-[42px] font-semibold tracking-tight leading-tight">
//         All my links.
//       </h1>

//       <p className="text-white/70 text-[15.5px] max-w-[600px] mt-4 leading-[1.65]">
//         Everything important in one place — socials, dev profiles, and ways
//         to reach me. Clean. Minimal. No noise.
//       </p>

//       {/* Divider */}
//       <div className="w-full h-px bg-white/10 mt-10 mb-8"></div>

//       {/* Links List */}
//       <section className="flex flex-col gap-4">
//         {links.map((item, i) => (
//           <a
//             key={i}
//             href={item.link}
//             target="_blank"
//             className="
//               group border border-white/10
//               hover:border-white/20 active:border-white/30
//               rounded-lg px-5 py-4
//               transition-all duration-300
//               backdrop-blur-sm
//             "
//           >
//             <div className="flex items-center justify-between">
//               {/* Left side content */}
//               <div>
//                 <h3 className="
//                   text-[18px] font-medium
//                   group-hover:text-white transition
//                 ">
//                   {item.label}
//                 </h3>

//                 <p className="text-white/40 text-[14px] mt-0.5">
//                   {item.desc}
//                 </p>

//                 <p className="text-white/60 text-[13px] mt-1 font-mono">
//                   {item.user}
//                 </p>
//               </div>

//               {/* Arrow */}
//               <span className="
//                 text-white/30 text-[22px]
//                 group-hover:text-white group-hover:translate-x-1
//                 transition-all duration-300
//               ">
//                 →
//               </span>
//             </div>
//           </a>
//         ))}
//       </section>

//       {/* Tiny bottom note */}
//       <p className="text-white/30 text-xs mt-10 tracking-wide">
//         more platforms soon — staying online is hard.
//       </p>
//     </main>
//   );
// }

