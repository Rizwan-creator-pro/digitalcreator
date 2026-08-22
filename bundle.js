// ============================================================
// BUNDLE PAGE CONTROLLER
// This page is a hybrid: /bundle.html?product=<id> renders exactly
// one product's detail page (hero, code sections, pricing, tech —
// no guide, that lives on guide.html). /bundle.html with no product
// param renders the combined two-product bundle offer instead.
// Everything below reads PRODUCTS from data.js — there is no
// per-product HTML anywhere in this file or bundle.html.
// ============================================================

const params = new URLSearchParams(location.search);
const requestedId = params.get('product');
const activeProduct = requestedId ? PRODUCTS_BY_ID[requestedId] : null;

if (activeProduct) {
  renderSingleProduct(activeProduct);
} else {
  renderBundle();
}

document.getElementById('yr').textContent = new Date().getFullYear();
window.addEventListener('load', () => {
  document.querySelectorAll('.float-btn').forEach((btn, i) => {
    setTimeout(() => btn.classList.add('ready'), 400 + i * 80);
  });
});
refreshRevealObserver();

/* ====================================================================
   SINGLE-PRODUCT MODE
   ==================================================================== */
function renderSingleProduct(product) {
  setAccent(product);

  document.getElementById('pageTitle').textContent = `${product.name} | Digital Creator`;
  document.getElementById('pageDesc').setAttribute('content', product.lede);
  document.getElementById('tbSuffix').textContent = `— ${product.name}`;

  document.getElementById('heroEyebrow').textContent = product.eyebrow;
  document.getElementById('heroTitle').innerHTML = product.titleHtml;
  document.getElementById('heroLede').textContent = product.lede;
  document.getElementById('heroStats').innerHTML = renderStats(product.stats);
  document.getElementById('heroImg').src = product.boxImage;
  document.getElementById('heroImg').alt = product.name;
  document.getElementById('heroTag').innerHTML = product.heroTag;
  document.getElementById('ctaBuyLabel').textContent = `Buy ${product.name}`;

  const guideHref = `guide.html?product=${product.id}`;
  document.getElementById('tbGuideLink').href = guideHref;
  document.getElementById('ctaGuideLink').href = guideHref;
  document.getElementById('calloutGuideLink').href = guideHref;
  document.getElementById('footerGuideLink').href = guideHref;

  document.getElementById('productContent').innerHTML = `
    <div class="product-quickstart-head">
      ${renderAllCodeSections(product)}
    </div>`;

  document.getElementById('pricing').innerHTML = `
    <div class="section-label reveal">Get It</div>
    <h2 class="section-title reveal">Pricing</h2>
    <p class="section-sub reveal">Buy the file outright and wire it in yourself, or have it installed and configured against your actual report.</p>
    ${renderPricing(product)}`;

  document.getElementById('techHeading').textContent = 'What Powers It';
  document.getElementById('techChips').innerHTML = renderTechChips(product.techStack);
  document.getElementById('footerTag').textContent =
    `Oracle APEX developer — this page covers ${product.name}, one of several APEX utilities I've built for production use.`;
}

/* ====================================================================
   BUNDLE MODE — both products, combined offer
   ==================================================================== */
