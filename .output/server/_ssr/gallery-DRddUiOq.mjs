import { n as __toESM } from "../_runtime.mjs";
import { t as gallery_diving_default } from "./gallery-diving-BJ0nt5Ty.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DRddUiOq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var photos = [
	{
		src: "/assets/gallery-tennis-CTbWXhLU.jpg",
		w: 1200,
		h: 900,
		caption: "Last light on the court",
		place: "Palo Alto"
	},
	{
		src: "/assets/gallery-desk-D9iuLQU6.jpg",
		w: 900,
		h: 1200,
		caption: "AI's brightest minds @Neurips 2019",
		place: "Vancouver"
	},
	{
		src: "/assets/gallery-surf-BkLmvDGm.jpg",
		w: 900,
		h: 1200,
		caption: "Paddling out before work",
		place: "Pacifica"
	},
	{
		src: "/assets/gallery-aida-BY1H5i8C.jpg",
		w: 1200,
		h: 900,
		caption: "My Aida: AI will arrive",
		place: "Stanford"
	},
	{
		src: gallery_diving_default,
		w: 1200,
		h: 900,
		caption: "Forty feet down, no notifications",
		place: "Reef"
	},
	{
		src: "/assets/gallery-hike-DFGpx2mZ.jpg",
		w: 900,
		h: 1200,
		caption: "The mountain that touches the stars",
		place: "Big Island"
	},
	{
		src: "/assets/gallery-city-B4QsIOLs.jpg",
		w: 1200,
		h: 900,
		caption: "Concrete jungle",
		place: "New York"
	},
	{
		src: "/assets/gallery-galaxy-BrCbzIdZ.jpg",
		w: 1200,
		h: 900,
		caption: "Brightest star in my galaxy",
		place: "Big Island"
	},
	{
		src: "/assets/gallery-graduate-EKjaB1kV.jpg",
		w: 1200,
		h: 900,
		caption: "“Doctor”",
		place: "New York University"
	},
	{
		src: "/assets/gallery-lotus-CSKx2q1g.jpg",
		w: 1200,
		h: 900,
		caption: "Like a lotus in the mud",
		place: "New York"
	},
	{
		src: "/assets/gallery-travel-ca-DNE8Dj-R.jpg",
		w: 900,
		h: 1200,
		caption: "Where the cliffs meet the ocean",
		place: "CA 1"
	},
	{
		src: "/assets/gallery-travel-CDTs3GQz.jpg",
		w: 1200,
		h: 900,
		caption: "A sky flushed with volcanic fire",
		place: "Hawaii"
	},
	{
		src: "/assets/gallery-thai-BZywf42F.jpg",
		w: 900,
		h: 1200,
		caption: "Lost in the ancient ruins",
		place: "Ayutthaya"
	},
	{
		src: "/assets/gallery-budda-CqUbOnWv.jpg",
		w: 900,
		h: 1200,
		caption: "Where faith and nature intertwine",
		place: "Wat Mahathat"
	}
];
function Gallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	const current = active === null ? null : photos[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fade-up space-y-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display italic",
				children: "Elsewhere"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground",
				children: "A slower record of life outside research: courts, water, and the ordinary hours in between."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 gap-4 sm:columns-2 [&>*]:mb-4",
				children: photos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setActive(i),
					className: "group block w-full break-inside-avoid overflow-hidden rounded-lg bg-secondary text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.src,
						alt: p.caption,
						width: p.w,
						height: p.h,
						loading: "lazy",
						className: "w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3 px-1 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: p.caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: p.place
						})]
					})]
				}, p.caption))
			}),
			current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": current.caption,
				onClick: () => setActive(null),
				className: "fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-6 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "max-h-full max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: current.src,
						alt: current.caption,
						className: "max-h-[80vh] w-auto rounded-lg object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-3 text-center text-sm text-background/80",
						children: [
							current.caption,
							" — ",
							current.place
						]
					})]
				})
			}) : null
		]
	});
}
//#endregion
export { Gallery as component };
