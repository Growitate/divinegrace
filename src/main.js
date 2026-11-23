import './style.css';
import { contact, contacts, products, values } from './data.js';

const app = document.querySelector('#app');
const wa = contact.whatsappUrl;
const phoneLink = `tel:${contact.internationalPhone}`;
const art = {
  logo: '/logo.svg',
  hero: '/images/hero-india-uae.webp',
  storefront: '/images/products-hero-bag.webp',
  about: '/images/about-corridor.webp',
  contact: '/images/contact-enquiry.webp',
};

const icon = (name) => {
  const shared = 'class="icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"';
  const paths = {
    arrow: '<path d="M8 24h31m-12-12 12 12-12 12"/>',
    mail: '<rect x="7" y="11" width="34" height="26" rx="4"/><path d="m9 14 15 12 15-12"/>',
    pin: '<path d="M38 20c0 10-14 23-14 23S10 30 10 20a14 14 0 1 1 28 0Z"/><circle cx="24" cy="20" r="4"/>',
    menu: '<path d="M8 16h32M8 24h32M8 32h32"/>',
    search: '<circle cx="21" cy="21" r="12"/><path d="m30 30 9 9"/>',
    globe: '<circle cx="24" cy="24" r="16"/><ellipse cx="24" cy="24" rx="7" ry="16"/><path d="M9 19h30M9 29h30"/>',
    spark: '<path d="M24 8l3.8 12.2L40 24l-12.2 3.8L24 40l-3.8-12.2L8 24l12.2-3.8L24 8Z"/>',
    seal: '<circle cx="24" cy="21" r="11"/><path d="m19 21 3.5 3.5L29 18M18 30l-3 10 9-4 9 4-3-10"/>',
    phone: '<path d="M15 9h5l3 7-3.5 2.5a21 21 0 0 0 9 9L31 24l7 3v5a4 4 0 0 1-4 4C19.6 36 12 28.4 12 14a4 4 0 0 1 3-5Z"/>',
    whatsapp: '<path d="M24 9a15 15 0 0 0-12.8 22.8L9 39l7.4-2.1A15 15 0 1 0 24 9Z"/><path d="M19.5 18.5c1 3.5 4.5 7 8 8l2.5-2 3 1.5v2a3 3 0 0 1-3 3c-6.5 0-13.5-7-13.5-13.5a3 3 0 0 1 3-3h2l1.5 3-1.5 1Z"/>',
  };
  return `<svg ${shared}>${paths[name] ?? paths.arrow}</svg>`;
};

function header(active) {
  const links = [['/', 'Home'], ['/products', 'Products'], ['/about', 'Our story'], ['/contact', 'Contact']];
  return `
    <header class="site-header">
      <a class="brand" href="/" aria-label="Divine Grace home"><span class="brand-mark">D<span>.</span></span><span class="brand-name">Divine Grace<small>IMPORT · EXPORT</small></span></a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="site-nav">${icon('menu')}</button>
      <nav class="site-nav" id="site-nav" aria-label="Main navigation">
        ${links.map(([path, label]) => `<a href="${path}"${active === path ? ' aria-current="page"' : ''}>${label}</a>`).join('')}
        <a class="nav-cta" href="${wa}" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a>
      </nav>
    </header>`;
}

function footer() {
  const emailLinks = contact.emails.map(({ address }) => `<a href="mailto:${address}">${address}</a>`).join('');
  return `
    <footer class="site-footer">
      <div class="footer-main"><div class="footer-brand"><a class="brand brand-inverse" href="/"><span class="brand-mark">D<span>.</span></span><span class="brand-name">Divine Grace<small>IMPORT · EXPORT</small></span></a><p>Global trade.<br><strong>Personal by nature.</strong></p></div>
        <div class="footer-links"><span>EXPLORE</span><a href="/products">Products</a><a href="/about">Our story</a><a href="/contact">Contact</a></div>
        <div class="footer-links footer-contact"><span>SAY HELLO</span>${emailLinks}<a href="tel:${contact.edwin.internationalPhone}">Edwin Farel: ${contact.edwin.displayPhone}</a><a href="tel:${contact.francis.internationalPhone}">Francis Dsouza: ${contact.francis.displayPhone}</a><a href="${wa}" target="_blank" rel="noreferrer">WhatsApp ${icon('arrow')}</a></div>
      </div>
      <div class="footer-bottom"><span>© ${new Date().getFullYear()} Divine Grace</span><span>Vasi, India <i></i> Dubai, UAE</span><span class="footer-credit">Built by <a href="https://growitate.com" target="_blank" rel="noopener noreferrer"><strong>GROWITATE</strong></a></span></div>
    </footer>`;
}

