// Renders the whole page from data.js (single source of truth, global DATA), then wires up interactions.
// Fields ending in "Html" intentionally hold markup; data.js is first-party content, so it's injected as-is.

const techTags = (arr) =>
  (arr || []).map((t) => `<span class="tech-tag">${t}</span>`).join("");
const bullets = (arr) => (arr || []).map((b) => `<li>${b}</li>`).join("");

function heroHTML(d) {
  const h = d.hero;
  const ctas = h.ctas
    .map(
      (c) =>
        `<a href="${c.href}" class="btn btn-${c.style}">${c.label}${c.arrow ? `<span class="btn-arrow">${c.arrow === "down" ? "↓" : "→"}</span>` : ""}</a>`,
    )
    .join("");
  const stats = h.stats
    .map(
      (s, i) => `
    ${i ? '<div class="stat-divider"></div>' : ""}
    <div class="stat">
      <span class="stat-number" data-count="${s.count}">0</span>${s.plus ? '<span class="stat-plus">+</span>' : ""}
      <span class="stat-label">${s.label}</span>
    </div>`,
    )
    .join("");
  return `
  <section id="hero" class="hero">
    <div class="hero-bg"><div class="grid-overlay"></div></div>
    <div class="hero-content">
      <div class="hero-avatar" data-animate="fade-up" data-delay="0">
        <img src="${d.profile.avatar}" alt="${d.profile.name}" width="104" height="104" decoding="async">
      </div>
      <div class="hero-badge" data-animate="fade-up" data-delay="80">
        <span class="status-dot"></span> ${d.profile.status}
      </div>
      <h1 class="hero-title" data-animate="fade-up" data-delay="160">
        ${h.titleMain}<br><span class="hero-accent">${h.titleAccent}</span>
      </h1>
      <p class="hero-subtitle" data-animate="fade-up" data-delay="240">${h.subtitleHtml}</p>
      <div class="hero-actions" data-animate="fade-up" data-delay="320">${ctas}</div>
      <div class="hero-stats" data-animate="fade-up" data-delay="400">${stats}</div>
    </div>
    <div class="scroll-indicator" data-animate="fade-up" data-delay="600"><div class="scroll-line"></div></div>
  </section>`;
}

