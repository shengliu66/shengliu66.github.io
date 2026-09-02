// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isStatic = process.env["STATIC_EXPORT"] === "true";
const basePath = process.env["BASE_PATH"] || "/";

const staticPages = ["/", "/research", "/news", "/gallery"];

export default defineConfig(
  isStatic
    ? {
        vite: {
          base: basePath,
        },

        tanstackStart: {
          // IMPORTANT: static prerendering still needs the SSR entry
          server: {
            entry: "server",
          },

          prerender: {
            enabled: true,
            crawlLinks: true,
            autoStaticPathsDiscovery: true,
            autoSubfolderIndex: true,
          },

          pages: staticPages.map((path) => ({
            path,
            prerender: {
              enabled: true,
            },
          })),
        },
      }
    : {
        tanstackStart: {
          server: {
            entry: "server",
          },
        },
      },
);