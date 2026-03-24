// ============================================
//   AtaJS Portfolio — Shared JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link ----
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ---- Mobile nav toggle ----
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // ---- Lightbox ----
  const galleryImgs = Array.from(document.querySelectorAll('.photo-item img'));
  if (galleryImgs.length) {
    // Build overlay
    const overlay = document.createElement('div');
    overlay.id = 'lightbox';
    overlay.innerHTML = `
      <div id="lb-backdrop"></div>
      <button id="lb-close">✕</button>
      <button id="lb-prev">&#8592;</button>
      <img id="lb-img" src="" alt="" />
      <button id="lb-next">&#8594;</button>
      <div id="lb-counter"></div>
    `;
    document.body.appendChild(overlay);

    let current = 0;

    const show = (idx) => {
      current = (idx + galleryImgs.length) % galleryImgs.length;
      document.getElementById('lb-img').src = galleryImgs[current].src;
      document.getElementById('lb-counter').textContent = `${current + 1} / ${galleryImgs.length}`;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const close = () => {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    galleryImgs.forEach((img, i) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => show(i));
    });

    document.getElementById('lb-close').addEventListener('click', close);
    document.getElementById('lb-backdrop').addEventListener('click', close);
    document.getElementById('lb-prev').addEventListener('click', () => show(current - 1));
    document.getElementById('lb-next').addEventListener('click', () => show(current + 1));

    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'ArrowRight') show(current + 1);
      if (e.key === 'ArrowLeft')  show(current - 1);
      if (e.key === 'Escape')     close();
    });
  }

  // ---- Scroll reveal ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

});
