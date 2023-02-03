import {build} from "esbuild";

build({
    entryPoints: ["src/ServiceWorker/service-worker.js"],
    outfile: "public/service-worker.js",
    bundle: true,
  }).catch(() => process.exit(1))