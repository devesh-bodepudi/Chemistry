const stageData = [
  {
    title: "Field Application",
    icon: "tractor",
    body: `
      <p>Atrazine is applied as a pre-emergent herbicide in April and May at rates of 1-4 lbs active ingredient per acre. The herbicide is formulated as a water-dispersible granule (WDG) that dissolves rapidly in soil moisture.</p>
      <p>Key chemistry: atrazine partitions between solid-phase soil organic matter and aqueous pore water according to:</p>
      <div class="equation-block">Kd = Koc x foc</div>
      <p>Where Koc is approximately 122 mL/g (EPA average) and foc is the fraction of organic carbon in topsoil (approximately 0.02 in typical Corn Belt soils). Thus Kd is approximately 2.44 L/kg. Using this value with typical bulk density (1.5 g/cm3) and volumetric water content (0.30), the dissolved fraction in pore water is relatively small, but because atrazine's Kd is low compared to strongly lipophilic pesticides, a meaningful proportion remains mobile and available for transport with percolating rainwater.</p>
      <p>Typical concentration in top 5 cm soil pore water after application: 500-5000 microg/L</p>
    `,
    metrics: [
      ["Applied", "1-4 lbs/acre"],
      ["Kd", "approx. 2.44 L/kg"],
      ["Days to rain event", "0-14 days"],
    ],
  },
  {
    title: "Rainfall-Driven Runoff",
    icon: "rain",
    body: `
      <p>Rainfall events, especially the first significant rain after application, mobilize dissolved atrazine from the soil surface into overland flow. Mass loading is governed by:</p>
      <div class="equation-block">Mass loading (microg) = Runoff volume (L) x [Atrazine]runoff (microg/L)</div>
      <p>A 25mm rainfall event on a 100-acre cornfield can generate approximately 250,000 L of runoff carrying atrazine at concentrations of 50-200 microg/L, far exceeding the 3 microg/L EPA MCL.</p>
      <p>Runoff concentration is highest in the first flush (the first 20% of storm volume carries roughly 50-80% of mass load). This first flush effect is critical for monitoring design.</p>
      <p>Surface runoff collects in field ditches and enters tile drain networks or flows directly to adjacent streams.</p>
    `,
    metrics: [
      ["Peak runoff [ATZ]", "50-200 microg/L"],
      ["EPA MCL", "3 microg/L"],
      ["Exceedance factor", "17-67x"],
    ],
  },
  {
    title: "Tile Drainage Network",
    icon: "pipe",
    body: `
      <p>Subsurface tile drains (perforated pipes buried 1-2 meters below agricultural fields) are the single most important pathway for atrazine delivery to streams. Unlike overland flow, tile drainage bypasses the soil filtration zone, delivering dissolved atrazine directly to receiving waters with minimal degradation.</p>
      <p>Thurman et al. (1991) measured atrazine concentrations in tile drain outfalls of 100-500 microg/L immediately after spring application, declining to 10-50 microg/L within 2-3 weeks post-event.</p>
      <p>Transport time through tile system: hours to 1-2 days.</p>
      <div class="equation-block">R = 1 + (rho_b / theta) x Kd = 1 + (1.5 / 0.30) x 2.44 approximately 13</div>
      <p>This means atrazine moves approximately 13 times slower than advecting groundwater, but remains highly mobile compared to strongly sorbed pesticides.</p>
    `,
    metrics: [
      ["Tile drain peak [ATZ]", "100-500 microg/L"],
      ["Transport time", "Hours to 2 days"],
      ["Retardation factor R", "approx. 13"],
    ],
  },
  {
    title: "Stream Transport & Dilution",
    icon: "stream",
    body: `
      <p>Upon entering streams and rivers, atrazine undergoes dilution, photodegradation, and limited biodegradation. Dilution is governed by the mixing ratio of tile drain flow to stream baseflow.</p>
      <p>Post-application monitoring data from the Midwest shows atrazine concentrations of 5-50 microg/L in small agricultural streams during May and June storm events, representing 1.7 to 17 times the EPA MCL.</p>
      <p>Photodegradation in surface water:</p>
      <div class="equation-block">Rate = kp x [ATZ] x I</div>
      <p>Where kp is the photolysis rate constant and I is light intensity.</p>
      <p>In clear water at 40 degrees North latitude in summer, the photolytic half-life is approximately 15-30 days. In turbid agricultural streams, this extends significantly.</p>
      <p>Hydrolysis at stream pH (6.5-7.5) is negligibly slow.</p>
      <p>Net result: atrazine persists in stream water for weeks to months, traveling hundreds of kilometers downstream.</p>
    `,
    metrics: [
      ["Stream [ATZ] peak", "5-50 microg/L"],
      ["Photolytic half-life", "15-30 days"],
      ["Distance traveled", "Up to hundreds of km"],
    ],
  },
  {
    title: "Treatment Plant Intake",
    icon: "plant",
    body: `
      <p>Surface water drawn by municipal treatment plants during spring and early summer reflects the stream water concentrations described in Stage 4. Many Midwestern utilities draw from rivers that receive agricultural drainage, and must manage seasonal atrazine spikes in their source water.</p>
      <p>A parallel contamination concern exists for groundwater users. USGS monitoring found atrazine in 36% of shallow groundwater wells sampled nationwide, with 3% exceeding the 3 microg/L MCL. Once atrazine reaches the saturated zone, it can remain for decades due to the absence of UV light, near-zero microbial activity in deep aquifer material, and low temperature suppressing abiotic hydrolysis. Groundwater residence times in major Midwestern aquifers range from 10 to 100+ years, meaning contamination introduced decades ago persists today.</p>
      <p>For homes on private wells, there is no federal monitoring requirement, leaving approximately 15 million Americans unaware of their exposure.</p>
    `,
    metrics: [
      ["Treatment plant intake [ATZ]", "5-50 microg/L"],
      ["US shallow wells positive", "36%"],
      ["Shallow wells exceeding MCL", "3%"],
    ],
  },
  {
    title: "Drinking Water Treatment",
    icon: "filter",
    body: `
      <p>Conventional drinking water treatment (coagulation, flocculation, sedimentation, sand filtration, and chlorination) removes less than 50% of dissolved atrazine. Atrazine is a small, neutral, water-soluble molecule that does not readily coagulate, settle, or react with chlorine at treatment doses.</p>
      <p>Effective removal methods:</p>
      <p>(1) Granular Activated Carbon (GAC): adsorption removes 90-99% of atrazine via van der Waals interactions with the carbon surface. Requires regular regeneration (thermal at 900 degrees C or chemical). Additional cost: $0.10-0.50 per 1000 gallons.</p>
      <p>(2) Advanced Oxidation Processes (AOP):</p>
      <div class="equation-block"><span class="formula">O<sub>3</sub></span> + <span class="formula">H<sub>2</sub>O<sub>2</sub></span> -> OH radical<br>OH radical + Atrazine -> ring-opening products -> <span class="formula">CO<sub>2</sub></span> + <span class="formula">H<sub>2</sub>O</span> + <span class="formula">NO<sub>3</sub><sup>-</sup></span> + <span class="formula">Cl<sup>-</sup></span><br>Rate constant k(OH radical + ATZ) = 3.0 x 10^9 M^-1 s^-1</div>
      <p>Many small Midwestern water utilities cannot afford GAC or AOP systems, and must either issue seasonal health advisories or rely on dilution from uncontaminated sources.</p>
    `,
    metrics: [
      ["Conventional removal", "less than 50%"],
      ["GAC removal efficiency", "90-99%"],
      ["AOP rate constant", "3.0 x 10^9 M^-1 s^-1"],
    ],
  },
  {
    title: "Human Tap Water Exposure",
    icon: "tap",
    body: `
      <p>The endpoint of the contamination pathway: drinking water in homes and schools served by surface water from agricultural watersheds.</p>
      <div class="equation-block">Daily water intake: 2 L/day<br>Atrazine at tap (monitoring average): 0.5-3 microg/L<br>Daily atrazine intake: 1-6 microg/day</div>
      <p>Reference dose (RfD) set by EPA: 35 microg/kg body weight per day. For a 70 kg adult: 2,450 microg/day threshold.</p>
      <p>Current average exposure appears well below the acute RfD. However:</p>
      <ul>
        <li>The RfD does not account for endocrine disruption at sub-microg/L levels (Hayes et al. documented intersex effects at 0.1 microg/L in Xenopus)</li>
        <li>Children and pregnant women are more vulnerable</li>
        <li>Seasonal spikes can be 10-50 times higher than monitoring period averages</li>
        <li>Combined exposure with other agricultural chemicals is not assessed</li>
      </ul>
    `,
    metrics: [
      ["Daily intake (avg)", "1-6 microg/day"],
      ["EPA RfD threshold", "2,450 microg/day"],
      ["Hayes documented effect", "0.1 microg/L"],
    ],
  },
];

