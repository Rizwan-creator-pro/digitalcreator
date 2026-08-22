// ============================================================
// SHARED RENDER LIBRARY
// Pure functions that turn PRODUCTS data (data.js) into HTML
// strings, plus a few delegated event handlers that work on
// content injected at any point after page load. No page-specific
// logic lives here — index.html / bundle.html / guide.html each
// call into this file, never the other way around.
// ============================================================

/* ---------- accent color ---------------------------------------------
   Sets the three --accent* custom properties on <html> so every rule
   already written against var(--accent-deep) etc. in style.css just
   picks up the right color — no per-product CSS file, ever.
   Pass null to reset to the site's default green (used for the combined
   bundle view, where no single product's identity should dominate). */
function setAccent(product) {
  const root = document.documentElement.style;
  if (product) {
    root.setProperty('--accent', product.accent);
    root.setProperty('--accent-deep', product.accentDeep);
    root.setProperty('--accent-dim', product.accentDim);
  } else {
    root.removeProperty('--accent');
    root.removeProperty('--accent-deep');
    root.removeProperty('--accent-dim');
  }
}

/* ---------- small building blocks -------------------------------- */

function renderStats(stats) {
  return stats.map(s =>
    `<div><div class="stat-number">${s.n}</div><div class="stat-label">${s.l}</div></div>`
  ).join('');
}

function renderTechChips(techStack) {
  const iconMap = {
    'JavaScript (ES6+)': 'fa-brands fa-js',
    'jQuery': 'fa-brands fa-square-js',
    'jsPDF': 'fa-solid fa-file-pdf',
    'jspdf-autotable': 'fa-solid fa-table',
    'SweetAlert2': 'fa-solid fa-bell',
    'Oracle APEX': 'fa-solid fa-database',
    'PL/SQL': 'fa-solid fa-code',
    'ORDS / REST': 'fa-solid fa-diagram-project',
    'HTML5': 'fa-brands fa-html5',
    'CSS3': 'fa-brands fa-css3-alt'
  };
  return techStack.map(t =>
    `<span class="tool-chip"><i class="${iconMap[t] || 'fa-solid fa-cube'}"></i>${t}</span>`
  ).join('');
}

/* ---------- code sections ------------------------------------------
   A product's codeSections array can be any length — one product might
   ship a single "steps + snippet" card, another might have five
   "Call Syntax" blocks plus a combined recap. This just loops over
   whatever's there; it never assumes a fixed count. */
function renderCodeSection(section, uid, idx) {
  if (section.kind === 'steps') {
    const stepsHtml = section.steps.map((s, i) => `
      <div class="qs-step reveal">
        <div class="qs-step-n">${i + 1}</div>
        <div>
          <div class="qs-step-t">${s.title}</div>
          <div class="qs-step-d">${s.desc}</div>
        </div>
      </div>`).join('');
    return `
      <div class="qs-card">
        <div class="qs-steps">${stepsHtml}</div>
        <div class="qs-code reveal"><pre>${section.codeHtml}</pre></div>
      </div>`;
  }

  // 'full' or 'inline' — a titled, copyable code block
  const codeId = `code_${uid}_${idx}`;
  const btnId  = `copy_${uid}_${idx}`;
  const header = section.title ? `
    <div class="qs-full-head">
      <div>
        <div class="qs-full-title">${section.title}</div>
        ${section.sub ? `<div class="qs-full-sub">${section.sub}</div>` : ''}
      </div>
      <button class="copy-btn" id="${btnId}" type="button" data-copy-target="${codeId}">
        <i class="fa-regular fa-copy"></i> <span>Copy Code</span>
      </button>
    </div>` : '';

  return `
    <div class="qs-full reveal" style="margin-top:1.4rem">
      ${header}
      <div class="qs-code qs-code-full"><pre id="${codeId}">${section.codeHtml}</pre></div>
    </div>`;
}

function renderAllCodeSections(product) {
  return product.codeSections.map((s, i) => renderCodeSection(s, product.id, i)).join('\n');
}

/* ---------- guide sections -------------------------------------------
   Same principle: a product can have 4 guide groups or 6, each group
   can have 4 or 5 accordion items — the markup adapts to whatever
   length is actually in the data. */
function renderGuideGroup(group, product) {
  const itemsHtml = group.items.map((item, i) => `
    <button class="acc-item${i === 0 ? ' active' : ''}" type="button">
      <div class="acc-item-head">
        <span class="acc-item-title">${item.title}<span class="acc-item-param">${item.param}</span></span>
        <i class="fa-solid fa-plus acc-item-icon"></i>
      </div>
      <div class="acc-item-body">${item.body}</div>
    </button>`).join('');

  return `
    <div class="guide-block" id="${group.id}" data-product="${product.id}">
      <div class="section-label reveal">${group.label}</div>
      <h3 class="section-title reveal" style="font-size:clamp(1.5rem,3vw,2rem)">${group.title}</h3>
      ${group.sub ? `<p class="section-sub reveal">${group.sub}</p>` : ''}
      <div class="acc-feature reveal"><div class="acc-list">${itemsHtml}</div></div>
    </div>`;
}

