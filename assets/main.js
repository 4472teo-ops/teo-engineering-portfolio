document.documentElement.classList.add("js");

const themeButton = document.querySelector(".theme-toggle");
function syncThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeButton?.setAttribute(
    "aria-label",
    dark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeButton?.setAttribute(
    "title",
    dark ? "Switch to light mode" : "Switch to dark mode",
  );
  themeButton?.setAttribute("aria-pressed", String(dark));
}
syncThemeButton();
themeButton?.addEventListener("click", () => {
  const theme =
    document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("teo-theme", theme);
  } catch {}
  syncThemeButton();
});
window.addEventListener("storage", (event) => {
  if (event.key === "teo-theme" && ["light", "dark"].includes(event.newValue)) {
    document.documentElement.dataset.theme = event.newValue;
    syncThemeButton();
  }
});

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#primary-navigation");
function closeMenu(restoreFocus = false) {
  menu?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation");
  if (restoreFocus) menuButton?.focus();
}
menuButton?.addEventListener("click", () => {
  const open = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute(
    "aria-label",
    open ? "Close navigation" : "Open navigation",
  );
});
menu?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu?.classList.contains("is-open"))
    closeMenu(true);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});

// Real links remain usable if JavaScript or the dialog API is unavailable.
const lightbox = document.querySelector("#image-viewer");
if (lightbox && typeof lightbox.showModal === "function") {
  document.querySelectorAll("[data-enlarge]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      const source = link.querySelector("img");
      lightbox.querySelector("img").src = link.href;
      lightbox.querySelector("img").alt = source.alt;
      lightbox.querySelector("#viewer-title").textContent =
        link.dataset.enlarge;
      lightbox.showModal();
      document.body.style.overflow = "hidden";
    });
  });
  lightbox
    .querySelector("button")
    .addEventListener("click", () => lightbox.close());
  lightbox.addEventListener("click", (event) => {
    if (event.target !== lightbox) return;
    const box = lightbox.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      lightbox.close();
  });
  lightbox.addEventListener("close", () => {
    document.body.style.overflow = "";
  });
}

const distances = [29, 30, 46, 57, 52, 50, 55, 63];
const times = [2.3, 2.0, 2.4, 1.9, 2.5, 2.3, 2.2, 2.4];
document.querySelectorAll("[data-flight]").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.flight);
    document
      .querySelectorAll("[data-flight]")
      .forEach((other) =>
        other.setAttribute("aria-pressed", String(other === button)),
      );
    document
      .querySelectorAll(".chart-dot")
      .forEach((point, i) => point.setAttribute("r", i === index ? "8" : "5"));
    document.querySelector("#flight-readout").textContent =
      `Flight ${index + 1}: distance ${distances[index]} · time ${times[index].toFixed(1)} s${index === 7 ? " · Best recorded distance" : ""}. Distance unit not recorded.`;
  });
});

document
  .querySelector(".print-button")
  ?.addEventListener("click", () => window.print());
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
if ("IntersectionObserver" in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("entering");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));
  const counters = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        counters.unobserve(entry.target);
        const target = Number(entry.target.dataset.count);
        const start = performance.now();
        function update(now) {
          const progress = Math.min((now - start) / 850, 1);
          entry.target.textContent = Math.round(
            target * (1 - Math.pow(1 - progress, 3)),
          );
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    },
    { threshold: 0.7 },
  );
  document
    .querySelectorAll("[data-count]")
    .forEach((element) => counters.observe(element));
}
