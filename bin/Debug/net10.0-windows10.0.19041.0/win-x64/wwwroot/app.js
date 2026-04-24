const quizSteps = [
    {
        id: "spill-1",
        chapter: "Chapter 1",
        chapterTitle: "Hallway slip zone",
        title: "A hallway spill is spreading near the classroom entrance.",
        question: "What should you do first when you notice the wet floor?",
        story: "Students are still walking toward the puddle, so the safest move is the one that prevents more people from stepping into danger.",
        guide: "Protect people first, then help an adult secure the area.",
        sceneTheme: "spill",
        image: "assets/scene-spill.svg",
        options: [
            { id: "report-spill", label: "Warn nearby classmates and report the spill to a teacher.", correct: true },
            { id: "jump-over", label: "Jump over the puddle and keep going.", correct: false },
            { id: "slide-check", label: "Test the floor with your shoe to see how slippery it is.", correct: false }
        ]
    },
    {
        id: "wire-1",
        chapter: "Chapter 2",
        chapterTitle: "Electrical caution",
        title: "A damaged wire is hanging from a computer cart.",
        question: "What is the safest response?",
        story: "Loose electrical equipment can shock anyone who touches it, especially if students crowd around to inspect it.",
        guide: "Keep others back and let a responsible adult handle electrical hazards.",
        sceneTheme: "wire",
        image: "assets/scene-electrical.svg",
        options: [
            { id: "alert-teacher", label: "Move away and alert a teacher immediately.", correct: true },
            { id: "plug-out", label: "Pull the plug out yourself as fast as possible.", correct: false },
            { id: "cover-wire", label: "Wrap the damaged part in paper and finish class.", correct: false }
        ]
    },
    {
        id: "wire-2",
        chapter: "Chapter 2",
        chapterTitle: "Electrical caution",
        title: "You need to wash your hands before touching a plugged-in appliance.",
        question: "Which choice keeps you safe around electricity?",
        story: "Electricity and moisture are a rough duo. Even a quick shortcut can become a dangerous one.",
        guide: "Dry hands completely before touching switches, plugs, or appliances.",
        sceneTheme: "wire",
        image: "assets/scene-electrical.svg",
        options: [
            { id: "wet-hands", label: "Dry your hands completely before touching the appliance.", correct: true },
            { id: "wipe-on-shirt", label: "Wipe your hands on your shirt and hope for the best.", correct: false },
            { id: "tap-fast", label: "Touch the switch quickly so it will be over sooner.", correct: false }
        ]
    },
    {
        id: "fire-1",
        chapter: "Chapter 3",
        chapterTitle: "Fire exit protocol",
        title: "The fire alarm sounds and the hallway starts filling with smoke.",
        question: "Which actions belong in the evacuation plan?",
        story: "Fire response is a sequence, not a freestyle routine. The safest steps are the calm, practiced ones.",
        guide: "Choose every safe evacuation action before moving to the next scene.",
        sceneTheme: "fire",
        image: "assets/scene-fire.svg",
        selectionMode: "multi",
        options: [
            { id: "alarm", label: "Respond to the alarm and begin evacuation right away.", correct: true },
            { id: "exit", label: "Use the nearest safe exit with your group.", correct: true },
            { id: "hide", label: "Hide in a storage room until the noise stops.", correct: false },
            { id: "grab-bag", label: "Run back for your bag before leaving.", correct: false }
        ]
    },
    {
        id: "fire-2",
        chapter: "Chapter 3",
        chapterTitle: "Fire exit protocol",
        title: "Smoke is getting thicker on the way out.",
        question: "How should you move through the smoky area?",
        story: "Air is clearer lower to the ground, which makes your escape path safer and easier to follow.",
        guide: "Stay calm, stay with your group, and keep breathing space low.",
        sceneTheme: "fire",
        image: "assets/scene-fire.svg",
        options: [
            { id: "stay-low", label: "Stay low and move quickly to the exit.", correct: true },
            { id: "run-fast", label: "Stand tall and sprint wherever the crowd goes.", correct: false },
            { id: "open-door", label: "Open every door to search for a shortcut.", correct: false }
        ]
    },
    {
        id: "noise-1",
        chapter: "Chapter 4",
        chapterTitle: "Noise and hearing safety",
        title: "The workshop machines are louder than usual.",
        question: "Which protection should be used before entering?",
        story: "Loud environments can damage hearing over time, even when the activity feels normal or familiar.",
        guide: "Use the right protective gear before stepping into high-noise areas.",
        sceneTheme: "noise",
        image: "assets/scene-noise.svg",
        options: [
            { id: "hearing-protection", label: "Wear hearing protection before entering the workshop.", correct: true },
            { id: "cover-ears", label: "Use your hands for a few seconds and continue.", correct: false },
            { id: "speak-louder", label: "Shout instructions so everyone can hear.", correct: false }
        ]
    }
];

