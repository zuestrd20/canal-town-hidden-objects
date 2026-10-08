# Verification status

This is a recovered development checkpoint, not a finished public release.

## Programmatic checks (repeated 2026-10-08)
- `node --test tests/engine.test.mjs`: 19 / 19 tests.
- Syntax: `node --check app.mjs`, `node --check engine.mjs`.
- Three regenerated backgrounds inspected visually, each 1536 × 1024.
- All 18 SVG target IDs correspond to names/stories and SVG symbols.
- Every scene has eight distinct targets with bounding boxes inside the scene; all 18 collectibles appear across three scenes.
- Legal model-level completion for all three levels, no duplicate scoring.
- Hint cooldown, pause/resume, optional challenge expiry, all star tiers, save validation, daily deterministic selection.

## Not yet verified
- Browser-based desktop/mobile interaction, complete UI wins, actual panning/pinch and zoom hit testing, keyboard accessibility.
- Actual refresh, interrupted UI flow and persistence behavior.
- Public GitHub Pages build, deploy, asset loading, and remote release commit.

## Build verification

On 2026-10-08, all 19 tests and syntax checks passed again. The build decoded all three scenes from text fragments and verified exact byte counts and SHA256 values. Browser interaction and public deployment validation remain pending.

## Artwork
Backgrounds: original OpenAI imagegen illustrations, no copied brand or supplied screenshot pixels. SVG objects: original code-authored vector illustrations. No third-party fonts, scripts, analytics, advertisements or paid services. Full generation prompts are in art-prompts.md. AI-generated images may not receive exclusive copyright protection in every jurisdiction.
