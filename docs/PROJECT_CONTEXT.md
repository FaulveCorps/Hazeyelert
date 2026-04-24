# PROJECT CONTEXT: Physical Hazards Quiz App

## Overview
This project is a small, offline mobile quiz application built using .NET MAUI. It is designed for Senior High School students and focuses on teaching physical hazards and proper safety responses through short interactive scenarios.

The app is structured as a guided learning experience, combining storytelling with multiple-choice questions. It is not a complex game, but a simple, functional educational tool that is easy to use and present.

## Scope Constraints
- Total budget and time are limited (₱4,000 project, 8-day deadline)
- The app must remain simple and achievable
- Only existing project resources should be used
- The app must work fully offline
- Avoid overengineering or complex systems

## Content Scope
- 3 to 5 chapters only
- 1 to 2 questions per chapter
- Total of approximately 5 to 8 questions

Each chapter includes:
- A scenario involving a physical hazard
- A short narrative description
- One related multiple-choice question

## Core App Flow
1. **Start Screen**
   - Displays title and start button

2. **Chapter / Quiz Screen (Main Screen)**
   - Chapter title
   - Illustration
   - Story text
   - One question
   - 3–4 answer choices

3. **Answer Feedback**
   - Immediate correct or incorrect result
   - Visual feedback (button color or message)
   - Guide (pet) message updates
   - “Next” button appears

4. **Progression**
   - Moves linearly (no branching)
   - Tracks score internally

5. **Result Screen**
   - Displays final score
   - Simple completion message
   - Option to restart

## Pet / Guide System (Simplified)
The app includes a “pet” or guide character, implemented in a minimal way.

Behavior:
- A single static character image is displayed
- A text message changes based on context

States:
- Before answering: gives a hint or guidance
- Correct answer: gives positive reinforcement and explanation
- Incorrect answer: explains the correct reasoning

No animations, no multiple characters, no complex logic.

## UI Design Principles
- Mobile-first layout
- Large, tap-friendly buttons
- Readable text at all times
- Simple and clean structure
- Minimal transitions
- Use provided images and assets

## Reference Images (Design Guidance)
Multiple reference images are included in the project folder to guide layout, structure, and visual design.

These images represent the expected UI and user experience of the app.

### Instructions for Copilot
- Always inspect and use the provided images before designing UI
- Match layout structure as closely as practical
- Prioritize visual similarity over creative redesign
- Use the same placement for:
  - Chapter title
  - Illustration area
  - Story text
  - Question card
  - Answer buttons
  - Guide/pet section

### Important Notes
- Do **not** ignore the reference images
- Do **not** redesign the layout unless necessary due to technical constraints
- If an exact match is not possible, approximate the structure while preserving usability

### Asset Usage
- Use all available images, icons, and illustrations from the project folder
- If specific UI elements are shown in the references, replicate them using appropriate components
- If an image is missing, use a placeholder and leave a TODO note in the implementation layer

### Goal
The final UI should clearly resemble the provided reference images.

## Visual Reference Breakdown
The provided screenshots are not just loose inspiration. They define the target visual direction for the app. Future implementation work should use them as the primary reference for spacing, section order, emphasis, and overall composition.

### Global Visual Style
- Portrait mobile layout
- Strong top-to-bottom stacked composition
- Full-screen illustrated background or scene image for each chapter
- Large chapter title placed near the top-left
- Status or badge panel placed near the top-right
- Big rounded gray text panels for story and quiz content
- Bright yellow used as the main accent color for headings, highlights, and primary actions
- Dark background behind cards or dashboard areas to make bright elements stand out
- Oversized, readable typography preferred over dense layouts
- Playful educational tone rather than a formal corporate style

### Shared Chapter Screen Structure
Each chapter screen should follow this approximate vertical order:

1. Top-left app or chapter marker area
  - Eye/logo icon appears near the chapter title
  - Chapter label is large and highly visible

2. Top-right feedback or badge area
  - Rounded rectangular panel
  - Contains a badge title, badge count, and a short explanatory line
  - Color varies by context, such as yellow for positive feedback and red for negative feedback

3. Main illustration area
  - Occupies the upper half of the screen
  - Uses a dramatic scene image showing the hazard scenario
  - Character and environment should be the visual focus

4. Story text panel
  - Large rounded gray card spanning most of the width
  - Sits directly below the illustration
  - Contains a narrative paragraph explaining the scene and stakes
  - Text is large, dark, and easy to read

5. Quiz interaction panel
  - Another rounded gray card below the story panel
  - Contains the question prompt and interactive answer area
  - Includes a small timer or stopwatch icon near the right side in some references

### Chapter 1 Reference Notes
The Chapter 1 image shows the cleanest example of the core quiz layout and should be treated as the baseline chapter template.

