import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  FlaskConical,
  HeartPulse,
  Network,
  ScanLine,
  Stethoscope,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import noisyLabels from "@/assets/research-noisy-labels.jpg";
import noisySegmentation from "@/assets/research_learning_with_segmentation_noise.jpg";
import halluciantion from "@/assets/research_hallucination.jpg";
import textgrad from "@/assets/research_text_feedback.png";
import octotools from "@/assets/research-octotools.png";
import cerebra_a from "@/assets/research-cerebra-a.jpg";
import cerebra_b from "@/assets/research_cerebra-b.jpg";
import radplan from "@/assets/research_radplan.jpg";
import biomedicalDiscovery from "@/assets/research_biomedical_discovery.png";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — Sheng Liu" },
      {
        name: "description",
        content: "Auditable AI systems for reliable learning, controllable reasoning, and biomedicine.",
      },
      { property: "og:title", content: "Research — Sheng Liu" },
      {
        property: "og:description",
        content: "Auditable AI systems for reliable learning, controllable reasoning, and biomedicine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Research,
});

type VisualType = "scatter" | "scan" | "steer" | "feedback" | "tools" | "clinical";

type SelectedWork = {
  title: string;
  badge?: string;
  href?: string;
};

type ResearchArea = {
  number: string;
  title: string;
  description: string;
  keywords: string[];
  selectedWork: SelectedWork[];
  figures: { title: string; visual: VisualType; image?: string }[];
};

const researchAreas: ResearchArea[] = [
  {
    number: "01",
    title: "Reliable Learning from Real World Data",
    description:
      "Real world data are noisy, incomplete, and heterogeneous. I develop methods that train model reliably when training data are imperfect.",
    keywords: ["Robustness", "Generalization", "Real-world data"],
    selectedWork: [
      { title: "Early-learning regularization prevents memorization of noisy labels", badge: "NeurIPS", href: "https://arxiv.org/pdf/2007.00151" },
      { title: "Adaptive early-learning correction for segmentation from noisy annotations", badge: "CVPR, Spotlight", href: "https://arxiv.org/abs/2110.03740" },
      { title: "Multiple instance learning via iterative self-paced supervised contrastive learning", badge: "CVPR", href: "https://arxiv.org/pdf/2210.09452" },
      { title: "More thinking, less seeing? assessing amplified hallucination in multimodal reasoning models", badge: "NeurIPS", href: "https://arxiv.org/pdf/2505.21523" },

    ],
    figures: [
      { title: "Learning from noisy data", visual: "scatter", image: noisyLabels },
      { title: "Robust medical segmentation", visual: "scan", image: noisySegmentation },
    ],
  },
  {
    number: "02",
    title: "Controllable and Auditable Reasoning",
    description:
      "Powerful models are not enough. We need to control how they reason, adapt their behavior at inference time, and understand why their outputs change (with human language as feedback).",
    keywords: ["Steering", "Adaptation", "Interpretability"],
    selectedWork: [
      { title: "Reducing hallucinations in vision-language models via latent space steering", badge: "ICLR, Spotlight", href: "https://arxiv.org/abs/2410.15778" },
      { title: "In-context vectors for more effective and controllable ICL", badge: "ICML", href: "https://arxiv.org/abs/2311.16013" },
      { title: "Optimizing generative AI by backpropagating language model feedback", badge: "Nature", href: "https://arxiv.org/abs/2406.07496" },
      { title: "Fractional reasoning: controlling compute for better reasoning", href: "https://scholar.google.com/scholar?q=Sheng+Liu+fractional+reasoning" },
    ],
    figures: [
      { title: "Latent steering", visual: "steer", image: halluciantion },
      { title: "Natural-language feedback", visual: "feedback", image:textgrad },
    ],
  },
  {
    number: "03",
    title: "Agentic AI with Verifiable Actions",
    description:
      "AI systems that gather evidence, use tools, and take multi-step actions while preserving a transparent and inspectable decision trail.",
    keywords: ["Tool use", "Multi-agent systems", "Self-audit"],
    selectedWork: [
      { title: "OctoTools: an agentic framework with extensible tools", badge: "NAACL, Best Paper", href: "https://arxiv.org/abs/2502.11271" },
      { title: "CEREBRA: a multidisciplinary agentic AI system for dementia characterization and risk assessment", badge: "Under Review @ Nature Medicine", href: "https://cerebra-health.com/" },
      { title: "In-the-flow agentic system optimization for effective planning and tool use", badge: "ICLR, Oral", href: "https://arxiv.org/pdf/2510.05592" },
    ],
    figures: [
      { title: "Extensible reasoning tools", visual: "tools", image: octotools },
      { title: "Auditable clinical agents", visual: "clinical", image: cerebra_a },
    ],
  },
];

