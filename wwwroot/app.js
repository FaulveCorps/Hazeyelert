const quizSteps = [
    {
        id: "quiet-puddle",
        chapter: "Chapter 1",
        chapterTitle: "The Day That Won’t Stay Quiet",
        title: "Spot the spill",
        question: "Which clue caused the fall?",
        story: "You wake up with a strange feeling — not fear, not stress, just something off. Your alarm did not ring. Your phone is dead. You stand, take one step, and suddenly slip. Your back hits the floor, your elbow scrapes hard, and a cold patch touches your hand. Water. Something in this room clearly caused it.",
        guide: "Your vision scans the room. Focus on the clue that actually caused the fall.",
        petPrompt: "Woof! Tama ba 'to gawin? Tap the clue that really caused the fall.",
        guidePetId: "kitty",
        sceneTheme: "spill",
        image: "assets/scene-spill.svg",
        choiceLayout: "stacked",
        answerModeLabel: "Tap the COLOR clue",
        badge: {
            tone: "warning",
            title: "Mission focus",
            delta: "Scan first",
            copy: "Slow down and spot the hidden danger before you move again."
        },
        successBadge: {
            tone: "success",
            title: "Safety thinking",
            delta: "+1 Badge",
            copy: "You caught the spill before it could turn into a second fall."
        },
        failureBadge: {
            tone: "danger",
            title: "Hidden hazard",
            delta: "-1 Badge",
            copy: "The real clue was the puddle — missing it keeps the slip risk alive."
        },
        speechBubble: "Seriously...?",
        options: [
            { id: "blue-puddle", label: "🟦 Blue — A thin, shiny puddle near the door", correct: true },
            { id: "yellow-uniform", label: "🟨 Yellow — A neatly folded uniform", correct: false },
            { id: "red-cabinet", label: "🟥 Red — A closed cabinet", correct: false }
        ]
    },
    {
        id: "quiet-wire-order",
        chapter: "Chapter 1",
        chapterTitle: "The Day That Won’t Stay Quiet",
        title: "Handle the charger safely",
        question: "Which order is safest?",
        story: "You push yourself up, grab your charger, and reach for the outlet. Your phone is still dead, you are still in a hurry, and something feels off — but you move anyway. Then the shock hits. A sharp zap stings your fingers, and only after pulling back do you notice the exposed wire you missed.",
        guide: "Your brain wants to rush. The safer order is dry hands first, check the wire next, and plug it in last.",
        petPrompt: "Woof! Tama ba 'to gawin? Pick the order that checks the charger before you plug it in.",
        guidePetId: "dio",
        sceneTheme: "wire",
        image: "assets/scene-electrical.svg",
        choiceLayout: "stacked",
        answerModeLabel: "Pick the correct order",
        badge: {
            tone: "warning",
            title: "Electrical check",
            delta: "Dry first",
            copy: "Pause before plugging in — wet hands and damaged wires do not forgive shortcuts."
        },
        successBadge: {
            tone: "success",
            title: "Circuit shield",
            delta: "+1 Badge",
            copy: "You put inspection before urgency and avoided another shock."
        },
        failureBadge: {
            tone: "danger",
            title: "Trap choice",
            delta: "-1 Badge",
            copy: "Rushing the charger order turns a dead phone into a live hazard."
        },
        speechBubble: "Wait... something's wrong.",
        options: [
            { id: "order-3-2-1", label: "3-2-1 — Make sure your hands are dry → Check the wire → Plug it in", correct: true },
            { id: "order-2-3-1", label: "2-3-1 — Check the wire → Make sure your hands are dry → Plug it in", correct: false },
            { id: "order-1-2-3", label: "1-2-3 — Plug it in → Check the wire → Make sure your hands are dry", correct: false }
        ]
    },
    {
        id: "quiet-noise",
        chapter: "Chapter 1",
        chapterTitle: "The Day That Won’t Stay Quiet",
        title: "Protect your hearing",
        question: "What should you do first?",
        story: "You step outside hoping the fresh air helps. Instead, a construction drill tears through the air. It is too much. Your head instantly aches, your shoulders tense, and everything feels louder than it should.",
        guide: "Your body reacts before your mind here. Protect yourself from the noise first.",
        petPrompt: "Woof! Tama ba 'to gawin? Choose the first move that protects you from the noise.",
        guidePetId: "dylan",
        sceneTheme: "noise",
        image: "assets/scene-noise.svg",
        choiceLayout: "stacked",
        answerModeLabel: "Choose your first move",
        badge: {
            tone: "warning",
            title: "Noise warning",
            delta: "React fast",
            copy: "The first move should lower the noise hitting your body, not increase it."
        },
        successBadge: {
            tone: "success",
            title: "Instinct guard",
            delta: "+1 Badge",
            copy: "You protected your hearing before curiosity could pull you closer."
        },
        failureBadge: {
            tone: "danger",
            title: "Trap choice",
            delta: "-1 Badge",
            copy: "Loud machinery is not something to ignore or approach without protection."
        },
        speechBubble: "Too loud...",
        options: [
            { id: "blue-cover-ears", label: "🟦 Blue — Cover your ears and step back", correct: true },
            { id: "red-walk-closer", label: "🟥 Red — Walk closer to check", correct: false },
            { id: "yellow-ignore", label: "🟨 Yellow — Ignore it and continue", correct: false }
        ]
    },
    {
        id: "quiet-reset-strategy",
        chapter: "Chapter 1",
        chapterTitle: "The Day That Won’t Stay Quiet",
        title: "Reset the morning",
        question: "Which actions actually help you stay safe?",
        story: "Your elbow hurts. Your fingers still feel weird. Your head is pounding, and it is not even mid-morning yet. It feels like bad luck, but maybe it is really a test of how aware you are. The next choices decide whether things get worse or better.",
        guide: "Reset the day by choosing only the actions that actually lower risk.",
        petPrompt: "Woof! Think first. Tap only the actions that really make the morning safer.",
        guidePetId: "donny",
        sceneTheme: "spill",
        image: "assets/scene-spill.svg",
        selectionMode: "multi",
        choiceLayout: "grid",
        answerModeLabel: "Choose all safe actions",
        badge: {
            tone: "warning",
            title: "Break the bad luck",
            delta: "Reset route",
            copy: "Choose only the moves that actually lower the danger around you."
        },
        successBadge: {
            tone: "success",
            title: "Good reset",
            delta: "+1 Badge",
            copy: "You picked the actions that calm the situation instead of feeding the chaos."
        },
        failureBadge: {
            tone: "danger",
            title: "Missed safeguard",
            delta: "-1 Badge",
            copy: "A safe reset needs awareness, checking, and moving away from fresh risk."
        },
        speechBubble: "I need to reset.",
        options: [
            { id: "observe-surroundings", label: "1 — Slow down and observe your surroundings", correct: true },
            { id: "ignore-dangers", label: "2 — Ignore small dangers", correct: false },
            { id: "check-before-using", label: "3 — Check things before using them", correct: true },
            { id: "stay-uncomfortable", label: "4 — Stay in uncomfortable situations", correct: false },
            { id: "move-away-risk", label: "5 — Move away from anything risky", correct: true }
        ]
    },
    {
        id: "night-smoke-image",
        chapter: "Chapter 2",
        chapterTitle: "The Night That Didn’t Stay Quiet",
        title: "Read the smoke",
        question: "Which response is safest in smoke?",
        story: "You wake up inside your condo unit and smoke fills the air. Your throat burns immediately. Your parents are far away at a store, and you are alone. Smoke slips under the door, a crackling sound spreads through the building, and heat starts rising fast.",
        guide: "In smoke, the safer image is the one that keeps you low and moving carefully.",
        petPrompt: "Woof! Click the right decision to escape the fire more safely.",
        guidePetId: "kiara",
        sceneTheme: "fire",
        image: "assets/scene-fire.svg",
        choiceLayout: "visual",
        answerModeLabel: "Choose the safest response",
        badge: {
            tone: "danger",
            title: "Smoke response",
            delta: "React fast",
            copy: "When the room fills with smoke, breathing space and visibility drop fast."
        },
        successBadge: {
            tone: "success",
            title: "Low and steady",
            delta: "+1 Badge",
            copy: "You chose the response that keeps you lower and moving toward safer air."
        },
        failureBadge: {
            tone: "danger",
            title: "Trap choice",
            delta: "-1 Badge",
            copy: "Running upright or waiting in place lets smoke take control of the room."
        },
        speechBubble: "I need to move.",
        options: [
            { id: "image-a", label: "A — Stay low near the floor and move carefully under the smoke", correct: true },
            { id: "image-b", label: "B — Run straight through thick smoke", correct: false },
            { id: "image-c", label: "C — Stand still and wait for the smoke to clear", correct: false }
        ]
    },
    {
        id: "night-risk-match",
        chapter: "Chapter 2",
        chapterTitle: "The Night That Didn’t Stay Quiet",
        title: "Read the hallway risk",
        question: "Which risk match is safest?",
        story: "You move into the hallway and smoke is everywhere. Then a loud thud hits from above. Something falls. Then another. The building shakes slightly. Escape is getting harder, and now falling objects are part of the danger too.",
        guide: "Read the hallway fast: open space is more exposed, walls are safer, and ceiling cracks are a direct danger sign.",
        petPrompt: "Woof! Tama ba 'to gawin? Pick the hallway choice that keeps you away from the worst danger.",
        guidePetId: "jackie",
        sceneTheme: "fire",
        image: "assets/scene-fire.svg",
        choiceLayout: "visual",
        answerModeLabel: "Pick the safest match",
        badge: {
            tone: "danger",
            title: "Falling hazard",
            delta: "Read the space",
            copy: "Now it is not just fire — where you stand matters just as much as where you run."
        },
        successBadge: {
            tone: "success",
            title: "Risk reader",
            delta: "+1 Badge",
            copy: "You read the hallway correctly and avoided the most exposed positions."
        },
        failureBadge: {
            tone: "danger",
            title: "Trap choice",
            delta: "-1 Badge",
            copy: "Open hallways and ceiling cracks are exactly where the danger gets worse."
        },
        speechBubble: "Something's falling!",
        options: [
            { id: "risk-map-a", label: "A — Staying in open hallway: ⚠ Risky | Moving near walls: ✔ Safe | Standing under ceiling cracks: ☠ Dangerous", correct: true },
            { id: "risk-map-b", label: "B — Staying in open hallway: ✔ Safe | Moving near walls: ⚠ Risky | Standing under ceiling cracks: ☠ Dangerous", correct: false },
            { id: "risk-map-c", label: "C — Staying in open hallway: ⚠ Risky | Moving near walls: ☠ Dangerous | Standing under ceiling cracks: ✔ Safe", correct: false }
        ]
    },
    {
        id: "night-ordering",
        chapter: "Chapter 2",
        chapterTitle: "The Night That Didn’t Stay Quiet",
        title: "Leave in the right order",
        question: "Which order keeps you safest?",
        story: "Fire spreads deeper inside the building. The air feels heavy, warm, and wrong beyond just smoke. Escape paths are getting blocked, pressure is building, and this is the moment when calm order matters more than panic speed.",
        guide: "Assess briefly, move toward safer air or an exit route, and never panic-run into danger.",
        petPrompt: "Woof! Choose the right decision order before panic takes over.",
        guidePetId: "cashmier",
        sceneTheme: "fire",
        image: "assets/scene-fire.svg",
        choiceLayout: "visual",
        answerModeLabel: "Pick the safest order",
        badge: {
            tone: "danger",
            title: "Escape order",
            delta: "Stay calm",
            copy: "This is the part where panic wants control — do not hand it the wheel."
        },
        successBadge: {
            tone: "success",
            title: "Night survivor",
            delta: "+1 Badge",
            copy: "You kept the order clear: assess, move, and never panic-run."
        },
        failureBadge: {
            tone: "danger",
            title: "Panic route",
            delta: "-1 Badge",
            copy: "The safest order starts with a quick read of the room, not blind motion."
        },
        speechBubble: "Stay calm.",
        options: [
            { id: "order-2-1-3", label: "2-1-3 — Assess surroundings briefly → Move toward safer air or an exit route → Panic and run randomly", correct: true },
            { id: "order-1-2-3", label: "1-2-3 — Move toward safer air or an exit route → Assess surroundings briefly → Panic and run randomly", correct: false },
            { id: "order-3-1-2", label: "3-1-2 — Panic and run randomly → Move toward safer air or an exit route → Assess surroundings briefly", correct: false }
        ]
    }
];