- White or very light room background with a single door for a minimal hazard setup
- Character illustration positioned left-of-center and overlapping the scene area
- Chapter label at the top-left using bold yellow text
- Top-right badge panel with yellow background and circular badge icon
- Story card fills the width under the illustration and uses a gray rounded rectangle
- Quiz card directly below story card, also rounded and gray
- Multiple-choice answers are displayed as large horizontal pill-shaped buttons stacked vertically
- Selected or preferred answer is highlighted in yellow
- Unselected answers are light gray or off-white
- A large confirmation or next-action button sits near the bottom in yellow with a bold letter or icon
- The screen should feel simple, clear, and readable, with strong contrast between interactive elements and background

### Chapter 2 Reference Notes
The Chapter 2 screen shows a darker, more dramatic hazard scene and a different answer interaction style.

- Background uses a dark environment with visible wires, machinery, and electric effects
- Chapter title remains top-left in large yellow text
- Top-right panel is red and communicates incorrect choice or trap feedback
- Illustration is immersive and high contrast, with the character centered in the scene
- Visual countdown or bubble indicators appear above the character and may be adapted as a simple progress cue if practical
- Speech bubble near the character adds emotional urgency and can be approximated if resources allow
- Story text card is large, gray, and text-heavy, similar to Chapter 1
- Quiz area shows image-based answer choices rather than only text buttons
- The three choices are arranged horizontally with icons or illustrations beneath the prompt
- One option may use a bright red label to emphasize urgency or danger
- This chapter reference suggests that answer presentation can vary by chapter while keeping the same overall stacked layout

### Chapter 3 Reference Notes
The Chapter 3 screen demonstrates a multi-select emergency equipment question.

- Fire scene fills the background with strong orange and yellow tones
- Top-right badge panel is yellow and celebratory, signaling positive reinforcement
- Story card is again large, gray, and directly below the illustration
- Quiz prompt instructs the user to choose several items rather than one
- Answer choices are displayed in a two-column grid of rounded buttons
- Each choice includes both an icon/image and bold label text
- Correct or selected answers are highlighted in yellow with a visible check mark overlay
- Incorrect or inactive answers remain gray
- A rounded yellow submit button appears centered at the bottom of the quiz card
- This screen should guide future implementation of alternate question formats while preserving the same chapter layout system

### Home / Resume Dashboard Reference Notes
One provided screenshot shows a home-style dashboard rather than an in-chapter question screen. This should inform the optional home or chapter resume screen.

- Dark overall background
- Branding header at the top with the app logo and a settings icon
- Large featured resume card near the top
  - Rounded rectangle with bright border or glow treatment
  - Includes chapter resume text, thumbnail or hazard icon, short description, and a circular play button
- Section below for learning categories or incident files
  - Presented as card tiles in a horizontal or grid arrangement
  - Examples shown include Slip, Trip and Fall and Noise
- Progress area below categories
  - Contains a circular meter or donut-like score indicator
  - Includes a title, percentage, and short readiness text
- Bottom navigation bar spans the width of the screen
  - Rounded top corners
  - High-contrast yellow background
  - Includes tabs such as Mission, Home, Profile, and Settings
  - Active tab should be visually emphasized

### Interaction-Specific Visual Rules
- Single-choice questions may use large stacked answer buttons
- Image-based questions may use icon selections laid out horizontally
- Multi-select questions may use a two-column grid with visible selection states
- Primary action buttons should be bright yellow when confirming, continuing, or submitting
- Incorrect feedback may use red panels or red-accented states
- Positive feedback should use yellow or gold-accented states
- All interactive controls must remain large enough for easy tapping on a phone screen

### What to Preserve from the References
- Large illustrated scenario area
- Rounded gray story and quiz cards
- Bold yellow chapter headings
- Top-right badge or feedback panel
- Strong contrast between selected and unselected answers
- High-visibility primary action controls
- Dashboard-style home screen with featured resume content and bottom navigation

### What Not to Copy Literally
Some screenshots include annotations, hand-drawn marks, or accidental overlays.

- Ignore turquoise markup lines and handwritten notes
- Ignore accidental sticker or emoji overlays
- Ignore rough mockup text that appears temporary, duplicated, or partially obstructed
- Preserve the intended layout and hierarchy, not the accidental artifacts in the screenshots

### Practical Implementation Interpretation
If exact visual replication is not possible, preserve the following priorities in order:

1. Same screen structure and section order
2. Same visual emphasis and interaction hierarchy
3. Same color roles for primary, neutral, and feedback states
4. Similar rounded cards, buttons, and spacing
5. Use of the closest available local assets

## Client Sketch Addendum (Latest Direction)
Additional client-provided sketch references clarify that the expected product direction is more heavily branded, more game-like, and more section-driven than the earlier implementation.

These newer sketches should now be treated as layout and feature direction, not optional inspiration.

