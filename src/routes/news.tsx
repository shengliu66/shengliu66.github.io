import { createFileRoute } from "@tanstack/react-router";
import { news } from "@/lib/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Sheng Liu" },
      {
        name: "description",
        content:
          "Latest news from Sheng Liu: papers, invited talks, workshops, and service in machine learning and AI for healthcare.",
      },
      { property: "og:title", content: "News — Sheng Liu" },
      {
        property: "og:description",
        content: "Papers, invited talks, workshops, and academic service.",
      },
    ],
  }),
  component: News,
});

function News() {
  return (
    <div className="fade-up space-y-16">
      <header>
        <h1 className="font-display italic">Latest News</h1>
      </header>

      {news.map((group) => (
        <section key={group.year}>
          <h2 className="eyebrow mb-8 border-b border-[var(--rule)] pb-2">{group.year}</h2>
          <ul className="space-y-7">
            {group.items.map((item, i) => (
              <li key={i} className="group flex gap-8">
                <span className="meta w-16 shrink-0 pt-1">
                  {group.year}.{item.date}
                </span>
                <p className="text-[15px] leading-normal text-foreground/90 transition-colors group-hover:text-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