const categories = [
    {
        title: "Slip and fall",
        copy: "Catch wet-floor clues before one rushed step turns into a hard landing.",
        icon: "assets/icon-water.svg"
    },
    {
        title: "Electrical check",
        copy: "Dry hands, inspect the wire, then plug in — never in reverse.",
        icon: "assets/icon-wire.svg"
    },
    {
        title: "Noise response",
        copy: "Protect hearing first when sudden drills or machines hit hard.",
        icon: "assets/icon-alarm.svg"
    },
    {
        title: "Smoke escape",
        copy: "Stay low, find cleaner air, and move toward a safe exit route.",
        icon: "assets/icon-exit.svg"
    },
    {
        title: "Impact zones",
        copy: "Avoid open hallways and ceiling cracks when debris may fall.",
        icon: "assets/icon-alert.svg"
    }
];

const introHighlights = [
    "One bad morning can turn into a chain of hazards if you stop paying attention.",
    "Two story chapters train you through slips, shocks, noise, smoke, and falling debris.",
    "Stay alert, stay aware, and keep every mission ready offline."
];

const profileBadges = [
    {
        title: "Floor scout",
        copy: "You catch slippery clues before another crash lands." 
    },
    {
        title: "Circuit shield",
        copy: "You slow down around chargers, wires, and wet hands."
    },
    {
        title: "Sound guard",
        copy: "You protect yourself first when sudden noise hits hard."
    },
    {
        title: "Smoke navigator",
        copy: "You stay low, read the room, and move toward safer air."
    },
    {
        title: "Night survivor",
        copy: "You stay calm when fire, smoke, and falling hazards collide."
    }
];

const petCompanions = [
    {
        id: "cashmier",
        name: "Cashmier",
        role: "Calm lookout",
        image: "assets/pets/cashmier.png",
        copy: "Helps you slow down and scan the scene before the rush takes over."
    },
    {
        id: "dio",
        name: "Dio",
        role: "Cord checker",
        image: "assets/pets/dio.png",
        copy: "Reminds you to inspect chargers, wires, and anything that sparks risk."
    },
    {
        id: "donny",
        name: "Donny",
        role: "Reset buddy",
        image: "assets/pets/donny.png",
        copy: "Keeps chaotic mornings from snowballing into avoidable hazards."
    },
    {
        id: "dylan",
        name: "Dylan",
        role: "Noise scout",
        image: "assets/pets/dylan.png",
        copy: "Watches for sudden sound blasts and reminds you to protect yourself first."
    },
    {
        id: "jackie",
        name: "Jackie",
        role: "Path watcher",
        image: "assets/pets/jackie.png",
        copy: "Keeps hallways, exits, and shared routes clear before anyone moves through them."
    },
    {
        id: "kiara",
        name: "Kiara",
        role: "Exit guide",
        image: "assets/pets/kiara.png",
        copy: "Points you toward cleaner air, safer space, and the next smart move."
    },
    {
        id: "kitty",
        name: "Kitty",
        role: "Balance guard",
        image: "assets/pets/kitty.png",
        copy: "Flags underfoot clutter before one bad step turns into a fall."
    }
];

const missionPrefabPresets = {
    "multiple-choice": {
        pill: "How answer checks work",
        exampleLabel: "Example mission level",
        sceneLabel: "Response choice field",
        sceneStatus: "Practice demo",
        title: "Example level: Pick the safest response",
        body: "This sample mission shows one hazard clue and several answers. Read the clue, pick the safest option, then check your answer.",
        markers: [
            { label: "A", glyph: "📖", text: "Read the clue first", tone: "info", x: 22, y: 30 },
            { label: "B", glyph: "☝️", text: "Pick the safest option", tone: "danger", x: 52, y: 68 },
            { label: "C", glyph: "✅", text: "Check the answer", tone: "success", x: 82, y: 30 }
        ],
        steps: [
            { glyph: "📖", title: "Start", text: "Read the clue carefully.", tone: "info" },
            { glyph: "☝️", title: "Next", text: "Tap the safest answer choice.", tone: "danger" },
            { glyph: "✅", title: "Check", text: "Check once your choice is locked in.", tone: "success" }
        ],
        note: "The live mission waits for the safer answer, so use this example rhythm before locking in your real choice."
    },
    "icon-multiple-choice": {
        pill: "How answer checks work",
        exampleLabel: "Example mission level",
        sceneLabel: "Icon choice practice scene",
        sceneStatus: "Practice demo",
        title: "Example level: Pick the best icon clue",
        body: "This example uses visual answer cards instead of text-heavy options. Read the clue, pick the best icon choice, then check the answer.",
        markers: [
            { label: "A", glyph: "📖", text: "Read the clue first", tone: "info", x: 22, y: 30 },
            { label: "B", glyph: "🖼️", text: "Tap the best visual choice", tone: "danger", x: 52, y: 68 },
            { label: "C", glyph: "✅", text: "Check the answer", tone: "success", x: 82, y: 30 }
        ],
        steps: [
            { glyph: "📖", title: "Start", text: "Read the clue before choosing.", tone: "info" },
            { glyph: "🖼️", title: "Next", text: "Pick the visual answer that best matches.", tone: "danger" },
            { glyph: "✅", title: "Check", text: "Check once the visual answer is selected.", tone: "success" }
        ],
        note: "After the practice demo, return to the live hazard scene and choose the real visual response."
    },
    "tag-select": {
        pill: "How tagging works",
        exampleLabel: "Example mission level",
        sceneLabel: "Safety clue bank",
        sceneStatus: "Practice demo",
        title: "Example level: Tag the safe actions",
        body: "The sample mission mixes safe and risky actions. Tap only the correct actions until the target set is full, then check your tags.",
        markers: [
            { label: "A", glyph: "🏷️", text: "Tag a safe action", tone: "danger", x: 24, y: 46 },
            { label: "B", glyph: "🎯", text: "Fill the whole target set", tone: "info", x: 54, y: 62 },
            { label: "C", glyph: "✅", text: "Check when the set is complete", tone: "success", x: 82, y: 36 }
        ],
        steps: [
            { glyph: "🏷️", title: "Start", text: "Mark only the safe actions.", tone: "info" },
            { glyph: "🎯", title: "Next", text: "Reach the full target count.", tone: "danger" },
            { glyph: "✅", title: "Check", text: "Check once the tagged set is complete.", tone: "success" }
        ],
        note: "Use this example to learn the tagging rhythm, then return to the live mission level and tag the real safe set."
    }
};

const compassIconMarkup = `
    <svg class="helper-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.8"/>
        <path d="m14.9 9.1-1.58 4.24-4.22 1.56 1.58-4.22 4.22-1.58Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="1.05" fill="currentColor" stroke="currentColor" stroke-width="0.4"/>
    </svg>
`;

const STORAGE_KEY = "hazeyelert-shell-state-v3";
const STARTUP_SPLASH_MIN_DURATION_MS = 1650;
const STARTUP_SPLASH_EXIT_DURATION_MS = 540;
const VIEW_ENTRANCE_STAGGER_MS = 56;
const SOUND_DEFAULT_VOLUME = 0.62;
const SOUND_EFFECT_OUTPUT_BOOST = 1.32;
const VIEW_ENTRANCE_TARGET_SELECTOR = [
    ".screen-stack > *",
    ".home-category-grid > *",
    ".chapter-list > *",
    ".progress-grid > *",
    ".settings-summary-strip > *",
    ".settings-grid > *",
    ".option-list > *"
].join(", ");

const shell = document.getElementById("app-shell");
const mainContent = document.getElementById("main-content");
const headerContextKicker = document.getElementById("header-context-kicker");
const navButtons = Array.from(document.querySelectorAll("[data-nav]"));
const startupSplashStartedAt = window.performance?.now?.() ?? Date.now();

const soundRuntime = {
    audioContext: null,
    audioMasterGain: null,
    audioNoiseBuffer: null,
    soundUnlocked: false
};

const state = {
    introSeen: false,
    currentView: "intro",
    runStartIndex: 0,
    currentIndex: 0,
    score: 0,
    streak: 0,
    answered: false,
    lastCorrect: false,
    soundEnabled: true,
    selected: new Set(),
    answerHistory: {},
    completedRun: false,
    savedProgress: null
};

let lastRenderedView = null;
let lastRenderedQuizIndex = null;
let startupSplashHidden = false;

function hideStartupSplash() {
    if (startupSplashHidden) {
        return;
    }

    const splash = document.getElementById("startup-splash");
    if (!(splash instanceof HTMLElement)) {
        startupSplashHidden = true;
        return;
    }

    startupSplashHidden = true;

    const now = window.performance?.now?.() ?? Date.now();
    const remainingDelay = Math.max(0, STARTUP_SPLASH_MIN_DURATION_MS - (now - startupSplashStartedAt));

    window.setTimeout(() => {
        splash.classList.add("hide");

        window.setTimeout(() => {
            splash.remove();
        }, STARTUP_SPLASH_EXIT_DURATION_MS + 80);
    }, remainingDelay);
}

