/**
 * house-ui — Zero-dep component library extracted from house.css
 * Used by: recoup, fiduciary, kay-kay, regent, proofsheet, holdfast, hub
 * No framework, no build step. Just import in browser.
 */

// ─── Design tokens (mirror house.css :root) ───
export const tokens = {
  colors: {
    ink: '#06090F',
    panel: 'rgba(15, 23, 35, 0.6)',
    panelSolid: '#0F1723',
    line: 'rgba(31, 42, 55, 0.6)',
    text: '#E6EDF3',
    muted: '#7B8A9E',
    accent: '#4CC38A',
    accentGlow: 'rgba(76, 195, 138, 0.15)',
    warn: '#E3B341',
    danger: '#F85149',
    info: '#6E9BF7',
  },
  radius: '16px',
  radiusSm: '8px',
  radiusPill: '999px',
  mono: "'SF Mono', 'Cascadia Code', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  sans: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  shadow: {
    sm: '0 2px 8px rgba(0,0,0,0.2)',
    md: '0 8px 24px rgba(0,0,0,0.3)',
    lg: '0 16px 48px rgba(0,0,0,0.35)',
  },
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  transitionSlow: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
};

// ─── Utility ───
export function $(sel, root = document) { return root.querySelector(sel); }
export function $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
export function el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }
export function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
export function formatNumber(n) { return new Intl.NumberFormat().format(n); }
export function formatCurrency(paise) { return '₹' + (paise / 100).toLocaleString('en-IN'); }
export function formatUSD(microUsd) { return '$' + (microUsd / 1_000_000).toFixed(4); }
export function formatTime(ts) { return new Date(ts).toLocaleTimeString(); }
export function formatDateTime(ts) { return new Date(ts).toLocaleString(); }

// ─── Component: Chip ───
export function Chip({ text, variant = 'default', onClick }) {
  const variants = {
    default: 'border-color: var(--line); color: var(--muted); background: var(--panel);',
    ok: 'border-color: rgba(34,197,94,0.4); color: var(--ok); background: rgba(34,197,94,0.06);',
    warn: 'border-color: rgba(245,154,11,0.4); color: var(--warn); background: rgba(245,154,11,0.06);',
    danger: 'border-color: rgba(239,68,68,0.4); color: var(--danger); background: rgba(239,68,68,0.06);',
    accent: 'border-color: rgba(76,195,138,0.4); color: var(--accent); background: rgba(76,195,138,0.06);',
    info: 'border-color: rgba(110,155,247,0.4); color: var(--info); background: rgba(110,155,247,0.06);',
    tierS: 'border-color: rgba(76,195,138,0.4); color: var(--accent); background: rgba(76,195,138,0.06);',
    tierA: 'border-color: rgba(227,179,65,0.4); color: var(--warn); background: rgba(227,179,65,0.06);',
    tierB: 'border-color: rgba(110,155,247,0.4); color: var(--info); background: rgba(110,155,247,0.06);',
  };
  const btn = el(`<button class="chip" style="${variants[variant] || variants.default}">${text}</button>`);
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
}

// ─── Component: Stat Card ───
export function StatCard({ label, value, variant = 'default', icon }) {
  const variantStyles = {
    default: 'color: var(--text);',
    accent: 'color: var(--accent);',
    ok: 'color: var(--ok);',
    warn: 'color: var(--warn);',
    danger: 'color: var(--danger);',
    info: 'color: var(--info);',
  };
  return el(`
    <div class="stat" style="background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 18px 24px; min-width: 140px; text-align: center;">
      <div class="stat-value" style="font-family: var(--mono); font-size: 28px; font-weight: 700; ${variantStyles[variant] || variantStyles.default}">${value}</div>
      <div class="stat-label" style="font-size: 12px; color: var(--muted); margin-top: 4px; text-transform: uppercase; letter-spacing: .5px;">${label}</div>
    </div>
  `);
}

