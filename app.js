/* ============================================================
   FoxSafe Dashboard — Fox Group Quarries
   Data sourced from the OneDrive folder "Fox Group Quarries"
   ============================================================ */

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
});

/* ---------- Clock ---------- */
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const date = now.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
  });
  const t = document.getElementById('clock-time');
  const d = document.getElementById('clock-date');
  if (t) t.textContent = time;
  if (d) d.textContent = date;
}
updateClock();
setInterval(updateClock, 30 * 1000);

/* ============================================================
   DATA — Fox Group Quarries
   ============================================================ */

/* ---------- Quarry sites ---------- */
const sites = [
  {
    id: 'tong',
    name: 'Tong Quarry',
    location: 'Tong, West Yorkshire',
    tag: 'Full register',
    accent: 'navy',
    induction: 'https://docs.google.com/forms/d/1L3oJSCpc3rk98vkRWTtuqEvGGEN-tgccMxJJDDaTSyA/viewform',
    docs: [
      { label: 'Risk assessments (PDF)', href: 'docs/Tong-Quarry-Risk-Assessments.pdf' },
      { label: 'Safe system of works (PDF)', href: 'docs/Tong-Quarry-Safe-System-of-Works.pdf' },
      { label: 'Induction sheet (DOCX)', href: 'docs/Tong-Quarry-Induction.docx' },
    ],
  },
  {
    id: 'ellel',
    name: 'Ellel Crag Quarry',
    location: 'Ellel, Lancashire',
    tag: 'Induction live',
    accent: 'amber',
    induction: 'https://docs.google.com/forms/d/1dJ7p06bKG-Jfy8ELKhhFi62ylU1HRssV0GfCmx2DP2M/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Ellel-Crag-Quarry-Induction.docx' }],
  },
  {
    id: 'lydiate',
    name: 'Lydiate Lane Quarry',
    location: 'Lydiate Lane, Lancashire',
    tag: 'Induction live',
    accent: 'amber',
    induction: 'https://docs.google.com/forms/d/12l9MSv4qyMev74lSeiH3Lgmqt4hUXgs2-D1zaUgdxI4/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Lydiate-Lane-Quarry-Induction.docx' }],
  },
  {
    id: 'bradleys',
    name: "Bradley's Sandpit Quarry",
    location: "Bradley's Sandpit",
    tag: 'Induction live',
    accent: 'lime',
    induction: 'https://docs.google.com/forms/d/1tHtLuZOtqh1YnS6wSHUu0W6l8nOZRDyDI8WMnuBlJH8/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Bradleys-Sandpit-Quarry-Induction.docx' }],
  },
  {
    id: 'woods',
    name: 'Woods Waste Landfill',
    location: 'Woods Waste',
    tag: 'Induction live',
    accent: 'navy',
    induction: 'https://docs.google.com/forms/d/1t9CIssftUjghLSKHpSeT-K4PmqpDUOWpm-GJqWiEQlM/viewform',
    docs: [{ label: 'Induction sheet (DOCX)', href: 'docs/Woods-Waste-Induction.docx' }],
  },
];

/* ---------- Risk assessments (Tong Quarry register) ---------- */
const riskAssessments = {
  Plant: [
    { code: 'P001', title: 'Operating 360 Excavator', doc: 'docs/RA-P001.pdf' },
    { code: 'P002', title: 'Operating Dozer', doc: 'docs/RA-P002.pdf' },
    { code: 'P003', title: 'Operating Forward Tipping Dumper', doc: 'docs/RA-P003.pdf' },
    { code: 'P003A', title: 'Operating Tipping Dumper', doc: 'docs/RA-P003A.pdf' },
    { code: 'P004', title: 'Operating Articulated Dump Truck (ADT)', doc: 'docs/RA-P004.pdf' },
    { code: 'P005', title: 'Operating Roller', doc: 'docs/RA-P005.pdf' },
    { code: 'P006', title: 'Operating Tractor', doc: 'docs/RA-P006.pdf' },
    { code: 'P007', title: 'Operating Crusher', doc: 'docs/RA-P007.pdf' },
    { code: 'P008', title: 'Operating Loading Shovel', doc: 'docs/RA-P008.pdf' },
    { code: 'P009', title: 'Operating Road Sweeper', doc: 'docs/RA-P009.pdf' },
    { code: 'P010', title: 'Towable Water Bowser', doc: 'docs/RA-P010.pdf' },
    { code: 'P011', title: 'Towable Fuel Bowser', doc: 'docs/RA-P011.pdf' },
    { code: 'P012', title: 'Static Fuel Bowser', doc: 'docs/RA-P012.pdf' },
    { code: 'P014', title: 'Telehandler', doc: 'docs/RA-P014.pdf' },
    { code: 'P019', title: 'Operating Wash Plant', doc: 'docs/RA-P019.pdf' },
    { code: 'P020', title: 'Operating Screener', doc: 'docs/RA-P020.pdf' },
  ],
  Transport: [
    { code: 'T001', title: 'Loading Tipper Wagon', doc: 'docs/RA-T001.pdf' },
    { code: 'T002', title: 'Loading Forward Tipping Dumper', doc: 'docs/RA-T002.pdf' },
    { code: 'T003', title: 'Loading Articulated Dump Trucks (ADT)', doc: 'docs/RA-T003.pdf' },
    { code: 'T004', title: 'Driving Tipper Wagon (on site)', doc: 'docs/RA-T004.pdf' },
    { code: 'T005', title: 'Entry & Exit from Wagons', doc: 'docs/RA-T005.pdf' },
    { code: 'T006', title: 'Driving in Fox Group Yards', doc: 'docs/RA-T006.pdf' },
  ],
};