function loadStoredProgress() {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function hasReducedMotionPreference() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function clampNumber(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function getMaxStepIndex() {
    return Math.max(0, quizSteps.length - 1);
}

function clampStepIndex(value, min = 0) {
    return clampNumber(Number.isInteger(value) ? value : min, min, getMaxStepIndex());
}

function sanitizeSelectedOptions(selected, stepIndex) {
    const step = quizSteps[stepIndex];

    if (!step || !Array.isArray(selected)) {
        return [];
    }

    const allowedOptionIds = new Set(step.options.map((option) => option.id));
    return [...new Set(selected.filter((optionId) => allowedOptionIds.has(optionId)))];
}

function sanitizeAnswerHistory(rawHistory) {
    if (!rawHistory || typeof rawHistory !== "object") {
        return {};
    }

    return quizSteps.reduce((history, step, stepIndex) => {
        const rawEntry = rawHistory[step.id];

        if (!rawEntry || typeof rawEntry !== "object") {
            return history;
        }

        history[step.id] = {
            chapter: step.chapter,
            chapterTitle: step.chapterTitle,
            correct: Boolean(rawEntry.correct),
            selected: sanitizeSelectedOptions(rawEntry.selected, stepIndex)
        };

        return history;
    }, {});
}

function normalizeSnapshot(rawSnapshot) {
    const runStartIndex = clampStepIndex(rawSnapshot?.runStartIndex, 0);
    const currentIndex = clampStepIndex(rawSnapshot?.currentIndex, runStartIndex);
    const completedRun = Boolean(rawSnapshot?.completedRun);
    const answered = Boolean(rawSnapshot?.answered);
    const maxScore = Math.max(1, quizSteps.length - runStartIndex);

    return {
        introSeen: Boolean(rawSnapshot?.introSeen),
        runStartIndex,
        currentIndex,
        score: clampNumber(Number.isFinite(rawSnapshot?.score) ? rawSnapshot.score : 0, 0, maxScore),
        streak: clampNumber(Number.isFinite(rawSnapshot?.streak) ? rawSnapshot.streak : 0, 0, maxScore),
        soundEnabled: typeof rawSnapshot?.soundEnabled === "boolean" ? rawSnapshot.soundEnabled : true,
        answered,
        lastCorrect: answered ? Boolean(rawSnapshot?.lastCorrect) : false,
        selected: completedRun ? [] : sanitizeSelectedOptions(rawSnapshot?.selected, currentIndex),
        answerHistory: sanitizeAnswerHistory(rawSnapshot?.answerHistory),
        completedRun
    };
}

function applySnapshot(snapshot) {
    state.introSeen = snapshot.introSeen;
    state.runStartIndex = snapshot.runStartIndex;
    state.currentIndex = snapshot.currentIndex;
    state.score = snapshot.score;
    state.streak = snapshot.streak;
    state.soundEnabled = snapshot.soundEnabled;
    state.answered = snapshot.answered;
    state.lastCorrect = snapshot.lastCorrect;
    state.selected = new Set(snapshot.selected);
    state.answerHistory = snapshot.answerHistory;
    state.completedRun = snapshot.completedRun;
    state.savedProgress = {
        ...snapshot,
        selected: [...snapshot.selected],
        answerHistory: { ...snapshot.answerHistory }
    };
}

function ensureSoundEngine() {
    if (soundRuntime.audioContext && soundRuntime.audioMasterGain) {
        return true;
    }

    const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (typeof AudioContextCtor !== "function") {
        return false;
    }

    try {
        const ctx = new AudioContextCtor();
        const gain = ctx.createGain();
        gain.gain.value = 0.78;
        gain.connect(ctx.destination);

        soundRuntime.audioContext = ctx;
        soundRuntime.audioMasterGain = gain;
        return true;
    } catch {
        return false;
    }
}

function unlockSoundEngine() {
    if (!ensureSoundEngine()) {
        return false;
    }

    const ctx = soundRuntime.audioContext;
    if (!ctx) {
        return false;
    }

    if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
    }

    soundRuntime.soundUnlocked = ctx.state !== "closed";
    return soundRuntime.soundUnlocked;
}

function bindSoundAutoplayUnlock() {
    const unlock = () => {
        const unlocked = unlockSoundEngine();
        if (!unlocked) {
            return;
        }

        window.removeEventListener("pointerdown", unlock, true);
        window.removeEventListener("keydown", unlock, true);
        window.removeEventListener("touchstart", unlock, true);
    };

    window.addEventListener("pointerdown", unlock, true);
    window.addEventListener("keydown", unlock, true);
    window.addEventListener("touchstart", unlock, true);
}

function playTone(options = {}) {
    if (!state.soundEnabled) {
        return;
    }

    if (!unlockSoundEngine()) {
        return;
    }

    const ctx = soundRuntime.audioContext;
    const master = soundRuntime.audioMasterGain;
    if (!ctx || !master || ctx.state !== "running") {
        return;
    }

    const frequency = clampNumber(Number(options.frequency) || 440, 80, 4000);
    const duration = clampNumber(Number(options.duration) || 0.08, 0.02, 0.7);
    const whenOffset = Math.max(0, Number(options.whenOffset) || 0);
    const attack = clampNumber(Number(options.attack) || 0.004, 0.001, 0.05);
    const release = clampNumber(Number(options.release) || 0.04, 0.01, 0.2);
    const detune = clampNumber(Number(options.detune) || 0, -1200, 1200);
    const volume = clampNumber(Number(options.volume) || 0.18, 0, 0.8);
    const type = ["sine", "square", "triangle", "sawtooth"].includes(String(options.type || ""))
        ? String(options.type)
        : "sine";

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    osc.detune.setValueAtTime(detune, ctx.currentTime);

    osc.connect(gain);
    gain.connect(master);

    const start = ctx.currentTime + whenOffset;
    const end = start + duration;

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, end + release);

    osc.start(start);
    osc.stop(end + release + 0.01);
}

function ensureNoiseBuffer() {
    if (soundRuntime.audioNoiseBuffer && soundRuntime.audioContext) {
        return soundRuntime.audioNoiseBuffer;
    }

    if (!ensureSoundEngine()) {
        return null;
    }

    const ctx = soundRuntime.audioContext;
    if (!ctx) {
        return null;
    }

    try {
        const buffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let index = 0; index < data.length; index += 1) {
            data[index] = (Math.random() * 2 - 1) * 0.9;
        }

        soundRuntime.audioNoiseBuffer = buffer;
        return buffer;
    } catch {
        soundRuntime.audioNoiseBuffer = null;
        return null;
    }
}

function playNoiseBurst(options = {}) {
    if (!state.soundEnabled) {
        return;
    }

    if (!unlockSoundEngine()) {
        return;
    }

    const ctx = soundRuntime.audioContext;
    const master = soundRuntime.audioMasterGain;
    const noiseBuffer = ensureNoiseBuffer();
    if (!ctx || !master || !noiseBuffer || ctx.state !== "running") {
        return;
    }

    const volume = clampNumber(Number(options.volume) || 0.08, 0, 0.5);
    const duration = clampNumber(Number(options.duration) || 0.05, 0.01, 0.35);
    const whenOffset = Math.max(0, Number(options.whenOffset) || 0);
    const attack = clampNumber(Number(options.attack) || 0.003, 0.001, 0.04);
    const release = clampNumber(Number(options.release) || 0.05, 0.01, 0.2);
    const frequency = clampNumber(Number(options.frequency) || 1800, 120, 6000);
    const q = clampNumber(Number(options.q) || 0.9, 0.1, 24);
    const filterType = ["bandpass", "highpass", "lowpass"].includes(String(options.filterType || ""))
        ? String(options.filterType)
        : "bandpass";

    const source = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    source.buffer = noiseBuffer;
    filter.type = filterType;
    filter.frequency.setValueAtTime(frequency, ctx.currentTime);
    filter.Q.setValueAtTime(q, ctx.currentTime);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(master);

    const start = ctx.currentTime + whenOffset;
    const end = start + duration;

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.linearRampToValueAtTime(volume, start + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, end + release);

    source.start(start);
    source.stop(end + release + 0.02);
}

function getSoundEffectsOutputScale() {
    return clampNumber(SOUND_DEFAULT_VOLUME * SOUND_EFFECT_OUTPUT_BOOST, 0.35, 2.2);
}

function playSoundEffect(kind) {
    if (!state.soundEnabled) {
        return;
    }

    const volumeScale = getSoundEffectsOutputScale();
    const v = (base) => clampNumber(base * volumeScale, 0, 0.8);

    switch (String(kind || "").trim().toLowerCase()) {
        case "correct":
            playNoiseBurst({ frequency: 1840, duration: 0.024, release: 0.034, volume: v(0.018), filterType: "bandpass", q: 1.05, whenOffset: 0.008 });
            playTone({ frequency: 612, duration: 0.045, volume: v(0.048), type: "triangle", attack: 0.002, release: 0.03 });
            playTone({ frequency: 816, duration: 0.055, whenOffset: 0.032, volume: v(0.052), type: "sine", attack: 0.002, release: 0.036 });
            playTone({ frequency: 1020, duration: 0.05, whenOffset: 0.07, volume: v(0.03), type: "triangle", attack: 0.002, release: 0.034 });
            break;
        case "wrong":
            playNoiseBurst({ frequency: 760, duration: 0.05, release: 0.058, volume: v(0.024), filterType: "lowpass", q: 1.2 });
            playTone({ frequency: 296, duration: 0.058, volume: v(0.056), type: "square", attack: 0.002, release: 0.034 });
            playTone({ frequency: 228, duration: 0.072, whenOffset: 0.048, volume: v(0.048), type: "triangle", attack: 0.002, release: 0.04 });
            break;
        case "tap":
            playNoiseBurst({ frequency: 2150, duration: 0.02, release: 0.03, volume: v(0.016), filterType: "bandpass", q: 1.4 });
            playTone({ frequency: 880, duration: 0.028, volume: v(0.04), type: "triangle", attack: 0.002, release: 0.024 });
            playTone({ frequency: 1320, duration: 0.022, whenOffset: 0.01, volume: v(0.022), type: "sine", attack: 0.001, release: 0.018 });
            break;
        case "nav":
            playNoiseBurst({ frequency: 1850, duration: 0.026, release: 0.038, volume: v(0.02), filterType: "bandpass", q: 1.1 });
            playTone({ frequency: 520, duration: 0.048, volume: v(0.052), type: "triangle", attack: 0.003, release: 0.035 });
            playTone({ frequency: 780, duration: 0.068, whenOffset: 0.038, volume: v(0.056), type: "sine", attack: 0.003, release: 0.045 });
            playTone({ frequency: 1040, duration: 0.05, whenOffset: 0.092, volume: v(0.034), type: "triangle", attack: 0.002, release: 0.03 });
            break;
        case "success":
            playNoiseBurst({ frequency: 1460, duration: 0.04, release: 0.06, volume: v(0.026), filterType: "bandpass", q: 0.75, whenOffset: 0.016 });
            playTone({ frequency: 540, duration: 0.08, volume: v(0.06), type: "triangle", attack: 0.003, release: 0.05 });
            playTone({ frequency: 678, duration: 0.09, whenOffset: 0.048, volume: v(0.056), type: "sine", attack: 0.003, release: 0.055 });
            playTone({ frequency: 905, duration: 0.12, whenOffset: 0.105, volume: v(0.064), type: "triangle", attack: 0.004, release: 0.07 });
            break;
        case "warning":
            playNoiseBurst({ frequency: 920, duration: 0.06, release: 0.08, volume: v(0.028), filterType: "bandpass", q: 1.5 });
            playTone({ frequency: 410, duration: 0.075, volume: v(0.064), type: "sawtooth", attack: 0.003, release: 0.045 });
            playTone({ frequency: 350, duration: 0.082, whenOffset: 0.065, volume: v(0.058), type: "triangle", attack: 0.003, release: 0.05 });
            playTone({ frequency: 300, duration: 0.09, whenOffset: 0.128, volume: v(0.05), type: "sine", attack: 0.003, release: 0.055 });
            break;
        case "toggle-on":
            playNoiseBurst({ frequency: 2050, duration: 0.018, release: 0.028, volume: v(0.014), filterType: "highpass", q: 1.1 });
            playTone({ frequency: 720, duration: 0.04, volume: v(0.042), type: "triangle", attack: 0.002, release: 0.03 });
            playTone({ frequency: 980, duration: 0.07, whenOffset: 0.028, volume: v(0.046), type: "sine", attack: 0.002, release: 0.04 });
            break;
        case "toggle-off":
            playNoiseBurst({ frequency: 1240, duration: 0.02, release: 0.03, volume: v(0.013), filterType: "bandpass", q: 1.35 });
            playTone({ frequency: 440, duration: 0.04, volume: v(0.038), type: "triangle", attack: 0.002, release: 0.03 });
            playTone({ frequency: 315, duration: 0.06, whenOffset: 0.03, volume: v(0.04), type: "sine", attack: 0.002, release: 0.038 });
            break;
        default:
            break;
    }
}

