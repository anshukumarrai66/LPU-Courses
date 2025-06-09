// 📁 public/js/nav.js

/**
 * Show a specific page and hide others
 * @param {string} pageId - "home" | "create" | "take"
 */
export function showSection(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.add("hidden");
  });

  const target = document.getElementById(`${pageId}-page`);
  if (target) target.classList.remove("hidden");

  // Update active tab in sub-nav
  document.querySelectorAll(".sub-nav-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.textContent.toLowerCase().includes(pageId)) {
      btn.classList.add("active");
    }
  });
}

/**
 * Go back to home page
 */
export function goHome() {
  showSection("home");
}
