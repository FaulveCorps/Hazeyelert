import { spawn } from "node:child_process";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const outputDir = path.join(projectRoot, "output");

await mkdir(outputDir, { recursive: true });

const child = spawn("dotnet", ["build", ".\\Hazeyelert.csproj", "-f", "net10.0-windows10.0.19041.0"], {
  cwd: projectRoot,
  stdio: ["ignore", "pipe", "pipe"],
  shell: false
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

await writeFile(path.join(outputDir, "build.stdout.txt"), stdout, "utf8");
await writeFile(path.join(outputDir, "build.stderr.txt"), stderr, "utf8");
await writeFile(path.join(outputDir, "build.result.json"), JSON.stringify(result, null, 2), "utf8");

const summaryLines = stdout.trim().split(/\r?\n/).slice(-20);
console.log(JSON.stringify({ result, summaryLines, stderrLength: stderr.length }, null, 2));
process.exitCode = result.code ?? 1;
