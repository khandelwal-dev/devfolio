import { getPinnedRepos } from "$dev/lib/github";

type Project = {
  title: string;
  desc?: string | null;
  tags: string[];
  link?: string | null;
  github: string;
};

export default async function FeaturedProjects() {
  const repos = await getPinnedRepos();

  const projects: Project[] = repos.map((repo: any) => ({
    title: repo.name,
    desc: repo.description,
    tags: repo.repositoryTopics.nodes.map((t: any) => t.topic.name),
    link: repo.homepageUrl,
    github: repo.url,
  }));

  return (
    <section className="mt-32">
      <h2 className="text-[22px] font-semibold tracking-tight mb-6">
        /projects
      </h2>

      <div className="flex flex-col gap-10">
        {projects.map((p) => (
          <div key={p.title} className="group">
            <h3 className="text-[20px] font-semibold group-hover:text-white transition">
              {p.title}
            </h3>

            {p.desc && (
              <p className="text-white/60 mt-1 text-[15px] max-w-[550px]">
                {p.desc}
              </p>
            )}

            {p.tags.length > 0 && (
              <p className="text-white/30 text-[13px] mt-1">
                {p.tags.join(" • ")}
              </p>
            )}

            <div className="flex gap-6 mt-3 text-sm">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  className="text-white/50 hover:text-white transition"
                >
                  live →
                </a>
              )}

              <a
                href={p.github}
                target="_blank"
                className="text-white/50 hover:text-white transition"
              >
                github →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
