globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-09-02T04:40:35.251Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/gallery-Dd_vNNBe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cd9-uFniIQegUOP8F8Nki3zQ3Wn4/z0\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 3289,
		"path": "../public/assets/gallery-Dd_vNNBe.js"
	},
	"/assets/gallery-aida-BY1H5i8C.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b283-LStDEv9/YXanTBoKRBvzf4Utk2M\"",
		"mtime": "2026-09-02T04:40:34.546Z",
		"size": 438915,
		"path": "../public/assets/gallery-aida-BY1H5i8C.jpg"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4203e-6MfU1n5poFoTsMi79bF55tTmMFU\"",
		"mtime": "2026-09-02T04:40:35.266Z",
		"size": 270398,
		"path": "../public/favicon.ico"
	},
	"/assets/gallery-desk-D9iuLQU6.jpg": {
		"type": "image/jpeg",
		"etag": "\"31010-ggEkx36OgE4eBcC5SbvX7OaaLfk\"",
		"mtime": "2026-09-02T04:40:34.567Z",
		"size": 200720,
		"path": "../public/assets/gallery-desk-D9iuLQU6.jpg"
	},
	"/assets/gallery-diving-C7Q_Mwbl.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b39e-houezibnNj3sD9crZWBFZEM94+0\"",
		"mtime": "2026-09-02T04:40:34.567Z",
		"size": 111518,
		"path": "../public/assets/gallery-diving-C7Q_Mwbl.jpg"
	},
	"/assets/gallery-galaxy-BrCbzIdZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"32f96-g3dGz02UDyqP6q/5lTx0GqJ2920\"",
		"mtime": "2026-09-02T04:40:34.567Z",
		"size": 208790,
		"path": "../public/assets/gallery-galaxy-BrCbzIdZ.jpg"
	},
	"/assets/gallery-surf-BkLmvDGm.jpg": {
		"type": "image/jpeg",
		"etag": "\"15fbe-7baX5RVAdSsf8iZtLtakj4y0JxA\"",
		"mtime": "2026-09-02T04:40:34.588Z",
		"size": 90046,
		"path": "../public/assets/gallery-surf-BkLmvDGm.jpg"
	},
	"/assets/gallery-tennis-CTbWXhLU.jpg": {
		"type": "image/jpeg",
		"etag": "\"436cf-625IGM+owa5OL4+KD9sTWmBfUss\"",
		"mtime": "2026-09-02T04:40:34.588Z",
		"size": 276175,
		"path": "../public/assets/gallery-tennis-CTbWXhLU.jpg"
	},
	"/assets/news-C64oH_3L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae8-0nA8B8PVNU2tWajNzij+I6Drx6E\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 2792,
		"path": "../public/assets/news-C64oH_3L.js"
	},
	"/assets/news-D-ldqsMk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"31c-RJgn59WU6v6OXmUzYob+PBzDH3Q\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 796,
		"path": "../public/assets/news-D-ldqsMk.js"
	},
	"/assets/research-B_5-0oY1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed9-ENGRLCoxzP7YcymfH482SNd7UmE\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 3801,
		"path": "../public/assets/research-B_5-0oY1.js"
	},
	"/assets/routes-BVJr5gK0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b80-rG8JrnwTeMWCuQLlkLihdt0ExSg\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 2944,
		"path": "../public/assets/routes-BVJr5gK0.js"
	},
	"/assets/styles-Dm3qLiAu.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"12d16-zo0okI1pk1v9Gyx7g4eOXg2X5Fw\"",
		"mtime": "2026-09-02T04:40:34.613Z",
		"size": 77078,
		"path": "../public/assets/styles-Dm3qLiAu.css"
	},
	"/assets/index-B0FPlj_D.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"560e5-Mp40lwZinK6c68fBmSu4q3Bn7Lg\"",
		"mtime": "2026-09-02T04:40:34.545Z",
		"size": 352485,
		"path": "../public/assets/index-B0FPlj_D.js"
	},
	"/assets/sheng-portrait-CRVQYRq7.jpg": {
		"type": "image/jpeg",
		"etag": "\"91030-k+wSPv5ThDk9nsDjFR+8orI6X6c\"",
		"mtime": "2026-09-02T04:40:34.613Z",
		"size": 593968,
		"path": "../public/assets/sheng-portrait-CRVQYRq7.jpg"
	},
	"/assets/gallery-lotus-CSKx2q1g.jpg": {
		"type": "image/jpeg",
		"etag": "\"20317b-VEUa8oEFbtl8kW85UnuzFQgAnls\"",
		"mtime": "2026-09-02T04:40:34.588Z",
		"size": 2109819,
		"path": "../public/assets/gallery-lotus-CSKx2q1g.jpg"
	},
	"/assets/gallery-hike-DFGpx2mZ.jpg": {
		"type": "image/jpeg",
		"etag": "\"256940-BQOJHCKHPHrLiNFXX7F/hSFLNOw\"",
		"mtime": "2026-09-02T04:40:34.587Z",
		"size": 2451776,
		"path": "../public/assets/gallery-hike-DFGpx2mZ.jpg"
	},
	"/assets/gallery-travel-CDTs3GQz.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a4de2-sEviAiFSz5+ADxDCD5J8CE/sl80\"",
		"mtime": "2026-09-02T04:40:34.604Z",
		"size": 2772450,
		"path": "../public/assets/gallery-travel-CDTs3GQz.jpg"
	},
	"/assets/gallery-travel-ca-DNE8Dj-R.jpg": {
		"type": "image/jpeg",
		"etag": "\"4fc364-aGvR11JO8eGX5RfhizkNCL9p/Zk\"",
		"mtime": "2026-09-02T04:40:34.610Z",
		"size": 5227364,
		"path": "../public/assets/gallery-travel-ca-DNE8Dj-R.jpg"
	},
	"/assets/gallery-budda-CqUbOnWv.jpg": {
		"type": "image/jpeg",
		"etag": "\"541d7c-QeNR0SUm2n+yodYnPF+4EzFms0g\"",
		"mtime": "2026-09-02T04:40:34.552Z",
		"size": 5512572,
		"path": "../public/assets/gallery-budda-CqUbOnWv.jpg"
	},
	"/assets/gallery-city-B4QsIOLs.jpg": {
		"type": "image/jpeg",
		"etag": "\"66d016-zqHECdnB/+uqPaoaqh2TjUIl3/4\"",
		"mtime": "2026-09-02T04:40:34.562Z",
		"size": 6737942,
		"path": "../public/assets/gallery-city-B4QsIOLs.jpg"
	},
	"/assets/gallery-thai-BZywf42F.jpg": {
		"type": "image/jpeg",
		"etag": "\"7d5ca8-Rbc/bfnkVBsepbEUvVq3I1TZW+I\"",
		"mtime": "2026-09-02T04:40:34.596Z",
		"size": 8215720,
		"path": "../public/assets/gallery-thai-BZywf42F.jpg"
	},
	"/assets/gallery-graduate-EKjaB1kV.jpg": {
		"type": "image/jpeg",
		"etag": "\"ec0754-572+i7/Y+RuDDU5JxCcKDcJIvGk\"",
		"mtime": "2026-09-02T04:40:34.582Z",
		"size": 15468372,
		"path": "../public/assets/gallery-graduate-EKjaB1kV.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_RTHwYG = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_RTHwYG
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