function aboutHTML(d) {
  const a = d.about,
    c = a.code;
  const details = a.details
    .map(
      (x) =>
        `<div class="detail"><span class="detail-label">${x.label}</span><span class="detail-value${x.highlight ? " highlight" : ""}">${x.value}</span></div>`,
    )
    .join("");
  const stack = c.stack
    .map((s) => `    <span class="code-string">"${s}"</span>,`)
    .join("\n");
  const code = `<span class="code-keyword">const</span> <span class="code-var">zunair</span> = {
  <span class="code-key">role</span>: <span class="code-string">"${c.role}"</span>,
  <span class="code-key">stack</span>: [
${stack}
  ],
  <span class="code-key">currentProject</span>: {
    <span class="code-key">name</span>: <span class="code-string">"${c.project.name}"</span>,
    <span class="code-key">users</span>: <span class="code-number">${c.project.users}</span>,
    <span class="code-key">platforms</span>: <span class="code-number">${c.project.platforms}</span>,
    <span class="code-key">status</span>: <span class="code-string">"${c.project.status}"</span>,
  },
  <span class="code-key">superpower</span>: <span class="code-string">"${c.superpower}"</span>,
};`;
  return `
  <section id="about" class="section">
    <div class="container">
      <div class="section-grid about-grid">
        <div class="about-text" data-animate="fade-right">
          <span class="section-label">${a.label}</span>
          <h2 class="section-title">${a.titleHtml}</h2>
          ${a.paragraphs.map((p) => `<p class="about-description">${p}</p>`).join("")}
          <div class="about-details">${details}</div>
        </div>
        <div class="about-visual" data-animate="fade-left">
          <div class="code-window">
            <div class="code-header">
              <span class="code-dot red"></span><span class="code-dot yellow"></span><span class="code-dot green"></span>
              <span class="code-filename">${c.filename}</span>
            </div>
            <pre class="code-body"><code>${code}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function workHTML(d) {
  const w = d.work;
  const links = w.links
    .map(
      (l) =>
        `<a href="${l.href}" target="_blank" rel="noopener" class="showcase-link"><span class="link-icon">${l.icon}</span> ${l.label}</a>`,
    )
    .join("");
  const metrics = w.metrics
    .map(
      (m) => `
    <div class="metric-card">
      <div class="metric-number">${m.number}${m.plus ? '<span class="metric-plus">+</span>' : ""}</div>
      <div class="metric-label">${m.label}</div>
      <div class="metric-sub">${m.sub}</div>
    </div>`,
    )
    .join("");
  const platforms = w.platforms
    .map(
      (p) => `
    <div class="platform-card">
      <div class="platform-icon">${p.icon}</div>
      <h3 class="platform-title">${p.title}</h3>
      <p class="platform-desc">${p.desc}</p>
      <div class="platform-tech">${techTags(p.tech)}</div>
    </div>`,
    )
    .join("");
  return `
  <section id="work" class="section section-dark">
    <div class="container">
      <span class="section-label" data-animate="fade-up">${w.label}</span>
      <h2 class="section-title" data-animate="fade-up" data-delay="50">${w.titleHtml}</h2>
      <p class="section-desc" data-animate="fade-up" data-delay="100">${w.descHtml}</p>
      <div class="showcase-links" data-animate="fade-up" data-delay="150">${links}</div>
      <div class="metrics-grid" data-animate="fade-up" data-delay="200">${metrics}</div>
      <div class="platforms-grid" data-animate="fade-up" data-delay="250">${platforms}</div>
    </div>
  </section>`;
}

function skillsHTML(d) {
  const s = d.skills;
  const icons = s.marquee
    .map((m) => `<i class="${m.cls}" title="${m.title}"></i>`)
    .join("");
  const groups = s.groups
    .map(
      (g) => `
    <div class="skill-group">
      <h3 class="skill-group-title">${g.title}</h3>
      <div class="skill-tags">${g.tags.map((t) => `<span class="skill-tag${t.primary ? " primary" : ""}">${t.name}</span>`).join("")}</div>
    </div>`,
    )
    .join("");
  return `
  <section id="skills" class="section section-dark">
    <div class="container">
      <span class="section-label" data-animate="fade-up">${s.label}</span>
      <h2 class="section-title" data-animate="fade-up" data-delay="50">${s.titleHtml}</h2>
    </div>
    <div class="marquee" aria-hidden="true" data-animate="fade-up" data-delay="100">
      <div class="marquee-track">${icons}${icons}</div>
    </div>
    <div class="container">
      <div class="skills-grid" data-animate="fade-up" data-delay="100">${groups}</div>
    </div>
  </section>`;
}

function projectsHTML(d) {
  const p = d.projects;
  const cards = p.items
    .map((it) => {
      const actions = (it.actions || [])
        .map((a) =>
          a.kind === "video"
            ? `<button class="project-link" data-video="${a.url}" data-title="${it.title} — ${a.label}">▶ ${a.label}</button>`
            : `<a class="project-link" href="${a.url}" target="_blank" rel="noopener">↗ ${a.label}</a>`,
        )
        .join("");
      return `
    <article class="project-card">
      <div class="project-media">
        <img src="${it.img}" alt="${it.title} screenshot" loading="lazy" decoding="async">
        ${it.badge ? `<span class="project-badge">${it.badge}</span>` : ""}
      </div>
      <div class="project-body">
        <div class="project-header">
          <span class="project-type">${it.type}</span>
          <span class="project-year">${it.year}</span>
        </div>
        <h3 class="project-title">${it.title}</h3>
        <p class="project-desc">${it.desc}</p>
        <div class="project-tech">${techTags(it.tech)}</div>
        ${actions ? `<div class="project-actions">${actions}</div>` : ""}
      </div>
    </article>`;
    })
    .join("");
  return `
  <section id="projects" class="section">
    <div class="container">
      <span class="section-label" data-animate="fade-up">${p.label}</span>
      <h2 class="section-title" data-animate="fade-up" data-delay="50">${p.titleHtml}</h2>
      <div class="projects-grid" data-animate="fade-up" data-delay="100">${cards}</div>
    </div>
  </section>`;
}

function experienceHTML(d) {
  const e = d.experience;
  const items = e.items
    .map(
      (it) => `
    <div class="timeline-item">
      <div class="timeline-marker${it.active ? " active" : ""}"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-title">${it.title}</h3>
            <span class="timeline-company">${it.company}</span>
          </div>
          <span class="timeline-date">${it.date}</span>
        </div>
        <ul class="timeline-bullets">${bullets(it.bullets)}</ul>
      </div>
    </div>`,
    )
    .join("");
  return `
  <section id="experience" class="section">
    <div class="container">
      <span class="section-label" data-animate="fade-up">${e.label}</span>
      <h2 class="section-title" data-animate="fade-up" data-delay="50">${e.titleHtml}</h2>
      <div class="timeline" data-animate="fade-up" data-delay="100">${items}</div>
    </div>
  </section>`;
}

function leadershipHTML(d) {
  const l = d.leadership;
  const cards = l.items
    .map(
      (it) => `
    <div class="leadership-card">
      <div class="leadership-icon">${it.icon}</div>
      <h3 class="leadership-title">${it.title}</h3>
      <span class="leadership-org">${it.org}</span>
      <span class="leadership-date">${it.date}</span>
      <ul class="leadership-bullets">${bullets(it.bullets)}</ul>
    </div>`,
    )
    .join("");
  return `
  <section id="leadership" class="section section-dark">
    <div class="container">
      <span class="section-label" data-animate="fade-up">${l.label}</span>
      <h2 class="section-title" data-animate="fade-up" data-delay="50">${l.titleHtml}</h2>
      <p class="section-desc" data-animate="fade-up" data-delay="100">${l.descHtml}</p>
      <div class="leadership-grid" data-animate="fade-up" data-delay="150">${cards}</div>
    </div>
  </section>`;
}

function contactHTML(d) {
  const c = d.contact;
  const cards = c.cards
    .map(
      (x) =>
        `<a href="${x.href}"${x.external ? ' target="_blank" rel="noopener"' : ""} class="contact-card">
      <span class="contact-icon">${x.icon}</span>
      <span class="contact-type">${x.type}</span>
      <span class="contact-value">${x.value}</span>
    </a>`,
    )
    .join("");
  return `
  <section id="contact" class="section section-dark">
    <div class="container contact-container">
      <span class="section-label" data-animate="fade-up">${c.label}</span>
      <h2 class="section-title contact-title" data-animate="fade-up" data-delay="50">${c.titleHtml}</h2>
      <p class="section-desc" data-animate="fade-up" data-delay="100">${c.descHtml}</p>
      <div class="contact-grid" data-animate="fade-up" data-delay="150">${cards}</div>
      <div class="contact-cta" data-animate="fade-up" data-delay="200">
        <a href="${c.cta.href}" class="btn btn-primary btn-lg">${c.cta.label} <span class="btn-arrow">→</span></a>
      </div>
    </div>
  </section>`;
}

function render(d) {
  document.getElementById("navLogo").innerHTML = d.profile.brandHtml;
  document.getElementById("navLinks").innerHTML = d.nav
    .map((n) => `<a href="${n.href}" class="nav-link">${n.label}</a>`)
    .join("");
  document.getElementById("app").innerHTML =
    heroHTML(d) +
    aboutHTML(d) +
    skillsHTML(d) +
    experienceHTML(d) +
    workHTML(d) +
    projectsHTML(d) +
    leadershipHTML(d) +
    contactHTML(d);
  document.getElementById("footer").innerHTML =
    `<span class="footer-brand">${d.profile.brandHtml}</span>
     <span class="footer-copy">${d.footer.copy}</span>
     <div class="footer-links">${d.footer.links.map((l) => `<a href="${l.href}"${l.external ? ' target="_blank" rel="noopener"' : ""}>${l.label}</a>`).join("")}</div>`;
}

// ─── Interactions (attached after render so they see the real nodes) ───
function ytEmbed(url) {
  let id = "";
  if (url.includes("youtu.be/"))
    id = url.split("youtu.be/")[1].split(/[?&]/)[0];
  else if (url.includes("v=")) id = url.split("v=")[1].split("&")[0];
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : url;
}

function init() {
  // scroll-in animations
  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(
            () => entry.target.classList.add("visible"),
            Number(entry.target.dataset.delay || 0),
          );
          animObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );
  document
    .querySelectorAll("[data-animate]")
    .forEach((el) => animObserver.observe(el));

  // counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target,
          target = Number(el.dataset.count),
          start = performance.now();
        (function update(now) {
          const p = Math.min((now - start) / 2000, 1);
          el.textContent = Math.floor(
            (1 - Math.pow(1 - p, 3)) * target,
          ).toLocaleString();
          if (p < 1) requestAnimationFrame(update);
        })(start);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  document
    .querySelectorAll("[data-count]")
    .forEach((el) => counterObserver.observe(el));

  // nav: shrink-on-scroll + active link (single scroll handler)
  const nav = document.getElementById("nav");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#navLinks .nav-link");
  window.addEventListener(
    "scroll",
    () => {
      const y = window.pageYOffset;
      nav.classList.toggle("scrolled", y > 50);
      let current = "";
      sections.forEach((s) => {
        if (y >= s.offsetTop - 120) current = s.id;
      });
      navLinks.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + current),
      );
    },
    { passive: true },
  );

  // mobile menu
  const navToggle = document.getElementById("navToggle");
  const navLinksWrap = document.getElementById("navLinks");
  const setMenu = (open) => {
    navToggle.classList.toggle("active", open);
    navLinksWrap.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open);
    document.body.style.overflow = open ? "hidden" : "";
  };
  navToggle.addEventListener("click", () =>
    setMenu(!navLinksWrap.classList.contains("open")),
  );

  // smooth scroll + close menu on nav click
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      setMenu(false);
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
    });
  });

  // cursor glow (desktop only)
  const glow = document.getElementById("cursorGlow");
  if (window.matchMedia("(hover: hover)").matches) {
    document.addEventListener("mousemove", (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
      glow.classList.add("active");
    });
    document.addEventListener("mouseleave", () =>
      glow.classList.remove("active"),
    );
  }

  // project demo modal (iframe injected only on open)
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const close = () => {
    modal.hidden = true;
    modalVideo.innerHTML = "";
    document.body.style.overflow = "";
  };
  document.querySelectorAll(".project-link[data-video]").forEach((btn) =>
    btn.addEventListener("click", () => {
      modalVideo.innerHTML = `<iframe src="${ytEmbed(btn.dataset.video)}" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
      modal.hidden = false;
      document.body.style.overflow = "hidden";
    }),
  );
  modal
    .querySelectorAll("[data-close]")
    .forEach((el) => el.addEventListener("click", close));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) close();
  });
}

render(DATA); // DATA comes from data.js, loaded just before this script
init();

// self-check (gated): verify the YouTube id parser — open any page with ?selftest
if (location.search.includes("selftest")) {
  console.assert(
    ytEmbed("https://youtu.be/abc123?si=x").includes("/embed/abc123"),
    "youtu.be parse",
  );
  console.assert(
    ytEmbed("https://www.youtube.com/watch?v=xyz789&t=2").includes(
      "/embed/xyz789",
    ),
    "watch?v parse",
  );
  console.log("selftest ok");
}
