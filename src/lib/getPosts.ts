// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const POSTS_PATH = path.join(process.cwd(), "src/contents/blog");

// export function getAllPosts() {
//   const files = fs.readdirSync(POSTS_PATH);

//   return files.map((file) => {
//     const filePath = path.join(POSTS_PATH, file);
//     const raw = fs.readFileSync(filePath, "utf-8");
//     const { data } = matter(raw);

//     return {
//       slug: file.replace(".mdx", ""),
//       ...data,
//     };
//   });
// }

// export function getPost(slug: string) {
//   const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
//   const raw = fs.readFileSync(filePath, "utf-8");
//   return matter(raw);
// }


import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost } from "$dev/types/blog";

export function getAllPosts(): BlogPost[] {
  const dir = path.join(process.cwd(), "src/contents/blog");
  const files = fs.readdirSync(dir);

  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug: file.replace(".mdx", ""),
      title: data.title || "",
      description: data.description || "",
      date: data.date || "",
    };
  });
}