/* ---------- Safe Systems of Work (Tong Quarry set) ---------- */
const ssow = [
  { code: 'SSoW-008', title: 'The Use of Ride on Roller', doc: 'docs/SSoW-008.pdf' },
  { code: 'SSoW-009', title: 'The Use of Mobile Crusher', doc: 'docs/SSoW-009.pdf' },
  { code: 'SSoW-010', title: 'Repair of Vehicle Tyres', doc: 'docs/SSoW-010.pdf' },
  { code: 'SSoW-011', title: 'Recovery of Trapped Wagons', doc: 'docs/SSoW-011.pdf' },
  { code: 'SSoW-012', title: 'The Use of Screener', doc: 'docs/SSoW-012.pdf' },
  { code: 'SSoW-014', title: 'Securing Plant, Machinery & Attachments prior to Transportation', doc: 'docs/SSoW-014.pdf' },
  { code: 'SSoW-015', title: 'Tipping Loads', doc: 'docs/SSoW-015.pdf' },
  { code: 'SSoW-016', title: 'Loading Tipper Wagons', doc: 'docs/SSoW-016.pdf' },
  { code: 'SSoW-017', title: 'Loading & Unloading of Plant & Machinery', doc: 'docs/SSoW-017.pdf' },
  { code: 'SSoW-020', title: 'The Use of 360 Excavators', doc: 'docs/SSoW-020.pdf' },
  { code: 'SSoW-023', title: 'The Use of Excavators in Lifting Operations', doc: 'docs/SSoW-023.pdf' },
  { code: 'SSoW-029', title: 'The Use of Loading Shovels', doc: 'docs/SSoW-029.pdf' },
  { code: 'SSoW-047', title: 'The Use of Vehicles on Construction Sites', doc: 'docs/SSoW-047.pdf' },
  { code: 'SSoW-051', title: 'Managing Dust in Construction', doc: 'docs/SSoW-051.pdf' },
  { code: 'SSoW-057', title: 'Casting Over Quarry Face', doc: 'docs/SSoW-057.pdf' },
  { code: 'SSoW-063', title: 'Working in a Quarry', doc: 'docs/SSoW-063.pdf' },
];