function toggleSoundEffects() {
    const turningOn = !state.soundEnabled;

    if (turningOn) {
        state.soundEnabled = true;
        syncStoredProgress();
        render();
        playSoundEffect("toggle-on");
        return;
    }

    playSoundEffect("toggle-off");
    window.setTimeout(() => {
        state.soundEnabled = false;
        syncStoredProgress();
        render();
    }, 90);
}

function playActionSound(action) {
    switch (action) {
        case "enter-dashboard":
        case "continue-mission":
        case "restart-quiz":
        case "launch-chapter":
        case "open-mission-screen":
        case "go-profile":
        case "open-settings":
        case "next-step":
        case "go-home":
            playSoundEffect("nav");
            break;
        case "pick-option":
        case "submit-multi":
            break;
        case "toggle-option":
            playSoundEffect("tap");
            break;
        case "clear-progress":
        case "replay-intro":
            playSoundEffect("warning");
            break;
        case "toggle-sound":
            break;
        default:
            playSoundEffect("tap");
            break;
    }
}

function getViewEntranceTargets(root = mainContent) {
    if (!(root instanceof HTMLElement)) {
        return [];
    }

    const targets = Array.from(root.querySelectorAll(VIEW_ENTRANCE_TARGET_SELECTOR))
        .filter((item) => item instanceof HTMLElement);

    return [...new Set(targets)];
}

function animateViewEntrance(baseDelayMs = 0) {
    if (hasReducedMotionPreference()) {
        return;
    }

    const targets = getViewEntranceTargets();

    targets.forEach((target, index) => {
        target.classList.remove("view-entrance-enter");
        target.classList.add("view-entrance-pending");
        target.style.setProperty("--enter-delay", `${baseDelayMs + Math.min(index, 8) * VIEW_ENTRANCE_STAGGER_MS}ms`);
    });

    if (targets.length === 0) {
        return;
    }

    window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
            targets.forEach((target) => {
                void target.offsetWidth;
                target.classList.remove("view-entrance-pending");
                target.classList.add("view-entrance-enter");
            });
        });
    });
}

function buildSnapshot() {
    return {
        introSeen: state.introSeen,
        runStartIndex: state.runStartIndex,
        currentIndex: state.currentIndex,
        score: state.score,
        streak: state.streak,
        soundEnabled: state.soundEnabled,
        answered: state.answered,
        lastCorrect: state.lastCorrect,
        selected: [...state.selected],
        answerHistory: state.answerHistory,
        completedRun: state.completedRun
    };
}

function syncStoredProgress() {
    const snapshot = normalizeSnapshot(buildSnapshot());
    applySnapshot(snapshot);

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    } catch {
        // ignore storage errors for offline webview reliability
    }
}

function hydrateState() {
    const saved = loadStoredProgress();

    if (!saved) {
        syncStoredProgress();
        return;
    }

    applySnapshot(normalizeSnapshot(saved));
    state.currentView = state.introSeen ? "home" : "intro";
}

function resetMissionState() {
    state.runStartIndex = 0;
    state.currentIndex = 0;
    state.score = 0;
    state.streak = 0;
    state.answered = false;
    state.lastCorrect = false;
    state.selected = new Set();
    state.answerHistory = {};
    state.completedRun = false;
}

function getCurrentStep() {
    return quizSteps[clampStepIndex(state.currentIndex, state.runStartIndex)] ?? quizSteps[0];
}

function getRunTotal(snapshot = state) {
    return Math.max(1, quizSteps.length - clampStepIndex(snapshot.runStartIndex, 0));
}

function getAnsweredCount(snapshot = state) {
    if (snapshot.completedRun) {
        return getRunTotal(snapshot);
    }

    const progressed = Math.max(0, snapshot.currentIndex - snapshot.runStartIndex);
    return Math.min(getRunTotal(snapshot), progressed + (snapshot.answered ? 1 : 0));
}

function getProgressPercent(snapshot = state) {
    return Math.round((getAnsweredCount(snapshot) / getRunTotal(snapshot)) * 100);
}

function getMissionOutcome(snapshot = state) {
    const total = getRunTotal(snapshot);
    const score = clampNumber(Number.isFinite(snapshot?.score) ? snapshot.score : 0, 0, total);
    const percent = Math.round((score / total) * 100);
    const isComplete = percent >= 67;
    const chapterSummaries = quizSteps
        .reduce((collection, step) => {
            if (!collection[step.chapter]) {
                collection[step.chapter] = { total: 0, correct: 0 };
            }

            collection[step.chapter].total += 1;

            const answer = snapshot?.answerHistory?.[step.id];
            if (answer?.correct) {
                collection[step.chapter].correct += 1;
            }

            return collection;
        }, {});

    const chaptersCleared = Object.values(chapterSummaries)
        .filter((chapter) => chapter.correct === chapter.total)
        .length;

    const summary = isComplete
        ? (percent === 100
            ? "Mission complete. You cleared every hazard scene with the safest response."
            : "Mission complete. You reached the safe-call threshold and made it through the route.")
        : "Mission failed. You missed too many safety calls to clear the route this time.";

    const recommendation = isComplete
        ? (percent === 100
            ? "Perfect clear — your awareness stayed sharp from the first clue to the last escape route."
            : "Solid recovery. Replay the mission once more if you want to turn that safe finish into a full clear.")
        : "Replay the mission and focus on the very first action that lowers danger instead of reacting late.";

    return {
        score,
        total,
        percent,
        isComplete,
        status: isComplete ? "complete" : "failed",
        eyebrow: isComplete ? "Mission complete" : "Mission failed",
        heading: isComplete ? "Mission complete" : "Mission failed",
        icon: isComplete ? "★" : "✕",
        summary,
        recommendation,
        chaptersCleared,
        chapterCount: Object.keys(chapterSummaries).length,
        primaryAction: isComplete
            ? { action: "go-home", label: "Back home" }
            : { action: "restart-quiz", label: "Retry mission" },
        secondaryAction: isComplete
            ? { action: "restart-quiz", label: "Replay mission" }
            : { action: "go-home", label: "Back home" }
    };
}

function getRunPositionLabel() {
    return `${Math.max(1, state.currentIndex - state.runStartIndex + 1)} / ${getRunTotal()}`;
}

function getStatusSnapshot() {
    return normalizeSnapshot(state.savedProgress ?? buildSnapshot());
}

function getSavedProgressMeta() {
    const snapshot = getStatusSnapshot();
    const hasHistory = Object.keys(snapshot.answerHistory ?? {}).length > 0;
    const currentStep = quizSteps[snapshot.currentIndex] ?? quizSteps[0];

    if (!hasHistory && !snapshot.completedRun && snapshot.currentIndex === snapshot.runStartIndex && !snapshot.answered) {
        return {
            label: "Start mission",
            helper: "Start from the strange morning warning and see if you can break the bad luck.",
            currentStep: quizSteps[0],
            progress: 0,
            hasSavedProgress: false,
            completedRun: false
        };
    }

    if (snapshot.completedRun) {
        return {
            label: "View results",
            helper: "Your last mission is complete. Review the recap and chapter ratings.",
            currentStep,
            progress: 100,
            hasSavedProgress: true,
            completedRun: true
        };
    }

    return {
        label: "Resume mission",
        helper: `Continue from ${currentStep.chapterTitle.toLowerCase()} and finish the safety route.`,
        currentStep,
        progress: getProgressPercent(snapshot),
        hasSavedProgress: true,
        completedRun: false
    };
}

function hasSelectedProgress(snapshot) {
    return Array.isArray(snapshot?.selected) && snapshot.selected.length > 0;
}

function hasInProgressMission(snapshot = getStatusSnapshot()) {
    if (!snapshot || snapshot.completedRun) {
        return false;
    }

    return Boolean(
        Object.keys(snapshot.answerHistory ?? {}).length > 0
        || snapshot.answered
        || snapshot.currentIndex > snapshot.runStartIndex
        || hasSelectedProgress(snapshot)
    );
}

function getChapterStartIndex(chapter) {
    const startIndex = quizSteps.findIndex((step) => step.chapter === chapter);
    return startIndex < 0 ? 0 : startIndex;
}

function getChapterForIndex(index) {
    return quizSteps[clampStepIndex(index, 0)]?.chapter ?? quizSteps[0]?.chapter ?? "Mission";
}

function confirmMissionReplacement(startIndex, reason = "chapter") {
    const snapshot = getStatusSnapshot();

    if (!hasInProgressMission(snapshot)) {
        return true;
    }

    const currentChapter = getChapterForIndex(snapshot.currentIndex);
    const targetChapter = getChapterForIndex(startIndex);

    if (reason === "restart") {
        return window.confirm(`Restart the mission from the beginning? Your current in-progress progress from ${currentChapter} will be replaced.`);
    }

    if (reason === "chapter" && currentChapter === targetChapter) {
        return window.confirm(`Restart ${targetChapter} from the beginning? Your current in-progress progress will be replaced.`);
    }

    return window.confirm(`Open ${targetChapter} instead? Your current in-progress progress from ${currentChapter} will be replaced.`);
}

