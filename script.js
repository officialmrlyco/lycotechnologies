// Keep the static site accessible on small screens without adding a framework dependency.
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const year = document.querySelector('#year');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.dataset.open !== 'true';
    siteNav.dataset.open = String(isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Selecting a destination restores the compact header before the page scrolls there.
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.dataset.open = 'false';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// The footer date stays current without a manual annual edit.
if (year) year.textContent = new Date().getFullYear();
