import NowPlaying from "./spotify/NowPlaying";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-40 mb-16 max-w-[900px] mx-auto px-4">
      <div className="h-px w-full bg-white/10 mb-10" />

      <NowPlaying />

      <h2 className="text-[22px] font-semibold tracking-tight mb-3">
        /contact
      </h2>

      <p className="text-white/70 text-[15px] leading-relaxed max-w-[600px]">
        Want to reach out?{" "}
        <a
          href="mailto:dev-khandelwal@outlook.com"
          target="_blank"
          className="text-white underline underline-offset-4 hover:text-white/90 transition"
        >
          hi@khandelwaldev.me
        </a>
      </p>

      <div className="flex gap-4 mt-4 text-white/40 text-sm">
        <a
          href="https://github.com/khandelwal-dev"
          target="_blank"
          className="hover:text-white transition"
        >
          github
        </a>
        <span>•</span>
        <a
          href="https://linkedin.com/in/devkhandelwal"
          target="_blank"
          className="hover:text-white transition"
        >
          linkedin
        </a>
      </div>

      <p className="text-white/30 text-[13px] mt-10">© Dev {year}</p>
    </footer>
  );
}
