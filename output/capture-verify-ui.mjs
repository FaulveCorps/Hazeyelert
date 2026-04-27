import { spawn } from "node:child_process";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "output");

await mkdir(outputDir, { recursive: true });

const child = spawn(process.execPath, [path.join(projectRoot, "scripts", "check-ui-content.mjs")], {
  cwd: projectRoot,
  stdio: ["ignore", "pipe", "pipe"]
});

let stdout = "";
let stderr = "";

child.stdout.on("data", (chunk) => {
  stdout += String(chunk);
});

child.stderr.on("data", (chunk) => {
  stderr += String(chunk);
});

const result = await new Promise((resolve, reject) => {
  child.on("error", reject);
  child.on("close", (code, signal) => resolve({ code, signal }));
});

await writeFile(path.join(outputDir, "verify-ui.stdout.txt"), stdout, "utf8");
await writeFile(path.join(outputDir, "verify-ui.stderr.txt"), stderr, "utf8");
await writeFile(path.join(outputDir, "verify-ui.result.json"), JSON.stringify(result, null, 2), "utf8");

console.log(JSON.stringify({ result, stdoutLength: stdout.length, stderrLength: stderr.length }, null, 2));
process.exitCode = result.code ?? 1;
