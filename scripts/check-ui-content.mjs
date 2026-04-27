import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { access, readFile, stat } from "node:fs/promises";
import { chromium } from "playwright-core";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const webRoot = path.join(projectRoot, "wwwroot");

const petAssetAliases = new Map([
    ["/assets/pets/cashmier.png", path.join(projectRoot, "Pets", "Cashmier .png")],
    ["/assets/pets/dio.png", path.join(projectRoot, "Pets", "Dio.png")],
    ["/assets/pets/donny.png", path.join(projectRoot, "Pets", "Donny .png")],
    ["/assets/pets/dylan.png", path.join(projectRoot, "Pets", "Dylan.png")],
    ["/assets/pets/jackie.png", path.join(projectRoot, "Pets", "Jackie.png")],
    ["/assets/pets/kiara.png", path.join(projectRoot, "Pets", "Kiara.png")],
    ["/assets/pets/kitty.png", path.join(projectRoot, "Pets", "Kitty.png")]
]);

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
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe"
].filter(Boolean);

function fail(message) {
    throw new Error(`[ui-check] ${message}`);
}

async function findBrowserExecutable() {
    for (const candidate of browserCandidates) {
        try {
            await access(candidate);
            return candidate;
        } catch {
            // keep looking
        }
    }

    fail("No Chrome or Edge executable was found for Playwright. Set PLAYWRIGHT_BROWSER_PATH to a local browser executable.");
}

async function resolveRequestFile(requestPath) {
    const aliasedPetPath = petAssetAliases.get(requestPath);

    if (aliasedPetPath) {
        const petStats = await stat(aliasedPetPath).catch(() => null);
        return petStats ? aliasedPetPath : null;
    }

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

            if (url.pathname === "/favicon.ico") {
                response.writeHead(204);
                response.end();
                return;
            }

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
        fail("Unable to determine the local static server port.");
    }

    return {
        server,
        baseUrl: `http://127.0.0.1:${address.port}`
    };
}

async function ensureVisible(locator, description) {
    try {
        await locator.first().waitFor({ state: "visible", timeout: 6000 });
    } catch {
        fail(`Expected to find visible UI content for: ${description}`);
    }
}

async function clickAndWait(locator, description) {
    await ensureVisible(locator, description);
    await locator.first().click();
}

async function getChapterHeadingLocator(page, chapter) {
    return page.locator(".quiz-chapter-label, .mission-chapter-pill").filter({ hasText: chapter });
}

async function answerStep(page, step, index) {
    await ensureVisible(await getChapterHeadingLocator(page, step.chapter), `chapter heading ${step.chapter}`);
    await ensureVisible(page.locator(".story-card"), `story card for ${step.chapter}`);
    await ensureVisible(page.locator(".quiz-card"), `quiz card for ${step.chapter}`);
    await ensureVisible(page.locator(".guide-panel"), `guide panel for ${step.chapter}`);

    for (const optionId of step.optionIds) {
        await clickAndWait(page.locator(`[data-option="${optionId}"]`), `option ${optionId}`);
    }

    if (step.submit) {
        await clickAndWait(page.locator('[data-action="submit-multi"]'), `submit button for quiz step ${index + 1}`);
    }

    await ensureVisible(page.getByText("Correct answer", { exact: true }), `feedback panel after quiz step ${index + 1}`);

    if (step.nextLabel) {
        await clickAndWait(page.getByRole("button", { name: step.nextLabel }), `next action after quiz step ${index + 1}`);
    }
}

async function waitForStartupMotion(page) {
    const splash = page.locator("#startup-splash");

    try {
        await splash.waitFor({ state: "hidden", timeout: 4000 });
    } catch {
        await page.waitForTimeout(1800);
    }

    await page.waitForTimeout(120);
}

async function verifyIntroScreen(page) {
    await ensureVisible(page.getByText(/Be alert\./i), "intro headline");
    await ensureVisible(page.getByText(/Be aware\./i), "intro secondary headline");
    await clickAndWait(page.getByRole("button", { name: /Enter dashboard/i }), "intro enter dashboard button");
}

async function verifyHomeScreen(page) {
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Hazeyelert", exact: true }), "home app title");
    await ensureVisible(page.getByRole("button", { name: /Start mission/i }), "home start mission button");
    await ensureVisible(page.getByText("Mindincident files", { exact: true }), "mindincident files section");
    await ensureVisible(page.getByRole("button", { name: /Home/i }), "bottom navigation home button");
}

async function verifySecondaryScreens(page) {
    await clickAndWait(page.getByRole("button", { name: /Profile/i }), "profile navigation button");
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Profile", exact: true }), "profile screen heading");
    await ensureVisible(page.getByText(/My progress/i), "profile progress section");

    await clickAndWait(page.getByRole("button", { name: /Mission/i }), "mission navigation button");
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Mission board", exact: true }), "mission board heading");
    await ensureVisible(page.getByText(/Every move counts/i), "mission board quote");

    await clickAndWait(page.getByRole("button", { name: /^Settings$/i }), "settings navigation button");
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Settings", exact: true }), "settings page heading");
    await ensureVisible(page.getByText(/Offline utility panel/i), "settings utility panel label");
    await ensureVisible(page.getByText(/Interaction sounds/i), "settings interaction sounds card");
    await clickAndWait(page.getByRole("button", { name: /Home/i }), "home navigation button from settings");
}

