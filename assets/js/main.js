/* ==========================================================================
   Levon Ananyan — Engineering Portfolio
   main.js  ·  scroll reveal, parallax, nav, placeholders
   ========================================================================== */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- 1. Image placeholders --------------------------------------------
     Any .media whose <img> fails to load (i.e. the photo hasn't been added
     yet) falls back to a labelled placeholder tile. Drop the real file into
     assets/img/ and the placeholder disappears automatically.            */
  function markEmpty(el) { el.classList.add('is-empty'); }
  function checkImages() {
    document.querySelectorAll('.media').forEach(function (m) {
      var img = m.querySelector('img');
      if (!img || !img.getAttribute('src')) { markEmpty(m); return; }
      if (img.complete) {
        if (!img.naturalWidth) markEmpty(m);
      } else {
        img.addEventListener('error', function () { markEmpty(m); });
        img.addEventListener('load', function () {
          if (!img.naturalWidth) markEmpty(m);
          else m.classList.remove('is-empty');
        });
      }
    });
  }

  /* ---- 2. Scroll reveal -------------------------------------------------- */
  function initReveal() {
    var targets = document.querySelectorAll('[data-reveal]');
    if (reduce || !('IntersectionObserver' in window)) {
      targets.forEach(function (t) { t.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---- 3. Sticky nav + scroll progress ----------------------------------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    var bar = document.querySelector('.progress');
    var toggle = document.querySelector('.nav__toggle');

    if (toggle && nav) {
      toggle.addEventListener('click', function () { nav.classList.toggle('is-open'); });
      nav.querySelectorAll('.nav__links a').forEach(function (a) {
        a.addEventListener('click', function () { nav.classList.remove('is-open'); });
      });
    }

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle('is-stuck', y > 8);
      if (bar) {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(y / h, 1) : 0) + ')';
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 4. Parallax ------------------------------------------------------- */
  function initParallax() {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
    if (reduce || !items.length) return;
    var ticking = false;
    function frame() {
      var vh = window.innerHeight;
      items.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.12;
        var progress = (r.top + r.height / 2 - vh / 2) / vh; // -1 .. 1
        el.style.transform = 'translate3d(0,' + (progress * speed * 100).toFixed(2) + 'px,0)';
      });
      ticking = false;
    }
    function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
    window.addEventListener('scroll', request, { passive: true });
    window.addEventListener('resize', request);
    frame();
  }

  /* ---- 5. Card cursor sheen ---------------------------------------------- */
  function initCards() {
    if (reduce) return;
    document.querySelectorAll('.card').forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        card.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* ---- 6. Active nav link on scroll (home page) -------------------------- */
  function initSpy() {
    var sections = document.querySelectorAll('section[id]');
    var links = document.querySelectorAll('.nav__links a[href^="#"]');
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id);
        });
      });
    }, { threshold: 0.4, rootMargin: '-20% 0px -50% 0px' });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---- 7. Stagger helper: [data-stagger] children get delays -------------- */
  function initStagger() {
    document.querySelectorAll('[data-stagger]').forEach(function (group) {
      var step = parseInt(group.getAttribute('data-stagger'), 10) || 90;
      Array.prototype.forEach.call(group.children, function (child, i) {
        var t = child.hasAttribute('data-reveal') ? child : child.querySelector('[data-reveal]');
        if (t) t.style.setProperty('--d', (i * step) + 'ms');
      });
    });
  }

  /* ---- 8. Footer year ---------------------------------------------------- */
  function initYear() {
    document.querySelectorAll('[data-year]').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---- 9. Scroll cue only when the hero actually fits the viewport ------- */
  function initCue() {
    var hero = document.querySelector('.hero');
    var cue = document.querySelector('.scroll-cue');
    if (!hero || !cue) return;
    function check() {
      var content = hero.querySelector('.wrap');
      var fits = content && (content.getBoundingClientRect().height + 180) < window.innerHeight;
      cue.style.display = fits ? '' : 'none';
    }
    window.addEventListener('resize', check);
    check();
  }

  function boot() {
    checkImages(); initStagger(); initReveal(); initNav();
    initParallax(); initCards(); initSpy(); initYear(); initCue();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
