(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-links a");
  const nav = document.querySelector(".nav-links");
  const toggle = document.querySelector(".menu-toggle");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => {
    item.style.transitionDelay = "0s";
    revealObserver.observe(item);
  });

  const counters = document.querySelectorAll("[data-count]");
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1200;
        const start = performance.now();

        function frame(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          const decimals = target < 1 ? 1 : 0;
          el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
          if (progress < 1) requestAnimationFrame(frame);
        }

        requestAnimationFrame(frame);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.55 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
})();

function atrazineChartDefaults() {
  if (!window.Chart) return;
  Chart.defaults.color = "#dce8e0";
  Chart.defaults.font.family = "'IBM Plex Sans', system-ui, sans-serif";
  Chart.defaults.plugins.legend.labels.color = "#dce8e0";
  Chart.defaults.plugins.tooltip.backgroundColor = "rgba(13, 27, 42, 0.95)";
  Chart.defaults.plugins.tooltip.borderColor = "#f4c542";
  Chart.defaults.plugins.tooltip.borderWidth = 1;
}

function sourceAnnotationPlugin(sourceText) {
  return {
    id: `sourceAnnotation${Math.random().toString(36).slice(2)}`,
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      if (!chartArea) return;
      ctx.save();
      ctx.fillStyle = "#a8c8b8";
      ctx.font = "12px IBM Plex Mono, monospace";
      ctx.fillText(sourceText, chartArea.left, chart.height - 8);
      ctx.restore();
    },
  };
}
