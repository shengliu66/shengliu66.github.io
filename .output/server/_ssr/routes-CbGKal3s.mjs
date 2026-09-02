import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as allNews } from "./news-NL060wa0.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CbGKal3s.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up space-y-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mb-8 max-w-xl text-2xl font-light italic leading-snug tracking-tight text-foreground",
				children: "Auditable AI for Biomedicine"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6 text-[17px] leading-relaxed text-foreground/90",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"I am a Postdoctoral Researcher at",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://stanford.edu",
							className: "link-quiet",
							children: "Stanford University"
						}),
						", working with Prof. James Zou and Prof. Lei Xing. I earned my PhD in Data Science from New York University, where I was fortunate to work with Carlos Fernandez-Granda, Narges Razavian, and Kyunghyun Cho."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My research builds reliable and auditable AI systems that can reason, adapt, and act in complex real-world environments. I develop methods for robust learning, controllable inference, and agentic AI, with a particular focus on biomedicine, where I am interested in turning heterogeneous evidence into trustworthy decisions, scientific discoveries, and ultimately better paths to treatment." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Outside of academia, I play tennis and am a certified scuba diver and surfer. Some of that lives on the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/gallery",
							className: "link-quiet",
							children: "Elsewhere"
						}),
						" page."
					] })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-baseline justify-between border-b border-[var(--rule)] pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "section-heading",
					children: "Latest News"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/news",
					className: "meta link-quiet",
					children: "View all"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-7",
				children: allNews.slice(0, 5).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "group flex gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "meta w-16 shrink-0 pt-1",
						children: [
							item.year,
							".",
							item.date
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] leading-normal text-foreground/90 transition-colors group-hover:text-foreground",
						children: item.text
					})]
				}, `${item.year}-${item.date}-${item.text}`))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "border border-[var(--rule)] bg-card p-10 text-center shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl italic",
						children: "Interested in collaboration?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-foreground/90",
						children: "We are actively seeking students and collaborators with a background in machine learning, large foundation models, AI agents, or AI for medicine."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:shengl@stanford.edu",
						className: "mt-8 inline-block bg-primary px-8 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-300 hover:bg-foreground",
						children: "Send an Inquiry"
					})
				]
			})
		]
	});
}
//#endregion
export { Home as component };
