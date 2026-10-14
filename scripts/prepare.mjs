#!/usr/bin/env node
/**
 * Skip rebuild when dist/ already ships (npm pack/publish).
 * Build from source for git installs / fresh clones.
 */
import fs from "fs";
import { spawnSync } from "child_process";

if (fs.existsSync(new URL("../dist/index.js", import.meta.url))) {
  console.log("[everything2mcp prepare] dist/ present — skip build");
  process.exit(0);
}
console.log("[everything2mcp prepare] dist/ missing — running npm run build");
const r = spawnSync("npm", ["run", "build"], { stdio: "inherit", shell: true });
process.exit(r.status ?? 1);
