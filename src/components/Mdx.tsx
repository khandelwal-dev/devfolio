"use client";

export function Mdx() {
  return {
    h1: (props: any) => (
      <h1
        {...props}
        className="text-[32px] font-bold mt-10 mb-4 border-b border-white/10 pb-2"
      />
    ),
    h2: (props: any) => (
      <h2
        {...props}
        className="text-[24px] font-semibold mt-8 mb-3 text-white/90"
      />
    ),
    p: (props: any) => (
      <p {...props} className="text-white/70 leading-[1.65] text-[15px] my-4" />
    ),
    code: (props: any) => (
      <code
        {...props}
        className="bg-white/10 px-1.5 py-0.5 rounded text-white text-sm"
      />
    ),
    pre: (props: any) => (
      <pre
        {...props}
        className="bg-[#111] border border-white/10 p-4 rounded-lg overflow-x-auto text-white text-sm my-6"
      />
    ),
    ul: (props: any) => (
      <ul
        {...props}
        className="list-disc pl-5 text-white/70 leading-[1.65] text-[15px] my-4"
      />
    ),
  };
}
