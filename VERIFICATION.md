# Portfolio verification

Verified on October 5, 2026 using a static server mounted at `/teo-engineering-portfolio/`, matching the GitHub Pages repository path.

- All five pages rendered at 1440, 768, 390, and 320 pixels in both light and dark themes: 40 page states, no horizontal page overflow, missing images, or JavaScript errors.
- All 134 local links and asset references resolved, including cross-page section fragments. All four NASA/ESA reference links and the public repository returned HTTP 200.
- Twenty axe-core 4.12.1 audits passed with zero reported violations: every page in both themes at desktop and phone widths. Automated checks supplement the visual and keyboard review; they do not prove universal accessibility.
- Tested all three project-card destinations, previous/next navigation, Back to projects, contact links, and the HTML resume.
- Tested theme persistence across navigation and reload, mobile menu opening/closing, Escape and focus restoration, image enlargement, chart selection with mouse and keyboard, and resume printing.
- Verified the original recorded order and values in the flight table. The 63 result is labeled as a best distance; distance units are not invented. The longest recorded time is 2.5 seconds on the 52-distance flight.
- Verified reduced-motion behavior, the keyboard skip link, content/navigation without JavaScript, and theme switching when localStorage is blocked.
- Reviewed desktop and mobile screenshots in both themes. Fonts and diagrams are served from the repository; no remote font or script dependency is required.
- JavaScript syntax and Git whitespace checks passed. The existing Pages deployment workflow is preserved.

The five referenced `/mnt/data` photographs were unavailable in the accessible environment, and the repository contained only SVG illustrations. Original SVGs are preserved; the new drawings are explicitly labeled as conceptual illustrations. No actual project photograph or CAD export is claimed.
