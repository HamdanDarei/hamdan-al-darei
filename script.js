// ===== Theme toggle (light / dark) =====
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

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    toggleBtn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    localStorage.setItem("theme", next);
  });
}

// ===== Footer year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// ===== Landing scroll + blur =====
const landing = document.querySelector(".landing");
const mainContent = document.getElementById("main-content");
const landingScrollBtn = document.querySelector(".landing-scroll");

if (landing && mainContent) {
  // Blur the landing desert once you scroll down a bit
  window.addEventListener("scroll", () => {
    const threshold = window.innerHeight * 0.3;
    if (window.scrollY > threshold) {
      landing.classList.add("is-scrolled");
    } else {
      landing.classList.remove("is-scrolled");
    }
  });
}

if (landingScrollBtn && mainContent) {
  // Smooth scroll to main content when clicking "Enter Portfolio"
  landingScrollBtn.addEventListener("click", () => {
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
}