// ─── Component: Panel (Glass Card) ───
export function Panel({ title, children, tier, href, className = '' }) {
  const tierBadges = {
    S: '<span style="font: 11px/1 var(--mono); padding: 3px 8px; border-radius: 6px; font-weight: 600; background: rgba(76,195,138,0.12); color: var(--accent);">S</span>',
    A: '<span style="font: 11px/1 var(--mono); padding: 3px 8px; border-radius: 6px; font-weight: 600; background: rgba(227,179,65,0.12); color: var(--warn);">A</span>',
    B: '<span style="font: 11px/1 var(--mono); padding: 3px 8px; border-radius: 6px; font-weight: 600; background: rgba(110,155,247,0.12); color: var(--info);">B</span>',
  };
  const card = el(`
    <article class="panel reveal" style="background: var(--panel); border: 1px solid var(--line); border-radius: 16px; padding: 28px; backdrop-filter: blur(12px); transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; ${className}">
      ${tier ? `<h3 style="margin: 0 0 10px; font-size: 18px; font-weight: 700; display: flex; align-items: center; gap: 10px;">${title} ${tierBadges[tier] || ''}</h3>` : `<h3 style="margin: 0 0 10px; font-size: 18px; font-weight: 700;">${title}</h3>`}
      <div class="panel-content" style="color: var(--muted); font-size: 14.5px; line-height: 1.65;"></div>
      ${href ? `<a class="panel-link" href="${href}" style="display: inline-flex; align-items: center; gap: 6px; margin-top: 16px; font-size: 14px; font-weight: 600; color: var(--accent); transition: gap 0.2s;">View repository <span>→</span></a>` : ''}
    </article>
  `);
  const content = card.querySelector('.panel-content');
  if (typeof children === 'string') content.innerHTML = children;
  else if (children instanceof Node) content.appendChild(children);
  else if (Array.isArray(children)) children.forEach(c => content.appendChild(c));

  // Mouse glow effect
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });

  // Hover glow pseudo-element
  const style = document.createElement('style');
  style.textContent = `
    .panel::after {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(76,195,138,0.06), transparent 60%);
      opacity: 0; transition: opacity 0.3s; pointer-events: none;
    }
    .panel:hover { border-color: rgba(76,195,138,0.25); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.3); }
    .panel:hover::after { opacity: 1; }
  `;
  document.head.appendChild(style);

  return card;
}

