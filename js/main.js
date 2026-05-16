/* ── SVG Icon Map ── */
const ICONS = {
  wifi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  car: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-3"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  wind: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "map-pin": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
  road: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`,
  smile: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  chevL: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevR: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  chevUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>`,
  camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
};

function icon(name) { return ICONS[name] || ''; }

/* ── Helper: create element with HTML ── */
function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

/* ── Build the page ── */
document.addEventListener('DOMContentLoaded', () => {
  const S = SITE;
  const app = document.getElementById('app');

  // ── Navbar ──
  const nav = el('nav', '', '');
  nav.id = 'navbar';
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="#home" class="nav-logo">
        <div class="nav-logo-badge">${S.brand.initials}</div>
        <div class="nav-logo-text"><strong>${S.brand.name}</strong><span>${S.brand.subtitle}</span></div>
      </a>
      <div class="nav-links">${S.nav.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}</div>
      <div class="nav-right">
        <a href="tel:${S.brand.phone.replace(/\s/g,'')}" class="nav-phone">${icon('phone')} ${S.brand.phone}</a>
        <a href="#booking" class="btn btn-gold" style="padding:8px 20px;font-size:.8rem;">Book Now</a>
      </div>
      <button class="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>
    </div>`;
  app.appendChild(nav);

  // Mobile nav
  const mobileNav = el('div', 'nav-mobile', S.nav.map(l => `<a href="${l.href}">${l.label}</a>`).join('') + `<a href="tel:${S.brand.phone.replace(/\s/g,'')}" style="display:flex;align-items:center;gap:10px;"><span style="width:20px;height:20px;display:inline-flex;">${icon('phone')}</span> ${S.brand.phone}</a>`);
  app.appendChild(mobileNav);

  document.querySelector('.hamburger').addEventListener('click', () => mobileNav.classList.toggle('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));

  // ── Hero ──
  const heroSection = el('section', '', '');
  heroSection.id = 'home';
  const slidesHTML = S.hero.images.map((img, i) => `<div class="hero-slide${i===0?' active':''}" style="background-image:url('${img}')"></div>`).join('');
  heroSection.innerHTML = `
    <div class="hero-slides">${slidesHTML}<div class="hero-overlay"></div></div>
    <div class="hero-content">
      <div class="hero-tag">${S.hero.tag}</div>
      <h1 class="hero-headline">${S.hero.headline}</h1>
      <div class="hero-loc">${icon('map-pin')} ${S.hero.location}</div>
      <div class="hero-btns">
        <a href="${S.hero.btn1.href}" class="btn btn-gold">${S.hero.btn1.label} →</a>
        <a href="${S.hero.btn2.href}" class="btn btn-outline">${S.hero.btn2.label}</a>
      </div>
      <div class="hero-badge">${S.hero.badge}</div>
    </div>`;
  app.appendChild(heroSection);

  // Hero slideshow
  let slideIdx = 0;
  const slides = heroSection.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    setInterval(() => {
      slides[slideIdx].classList.remove('active');
      slideIdx = (slideIdx + 1) % slides.length;
      slides[slideIdx].classList.add('active');
    }, 5000);
  }

  // ── Booking ──
  const bookSec = el('section', '', '');
  bookSec.id = 'booking';
  bookSec.innerHTML = `
    <div class="booking-card">
      <div class="booking-fields">
        <div class="booking-field"><label>Check-in</label><input type="date"></div>
        <div class="booking-field"><label>Check-out</label><input type="date"></div>
        <div class="booking-field"><label>Guests</label><select><option>2 Adults, 0 Children</option><option>1 Adult, 0 Children</option><option>2 Adults, 1 Child</option><option>2 Adults, 2 Children</option></select></div>
        <button class="btn btn-dark">Check Availability</button>
      </div>
      <div class="booking-badges"><span>Best Rate Guarantee</span><span>No Hidden Charges</span><span>Secure Booking</span></div>
    </div>`;
  app.appendChild(bookSec);

  // ── Rooms ──
  const roomsSec = el('section', '', '');
  roomsSec.id = 'rooms';
  const roomCards = S.rooms.items.map(r => `
    <div class="room-card">
      <div class="room-img"><div class="room-img-placeholder">🛏</div></div>
      <div class="room-body">
        <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;">
          <div class="room-name">${r.name}</div>
          <div class="room-price">${r.price}</div>
        </div>
        <p class="room-desc">${r.desc}</p>
        <a href="${r.link}" class="btn btn-ghost" style="padding:8px 18px;font-size:.8rem;">View Details</a>
      </div>
    </div>`).join('');
  roomsSec.innerHTML = `
    <div class="container">
      <div class="section-header"><div class="section-tag">${S.rooms.tag}</div><h2 class="section-title">${S.rooms.title}</h2></div>
      <div class="rooms-grid">${roomCards}</div>
    </div>`;
  app.appendChild(roomsSec);

  // Load room images
  roomsSec.querySelectorAll('.room-card').forEach((card, i) => {
    const img = new Image();
    img.src = S.rooms.items[i].img;
    img.alt = S.rooms.items[i].name;
    img.onload = () => { card.querySelector('.room-img').innerHTML = ''; card.querySelector('.room-img').appendChild(img); };
  });

  // ── Amenities ──
  const amenSec = el('section', '', '');
  amenSec.id = 'amenities';
  const amenItems = S.amenities.items.map(a => `
    <div class="amenity-item">
      <div class="amenity-icon">${icon(a.svg)}</div>
      <div class="amenity-label">${a.label}</div>
    </div>`).join('');
  amenSec.innerHTML = `<div class="amenities-inner"><div class="section-tag">${S.amenities.tag}</div><div class="amenities-grid">${amenItems}</div></div>`;
  app.appendChild(amenSec);

  // ── About ──
  const aboutSec = el('section', '', '');
  aboutSec.id = 'about';
  const hlItems = S.about.highlights.map(h => `
    <div class="highlight-item">
      <div class="highlight-icon">${icon(h.svg)}</div>
      <div><div class="highlight-title">${h.title}</div><div class="highlight-text">${h.text}</div></div>
    </div>`).join('');
  aboutSec.innerHTML = `
    <div class="about-inner">
      <div class="about-img-wrap"><div class="about-img-placeholder">${S.brand.name}<br>${S.brand.subtitle}</div></div>
      <div class="about-text">
        <div class="section-tag">${S.about.tag}</div>
        <h2 class="section-title">${S.about.headline}</h2>
        <p class="about-desc">${S.about.desc}</p>
        <div class="about-highlights">${hlItems}</div>
      </div>
    </div>`;
  app.appendChild(aboutSec);

  // Load about image
  const aboutImg = new Image();
  aboutImg.src = S.about.img;
  aboutImg.alt = 'About us';
  aboutImg.onload = () => { const w = aboutSec.querySelector('.about-img-wrap'); w.innerHTML = ''; w.appendChild(aboutImg); };

  // ── Gallery ──
  const galSec = el('section', '', '');
  galSec.id = 'gallery';
  const gItems = S.gallery.images.map(g => `<div class="g-item" data-src="${g.src}"><div class="g-item-placeholder">${icon('camera')}</div><div class="g-item-overlay">${g.alt}</div></div>`).join('');
  galSec.innerHTML = `
    <div class="container">
      <div class="gallery-header"><div class="section-tag">${S.gallery.tag}</div></div>
      <div class="gallery-grid">${gItems}</div>
      <div class="gallery-footer"><a href="#gallery" class="btn btn-ghost">${S.gallery.btnLabel} ${icon('camera')}</a></div>
    </div>`;
  app.appendChild(galSec);

  // Load gallery images
  galSec.querySelectorAll('.g-item').forEach(item => {
    const img = new Image();
    img.src = item.dataset.src;
    img.alt = item.querySelector('.g-item-overlay').textContent;
    img.onload = () => { item.querySelector('.g-item-placeholder').replaceWith(img); };
  });

  // Lightbox
  const lb = el('div', '', `<button id="lightbox-close">&times;</button><img src="" alt="Gallery">`);
  lb.id = 'lightbox';
  app.appendChild(lb);
  galSec.querySelectorAll('.g-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (img) { lb.querySelector('img').src = img.src; lb.classList.add('open'); }
    });
  });
  lb.querySelector('#lightbox-close').addEventListener('click', () => lb.classList.remove('open'));
  lb.addEventListener('click', e => { if (e.target === lb) lb.classList.remove('open'); });

  // ── Nearby ──
  const nearbySec = el('section', '', '');
  nearbySec.id = 'nearby';
  const distItems = S.nearby.distances.map(d => `<div class="dist-item"><div class="dist-time">${d.time}</div><div class="dist-label">${d.label}</div></div>`).join('');
  nearbySec.innerHTML = `
    <div class="nearby-inner">
      <div class="nearby-text">
        <div class="section-tag">${S.nearby.tag}</div>
        <h2 class="section-title">${S.nearby.headline}</h2>
        <p class="nearby-desc">${S.nearby.desc}</p>
        <div class="nearby-badge">${icon('map-pin')} ${S.nearby.badge}</div><br>
        <a href="${S.nearby.mapLink}" target="_blank" class="btn btn-gold">${S.nearby.mapBtn} →</a>
      </div>
      <div class="distances">${distItems}</div>
    </div>`;
  app.appendChild(nearbySec);

  // ── Testimonials ──
  const testSec = el('section', '', '');
  testSec.id = 'testimonials';
  const tCards = S.testimonials.items.map(t => `
    <div class="testimonial-card">
      <div class="stars">${'★'.repeat(t.stars)}</div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name.charAt(0)}</div>
        <div><div class="author-name">${t.name}</div><div class="author-city">${t.city}</div></div>
      </div>
    </div>`).join('');
  testSec.innerHTML = `
    <div class="container">
      <div class="testimonials-header"><div class="section-tag">${S.testimonials.tag}</div><h2 class="section-title">${S.testimonials.title}</h2></div>
      <div class="testimonials-wrap"><div class="testimonials-track">${tCards}</div></div>
      <div class="testimonial-controls">
        <button class="t-btn" id="t-prev">${icon('chevL')}</button>
        <button class="t-btn" id="t-next">${icon('chevR')}</button>
      </div>
    </div>`;
  app.appendChild(testSec);

  // Testimonial carousel
  let tIdx = 0;
  const track = testSec.querySelector('.testimonials-track');
  function slideTo(i) { const card = track.querySelector('.testimonial-card'); if (!card) return; const w = card.offsetWidth + 24; track.style.transform = `translateX(-${i * w}px)`; }
  document.getElementById('t-prev').addEventListener('click', () => { tIdx = Math.max(0, tIdx - 1); slideTo(tIdx); });
  document.getElementById('t-next').addEventListener('click', () => { tIdx = Math.min(S.testimonials.items.length - 1, tIdx + 1); slideTo(tIdx); });

  // ── Footer ──
  const footerSec = el('section', '', '');
  footerSec.id = 'contact';
  const socials = Object.entries(S.brand.social).map(([k,v]) => `<a href="${v}" target="_blank" class="social-btn">${icon(k)}</a>`).join('');
  const quickLinks = S.nav.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  const roomLinks = S.rooms.items.map(r => `<li><a href="${r.link}">${r.name}</a></li>`).join('');
  const usefulLinks = S.footer.usefulLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join('');
  footerSec.innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#home" class="nav-logo"><div class="nav-logo-badge">${S.brand.initials}</div><div class="nav-logo-text"><strong>${S.brand.name}</strong><span>${S.brand.subtitle}</span></div></a>
          <p>${S.footer.tagline}<br>Located on ${S.brand.address}</p>
          <div class="footer-socials">${socials}</div>
        </div>
        <div class="footer-col"><h4>Quick Links</h4><ul>${quickLinks}</ul></div>
        <div class="footer-col"><h4>Rooms</h4><ul>${roomLinks}</ul><h4 style="margin-top:20px;">Useful Links</h4><ul>${usefulLinks}</ul></div>
        <div class="footer-col"><h4>Contact Us</h4><ul class="footer-contact">
          <li>${icon('phone')} ${S.brand.phone}<br>${S.brand.phone2}</li>
          <li>${icon('mail')} ${S.brand.email}</li>
          <li>${icon('location')} ${S.brand.address}</li>
        </ul></div>
      </div>
      <div class="footer-bottom">${S.footer.copyright}</div>
    </footer>`;
  app.appendChild(footerSec);

  // ── Scroll Top ──
  const stBtn = el('button', '', icon('chevUp'));
  stBtn.id = 'scrollTop';
  app.appendChild(stBtn);
  stBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // ── Navbar scroll + scroll-top visibility ──
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    stBtn.classList.toggle('visible', window.scrollY > 400);
  });
});
