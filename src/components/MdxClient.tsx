"use client";

import { Mdx } from "$dev/components/Mdx";
import * as runtime from "react/jsx-runtime";

export default function MdxClient({ code }: { code: string }) {
  // Execute compiled MDX
  const fn = new Function("React", ...Object.keys(Mdx()), code);

  const result = fn(runtime, ...Object.values(Mdx()));

  // MDX compilers always return: { default: Component }
  const MDXContent = result.default;

  if (!MDXContent) {
    console.error("MDX returned:", result);
    return <div className="text-red-400">MDX failed to load.</div>;
  }

  return <MDXContent />;
}
