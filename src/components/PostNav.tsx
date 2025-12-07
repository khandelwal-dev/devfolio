import Link from "next/link";

export default function PostNav({ prev, next }: { prev?: any; next?: any }) {
  return (
    <div className="border-t border-white/10 mt-20 pt-10 flex justify-between text-white/60 text-sm">
      {prev ? (
        <Link href={`/blog/${prev.slug}`}>⟵ {prev.title}</Link>
      ) : (
        <span></span>
      )}

      {next ? (
        <Link href={`/blog/${next.slug}`}>{next.title} ⟶</Link>
      ) : (
        <span></span>
      )}
    </div>
  );
}