const categories = [
    {
        title: "Slip response",
        copy: "Spot wet zones, secure walkways, and escalate fast.",
        icon: "assets/icon-water.svg"
    },
    {
        title: "Electrical safety",
        copy: "Avoid damaged equipment and dry up before contact.",
        icon: "assets/icon-wire.svg"
    },
    {
        title: "Emergency exit",
        copy: "Follow the alarm, keep low, and move with purpose.",
        icon: "assets/icon-alert.svg"
    },
    {
        title: "Noise control",
        copy: "Protect hearing before stepping into loud rooms.",
        icon: "assets/icon-alarm.svg"
    }
];

const introHighlights = [
    "Spot the danger before it spots your routine.",
    "Train with quick hazard scenes built for school spaces.",
    "Keep every response offline, fast, and classroom friendly."
];

const profileBadges = [
    {
        title: "Floor scout",
        copy: "You react quickly to slips and blocked paths."
    },
    {
        title: "Circuit shield",
        copy: "You know when to stop and call for help around wires."
    },
    {
        title: "Exit guide",
        copy: "You stay calm and choose safer evacuation moves."
    },
    {
        title: "Sound guard",
        copy: "You protect your hearing before the noise begins."
    }
];

const compassIconMarkup = `
    <svg class="helper-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.25" stroke="currentColor" stroke-width="1.8"/>
        <path d="m14.9 9.1-1.58 4.24-4.22 1.56 1.58-4.22 4.22-1.58Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <circle cx="12" cy="12" r="1.05" fill="currentColor" stroke="currentColor" stroke-width="0.4"/>
    </svg>
`;

const STORAGE_KEY = "hazeyelert-shell-state-v2";
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
            helper: "Run the full safety mission from the first hallway alert.",
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
        helper: `Continue from ${currentStep.chapterTitle.toLowerCase()} and finish the route.`,
        currentStep,
        progress: getProgressPercent(snapshot),
        hasSavedProgress: true,
        completedRun: false
    };
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

function getFeedback(step) {
    const correctIds = getCorrectOptionIds(step);
    const selectedIds = [...state.selected];
    const isCorrect = step.selectionMode === "multi"
        ? selectedIds.length === correctIds.length && selectedIds.every((id) => correctIds.includes(id))
        : selectedIds.length === 1 && correctIds.includes(selectedIds[0]);

    const correctLabels = step.options
        .filter((option) => option.correct)
        .map((option) => option.label)
        .join(step.selectionMode === "multi" ? " and " : "");

    return {
        isCorrect,
        title: isCorrect ? "Correct answer" : "Safer response",
        copy: isCorrect
            ? `Nice work. ${correctLabels}`
            : `The safer move is: ${correctLabels}`
    };
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
        playSoundEffect("success");
    }

    syncStoredProgress();
    render();
}

function startQuiz(startIndex = 0) {
    const safeStartIndex = clampStepIndex(startIndex, 0);

    resetMissionState();
    state.runStartIndex = safeStartIndex;
    state.currentIndex = safeStartIndex;
    state.currentView = "quiz";
    syncStoredProgress();
    render();
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
    startQuiz(0);
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
    resetMissionState();
    state.currentView = "settings";
    syncStoredProgress();
    render();
}

function replayIntro() {
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
    const startIndex = quizSteps.findIndex((step) => step.chapter === chapter);
    startQuiz(startIndex < 0 ? 0 : startIndex);
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
                    <span class="eyebrow-pill">Today’s focus route</span>
                    <h1>Hazeyelert</h1>
                    <p>${meta.helper}</p>
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

    return `
        <section class="screen-stack profile-screen">
            <section class="card-surface profile-hero">
                <span class="eyebrow-pill">Learner profile</span>
                <h1>Profile</h1>
                <p>Track how your hazard instincts are improving across every chapter.</p>
                <div class="hero-metrics profile-metrics">
                    <div class="metric-chip">
                        <small>Best streak</small>
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
        </section>
    `;
}

