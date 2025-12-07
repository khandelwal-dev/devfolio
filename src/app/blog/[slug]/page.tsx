import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMdx } from "$dev/lib/mdx";
import MdxClient from "$dev/components/MdxClient";
import ReadingProgress from "$dev/components/ReadingProgress";

import TOC from "$dev/components/Toc";
import PostNav from "$dev/components/PostNav";
import { getAllPosts } from "$dev/lib/getPosts";
import Head from "next/head";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/contents/blog");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    slug: file.replace(".mdx", ""),
  }));
}

export default async function BlogPost(props: any) {
  const params = await props.params;

  const filePath = path.join(
    process.cwd(),
    "src/contents/blog",
    `${params.slug}.mdx`
  );

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  // ⬅ UPDATED
  const { code, headings } = await compileMdx(content);

  // ⬅ PREV / NEXT POST
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === params.slug);
  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <>
      <ReadingProgress />

      <article className="text-white w-full flex justify-center">
        <div className="w-full max-w-[800px] px-5 sm:px-8 animate-fadeIn">
          {/* TOC (auto headings) */}
          {/* <TOC headings={headings} /> */}

          {/* Breadcrumb */}
          <p className="text-xs text-white/40 mb-6 sm:mb-8">
            ~/blog/{params.slug}
          </p>

          {/* Title */}
          <h1 className="text-[30px] sm:text-[40px] font-bold leading-[1.15] mb-3">
            {data.title}
          </h1>

          {/* Date */}
          <p className="text-white/50 text-[14px] sm:text-[15px] mb-12">
            {data.date}
          </p>

          {/* CONTENT */}
          <div
            className="prose prose-invert max-w-none
            prose-headings:text-white prose-headings:font-semibold
            prose-h2:text-[24px] prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-[20px] prose-h3:mt-10 prose-h3:mb-3
            prose-p:text-white/80 prose-p:leading-[1.75] prose-p:my-5
            prose-ul:my-6 prose-ul:text-white/70
            prose-ol:my-6 prose-ol:text-white/70
            prose-blockquote:border-l-white/20 prose-blockquote:text-white/60
            prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:my-8
            prose-code:bg-white/10 prose-code:px-1.5 prose-code:rounded
            prose-pre:bg-white/10 prose-pre:border prose-pre:border-white/10
            prose-pre:rounded-xl prose-pre:p-4 prose-pre:my-8
          "
          >
            <MdxClient code={code} />
          </div>

          {/* PREV / NEXT NAV */}
          <PostNav prev={prev} next={next} />
        </div>
      </article>
    </>
  );
}
