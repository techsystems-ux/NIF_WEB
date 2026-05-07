      document.addEventListener('DOMContentLoaded', function () {
        /* ── Hero Bottom Carousel ── */
        (function () {
          var slide = 0;
          var total = 3;
          var timer;
          var frame = document.getElementById('heroCarousel');
          var track = document.getElementById('heroSlides');
          var dots = document.querySelectorAll('.fd-hero-carousel-dot');
          if (!frame || !track) return;

          function go(n) {
            slide = (n + total) % total;
            track.style.transform = 'translateX(-' + (slide * frame.offsetWidth) + 'px)';
            dots.forEach(function (d, i) {
              d.classList.toggle('active', i === slide);
            });
          }

          dots.forEach(function (d) {
            d.addEventListener('click', function () { go(parseInt(this.dataset.slide)); resetTimer(); });
          });

          function resetTimer() { clearInterval(timer); timer = setInterval(function () { go(slide + 1); }, 4000); }
          resetTimer();
          frame.addEventListener('mouseenter', function () { clearInterval(timer); });
          frame.addEventListener('mouseleave', resetTimer);
          window.addEventListener('resize', function () { go(slide); });
        })();
      });