function getHeaderViewMeta() {
    switch (state.currentView) {
        case "mission":
            return {
                kicker: "Mission board"
            };
        case "profile":
            return {
                kicker: "Profile"
            };
        case "settings":
            return {
                kicker: "Settings"
            };
        case "quiz": {
            const step = getCurrentStep();
            return {
                kicker: step?.chapter ?? "Live mission"
            };
        }
        case "result":
            return {
                kicker: "Results"
            };
        case "intro":
            return {
                kicker: "Welcome"
            };
        case "home":
        default:
            return {
                kicker: "Dashboard"
            };
    }
}

function getCorrectOptionIds(step) {
    return step.options.filter((option) => option.correct).map((option) => option.id);
}

function formatLabelList(labels) {
    if (labels.length <= 1) {
        return labels[0] ?? "";
    }

    if (labels.length === 2) {
        return `${labels[0]} and ${labels[1]}`;
    }

    return `${labels.slice(0, -1).join(", ")}, and ${labels[labels.length - 1]}`;
}

function getChoiceLayout(step) {
    if (!step) {
        return "stacked";
    }

    if (step.choiceLayout) {
        return step.choiceLayout;
    }

    if (step.selectionMode === "multi") {
        return "grid";
    }

    return step.sceneTheme === "fire" ? "visual" : "stacked";
}

function splitOptionLabel(label) {
    const value = String(label ?? "").trim();
    const parts = value.split("—");

    if (parts.length > 1) {
        return {
            kicker: parts[0].trim(),
            main: parts.slice(1).join("—").trim()
        };
    }

    return {
        kicker: "",
        main: value
    };
}

function getSceneBadgeIcon(tone) {
    switch (tone) {
        case "success":
            return "★";
        case "danger":
            return "✕";
        case "warning":
        default:
            return "!";
    }
}

function getSceneBadge(step, feedback) {
    const fallback = feedback
        ? (feedback.isCorrect
            ? {
                tone: "success",
                title: "Safe move",
                delta: "+1 Badge",
                copy: "You picked the safer response for this scene."
            }
            : {
                tone: "danger",
                title: "Trap choice",
                delta: "-1 Badge",
                copy: "Review the scene again and watch for the hazard clues."
            })
        : {
            tone: step?.sceneTheme === "fire" ? "danger" : "warning",
            title: "Mission focus",
            delta: step?.chapter ?? "",
            copy: step?.guide ?? ""
        };

    const source = feedback
        ? (feedback.isCorrect ? step?.successBadge : step?.failureBadge)
        : step?.badge;

    const tone = source?.tone ?? fallback.tone;

    return {
        tone,
        title: source?.title ?? fallback.title,
        delta: source?.delta ?? fallback.delta,
        copy: source?.copy ?? fallback.copy,
        icon: source?.icon ?? getSceneBadgeIcon(tone)
    };
}

function getChapterDisplayParts(chapter) {
    const value = String(chapter ?? "").trim();
    const match = /^(Chapter)\s+(\d+)$/i.exec(value);

    if (!match) {
        return {
            raw: value,
            word: value.toUpperCase(),
            number: ""
        };
    }

    return {
        raw: value,
        word: match[1].toUpperCase(),
        number: match[2]
    };
}

function getMissionPrefabKey(step) {
    if (!step) {
        return "multiple-choice";
    }

    if (step.selectionMode === "multi") {
        return "tag-select";
    }

    if (getChoiceLayout(step) === "visual") {
        return "icon-multiple-choice";
    }

    return "multiple-choice";
}

function getMissionPrefab(step) {
    if (!step) {
        return null;
    }

    const preset = missionPrefabPresets[getMissionPrefabKey(step)];

    if (!preset) {
        return null;
    }

    return {
        ...preset,
        stageTitle: step.title,
        stageSummary: `${step.chapter} · ${step.answerModeLabel}`,
        sceneLabel: step.chapterTitle
    };
}

function getPetCompanionForStep(step) {
    if (!petCompanions.length) {
        return null;
    }

    const explicitPet = petCompanions.find((pet) => pet.id === step?.guidePetId);
    if (explicitPet) {
        return explicitPet;
    }

    const stepIndex = quizSteps.findIndex((entry) => entry.id === step?.id);
    return petCompanions[(stepIndex >= 0 ? stepIndex : 0) % petCompanions.length] ?? petCompanions[0];
}

function getPetGuideState(step, feedback) {
    const pet = getPetCompanionsFallback(step);

    if (feedback?.isCorrect) {
        return {
            pet,
            eyebrow: pet.role,
            heading: `Woof! ${pet.name} says that is the safer call.`,
            copy: step?.successBadge?.copy ?? feedback.copy
        };
    }

    if (feedback) {
        return {
            pet,
            eyebrow: pet.role,
            heading: `Woof! ${pet.name} says think again.`,
            copy: `${step?.failureBadge?.copy ?? feedback.copy} ${step?.guide ?? ""}`.trim()
        };
    }

    return {
        pet,
        eyebrow: pet.role,
        heading: "Woof! Tama ba 'to gawin?",
        copy: step?.petPrompt ?? `${step?.question ?? pet.copy} ${step?.answerModeLabel ?? ""}`.trim()
    };
}

function getPetCompanionsFallback(step) {
    return getPetCompanionForStep(step) ?? {
        name: "Mascot guide",
        role: "Safety guide",
        image: "assets/pet-guide.svg",
        copy: step?.guide ?? "Stay alert and keep the route safe."
    };
}

function renderPetRoster(activePetId) {
    return petCompanions.map((pet) => `
        <article class="mini-panel compact-panel pet-roster-card ${pet.id === activePetId ? "pet-roster-card-active" : ""}">
            <div class="pet-roster-visual">
                <img src="${pet.image}" alt="${pet.name}" onerror="this.onerror=null;this.src='assets/pet-guide.svg';" />
            </div>
            <strong>${pet.name}</strong>
            <small>${pet.role}</small>
            <p>${pet.copy}</p>
        </article>
    `).join("");
}

function renderMissionPrefabMarkers(markers = []) {
    return markers.map((marker, index) => `
        <span
            class="mission-prefab-marker is-${marker.tone || "info"}"
            style="left:${marker.x}%; top:${marker.y}%; --marker-index:${index};"
            title="${marker.text}"
        >
            <strong>${marker.label || String.fromCharCode(65 + index)}</strong>
            <span class="mission-prefab-marker-glyph">${marker.glyph || marker.symbol || "•"}</span>
            <span class="mission-prefab-marker-text">${marker.text || ""}</span>
        </span>
    `).join("");
}

function renderMissionPrefabSteps(steps = []) {
    return steps.map((item, index) => `
        <li class="mission-prefab-step-card is-${item.tone || "info"}">
            <span class="mission-prefab-step-index">${index + 1}</span>
            <span class="mission-prefab-step-icon" aria-hidden="true">${item.glyph || item.icon || "•"}</span>
            <span class="mission-prefab-step-copy">
                <strong>${item.title || `Step ${index + 1}`}</strong>
                <span>${item.text || ""}</span>
            </span>
        </li>
    `).join("");
}

function renderMissionPrefabPanel(step) {
    const prefab = getMissionPrefab(step);

    if (!prefab) {
        return "";
    }

    return `
        <section class="mission-prefab-card card-surface theme-${step.sceneTheme}">
            <div class="mission-prefab-head">
                <div class="mission-prefab-pill-row">
                    <span class="mission-prefab-pill">${prefab.pill}</span>
                    <span class="mission-prefab-example-pill">${prefab.exampleLabel}</span>
                </div>
                <span class="mission-prefab-discovery">${prefab.sceneStatus}</span>
            </div>

            <div class="mission-prefab-copy">
                <h2>${prefab.title}</h2>
                <p>${prefab.body}</p>
            </div>

            <section class="mission-prefab-example">
                <div class="mission-prefab-level-head">
                    <strong>${prefab.stageTitle}</strong>
                    <p>${prefab.stageSummary}</p>
                </div>

                <div class="mission-prefab-grid">
                <div class="mission-prefab-stage-shell">
                    <div class="mission-prefab-stage-header">
                        <span>${prefab.sceneLabel}</span>
                        <small>${step.answerModeLabel}</small>
                    </div>

                    <div class="mission-prefab-stage-wrap">
                        <div class="scene-visual mission-prefab-stage">
                            <img src="${step.image}" alt="${prefab.sceneLabel}" />
                        </div>
                        <div class="mission-prefab-stage-markers" aria-hidden="true">
                            ${renderMissionPrefabMarkers(prefab.markers)}
                        </div>
                    </div>
                </div>

                <div class="mission-prefab-step-panel">
                    <div class="mission-prefab-step-panel-head">
                        <strong>Quick guide</strong>
                        <span>${prefab.steps.length} steps</span>
                    </div>
                    <ol class="mission-prefab-step-list" aria-label="Hazeyelert mission prefab steps">
                        ${renderMissionPrefabSteps(prefab.steps)}
                    </ol>
                </div>
                </div>

                <p class="mission-prefab-note">
                    <span class="mission-prefab-note-icon" aria-hidden="true">ⓘ</span>
                    <span>${prefab.note}</span>
                </p>
            </section>
        </section>
    `;
}