type ImpactArea = {
  icon: typeof Stethoscope;
  category: string;
  title: string;
  description: string;
  visual: VisualType;
  image?: string;
  selectedWork: SelectedWork[];
};

const impactAreas: ImpactArea[] = [
  {
    icon: Stethoscope,
    category: "Clinical decisions",
    title: "Disease risk stratification",
    description: "Multimodal reasoning across imaging, EHR, clinical notes, and laboratory evidence.",
    visual: "clinical" as const,
    image: cerebra_b,
    selectedWork: [
      { title: "CEREBRA: an agentic AI system for dementia characterization and risk assessment", badge: "Under Review @ Nature Medicine" },
      { title: "Generalizable deep learning model for early Alzheimer's disease detection from structural MRIs", badge: "Scientific Reports", href: "https://www.nature.com/articles/s41598-022-20674-x" },
       { title: "Time-Series Analysis via Low-Rank Matrix Factorization Applied to Infant-Sleep Data", badge: "NeurIPS", href: "https://arxiv.org/pdf/1904.04780" },
    
    ],
  },
  {
    icon: HeartPulse,
    category: "Treatment planning",
    title: "AI-guided radiotherapy",
    description: "Turning clinical intent into auditable, deliverable treatment plans.",
    visual: "scan" as const,
    image: radplan,
    selectedWork: [
      { title: "GPT-RadPlan: automated radiotherapy planning with large language models", badge: "Best in Therapy AAPM, Medical Physics", href: "https://scholar.google.com/scholar?q=Sheng+Liu+GPT-RadPlan+radiotherapy" },
      { title: "TextGrad: Automatic \"Differentiation\" via Text", badge: "Nature", href: "https://arxiv.org/pdf/2406.07496" },
    ],
  },
  {
    icon: FlaskConical,
    category: "Scientific discovery",
    title: "AI for Biomedical Discovery",
    description: "Turning heterogeneous evidence into testable hypotheses.",
    visual: "scatter" as const,
    image: biomedicalDiscovery,
    selectedWork: [
      { title: "We are interested in AI systems that connect evidence across clinical data, imaging, literature, and biological measurements to generate and refine scientific hypotheses.", badge: "Ongoing"},
      // { title: "Towards self-auditing and trustworthy medical agents", badge: "Preprint", href: "https://scholar.google.com/scholar?q=Sheng+Liu+self-auditing+trustworthy+medical+agents" },
    ],
  },
];

