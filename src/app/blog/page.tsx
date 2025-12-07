import Link from "next/link";
import { getAllPosts } from "$dev/lib/getPosts";

export const metadata = {
  title: "Blog — Dev Khandelwal",
  description: "Discover my website and blog, Explore my journey!",
  openGraph: {
    title: "Blog — Dev Khandelwal",
    description: "Discover my website and blog, Explore my journey!",
  },
  twitter: {
    title: "Blog — Dev Khandelwal",
    description: "Discover my website and blog, Explore my journey!",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="text-white">
      <div className="text-xs text-white/40 tracking-widest mb-10">
        ~/portfolio/blog
      </div>
      <h1 className="text-[40px] font-semibold tracking-tight mb-8">Blog</h1>

      <div className="flex flex-col gap-10">
        {posts.map((post, i) => (
          <Link key={i} href={`/blog/${post.slug}`} className="group">
            <h2 className="text-[21px] font-semibold group-hover:text-white transition">
              {post.title}
            </h2>

            <p className="text-white/60 text-[14px] mt-1 max-w-[600px]">
              {post.description}
            </p>

            <p className="text-white/30 text-[12px] mt-2 tracking-wide">
              {post.date}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
