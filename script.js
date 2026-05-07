
var currentSlide = 0;
var totalSlides = 8;
var heroAutoplay;

function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    var w = document.getElementById('heroCarousel').offsetWidth;
    document.getElementById('heroSlides').style.transform = 'translateX(-' + (currentSlide * w) + 'px)';
    document.querySelectorAll('.carousel-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === currentSlide);
    });
}

document.querySelectorAll('.carousel-dot').forEach(function (dot) {
    dot.addEventListener('click', function () { goToSlide(parseInt(this.dataset.slide)); });
});

function nextHeroSlide() { goToSlide(currentSlide + 1); }
heroAutoplay = setInterval(nextHeroSlide, 4000);
var hc = document.getElementById('heroCarousel');
hc.addEventListener('mouseenter', function () { clearInterval(heroAutoplay); });
hc.addEventListener('mouseleave', function () { heroAutoplay = setInterval(nextHeroSlide, 4000); });
window.addEventListener('resize', function () { goToSlide(currentSlide); });

/* ── Cards Carousel ── */
var currentCardsPage = 0;
var cardsAutoplay;

function goToCardsPage(n) {
    currentCardsPage = (n + 3) % 3;
    var w = document.querySelector('.cards-viewport').offsetWidth;
    document.getElementById('cardsTrack').style.transform = 'translateX(-' + (currentCardsPage * w) + 'px)';
    document.querySelectorAll('.cards-dot').forEach(function (d, i) {
        d.classList.toggle('active', i === currentCardsPage);
    });
}

document.querySelectorAll('.cards-dot').forEach(function (dot) {
    dot.addEventListener('click', function () { goToCardsPage(parseInt(this.dataset.page)); });
});

cardsAutoplay = setInterval(function () { goToCardsPage(currentCardsPage + 1); }, 3500);
var cw = document.querySelector('.cards-carousel-wrap');
if (cw) {
    cw.addEventListener('mouseenter', function () { clearInterval(cardsAutoplay); });
    cw.addEventListener('mouseleave', function () { cardsAutoplay = setInterval(function () { goToCardsPage(currentCardsPage + 1); }, 3500); });
}
window.addEventListener('resize', function () { goToCardsPage(currentCardsPage); });

/* ── Stat Counter ── */
(function () {
    var started = false;
    function animateCounter(el) {
        var target = parseInt(el.dataset.target, 10);
        var suffix = el.dataset.suffix || '';
        var duration = 1800;
        var start = null;
        function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var e = 1 - Math.pow(1 - p, 3);
            var c = Math.floor(e * target);
            el.textContent = (target >= 1000 ? c.toLocaleString() : c) + suffix;
            if (p < 1) requestAnimationFrame(step);
            else el.textContent = (target >= 1000 ? target.toLocaleString() : target) + suffix;
        }
        requestAnimationFrame(step);
    }
    function check() {
        if (started) return;
        var sec = document.querySelector('.stat-cards');
        if (sec && sec.getBoundingClientRect().top < window.innerHeight - 80) {
            started = true;
            document.querySelectorAll('.stat-number[data-target]').forEach(animateCounter);
        }
    }
    window.addEventListener('scroll', check, { passive: true });
    check();
})();

/* ── Gallery Carousel ── */
var galleryIndex = 0;
function galleryGoTo(n) {
    var track = document.getElementById('galleryTrack');
    var items = track.querySelectorAll('.gallery-item');
    if (!items.length) return;
    
    var visibleItems = window.innerWidth <= 768 ? 1 : 3;
    var maxIndex = items.length - visibleItems;
    
    if (n > maxIndex) n = 0;
    if (n < 0) n = maxIndex;
    galleryIndex = n;
    
    var itemWidth = items[0].offsetWidth;
    var scrollAmount = galleryIndex * (itemWidth + 16); // 16px is the gap
    
    track.style.transform = 'translateX(-' + scrollAmount + 'px)';
}
function galleryPrev() { galleryGoTo(galleryIndex - 1); }
function galleryNext() { galleryGoTo(galleryIndex + 1); }
window.addEventListener('resize', function () { galleryGoTo(galleryIndex); });

/* ── Courses Table ── */
var fashionRows = [
    ['1 Year – Foundation Certificate', 'Class 10th or equivalent'],
    ['1 Year – Advanced Certificate', 'Foundation Certificate in Fashion Design'],
    ['1 Year – Specialization Certificate', 'Advanced Certificate in Fashion Design'],
    ['1 Year – Super Specialization Certificate', 'Specialization Certificate in Fashion Design'],
    ['1 Year – Post Graduate Certificate', 'Graduate'],
    ['1 Year – Post Graduate Specialization Certificate', 'Post Graduation Certificate in Fashion Design'],
    ['4 Years – B. Des', 'Class 12th or equivalent'],
    ['3 Years – B. Voc', 'Class 12th or equivalent'],
    ['2 Years – M. Voc', 'Graduate or equivalent'],
];
var interiorRows = [
    ['1 Year – Foundation Certificate', 'Class 10th or equivalent'],
    ['1 Year – Advanced Certificate', 'Foundation Certificate in Interior Design'],
    ['1 Year – Specialization Certificate', 'Advanced Certificate in Interior Design'],
    ['1 Year – Super Specialization Certificate', 'Specialization Certificate in Interior Design'],
    ['1 Year – Post Graduate Certificate', 'Graduate'],
    ['1 Year – Post Graduate Specialization Certificate', 'Post Graduation Certificate in Interior Design'],
    ['4 Years – B. Des', 'Class 12th or equivalent'],
    ['3 Years – B. Voc', 'Class 12th or equivalent'],
    ['2 Years – M. Voc', 'Graduate or equivalent'],
];

function renderCourseTable(rows) {
    document.getElementById('courseTableBody').innerHTML = rows.map(function (r) {
        return '<tr><td style="border:1px solid #eee;padding:14px 16px;color:#333;font-size:14px;">' + r[0] + '</td><td style="border:1px solid #eee;padding:14px 16px;color:#333;font-size:14px;">' + r[1] + '</td></tr>';
    }).join('');
}

function switchCourseTab(tab) {
    var tf = document.getElementById('tabFashion');
    var ti = document.getElementById('tabInterior');
    if (tab === 'fashion') {
        tf.style.background = '#3F5741'; tf.style.color = '#fff';
        ti.style.background = '#F4F5F6'; ti.style.color = '#000';
        renderCourseTable(fashionRows);
    } else {
        ti.style.background = '#3F5741'; ti.style.color = '#fff';
        tf.style.background = '#F4F5F6'; tf.style.color = '#000';
        renderCourseTable(interiorRows);
    }
}
renderCourseTable(fashionRows);

/* ── FAQ Accordion ── */
function toggleFaq(btn) {
    var item = btn.closest('.faq-item');
    var body = item.querySelector('.fq-body');
    var icon = item.querySelector('.fq-icon');
    var isOpen = body.style.display === 'block';
    document.querySelectorAll('.fq-body').forEach(function (b) { b.style.display = 'none'; });
    document.querySelectorAll('.fq-icon').forEach(function (i) { i.textContent = '+'; });
    if (!isOpen) { body.style.display = 'block'; icon.textContent = '−'; }
}