function WorkItem({ work }: { work: SelectedWork }) {
  return (
    <li className="flex gap-2.5 text-xs leading-relaxed text-foreground/80">
      <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 rounded-full bg-primary/80" />
      <span>
        {work.href ? (
          <a
            href={work.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-primary/25 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary"
          >
            {work.title}
          </a>
        ) : (
          work.title
        )}
        {work.badge ? <span className="font-medium text-primary"> ({work.badge})</span> : null}
      </span>
    </li>
  );
}

function Framework() {
  const pillars = [
    { icon: Database, title: "Reliable learning", note: "Imperfect evidence", tone: "bg-research-soft" },
    { icon: BrainCircuit, title: "Controllable reasoning", note: "Steer and adapt", tone: "bg-research-rose" },
    { icon: Wrench, title: "Agentic systems", note: "Act and verify", tone: "bg-research-mint" },
  ];

  return (
    <figure aria-label="Auditable AI for biomedicine research framework" className="w-full">
      <figcaption className="mb-4 text-center text-[11px] font-medium text-foreground/70">
        Heterogeneous biomedical evidence
      </figcaption>
      <div className="grid grid-cols-5 items-end gap-2 text-center text-[10px] text-muted-foreground">
        <div><ScanLine className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />Imaging</div>
        <div><Database className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />EHR</div>
        <div><Activity className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />Notes</div>
        <div><Network className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />Genomics</div>
        <div><BrainCircuit className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />Knowledge</div>
      </div>

      <div className="mx-auto mt-3 h-4 w-px bg-rule" />
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2">
        {pillars.map(({ icon: Icon, title, note, tone }, index) => (
          <div className="contents" key={title}>
            <div className={`${tone} flex min-h-24 flex-col items-center justify-center px-2 py-3 text-center`}>
              <Icon className="mb-2 size-[22px] text-primary" strokeWidth={1.4} />
              <p className="text-[11px] font-medium leading-tight text-foreground">{title}</p>
              <p className="mt-1 text-[10px] leading-tight text-muted-foreground">{note}</p>
            </div>
            {index < pillars.length - 1 ? (
              <ArrowRight className="size-3.5 text-muted-foreground" strokeWidth={1.3} />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mx-auto h-4 w-px bg-rule" />
      <p className="text-center text-[11px] font-medium text-foreground/75">Auditable AI for real-world biomedicine</p>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center text-[10px] leading-tight text-muted-foreground">
        <div>
          <Stethoscope className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />
          Better clinical decisions
        </div>
        <div>
          <FlaskConical className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />
          Scientific discoveries
        </div>
        <div>
          <HeartPulse className="mx-auto mb-1 size-[18px] text-primary" strokeWidth={1.4} />
          More effective treatments
        </div>
      </div>
    </figure>
  );
}

function Visual({ type }: { type: VisualType }) {
  const content: Record<VisualType, ReactNode> = {
    scatter: (
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-x-4 bottom-4 top-4 border-b border-l border-border" />
        {[20, 31, 43, 56, 68, 80].map((left, index) => (
          <span key={`a-${left}`} className="absolute size-1.5 rounded-full bg-primary" style={{ left: `${left}%`, top: `${67 - index * 7}%` }} />
        ))}
        {[25, 37, 49, 62, 74, 85].map((left, index) => (
          <span key={`b-${left}`} className="absolute size-1.5 rounded-full bg-destructive/60" style={{ left: `${left}%`, top: `${27 + index * 7}%` }} />
        ))}
        <div className="absolute bottom-[31%] left-[15%] h-px w-[72%] -rotate-[22deg] bg-primary" />
      </div>
    ),
    scan: (
      <div className="grid h-full grid-cols-2 gap-px bg-border">
        {[0, 1].map((item) => (
          <div key={item} className="relative flex items-center justify-center bg-foreground/90">
            <div className="size-12 rounded-[45%] border-[6px] border-muted-foreground/70 bg-muted" />
            <div className="absolute h-10 w-4 rounded-full bg-accent/75" />
            <ScanLine className="absolute size-7 text-primary" strokeWidth={1} />
          </div>
        ))}
      </div>
    ),
    steer: (
      <div className="flex h-full items-center justify-center gap-2 px-2">
        <div className="grid gap-1"><div className="h-6 w-10 bg-muted" /><div className="h-6 w-10 bg-research-soft" /></div>
        <ArrowRight className="size-3 text-muted-foreground" />
        <div className="border border-primary/20 bg-card px-2 py-2 text-center text-[8px] leading-tight">latent<br />direction</div>
        <ArrowRight className="size-3 text-muted-foreground" />
        <CheckCircle2 className="size-6 text-primary" strokeWidth={1.4} />
      </div>
    ),
    feedback: (
      <div className="relative flex h-full items-center justify-center">
        <div className="border border-border bg-card px-3 py-2 text-center text-[8px]">Natural-language<br />feedback</div>
        <div className="absolute bottom-2 bg-research-soft px-3 py-1 text-[8px]">Update model</div>
        <div className="absolute inset-x-5 inset-y-4 rounded-full border border-primary/30" />
      </div>
    ),
    tools: (
      <div className="flex h-full items-center justify-center gap-2">
        <div className="grid gap-1.5 text-[7px] text-muted-foreground"><span>Web</span><span>Code</span><span>Data</span></div>
        <Network className="size-10 text-primary" strokeWidth={1.1} />
        <div className="grid gap-1.5 text-[7px] text-muted-foreground"><span>Vision</span><span>Domain</span><span>Tools</span></div>
      </div>
    ),
    clinical: (
      <div className="flex h-full items-center justify-around px-3">
        <Activity className="size-8 text-primary" strokeWidth={1.2} />
        <ArrowRight className="size-3 text-muted-foreground" />
        <div className="relative size-11 rounded-full border-[6px] border-muted bg-foreground/85"><span className="absolute inset-2 rounded-full bg-accent" /></div>
        <ArrowRight className="size-3 text-muted-foreground" />
        <CheckCircle2 className="size-7 text-primary" strokeWidth={1.2} />
      </div>
    ),
  };

  return <div className="h-28 bg-muted/45">{content[type]}</div>;
}

function Research() {
  return (
    <div className="fade-up pb-12">
      <header className="pb-12">
        <p className="eyebrow mb-4">Research overview</p>
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12">
          <div className="pt-1">
            <h1 className="font-display text-4xl leading-[1.05] sm:text-5xl">Auditable AI<br />for Biomedicine</h1>
            <p className="font-display text-lg italic text-foreground/75">Reliable evidence. Controllable reasoning. Auditable action.</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              I develop AI systems that can reason, adapt, and act in complex real-world environments—turning heterogeneous evidence into trustworthy decisions, scientific discoveries, and better paths to treatment.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="sm" className="min-w-36 rounded-sm shadow-none">
                <a href="https://scholar.google.com/scholar?q=Sheng+Liu" target="_blank" rel="noreferrer">
                  View publications <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="min-w-28 rounded-sm shadow-none">
                <a href="mailto:shengl@stanford.edu">Contact me</a>
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[24rem] md:mx-0 md:ml-auto">
            <Framework />
          </div>
        </div>
      </header>


      <section className="grid border-t border-rule lg:grid-cols-3">
        {researchAreas.map((area, index) => (
          <article
            key={area.number}
            className={`flex flex-col py-10 lg:px-7 ${index === 0 ? "lg:pl-0" : "border-t border-rule lg:border-l lg:border-t-0"} ${index === researchAreas.length - 1 ? "lg:pr-0" : ""}`}
          >
            <p className="meta mb-3 text-primary">{area.number}</p>
            <h2 className="min-h-0 font-display text-2xl leading-[1.05] lg:min-h-20">{area.title}</h2>
            <p className="mt-4 min-h-0 text-sm leading-relaxed text-foreground/75 lg:min-h-36">{area.description}</p>
            <p className="meta mt-4 flex min-h-0 flex-wrap gap-x-2 text-[9px] uppercase lg:min-h-8">
              {area.keywords.map((keyword) => <span key={keyword}>{keyword}</span>)}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-2">
              {area.figures.map((figure) => (
                <figure key={figure.title}>
                  {figure.image ? (
                    <img
                      src={figure.image}
                      alt={figure.title}
                      loading="lazy"
                      className="h-28 w-full border border-rule bg-background object-cover"
                    />
                  ) : (
                    <Visual type={figure.visual} />
                  )}
                  <figcaption className="mt-2 text-[10px] leading-snug text-muted-foreground">{figure.title}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-7">
              <p className="section-heading mb-3 text-[11px]">Selected work</p>
              <ul className="space-y-2.5">
                {area.selectedWork.map((work) => <WorkItem key={work.title} work={work} />)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-8 bg-research-soft px-5 py-12 sm:px-8 sm:py-14">
        <p className="eyebrow mb-3 text-primary">From research to impact</p>
        <h2 className="font-display text-3xl leading-tight sm:text-4xl">Turning AI into real biomedical value</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75">
          We apply these ideas to high-stakes problems in biomedicine, where reliability and auditability are requirements, not preferences.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-7">
        {impactAreas.map(({ icon: Icon, category, title, description, visual, image, selectedWork }) => (
          <article key={category}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Icon className="size-4" strokeWidth={1.4} />
              <p className="meta text-[9px] uppercase">{category}</p>
            </div>
            <h3 className="mt-3 font-display text-xl">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground/75">{description}</p>
            <div className="mt-3 overflow-hidden border border-rule bg-background">
              {image ? (
                <img src={image} alt={title} loading="lazy" className="h-48 w-full object-contain" />
              ) : (
                <Visual type={visual} />
              )}
            </div>
            <div className="mt-6">
              <p className="section-heading mb-3 text-[11px]">Selected work</p>
              <ul className="space-y-2.5">
                {selectedWork.map((work) => <WorkItem key={work.title} work={work} />)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>

    <footer className="grid gap-10 border-b border-rule py-14 md:grid-cols-[1.25fr_0.75fr] md:items-end">
      <p className="font-display text-2xl italic leading-snug text-foreground/70 sm:text-3xl">
        Toward a future where AI is a trustworthy partner in biomedical discovery and care.
      </p>
      <div className="border-l border-rule pl-6">
        <p className="section-heading mb-3 text-[11px]">Selected publications</p>
        <p className="text-xs leading-relaxed text-muted-foreground">See my complete and current publication list on Google Scholar.</p>
        <a
          href="https://scholar.google.com/citations?user=rzhzR-cAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary"
        >
          View all publications <ExternalLink className="size-3" strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  </div>
);
}