function productCard(product) {
  return `
    <article class="product-card product-card-${product.art}">
      <div class="product-art"><img class="product-art-img" src="${product.image}" alt="${product.alt}" loading="lazy" decoding="async"><span class="product-index" aria-hidden="true">${product.mark}</span></div>
      <div class="product-card-body"><span class="product-category">${product.group}</span><h3>${product.name}</h3>${product.detail ? `<p class="product-detail">${product.detail}</p>` : ''}<p class="product-note">${product.note}</p><a class="product-link" href="${wa}" target="_blank" rel="noreferrer">Enquire <span>↗</span></a></div>
    </article>`;
}

function homePage() {
  const highlights = [products[0], products[2], products[4], products[5]];
  return `
    <main>
      <section class="hero hero-home">
        <div class="hero-copy"><p class="eyebrow"><span class="eyebrow-mark"></span> IMPORT · EXPORT · PARTNERSHIP</p>
          <h1><span>Divine Grace</span><span class="hero-accent">— Importer exporter</span></h1>
          <p class="hero-subtitle">We specialize in import export — engineered for quality, reliability, and measurable success.</p>
          <p class="hero-small">From Vasi, Maharashtra to Dubai and beyond.</p>
          <div class="hero-actions"><a class="button button-orange" href="${wa}" target="_blank" rel="noreferrer">Start an enquiry <span>↗</span></a><a class="button button-light" href="/products">Explore products <span>↓</span></a></div>
          <div class="hero-stats"><div><strong>2015</strong><span>Company profile<br>states founded</span></div><div><strong>India <i>↔</i> UAE</strong><span>Vasi to Dubai<br>and beyond</span></div><div><strong>Family-run</strong><span>People-first<br>trade approach</span></div></div>
        </div>
        <div class="hero-visual"><div class="hero-blob"></div><figure class="hero-image"><img src="${art.hero}" alt="Isometric illustration of an India-to-Dubai trade route: a green freight container with rice, spices and produce on a golden conveyor crossing a bridge to the Dubai skyline" fetchpriority="high"><span class="hero-image-tag">TRADE<br>IN MOTION</span></figure><span class="hero-orbit-label">INDIA <b>↗</b> UAE</span><span class="hero-spark" aria-hidden="true">✳</span><span class="hero-image-caption">DIVINE GRACE / GLOBAL CONNECTIONS</span></div>
      </section>
      <div class="trust-strip"><span>TRUST, BUILT DAILY</span><i></i><span>QUALITY, HELD CLOSE</span><i></i><span>INTEGRITY, ALWAYS</span><i></i><span>INDIA ↔ UAE</span></div>
      <section class="intro-section section"><div class="section-tag"><span>01</span><span>OUR POINT OF VIEW</span></div><div class="intro-copy"><p class="eyebrow">Trade should feel straightforward</p><h2>A little less friction.<br><span>A lot more <em>trust.</em></span></h2><p>Customers deserve clear communication, responsive service, and a partner who takes the details seriously. Divine Grace was founded to raise that standard—with domain expertise, rapid execution, and a client-first approach.</p><a class="text-link" href="/about">Meet Divine Grace <span>↗</span></a></div><div class="intro-art" aria-hidden="true"><span class="intro-art-circle"></span><img class="intro-art-logo" src="${art.logo}" alt="" width="64" height="64"><i>GOOD FAITH<br>IN MOTION</i></div></section>
      <section class="home-products section"><div class="section-heading"><div><p class="eyebrow">A selection from our portfolio</p><h2>Goods with<br><em>good purpose.</em></h2></div><a class="button button-green" href="/products">View all products <span>↗</span></a></div><div class="product-preview-grid">${highlights.map(productCard).join('')}</div><p class="availability-note">Product categories are as provided. Contact us to discuss specifications and current availability.</p></section>
      <section class="home-values"><div class="values-copy"><p class="eyebrow eyebrow-light">A family business, with a wider view</p><h2>Good business<br>travels on <em>values.</em></h2><p>Founded with a clear mission, built around quality, innovation, and long-term partnership.</p></div><div class="values-list">${values.map((value) => `<article><span>${value.number}</span><div><h3>${value.title}</h3><p>${value.text}</p></div><b class="value-icon">${icon(value.icon)}</b></article>`).join('')}</div><span class="values-orb values-orb-one"></span><span class="values-orb values-orb-two"></span></section>
      <section class="home-cta section"><div><p class="eyebrow">Your next enquiry starts here</p><h2>Let’s talk<br><em>possibilities.</em></h2></div><a class="round-cta" href="${wa}" target="_blank" rel="noreferrer"><span>CHAT WITH<br>DIVINE GRACE</span><b>↗</b></a><p>Tell us what you’re looking to import or export. We’ll start with the details that matter to you.</p></section>
    </main>`;
}

