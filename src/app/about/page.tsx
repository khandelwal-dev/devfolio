export const metadata = {
  title: "About — Dev Khandelwal",
  description:
    "Hi! I'm Dev Khandelwal, a passionate web development student creating innovative projects with TypeScript. Explore my portfolio, skills, and journey in building user-friendly apps.",
  openGraph: {
    title: "About — Dev Khandelwal",
    description:
      "Hi! I'm Dev Khandelwal, a passionate web development student creating innovative projects with TypeScript. Explore my portfolio, skills, and journey in building user-friendly apps.",
  },
  twitter: {
    title: "About — Dev Khandelwal",
    description:
      "Hi! I'm Dev Khandelwal, a passionate web development student creating innovative projects with TypeScript. Explore my portfolio, skills, and journey in building user-friendly apps.",
  },
};

export default function About() {
  return (
    <section className="text-white max-w-[900px] w-full mx-auto px-3 pb-32">
      {/* Terminal breadcrumb */}
      <div className="text-xs text-white/30 tracking-widest mb-6">
        ~/portfolio/about
      </div>

      {/* Heading */}
      <h1 className="text-[52px] sm:text-[62px] font-extrabold leading-[1.1]">
        About <span className="border-b border-white/30 pb-1">Me</span>
      </h1>

      {/* Intro paragraph */}
      <p className="mt-6 text-white/70 text-[16px] leading-[1.65] max-w-[700px]">
        I’m Dev — a 20-year-old human who writes code, breaks code, fixes code
        (sometimes), and enjoys building things on the web. I'm a CS undergrad,
        a self-taught developer, a brother, a friend, and an occasional
        philosopher when I'm staring at my ceiling at 2 AM.
      </p>

      {/* Section 1 — Journey */}
      <h2 className="text-[20px] mt-12 font-semibold tracking-tight">
        /how-it-started
      </h2>
      <p className="mt-3 text-white/70 text-[16px] leading-[1.65] max-w-[700px]">
        My programming journey began back in 11th grade with C++. I had no idea
        what I was doing, but the feeling of making a computer obey felt…
        magical. A year later, I discovered web development — and instantly fell
        in love with the blend of logic, design, and instant visual feedback.
        <br />
        <br />
        Today, I mostly work with <span className="text-white">TypeScript</span>
        ,<span className="text-white"> React</span>,{" "}
        <span className="text-white">Next.js</span>, and occasionally{" "}
        <span className="text-white">Node</span>. I also enjoy using Python,
        Kotlin, and some C++ & Dart.
      </p>

      {/* Section 2 — Outside Dev */}
      <h2 className="text-[20px] mt-12 font-semibold tracking-tight">
        /outside-dev
      </h2>
      <p className="mt-3 text-white/70 text-[16px] leading-[1.65] max-w-[700px]">
        Outside of code, I sometimes touch grass — usually by playing football.
        Other times, I’m on the terrace listening to soft music, watching
        clouds, and pretending I'm in a coming-of-age movie.
        <br />
        <br />I recently got into gaming (Apex Legends → I’m still learning).
        And yes, I do overthink. A lot. It’s practically a hobby now.
      </p>

      {/* Section 3 — Social/Personality */}
      <h2 className="text-[20px] mt-12 font-semibold tracking-tight">
        /personality
      </h2>
      <p className="mt-3 text-white/70 text-[16px] leading-[1.65] max-w-[700px]">
        I don’t talk much online, but I genuinely like meeting new people —
        whether it’s dev-related, music-related, or just random conversations
        spiralling at 3 AM. If you ever want to chat, ask something, or share
        your existential crisis, feel free to reach out. I’ll respond as soon as
        my introvert battery recharges.
      </p>

      {/* Section 4 — Fun Line */}
      <h2 className="text-[20px] mt-12 font-semibold tracking-tight">/fun</h2>
      <p className="mt-3 text-white/70 text-[16px] leading-[1.65] max-w-[700px]">
        That’s mostly everything I know about myself so far. If you ever
        discover something new about me, let me know — I’ll update this page
        like a patch note.
      </p>
    </section>
  );
}
