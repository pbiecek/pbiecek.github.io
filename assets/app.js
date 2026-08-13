/* pbiecek.github.io — small progressive-enhancement layer. No dependencies. */
(function () {
  'use strict';

  /* ---------- Theme ---------- */
  var root = document.documentElement;

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', t === 'dark' ? '#0c0e11' : '#fcfcfb');
  }

  // Initial theme is set inline in <head> to avoid a flash; here we only wire the toggle.
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('pb-theme', next); } catch (err) {}
  });

  /* ---------- Mobile nav ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-nav-toggle]');
    if (t) {
      var links = document.getElementById('nav-links');
      var open = links.classList.toggle('open');
      t.setAttribute('aria-expanded', open ? 'true' : 'false');
      return;
    }
    if (!e.target.closest('#nav-links') && !e.target.closest('[data-nav-toggle]')) {
      var l = document.getElementById('nav-links');
      if (l) l.classList.remove('open');
    }
  });

  /* ---------- Sticky header border ---------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Scroll spy: highlight the section currently in view ---------- */
  var spyLinks = Array.prototype.filter.call(
    document.querySelectorAll('.nav-links a[href^="#"]'),
    function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }
  );

  if (spyLinks.length) {
    var sections = spyLinks.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });

    var setActive = function (id) {
      spyLinks.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };

    var spy = function () {
      var probe = 110;                       // just under the sticky header
      var active = null;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= probe) active = sections[i].id;
      }
      // Last section wins once we are at the very bottom of the page.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        active = sections[sections.length - 1].id;
      }
      setActive(active);
    };

    spy();
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { spy(); ticking = false; });
    }, { passive: true });

    // Close the mobile menu after jumping to a section.
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function () {
        var l = document.getElementById('nav-links');
        if (l) l.classList.remove('open');
        var t = document.querySelector('[data-nav-toggle]');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Back-to-top ---------- */
  var toTop = document.querySelector('.to-top');
  if (toTop) {
    var toggleTop = function () { toTop.hidden = window.scrollY < 900; };
    toggleTop();
    window.addEventListener('scroll', toggleTop, { passive: true });
  }

  // #top links go to the actual page top, not to the top of <main>
  // (the sticky header sits above it and would leave ~62px of scroll behind).
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href="#top"]');
    if (!a) return;
    e.preventDefault();
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
  });

  /* ---------- Reveal on scroll ---------- */
  var revealables = document.querySelectorAll('.reveal');
  if (revealables.length) {
    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealables.forEach(function (el) { el.classList.add('in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      revealables.forEach(function (el) { io.observe(el); });
      // Safety net: never leave content hidden (print, headless capture, IO edge cases).
      setTimeout(function () {
        revealables.forEach(function (el) { el.classList.add('in'); });
      }, 2500);
    }
  }
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  });

  /* ---------- Publication / item filtering ---------- */
  var filterBar = document.querySelector('[data-filter-bar]');
  if (filterBar) {
    var targets = document.querySelectorAll('[data-tags]');
    var counter = document.querySelector('[data-filter-count]');

    var setCount = function (n) {
      if (counter) counter.textContent = n + (n === 1 ? ' entry' : ' entries');
    };

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      var key = btn.getAttribute('data-filter');

      filterBar.querySelectorAll('.filter').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });

      var shown = 0;
      targets.forEach(function (el) {
        var tags = (el.getAttribute('data-tags') || '').split(/\s+/);
        var ok = key === 'all' || tags.indexOf(key) !== -1;
        el.hidden = !ok;
        if (ok) shown++;
      });
      setCount(shown);
    });

    setCount(targets.length);
  }
})();