function stageIcon(type) {
  const common = 'viewBox="0 0 88 88" role="img" aria-label="Stage icon"';
  const stroke = 'stroke="#f4c542" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"';
  const fill = 'fill="#a8c8b8" opacity="0.28"';
  const icons = {
    tractor: `<svg ${common}><rect x="19" y="43" width="28" height="15" rx="2" ${fill}/><path d="M22 43V31h20l11 12h9" ${stroke}/><path d="M54 58h15" ${stroke}/><circle cx="29" cy="62" r="9" ${stroke}/><circle cx="61" cy="62" r="6" ${stroke}/><path d="M16 36h-7M16 43h-9M16 50H8" ${stroke}/></svg>`,
    rain: `<svg ${common}><path d="M25 41c-8 0-13-5-13-12 0-6 5-11 12-11 3-8 11-13 20-11 8 1 14 7 16 15 8 1 14 6 14 14 0 8-6 13-15 13H25z" ${stroke}/><path d="M28 57l-5 11M44 57l-5 11M60 57l-5 11" ${stroke}/></svg>`,
    pipe: `<svg ${common}><path d="M18 29h38v17h14v18H36V47H18z" ${fill}/><path d="M18 29h38v17h14v18H36V47H18z" ${stroke}/><path d="M26 38h22M45 56h17" ${stroke}/></svg>`,
    stream: `<svg ${common}><path d="M12 33c12-8 22 8 34 0s20-8 30 0M12 48c12-8 22 8 34 0s20-8 30 0M12 63c12-8 22 8 34 0s20-8 30 0" ${stroke}/></svg>`,
    plant: `<svg ${common}><rect x="20" y="42" width="48" height="25" rx="3" ${fill}/><path d="M20 42h48v25H20zM29 42V28h8v14M51 42V23h8v19M26 67v8M62 67v8" ${stroke}/><path d="M33 22c3-7 9-7 12 0M55 17c3-7 9-7 12 0" ${stroke}/></svg>`,
    filter: `<svg ${common}><path d="M18 20h52L50 45v20l-12 7V45z" ${fill}/><path d="M18 20h52L50 45v20l-12 7V45zM26 29h36" ${stroke}/></svg>`,
    tap: `<svg ${common}><path d="M29 28h27v12H44v9H29zM56 34h13v10M29 49v12" ${stroke}/><path d="M22 61h29M68 48c4 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3-8 7-13z" ${fill}/><path d="M68 48c4 5 7 9 7 13a7 7 0 0 1-14 0c0-4 3-8 7-13z" ${stroke}/></svg>`,
  };
  return icons[type] || icons.stream;
}

