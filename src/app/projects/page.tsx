import UnderConstruction from "$dev/components/UnderConstruction";
import { getAllPublicRepos } from "$dev/lib/github";

export const metadata = {
  title: "Projects — Dev Khandelwal",
  description: "A collection of my projects, crafted with dedication.",
  openGraph: {
    title: "Projects — Dev Khandelwal",
    description: "A collection of my projects, crafted with dedication.",
  },
  twitter: {
    title: "Projects — Dev Khandelwal",
    description: "A collection of my projects, crafted with dedication.",
  },
};

export default async function Projects() {
  const repos = await getAllPublicRepos();
  return (
    <>
      <section className="text-white">
        <div className="text-xs text-white/40 tracking-widest mb-10">
          ~/portfolio/projects
        </div>
        <h1 className="text-[40px] font-semibold tracking-tight mb-8">
          Projects
        </h1>

        <div className="flex flex-col gap-10">
          {repos.map((repo: any) => (
            <div key={repo.id} className="group">
              <h3 className="text-[20px] font-semibold group-hover:text-white transition">
                {repo.name}
              </h3>

              {repo.description && (
                <p className="text-white/60 mt-1 text-[15px] max-w-[600px]">
                  {repo.description}
                </p>
              )}

              <div className="flex gap-6 mt-3 text-sm">
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    className="text-white/50 hover:text-white transition"
                  >
                    live →
                  </a>
                )}

                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-white/50 hover:text-white transition"
                >
                  github →
                </a>
              </div>

              <div className="text-white/30 text-[13px] mt-2 flex gap-4">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
                <span>⑂ {repo.forks_count}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
