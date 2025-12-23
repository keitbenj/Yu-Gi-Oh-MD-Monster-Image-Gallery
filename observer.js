const bgSections = document.querySelectorAll('.monster');
const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;

    // Fade in sections
    anime({
        targets: el,
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutCubic',
        delay: anime.stagger(150)
    });
    // Stop observing once loaded
    observer.unobserve(el);
  });
}, {
  root: null,          // viewport
  rootMargin: '200px', // preload before it appears
  threshold: 0
});

const slideObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const bg = el.dataset.bg;

    if (bg) {
      el.style.backgroundImage = `url("${bg}")`;
      el.removeAttribute('data-bg');
    }

    // Stop observing once loaded
    observer.unobserve(el);
  });
}, {
  root: null,          // viewport
  rootMargin: '200px', // preload before it appears
  threshold: 0
});

bgSections.forEach(section => observer.observe(section));
slides.forEach(slide => slideObserver.observe(slide));
