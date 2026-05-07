/* ═══════════════════════════════════════════════════════════
   NIF Global – Shared Page Utilities
   Loaded by all sub-pages (fashion-design-course, etc.)
   Shared with: gallery carousel, FAQ accordion,
                testimonial carousel, form submission helper
═══════════════════════════════════════════════════════════ */

/* ── Testimonial Carousel ── */
(function () {
  var track = document.getElementById('testimonial-track');
  var dotsContainer = document.getElementById('testimonial-dots');
  if (!track || !dotsContainer) return;
  var slides = track.querySelectorAll('.t-slide');
  var total = slides.length;
  var current = 0;
  var autoTimer;

  slides.forEach(function (_, i) {
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Slide ' + (i + 1));
    d.style.cssText =
      'width:10px;height:10px;border-radius:50%;border:none;cursor:pointer;padding:0;transition:background .3s,transform .3s;';
    d.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(d);
  });

  function updateDots() {
    dotsContainer.querySelectorAll('button').forEach(function (d, i) {
      d.style.background = i === current ? '#fff' : 'rgba(255,255,255,.35)';
      d.style.transform = i === current ? 'scale(1.3)' : 'scale(1)';
    });
  }

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + current * 100 + '%)';
    updateDots();
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function () { goTo(current + 1); }, 5000);
  }

  window.testimonialNext = function () { goTo(current + 1); };
  window.testimonialPrev = function () { goTo(current - 1); };

  updateDots();
  resetAuto();
})();

/* ── Gallery Carousel ── */
var galleryIndex = 0;
function galleryGoTo(n) {
  var track = document.getElementById('galleryTrack');
  if (!track) return;
  var items = track.querySelectorAll('.gallery-item');
  if (!items.length) return;
  var visibleItems = window.innerWidth <= 768 ? 1 : 3;
  var maxIndex = items.length - visibleItems;
  if (n > maxIndex) n = 0;
  if (n < 0) n = maxIndex;
  galleryIndex = n;
  var itemWidth = items[0].offsetWidth;
  track.style.transform = 'translateX(-' + galleryIndex * (itemWidth + 16) + 'px)';
}
function galleryPrev() { galleryGoTo(galleryIndex - 1); }
function galleryNext() { galleryGoTo(galleryIndex + 1); }
window.addEventListener('resize', function () { galleryGoTo(galleryIndex); });

/* ── FAQ Accordion ── */
function toggleFaq(btn) {
  var item = btn.closest('.faq-item');
  var body = item.querySelector('.fq-body');
  var icon = item.querySelector('.fq-icon');
  var isOpen = body.style.display === 'block';
  document.querySelectorAll('.fq-body').forEach(function (b) { b.style.display = 'none'; });
  document.querySelectorAll('.fq-icon').forEach(function (i) { i.textContent = '+'; });
  if (!isOpen) { body.style.display = 'block'; icon.textContent = '\u2212'; }
}
