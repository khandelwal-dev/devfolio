// import { compile } from "@mdx-js/mdx";

// export async function compileMdx(source: string) {
//   const compiled = await compile(source, {
//     outputFormat: "function-body",
//     development: false,
//   });

//   return String(compiled);
// }

import { compile } from "@mdx-js/mdx";
import { visit } from "unist-util-visit";

export async function compileMdx(raw: string) {
  let headings: { level: number; text: string }[] = [];

  const compiled = await compile(raw, {
    outputFormat: "function-body",
    rehypePlugins: [
      () => (tree: any) => {
        visit(tree, "element", (node: any) => {
          if (["h2", "h3"].includes(node.tagName)) {
            const text = node.children
              .filter((c: any) => c.type === "text")
              .map((c: any) => c.value)
              .join("");

            headings.push({
              level: node.tagName === "h2" ? 2 : 3,
              text,
            });
          }
        });
      },
    ],
  });

  return {
    code: String(compiled),
    headings,
  };
}