async function verifyReloadResilienceDuringMultiSelect(page) {
    const setupSteps = [
        { chapter: "Chapter 1", optionIds: ["blue-puddle"], nextLabel: /Next question/i },
        { chapter: "Chapter 1", optionIds: ["order-3-2-1"], nextLabel: /Next question/i },
        { chapter: "Chapter 1", optionIds: ["blue-cover-ears"], nextLabel: /Next question/i }
    ];

    await clickAndWait(page.getByRole("button", { name: /Start mission/i }), "start mission button for reload test");

    for (const [index, step] of setupSteps.entries()) {
        await answerStep(page, step, index);
    }

    await ensureVisible(await getChapterHeadingLocator(page, "Chapter 1"), "chapter heading Chapter 1 multi-select step");
    await clickAndWait(page.locator('[data-option="observe-surroundings"]'), "first multi-select option before reload");
    await ensureVisible(page.locator('[data-option="observe-surroundings"].is-selected'), "selected multi option before reload");

    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForStartupMotion(page);

    await ensureVisible(page.locator("main").getByRole("heading", { name: "Hazeyelert", exact: true }), "home screen after reload");
    await clickAndWait(page.getByRole("button", { name: /Resume mission/i }), "resume mission button after reload");
    await ensureVisible(await getChapterHeadingLocator(page, "Chapter 1"), "chapter heading Chapter 1 after reload");
    await ensureVisible(page.locator('[data-option="observe-surroundings"].is-selected'), "persisted multi-select option after reload");
    await clickAndWait(page.locator('[data-option="check-before-using"]'), "second multi-select option after reload");
    await clickAndWait(page.locator('[data-option="move-away-risk"]'), "third multi-select option after reload");
    await clickAndWait(page.locator('[data-action="submit-multi"]'), "submit multi-select after reload");
    await ensureVisible(page.getByText("Correct answer", { exact: true }), "feedback after reloaded multi-select step");
    await clickAndWait(page.getByRole("button", { name: /Next question/i }), "next question after reloaded multi-select step");
}

async function verifyChapterLaunchProtection(page) {
    await clickAndWait(page.locator('[data-action="open-mission-screen"]'), "back button from active quiz to mission board");
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Mission board", exact: true }), "mission board heading during active progress");

    const snapshotBeforeCancel = await page.evaluate(() => window.localStorage.getItem("hazeyelert-shell-state-v3"));

    await page.evaluate(() => {
        window.__copilotOriginalConfirm = window.confirm;
        window.confirm = () => false;
    });

    await clickAndWait(page.getByRole("button", { name: /Launch Chapter 1/i }), "chapter launch button with active progress");
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Mission board", exact: true }), "mission board after canceling chapter replacement");

    const snapshotAfterCancel = await page.evaluate(() => window.localStorage.getItem("hazeyelert-shell-state-v3"));
    if (snapshotBeforeCancel !== snapshotAfterCancel) {
        fail("Canceling a chapter launch replaced the user's in-progress mission.");
    }

    await page.evaluate(() => {
        window.confirm = () => true;
    });

    await clickAndWait(page.getByRole("button", { name: /Launch Chapter 2/i }), "chapter launch button after confirming replacement");
    await ensureVisible(await getChapterHeadingLocator(page, "Chapter 2"), "chapter 2 heading after confirming chapter replacement");

    await page.evaluate(() => {
        if (window.__copilotOriginalConfirm) {
            window.confirm = window.__copilotOriginalConfirm;
            delete window.__copilotOriginalConfirm;
        }
    });
}

async function completeQuizRun(page) {
    const steps = [
        { chapter: "Chapter 2", optionIds: ["image-a"], nextLabel: /Next question/i },
        { chapter: "Chapter 2", optionIds: ["risk-map-a"], nextLabel: /Next question/i },
        { chapter: "Chapter 2", optionIds: ["order-2-1-3"], nextLabel: /View results/i }
    ];

    for (const [index, step] of steps.entries()) {
        await answerStep(page, step, index + 4);
    }
}

async function verifyResultScreen(page) {
    await ensureVisible(page.locator("main").getByRole("heading", { name: "Results", exact: true }), "results screen title");
    await ensureVisible(page.getByText("Final score", { exact: true }), "final score label");
    const scoreText = await page.locator("main").innerText();
    if (!/Final score\s+\d+\/\d+/i.test(scoreText)) {
        fail("Expected the results screen to show a final score fraction.");
    }
    await ensureVisible(page.getByText("Chapter recap", { exact: true }), "chapter recap heading");
    await ensureVisible(page.getByText("Mastered", { exact: true }), "mastered chapter status badge");
}

async function main() {
    const browserExecutable = await findBrowserExecutable();
    const { server, baseUrl } = await startStaticServer();
    const uiErrors = [];
    let browser;
    let context;

    try {
        browser = await chromium.launch({
            headless: true,
            executablePath: browserExecutable
        });

        context = await browser.newContext({
            viewport: { width: 430, height: 932 },
            colorScheme: "dark"
        });

        const page = await context.newPage();
        page.on("pageerror", (error) => uiErrors.push(`Page error: ${error.message}`));
        page.on("console", (message) => {
            if (message.type() === "error") {
                uiErrors.push(`Console error: ${message.text()}`);
            }
        });

        await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
        await waitForStartupMotion(page);
        await verifyIntroScreen(page);
        await verifyHomeScreen(page);
        await verifySecondaryScreens(page);
        await verifyReloadResilienceDuringMultiSelect(page);
        await verifyChapterLaunchProtection(page);
        await completeQuizRun(page);
        await verifyResultScreen(page);

        if (uiErrors.length > 0) {
            fail(uiErrors.join("\n"));
        }
    } finally {
        await context?.close().catch(() => {});
        await browser?.close().catch(() => {});
        server.close();
    }

    console.log("[ui-check] Playwright UI content verification passed.");
}

main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});