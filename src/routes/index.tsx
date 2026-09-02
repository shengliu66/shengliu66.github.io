import { createFileRoute, Link } from "@tanstack/react-router";
import { allNews } from "@/lib/news";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheng Liu — Auditable AI for Biomedicine" },
      {
        name: "description",
        content:
          "Sheng Liu is a postdoctoral researcher at Stanford University building reliable and auditable AI systems for biomedicine.",
      },
      { property: "og:title", content: "Sheng Liu — Auditable AI Systems for Biomedicine" },
      {
        property: "og:description",
        content:
          "Postdoctoral researcher at Stanford working on reliable, auditable AI systems for biomedicine.",
      },
    ],
  }),
  component: Home,
});

const focus = [
  {
    k: "Robustness",
    v: "Handle noisy data, imperfect labels, and bias — learning that stays reliable when the data is not.",
  },
  {
    k: "Steerability",
    v: "Adapt to feedback and evolving context at inference time, without retraining.",
  },
  {
    k: "Agency",
    v: "Reason and act on complex, real-world tasks as a collaborative partner.",
  },
];

function Home() {
  return (
    <div className="fade-up space-y-20">
      <section>
        <h2 className="font-display mb-8 max-w-xl text-2xl font-light italic leading-snug tracking-tight text-foreground">
          Auditable AI for Biomedicine
        </h2>
        <div className="space-y-6 text-[17px] leading-relaxed text-foreground/90">
          <p>
            I am a Postdoctoral Researcher at{" "}
            <a href="https://stanford.edu" className="link-quiet">
              Stanford University
            </a>
            , working with Prof. James Zou and Prof. Lei Xing. I earned my PhD in Data Science from
            New York University, where I was fortunate to work with Carlos Fernandez-Granda, Narges
            Razavian, and Kyunghyun Cho.
          </p>
          <p>
            My research builds reliable and auditable AI systems that can reason, adapt, and act in
            complex real-world environments. I develop methods for robust learning, controllable
            inference, and agentic AI, with a particular focus on biomedicine, where I am interested
            in turning heterogeneous evidence into trustworthy decisions, scientific discoveries,
            and ultimately better paths to treatment.
          </p>
          <p>
            Outside of academia, I play tennis and am a certified scuba diver and surfer. Some of
            that lives on the <Link to="/gallery" className="link-quiet">Elsewhere</Link> page.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-8 flex items-baseline justify-between border-b border-[var(--rule)] pb-2">
          <h3 className="section-heading">Latest News</h3>
          <Link to="/news" className="meta link-quiet">
            View all
          </Link>
        </div>
        <ul className="space-y-7">
          {allNews.slice(0, 5).map((item) => (
            <li key={`${item.year}-${item.date}-${item.text}`} className="group flex gap-8">
              <span className="meta w-16 shrink-0 pt-1">
                {item.year}.{item.date}
              </span>
              <p className="text-[15px] leading-normal text-foreground/90 transition-colors group-hover:text-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* <section>
        <h3 className="section-heading mb-8 border-b border-[var(--rule)] pb-2">From Autopilot to Copilot</h3>
        <div className="space-y-10">
          {focus.map((f) => (
            <div key={f.k} className="group cursor-default">
              <h4 className="mb-2 font-display text-xl font-medium transition-colors group-hover:text-primary">
                {f.k}
              </h4>
              <p className="text-[15px] leading-relaxed text-foreground/90">{f.v}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="border border-[var(--rule)] bg-card p-10 text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <h3 className="font-display text-xl italic">Interested in collaboration?</h3>
        <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/90">
          We are actively seeking students and collaborators with a background in machine learning,
          large foundation models, AI agents, or AI for medicine.
        </p>
        <a
          href="mailto:shengl@stanford.edu"
          className="mt-8 inline-block bg-primary px-8 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-foreground"
        >
          Send an Inquiry
        </a>
      </section>
    </div>
  );
}
