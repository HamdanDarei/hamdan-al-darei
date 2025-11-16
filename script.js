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

// ===== Language (EN / AR) toggle and translations =====
const langToggle = document.getElementById("lang-toggle");
const htmlEl = document.documentElement;

const translations = {
  en: {
    "nav.about": "About",
    "nav.vision": "Vision",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "landing.kicker": "Software Engineer & ML Enthusiast",
    "landing.h1": "From desert skies to data systems.",
    "landing.subtitle":
      "I build reliable software and data-driven tools, inspired by the contrast between quiet desert nights and fast-moving technology.",
    "landing.enter": "Enter Portfolio",
    "landing.scroll": "Scroll",

    "hero.kicker": "Software Engineer • Machine Learning • Data",
    "hero.h1": "Building reliable systems and data-driven products.",
    "hero.subtitle":
      "I'm a Computer Science student at George Washington University, focused on systems, data engineering, and ML. I enjoy turning complex problems into clean, efficient code.",
    "hero.viewProjects": "View Projects",
    "hero.getInTouch": "Get in Touch",
    "hero.meta.location": "Based in UAE / DC",
    "hero.meta.interests": "Interested in: Data & ML, Systems, Infrastructure",

    "about.h2": "About",
    "about.p1":
      "I’m Hamdan, a Computer Science major at GW with a strong interest in systems programming, data infrastructure, and applied machine learning. I like working close to the metal (C, shell, OS concepts) while also thinking about how data flows through real systems.",
    "about.p2":
      "Recently, I’ve been working on university projects like a mini shell in C, data structures & algorithms labs, and personal ideas around safety-first navigation and analytics for the camel racing and livestock industry in the UAE.",

    "vision.h2": "Vision & Mission",
    "vision.visionTitle": "Vision",
    "vision.visionBody":
      "A future where people in the UAE and beyond understand and confidently use AI to make everyday life safer, fairer, and more productive.",
    "vision.missionTitle": "Mission",
    "vision.missionBody":
      "Educate communities about AI and Machine Learning, build practical tools, and implement projects that improve daily decisions — from safety-first navigation to trustworthy analytics for traditional industries.",

    "projects.h2": "Selected Projects",
    "experience.h2": "Experience",
    "skills.h2": "Skills",
    "skills.languages": "Languages",
    "skills.domains": "Domains",
    "skills.tools": "Tools & Interests",

    "contact.h2": "Contact",
    "contact.p":
      "I’m open to internships, research opportunities, and collaborations related to systems, data engineering, or applied machine learning.",
    "contact.email": "Email Me",
  },
  ar: {
    "nav.about": "نبذة عني",
    "nav.vision": "الرؤية والرسالة",
    "nav.projects": "المشاريع",
    "nav.experience": "الخبرات",
    "nav.skills": "المهارات",
    "nav.contact": "تواصل",

    "landing.kicker": "مهندس برمجيات وشغوف بتعلم الآلة",
    "landing.h1": "من سماء الصحراء إلى نظم البيانات.",
    "landing.subtitle":
      "أبني برمجيات موثوقة وأدوات تعتمد على البيانات، مستلهماً التباين بين هدوء ليالي الصحراء وسرعة التكنولوجيا.",
    "landing.enter": "ادخل إلى الموقع",
    "landing.scroll": "تمرير",

    "hero.kicker": "مهندس برمجيات • تعلم الآلة • البيانات",
    "hero.h1": "أبني أنظمة موثوقة ومنتجات مدفوعة بالبيانات.",
    "hero.subtitle":
      "أنا طالب علوم حاسوب في جامعة جورج واشنطن، مهتم بالأنظمة وهندسة البيانات وتعلم الآلة. أستمتع بتحويل المشكلات المعقدة إلى شيفرة نظيفة وفعّالة.",
    "hero.viewProjects": "عرض المشاريع",
    "hero.getInTouch": "تواصل معي",
    "hero.meta.location": "مقيم في الإمارات / واشنطن دي سي",
    "hero.meta.interests": "اهتماماتي: البيانات وتعلم الآلة، الأنظمة، البنية التحتية",

    "about.h2": "نبذة عني",
    "about.p1":
      "أنا حمدان، طالب علوم حاسوب في جامعة جورج واشنطن، مهتم ببرمجة الأنظمة وبنى البيانات وتطبيقات تعلم الآلة. أحب العمل قريباً من العتاد (C، الشيل، مفاهيم أنظمة التشغيل) مع التفكير بكيفية تدفق البيانات داخل الأنظمة الواقعية.",
    "about.p2":
      "مؤخراً عملت على مشاريع جامعية مثل بناء شيل صغير بلغة C، وتمارين هياكل البيانات والخوارزميات، وأفكار شخصية حول الملاحة المراعية للسلامة والتحليلات لسباقات الهجن وقطاع الثروة الحيوانية في الإمارات.",

    "vision.h2": "الرؤية والرسالة",
    "vision.visionTitle": "الرؤية",
    "vision.visionBody":
      "مستقبل يفهم فيه الناس في الإمارات وخارجها الذكاء الاصطناعي ويستخدمونه بثقة لجعل الحياة اليومية أكثر أماناً وعدلاً وإنتاجية.",
    "vision.missionTitle": "الرسالة",
    "vision.missionBody":
      "تثقيف المجتمع حول الذكاء الاصطناعي وتعلم الآلة، وبناء أدوات عملية، وتنفيذ مشاريع تحسّن قرارات الناس اليومية — من الملاحة المراعية للسلامة إلى تحليلات موثوقة للصناعات التقليدية.",

    "projects.h2": "مشاريع مختارة",
    "experience.h2": "الخبرات",
    "skills.h2": "المهارات",
    "skills.languages": "اللغات",
    "skills.domains": "المجالات",
    "skills.tools": "الأدوات والاهتمامات",

    "contact.h2": "تواصل",
    "contact.p":
      "منفتح على فرص التدريب والبحث والتعاون في مجالات الأنظمة وهندسة البيانات وتطبيقات تعلم الآلة.",
    "contact.email": "أرسل بريدًا",
  },
};

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
}

function setLanguage(lang) {
  const isArabic = lang === "ar";
  htmlEl.setAttribute("lang", isArabic ? "ar" : "en");
  htmlEl.setAttribute("dir", isArabic ? "rtl" : "ltr");
  localStorage.setItem("lang", lang);
  if (langToggle) {
    langToggle.textContent = isArabic ? "EN" : "AR";
  }
  applyTranslations(lang);
}

const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "ar" : "en";
    setLanguage(next);
  });
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

// ===== Mobile menu toggle =====
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mainNav = document.getElementById("main-nav");

if (mobileMenuToggle && mainNav) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.contains("mobile-open");
    mainNav.classList.toggle("mobile-open");
    mobileMenuToggle.setAttribute("aria-expanded", !isOpen ? "true" : "false");
  });
  
  // Close menu when clicking on a link
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        mainNav.classList.remove("mobile-open");
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