function renderAllGuideGroups(product) {
  return product.guideSections.map(g => renderGuideGroup(g, product)).join('\n');
}

/* ---------- pricing card ------------------------------------------ */
function renderPriceCard(card) {
  const cls = 'price-card' + (card.featured ? ' price-card-featured' : '') + ' reveal';
  const badgeCls = 'price-badge' + (card.featured ? ' featured' : '');
  const items = card.items.map(t => `<li><i class="fa-solid fa-check"></i>${t}</li>`).join('');
  return `
    <div class="${cls}">
      <div class="${badgeCls}">${card.badge}</div>
      <div class="price-amount">${card.amountHtml}</div>
      <div class="price-desc">${card.descHtml}</div>
      <ul class="price-list">${items}</ul>
      <a href="${card.ctaHref}" class="btn-primary price-cta" ${card.ctaHref.startsWith('http') ? 'target="_blank"' : ''}>
        <i class="${card.ctaIcon || 'fa-solid fa-cart-shopping'}"></i> ${card.ctaText}
      </a>
    </div>`;
}

function renderPricing(product) {
  return `<div class="price-grid">${product.pricing.map(renderPriceCard).join('')}</div>`;
}

/* ---------- product card (index.html) ------------------------------ */
function renderProductCard(product) {
  const searchBlob = [
    product.name, product.lede, product.eyebrow,
    (product.techStack || []).join(' '),
    (product.guideSections || []).map(g => g.title).join(' ')
  ].join(' ').toLowerCase();

  const mainStat = product.stats[0];
  const price = product.pricing && product.pricing[0] ? product.pricing[0].amountHtml.match(/\$\d+/)?.[0] : '';

  return `
    <div class="product-card" data-search="${searchBlob.replace(/"/g, '&quot;')}">
      <a href="bundle.html?product=${product.id}" class="pc-media">
        <img src="${product.boxImage}" alt="${product.name}" loading="lazy" onerror="this.src='https://i.ibb.co/JfbkpdN/Thumbnail.png'">
      </a>
      <div class="pc-body">
        <div class="pc-eyebrow">${product.eyebrow}</div>
        <h3 class="pc-title"><a href="bundle.html?product=${product.id}">${product.name}</a></h3>
        <p class="pc-desc">${product.lede}</p>
        <div class="pc-meta">
          <span class="pc-stat">${mainStat.n} ${mainStat.l}</span>
          <span class="pc-price">From ${price}</span>
        </div>
        <a href="bundle.html?product=${product.id}" class="btn-primary pc-cta">View Product <i class="fa-solid fa-arrow-right"></i></a>
      </div>
    </div>`;
}

/* ---------- delegated events ----------------------------------------
   Everything above injects HTML after the initial page load, so
   listeners are attached to a static ancestor (document.body) instead
   of to individual elements — this way newly-rendered accordions and
   copy buttons work immediately with no re-wiring step required. */
document.addEventListener('click', (e) => {
  const accItem = e.target.closest('.acc-item');
  if (accItem) { accItem.classList.toggle('active'); return; }

  const copyBtn = e.target.closest('.copy-btn[data-copy-target]');
  if (copyBtn) {
    const pre = document.getElementById(copyBtn.dataset.copyTarget);
    if (!pre) return;
    navigator.clipboard.writeText(pre.innerText).then(() => {
      const label = copyBtn.querySelector('span');
      const original = label.textContent;
      copyBtn.classList.add('copied');
      label.textContent = 'Copied!';
      setTimeout(() => { copyBtn.classList.remove('copied'); label.textContent = original; }, 1800);
    });
  }
});

/* ---------- scroll reveal --------------------------------------------
   Re-runnable: call refreshRevealObserver() any time new .reveal
   elements are injected (e.g. after switching guide tabs), since the
   original IntersectionObserver only saw elements present at the time
   it was created. */
let _revealObs = null;
function refreshRevealObserver() {
  if (!_revealObs) {
    _revealObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('visible'); _revealObs.unobserve(en.target); }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });
  }
  document.querySelectorAll('.reveal:not(.visible)').forEach((el, i) => {
    if (!el.dataset.revealBound) {
      el.style.transitionDelay = (i % 5) * 0.05 + 's';
      el.dataset.revealBound = '1';
    }
    _revealObs.observe(el);
  });
}
