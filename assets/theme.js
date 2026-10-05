// Apply the saved theme before paint; storage may be unavailable in private browsing.
(() => {
  let theme;
  try {
    theme = localStorage.getItem("teo-theme");
  } catch {}
  if (theme !== "light" && theme !== "dark") {
    theme = matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  document.documentElement.dataset.theme = theme;
})();
