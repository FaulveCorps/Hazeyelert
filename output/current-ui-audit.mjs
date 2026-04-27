import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { access, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const webRoot = path.join(projectRoot, "wwwroot");
const outputDir = path.join(projectRoot, "output", "current-ui-audit-shots");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon"
};

const browserCandidates = [
  process.env.PLAYWRIGHT_BROWSER_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe"
].filter(Boolean);

async function findBrowserExecutable() {
  for (const candidate of browserCandidates) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      // keep looking
    }
  }

  throw new Error("No Chrome or Edge executable found. Set PLAYWRIGHT_BROWSER_PATH if needed.");
}

async function resolveRequestFile(requestPath) {
  const normalizedRequest = requestPath === "/" ? "/index.html" : requestPath;
  const unsafePath = path.normalize(path.join(webRoot, decodeURIComponent(normalizedRequest)));

  if (!unsafePath.startsWith(webRoot)) {
    return null;
  }

  const fileStats = await stat(unsafePath).catch(() => null);

  if (fileStats?.isDirectory()) {
    const directoryIndex = path.join(unsafePath, "index.html");
    const directoryStats = await stat(directoryIndex).catch(() => null);
    return directoryStats ? directoryIndex : null;
  }

  return fileStats ? unsafePath : null;
}

async function startStaticServer() {
  const server = http.createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", "http://127.0.0.1");
      const filePath = await resolveRequestFile(url.pathname);

      if (!filePath) {
        response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Not found");
        return;
      }

      const content = await readFile(filePath);
      const extension = path.extname(filePath).toLowerCase();
      response.writeHead(200, {
        "Content-Type": mimeTypes[extension] ?? "application/octet-stream",
        "Cache-Control": "no-store"
      });
      response.end(content);
    } catch (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(`Server error: ${error.message}`);
    }
  });

  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Unable to determine local server port.");
  }

  return {
    server,
    baseUrl: `http://127.0.0.1:${address.port}`
  };
}

async function ensureOutputDir() {
  await mkdir(outputDir, { recursive: true });
}

async function capture(page, name) {
  await page.screenshot({ path: path.join(outputDir, `${name}.png`), fullPage: true });
}

async function clickByText(page, selector, text) {
  await page.locator(selector).filter({ hasText: text }).first().click();
}

async function main() {
  await ensureOutputDir();
  const executablePath = await findBrowserExecutable();
  const { server, baseUrl } = await startStaticServer();
  const issues = [];
  let browser;
  let context;

  try {
    browser = await chromium.launch({ headless: true, executablePath });
    context = await browser.newContext({
      viewport: { width: 430, height: 932 },
      colorScheme: "dark"
    });

    const page = await context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") {
        issues.push(`Console error: ${message.text()}`);
      }
    });
    page.on("pageerror", (error) => {
      issues.push(`Page error: ${error.message}`);
    });

    await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(300);
    await capture(page, "01-intro");

    await page.getByRole("button", { name: /Enter dashboard/i }).click();
    await page.waitForTimeout(250);
    await capture(page, "02-home");

    await page.getByRole("button", { name: /Start mission|Resume mission/i }).first().click();
    await page.waitForTimeout(250);
    await capture(page, "03-quiz-1");

    await page.locator('[data-option]').first().click();
    await page.waitForTimeout(250);
    await capture(page, "04-feedback-1");

    while (await page.getByRole("button", { name: /Next question|View results/i }).count()) {
      const nextButton = page.getByRole("button", { name: /Next question|View results/i }).first();
      if (!(await nextButton.isVisible())) {
        break;
      }

      await nextButton.click();
      await page.waitForTimeout(200);

      if (await page.locator('[data-option="observe-surroundings"]').count()) {
        await page.locator('[data-option="observe-surroundings"]').click();
        await page.locator('[data-option="check-before-using"]').click();
        await page.locator('[data-option="move-away-risk"]').click();
        await page.getByRole("button", { name: /Submit choices/i }).click();
      } else if (await page.locator('[data-option]').count()) {
        await page.locator('[data-option]').first().click();
      }

      await page.waitForTimeout(200);
      if (await page.locator('.quiz-screen').count()) {
        const label = await page.locator('.quiz-chapter-label').first().textContent().catch(() => 'quiz');
        const safeLabel = String(label || 'quiz').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        await capture(page, `step-${safeLabel}-${Date.now()}`);
      }
    }

    await page.waitForTimeout(250);
    await capture(page, "05-results");

    const report = {
      baseUrl,
      issues,
      title: await page.title(),
      currentView: await page.locator('#app-shell').getAttribute('data-view').catch(() => null)
    };

    await writeFile(path.join(outputDir, 'report.json'), JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await context?.close().catch(() => {});
    await browser?.close().catch(() => {});
    server.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
