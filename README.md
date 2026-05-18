# Hazeyelert

Hazeyelert is an offline-first .NET MAUI safety quiz app for senior high school learners. It wraps a local HTML/CSS/JavaScript experience inside a MAUI `WebView` so the app can run as a packaged mobile or desktop experience without requiring network access.

## What the app does

- Presents hazard-response quiz scenes as short story missions
- Tracks score, streak, and per-chapter progress
- Includes a mission board, profile view, results screen, and settings screen
- Keeps progress locally so learners can resume a mission later
- Ships the web experience and image assets inside the app package for offline use

## Tech stack

- .NET MAUI / C#
- HTML, CSS, and vanilla JavaScript in `wwwroot/`
- Node.js for the Playwright-based UI content verification script

## Repository layout

- `/Hazeyelert.csproj` - MAUI project file and build hooks
- `/MainPage.xaml` - hosts the local `WebView`
- `/wwwroot/` - offline web app UI, styles, scripts, and assets
- `/Pets/` - pet guide images packaged into the app
- `/scripts/check-ui-content.mjs` - Playwright-based UI verification script
- `/docs/PROJECT_CONTEXT.md` - product and design context

## Prerequisites

Install these before building:

1. .NET 10 SDK
2. Required .NET MAUI workloads
3. Node.js and npm
4. A local Chrome or Edge executable for the Playwright UI check

## Setup

1. Open a terminal in `/home/runner/work/Hazeyelert/Hazeyelert`
2. Install Node dependencies:
   - `npm install`
3. Install MAUI workloads:
   - `dotnet workload restore`
4. If you want to run the UI verification script manually, make sure Chrome or Edge is installed
5. If the browser is not in a default Windows location, set `PLAYWRIGHT_BROWSER_PATH` to the browser executable path

## Build and run

### Build

- Default project build:
  - `dotnet build Hazeyelert.csproj`
- Windows target:
  - `dotnet build Hazeyelert.csproj -f net10.0-windows10.0.19041.0`
- Android target:
  - `dotnet build Hazeyelert.csproj -f net10.0-android`

### Run

Choose the target that matches your environment:

- Windows:
  - `dotnet build Hazeyelert.csproj -t:Run -f net10.0-windows10.0.19041.0`
- Android:
  - deploy from your MAUI tooling or IDE after building `net10.0-android`

## UI verification

The project includes a UI content verification script:

- `npm run verify:ui`

Notes:

- The script starts a local static server for `wwwroot/`
- It uses `playwright-core`, so a local browser executable must be available
- The MAUI project runs this check automatically before Windows builds unless `RunUiContentCheckBeforeBuild=false` is set

Example:

- `dotnet build Hazeyelert.csproj -f net10.0-windows10.0.19041.0 -p:RunUiContentCheckBeforeBuild=false`

## How to use the app

1. Launch the app
2. Wait for the startup splash to finish
3. On the intro screen, select **Enter dashboard**
4. On the home screen:
   - choose **Start mission** to begin or resume the current route
   - choose **Mission board** to jump to a specific chapter
5. In each quiz scene:
   - read the story card
   - review the pet guide hint
   - select the safest answer
   - continue to the next step after feedback appears
6. Use the bottom navigation to move between:
   - **Mission** for chapter selection
   - **Home** for the main dashboard
   - **Profile** for progress and badges
   - **Settings** for sound and utility actions
7. After finishing the route, review the **Results** screen and restart if needed

## Current environment notes

- Building fails if the required MAUI workload is not installed
- `npm run verify:ui` fails if Chrome or Edge cannot be found
- On non-Windows systems, the Windows build target is not available
