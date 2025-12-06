export default function NowLearning() {
  const learning = [
    "Advanced TypeScript",
    "Frontend architecture patterns",
    "Data Structures + Algorithms",
    "System Design basics",
  ];

  return (
    <section className="mt-32">
      <h2 className="text-[22px] font-semibold tracking-tight mb-4">
        /now-learning
      </h2>

      <div className="border border-white/10 rounded-lg p-6 max-w-[550px]">
        <ul className="flex flex-col gap-2">
          {learning.map((item) => (
            <li key={item} className="text-white/70 text-[15px] flex items-center gap-2">
              <span className="text-white/40">→</span> {item}
            </li>
          ))}
        </ul>

        <p className="text-white/20 text-[12px] mt-3">
          last updated • {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