function getOptionVisual(step, option, index) {
    const visuals = {
        "image-a": {
            glyph: "🧎",
            title: "Stay low",
            caption: "Safer air is closer to the floor.",
            detail: "Move carefully under the smoke instead of standing tall in it.",
            tone: "safe"
        },
        "image-b": {
            glyph: "🏃",
            title: "Run through smoke",
            caption: "Fast is not always safe.",
            detail: "Charging upright through thick smoke cuts visibility and breathing space.",
            tone: "danger"
        },
        "image-c": {
            glyph: "🧍",
            title: "Wait in place",
            caption: "Standing still gives smoke time.",
            detail: "Waiting for smoke to clear leaves you in the hazard instead of moving out of it.",
            tone: "danger"
        },
        "risk-map-a": {
            glyph: "🧱",
            title: "Safer wall route",
            caption: "Walls are safer than open exposure.",
            detail: "Open hallway = risky, near walls = safer, ceiling cracks = dangerous.",
            tone: "safe"
        },
        "risk-map-b": {
            glyph: "🚪",
            title: "Wrong hallway read",
            caption: "This one treats the hallway as too safe.",
            detail: "Open hallway is exposed, not the safest place to stay when objects may fall.",
            tone: "danger"
        },
        "risk-map-c": {
            glyph: "⚠️",
            title: "Unsafe crack call",
            caption: "Never trust ceiling cracks.",
            detail: "This option wrongly labels the crack zone as safe.",
            tone: "danger"
        },
        "order-2-1-3": {
            glyph: "🧭",
            title: "Assess, then move",
            caption: "Calm order keeps you alive.",
            detail: "Check the room briefly, move toward safer air or an exit, and never panic-run.",
            tone: "safe"
        },
        "order-1-2-3": {
            glyph: "➡️",
            title: "Move too soon",
            caption: "Skipping the room check is risky.",
            detail: "You need a quick read of the environment before committing to a route.",
            tone: "danger"
        },
        "order-3-1-2": {
            glyph: "😱",
            title: "Panic first",
            caption: "Panic cannot lead the route.",
            detail: "Random movement is exactly how danger gets worse in smoke and fire.",
            tone: "danger"
        },
        "observe-surroundings": {
            glyph: "👀",
            title: "Observe",
            caption: "Read the space before moving.",
            detail: "Slow down and observe your surroundings.",
            tone: "safe"
        },
        "ignore-dangers": {
            glyph: "🙈",
            title: "Ignore it",
            caption: "This keeps the hazard alive.",
            detail: "Ignoring small dangers lets them stack into bigger ones.",
            tone: "danger"
        },
        "check-before-using": {
            glyph: "🔎",
            title: "Check first",
            caption: "Inspect before you use.",
            detail: "Check things before using them.",
            tone: "safe"
        },
        "stay-uncomfortable": {
            glyph: "⚠️",
            title: "Stay put",
            caption: "Discomfort is a warning sign.",
            detail: "Staying in uncomfortable situations keeps you inside the risk zone.",
            tone: "danger"
        },
        "move-away-risk": {
            glyph: "↩️",
            title: "Move away",
            caption: "Distance is protection.",
            detail: "Move away from anything risky.",
            tone: "safe"
        }
    };

    if (visuals[option.id]) {
        return visuals[option.id];
    }

    return {
        glyph: step.selectionMode === "multi" ? ["🧠", "⚠️", "🔍", "🛑", "↪️"][index] ?? "•" : ["A", "B", "C", "D", "E"][index] ?? "•",
        title: splitOptionLabel(option.label).main,
        caption: splitOptionLabel(option.label).kicker || step.answerModeLabel,
        detail: "",
        tone: option.correct ? "safe" : "neutral"
    };
}

function getFeedback(step) {
    const correctIds = getCorrectOptionIds(step);
    const selectedIds = [...state.selected];
    const isCorrect = step.selectionMode === "multi"
        ? selectedIds.length === correctIds.length && selectedIds.every((id) => correctIds.includes(id))
        : selectedIds.length === 1 && correctIds.includes(selectedIds[0]);

    const correctLabels = step.options
        .filter((option) => option.correct)
        .map((option) => option.label);

    return {
        isCorrect,
        title: isCorrect ? "Correct answer" : "Safer response",
        copy: isCorrect
            ? `Nice work. ${formatLabelList(correctLabels)}`
            : `The safer move is: ${formatLabelList(correctLabels)}`
    };
}

function getScenarioLead(step) {
    switch (step?.sceneTheme) {
        case "wire":
            return "Slow down, check the risk, and leave the risky move for last.";
        case "noise":
            return "Protect yourself from the blast of sound before you do anything else.";
        case "fire":
            return "Smoke changes the room fast, so the first calm move matters most.";
        case "pets":
            return "Even calm pets can turn a hallway into a trip zone when the path is crowded.";
        case "spill":
        default:
            return "Scan the scene first and lock onto the hazard before you move.";
    }
}

function getMultiSelectSummary(step) {
    if (step?.selectionMode !== "multi") {
        return "";
    }

    if (state.selected.size === 0) {
        return "Select every safe action";
    }

    return `${state.selected.size} selected`;
}

function getMultiSelectSubmitLabel() {
    const count = state.selected.size;

    if (count === 0) {
        return "Submit selected actions";
    }

    return `Submit ${count} selected ${count === 1 ? "action" : "actions"}`;
}

function updateAnswerHistory(step, feedback) {
    state.answerHistory = {
        ...state.answerHistory,
        [step.id]: {
            chapter: step.chapter,
            chapterTitle: step.chapterTitle,
            correct: feedback.isCorrect,
            selected: [...state.selected]
        }
    };
}

function answerCurrentStep() {
    if (state.answered) {
        return;
    }

    const step = getCurrentStep();
    if (!step) {
        return;
    }

    const feedback = getFeedback(step);
    state.answered = true;
    state.lastCorrect = feedback.isCorrect;
    state.score += feedback.isCorrect ? 1 : 0;
    state.streak = feedback.isCorrect ? state.streak + 1 : 0;
    updateAnswerHistory(step, feedback);
    playSoundEffect(feedback.isCorrect ? "correct" : "wrong");
    syncStoredProgress();
    render();
}

function handleSingleSelect(optionId) {
    state.selected = new Set([optionId]);
    answerCurrentStep();
}

function toggleMultiSelect(optionId) {
    const next = new Set(state.selected);

    if (next.has(optionId)) {
        next.delete(optionId);
    } else {
        next.add(optionId);
    }

    state.selected = next;
    syncStoredProgress();
    render();
}

function submitMultiSelect() {
    if (state.selected.size === 0) {
        return;
    }

    answerCurrentStep();
}

function goNext() {
    if (!state.answered) {
        return;
    }

    if (state.currentIndex < quizSteps.length - 1) {
        state.currentIndex += 1;
        state.selected = new Set();
        state.answered = false;
        state.lastCorrect = false;
        state.currentView = "quiz";
    } else {
        state.currentView = "result";
        state.completedRun = true;
        playSoundEffect(getMissionOutcome().isComplete ? "success" : "warning");
    }

    syncStoredProgress();
    render();
}

function startQuiz(startIndex = 0, options = {}) {
    const safeStartIndex = clampStepIndex(startIndex, 0);

    if (options.confirmReplacement && !confirmMissionReplacement(safeStartIndex, options.reason)) {
        return false;
    }

    resetMissionState();
    state.runStartIndex = safeStartIndex;
    state.currentIndex = safeStartIndex;
    state.currentView = "quiz";
    syncStoredProgress();
    render();

    return true;
}

function continueMission() {
    const saved = state.savedProgress ?? buildSnapshot();
    const hasHistory = Object.keys(saved.answerHistory ?? {}).length > 0;

    if (saved.completedRun) {
        viewStoredResult();
        return;
    }

    if (hasHistory || saved.answered || saved.currentIndex > saved.runStartIndex) {
        restoreProgressSnapshot(saved, "quiz");
        render();
        return;
    }

    startQuiz(0);
}

function restartQuiz() {
    startQuiz(0, { confirmReplacement: true, reason: "restart" });
}

function restoreProgressSnapshot(snapshot, targetView) {
    applySnapshot(normalizeSnapshot(snapshot));
    state.currentView = targetView;
    syncStoredProgress();
}

function viewStoredResult() {
    const snapshot = state.savedProgress ?? buildSnapshot();
    restoreProgressSnapshot(snapshot, "result");
}

function enterDashboard() {
    state.introSeen = true;
    state.currentView = "home";
    syncStoredProgress();
    render();
}

function clearMissionProgress() {
    const shouldClear = window.confirm("Clear your saved mission progress, score, and chapter history on this device?");

    if (!shouldClear) {
        return;
    }

    resetMissionState();
    state.currentView = "settings";
    syncStoredProgress();
    render();
}

function replayIntro() {
    const shouldReplay = window.confirm("Replay the intro and reset your current mission progress on this device?");

    if (!shouldReplay) {
        return;
    }

    resetMissionState();
    state.introSeen = false;
    state.currentView = "intro";
    syncStoredProgress();
    render();
}

function openSettings() {
    state.currentView = "settings";
    syncStoredProgress();
    render();
}

function openMissionScreen() {
    state.currentView = "mission";
    syncStoredProgress();
    render();
}

function goHome() {
    state.currentView = "home";
    syncStoredProgress();
    render();
}

function goProfile() {
    state.currentView = "profile";
    syncStoredProgress();
    render();
}

function launchChapter(chapter) {
    const startIndex = getChapterStartIndex(chapter);
    startQuiz(startIndex, { confirmReplacement: true, reason: "chapter" });
}

function renderIntro() {
    return `
        <section class="intro-screen screen-stack">
            <div class="intro-hero card-surface">
                <div class="eyebrow-row">
                    <span class="eyebrow-pill">Hazard-ready mode</span>
                    <span class="hero-mini-copy">Offline + classroom friendly</span>
                </div>
                <div class="intro-copy">
                    <h1>Be alert.</h1>
                    <h2>Be aware.</h2>
                    <p>
                        Hazeyelert turns everyday school hazards into quick decision drills so you can react before a small problem turns into a big one.
                    </p>
                </div>
                <div class="intro-highlight-grid">
                    ${introHighlights.map((item) => `
                        <article class="mini-panel">
                            <span class="mini-panel-dot"></span>
                            <p>${item}</p>
                        </article>
                    `).join("")}
                </div>
                <button type="button" class="primary-button wide-button" data-action="enter-dashboard">Enter dashboard</button>
            </div>
        </section>
    `;
}

function renderCategoryCards() {
    return categories.map((category) => `
        <article class="icon-card mini-panel">
            <img src="${category.icon}" alt="" />
            <div>
                <h3>${category.title}</h3>
                <p>${category.copy}</p>
            </div>
        </article>
    `).join("");
}

function renderHome() {
    const meta = getSavedProgressMeta();

    return `
        <section class="screen-stack home-screen">
            <section class="home-feature card-surface">
                <div class="home-feature-copy">
                    <div class="home-feature-copy-body">
                        <span class="eyebrow-pill">Today’s focus route</span>
                        <h1>Hazeyelert</h1>
                        <p>${meta.helper}</p>
                    </div>
                    <div class="hero-actions">
                        <button type="button" class="primary-button" data-action="continue-mission">${meta.label}</button>
                        <button type="button" class="secondary-button" data-action="open-mission-screen">Mission board</button>
                    </div>
                </div>
                <div class="home-feature-visual scene-orb scene-${meta.currentStep.sceneTheme}">
                    <img src="${meta.currentStep.image}" alt="${meta.currentStep.chapterTitle}" />
                </div>
            </section>

            <section class="section-block">
                <div class="section-heading-row">
                    <h2>Mindincident files</h2>
                    <button type="button" class="section-link" data-action="open-mission-screen">See route</button>
                </div>
                <div class="grid-two home-category-grid">${renderCategoryCards()}</div>
            </section>

            <section class="grid-two responsive-stretch home-overview-grid">
                <article class="card-surface score-panel">
                    <div class="section-heading-row compact-row">
                        <h2>Undanger Meter Score</h2>
                        <span class="eyebrow-pill subtle-pill">Live</span>
                    </div>
                    <div class="score-ring-wrap">
                        <div class="score-ring">
                            <span>${getProgressPercent()}%</span>
                        </div>
                        <div class="score-copy">
                            <p>Each correct response raises your readiness for the next scene.</p>
                            <strong>${state.score} safe points banked</strong>
                        </div>
                    </div>
                </article>

                <article class="card-surface mission-preview-card">
                    <div class="section-heading-row compact-row">
                        <h2>Mission preview</h2>
                        <span class="eyebrow-pill subtle-pill">Next up</span>
                    </div>
                    <div class="hero-metrics mission-preview-meta">
                        <div class="metric-chip">
                            <small>Run progress</small>
                            <strong>${meta.progress}%</strong>
                        </div>
                        <div class="metric-chip">
                            <small>Active chapter</small>
                            <strong>${meta.currentStep.chapter}</strong>
                        </div>
                    </div>
                    <h3>${meta.currentStep.chapterTitle}</h3>
                    <p>${meta.currentStep.story}</p>
                    <button type="button" class="secondary-button" data-action="launch-chapter" data-chapter="${meta.currentStep.chapter}">Open focus chapter</button>
                </article>
            </section>
        </section>
    `;
}

