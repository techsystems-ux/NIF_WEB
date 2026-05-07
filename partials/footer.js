/* ═══════════════════════════════════════════════════════════
   NIF Global – Shared Footer Partial
   Edit THIS file to update the newsletter + footer across ALL pages.
   Uses absolute paths so it works from any subdirectory.
═══════════════════════════════════════════════════════════ */
(function () {
    var el = document.getElementById('site-footer');
    if (!el) return;

    var NIF_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxaFWkFqmJPPya4Ug2IdT_FDCQpoA0j2CZfXz2ScHGtROejmovNfvN5VvcQc52kzGoEGg/exec";

    el.innerHTML = `
<!-- ── NEWSLETTER ── -->
<div style="background:#7d2310;padding:60px 24px;">
    <div style="max-width:700px;margin:0 auto;text-align:center;">
        <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px;">
            <div style="width:30px;height:1px;background:rgba(255,255,255,.4);"></div>
            <span style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.7);font-family:'Montserrat',sans-serif;">Stay Updated</span>
            <div style="width:30px;height:1px;background:rgba(255,255,255,.4);"></div>
        </div>
        <h2 style="font-size:clamp(20px,3vw,30px);font-weight:800;color:#fff;margin-bottom:10px;font-family:'Montserrat',sans-serif;">Subscribe to Our Newsletter</h2>
        <p style="font-size:14px;color:rgba(255,255,255,.8);margin-bottom:28px;line-height:1.7;font-family:'Montserrat',sans-serif;">Get the latest updates on fashion events, new courses, student achievements, and industry news delivered to your inbox.</p>
        <form id="nif-newsletter-form" style="display:flex;gap:12px;max-width:520px;margin:0 auto;flex-wrap:wrap;">
            <input type="email" name="Email" id="nlEmail" placeholder="Your email address" required
                style="flex:1;min-width:200px;padding:13px 20px;border-radius:50px;border:2px solid rgba(255,255,255,.3);background:rgba(255,255,255,.15);color:#fff;font-size:14px;font-family:'Montserrat',sans-serif;outline:none;" />
            <button type="submit" id="nlBtn"
                style="background:#fff;color:#9A2A12;font-size:13px;font-weight:700;padding:13px 28px;border-radius:50px;border:none;cursor:pointer;font-family:'Montserrat',sans-serif;white-space:nowrap;transition:transform .2s;"
                onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">Subscribe</button>
        </form>
        <p id="nl-success-msg" style="display:none;color:#fff;font-weight:600;font-size:14px;margin-top:16px;font-family:'Montserrat',sans-serif;">
            ✅ You're subscribed! Thank you.
        </p>
    </div>
</div>

<!-- ── FOOTER ── -->
<footer style="background:#000;color:#fff;font-family:'Montserrat',sans-serif;">
    <div style="max-width:1400px;margin:0 auto;padding:64px 24px 48px;display:grid;grid-template-columns:repeat(5,1fr);gap:40px;" class="footer-grid">
        <div>
            <div style="margin-bottom:22px;">
                <img src="/images/footer logo.webp" alt="NIF Global" width="130" height="130" style="max-width:130px;height:auto;filter:brightness(0) invert(1);" />
            </div>
            <p style="font-size:13px;color:#bbb;line-height:1.75;margin-bottom:22px;">At NIF Global Kondhwa, Design Education Is Delivered With Excellence And Industry Relevance. Recognized As One Of Pune's Leading Design Institutes, We Take Pride In Offering High-Quality Education Guided By Experienced Industry Professionals.</p>
            <div style="display:flex;gap:18px;align-items:center;">
                <a href="#" style="color:#b05f2b;font-size:17px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b05f2b'"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/nifpune.kndofficial?igsh=OHl6NjN2Z24yOXk5" target="_blank" rel="noopener" style="color:#b05f2b;font-size:18px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b05f2b'"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" style="color:#b05f2b;font-size:18px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b05f2b'"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="https://youtube.com/@inifdkondhwa2863?si=KxZ0Pr6bdWTwEVvP" target="_blank" rel="noopener" style="color:#b05f2b;font-size:17px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#b05f2b'"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
        <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:10px;">Quick Links</h3>
            <div style="width:28px;height:2px;background:#555;margin-bottom:24px;"></div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:14px;">
                <li><a href="/" style="color:#bbb;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:12px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-house" style="color:#b05f2b;width:16px;"></i>Home</a></li>
                <li><a href="/facilities/" style="color:#bbb;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:12px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-trophy" style="color:#b05f2b;width:16px;"></i>Why Join Us</a></li>
                <li><a href="/admission/" style="color:#bbb;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:12px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-book-open" style="color:#b05f2b;width:16px;"></i>Admission</a></li>
                <li><a href="/blogs/" style="color:#bbb;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:12px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-newspaper" style="color:#b05f2b;width:16px;"></i>Blogs</a></li>
                <li><a href="/contact/" style="color:#bbb;text-decoration:none;font-size:14px;display:flex;align-items:center;gap:12px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-envelope" style="color:#b05f2b;width:16px;"></i>Contact Us</a></li>
            </ul>
        </div>
        <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:10px;">Fashion Design</h3>
            <div style="width:28px;height:2px;background:#555;margin-bottom:24px;"></div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
                <li><a href="/fashion-design-course/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-shirt" style="color:#b05f2b;width:14px;font-size:12px;"></i>Overview</a></li>
                <li><a href="/fashion-designing-course-in-pune/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Pune</a></li>
                <li><a href="/fashion-designing-course-in-pcmc/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>PCMC</a></li>
                <li><a href="/fashion-designing-course-in-baramati/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Baramati</a></li>
                <li><a href="/fashion-designing-course-in-ahilyanagar/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Ahilyanagar</a></li>
                <li><a href="/fashion-designing-course-in-nashik/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Nashik</a></li>
                <li><a href="/fashion-designing-course-in-kolhapur/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Kolhapur</a></li>
                <li><a href="/fashion-designing-course-in-sambhajinagar/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Sambhajinagar</a></li>
                <li><a href="/fashion-designing-course-in-solapur/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Solapur</a></li>
            </ul>
        </div>
        <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:10px;">Interior Design</h3>
            <div style="width:28px;height:2px;background:#555;margin-bottom:24px;"></div>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:12px;">
                <li><a href="/interior-design-course/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-building" style="color:#b05f2b;width:14px;font-size:12px;"></i>Overview</a></li>
                <li><a href="/interior-designing-course-in-pune/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Pune</a></li>
                <li><a href="/interior-designing-course-in-pcmc/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>PCMC</a></li>
                <li><a href="/interior-designing-course-in-baramati/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Baramati</a></li>
                <li><a href="/interior-designing-course-in-ahilyanagar/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Ahilyanagar</a></li>
                <li><a href="/interior-designing-course-in-nashik/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Nashik</a></li>
                <li><a href="/interior-designing-course-in-kolhapur/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Kolhapur</a></li>
                <li><a href="/interior-designing-course-in-sambhajinagar/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Sambhajinagar</a></li>
                <li><a href="/interior-designing-course-in-solapur/" style="color:#bbb;text-decoration:none;font-size:13px;display:flex;align-items:center;gap:10px;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#bbb'"><i class="fa-solid fa-location-dot" style="color:#b05f2b;width:14px;font-size:12px;"></i>Solapur</a></li>
            </ul>
        </div>
        <div>
            <h3 style="font-size:16px;font-weight:700;margin-bottom:10px;">Contact Us</h3>
            <div style="width:28px;height:2px;background:#555;margin-bottom:24px;"></div>
            <p style="font-size:13.5px;font-weight:600;color:#ddd;line-height:1.75;margin-bottom:18px;">NIF Global Pune Kondhwa Campus, Rukmini Tower, Guru Nanak Nagar, On Narayan Annaji Shinde Road, NIBM, Kondhwa, Pune 411048</p>
            <p style="font-size:13.5px;font-weight:600;color:#ddd;line-height:1.75;">8381006006 / 9822282817 / 020-26855544</p>
        </div>
    </div>
    <div style="background:#222;padding:18px 24px;">
        <div style="max-width:1400px;margin:0 auto;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;font-size:12.5px;color:#aaa;">
            <div style="display:flex;gap:12px;align-items:center;">
                <a href="/privacy-policy/" style="color:#aaa;text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#aaa'">Privacy Policy</a>
                <span style="color:#555;">|</span>
                <a href="#" style="color:#aaa;text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#aaa'">Terms &amp; Conditions</a>
            </div>
            <div>NIF Global Powered by Hovers</div>
        </div>
    </div>
</footer>

<!-- Floating WhatsApp -->
<a href="https://wa.me/919822282817?text=Hi!%20I'm%20here%20for%20an%20enquiry." target="_blank" aria-label="WhatsApp"
    style="position:fixed;bottom:24px;right:24px;z-index:9999;background:#25D366;width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:3px solid #fff;box-shadow:0 4px 14px rgba(0,0,0,.2);text-decoration:none;transition:transform .2s;"
    onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
    <i class="fa-brands fa-whatsapp" style="color:#fff;font-size:26px;"></i>
</a>

<!-- Hidden iframe for Google Sheets form submission -->
<iframe name="nif-hidden-frame" id="nif-hidden-frame" style="display:none;" title="form-target"></iframe>`;

    /* ── Newsletter form submission ── */
    document.addEventListener('DOMContentLoaded', function () {
        if (window._nifNLBound) return;
        window._nifNLBound = true;

        var form = document.getElementById('nif-newsletter-form');
        if (!form) return;
        var btn = document.getElementById('nlBtn');
        var successMsg = document.getElementById('nl-success-msg');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (btn) { btn.textContent = 'Subscribing…'; btn.disabled = true; }

            var tmpForm = document.createElement('form');
            tmpForm.method = 'POST';
            tmpForm.action = NIF_SCRIPT_URL;
            tmpForm.target = 'nif-hidden-frame';
            tmpForm.style.display = 'none';

            var fields = { Email: document.getElementById('nlEmail').value, Source: 'Newsletter', form_type: 'newsletter' };
            Object.keys(fields).forEach(function (k) {
                var inp = document.createElement('input');
                inp.type = 'hidden'; inp.name = k; inp.value = fields[k];
                tmpForm.appendChild(inp);
            });
            document.body.appendChild(tmpForm);
            tmpForm.submit();
            setTimeout(function () {
                document.body.removeChild(tmpForm);
                form.style.display = 'none';
                if (successMsg) successMsg.style.display = 'block';
            }, 1500);
        });
    });
})();
