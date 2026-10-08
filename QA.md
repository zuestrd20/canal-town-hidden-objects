# Verification report · 2026-10-08

Public game: https://zuestrd20.github.io/canal-town-hidden-objects/

Runtime tested: `0a3f9594b6cc3ed948daee7ba3d595e35e95218f`.
Initial successful build/deploy: [Actions run 37785741958](https://github.com/zuestrd20/canal-town-hidden-objects/actions/runs/37785741958).

## Automated checks

- 19 / 19 Node tests passed, locally and in GitHub Actions.
- Application and engine syntax checks passed.
- Three generated scenes decoded at build time and verified against exact SHA256 and byte counts.
- All 18 SVG symbols correspond to named objects and stories.
- Each scene has eight distinct target hitboxes fully inside the image. No target hitboxes overlap; minimum bounding-circle gap is 35.62 scene pixels.
- Tests cover legal engine wins, unknown/repeated targets, paused operations, hint cooldown, challenge expiry, unlimited relaxed mode, star thresholds, save validation and deterministic daily selection.

## Real public-browser interaction

Tests used the deployed public site in cloud Chromium, using UI clicks and ordinary keyboard/mouse controls. No game state, timers, results or localStorage were injected to manufacture wins.

Desktop viewport: 1180 × 757 CSS pixels.

| Run | Actual result |
| --- | --- |
| 晨光河巷 | 8/8, 2 stars, 1 hint, 0 misses |
| 茶院聽風 | 8/8, 3 stars, 0 hints, 0 misses |
| 燈市夜歸 | 8/8, 3 stars, 0 hints, 1 deliberate miss |
| Daily 2026-10-08 | 6/6, 3 stars |
| Collection | All 18/18 stories unlocked |

Verified flows:

- Pause froze the timer at 00:32; reload and Continue preserved 2/8 found objects.
- A hint centered the remaining object at 210% zoom; clicking its visible target counted correctly.
- Hint immediately disabled, then became available after its 15-second active-play cooldown.
- Maximum zoom clamped at 400% and disabled zoom-in; dragging did not count as a miss.
- Re-clicking an already-found object neither scored twice nor counted as a miss.
- A deliberate background click produced friendly feedback and exactly one miss.
- Canceling a new run retained the original challenge and its 1/8 progress.
- Opening help paused the challenge; closing it resumed the countdown.
- Actual challenge time was allowed to expire naturally. The failure dialog showed 1/8 and offered retry, relaxed play and home.
- Choosing relaxed play after expiry allowed another legal 8/8, three-star completion.

## Narrow layout

A separate cloud Chromium window was resized with native window controls, then zoomed to 125%, yielding a real 400 × 604 CSS-pixel viewport. This is a desktop Chromium responsive test, not physical mobile-device emulation.

- No horizontal overflow: document scroll width 388 px within 400 px viewport.
- Narrow scene, target grid and controls rendered and remained usable.
- Hint centering, object clicks, new-run cancellation and resume passed.
- Full 8/8 win completed through the visible narrow-layout UI.

## Public assets and runtime

`release.json` matched the deployed runtime commit. Direct public HTTP reads returned 200 for all three WebP files, with exact bytes and SHA256 matching the build manifest:

- canal.webp: 718,766 bytes
- tea.webp: 753,774 bytes
- lantern.webp: 727,504 bytes

All backgrounds are 1536 × 1024. The deployment artifact was 2.12 MB; visitors receive normal WebP files, not encoded chunks. All three scenes were visually inspected in the deployed game. No app-origin console errors were observed in the checked logs. The browser extension emitted unrelated metadata errors.

## Limits and maintenance notes

- Physical touch gestures, iOS Safari, Android Chrome and assistive screen-reader hardware were not tested. Pointer/pinch handlers exist, but the responsive checks above used mouse/keyboard.
- No cross-device cloud sync: progress belongs to the current browser's localStorage.
- CI passed with non-blocking notices about action runtime and Ubuntu runner migration. No credentials or persistent access were created for this game.

## Artwork and sources

Backgrounds are original OpenAI imagegen illustrations. The supplied reference informed the genre and atmosphere; its pixels, brand and wording are not reused. SVG target illustrations are original code-authored artwork. Audio is synthesized in-browser. No third-party fonts, analytics, advertisements or paid services are included. Full image prompts are in [art-prompts.md](art-prompts.md). AI-generated artwork may not receive exclusive copyright protection in every jurisdiction.
