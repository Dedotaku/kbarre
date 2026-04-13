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