function renderBundle() {
  setAccent(null); // site's default green — no single product should dominate

  const names = PRODUCTS.map(p => p.name).join(' + ');
  document.getElementById('pageTitle').textContent = `Bundle — ${names} | Digital Creator`;
  document.getElementById('pageDesc').setAttribute('content',
    `Every Oracle APEX tool, one price — ${names}, bundled together.`);
  document.getElementById('tbSuffix').textContent = '— Bundle';

  document.getElementById('heroEyebrow').textContent = 'Oracle APEX Bundle';
  document.getElementById('heroTitle').innerHTML =
    PRODUCTS.map(p => p.name).join('<br>+ ') + '<em>.</em>';
  document.getElementById('heroLede').textContent =
    'Every tool, one price. ' + PRODUCTS.map(p => p.lede).join(' ');
  document.getElementById('ctaBuyLabel').textContent = 'Buy the Bundle';
  document.getElementById('heroImg').src = 'image/pdf-engine-formating-classic-report.png';
  document.getElementById('heroImg').alt = 'Bundle';
  document.getElementById('heroTag').innerHTML =
    `${PRODUCTS.length} tools <b>·</b> 1 checkout <b>·</b> full source, all included`;

  // Bundle savings computed live from PRODUCTS pricing — never a stale
  // hand-typed number that drifts once a product's price changes.
  const individualTotal = PRODUCTS.reduce((sum, p) => sum + p.pricing[0].priceUSD, 0);
  const bundlePrice = Math.round(individualTotal * 0.67); // 33% off, rounded
  const savingsPct = Math.round((1 - bundlePrice / individualTotal) * 100);

  document.getElementById('heroStats').innerHTML = `
    <div><div class="stat-number">${PRODUCTS.length}</div><div class="stat-label">Products</div></div>
    <div><div class="stat-number">${PRODUCTS.reduce((s,p)=>s+p.guideSections.reduce((a,g)=>a+g.items.length,0),0)}</div><div class="stat-label">Params + Functions</div></div>
    <div><div class="stat-number">${savingsPct}%</div><div class="stat-label">Bundle Savings</div></div>`;

  document.getElementById('tbGuideLink').href = 'guide.html';
  document.getElementById('ctaGuideLink').href = 'guide.html';
  document.getElementById('calloutGuideLink').href = 'guide.html';
  document.getElementById('footerGuideLink').href = 'guide.html';

  // One "Quick Start" block per product, each showing that product's
  // own code sections — however many it has.
  document.getElementById('productContent').innerHTML = PRODUCTS.map((p, i) => `
    <div class="product-quickstart-head" style="${i > 0 ? 'margin-top:3rem;padding-top:3rem;border-top:1px solid var(--line)' : ''}">
      <div class="section-label reveal">Product ${i + 1}</div>
      <h2 class="section-title reveal">${p.name}</h2>
      <p class="section-sub reveal">${p.lede} <a href="guide.html?product=${p.id}" style="color:var(--accent-deep);font-weight:600">Full guide →</a></p>
      ${renderAllCodeSections(p)}
    </div>
  `).join('');

  const includesHtml = PRODUCTS.map(p =>
    `<li><i class="fa-solid fa-check"></i> ${p.name} — full source, ${p.stats[0].n} ${p.stats[0].l.toLowerCase()}</li>`
  ).join('');

  // <a href="https://gumroad.com/l/YOUR-BUNDLE-GUMROAD-SLUG" target="_blank" class="btn-primary green"><i class="fa-brands fa-gumroad"></i> Buy the Bundle on Gumroad</a>
  document.getElementById('pricing').innerHTML = `
    <div class="bundle-pricing reveal">
      <div class="savings-badge"><i class="fa-solid fa-tag"></i> Save $${individualTotal - bundlePrice} vs. buying separately</div>
      <div class="section-title" style="color:#fff;font-size:clamp(1.6rem,3.2vw,2.1rem)">The Complete Bundle</div>
      <div class="bp-price-row">
        <span class="bp-old-price">$${individualTotal}</span>
        <span class="bp-new-price">$${bundlePrice}</span>
      </div>
      <div class="bp-price-note">ONE-TIME · ALL ${PRODUCTS.length} SCRIPTS · FULL SOURCE</div>
      <ul class="bundle-includes">
        ${includesHtml}
        <li><i class="fa-solid fa-check"></i> Unlimited use across your own apps</li>
        <li><i class="fa-solid fa-check"></i> Full guide for everything, hosted and updated</li>
        <li><i class="fa-solid fa-check"></i> Email support for setup questions</li>
      </ul>
      <div class="bundle-cta-row">
        <a href="mailto:rizwan@digitalcreator.tech?subject=Bundle%20—%20Implementation%20Request&body=Hi%20Rizwan%2C%0A%0AI'd%20like%20all%20tools%20set%20up%20on%20my%20reports.%0A%0AAPEX%20version%3A%0AReport%20region(s)%3A%0ANotes%3A" class="btn-primary green"><i class="fa-solid fa-envelope"></i> Order Implementation</a>
      </div>
    </div>

    <div class="purchase-guide reveal">
      <div class="pg-title">How to Purchase</div>
      <div class="pg-steps">
        <div class="pg-step">
          <div class="pg-step-n">1</div>
          <div class="pg-step-t">Buy the bundle</div>
          <div class="pg-step-d">One checkout gets you every tool — no need to buy each separately.</div>
        </div>
        <div class="pg-step">
          <div class="pg-step-n">2</div>
          <div class="pg-step-t">Read the guide</div>
          <div class="pg-step-d">Every parameter and function for every tool is documented in one place — see the full guide.</div>
        </div>
        <div class="pg-step">
          <div class="pg-step-n">3</div>
          <div class="pg-step-t">Wire it in, or ask me to</div>
          <div class="pg-step-d">Self-install with the guide, or email me for implementation on your actual reports.</div>
        </div>
      </div>
      <div class="pg-contact">
        <div class="pg-contact-t">Questions before you buy?</div>
        <div class="pg-contact-row">
          <a href="mailto:rizwan@digitalcreator.tech" class="footer-pill dark"><i class="fa-solid fa-envelope"></i> rizwan@digitalcreator.tech</a>
          <a href="https://wa.me/923290734849" target="_blank" class="footer-pill dark"><i class="fa-brands fa-whatsapp"></i> +92 329 073 4849</a>
        </div>
      </div>
    </div>`;

  document.getElementById('techHeading').textContent = 'Combined Stack';
  const allTech = [...new Set(PRODUCTS.flatMap(p => p.techStack))];
  document.getElementById('techChips').innerHTML = renderTechChips(allTech);
  document.getElementById('footerTag').textContent =
    `Oracle APEX developer — this bundle covers every tool I've built for production reporting.`;
}
