// The Usual Suspects — booker-SEO sister site
// Minimal JS — just smooth scroll for anchor links, no analytics yet.

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for in-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Last updated stamp (useful for the SEO crawl freshness signal)
  const stampEl = document.querySelector('[data-last-updated]');
  if (stampEl) {
    stampEl.textContent = new Date().toISOString().split('T')[0];
  }
});