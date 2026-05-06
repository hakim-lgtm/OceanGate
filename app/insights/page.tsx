import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights — Voices from the Port of Djibouti",
  description:
    "Perspectives, portraits, and field notes from Oceangate International Shipping — at the gateway of the Red Sea.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Oceangate Insights",
    description:
      "Perspectives, portraits, and field notes from Oceangate International Shipping.",
    url: "/insights",
    type: "website",
  },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function InsightsIndex() {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-32 lg:pt-48 lg:pb-44">
      <div className="grain" />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-copper" />
          <p className="text-xs uppercase tracking-[0.3em] text-copper">
            Insights
          </p>
        </div>
        <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          Voices from the
          <br />
          <span className="italic text-copper">gateway of the Red Sea.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-fog lg:text-lg">
          Portraits, field notes, and perspectives from the people building the
          most modern maritime agency in the Horn of Africa.
        </p>

        <div className="mt-20 grid gap-px bg-line lg:grid-cols-2">
          {insights.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group relative bg-ink p-8 transition-colors hover:bg-deep lg:p-12"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-abyss">
                <Image
                  src={post.cover}
                  alt={post.coverAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.25em] text-copper">
                {post.kicker}
              </p>
              <h2 className="font-display mt-4 text-2xl leading-tight text-paper transition-colors group-hover:text-copper lg:text-3xl">
                {post.title}
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-fog">
                {post.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted">
                <span>{formatDate(post.date)}</span>
                <span className="h-px w-6 bg-line" />
                <span>{post.readingTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