function productsPage() {
  const groups = [
    { id: 'fresh', title: 'Fresh produce', note: 'Fresh Fruits, Vegetables and Onions as listed in the company profile.', filter: (p) => p.group === 'Fresh produce' },
    { id: 'food', title: 'Food grains & spices', note: 'Basmati Rice 1121 and Spices from the stated product portfolio.', filter: (p) => ['Food grains', 'Food products'].includes(p.group) },
    { id: 'medical', title: 'Medical items', note: 'Pharmaceuticals and Personal Health Products, as shared in the profile.', filter: (p) => p.group === 'Medical items' },
  ];
  const featured = [products[0], products[1], products[2], products[3]];
  const categoryFor = (product) => product.group === 'Fresh produce' ? 'fresh' : ['Food grains', 'Food products'].includes(product.group) ? 'food' : 'medical';
  return `
    <main class="page-main products-page">
      <section class="storefront-hero" aria-label="Divine Grace product showcase">
        <div class="storefront-inner">
          <div class="storefront-feature">
            <div class="storefront-copy"><p class="storefront-kicker"><span></span> FRESH PRODUCE · GRAINS · SPICES</p><h1>From origin to<br><em>new markets.</em></h1><p>Explore the products in the Divine Grace portfolio, and start a conversation about the details that matter to you.</p><div class="storefront-actions"><a class="button button-orange" href="#product-categories">Browse products <span>↓</span></a><label class="storefront-search">${icon('search')}<input id="product-search" type="search" placeholder="Search fruits, rice, spices…" aria-label="Search product categories" autocomplete="off"></label></div></div>
            <div class="storefront-visual"><span class="storefront-visual-orbit"></span><img src="${art.storefront}" alt="A canvas tote bag filled with fresh vegetables, lemons, a red onion and a small sack of rice" fetchpriority="high"><span class="storefront-visual-note">INDIA <b>↗</b> UAE</span></div>
          </div>
          <div class="storefront-featured" aria-label="Featured product categories">${featured.map((product) => `<a class="storefront-tile storefront-tile-${product.art}" href="#group-${categoryFor(product)}"><span class="storefront-tile-art"><img class="storefront-tile-img" src="${product.image}" alt="${product.alt}" decoding="async"><em aria-hidden="true">${product.mark}</em></span><span class="storefront-tile-copy"><small>${product.group}</small><strong>${product.name}</strong>${product.detail ? `<span>${product.detail}</span>` : ''}<i>View category</i></span></a>`).join('')}</div>
        </div>
      </section>
      <section class="product-groups" id="product-categories">${groups.map((group, index) => `<div class="product-group" id="group-${group.id}"><div class="product-group-title"><span>0${index + 1}</span><div><h2>${group.title}</h2><p>${group.note}</p></div><i aria-hidden="true">↘</i></div><div class="product-grid">${products.filter(group.filter).map(productCard).join('')}</div></div>`).join('')}<p class="search-empty" hidden>No matching product category. Try “fruit”, “rice”, or “spices”.</p></section>
      <section class="product-contact"><div><p class="eyebrow eyebrow-light">Have a requirement?</p><h2>Let’s get into<br><em>the details.</em></h2></div><p>Share the product, destination market, and any specifications you have in mind.</p><a class="button button-orange" href="${wa}" target="_blank" rel="noreferrer">Ask on WhatsApp <span>↗</span></a></section>
    </main>`;
}

