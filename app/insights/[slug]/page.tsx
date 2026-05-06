import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";
import { MeetHakim } from "./articles/meet-hakim";

const SITE_URL = "https://oceangatedjibouti.com";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getInsight(slug);
  if (!post) return {};
  const url = `/insights/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.cover, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.cover],
    },
  };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightArticle(props: Props) {
  const { slug } = await props.params;
  const post = getInsight(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Oceangate International Shipping",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Oceangate International Shipping",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/insights/${post.slug}`,
    },
  };

  return (
    <article className="relative overflow-hidden bg-ink pt-40 pb-32 lg:pt-48 lg:pb-44">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="grain" />
      <div className="relative mx-auto max-w-[920px] px-6 lg:px-8">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-fog transition-colors hover:text-copper"
        >
          <span aria-hidden>←</span> Insights
        </Link>

        <div className="mt-10 flex items-center gap-3">
          <span className="h-px w-10 bg-copper" />
          <p className="text-xs uppercase tracking-[0.3em] text-copper">
            {post.kicker}
          </p>
        </div>

        <h1 className="font-display mt-8 text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted">
          <span>{formatDate(post.date)}</span>
          <span className="h-px w-6 bg-line" />
          <span>{post.readingTime}</span>
        </div>

        <div className="relative mt-14 aspect-[16/10] overflow-hidden bg-abyss shadow-3d">
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority
            sizes="(min-width: 1024px) 920px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-16">
          {post.slug === "meet-hakim-nagy" ? <MeetHakim /> : null}
        </div>

        <div className="mt-24 border-t border-line pt-10">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-copper/40 px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-paper transition-all hover:border-copper"
          >
            <span className="relative z-10">Get in touch</span>
            <span className="absolute inset-0 -translate-y-full bg-copper transition-transform duration-500 group-hover:translate-y-0" />
          </Link>
        </div>
      </div>
    </article>
  );
}
