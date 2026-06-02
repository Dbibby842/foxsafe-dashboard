/* FoxSafe Dashboard — interactive layer */
(() => {
  "use strict";

  /* -------------------------------------------------------
   * 1. Theme toggle (dark default — Fox Group navy feel)
   * ----------------------------------------------------- */
  const root = document.documentElement;
  let currentTheme = "dark"; // sandbox blocks localStorage, keep in-memory
  root.setAttribute("data-theme", currentTheme);

  const sun = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>';
  const moon = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/></svg>';

  const themeBtn = document.querySelector("[data-theme-toggle]");
  const paintThemeBtn = () => {
    if (!themeBtn) return;
    themeBtn.innerHTML = currentTheme === "dark" ? sun : moon;
    themeBtn.setAttribute("aria-pressed", currentTheme === "light");
    themeBtn.title = currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  };
  paintThemeBtn();
  themeBtn?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", currentTheme);
    paintThemeBtn();
  });

  /* -------------------------------------------------------
   * 2. Clock — "Tue 2 Jun · 15:39 BST"
   * ----------------------------------------------------- */
  const nowEl = document.getElementById("now");
  const fmtNow = () => {
    if (!nowEl) return;
    const d = new Date();
    const dayName = d.toLocaleDateString("en-GB", { weekday: "short" });
    const day = d.getDate();
    const month = d.toLocaleDateString("en-GB", { month: "short" });
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    // Try to derive a short timezone abbreviation
    let tz = "";
    try {
      const parts = new Intl.DateTimeFormat("en-GB", { timeZoneName: "short" }).formatToParts(d);
      tz = parts.find(p => p.type === "timeZoneName")?.value || "";
    } catch (_) {}
    nowEl.textContent = `${dayName} ${day} ${month} · ${hh}:${mm}${tz ? " " + tz : ""}`;
  };
  fmtNow();
  setInterval(fmtNow, 30 * 1000);

  /* -------------------------------------------------------
   * 3. Risk-Assessment tiles (WF001 – WF041)
   * ----------------------------------------------------- */
  // band: low | mod | rev | act | stop
  const RA = [
    ["WF001", "Abrasive Wheels", "rev"],
    ["WF002", "Compressed Gas Cylinders", "act"],
    ["WF003", "Electrical Welding", "rev"],
    ["WF004", "Electricity", "act"],
    ["WF005", "Hot Works", "act"],
    ["WF006", "Lifting Operations", "act"],
    ["WF007", "Dust", "rev"],
    ["WF008", "Manual Handling", "rev"],
    ["WF009", "Power Tools", "rev"],
    ["WF010", "Use of Vehicle Pit", "act"],
    ["WF011", "Vehicle & Plant Movements", "act"],
    ["WF012", "Refuelling", "rev"],
    ["WF013", "Working at Height", "act"],
    ["WF014", "Noise", "mod"],
    ["WF015", "Vibration", "mod"],
    ["WF016", "PPE", "low"],
    ["WF017", "Slips, Trips & Falls", "rev"],
    ["WF018", "Use of Washdown", "mod"],
    ["WF019", "Working Under Vehicles", "act"],
    ["WF020", "Batteries", "rev"],
    ["WF021", "Electric Vehicles", "rev"],
    ["WF022", "Vehicle Brakes", "rev"],
    ["WF023", "Cooling Systems", "rev"],
    ["WF024", "Tyre Maintenance", "act"],
    ["WF025", "HGV Workshop Tyre Storage", "mod"],
    ["WF026", "General Jacking & Blocking", "act"],
    ["WF027", "Hoses", "mod"],
    ["WF028", "Sweeper Vehicle R&M", "rev"],
    ["WF029", "Enter / Exit Wagons", "mod"],
    ["WF030", "Driving in Fox Group Yards", "rev"],
    ["WF031", "Working Under Propped Body", "act"],
    ["WF032", "Forklift Truck Operations", "act"],
    ["WF033", "Vehicle Lift Table", "act"],
    ["WF034", "Industrial Radial Arm Drill", "rev"],
    ["WF035", "Gantry Crane", "act"],
    ["WF036", "Podium Platforms", "rev"],
    ["WF037", "Pillar Drill", "rev"],
    ["WF038", "Safe Use of Harnesses", "act"],
    ["WF039", "Emergency Response", "rev"],
    ["WF040", "Spill Response", "mod"],
    ["WF041", "First Aid", "low"],
  ];

  const BAND = {
    low:  { color: "#3aa055", label: "Low" },
    mod:  { color: "#2f76b8", label: "Moderate" },
    rev:  { color: "#e7b522", label: "Review" },
    act:  { color: "#d44b2a", label: "Action" },
    stop: { color: "#0d1d4d", label: "Stop" },
  };

  const HANDBOOK_URL = "https://drive.google.com/file/d/1cHh1Ek5ZJjZul7qaGgoFHycaNRWAbhd7/view";
  const grid = document.getElementById("raGrid");
  if (grid) {
    const frag = document.createDocumentFragment();
    RA.forEach(([code, title, band]) => {
      const b = BAND[band] || BAND.rev;
      const a = document.createElement("a");
      a.className = "ra-tile";
      a.href = HANDBOOK_URL;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("data-search", `${code} ${title} ${b.label}`.toLowerCase());
      a.setAttribute("aria-label", `${code} ${title} — risk band ${b.label}`);
      a.innerHTML = `
        <span class="ra-tile__risk" style="background:${b.color}" title="${b.label}"></span>
        <span class="ra-tile__body">
          <span class="ra-tile__code">${code}</span>
          <span class="ra-tile__title">${title}</span>
        </span>
        <span class="ra-tile__band">${b.label}</span>
      `;
      frag.appendChild(a);
    });
    grid.appendChild(frag);
  }

  /* -------------------------------------------------------
   * 4. Search filter across all [data-filterable] sections
   * ----------------------------------------------------- */
  const q = document.getElementById("q");
  const qClear = document.getElementById("qClear");
  const containers = Array.from(document.querySelectorAll("[data-filterable]"));

  // For non-RA containers we tag each direct child with a derived data-search.
  containers.forEach(c => {
    Array.from(c.children).forEach(child => {
      if (!child.hasAttribute("data-search")) {
        child.setAttribute("data-search", (child.textContent || "").replace(/\s+/g, " ").trim().toLowerCase());
      }
    });
  });

  const applyFilter = (term) => {
    const t = term.trim().toLowerCase();
    const isEmpty = t.length === 0;
    containers.forEach(c => {
      let visible = 0;
      Array.from(c.children).forEach(child => {
        const hay = child.getAttribute("data-search") || "";
        const match = isEmpty || hay.includes(t);
        child.classList.toggle("is-hidden", !match);
        if (match) visible++;
      });
      // Surface an empty-state if a whole section has no matches
      let empty = c.querySelector(":scope > .filter-empty");
      if (visible === 0 && !isEmpty) {
        if (!empty) {
          empty = document.createElement("p");
          empty.className = "filter-empty";
          empty.textContent = "No matches in this section.";
          c.appendChild(empty);
        }
      } else if (empty) {
        empty.remove();
      }
    });
    if (qClear) qClear.hidden = isEmpty;
  };

  if (q) {
    q.addEventListener("input", e => applyFilter(e.target.value));
    q.addEventListener("keydown", e => {
      if (e.key === "Escape") { q.value = ""; applyFilter(""); q.blur(); }
    });
  }
  if (qClear) {
    qClear.hidden = true;
    qClear.addEventListener("click", () => {
      if (q) { q.value = ""; q.focus(); }
      applyFilter("");
    });
  }

  /* -------------------------------------------------------
   * 5. Smooth-scroll for in-page nav (respects reduced motion)
   * ----------------------------------------------------- */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      if (!id || id === "#" || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });
})();
