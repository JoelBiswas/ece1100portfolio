# Joel Biswas — ECE 1100 Portfolio

A standalone, local-first portfolio focused on robotics, embedded systems, and digital hardware. This is a new implementation, separate from engineering-portfolio.

## Open locally

Run `node serve.mjs` from this folder, then open http://127.0.0.1:4174.

Alternatively, `npm start` runs the same server. No package installation or build step is required. The server binds only to this laptop’s loopback address.

## Edit the website

- `dist/index.html`: page structure, introduction, navigation, and contact content.
- `dist/styles.css`: colors, typography, layouts, and responsive styles.
- `dist/app.js`: case-study content and interactive behavior.
- `dist/assets/`: locally bundled project images, portrait, and fonts.
- `IMAGE-SOURCES.json`: provenance of project photography and CAD images.

The `dist` folder is the complete static website and can be served by any static host. This copy is prepared for GitHub Pages at https://joelbiswas.github.io/ece1100portfolio/. Publication has not yet been completed.

## Interactions

- Robotics / digital-design hero tabs with keyboard arrow navigation.
- A step-by-step ADD instruction walkthrough. The full case-study walkthrough accepts example x6 and x7 values between 0 and 31, resets when values change, and shows their sum at writeback. This is an educational data-flow illustration, not an RTL simulator or a statement about the project’s pipeline.
- Project filters for robotics, chip design, and electromechanical work.
- Four case studies with Overview, System map, and Design notes tabs.
- Clickable subsystem diagrams and a droid/controller image selector.
- Engineering toolkit tabs, linked to relevant projects.
- Email link, clipboard action with fallback feedback, and public GitHub/LinkedIn links.
- Native dialogs with Escape dismissal, focus restoration, and background scroll locking.
- Reduced-motion support and responsive layouts.

## Content and scope

The portfolio uses the owner’s existing project notes, earlier resume context, and public GitHub documentation. It distinguishes:

- Completed processor RTL, ongoing verification, and later physical design.
- The built R2-D2 and its separately designed RF controller.
- Motor design and mechanical simulation, without unverified torque/efficiency claims.
- An engineering ventilator prototype without clinical-performance claims.

The RISC-V project uses a conceptual data-flow diagram rather than a photo, as requested. No generated or stock project images are used. The headshot comes from the original portfolio. Contact uses the Georgia Tech email provided in the owner’s resume.

No analytics, tracking, remote form service, or backend is required. Fonts and imagery are local; external sites are opened only through explicit links. Browser clipboard access is used only when Copy email is clicked.

## Verification

JavaScript syntax check: `node --check dist/app.js`.

Browser checks cover project filtering, case-study sections, gallery selection, subsystem selection, editable ADD values and writeback, keyboard tab selection, Escape dismissal, clipboard feedback, image loading, and desktop/mobile overflow.

## GitHub Pages

The GitHub Actions workflow publishes `dist/` on pushes to `main`. Create the public repository `JoelBiswas/ece1100portfolio`, push this directory, and select **GitHub Actions** in Settings → Pages.
