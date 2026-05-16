/* COOKIES */
function loadGA() {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-M9XWK2HSDD';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', 'G-M9XWK2HSDD');
}

document.addEventListener('DOMContentLoaded', function() {
  var banner = document.getElementById('cookie-banner');
  var consent = localStorage.getItem('kbarre-cookie-consent');
  if (consent === 'accepted') {
    loadGA();
  } else if (!consent) {
    banner.removeAttribute('hidden');
  }
  document.getElementById('cookie-accept').addEventListener('click', function() {
    localStorage.setItem('kbarre-cookie-consent', 'accepted');
    banner.setAttribute('hidden', '');
    loadGA();
  });
  document.getElementById('cookie-refuse').addEventListener('click', function() {
    localStorage.setItem('kbarre-cookie-consent', 'refused');
    banner.setAttribute('hidden', '');
  });
});

/* NAV — apparition au scroll */
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* REVEAL AU SCROLL */
function checkReveal() {
  var els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  var winH = window.innerHeight;
  for (var i = 0; i < els.length; i++) {
    var rect = els[i].getBoundingClientRect();
    if (rect.top < winH - 80) {
      els[i].classList.add('visible');
      var labels = els[i].querySelectorAll('.section-label');
      for (var j = 0; j < labels.length; j++) {
        labels[j].classList.add('line-grow');
      }
    }
  }
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('load', checkReveal);
document.addEventListener('DOMContentLoaded', checkReveal);

/* HAMBURGER */
document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('navBurger');
  var nav = document.getElementById('navbar');
  burger.addEventListener('click', function() {
    var open = nav.classList.toggle('nav-open');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function() {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
});

/* MENU — onglets */
document.addEventListener('DOMContentLoaded', function() {
  var tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      tabs.forEach(function(t) { t.classList.remove('active'); });
      document.querySelectorAll('.menu-panel').forEach(function(p) {
        p.classList.add('menu-panel-hidden');
      });
      tab.classList.add('active');
      document.getElementById('menu-' + tab.dataset.menu).classList.remove('menu-panel-hidden');
    });
  });
});
