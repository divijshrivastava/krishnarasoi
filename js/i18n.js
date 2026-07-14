let currentLang = localStorage.getItem("lang") || "hi";

function t(key) {
  return siteConfig.translations[currentLang][key] || key;
}

function whatsappUrl(message) {
  const msg = message || t("whatsappDefault");
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    el.setAttribute("aria-label", t(key));
  });

  document.title = t("metaTitle");

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("metaDescription"));

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", t("metaTitle"));

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", t("metaDescription"));

  const addressEl = document.getElementById("footer-address");
  if (addressEl) addressEl.textContent = siteConfig.address[currentLang];

  ["hero-whatsapp", "cta-whatsapp", "float-whatsapp", "footer-whatsapp"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.href = whatsappUrl();
    }
  );
}

function updateToggleUI() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  applyTranslations();
  if (typeof renderDynamicSections === "function") {
    renderDynamicSections();
  }
  updateToggleUI();
}

function initLanguage() {
  document.documentElement.lang = currentLang;
  applyTranslations();
  updateToggleUI();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}