function getChapterSummaries() {
    const grouped = quizSteps.reduce((collection, step) => {
        if (!collection[step.chapter]) {
            collection[step.chapter] = {
                name: step.chapter,
                title: step.chapterTitle,
                total: 0,
                correct: 0,
                answered: 0,
                sceneTheme: step.sceneTheme
            };
        }

        collection[step.chapter].total += 1;
        const result = state.answerHistory[step.id];

        if (result) {
            collection[step.chapter].answered += 1;
            if (result.correct) {
                collection[step.chapter].correct += 1;
            }
        }

        return collection;
    }, {});

    return Object.values(grouped).map((chapter) => {
        let status = "Locked";

        if (chapter.answered === 0) {
            status = "Ready";
        } else if (chapter.correct === chapter.total) {
            status = "Mastered";
        } else if (chapter.correct > 0) {
            status = "In progress";
        } else {
            status = "Retry";
        }

        return {
            ...chapter,
            status,
            completionLabel: `${chapter.correct}/${chapter.total} safe calls`
        };
    });
}

function renderMissionBoard() {
    const chapters = getChapterSummaries();

    return `
        <section class="screen-stack mission-screen">
            <section class="card-surface banner-card">
                <span class="eyebrow-pill">Route overview</span>
                <h1>Mission board</h1>
                <p>Every move counts.</p>
            </section>

            <section class="chapter-list">
                ${chapters.map((chapter) => `
                    <article class="card-surface chapter-card theme-${chapter.sceneTheme}">
                        <div class="chapter-card-head">
                            <div>
                                <small>${chapter.name}</small>
                                <h2>${chapter.title}</h2>
                            </div>
                            <span class="status-tag">${chapter.status}</span>
                        </div>
                        <p>${chapter.completionLabel}</p>
                        <div class="chapter-progress-track">
                            <span style="width:${Math.round((chapter.correct / chapter.total) * 100)}%"></span>
                        </div>
                        <button type="button" class="secondary-button" data-action="launch-chapter" data-chapter="${chapter.name}">
                            Launch ${chapter.name}
                        </button>
                    </article>
                `).join("")}
            </section>
        </section>
    `;
}

function renderProfile() {
    const chapters = getChapterSummaries();
    const answeredTotal = Object.keys(state.answerHistory).length;
    const completionRate = answeredTotal === 0 ? 0 : Math.round((state.score / answeredTotal) * 100);
    const activePet = getPetCompanionForStep(getCurrentStep());

    return `
        <section class="screen-stack profile-screen">
            <section class="card-surface profile-hero">
                <span class="eyebrow-pill">Learner profile</span>
                <h1>Profile</h1>
                <p>Track how your hazard instincts are improving across every chapter.</p>
                <div class="hero-metrics profile-metrics">
                    <div class="metric-chip">
                        <small>Current streak</small>
                        <strong>${state.streak}</strong>
                    </div>
                    <div class="metric-chip">
                        <small>Safe score</small>
                        <strong>${state.score}</strong>
                    </div>
                    <div class="metric-chip">
                        <small>Readiness</small>
                        <strong>${completionRate}%</strong>
                    </div>
                </div>
            </section>

            <section class="card-surface progress-card">
                <div class="section-heading-row compact-row">
                    <h2>My progress</h2>
                    <span class="eyebrow-pill subtle-pill">Overview</span>
                </div>
                <div class="progress-grid">
                    ${chapters.map((chapter) => `
                        <article class="mini-panel compact-panel">
                            <small>${chapter.name}</small>
                            <strong>${chapter.status}</strong>
                            <p>${chapter.completionLabel}</p>
                        </article>
                    `).join("")}
                </div>
            </section>

            <section class="card-surface achievement-card">
                <div class="section-heading-row compact-row">
                    <h2>Achievement lineup</h2>
                    <span class="eyebrow-pill subtle-pill">Earned offline</span>
                </div>
                <div class="progress-grid">
                    ${profileBadges.map((badge, index) => `
                        <article class="mini-panel compact-panel ${index < Math.max(1, state.score) ? "earned-panel" : ""}">
                            <strong>${badge.title}</strong>
                            <p>${badge.copy}</p>
                        </article>
                    `).join("")}
                </div>
            </section>

            <section class="card-surface achievement-card pet-roster-panel">
                <div class="section-heading-row compact-row">
                    <h2>Pet guide crew</h2>
                    <span class="eyebrow-pill subtle-pill">${activePet?.name ?? "Guide roster"}</span>
                </div>
                <div class="pet-roster-grid">
                    ${renderPetRoster(activePet?.id)}
                </div>
            </section>
        </section>
    `;
}

function renderOptions(step) {
    const layout = getChoiceLayout(step);

    return step.options.map((option, index) => {
        const isSelected = state.selected.has(option.id);
        const feedback = state.answered ? getFeedback(step) : null;
        const shouldRevealCorrect = state.answered && option.correct;
        const selectedWrong = state.answered && isSelected && !option.correct && !feedback.isCorrect;
        const classes = ["option-card", `option-card-${layout}`];
        const singleChoiceBadge = String.fromCharCode(65 + index);
        const display = splitOptionLabel(option.label);
        const visual = getOptionVisual(step, option, index);
        const badgeText = step.selectionMode === "multi"
            ? (display.kicker || String(index + 1))
            : (layout === "visual" ? (display.kicker || singleChoiceBadge) : singleChoiceBadge);

        if (isSelected) {
            classes.push("is-selected");
        }
        if (shouldRevealCorrect) {
            classes.push("is-correct");
        }
        if (selectedWrong) {
            classes.push("is-incorrect");
        }

        const action = step.selectionMode === "multi" ? "toggle-option" : "pick-option";

        return `
            <button
                type="button"
                class="${classes.join(" ")}"
                data-action="${action}"
                data-option="${option.id}"
                aria-pressed="${isSelected ? "true" : "false"}"
                ${state.answered ? "disabled" : ""}
            >
                ${layout === "visual" ? `
                    <span class="option-visual-top">
                        <span class="option-art option-art-${visual.tone}"><span class="option-art-glyph">${visual.glyph}</span></span>
                        ${(shouldRevealCorrect || selectedWrong) ? `<span class="option-state-mark">${shouldRevealCorrect ? "✓" : "✕"}</span>` : ""}
                    </span>
                    <span class="option-visual-copy">
                        <strong>${visual.title}</strong>
                        <small>${visual.caption}</small>
                        <span class="option-detail">${visual.detail || display.main}</span>
                    </span>
                ` : layout === "grid" ? `
                    <span class="option-grid-top">
                        <span class="option-art option-art-${visual.tone}"><span class="option-art-glyph">${isSelected || shouldRevealCorrect ? "✓" : visual.glyph}</span></span>
                        ${(isSelected && !state.answered) ? `<span class="option-grid-tag">Selected</span>` : ""}
                    </span>
                    <span class="option-grid-copy">
                        <strong>${visual.title}</strong>
                        <small>${visual.caption}</small>
                        <span class="option-detail">${visual.detail || display.main || option.label}</span>
                    </span>
                ` : `
                    <span class="option-badge ${step.selectionMode === "multi" ? "option-badge-check" : "option-badge-letter"}">${badgeText}</span>
                    <span class="option-label">${option.label}</span>
                `}
            </button>
        `;
    }).join("");
}

function renderQuiz() {
    const step = getCurrentStep();
    const feedback = state.answered ? getFeedback(step) : null;
    const petGuide = getPetGuideState(step, feedback);
    const multiSelectSummary = getMultiSelectSummary(step);
    const layout = getChoiceLayout(step);
    const requiredSelections = getCorrectOptionIds(step).length;
    const badge = getSceneBadge(step, feedback);

    return `
        <section class="screen-stack quiz-screen quiz-screen-clean quiz-layout-${layout}">
            <section class="mission-controls-row mission-controls-clean">
                <button type="button" class="ghost-button mission-back-button" data-action="open-mission-screen">Back</button>
                <div class="scene-counter-chip">
                    <small>Question</small>
                    <strong>${getRunPositionLabel()}</strong>
                </div>
            </section>

            <section class="mission-level-shell card-surface mission-tone-${step.sceneTheme}">
                <section class="mission-stage-card">
                    <div class="mission-stage-image-wrap">
                        <img src="${step.image}" alt="${step.chapterTitle}" class="mission-stage-image" />

                        <div class="mission-stage-overlay mission-stage-toprow">
                            <div class="mission-stage-chapter-block">
                                <span class="mission-stage-crest" aria-hidden="true"><img src="assets/logo-eye.svg" alt="" /></span>
                                <div class="mission-stage-heading">
                                    <span class="mission-stage-chapter quiz-chapter-label">${step.chapter}</span>
                                    <strong>${step.title}</strong>
                                </div>
                            </div>

                            <aside class="mission-stage-badge badge-tone-${badge.tone}">
                                <span class="mission-stage-badge-icon" aria-hidden="true">${badge.icon}</span>
                                <div class="mission-stage-badge-copy">
                                    <strong>${badge.title}</strong>
                                    ${badge.delta ? `<span>${badge.delta}</span>` : ""}
                                    <small>${badge.copy}</small>
                                </div>
                            </aside>
                        </div>

                        ${step.speechBubble ? `
                            <div class="mission-stage-overlay mission-stage-speech-wrap">
                                <div class="mission-speech-bubble mission-stage-speech">${step.speechBubble}</div>
                            </div>
                        ` : ""}

                        <div class="mission-stage-overlay mission-stage-footer">
                            <p>${step.chapterTitle}</p>
                        </div>
                    </div>
                </section>

                <section class="mission-scene-details story-card">
                    <div class="mission-scene-details-copy">
                        <p>${step.story}</p>
                    </div>
                </section>

                <section class="mission-guide-panel guide-panel">
                    <div class="guide-copy">
                        <span class="eyebrow-pill subtle-pill">${petGuide.eyebrow}</span>
                        <h2>${petGuide.heading}</h2>
                        <p>${petGuide.copy}</p>
                    </div>
                    <div class="guide-visual-wrap guide-visual-compact">
                        <img src="assets/pet-guide.svg" alt="" aria-hidden="true" />
                        <img src="${petGuide.pet.image}" alt="${petGuide.pet.name}" class="guide-mascot" onerror="this.onerror=null;this.src='assets/pet-guide.svg';" />
                        <span class="guide-nameplate">${petGuide.pet.name} · ${petGuide.pet.role}</span>
                    </div>
                </section>

                <section class="mission-question-card quiz-card mission-quiz-panel mission-quiz-panel-${layout}">
                    <div class="mission-quiz-heading">
                        <div class="mission-quiz-copy">
                            <p class="mission-quiz-kicker">Quiz (${step.answerModeLabel})</p>
                            <h2>${step.question}</h2>
                        </div>
                        <div class="mission-quiz-timer" aria-hidden="true">
                            <img src="assets/icon-timer.svg" alt="" />
                        </div>
                    </div>

                    ${step.selectionMode === "multi" ? `
                        <div class="quiz-selection-bar mission-selection-bar ${state.selected.size > 0 ? "is-active" : ""} ${state.selected.size === requiredSelections ? "is-complete" : ""}">
                            <strong>${multiSelectSummary}</strong>
                            <span>Choose ${requiredSelections} safe ${requiredSelections === 1 ? "answer" : "answers"}.</span>
                        </div>
                    ` : ""}

                    <div class="option-list option-list-${layout}">${renderOptions(step)}</div>
                    ${step.selectionMode === "multi" && !state.answered ? `
                        <button type="button" class="primary-button wide-button ${state.selected.size > 0 ? "is-ready" : ""}" data-action="submit-multi" ${state.selected.size === 0 ? "disabled" : ""}>${getMultiSelectSubmitLabel()}</button>
                    ` : ""}
                    ${feedback ? `
                        <div class="feedback-panel ${feedback.isCorrect ? "feedback-good" : "feedback-warning"}">
                            <strong>${feedback.title}</strong>
                            <p>${feedback.copy}</p>
                            <button type="button" class="primary-button wide-button" data-action="next-step">
                                ${state.currentIndex === quizSteps.length - 1 ? "View results" : "Next question"}
                            </button>
                        </div>
                    ` : ""}
                </section>
            </section>
        </section>
    `;
}

