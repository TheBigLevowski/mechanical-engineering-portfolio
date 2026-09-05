# Images

Every slot on the site is filled. Replace any file in place and it swaps in
automatically — no code change. Missing files fall back to a labelled dark tile.

## Home page cards
| File | Used for |
|---|---|
| `profile.webp` | Hero portrait — circular cut-out, 1000x1000, transparent corners |
| `profile.png` | Same image, PNG fallback inside the `<picture>` element |
| `profile.jpg` · `profile-alt-wider.jpg` | Unused: the earlier rectangular 4:5 crops |
| `smarthawk-hero.jpg` | SMART Hawk banner (21:9) |
| `wind-generator.jpg` · `bird-stand.jpg` · `thrust-stand.jpg` | Program cards (3:2) |
| `project-4.jpg` | Hardy Cross card (3:2) |

## Project folders
- `smarthawk/` — hero, flight poster, CAD, wing and tail configurations, CFD before/after,
  feather molds and cured feathers, real vs carbon fiber feather, laser cutter, inner wing,
  avionics, tail calculator UI, `evolution-01..04`
- `wind-generator/` — hero, five-module array, gen-1 three-module unit, control dashboard,
  anemometer wiring wizard, `grinding-01..02`
- `bird-stand/` — hero (with the generator), mounted, studio
- `thrust-stand/` — hero, bench photo, ESP32 dashboard
- `hardy-cross/` — network diagram

## Sources
Figures came from the Fall 2025 report, the journal paper, and the six `PORTFOLIO *`
folders on the Desktop. HEIC photos were decoded and converted; the grinder stills were
pulled from `IMG_0420.MOV` and the flight clip from `IMG_0549.MOV`.

Keep new files under ~500 KB — export at 85–90% JPEG quality.

The hero portrait is a circle: `.portrait` in style.css sets `border-radius:50%` plus a
soft blue halo, and the image's own alpha is a clean anti-aliased circle, so the edge
stays sharp on any background. Swapping in a different circular cut-out needs no code
change — keep the subject inscribed in a square.

Headshots were corrected, not retouched: background white balance, gentle level and
midtone-contrast adjustment, specular highlight roll-off on skin only, chroma noise
reduction and unsharp masking on luminance. Full-frame versions of both are in
`Desktop\Enhanced Headshots\`.

`_to_delete/` is build leftovers. Safe to delete.