// ─── Component: Data Table ───
export function DataTable({ columns, rows, emptyMessage = 'No data', sortable = false }) {
  const table = el(`
    <div style="overflow-x: auto;">
      <table style="width: 100%; border-collapse: collapse; font-size: 12px; font-family: var(--mono);">
        <thead>
          <tr style="border-bottom: 1px solid var(--line);">
            ${columns.map(c => `<th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid var(--line); color: var(--muted); font-weight: 600; font-size: 11px; text-transform: uppercase; letter-spacing: .5px; cursor: ${sortable ? 'pointer' : 'default'};">${c.label}</th>`).join('')}
          </tr>
        </thead>
        <tbody id="table-body">
          ${rows.length === 0 ? `<tr><td colspan="${columns.length}" style="padding: 24px; text-align: center; color: var(--muted);">${emptyMessage}</td></tr>` : rows.map(r => `<tr style="border-bottom: 1px solid var(--line);">${columns.map(c => `<td style="padding: 8px 12px; color: var(--text);">${r[c.key] ?? ''}</td>`).join('')}</tr>`).join('')}
        </tbody>
      </table>
    </div>
  `);

  if (sortable) {
    let sortCol = null, sortDir = 1;
    $$('th', table).forEach((th, i) => {
      th.addEventListener('click', () => {
        if (sortCol === i) sortDir *= -1; else { sortCol = i; sortDir = 1; }
        const key = columns[i].key;
        rows.sort((a, b) => {
          const av = a[key], bv = b[key];
          if (av < bv) return -1 * sortDir;
          if (av > bv) return 1 * sortDir;
          return 0;
        });
        render();
      });
    });
  }

  function render() {
    const tbody = $('#table-body', table);
    tbody.innerHTML = rows.length === 0
      ? `<tr><td colspan="${columns.length}" style="padding: 24px; text-align: center; color: var(--muted);">${emptyMessage}</td></tr>`
      : rows.map(r => `<tr style="border-bottom: 1px solid var(--line);">${columns.map(c => `<td style="padding: 8px 12px; color: var(--text);">${r[c.key] ?? ''}</td>`).join('')}</tr>`).join('');
  }

  return { element: table, setRows: (newRows) => { rows.length = 0; rows.push(...newRows); render(); } };
}

// ─── Component: Modal ───
export function Modal({ title, children, onClose, primaryAction, secondaryAction }) {
  const overlay = el(`
    <div class="modal-backdrop" style="position: fixed; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000; opacity: 0; pointer-events: none; transition: opacity 0.2s;">
      <div class="modal" style="background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 28px; max-width: 480px; width: 90%; max-height: 80vh; overflow-y: auto;">
        <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">${title}</h3>
        <div class="modal-content"></div>
        <div class="modal-actions" style="display: flex; gap: 12px; margin-top: 20px; justify-content: flex-end;"></div>
      </div>
    </div>
  `);

  const modal = overlay.querySelector('.modal');
  const content = modal.querySelector('.modal-content');
  const actions = modal.querySelector('.modal-actions');

  if (typeof children === 'string') content.innerHTML = children;
  else if (children instanceof Node) content.appendChild(children);
  else if (Array.isArray(children)) children.forEach(c => content.appendChild(c));

  if (secondaryAction) {
    const btn = el(`<button class="btn-secondary" style="background: transparent; border: 1px solid var(--line); color: var(--muted); padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;">${secondaryAction.label}</button>`);
    btn.addEventListener('click', () => { secondaryAction.onClick?.(); close(); });
    actions.appendChild(btn);
  }
  if (primaryAction) {
    const btn = el(`<button class="btn-primary" style="background: var(--accent); color: #06251A; border: 0; padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer;">${primaryAction.label}</button>`);
    btn.addEventListener('click', () => { primaryAction.onClick?.(); close(); });
    actions.appendChild(btn);
  }

  function open() {
    document.body.appendChild(overlay);
    requestAnimationFrame(() => { overlay.style.opacity = '1'; overlay.style.pointerEvents = 'auto'; });
  }
  function close() {
    overlay.style.opacity = '0'; overlay.style.pointerEvents = 'none';
    setTimeout(() => overlay.remove(), 200);
    onClose?.();
  }
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); }, { once: true });

  return { open, close, element: overlay };
}

// ─── Component: Toast ───
export function toast(message, variant = 'info', duration = 3000) {
  const container = $('#toast-container') || (() => { const c = el('<div id="toast-container" style="position: fixed; bottom: 24px; right: 24px; z-index: 2000; display: flex; flex-direction: column; gap: 8px;"></div>'); document.body.appendChild(c); return c; })();
  const variants = {
    info: 'border-left: 3px solid var(--info);',
    ok: 'border-left: 3px solid var(--ok);',
    warn: 'border-left: 3px solid var(--warn);',
    danger: 'border-left: 3px solid var(--danger);',
  };
  const t = el(`<div class="toast" style="background: var(--card); border: 1px solid var(--line); ${variants[variant]} border-radius: 8px; padding: 12px 16px; min-width: 240px; max-width: 400px; box-shadow: var(--shadow-lg); animation: slideIn 0.3s ease;">${message}</div>`);
  container.appendChild(t);
  setTimeout(() => { t.style.animation = 'slideOut 0.3s ease forwards'; setTimeout(() => t.remove(), 300); }, duration);
}

// ─── Component: Animated Counter ───
export function animateCounter(el, end, duration = 1200) {
  const start = 0;
  const startTime = performance.now();
  function tick(now) {
    const progress = clamp((now - startTime) / duration, 0, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = formatNumber(Math.floor(eased * (end - start) + start));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ─── Scroll Reveal ───
export function initScrollReveal(selector = '.reveal', options = {}) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px', ...options });
  $$(selector).forEach(el => observer.observe(el));
}

// ─── Copy to clipboard ───
export async function copyToClipboard(text) {
  await navigator.clipboard.writeText(text);
  toast('Copied!', 'ok');
}

// ─── API helper ───
export async function apiGet(url) {
  const r = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r.json();
}

export async function apiPost(url, body) {
  const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error(`${r.status} ${r.statusText}`);
  return r.json();
}

// ─── Keyframe styles (injected once) ───
if (!document.getElementById('house-ui-keyframes')) {
  const style = document.createElement('style');
  style.id = 'house-ui-keyframes';
  style.textContent = `
    @keyframes slideIn { from { opacity: 0; transform: translateX(100%); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100%); } }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
    @keyframes spin { to { transform: rotate(360deg); } }
    .animate-pulse { animation: pulse 1.5s ease-in-out infinite; }
    .animate-spin { animation: spin 1s linear infinite; }
  `;
  document.head.appendChild(style);
}

export default { tokens, Chip, StatCard, Panel, DataTable, Modal, toast, animateCounter, initScrollReveal, copyToClipboard, apiGet, apiPost, formatNumber, formatCurrency, formatUSD, formatTime, formatDateTime };