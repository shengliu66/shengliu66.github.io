// Post-processes the static build so it works on GitHub Pages:
//  - .nojekyll so folders starting with "_" are served
//  - 404.html fallback so deep links / refreshes still boot the app
//  - downloads externally hosted assets (src/assets/*.asset.json) into the
//    output folder so the site has no runtime dependency on Lovable hosting
import { existsSync, copyFileSync, writeFileSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const candidates = [".output/public", "dist/client", "dist"];
const outDir = candidates.find((d) => existsSync(join(d, "index.html")));

if (!outDir) {
  console.error("finalize-static: could not find the built site. Looked in:", candidates.join(", "));
  process.exit(1);
}

writeFileSync(join(outDir, ".nojekyll"), "");
copyFileSync(join(outDir, "index.html"), join(outDir, "404.html"));

const ASSET_HOST =
  process.env["ASSET_HOST"] || "https://id-preview--88c41bc3-f145-4c74-b95c-3bb69e9745f2.lovable.app";

const assetDir = "src/assets";
if (existsSync(assetDir)) {
  for (const file of readdirSync(assetDir).filter((f) => f.endsWith(".asset.json"))) {
    const meta = JSON.parse(readFileSync(join(assetDir, file), "utf8"));
    if (!meta.url) continue;
    const dest = join(outDir, meta.url.replace(/^\//, ""));
    const res = await fetch(new URL(meta.url, ASSET_HOST));
    if (!res.ok) {
      console.error(`finalize-static: failed to download ${meta.url} (${res.status})`);
      process.exit(1);
    }
    mkdirSync(dirname(dest), { recursive: true });
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    console.log(`finalize-static: bundled ${meta.url}`);
  }
}

console.log(`finalize-static: ready in ${outDir}`);
