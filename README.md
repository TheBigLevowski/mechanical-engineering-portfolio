# Levon Ananyan — Engineering Portfolio

Static site. No build step, no dependencies — open `index.html` in a browser.

## Structure

SMART Hawk is the parent project. Projects 01–03 exist because SMART Hawk needed
them. The Hardy Cross solver is independent and is presented that way.

```
index.html
  #about          Hero — profile picture + bio
  #smarthawk      SMART Hawk, the mother project (full-width feature)
  #program        The SmartHawk program — 01–03, joined by a branch diagram
  #independent    Hardy Cross solver, visually separated
  #contact        Contact

projects/
  smarthawk.html        Parent project · evolution timeline · flight video · tail calculator
                        · link to the published paper
  wind-generator.html   01 · Airflow — two generations, trim control, wiring wizard, shop work
  bird-stand.html       02 · Structure — ball-and-socket test stand and C.G. jig
  thrust-stand.html     03 · Test — load cell, ESP32, web dashboard
  project-4.html        Independent — Hardy Cross pipe network solver

assets/
  css/style.css   All styling; design tokens in the :root block at the top
  js/main.js      Scroll reveal, parallax, sticky nav, image placeholders
  img/            Photos, per project folder
  video/          smarthawk-flight.mp4
```

## Content status
Complete. Every section is written from Levon's own reports, the journal paper, the
PORTFOLIO folders and his own account of what he did. No `TODO` placeholders remain.

## Truthfulness
Claims are deliberately scoped. On the SMART Hawk page the Modelling section is labelled
computational, and Flight testing separates what was demonstrated in the air from what is
still predicted. The wind generator, bird stand and thrust stand pages each carry the same
"working today" vs "in progress / planned" split. Keep that structure when editing — it is
what makes the site defensible against the published paper.

## Spelling and claims
American spelling for materials: **carbon fiber**, **fiberglass**. Not "fibre".

Do not add CNC or machining to the skills — Levon has not used a CNC machine or a lathe.
What he has done by hand: soldering, grinding, drill press, hand tools.

## Mobile
All six pages are checked at 320 / 390 / 430 / 768 / 1024 / 1440 px: no horizontal scroll,
no tap target under 32px, hamburger menu working. Two things to preserve if you edit the CSS:
`html{overflow-x:clip}`, and the rule that makes `data-reveal="left|right"` translate
vertically below 820px — the horizontal reveal offset was what pushed the page sideways.

## Changing the look
The palette and type scale live in the `:root` block at the top of `assets/css/style.css`.
Change `--accent` to re-tint the whole site.

## Publishing
Drag the folder onto [netlify.com/drop](https://app.netlify.com/drop), or push to GitHub
and turn on Pages. Nothing to configure.

## Housekeeping
`assets/img/_to_delete/` holds leftovers from this build — contact sheets, zips, the old
manufacturing page and its image folder. Safe to delete entirely.