### Updated Design Intent
- The app should feel like an interactive safety mission dashboard rather than a generic modern mobile app
- The UI should use stronger section blocks, larger labels, chunkier cards, and more obvious navigation landmarks
- The home experience should emphasize resume progress, hazard categories, preparedness score, and mission access
- Profile and chapter access should exist as dedicated screens, not only lightweight overlays or shortcuts
- The UI should preserve offline simplicity while still looking more playful, bold, and presentation-ready

### Updated Screen Expectations
The product is now expected to include or strongly approximate the following screens and structures:

1. **Home Dashboard**
  - Branding header with logo and settings access
  - Large resume mission card near the top
  - `Mindincident files` section with hazard category cards
  - `Undanger Meter Score` / preparedness section
  - Mission preview section
  - Persistent bottom navigation

2. **Intro / Welcome Screen**
  - Large slogan or safety message
  - Featured hazard cards or highlights
  - Progress dots or onboarding indicators
  - Forward or start action

3. **Profile Screen**
  - Full dedicated screen instead of a minimal overlay
  - Avatar / learner area
  - Username and motto area
  - Progress statistics block
  - Achievement / badge section

4. **Mission / Chapter List Screen**
  - Dedicated chapter list view
  - Large tap targets for chapter cards or rows
  - Scrollable vertical layout
  - Simple labels and icons per chapter

## Immediate Fixes Required
The following items are not optional polish requests. They are the immediate fix list that must guide future implementation work.

### Priority 1 — Home Dashboard Must Be Reworked Immediately
- Restructure the home screen to match the client sketch more closely
- Preserve this section order:
  1. branding header
  2. resume mission card
  3. `Mindincident files`
  4. `Undanger Meter Score` / preparedness section
  5. mission preview area
  6. bottom navigation
- Replace the current hero emphasis with a clearer resume-focused mission card
- Remove duplicate or redundant start actions when no saved progress exists
- Remove visible placeholder or development-facing text from the user UI

### Priority 2 — Navigation Must Be More Obvious and Branded
- Redesign the bottom navigation to feel thicker, more persistent, and more branded
- Replace placeholder-feeling text symbols or weak icon treatments with a more consistent icon style
- Make the active tab clearer and visually stronger
- Keep navigation fixed or visually anchored in a way that matches the dashboard mockups

### Priority 3 — Profile Must Become a Real Screen
- Replace the lightweight profile overlay with a proper full-screen profile page
- Include learner identity, avatar area, progress summary, and achievements/badges
- Keep the profile page simple enough for the current scope, but visually aligned with the sketches

### Priority 4 — Mission / Chapter Access Must Become a Real Screen
- Add a dedicated mission or chapter selection screen
- Allow chapter browsing through a clear vertical list or similarly obvious structure
- Use large tap-friendly rows/cards with icons
- Keep the chapter content simple and within the existing project scope

### Priority 5 — Quiz Screen Density Must Be Reduced
- Reduce the amount of competing UI above the actual question area
- Simplify or merge secondary bars when they crowd the chapter screen
- Preserve the illustrated scene, story card, question card, and guide panel, but improve hierarchy
- Prioritize the answer interaction over decorative metadata

### Priority 6 — Readability Must Be Improved Immediately
- Increase readability of small text on cards, captions, guide copy, and recap content
- Reduce cramped card copy and avoid overly dense micro-text
- Improve contrast where muted text becomes difficult to scan
- Favor bold, clear, poster-like educational hierarchy over subtle dashboard styling

### Priority 7 — The Chapter 2 Visual Answer Layout Must Be Redesigned
- The visual answer layout for image-based questions is currently too cramped
- Redesign this pattern so choices are easier to read and tap on mobile
- Use a layout that gives visual answers more space and clearer states

### Priority 8 — Multi-Select and Feedback States Must Be Clearer
- Multi-select questions must better communicate selected count and selection state
- Selected, correct, wrong, and inactive states should be visually easier to distinguish
- Submit actions should feel anchored to the question flow rather than visually detached

### Priority 9 — Results Screen Must Be Tightened
- Reduce unnecessary repetition and long-scroll feeling on the result screen
- Keep the result summary clear while making recap content more compact
- Present the next action more clearly after mission completion

### Priority 10 — Intro / Welcome Experience Should Be Added
- Add or approximate a welcome / intro screen using the client sketch direction
- Use bold messaging, featured hazard highlights, and a clear forward action
- Keep this lightweight and offline-friendly

### Priority 11 — Visual Personality Must Match the Sketches Better
- Shift the tone from sleek generic app UI toward a more branded safety-mission interface
- Use stronger section identity, chunkier cards, and more explicit visual grouping
- Keep the dark charcoal + hazard yellow color relationship as the primary visual anchor
- Use the sketches as hierarchy guidance even when exact art assets are not yet available

