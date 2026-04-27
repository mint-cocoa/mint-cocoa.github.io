import { copyFile, rm } from "node:fs/promises";
import { join } from "node:path";

const siteDir = "_site";
const reactIndex = join(siteDir, "react-index.html");
const finalIndex = join(siteDir, "index.html");

await copyFile(reactIndex, finalIndex);
await rm(reactIndex);