/* ---------- Permits, Checks & Procedures ---------- */
const permits = {
  'Permits to Work': [
    { code: 'PTW', title: 'General Permit to Work', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20General' },
    { code: 'PTW-14', title: 'Working at Height Permit', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Working%20at%20Heights' },
    { code: 'PTW-15', title: 'Hot Works Permit', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Hot%20Works' },
    { code: 'PTW-16', title: 'Permit to Dig', doc: 'https://form.jotform.com/261662564334358?docType=Permit%20to%20Work%20%E2%80%94%20Dig' },
    { code: 'PTW-CS', title: 'Confined Space Permit', doc: 'docs/PTW-Confined-Space.pdf' },
  ],
  'Plant Check Sheets': [
    { code: 'CHK', title: 'Screener — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Screener' },
    { code: 'CHK', title: 'Excavator — Weekly Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Excavator' },
    { code: 'CHK', title: 'Loading Shovel — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Loading%20Shovel' },
    { code: 'CHK', title: 'Crusher — Daily Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Crusher' },
    { code: 'CHK', title: 'Dozer — Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Dozer' },
    { code: 'CHK', title: 'Dumper — Weekly Check Sheet', doc: 'https://form.jotform.com/261654049909365?machineType=Dumper' },
  ],
  'Incident & Reporting': [
    { code: 'INC', title: 'Accident & Near Miss Reporting Procedure (V6)', doc: 'docs/INC-Accident-Near-Miss-Procedure.pdf' },
    { code: 'INC', title: 'Accident / Incident Reporting Flowchart', doc: 'docs/INC-Reporting-Flowchart.pdf' },
    { code: 'INC', title: 'FoxSafe Near Miss Report Cover', doc: 'docs/INC-Near-Miss-Report-Cover.pdf' },
    { code: 'FORM', title: 'Accident Report Form (online)', doc: 'https://docs.google.com/forms/d/1BsH2HjnSzJb5k-JbbBRYr0VDPwfH5-vRsiHF07J3sCM/viewform' },
    { code: 'FORM', title: 'Near Miss Report Form 2025 (online)', doc: 'https://docs.google.com/forms/d/1aXyo6o193Vb45RH32ywvIikrofgyuIdU9o9o52u85is/viewform' },
  ],
  'Rules & Procedures': [
    { code: 'PRC', title: 'Daily Briefing (V2)', doc: 'https://form.jotform.com/261662564334358?docType=Daily%20Pre-Start%20Briefing' },
    { code: 'PRC', title: 'Surface Water Management Checklist', doc: 'https://form.jotform.com/261662564334358?docType=Surface%20Water%20Management%20Checklist' },
    { code: 'PRC', title: 'General Conduct Rules', doc: 'docs/PRC-General-Conduct-Rules.pdf' },
    { code: 'PRC', title: 'Vehicle Rules', doc: 'docs/PRC-Vehicle-Rules.pdf' },
    { code: 'PRC', title: 'Spill Response Procedure', doc: 'docs/PRC-Spill-Response.pdf' },
    { code: 'PRC', title: 'Safe Quarry (Master)', doc: 'docs/PRC-Safe-Quarry.pdf' },
  ],
};

/* ---------- Statutory Appointments — Reg 8(1)(d) ---------- */
const reg8 = [
  { code: 'REG 8', title: 'Tong Quarry — Supervisor Appointment', doc: 'docs/REG8-Tong-Quarry.pdf' },
  { code: 'REG 8', title: 'Ellel Crag Quarry — Supervisor Appointment', doc: 'docs/REG8-Ellel-Crag.pdf' },
  { code: 'REG 8', title: 'Lydiate Lane Quarry — Supervisor Appointment', doc: 'docs/REG8-Lydiate-Lane.pdf' },
  { code: 'REG 8', title: 'Woods Waste Landfill — Supervisor Appointment', doc: 'docs/REG8-Woods-Waste.pdf' },
];

/* ============================================================
   RENDERING
   ============================================================ */

function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* ---------- Site tiles ---------- */
function renderSites() {
  const grid = document.getElementById('site-grid');
  if (!grid) return;
  grid.innerHTML = sites
    .map((s) => {
      const docsHtml = s.docs
        .map(
          (d) =>
            `<li><a class="doc-link" href="${esc(d.href)}" target="_blank" rel="noopener">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
               ${esc(d.label)}
             </a></li>`,
        )
        .join('');
      return `
        <article class="site-card site-card--${esc(s.accent)}" role="listitem" data-search="${esc((s.name + ' ' + s.location).toLowerCase())}">
          <header class="site-card__head">
            <div>
              <h3 class="site-card__name">${esc(s.name)}</h3>
              <p class="site-card__loc">${esc(s.location)}</p>
            </div>
            <span class="site-card__tag">${esc(s.tag)}</span>
          </header>
          <ul class="site-card__docs">${docsHtml}</ul>
          <footer class="site-card__foot">
            <a class="btn btn--primary btn--sm" href="${esc(s.induction)}" target="_blank" rel="noopener">
              Open site induction
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
            </a>
          </footer>
        </article>`;
    })
    .join('');
}

/* ---------- Risk assessment groups ---------- */
function renderRA() {
  const wrap = document.getElementById('ra-groups');
  if (!wrap) return;
  const groups = Object.entries(riskAssessments)
    .map(([heading, items]) => {
      const cards = items
        .map(
          (r) => `
          <a class="ra-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.code)} ${esc(r.title)}">
            <span class="ra-card__code">${esc(r.code)}</span>
            <h4 class="ra-card__title">${esc(r.title)}</h4>
            <span class="card-doc-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
            </span>
          </a>`,
        )
        .join('');
      return `
        <section class="ra-group" data-group="${esc(heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(heading)}
            <span class="ra-group__count">${items.length}</span>
          </h3>
          <div class="grid grid--ra">${cards}</div>
        </section>`;
    })
    .join('');
  wrap.innerHTML = groups;
}

/* ---------- Permits, Checks & Procedures groups ---------- */
function renderPermits() {
  const wrap = document.getElementById('prm-groups');
  if (!wrap) return;
  const groups = Object.entries(permits)
    .map(([heading, items]) => {
      const cards = items
        .map(
          (r) => `
          <a class="ra-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.title)}">
            <span class="ra-card__code">${esc(r.code)}</span>
            <h4 class="ra-card__title">${esc(r.title)}</h4>
            <span class="card-doc-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
            </span>
          </a>`,
        )
        .join('');
      return `
        <section class="ra-group" data-group="${esc(heading.toLowerCase())}">
          <h3 class="ra-group__title">
            ${esc(heading)}
            <span class="ra-group__count">${items.length}</span>
          </h3>
          <div class="grid grid--ra">${cards}</div>
        </section>`;
    })
    .join('');
  wrap.innerHTML = groups;
}

/* ---------- Reg 8 Supervisor Appointments ---------- */
function renderReg8() {
  const grid = document.getElementById('reg8-grid');
  if (!grid) return;
  grid.innerHTML = reg8
    .map(
      (r) => `
      <a class="ssow-card" href="${esc(r.doc)}" target="_blank" rel="noopener" data-search="${esc((r.code + ' ' + r.title).toLowerCase())}" aria-label="Open ${esc(r.title)}">
        <span class="ssow-card__code">${esc(r.code)}</span>
        <h4 class="ssow-card__title">${esc(r.title)}</h4>
        <span class="card-doc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
        </span>
      </a>`,
    )
    .join('');
}

/* ---------- SSoW tiles ---------- */
function renderSSoW() {
  const grid = document.getElementById('ssow-grid');
  if (!grid) return;
  grid.innerHTML = ssow
    .map(
      (s) => `
      <a class="ssow-card" href="${esc(s.doc)}" target="_blank" rel="noopener" data-search="${esc((s.code + ' ' + s.title).toLowerCase())}" aria-label="Open ${esc(s.code)} ${esc(s.title)}">
        <span class="ssow-card__code">${esc(s.code)}</span>
        <h4 class="ssow-card__title">${esc(s.title)}</h4>
        <span class="card-doc-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>
        </span>
      </a>`,
    )
    .join('');
}

/* ---------- Induction tiles ---------- */
function renderInductions() {
  const grid = document.getElementById('ind-grid');
  if (!grid) return;
  grid.innerHTML = sites
    .map(
      (s) => `
      <article class="ind-card ind-card--${esc(s.accent)}">
        <div class="ind-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3"/>
          </svg>
        </div>
        <div class="ind-card__body">
          <h4 class="ind-card__name">${esc(s.name)}</h4>
          <p class="ind-card__hint">Scan the QR at the gate or open the form below.</p>
          <a class="btn btn--ghost btn--sm" href="${esc(s.induction)}" target="_blank" rel="noopener">
            Open induction form
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7"/><path d="M8 7h9v9"/></svg>
          </a>
        </div>
      </article>`,
    )
    .join('');
}

/* ============================================================
   SEARCH FILTERS
   ============================================================ */
function wireFilter(inputId, itemSelector, groupSelector) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll(itemSelector).forEach((el) => {
      const hay = el.dataset.search || el.textContent.toLowerCase();
      el.style.display = !q || hay.includes(q) ? '' : 'none';
    });
    if (groupSelector) {
      document.querySelectorAll(groupSelector).forEach((group) => {
        const visible = group.querySelectorAll(`${itemSelector}:not([style*="display: none"])`);
        group.style.display = visible.length ? '' : 'none';
      });
    }
  });
}

/* ============================================================
   INIT
   ============================================================ */
renderSites();
renderRA();
renderSSoW();
renderPermits();
renderReg8();
renderInductions();

wireFilter('site-search', '.site-card');
wireFilter('ra-search', '#ra-groups .ra-card', '#ra-groups .ra-group');
wireFilter('ssow-search', '#ssow-grid .ssow-card');
wireFilter('prm-search', '#prm-groups .ra-card', '#prm-groups .ra-group');
wireFilter('reg8-search', '#reg8-grid .ssow-card');

/* Active nav-link on scroll */
const sections = ['sites', 'ra', 'ssow', 'permits', 'reg8', 'inductions']
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.app-nav__link');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' },
);
sections.forEach((s) => io.observe(s));
