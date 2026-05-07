/* ═══════════════════════════════════════════════════════════
   NIF Global – Shared Header Partial
   Edit THIS file to update the nav across ALL pages at once.
   Uses absolute paths so it works from any subdirectory.
═══════════════════════════════════════════════════════════ */
(function () {
    var el = document.getElementById('site-header');
    if (!el) return;
    el.innerHTML = `
<header class="site-header">
    <nav class="nav-pill">
        <a href="/" class="nav-logo">
            <img src="/images/NIF_Kondhwa_Logo.svg" alt="NIF Kondhwa Logo" width="120" height="48" style="height:48px;width:auto;" />
        </a>
        <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li>
                <a href="#">About Us <span class="caret"></span></a>
                <ul class="dropdown">
                    <li><a href="/faculty-members/">Faculty Members</a></li>
                    <li><a href="/facilities/">Facilities</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Courses <span class="caret"></span></a>
                <ul class="dropdown">
                    <li><a href="/fashion-design-course/">Fashion Design</a></li>
                    <li><a href="/interior-design-course/">Interior Design</a></li>
                </ul>
            </li>
            <li><a href="#">Gallery</a></li>
            <li><a href="/admission/">Admission</a></li>
            <li><a href="/blogs/">Blogs</a></li>
            <li><a href="/contact/">Contact Us</a></li>
        </ul>
        <button class="hamburger" id="hamburgerBtn" aria-label="Open menu">
            <span></span><span></span><span></span>
        </button>
        <div class="mobile-nav" id="mobileNav">
            <a href="/">Home</a>
            <a href="/faculty-members/">Faculty Members</a>
            <a href="/facilities/">Facilities</a>
            <div class="m-divider"></div>
            <a href="/fashion-design-course/">Fashion Design</a>
            <a href="/interior-design-course/">Interior Design</a>
            <div class="m-divider"></div>
            <a href="#">Gallery</a>
            <a href="/admission/">Admission</a>
            <a href="/blogs/">Blogs</a>
            <a href="/contact/">Contact Us</a>
        </div>
    </nav>
</header>`;

    /* Mobile nav toggle */
    var hamburger = document.getElementById('hamburgerBtn');
    var mobileNav = document.getElementById('mobileNav');
    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            mobileNav.classList.toggle('open');
        });
        document.addEventListener('click', function (e) {
            if (!mobileNav.contains(e.target) && e.target !== hamburger) {
                mobileNav.classList.remove('open');
            }
        });
    }
})();