function renderOptions(step) {
    return step.options.map((option) => {
        const isSelected = state.selected.has(option.id);
        const feedback = state.answered ? getFeedback(step) : null;
        const shouldRevealCorrect = state.answered && option.correct;
        const selectedWrong = state.answered && isSelected && !option.correct && !feedback.isCorrect;
        const classes = ["option-card"];

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
                ${state.answered ? "disabled" : ""}
            >
                <span class="option-badge">${step.selectionMode === "multi" ? (isSelected ? "✓" : "+") : "→"}</span>
                <span class="option-label">${option.label}</span>
            </button>
        `;
    }).join("");
}

function renderQuiz() {
    const step = getCurrentStep();
    const feedback = state.answered ? getFeedback(step) : null;

    return `
        <section class="screen-stack quiz-screen">
            <section class="quiz-topbar">
                <button type="button" class="ghost-button" data-action="open-mission-screen">Back</button>
                <div class="quiz-topbar-copy">
                    <div class="quiz-chapter-label">${step.chapter}</div>
                    <h1>${step.chapterTitle}</h1>
                </div>
                <div class="metric-chip compact-chip">
                    <small>Scene</small>
                    <strong>${getRunPositionLabel()}</strong>
                </div>
            </section>

            <section class="scene-hero card-surface theme-${step.sceneTheme}">
                <div class="scene-copy">
                    <span class="eyebrow-pill subtle-pill">Scenario</span>
                    <h2>${step.title}</h2>
                    <p>${step.story}</p>
                </div>
                <div class="scene-visual">
                    <img src="${step.image}" alt="${step.chapterTitle}" />
                </div>
            </section>

            <section class="story-card card-surface">
                <div class="section-heading-row compact-row">
                    <h2>Read the scene</h2>
                    <span class="eyebrow-pill subtle-pill">Observe first</span>
                </div>
                <p>${step.story}</p>
            </section>

            <section class="quiz-card card-surface">
                <div class="section-heading-row compact-row">
                    <h2>${step.question}</h2>
                    <span class="eyebrow-pill subtle-pill">${step.selectionMode === "multi" ? "Choose all that apply" : "Choose one"}</span>
                </div>
                <div class="option-list">${renderOptions(step)}</div>
                ${step.selectionMode === "multi" && !state.answered ? `
                    <button type="button" class="primary-button wide-button" data-action="submit-multi" ${state.selected.size === 0 ? "disabled" : ""}>Submit choices</button>
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

            <section class="guide-panel card-surface">
                <div class="guide-copy">
                    <span class="eyebrow-pill subtle-pill">Guide note</span>
                    <h2>Pet-eye prompt</h2>
                    <p>${step.guide}</p>
                </div>
                <img src="assets/pet-guide.svg" alt="Mascot guide" class="guide-mascot" />
            </section>
        </section>
    `;
}

function getRecommendationCopy() {
    const total = getRunTotal();
    const percent = Math.round((state.score / total) * 100);

    if (percent === 100) {
        return "You handled every scene with the safest move. That is a full clear — no dramatic music needed, but deserved.";
    }

    if (percent >= 67) {
        return "Solid instincts. Review the missed scenes once more and your response timing will get even sharper.";
    }

    return "You’ve got a useful baseline now. Replay the mission and focus on the first action that protects people around you.";
}

function renderResults() {
    const chapters = getChapterSummaries();

    return `
        <section class="screen-stack result-screen">
            <section class="card-surface result-hero">
                <span class="eyebrow-pill">Mission recap</span>
                <h1>Results</h1>
                <div class="result-score-row">
                    <div>
                        <small>Final score</small>
                        <strong>${state.score}/${getRunTotal()}</strong>
                    </div>
                    <div>
                        <small>Streak finish</small>
                        <strong>${state.streak}</strong>
                    </div>
                </div>
                <p>${getRecommendationCopy()}</p>
                <div class="hero-actions">
                    <button type="button" class="primary-button" data-action="restart-quiz">Restart mission</button>
                    <button type="button" class="secondary-button" data-action="go-home">Back home</button>
                </div>
            </section>

            <section class="card-surface recap-card">
                <div class="section-heading-row compact-row">
                    <h2>Chapter recap</h2>
                    <span class="eyebrow-pill subtle-pill">Performance map</span>
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

            <section class="card-surface settings-helper-card">
                <div class="modal-helper-note settings-helper-note">
                    <span class="helper-note-icon" aria-hidden="true">${compassIconMarkup}</span>
                    <div>
                        <strong>Hazeyelert shell controls</strong>
                        <p>Quick access to saves, sound, onboarding, and chapter routing for your offline safety mission.</p>
                    </div>
                </div>
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

function render() {
    let markup = "";

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

    animateViewEntrance();

    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
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
