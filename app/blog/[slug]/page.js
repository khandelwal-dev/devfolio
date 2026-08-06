import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { BLOG_POSTS, getPostBySlug } from '../../../data/blogPosts';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dev Khandelwal`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-5 md:px-8 pb-24">
      <Link href="/blog" className="inline-flex items-center gap-1 font-mono text-xs text-black/60 link-swoosh">
        <ArrowLeft className="w-3.5 h-3.5" /> back to blog
      </Link>
      <div className="mt-6 font-mono text-xs text-black/50 flex items-center gap-3">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime} read</span>
        <span>·</span>
        <span className="bg-black text-lime px-1.5 py-0.5">#{post.tag}</span>
      </div>
      <h1 className="mt-3 font-display font-semibold tracking-tight text-4xl md:text-5xl leading-[1.05]">{post.title}</h1>
      {post.excerpt && <p className="mt-4 text-black/70 text-lg leading-relaxed">{post.excerpt}</p>}

      <div className="mt-10 prose-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-14 border-t-2 border-black pt-6 font-mono text-xs text-black/50">
        thanks for reading. now go touch grass.
      </div>
    </article>
  );
}
