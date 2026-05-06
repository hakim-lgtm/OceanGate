export type Insight = {
  slug: string;
  title: string;
  kicker: string;
  excerpt: string;
  date: string;
  readingTime: string;
  cover: string;
  coverAlt: string;
};

export const insights: Insight[] = [
  {
    slug: "meet-hakim-nagy",
    title: "Meet Hakim Nagy — Founder & CEO of Oceangate",
    kicker: "Portrait",
    excerpt:
      "From Djibouti to Le Havre and back — the path of an entrepreneur who set out to make the Port of Djibouti the most modern, human, and efficient gateway of world maritime trade.",
    date: "2026-05-06",
    readingTime: "4 min read",
    cover: "/hakim.jpg",
    coverAlt: "Hakim Nagy, Founder and CEO of Oceangate International Shipping",
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