function renderStage(index) {
  const stage = stageData[index];
  const title = document.querySelector("[data-stage-title]");
  const icon = document.querySelector("[data-stage-icon]");
  const body = document.querySelector("[data-stage-body]");
  const metrics = document.querySelector("[data-stage-metrics]");
  if (!stage || !title || !icon || !body || !metrics) return;

  title.textContent = stage.title;
  icon.innerHTML = stageIcon(stage.icon);
  body.innerHTML = stage.body;
  metrics.innerHTML = stage.metrics
    .map(([label, value]) => `<div class="metric"><span>${label}</span><strong>${value}</strong></div>`)
    .join("");

  document.querySelectorAll(".stage-button").forEach((button, buttonIndex) => {
    const active = buttonIndex === index;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stage-button").forEach((button, index) => {
    button.addEventListener("click", () => renderStage(index));
  });
  renderStage(0);

  if (window.Chart) {
    atrazineChartDefaults();
    const canvas = document.getElementById("pathwayConcentrationChart");
    if (!canvas) return;

    new Chart(canvas, {
      type: "line",
      data: {
        labels: [
          "Field Application",
          "Surface Runoff",
          "Tile Drain Outlet",
          "Stream Water",
          "Treatment Plant Intake",
          "After Conv. Treatment",
          "After Advanced Treatment (Tap)",
        ],
        datasets: [
          {
            label: "Typical peak concentration",
            data: [5000, 150, 350, 30, 25, 15, 1],
            borderColor: "#f4c542",
            backgroundColor: "rgba(244, 197, 66, 0)",
            pointBackgroundColor: "#f4c542",
            pointRadius: 5,
            tension: 0.25,
            fill: false,
          },
          {
            label: "EPA MCL (3 microg/L)",
            data: [3, 3, 3, 3, 3, 3, 3],
            borderColor: "#e05c5c",
            backgroundColor: "rgba(224, 92, 92, 0)",
            borderDash: [8, 6],
            pointRadius: 0,
            tension: 0,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: "logarithmic",
            title: { display: true, text: "Concentration (microg/L)", color: "#e8f4f0" },
            grid: { color: "rgba(244, 197, 66, 0.18)" },
            ticks: { color: "#a8c8b8" },
            min: 0.5,
          },
          x: {
            title: { display: true, text: "Surface water treatment pathway stage", color: "#e8f4f0" },
            grid: { color: "rgba(244, 197, 66, 0.1)" },
            ticks: { color: "#a8c8b8", maxRotation: 45, minRotation: 25 },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Atrazine Concentration Through the Surface Water Treatment Pathway",
            color: "#ffffff",
            font: { family: "DM Serif Display", size: 22 },
          },
          legend: { display: false },
          tooltip: {
            callbacks: {
              afterLabel(context) {
                if (context.datasetIndex === 0 && context.parsed.y > 3) {
                  return "Exceeds EPA MCL";
                }
                return "";
              },
            },
          },
        },
      },
    });
  }
});
