const WHATSAPP_ICON =
  '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

const LEAF_ICON =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 4C11 5 5 10 5 16a4 4 0 0 0 8 3c4-3 6.5-9 7-15z"/><path d="M5 19c3.5-5 7.5-8.5 12-11"/></svg>';

const TICK_ICON =
  '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';

/* ===== Renderers ===== */

function renderMenu() {
  const container = document.getElementById("menu-scroller");
  if (!container) return;

  container.innerHTML = siteConfig.menu
    .map((item) => {
      const lang = item[currentLang];
      return `
      <article class="menu-card">
        <img class="menu-card-img" src="${item.img}" alt="${lang.items}" width="280" height="170" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="menu-card-body">
          <h3 class="menu-day"><span class="menu-veg">${LEAF_ICON}</span>${lang.day}</h3>
          <p class="menu-items">${lang.items}</p>
        </div>
      </article>`;
    })
    .join("");
}

function renderPlans() {
  const container = document.getElementById("plans-grid");
  if (!container) return;

  container.innerHTML = siteConfig.plans
    .map((plan) => {
      const lang = plan[currentLang];
      const unit = plan.priceUnit[currentLang];
      const features = plan.features[currentLang]
        .map((f) => `<li>${TICK_ICON}<span>${f}</span></li>`)
        .join("");
      const math = plan.math
        ? `<div class="glass-chip plan-math"><span class="stat stat--small">${plan.math[currentLang]}</span></div>`
        : "";
      return `
        <div class="plan-card${plan.featured ? " plan-card--featured" : ""}">
          ${plan.featured ? `<span class="plan-badge">${t("planBadge")}</span>` : ""}
          <h3 class="plan-name">${lang.name}</h3>
          <div class="plan-price">
            <span class="stat">${plan.price}</span>
            <span class="plan-price-unit">${unit}</span>
          </div>
          ${math}
          <ul class="plan-features">${features}</ul>
          <a href="${whatsappUrl(lang.message)}" class="btn btn-whatsapp" target="_blank" rel="noopener">
            ${WHATSAPP_ICON}
            <span>${lang.cta}</span>
          </a>
        </div>`;
    })
    .join("");
}

function renderLocalities() {
  const container = document.getElementById("area-chips");
  if (!container) return;

  container.innerHTML = siteConfig.localities[currentLang]
    .map((name) => `<li>${name}</li>`)
    .join("");
}

function renderFAQ() {
  const container = document.getElementById("faq-list");
  if (!container) return;

  container.innerHTML = siteConfig.faq
    .map(
      (item, i) => `
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-question-${i}">
          <span>${item[currentLang].q}</span>
          <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-question-${i}">
          <p>${item[currentLang].a}</p>
        </div>
      </div>`
    )
    .join("");

  initFAQ();
}

function initFAQ() {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ===== Testimonials ===== */

let testimonialIndex = 0;

function showTestimonial(index, animate) {
  const total = siteConfig.testimonials.length;
  testimonialIndex = (index + total) % total;

  const quote = document.querySelector(".testimonial-quote");
  const textEl = document.getElementById("testimonial-text");
  const metaEl = document.getElementById("testimonial-meta");
  if (!quote || !textEl || !metaEl) return;

  const apply = () => {
    const item = siteConfig.testimonials[testimonialIndex][currentLang];
    textEl.textContent = `“${item.quote}”`;
    metaEl.textContent = `${item.name}, ${item.area}`;
    quote.classList.remove("fading");
  };

  if (animate) {
    quote.classList.add("fading");
    setTimeout(apply, 240);
  } else {
    apply();
  }
}

function initTestimonials() {
  const prev = document.getElementById("testimonial-prev");
  const next = document.getElementById("testimonial-next");
  if (prev) prev.addEventListener("click", () => showTestimonial(testimonialIndex - 1, true));
  if (next) next.addEventListener("click", () => showTestimonial(testimonialIndex + 1, true));
}

/* ===== Menu slide counter ===== */

function initMenuCounter() {
  const scroller = document.getElementById("menu-scroller");
  const counter = document.getElementById("menu-counter-current");
  if (!scroller || !counter) return;

  scroller.addEventListener(
    "scroll",
    () => {
      const card = scroller.firstElementChild;
      if (!card) return;
      const step = card.offsetWidth + 24;
      const index = Math.min(
        siteConfig.menu.length,
        Math.round(scroller.scrollLeft / step) + 1
      );
      counter.textContent = String(index).padStart(2, "0");
    },
    { passive: true }
  );
}

/* ===== Rise & settle reveals ===== */

function initReveals() {
  const targets = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => {
    // Hero elements enter on load with an 80ms stagger, not on scroll.
    if (el.closest(".hero")) return;
    observer.observe(el);
  });

  const heroTargets = document.querySelectorAll(".hero [data-reveal]");
  requestAnimationFrame(() => {
    heroTargets.forEach((el, i) => {
      el.style.transitionDelay = `${i * 80}ms`;
      el.classList.add("in");
    });
  });
}

/* ===== Nav ===== */

function initNav() {
  const nav = document.querySelector(".nav-capsule");
  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 20),
    { passive: true }
  );

  const toggle = document.querySelector(".nav-toggle");
  const sheet = document.getElementById("nav-sheet");
  if (!toggle || !sheet) return;

  const closeSheet = () => {
    sheet.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const open = sheet.hidden;
    sheet.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  });

  sheet.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeSheet));
}

/* ===== WhatsApp FAB ===== */

function initFab() {
  const fab = document.getElementById("float-whatsapp");
  const hero = document.querySelector(".hero");
  if (!fab || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => fab.classList.toggle("show", !entry.isIntersecting),
    { threshold: 0.1 }
  );
  observer.observe(hero);
}

/* ===== Smooth scroll ===== */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/* ===== Boot ===== */

function renderDynamicSections() {
  renderMenu();
  renderPlans();
  renderLocalities();
  renderFAQ();
  showTestimonial(testimonialIndex, false);
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderDynamicSections();
  initTestimonials();
  initMenuCounter();
  initReveals();
  initNav();
  initFab();
  initSmoothScroll();
});
