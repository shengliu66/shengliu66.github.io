import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as news } from "./news-NL060wa0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/news-aS0qjdIi.js
var import_jsx_runtime = require_jsx_runtime();
function News() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up space-y-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display italic",
			children: "Latest News"
		}) }), news.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "eyebrow mb-8 border-b border-[var(--rule)] pb-2",
			children: group.year
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-7",
			children: group.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "group flex gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "meta w-16 shrink-0 pt-1",
					children: [
						group.year,
						".",
						item.date
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[15px] leading-normal text-foreground/90 transition-colors group-hover:text-foreground",
					children: item.text
				})]
			}, i))
		})] }, group.year))]
	});
}
//#endregion
export { News as component };