function aboutPage() {
  return `
    <main class="page-main about-page">
      <section class="page-hero about-hero"><div class="page-hero-copy"><p class="eyebrow"><span class="eyebrow-mark"></span> A FAMILY-RUN EXPORT HOUSE</p><h1>Rooted in care.<br><em>Ready to connect.</em></h1><p>Divine Grace was founded to raise the standard of global trade through quality, trust, and long-term partnership.</p></div><div class="about-art"><figure class="hero-showcase-card"><img src="${art.about}" alt="Isometric 3D illustration of an Indian export warehouse connected across a maritime trade corridor to Dubai port towers" fetchpriority="high"><figcaption><span>DG · EST. 2015</span><b>INDIA ↔ UAE</b></figcaption></figure></div></section>
      <section class="about-story section"><div class="section-tag"><span>03</span><span>OUR STORY</span></div><div class="about-copy"><p class="eyebrow">From a clear mission</p><h2>Good trade begins<br>with people who <em>care.</em></h2><p>Founded in 2015, according to the company profile, Divine Grace grew from a passion for solving real problems into a family-run business serving clients seeking quality, innovation, and lasting partnership.</p><p>The company profile describes a base in Vasi, Maharashtra, India and operations in Dubai, UAE. It highlights worldwide shipping, reliable global logistics, quality checks, and ethical transparency.</p><a class="text-link" href="/contact">Get to know us <span>↗</span></a></div><aside class="about-quote"><span>“</span><p>Trust. Quality.<br>Grace and integrity.</p><small>OUR VALUES, IN EVERY DIRECTION</small></aside></section>
      <section class="about-values"><div><p class="eyebrow eyebrow-light">What matters to us</p><h2>Some things<br>never go <em>out of style.</em></h2></div><div class="about-values-list">${values.map((value) => `<article><span>${value.number}</span><div><h3>${value.title}</h3><p>${value.text}</p></div><b class="value-icon">${icon(value.icon)}</b></article>`).join('')}</div></section>
      <section class="locations-section section"><div class="locations-copy"><p class="eyebrow">One business, two hubs</p><h2>India to UAE.<br><em>And beyond.</em></h2><p>The supplied company profile describes operations in Dubai and worldwide shipping.</p></div><div class="locations-visual"><div class="location-card"><span class="location-pin">${icon('pin')}</span><small>HOME BASE</small><strong>Vasi</strong><span>Maharashtra, India</span></div><div class="location-route"><span></span><i>GLOBAL TRADE ROUTE</i><span></span></div><div class="location-card"><span class="location-pin">${icon('pin')}</span><small>OPERATIONS</small><strong>Dubai</strong><span>United Arab Emirates</span></div></div></section>
      <section class="certification-note"><span class="cert-mark">i</span><div><p class="eyebrow">Transparency matters</p><h2>Company-stated certifications</h2><p>The supplied company profile lists IEC, GST, and APEDA certifications. These statements have not been independently verified here. Please request documentation directly from Divine Grace.</p></div></section>
    </main>`;
}

