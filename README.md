# Teo Reising-Rubli — Engineering Portfolio

Static engineering portfolio for GitHub Pages. No framework, server-side code, or build step is required.

**Live site:** https://4472teo-ops.github.io/teo-engineering-portfolio/

## Pages

- `index.html`: introduction, project cards, engineering process, resume and contact.
- `glider.html`: individual glider build, setbacks, modifications, simulation record and interactive flight chart.
- `airfoil.html`: Onshape airfoil design and qualitative aerodynamic study.
- `space-debris.html`: individual aerospace research and communication case study.
- `resume.html`: preserved resume content, restyled with a print/save-as-PDF option.

## Assets and behavior

Shared styles and scripts live in `assets/`. New conceptual diagrams are in `assets/images/`; the six original SVG assets are retained at their existing paths. Diagrams are labeled as illustrations, not original photographs, CAD exports or simulation output. The requested /mnt/data photographs were not available in this Windows workspace or repository.

The theme follows the system preference initially and stores an explicit choice under `teo-theme` in localStorage. Content and links remain available without JavaScript. JavaScript adds the theme switch, mobile menu, image dialog, flight selection, modest animations and resume printing. Reduced-motion preferences are respected. No analytics, contact form service, or external scripts are used.

## Evidence and content

The existing repository and the owner's supplied project brief are the sources for personal/project facts. The resume's education, experience, public contact details and expected graduation are preserved.

Glider distances in recorded order: **29, 30, 46, 57, 52, 50, 55, 63**. The distance unit was not supplied and is not guessed. Times: **2.3, 2.0, 2.4, 1.9, 2.5, 2.3, 2.2, 2.4 seconds**, following the original results asset's time label. The best distance is 63; the longest time is 2.5 seconds on a different flight. The 110% improvement uses 30 as the comparison baseline. Simulation estimates are separately labeled and are not treated as measured flight performance. No mapping of individual modifications to recorded flight numbers is claimed.

Airfoil and space-debris results are qualitative. No unrecorded quantitative performance, crash counts, test facilities, revision counts or software names have been added. Public NASA/ESA references support the explanatory technical background and are linked in the case studies; they are not claimed to be the original class bibliography.

## Deployment

The existing GitHub Actions workflow deploys the repository from `main` to GitHub Pages. Paths are relative and support the repository subdirectory. `.nojekyll` keeps static assets intact.

## Maintenance

Edit the HTML pages directly and use the shared CSS/JS for global changes. Preserve source evidence when adding photographs or test records, write descriptive alt text, and distinguish an illustration from an actual project artifact. Check all five pages at desktop and phone widths in both themes after design changes.
