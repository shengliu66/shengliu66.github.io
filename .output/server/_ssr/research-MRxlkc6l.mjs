import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/research-MRxlkc6l.js
var import_jsx_runtime = require_jsx_runtime();
var areas = [
	{
		n: "01",
		title: "Robust and Reliable AI",
		body: "The real world is noisy: data can be imperfect, labels inaccurate, and prompts ambiguous. We develop methods with theoretical justification for robust pre-training and inference-time steering.",
		pubs: [
			{
				title: "Reducing hallucinations in vision-language models via latent space steering",
				authors: "Sheng Liu, Haotian Ye, Lei Xing, James Zou",
				venue: "ICLR 2025",
				note: "Spotlight"
			},
			{
				title: "In-context vector: making in-context learning more effective and controllable",
				authors: "Sheng Liu, Haotian Ye, Lei Xing, James Zou",
				venue: "ICML 2024"
			},
			{
				title: "Adaptive early-learning correction for segmentation from noisy annotations",
				authors: "Sheng Liu*, Kangning Liu*, Weicheng Zhu, Yiqiu Shen, Carlos Fernandez-Granda",
				venue: "CVPR 2022",
				note: "Oral"
			},
			{
				title: "Early-learning regularization prevents memorization of noisy labels",
				authors: "Sheng Liu, Jonathan Niles-Weed, Narges Razavian, Carlos Fernandez-Granda",
				venue: "NeurIPS 2020"
			}
		]
	},
	{
		n: "02",
		title: "AI Systems and AI Agents",
		body: "We build AI software platforms that assist human experts in clinical practice and promote human–AI collaboration, and we optimize AI systems built with large language models.",
		pubs: [{
			title: "Optimizing generative AI by backpropagating language model feedback",
			authors: "Mert Yuksekgonul*, Federico Bianchi*, Joseph Boen*, Sheng Liu*, Pan Lu*, Zhi Huang*, Carlos Guestrin, James Zou",
			venue: "Nature 2025"
		}, {
			title: "OctoTools: an agentic framework with extensible tools for complex reasoning",
			authors: "Pan Lu*, Bowen Chen*, Sheng Liu*, Rahul Thapa, Joseph Boen, James Zou",
			venue: "NAACL KnowledgeNLP 2025",
			note: "Best paper award"
		}]
	},
	{
		n: "03",
		title: "AI for Human Disease and Health",
		body: "Medicine is high-stakes: accuracy and reliability are paramount. We build models supporting clinical decisions in radiation oncology and Alzheimer's disease, integrating domain knowledge with modern machine learning.",
		pubs: [
			{
				title: "Cerebra: A Multidisciplinary Agentic AI Board for Multimodal Dementia Characterization and Risk Assessment",
				authors: "Sheng Liu*, Long Chen*, Zeyun Zhao, Qinglin Gou, Qingyue Wei, Arjun Masurkar, Kevin M Spiegler, Philip Kuball, Stefania C Bray, Megan Bernath, Deanna R Willis, Jiang Bian, Lei Xing, Eric Topol, Kyunghyun Cho, Yu Huang, Ruogu Fang, Narges Razavian, James Zou",
				venue: "Under Review"
			},
			{
				title: "Automated radiotherapy treatment planning guided by GPT-4Vision",
				authors: "Sheng Liu*, Oscar Pastor-Serrano*, et al., James Zou, Lei Xing",
				venue: "AAPM 2024",
				note: "Best in Medical Physics"
			},
			{
				title: "Generalizable deep learning model for early Alzheimer's disease detection from structural MRIs",
				authors: "Sheng Liu, Arjun V. Masurkar, Henry Rusinek, Jingyun Chen, Ben Zhang, Weicheng Zhu, Carlos Fernandez-Granda, Narges Razavian",
				venue: "Nature Scientific Reports 2023"
			}
		]
	}
];
function Research() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up space-y-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display italic",
			children: "Research"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground",
			children: "Three threads, one goal: AI that people can rely on when the stakes are real."
		})] }), areas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline gap-4 border-b border-[var(--rule)] pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: a.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium",
					children: a.title
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",
				children: a.body
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-8",
				children: a.pubs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[15px] leading-snug text-foreground/90 transition-colors group-hover:text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
							children: p.authors
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "meta mt-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/75",
								children: p.venue
							}), p.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-primary",
								children: [" · ", p.note]
							}) : null]
						})
					]
				}, p.title))
			})
		] }, a.n))]
	});
}
//#endregion
export { Research as component };
