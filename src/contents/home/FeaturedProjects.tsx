export default function FeaturedProjects() {
  const projects = [
    {
      title: "Paciente",
      desc: "A clean patient-management platform for doctors.",
      tags: "Next.js • Tailwind • TypeScript",
      link: "https://your-project-link.com",
      github: "https://github.com/yourrepo",
    },
    {
      title: "DevNotes",
      desc: "A minimal, markdown-based notes system.",
      tags: "React • Zustand • Tailwind",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section className="mt-32">
      <h2 className="text-[22px] font-semibold tracking-tight mb-6">/projects</h2>

      <div className="flex flex-col gap-10">
        {projects.map((p) => (
          <div key={p.title} className="group">
            <h3 className="text-[20px] font-semibold group-hover:text-white transition">
              {p.title}
            </h3>

            <p className="text-white/60 mt-1 text-[15px] max-w-[550px]">
              {p.desc}
            </p>

            <p className="text-white/30 text-[13px] mt-1">{p.tags}</p>

            <div className="flex gap-6 mt-3 text-sm">
              <a href={p.link} className="text-white/50 hover:text-white transition">
                live →
              </a>
              <a href={p.github} className="text-white/50 hover:text-white transition">
                github →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
