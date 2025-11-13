// Theme toggle logic
const root = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || savedTheme === "light") {
  root.setAttribute("data-theme", savedTheme);
  if (toggleBtn) {
    toggleBtn.setAttribute("aria-pressed", savedTheme === "dark" ? "true" : "false");
  }
}

// If nothing saved, default is light (as in HTML)

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    toggleBtn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    localStorage.setItem("theme", next);
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
