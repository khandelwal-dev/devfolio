export default function Skills() {
  const tech = [
    "React", "Next.js", "TypeScript", "Tailwind", "Node.js", "Git"
  ];

  return (
    <section className="mt-32">
      <h2 className="text-[22px] font-semibold tracking-tight mb-4">/skills</h2>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="px-4 py-[6px] border border-white/15 rounded-md 
                       text-sm text-white/70 hover:text-white hover:border-white/40 
                       transition"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
