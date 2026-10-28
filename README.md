# Joel Biswas — Engineering Portfolio

An engineering edition of the original React/Tailwind portfolio, retaining its teal/cream palette, Lalezar and Lekton fonts, orbiting portrait, scrolling skills, project cards, and contact layout.

## Projects

- 32-bit RISC-V Core

- R2-D2 + Custom Controller
- 12 V Axial-Flux Motor
- Budget Ventilator

Select a project image or title to open its details. Close with the Close button or Escape. Repository links are included for the droid, controller, and motor.

## Run and build

With Node.js and pnpm installed:

```sh
pnpm install
pnpm start
pnpm build
```

The production site is in `build/`. Serve that directory using any static web server. The relative asset paths support deployment under a subdirectory. This copy has not been published.

## Project images

Project photos and CAD renders are stored locally in `public/images/engineering/`, sourced from the public GitHub repositories. R2-D2 and its controller share a two-image card. The motor and ventilator use CAD assembly images. The RISC-V core retains its placeholder as requested.

The `images` arrays in `src/components/Projects.jsx` control each card’s image filenames and alt text. The same images appear in project details. Source URLs are recorded in `IMAGE-SOURCES.json`. The files are bundled with the site rather than loaded from GitHub at runtime.

Project descriptions, specifications, tags, and links are also in `Projects.jsx`. The original portrait is retained. Engineering skill icons are simple custom SVG illustrations, not official product logos.

## Contact

The form retains the original portfolio's EmailJS service and template. Form labels, sending state, error feedback, and success reset were improved. No real email was sent during verification; confirm EmailJS allowed domains and delivery before publishing.

## Content sources

R2-D2 and controller: local hardware README files and existing personal project notes. Motor: existing personal project notes (12 V, dual rotor/single stator, 9 coils, 12 magnets per rotor, Onshape/Fusion 360). Ventilator: the ventilator bullets in the earlier resume (the surrounding project heading in that draft had been changed to RISC-V). No clinical performance, cost, or measured motor-output claims have been added.

RISC-V content is based on the existing project notes and SiliconJackets onboarding context: completed RTL design of a 32-bit subset core, verification in progress, and physical design as a later stage. No tapeout, full ISA compliance, or performance claims are made.
