import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Sheng Liu" },
      {
        name: "description",
        content:
          "Active research areas: robust and reliable AI, AI systems and agents, and AI for human disease and health.",
      },
      { property: "og:title", content: "Research — Sheng Liu" },
      {
        property: "og:description",
        content:
          "Robust and reliable AI, AI systems and agents, and AI for human disease and health.",
      },
    ],
  }),
  component: Research,
});

type Pub = { title: string; authors: string; venue: string; note?: string };

const areas: { n: string; title: string; body: string; pubs: Pub[] }[] = [
  {
    n: "01",
    title: "Robust and Reliable AI",
    body: "The real world is noisy: data can be imperfect, labels inaccurate, and prompts ambiguous. We develop methods with theoretical justification for robust pre-training and inference-time steering.",
    pubs: [
      {
        title: "Reducing hallucinations in vision-language models via latent space steering",
        authors: "Sheng Liu, Haotian Ye, Lei Xing, James Zou",
        venue: "ICLR 2025",
        note: "Spotlight",
      },
      {
        title: "In-context vector: making in-context learning more effective and controllable",
        authors: "Sheng Liu, Haotian Ye, Lei Xing, James Zou",
        venue: "ICML 2024",
      },
      {
        title: "Adaptive early-learning correction for segmentation from noisy annotations",
        authors: "Sheng Liu*, Kangning Liu*, Weicheng Zhu, Yiqiu Shen, Carlos Fernandez-Granda",
        venue: "CVPR 2022",
        note: "Oral",
      },
      {
        title: "Early-learning regularization prevents memorization of noisy labels",
        authors: "Sheng Liu, Jonathan Niles-Weed, Narges Razavian, Carlos Fernandez-Granda",
        venue: "NeurIPS 2020",
      },
    ],
  },
  {
    n: "02",
    title: "AI Systems and AI Agents",
    body: "We build AI software platforms that assist human experts in clinical practice and promote human–AI collaboration, and we optimize AI systems built with large language models.",
    pubs: [
      {
        title: "Optimizing generative AI by backpropagating language model feedback",
        authors:
          "Mert Yuksekgonul*, Federico Bianchi*, Joseph Boen*, Sheng Liu*, Pan Lu*, Zhi Huang*, Carlos Guestrin, James Zou",
        venue: "Nature 2025",
      },
      {
        title: "OctoTools: an agentic framework with extensible tools for complex reasoning",
        authors: "Pan Lu*, Bowen Chen*, Sheng Liu*, Rahul Thapa, Joseph Boen, James Zou",
        venue: "NAACL KnowledgeNLP 2025",
        note: "Best paper award",
      },
    ],
  },
  {
    n: "03",
    title: "AI for Human Disease and Health",
    body: "Medicine is high-stakes: accuracy and reliability are paramount. We build models supporting clinical decisions in radiation oncology and Alzheimer's disease, integrating domain knowledge with modern machine learning.",
    pubs: [
      {
        title: "Cerebra: A Multidisciplinary Agentic AI Board for Multimodal Dementia Characterization and Risk Assessment",
        authors: "Sheng Liu*, Long Chen*, Zeyun Zhao, Qinglin Gou, Qingyue Wei, Arjun Masurkar, Kevin M Spiegler, Philip Kuball, Stefania C Bray, Megan Bernath, Deanna R Willis, Jiang Bian, Lei Xing, Eric Topol, Kyunghyun Cho, Yu Huang, Ruogu Fang, Narges Razavian, James Zou",
        venue: "Under Review",
      },
      {
        title: "Automated radiotherapy treatment planning guided by GPT-4Vision",
        authors: "Sheng Liu*, Oscar Pastor-Serrano*, et al., James Zou, Lei Xing",
        venue: "AAPM 2024",
        note: "Best in Medical Physics",
      },
      {
        title:
          "Generalizable deep learning model for early Alzheimer's disease detection from structural MRIs",
        authors:
          "Sheng Liu, Arjun V. Masurkar, Henry Rusinek, Jingyun Chen, Ben Zhang, Weicheng Zhu, Carlos Fernandez-Granda, Narges Razavian",
        venue: "Nature Scientific Reports 2023",
      },
    ],
  },
];

function Research() {
  return (
    <div className="fade-up space-y-20">
      <header>
        <h1 className="font-display italic">Research</h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          Three threads, one goal: AI that people can rely on when the stakes are real.
        </p>
      </header>

      {areas.map((a) => (
        <section key={a.n}>
          <div className="flex items-baseline gap-4 border-b border-[var(--rule)] pb-2">
            <span className="eyebrow">{a.n}</span>
            <h2 className="font-display text-2xl font-medium">{a.title}</h2>
          </div>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{a.body}</p>

          <ul className="mt-8 space-y-8">
            {a.pubs.map((p) => (
              <li key={p.title} className="group">
                <p className="text-[15px] leading-snug text-foreground/90 transition-colors group-hover:text-foreground">
                  {p.title}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{p.authors}</p>
                <p className="meta mt-1.5">
                  <span className="text-foreground/75">{p.venue}</span>
                  {p.note ? <span className="text-primary"> · {p.note}</span> : null}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
