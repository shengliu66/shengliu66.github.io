import { n as __toESM } from "../_runtime.mjs";
import { t as gallery_diving_default } from "./gallery-diving-BJ0nt5Ty.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-lz3Dj7L3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Dm3qLiAu.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var sheng_portrait_default = "/assets/sheng-portrait-CRVQYRq7.jpg";
function applyTheme(mode) {
	const root = document.documentElement;
	root.classList.toggle("dark", mode === "dark");
	root.style.colorScheme = mode;
}
function ThemeToggle() {
	const [mode, setMode] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
		setMode(current);
	}, []);
	if (!mode) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-6",
		"aria-hidden": true
	});
	const next = mode === "dark" ? "light" : "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: () => {
			applyTheme(next);
			try {
				localStorage.setItem("theme", next);
			} catch {}
			setMode(next);
		},
		"aria-label": `Switch to ${next} mode`,
		className: "w-fit text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary",
		children: mode === "dark" ? "Light mode" : "Dark mode"
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/research",
		label: "Research"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/gallery",
		label: "Elsewhere"
	}
];
function SiteSidebar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		className: "lg:sticky lg:top-16 lg:h-fit",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-8 px-6 py-12 text-center lg:items-start lg:px-0 lg:py-0 lg:text-left",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative h-40 w-40 overflow-hidden rounded-full border border-foreground/5 bg-secondary shadow-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: sheng_portrait_default,
						alt: "Portrait of Sheng Liu",
						width: 160,
						height: 160,
						className: "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: gallery_diving_default,
						alt: "Sheng Liu diving",
						width: 160,
						height: 160,
						className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl tracking-tight",
						children: "Sheng Liu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-medium uppercase tracking-[0.14em] text-foreground/90",
						children: "Postdoctoral Researcher, Stanford University"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:shengl@stanford.edu",
						className: "mt-4 inline-block text-sm font-medium text-primary link-quiet",
						children: "shengl@stanford.edu"
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col items-center gap-3 lg:items-start",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "w-fit border-b border-transparent text-sm text-foreground/55 transition-colors hover:border-primary/20 hover:text-primary [&.active]:border-primary/30 [&.active]:text-primary",
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-5 lg:flex-col lg:gap-2",
					children: [
						{
							href: "https://scholar.google.com/citations?hl=en&user=rzhzR-cAAAAJ",
							label: "Scholar"
						},
						{
							href: "https://github.com/shengliu66",
							label: "GitHub"
						},
						{
							href: "https://twitter.com",
							label: "Twitter"
						}
					].map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "w-fit border-b border-transparent text-sm text-foreground/55 transition-colors hover:border-primary/20 hover:text-primary",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
			]
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Sheng Liu" },
			{
				name: "description",
				content: "Personal website of Sheng Liu, PhD."
			},
			{
				name: "author",
				content: "Sheng Liu"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `(function(){try{var s=localStorage.getItem('theme');var h=new Date().getHours();var d=s?s==='dark':(h>=19||h<7);if(d){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-screen max-w-5xl gap-16 px-6 md:px-12 lg:grid-cols-[16rem_1fr] lg:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteSidebar, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 max-w-2xl py-12 lg:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "mt-20 border-t border-[var(--rule)] pt-6 text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sheng Liu. All rights reserved."
					]
				})]
			})]
		})
	});
}
var $$splitComponentImporter$3 = () => import("./routes-CbGKal3s.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Sheng Liu — Auditable AI for Biomedicine" },
		{
			name: "description",
			content: "Sheng Liu is a postdoctoral researcher at Stanford University building reliable and auditable AI systems for biomedicine."
		},
		{
			property: "og:title",
			content: "Sheng Liu — Auditable AI Systems for Biomedicine"
		},
		{
			property: "og:description",
			content: "Postdoctoral researcher at Stanford working on reliable, auditable AI systems for biomedicine."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./gallery-DRddUiOq.mjs");
var Route$2 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Elsewhere — Sheng Liu" },
		{
			name: "description",
			content: "Photographs from off the clock: tennis courts, dives, surf at dawn, city walks and quiet mornings."
		},
		{
			property: "og:title",
			content: "Elsewhere — Sheng Liu"
		},
		{
			property: "og:description",
			content: "Photographs from off the clock — tennis, diving, surfing, and everyday scenes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./news-aS0qjdIi.mjs");
var Route$1 = createFileRoute("/news")({
	head: () => ({ meta: [
		{ title: "News — Sheng Liu" },
		{
			name: "description",
			content: "Latest news from Sheng Liu: papers, invited talks, workshops, and service in machine learning and AI for healthcare."
		},
		{
			property: "og:title",
			content: "News — Sheng Liu"
		},
		{
			property: "og:description",
			content: "Papers, invited talks, workshops, and academic service."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./research-jahsR0vI.mjs");
var Route = createFileRoute("/research")({
	head: () => ({ meta: [
		{ title: "Research — Sheng Liu" },
		{
			name: "description",
			content: "Active research areas: robust and reliable AI, AI systems and agents, and AI for human disease and health."
		},
		{
			property: "og:title",
			content: "Research — Sheng Liu"
		},
		{
			property: "og:description",
			content: "Robust and reliable AI, AI systems and agents, and AI for human disease and health."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	GalleryRoute: Route$2.update({
		id: "/gallery",
		path: "/gallery",
		getParentRoute: () => Route$4
	}),
	NewsRoute: Route$1.update({
		id: "/news",
		path: "/news",
		getParentRoute: () => Route$4
	}),
	ResearchRoute: Route.update({
		id: "/research",
		path: "/research",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