### Priority 12 — Copy and Labeling Must Be Polished Carefully
- Preserve the client’s intended section meaning while cleaning up obviously rough placeholder wording when needed
- Do not blindly copy annotation text from sketches into the final UI
- Use simple, presentable wording that still matches the client’s concept

### Priority 13 — Small Polish Issues Must Also Be Cleaned Up
- Remove user-visible TODO notes and prototype artifacts from the interface
- Avoid console noise and trivial missing-resource issues such as missing favicon requests when practical
- Continue using placeholders only where required by missing final assets

## Execution Rule For Future `continue` Prompts
When the user says `continue`, implementation work must prioritize the **Immediate Fixes Required** section above before pursuing new features.

Use this execution order unless the user overrides it explicitly:

1. Home dashboard redesign
2. Bottom navigation redesign
3. Full profile screen
4. Mission / chapter list screen
5. Quiz readability and density cleanup
6. Visual-answer layout redesign
7. Result screen tightening
8. Intro / welcome screen
9. Remaining polish items

Implementation should remain incremental, testable, offline-friendly, and within the existing project scope.

## UI Architecture (WebView-Based)
This project uses a hybrid approach.

.NET MAUI will act only as a container (shell) to build the APK.
All UI/UX will be implemented using HTML, CSS, and JavaScript loaded from local files.

### Structure
- **.NET MAUI**
  - Handles app lifecycle
  - Hosts a WebView
  - Loads local web assets

- **Web Layer (Primary UI)**
  - Located in: `/wwwroot`
  - Contains:
    - `index.html`
    - `styles.css`
    - `app.js`
    - assets (images, icons)

### Rendering
- The app launches a WebView
- The WebView loads `wwwroot/index.html`
- All screens (start, quiz, result) are rendered inside the browser layer
- Navigation is handled using JavaScript (no MAUI page navigation)

## Responsibilities
### .NET MAUI Layer
- Initialize and display WebView
- Ensure local files are accessible
- Keep implementation minimal

### Web Layer (Main Logic)
- Render UI screens
- Handle quiz logic
- Manage state (current question, score)
- Update guide/pet messages
- Control navigation between screens

## UI Implementation Rules
- Use HTML for structure
- Use CSS for layout and styling
- Use JavaScript for logic and state
- Do **not** build UI using XAML (except the WebView container)
- Do **not** mix MAUI UI and Web UI

## Data Handling
- Quiz data can be:
  - Embedded in JavaScript, or
  - Loaded from local JSON files in `/wwwroot`

- No external APIs
- Fully offline operation

## Asset Usage (Web Layer)
- All images and UI assets must be placed in `/wwwroot/assets`
- Use HTML image elements to render visuals
- Follow reference images for placement and sizing

## Navigation Model
- Single-page application (SPA)
- Use JavaScript to:
  - Show or hide sections
  - Update content dynamically
  - Move between quiz states

## Reason for This Approach
.NET MAUI UI (XAML) is limited for replicating the required design precisely.

Using HTML/CSS/JS allows:
- Faster UI development
- Easier layout control
- Closer match to reference images

## Features Included
- Chapter-based quiz flow
- Multiple-choice questions
- Immediate feedback
- Score tracking
- Guide/pet feedback
- Final results screen

## Features Excluded (Intentionally)
- No branching story logic
- No advanced animations
- No complex badge system
- No online features
- No heavy data persistence (optional only)

## Development Priority
Focus on:
- Completing the full quiz flow
- Ensuring the app runs without errors
- Matching the expected UI layout
- Keeping the experience smooth and understandable

## Validation Requirement
Before compilation, the project must run a Playwright-based UI content check against the web layer.

This check must verify that core UI content is present and working, including:
- Home screen title and primary actions
- Chapter screen content such as title, story card, quiz card, and guide panel
- Feedback visibility after answering
- Result screen content after completing the quiz

Compilation should fail if the Playwright UI content check fails.

Avoid:
- Overengineering
- Adding unnecessary features
- Rewriting large parts of the project

## Definition of Done
The project is complete when:
- The app builds successfully
- The full quiz flow works from start to finish
- Questions display and validate correctly
- The guide system responds properly
- The UI is clean and usable
- The app is stable enough for presentation

## Instruction for Future Copilot Prompts
When given a prompt like:

> Continue based on `PROJECT_CONTEXT.md`

You must:
- Follow this scope strictly
- Avoid adding features outside this definition
- Prioritize completion over complexity
- Make incremental improvements only

## Resource Availability Note
Some images and graphics may be added later due to delayed member submissions. Until then:
- Use the currently available resources first
- Keep the structure ready for additional assets
- Avoid blocking core development on missing non-essential visuals

## Final Rule
All visible UI must come from the WebView (HTML/CSS/JS).
.NET MAUI must only act as the host container for the app.
Always prioritize a working, complete, and presentable app over a complex or perfect one.