function getRecommendationCopy() {
    return getMissionOutcome().recommendation;
}

function renderResults() {
    const chapters = getChapterSummaries();
    const outcome = getMissionOutcome();

    return `
        <section class="screen-stack result-screen result-screen-${outcome.status}">
            <section class="card-surface result-hero result-hero-${outcome.status}">
                <div class="result-state-head">
                    <span class="eyebrow-pill result-state-pill">${outcome.eyebrow}</span>
                    <span class="result-state-icon" aria-hidden="true">${outcome.icon}</span>
                </div>
                <h1>Results</h1>
                <h2 class="result-state-heading">${outcome.heading}</h2>
                <p>${outcome.summary}</p>
                <div class="result-state-grid">
                    <article class="mini-panel result-state-panel">
                        <small>Final score</small>
                        <strong>${outcome.score}/${outcome.total}</strong>
                        <p>${outcome.percent}% safe calls</p>
                    </article>
                    <article class="mini-panel result-state-panel">
                        <small>Chapter clear</small>
                        <strong>${outcome.chaptersCleared}/${outcome.chapterCount}</strong>
                        <p>${outcome.chaptersCleared === outcome.chapterCount ? "All chapters cleared" : "Not every chapter was cleared"}</p>
                    </article>
                </div>
                <p class="result-state-copy">${getRecommendationCopy()}</p>
                <div class="hero-actions">
                    <button type="button" class="primary-button" data-action="${outcome.primaryAction.action}">${outcome.primaryAction.label}</button>
                    <button type="button" class="secondary-button" data-action="${outcome.secondaryAction.action}">${outcome.secondaryAction.label}</button>
                </div>
            </section>

            <section class="card-surface recap-card">
                <div class="section-heading-row compact-row">
                    <h2>Chapter recap</h2>
                    <span class="eyebrow-pill subtle-pill">${outcome.isComplete ? "Safe-call map" : "Retry map"}</span>
                </div>
                <div class="recap-grid">
                    ${chapters.map((chapter) => `
                        <article class="mini-panel compact-panel recap-panel">
                            <div class="compact-row recap-panel-head">
                                <small>${chapter.name}</small>
                                <span class="status-tag">${chapter.status}</span>
                            </div>
                            <strong>${chapter.title}</strong>
                            <p>${chapter.completionLabel}</p>
                        </article>
                    `).join("")}
                </div>
            </section>
        </section>
    `;
}

function renderSettingsPage() {
    const meta = getSavedProgressMeta();
    const snapshot = getStatusSnapshot();

    return `
        <section class="screen-stack settings-screen">
            <section class="card-surface settings-hero">
                <div class="section-heading-row compact-row settings-hero-top">
                    <span class="eyebrow-pill">Offline utility panel</span>
                    <span class="eyebrow-pill subtle-pill">Full access</span>
                </div>
                <h1>Settings</h1>
                <p>Manage saved progress, onboarding, and quick route shortcuts without leaving the Hazeyelert shell.</p>
            </section>

            <section class="settings-summary-strip">
                <article class="card-surface settings-summary-card mini-panel compact-panel">
                    <small>Local save</small>
                    <strong>${meta.hasSavedProgress ? "Armed" : "Idle"}</strong>
                    <p>${meta.hasSavedProgress ? meta.helper : "No mission progress stored yet on this device."}</p>
                </article>
                <article class="card-surface settings-summary-card mini-panel compact-panel">
                    <small>Readiness sync</small>
                    <strong>${getProgressPercent(snapshot)}%</strong>
                    <p>${snapshot.completedRun ? "Latest mission recap is ready to review." : "Progress updates stay available offline."}</p>
                </article>
            </section>

            <section class="settings-grid">
                <article class="card-surface mini-panel compact-panel">
                    <strong>Interaction sounds</strong>
                    <p>Play sound effects when you tap buttons, move between screens, and answer hazard prompts.</p>
                    <button type="button" class="secondary-button" data-action="toggle-sound">${state.soundEnabled ? "Mute sound effects" : "Enable sound effects"}</button>
                </article>
                <article class="card-surface mini-panel compact-panel">
                    <strong>Replay onboarding</strong>
                    <p>Bring back the intro screen and restart the guided dashboard entry.</p>
                    <button type="button" class="secondary-button" data-action="replay-intro">Replay intro</button>
                </article>
                <article class="card-surface mini-panel compact-panel">
                    <strong>Open mission route</strong>
                    <p>Jump straight to the chapter board and pick the next hazard lane to review.</p>
                    <button type="button" class="secondary-button" data-action="open-mission-screen">Open mission board</button>
                </article>
                <article class="card-surface mini-panel compact-panel">
                    <strong>Reset mission data</strong>
                    <p>Clear local progress, scores, and chapter history from this device.</p>
                    <button type="button" class="secondary-button danger-button" data-action="clear-progress">Clear local progress</button>
                </article>
            </section>
        </section>
    `;
}

function updateChrome() {
    const viewMeta = getHeaderViewMeta();

    headerContextKicker.textContent = viewMeta.kicker;

    const hideChrome = ["intro", "quiz", "result"].includes(state.currentView);
    shell.classList.toggle("immersive-view", hideChrome);
    shell.dataset.view = hideChrome ? "immersive" : state.currentView;

    navButtons.forEach((button) => {
        const view = button.dataset.nav;
        button.classList.toggle("is-active", (!hideChrome && state.currentView === view) || (view === "home" && state.currentView === "intro"));
    });
}

function render(options = {}) {
    let markup = "";

    const previousView = lastRenderedView;
    const previousQuizIndex = lastRenderedQuizIndex;

    if (state.currentView === "intro") {
        markup = renderIntro();
    } else if (state.currentView === "home") {
        markup = renderHome();
    } else if (state.currentView === "mission") {
        markup = renderMissionBoard();
    } else if (state.currentView === "profile") {
        markup = renderProfile();
    } else if (state.currentView === "settings") {
        markup = renderSettingsPage();
    } else if (state.currentView === "quiz") {
        markup = renderQuiz();
    } else if (state.currentView === "result") {
        markup = renderResults();
    }

    mainContent.innerHTML = markup;
    updateChrome();

    const isQuizView = state.currentView === "quiz";
    const quizStepChanged = isQuizView && previousQuizIndex !== null && previousQuizIndex !== state.currentIndex;
    const viewChanged = previousView !== null && previousView !== state.currentView;
    const isFirstRender = previousView === null;
    const shouldTreatAsTransition = options.forceTransition === true || isFirstRender || viewChanged || quizStepChanged;
    const shouldAnimateEntrance = options.animateEntrance ?? shouldTreatAsTransition;
    const shouldScrollToTop = options.scrollToTop ?? shouldTreatAsTransition;

    if (shouldAnimateEntrance) {
        animateViewEntrance();
    }

    if (shouldScrollToTop) {
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    }

    lastRenderedView = state.currentView;
    lastRenderedQuizIndex = isQuizView ? state.currentIndex : null;
}

function handleAction(actionTarget) {
    const action = actionTarget.dataset.action;

    if (action === "toggle-sound") {
        toggleSoundEffects();
        return;
    }

    playActionSound(action);

    switch (action) {
        case "enter-dashboard":
            enterDashboard();
            break;
        case "continue-mission":
            continueMission();
            break;
        case "restart-quiz":
            restartQuiz();
            break;
        case "launch-chapter":
            launchChapter(actionTarget.dataset.chapter);
            break;
        case "open-mission-screen":
            openMissionScreen();
            break;
        case "go-profile":
            goProfile();
            break;
        case "open-settings":
            openSettings();
            break;
        case "toggle-sound":
            break;
        case "clear-progress":
            clearMissionProgress();
            break;
        case "replay-intro":
            replayIntro();
            break;
        case "pick-option":
            if (!state.answered) {
                handleSingleSelect(actionTarget.dataset.option);
            }
            break;
        case "toggle-option":
            if (!state.answered) {
                toggleMultiSelect(actionTarget.dataset.option);
            }
            break;
        case "submit-multi":
            submitMultiSelect();
            break;
        case "next-step":
            goNext();
            break;
        case "go-home":
            goHome();
            break;
        default:
            break;
    }
}

function handleNav(target) {
    const view = target.dataset.nav;

    playSoundEffect("nav");

    if (view === "settings") {
        openSettings();
        return;
    }

    if (view === "mission") {
        openMissionScreen();
        return;
    }

    if (view === "profile") {
        goProfile();
        return;
    }

    goHome();
}

document.addEventListener("click", (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
        handleAction(actionTarget);
        return;
    }

    const navTarget = event.target.closest("[data-nav]");
    if (navTarget) {
        handleNav(navTarget);
        return;
    }

});

hydrateState();
bindSoundAutoplayUnlock();
render();
window.requestAnimationFrame(() => {
    hideStartupSplash();
});
