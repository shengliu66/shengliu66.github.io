import { n as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as HeartPulse, c as Database, d as ArrowRight, f as Activity, i as Network, l as CircleCheck, n as Stethoscope, o as FlaskConical, r as ScanLine, s as ExternalLink, t as Wrench, u as BrainCircuit } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-C6tuGC4n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var research_noisy_labels_default = "/assets/research-noisy-labels-DmYrKYu_.jpg";
var research_learning_with_segmentation_noise_default = "/assets/research_learning_with_segmentation_noise-DIwp0Psw.jpg";
var research_hallucination_default = "/assets/research_hallucination-CSncjITN.jpg";
var research_text_feedback_default = "/assets/research_text_feedback-Bx5No1wy.png";
var research_octotools_default = "/assets/research-octotools-DET8eDeg.png";
var research_cerebra_a_default = "/assets/research-cerebra-a-Q9fgzj_v.jpg";
var research_cerebra_b_default = "/assets/research_cerebra-b-BjXa3BGC.jpg";
var research_radplan_default = "/assets/research_radplan-C_KQN-EK.jpg";
var research_biomedical_discovery_default = "/assets/research_biomedical_discovery-BccQB0LF.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var researchAreas = [
	{
		number: "01",
		title: "Reliable Learning from Real World Data",
		description: "Real world data are noisy, incomplete, and heterogeneous. I develop methods that train model reliably when training data are imperfect.",
		keywords: [
			"Robustness",
			"Generalization",
			"Real-world data"
		],
		selectedWork: [
			{
				title: "Early-learning regularization prevents memorization of noisy labels",
				badge: "NeurIPS",
				href: "https://arxiv.org/pdf/2007.00151"
			},
			{
				title: "Adaptive early-learning correction for segmentation from noisy annotations",
				badge: "CVPR, Spotlight",
				href: "https://arxiv.org/abs/2110.03740"
			},
			{
				title: "Multiple instance learning via iterative self-paced supervised contrastive learning",
				badge: "CVPR",
				href: "https://arxiv.org/pdf/2210.09452"
			},
			{
				title: "More thinking, less seeing? assessing amplified hallucination in multimodal reasoning models",
				badge: "NeurIPS",
				href: "https://arxiv.org/pdf/2505.21523"
			}
		],
		figures: [{
			title: "Learning from noisy data",
			visual: "scatter",
			image: research_noisy_labels_default
		}, {
			title: "Robust medical segmentation",
			visual: "scan",
			image: research_learning_with_segmentation_noise_default
		}]
	},
	{
		number: "02",
		title: "Controllable and Auditable Reasoning",
		description: "Powerful models are not enough. We need to control how they reason, adapt their behavior at inference time, and understand why their outputs change (with human language as feedback).",
		keywords: [
			"Steering",
			"Adaptation",
			"Interpretability"
		],
		selectedWork: [
			{
				title: "Reducing hallucinations in vision-language models via latent space steering",
				badge: "ICLR, Spotlight",
				href: "https://arxiv.org/abs/2410.15778"
			},
			{
				title: "In-context vectors for more effective and controllable ICL",
				badge: "ICML",
				href: "https://arxiv.org/abs/2311.16013"
			},
			{
				title: "Optimizing generative AI by backpropagating language model feedback",
				badge: "Nature",
				href: "https://arxiv.org/abs/2406.07496"
			},
			{
				title: "Fractional reasoning: controlling compute for better reasoning",
				href: "https://scholar.google.com/scholar?q=Sheng+Liu+fractional+reasoning"
			}
		],
		figures: [{
			title: "Latent steering",
			visual: "steer",
			image: research_hallucination_default
		}, {
			title: "Natural-language feedback",
			visual: "feedback",
			image: research_text_feedback_default
		}]
	},
	{
		number: "03",
		title: "Agentic AI with Verifiable Actions",
		description: "AI systems that gather evidence, use tools, and take multi-step actions while preserving a transparent and inspectable decision trail.",
		keywords: [
			"Tool use",
			"Multi-agent systems",
			"Self-audit"
		],
		selectedWork: [
			{
				title: "OctoTools: an agentic framework with extensible tools",
				badge: "NAACL, Best Paper",
				href: "https://arxiv.org/abs/2502.11271"
			},
			{
				title: "CEREBRA: a multidisciplinary agentic AI system for dementia characterization and risk assessment",
				badge: "Under Review @ Nature Medicine",
				href: "https://cerebra-health.com/"
			},
			{
				title: "In-the-flow agentic system optimization for effective planning and tool use",
				badge: "ICLR, Oral",
				href: "https://arxiv.org/pdf/2510.05592"
			}
		],
		figures: [{
			title: "Extensible reasoning tools",
			visual: "tools",
			image: research_octotools_default
		}, {
			title: "Auditable clinical agents",
			visual: "clinical",
			image: research_cerebra_a_default
		}]
	}
];
var impactAreas = [
	{
		icon: Stethoscope,
		category: "Clinical decisions",
		title: "Disease risk stratification",
		description: "Multimodal reasoning across imaging, EHR, clinical notes, and laboratory evidence.",
		visual: "clinical",
		image: research_cerebra_b_default,
		selectedWork: [
			{
				title: "CEREBRA: an agentic AI system for dementia characterization and risk assessment",
				badge: "Under Review @ Nature Medicine"
			},
			{
				title: "Generalizable deep learning model for early Alzheimer's disease detection from structural MRIs",
				badge: "Scientific Reports",
				href: "https://www.nature.com/articles/s41598-022-20674-x"
			},
			{
				title: "Time-Series Analysis via Low-Rank Matrix Factorization Applied to Infant-Sleep Data",
				badge: "NeurIPS",
				href: "https://arxiv.org/pdf/1904.04780"
			}
		]
	},
	{
		icon: HeartPulse,
		category: "Treatment planning",
		title: "AI-guided radiotherapy",
		description: "Turning clinical intent into auditable, deliverable treatment plans.",
		visual: "scan",
		image: research_radplan_default,
		selectedWork: [{
			title: "GPT-RadPlan: automated radiotherapy planning with large language models",
			badge: "Best in Therapy AAPM, Medical Physics",
			href: "https://scholar.google.com/scholar?q=Sheng+Liu+GPT-RadPlan+radiotherapy"
		}, {
			title: "TextGrad: Automatic \"Differentiation\" via Text",
			badge: "Nature",
			href: "https://arxiv.org/pdf/2406.07496"
		}]
	},
	{
		icon: FlaskConical,
		category: "Scientific discovery",
		title: "AI for Biomedical Discovery",
		description: "Turning heterogeneous evidence into testable hypotheses.",
		visual: "scatter",
		image: research_biomedical_discovery_default,
		selectedWork: [{
			title: "We are interested in AI systems that connect evidence across clinical data, imaging, literature, and biological measurements to generate and refine scientific hypotheses.",
			badge: "Ongoing"
		}]
	}
];
function WorkItem({ work }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "flex gap-2.5 text-xs leading-relaxed text-foreground/80",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: "mt-[7px] size-1 shrink-0 rounded-full bg-primary/80"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [work.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: work.href,
			target: "_blank",
			rel: "noreferrer",
			className: "underline decoration-primary/25 underline-offset-2 transition-colors hover:text-primary hover:decoration-primary",
			children: work.title
		}) : work.title, work.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-medium text-primary",
			children: [
				" (",
				work.badge,
				")"
			]
		}) : null] })]
	});
}
function Framework() {
	const pillars = [
		{
			icon: Database,
			title: "Reliable learning",
			note: "Imperfect evidence",
			tone: "bg-research-soft"
		},
		{
			icon: BrainCircuit,
			title: "Controllable reasoning",
			note: "Steer and adapt",
			tone: "bg-research-rose"
		},
		{
			icon: Wrench,
			title: "Agentic systems",
			note: "Act and verify",
			tone: "bg-research-mint"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		"aria-label": "Auditable AI for biomedicine research framework",
		className: "w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mb-4 text-center text-[11px] font-medium text-foreground/70",
				children: "Heterogeneous biomedical evidence"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-5 items-end gap-2 text-center text-[10px] text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Imaging"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "EHR"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Notes"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Genomics"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrainCircuit, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Knowledge"] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-4 w-px bg-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2",
				children: pillars.map(({ icon: Icon, title, note, tone }, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "contents",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `${tone} flex min-h-24 flex-col items-center justify-center px-2 py-3 text-center`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "mb-2 size-[22px] text-primary",
								strokeWidth: 1.4
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] font-medium leading-tight text-foreground",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] leading-tight text-muted-foreground",
								children: note
							})
						]
					}), index < pillars.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "size-3.5 text-muted-foreground",
						strokeWidth: 1.3
					}) : null]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto h-4 w-px bg-rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-[11px] font-medium text-foreground/75",
				children: "Auditable AI for real-world biomedicine"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid grid-cols-3 gap-3 text-center text-[10px] leading-tight text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stethoscope, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Better clinical decisions"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "Scientific discoveries"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartPulse, {
						className: "mx-auto mb-1 size-[18px] text-primary",
						strokeWidth: 1.4
					}), "More effective treatments"] })
				]
			})
		]
	});
}
function Visual({ type }) {
	const content = {
		scatter: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-4 bottom-4 top-4 border-b border-l border-border" }),
				[
					20,
					31,
					43,
					56,
					68,
					80
				].map((left, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute size-1.5 rounded-full bg-primary",
					style: {
						left: `${left}%`,
						top: `${67 - index * 7}%`
					}
				}, `a-${left}`)),
				[
					25,
					37,
					49,
					62,
					74,
					85
				].map((left, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute size-1.5 rounded-full bg-destructive/60",
					style: {
						left: `${left}%`,
						top: `${27 + index * 7}%`
					}
				}, `b-${left}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[31%] left-[15%] h-px w-[72%] -rotate-[22deg] bg-primary" })
			]
		}),
		scan: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full grid-cols-2 gap-px bg-border",
			children: [0, 1].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-center bg-foreground/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-12 rounded-[45%] border-[6px] border-muted-foreground/70 bg-muted" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute h-10 w-4 rounded-full bg-accent/75" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanLine, {
						className: "absolute size-7 text-primary",
						strokeWidth: 1
					})
				]
			}, item))
		}),
		steer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center justify-center gap-2 px-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-10 bg-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-6 w-10 bg-research-soft" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-primary/20 bg-card px-2 py-2 text-center text-[8px] leading-tight",
					children: [
						"latent",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"direction"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "size-6 text-primary",
					strokeWidth: 1.4
				})
			]
		}),
		feedback: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full items-center justify-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-card px-3 py-2 text-center text-[8px]",
					children: [
						"Natural-language",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"feedback"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-2 bg-research-soft px-3 py-1 text-[8px]",
					children: "Update model"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-5 inset-y-4 rounded-full border border-primary/30" })
			]
		}),
		tools: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center justify-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5 text-[7px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Web" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Code" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Network, {
					className: "size-10 text-primary",
					strokeWidth: 1.1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1.5 text-[7px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vision" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Domain" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Tools" })
					]
				})
			]
		}),
		clinical: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full items-center justify-around px-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, {
					className: "size-8 text-primary",
					strokeWidth: 1.2
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative size-11 rounded-full border-[6px] border-muted bg-foreground/85",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-2 rounded-full bg-accent" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3 text-muted-foreground" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
					className: "size-7 text-primary",
					strokeWidth: 1.2
				})
			]
		})
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-28 bg-muted/45",
		children: content[type]
	});
}
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up pb-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "pb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mb-4",
					children: "Research overview"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "font-display text-4xl leading-[1.05] sm:text-5xl",
								children: [
									"Auditable AI",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"for Biomedicine"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-lg italic text-foreground/75",
								children: "Reliable evidence. Controllable reasoning. Auditable action."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-foreground/80",
								children: "I develop AI systems that can reason, adapt, and act in complex real-world environments—turning heterogeneous evidence into trustworthy decisions, scientific discoveries, and better paths to treatment."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									className: "min-w-36 rounded-sm shadow-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "https://scholar.google.com/scholar?q=Sheng+Liu",
										target: "_blank",
										rel: "noreferrer",
										children: ["View publications ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { "aria-hidden": "true" })]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									asChild: true,
									size: "sm",
									variant: "outline",
									className: "min-w-28 rounded-sm shadow-none",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:shengl@stanford.edu",
										children: "Contact me"
									})
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-[24rem] md:mx-0 md:ml-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Framework, {})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid border-t border-rule lg:grid-cols-3",
				children: researchAreas.map((area, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `flex flex-col py-10 lg:px-7 ${index === 0 ? "lg:pl-0" : "border-t border-rule lg:border-l lg:border-t-0"} ${index === researchAreas.length - 1 ? "lg:pr-0" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mb-3 text-primary",
							children: area.number
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "min-h-0 font-display text-2xl leading-[1.05] lg:min-h-20",
							children: area.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 min-h-0 text-sm leading-relaxed text-foreground/75 lg:min-h-36",
							children: area.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "meta mt-4 flex min-h-0 flex-wrap gap-x-2 text-[9px] uppercase lg:min-h-8",
							children: area.keywords.map((keyword) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: keyword }, keyword))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 grid grid-cols-2 gap-2",
							children: area.figures.map((figure) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [figure.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: figure.image,
								alt: figure.title,
								loading: "lazy",
								className: "h-28 w-full border border-rule bg-background object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { type: figure.visual }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-2 text-[10px] leading-snug text-muted-foreground",
								children: figure.title
							})] }, figure.title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "section-heading mb-3 text-[11px]",
								children: "Selected work"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-2.5",
								children: area.selectedWork.map((work) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkItem, { work }, work.title))
							})]
						})
					]
				}, area.number))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-8 bg-research-soft px-5 py-12 sm:px-8 sm:py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mb-3 text-primary",
						children: "From research to impact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl leading-tight sm:text-4xl",
						children: "Turning AI into real biomedical value"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-foreground/75",
						children: "We apply these ideas to high-stakes problems in biomedicine, where reliability and auditability are requirements, not preferences."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-10 md:grid-cols-3 md:gap-7",
						children: impactAreas.map(({ icon: Icon, category, title, description, visual, image, selectedWork }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-4",
									strokeWidth: 1.4
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "meta text-[9px] uppercase",
									children: category
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl",
								children: title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-foreground/75",
								children: description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 overflow-hidden border border-rule bg-background",
								children: image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: image,
									alt: title,
									loading: "lazy",
									className: "h-48 w-full object-contain"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Visual, { type: visual })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "section-heading mb-3 text-[11px]",
									children: "Selected work"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2.5",
									children: selectedWork.map((work) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkItem, { work }, work.title))
								})]
							})
						] }, category))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "grid gap-10 border-b border-rule py-14 md:grid-cols-[1.25fr_0.75fr] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl italic leading-snug text-foreground/70 sm:text-3xl",
					children: "Toward a future where AI is a trustworthy partner in biomedical discovery and care."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-l border-rule pl-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "section-heading mb-3 text-[11px]",
							children: "Selected publications"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: "See my complete and current publication list on Google Scholar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://scholar.google.com/citations?user=rzhzR-cAAAAJ&hl=en&oi=ao",
							target: "_blank",
							rel: "noreferrer",
							className: "mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary",
							children: ["View all publications ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-3",
								strokeWidth: 1.5
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { Research as component };