function contactPage() {
  const emailRows = contact.emails
    .map(({ label, address }, index) => `<a class="contact-row" href="mailto:${address}"><span>0${index + 5}</span><b><i class="contact-channel-icon">${icon('mail')}</i>${label}</b><small>${address}</small><i>↗</i></a>`)
    .join('');
  return `
    <main class="page-main contact-page">
      <section class="page-hero contact-hero"><div class="page-hero-copy"><p class="eyebrow"><span class="eyebrow-mark"></span> YOUR NEXT MOVE</p><h1>Let’s make<br><em>a connection.</em></h1><p>Tell us what you’re looking to import or export. Reach Edwin Farel in India or Francis Dsouza in Dubai directly.</p><a class="button button-orange" href="${wa}" target="_blank" rel="noreferrer">Message us on WhatsApp <span>↗</span></a></div><div class="contact-art"><figure class="hero-showcase-card"><img src="${art.contact}" alt="Isometric 3D illustration of a global trade desk with an emerald-and-gold globe, wax-sealed trade envelope, export sample parcel and brass compass" fetchpriority="high"><figcaption><span>DIRECT ENQUIRIES</span><b>OPEN CHANNEL ↗</b></figcaption></figure></div></section>
      <section class="contact-section section"><div class="contact-intro"><p class="eyebrow">Choose your way in</p><h2>Let’s talk<br><em>trade.</em></h2><p>Connect with our team across India and the UAE to discuss product category, destination market, and trade specifications.</p><div class="contact-locations"><span>VASI, INDIA</span><i></i><span>DUBAI, UAE</span></div></div><div class="contact-list"><a class="contact-row contact-row-primary" href="${contact.edwin.whatsappUrl}" target="_blank" rel="noreferrer"><span>01</span><b><i class="contact-channel-icon">${icon('whatsapp')}</i>WhatsApp (India)</b><small>Edwin Farel · ${contact.edwin.displayPhone}</small><i>↗</i></a><a class="contact-row contact-row-primary" href="${contact.francis.whatsappUrl}" target="_blank" rel="noreferrer"><span>02</span><b><i class="contact-channel-icon">${icon('whatsapp')}</i>WhatsApp (UAE)</b><small>Francis Dsouza · ${contact.francis.displayPhone}</small><i>↗</i></a><a class="contact-row" href="tel:${contact.edwin.internationalPhone}"><span>03</span><b><i class="contact-channel-icon">${icon('phone')}</i>Call India</b><small>Edwin Farel: ${contact.edwin.displayPhone}</small><i>↗</i></a><a class="contact-row" href="tel:${contact.francis.internationalPhone}"><span>04</span><b><i class="contact-channel-icon">${icon('phone')}</i>Call UAE</b><small>Francis Dsouza: ${contact.francis.displayPhone}</small><i>↗</i></a>${emailRows}</div></section>
      <section class="contact-bottom"><div><p>Good things begin<br><em>with a hello.</em></p><span>DIVINE GRACE · IMPORT · EXPORT</span></div><a class="button button-green" href="${wa}" target="_blank" rel="noreferrer">Say hello <span>↗</span></a></section>
    </main>`;
}

const pages = {
  '/': { title: 'Divine Grace — Importer Exporter', render: homePage },
  '/products': { title: 'Products — Divine Grace', render: productsPage },
  '/about': { title: 'Our Story — Divine Grace', render: aboutPage },
  '/contact': { title: 'Contact — Divine Grace', render: contactPage },
};

function bindNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  toggle?.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('is-open', !isOpen);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  }));
  const search = document.querySelector('#product-search');
  search?.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    const cards = [...document.querySelectorAll('.product-grid .product-card, .storefront-featured .storefront-tile')];
    cards.forEach((card) => { card.hidden = query !== '' && !card.textContent.toLocaleLowerCase().includes(query); });
    document.querySelectorAll('.product-group').forEach((group) => {
      group.hidden = [...group.querySelectorAll('.product-card')].every((card) => card.hidden);
    });
    const noResults = document.querySelector('.search-empty');
    if (noResults) noResults.hidden = query === '' || [...document.querySelectorAll('.product-group')].some((group) => !group.hidden);
  });
}

function render(path = window.location.pathname, focusHeading = false) {
  const route = pages[path] ? path : '/';
  document.title = pages[route].title;
  app.innerHTML = `${header(route)}${pages[route].render()}${footer()}`;
  bindNavigation();
  if (focusHeading) requestAnimationFrame(() => {
    const heading = document.querySelector('main h1');
    heading?.setAttribute('tabindex', '-1');
    heading?.focus({ preventScroll: true });
  });
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || !pages[url.pathname]) return;
  if (url.pathname === window.location.pathname && url.hash) return;
  event.preventDefault();
  if (url.pathname === window.location.pathname) return;
  history.pushState({}, '', url.pathname);
  render(url.pathname, true);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('popstate', () => {
  render(window.location.pathname);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

render();
