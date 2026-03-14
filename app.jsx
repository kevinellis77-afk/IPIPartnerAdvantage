// ═══════════════════════════════════════════════════════
// CONTENT DATA
// ═══════════════════════════════════════════════════════
const DATA = {
  hub: { name: "ECX", sub1: "Unified Comms &", sub2: "Contact Centre" },
  zones: [
    {
      id: "telephony",
      quadrant: "top-left",
      mid: 225,
      label: "Telephony",
      sublabel: "Foundation",
      shortLabel: "Telephony",
      icon: "📡",
      color: "#67D8FF",
      glow: "54,198,255",
      tagline: "The infrastructure that makes every conversation possible.",
      items: [
        {
          name: "SIP",
          icon: "🔗",
          desc: "Enterprise-grade SIP trunking for resilient, scalable voice connectivity across all your contact centre sites.",
        },
        {
          name: "Numbering",
          icon: "🔢",
          desc: "Flexible inbound number management — geographic, non-geo and international DDIs with full portability.",
        },
        {
          name: "Routing",
          icon: "🔀",
          desc: "Advanced call routing logic based on skills, time, queue and customer data to maximise first contact resolution.",
        },
        {
          name: "IVR",
          icon: "🎛️",
          desc: "Visual IVR design studio — drag-and-drop call flows with smart self-service menus and DTMF/speech input.",
        },
        {
          name: "Call Recording",
          icon: "🎙️",
          desc: "100% cloud call recording with instant search, tamper-evident storage and compliance-ready retention policies.",
        },
      ],
    },
    {
      id: "ai",
      quadrant: "top-right",
      mid: 315,
      label: "AI &",
      sublabel: "Automation",
      shortLabel: "AI & Automation",
      icon: "🤖",
      color: "#A37992",
      glow: "177,143,255",
      tagline:
        "Intelligent automation that works for agents and customers alike.",
      items: [
        {
          name: "Voicebot",
          icon: "🗣️",
          desc: "Natural language voice automation handling high-volume inbound calls — deflecting, qualifying and resolving without agent involvement.",
        },
        {
          name: "Chatbot",
          icon: "💬",
          desc: "AI-driven web and messaging chatbot with seamless live-agent handoff — available 24/7 across every digital channel.",
        },
        {
          name: "ID Me",
          icon: "🪪",
          desc: "Intelligent voice biometric identification — verify customers at call start, cutting handle time and fraud risk.",
        },
        {
          name: "Q4 Me",
          icon: "📋",
          desc: "Smart queue management — let customers request a callback or hold their place, reducing abandonment and improving CSAT.",
        },
        {
          name: "Send Me",
          icon: "📤",
          desc: "Automated outbound messaging — personalised SMS, email or WhatsApp triggered by CRM or contact centre events.",
        },
        {
          name: "AI Sidekick",
          icon: "🧠",
          desc: "Real-time agent assist — surfaces knowledge, suggests next-best actions and drafts responses while agents are live.",
        },
        {
          name: "AI Insights",
          icon: "📊",
          desc: "Post-interaction analytics across 100% of calls — sentiment, topic detection, compliance monitoring and trend dashboards.",
        },
      ],
    },
    {
      id: "payments",
      quadrant: "bottom-right",
      mid: 45,
      label: "Secure",
      sublabel: "Payments",
      shortLabel: "Payments",
      icon: "🔐",
      color: "#C0887B",
      glow: "255,154,108",
      tagline: "PCI-DSS compliance built in — not bolted on.",
      items: [
        {
          name: "Pauseable",
          icon: "⏸️",
          desc: "Pause call recording automatically at the point of payment — simple, agent-initiated PCI compliance with no workflow disruption.",
        },
        {
          name: "PCI Cloud",
          icon: "☁️",
          desc: "Full PCI-DSS de-scoping via cloud payment gateway — agents never hear card details, removing your centre from scope entirely.",
        },
        {
          name: "DTMF Mask",
          icon: "🎭",
          desc: "Keypad tone masking so card digits entered during a live call are inaudible to the agent and never stored in recordings.",
        },
        {
          name: "Pay by Link",
          icon: "🔗",
          desc: "Send a secure, tokenised payment link via SMS or email — customers pay safely on their own device during or after a conversation.",
        },
      ],
    },
    {
      id: "managed",
      quadrant: "bottom-left",
      mid: 135,
      label: "Managed",
      sublabel: "Services",
      shortLabel: "Managed Services",
      icon: "⚙️",
      color: "#7B96A3",
      glow: "74,91,96",
      tagline:
        "Expert hands behind every deployment — from first install to ongoing growth.",
      items: [
        {
          name: "SiteConnect",
          icon: "🌐",
          desc: "Dedicated, resilient network connectivity engineered for contact centre workloads — guaranteeing voice quality and uptime SLAs.",
        },
        {
          name: "SD-WAN",
          icon: "🕸️",
          desc: "Software-defined WAN across multi-site estates — centralised policy, application-aware routing and real-time visibility.",
        },
        {
          name: "Managed Cloud",
          icon: "🏗️",
          desc: "Fully managed cloud infrastructure — provisioning, monitoring, patching and lifecycle management as a service.",
        },
        {
          name: "Consultancy",
          icon: "🎯",
          desc: "Strategic and technical consultancy to scope, design and position the right IPI solution for each customer.",
        },
        {
          name: "Enablement",
          icon: "🚀",
          desc: "Partner enablement programmes — training, sales collateral, demo environments and accreditation pathways.",
        },
        {
          name: "Support",
          icon: "🛡️",
          desc: "24/7 UK-based support with named account management, proactive monitoring and fast escalation paths.",
        },
      ],
    },
  ],
};

const JOURNEY = [
  {
    stage: 1,
    title: "Telephony\nFoundation",
    tag: "Start Here",
    color: "#67D8FF",
    glow: "54,198,255",
    icon: "📡",
    value: "Basic voice services — SIP, numbering and routing.",
    products: ["SIP", "Numbering", "Routing", "IVR", "Call Recording"],
    revenue: "Point solution sale",
  },
  {
    stage: 2,
    title: "ECX\nPlatform",
    tag: "Anchor Deal",
    color: "#36C6FF",
    glow: "54,198,255",
    icon: "⚡",
    value: "Unified comms & contact centre — the connective platform.",
    products: ["Unified Comms", "Contact Centre", "Omnichannel", "Reporting"],
    revenue: "Platform licence",
  },
  {
    stage: 3,
    title: "AI &\nAutomation",
    tag: "Upsell",
    color: "#A37992",
    glow: "177,143,255",
    icon: "🤖",
    value:
      "Automate, assist and analyse — intelligence across every interaction.",
    products: ["Voicebot", "Chatbot", "AI Sidekick", "AI Insights", "ID Me"],
    revenue: "Per-module uplift",
  },
  {
    stage: 4,
    title: "Secure\nPayments",
    tag: "Cross-sell",
    color: "#C0887B",
    glow: "255,154,108",
    icon: "🔐",
    value: "PCI-DSS compliant payments, de-scoping the contact centre.",
    products: ["PCI Cloud", "Pauseable", "DTMF Mask", "Pay by Link"],
    revenue: "Compliance uplift",
  },
  {
    stage: 5,
    title: "Managed\nServices",
    tag: "Service Wrap",
    color: "#7B96A3",
    glow: "74,91,96",
    icon: "⚙️",
    value: "Complete managed delivery — a fully outsourced CCaaS.",
    products: [
      "SiteConnect",
      "SD-WAN",
      "Managed Cloud",
      "Consultancy",
      "Support",
    ],
    revenue: "Recurring MRR",
  },
];

const PHILOSOPHY = [
  {
    icon: "🤝",
    title: "Partner-First Growth Model",
    desc: "Every commercial structure, support resource and product decision is designed around enabling partners to build sustainable, recurring revenue.",
  },
  {
    icon: "👤",
    title: "Partners Own the Customer",
    desc: "We position partners as the primary relationship — IPI provides the platform and expertise to help partners deliver, not compete.",
  },
  {
    icon: "🧩",
    title: "Modular CX Solutions",
    desc: "Start with a single product, expand as the customer grows. Each module stands alone and integrates seamlessly into the full platform.",
  },
  {
    icon: "🏢",
    title: "Enterprise-Grade, Partner-Simple",
    desc: "Deliver capabilities that enterprise contact centres demand — without the complexity that would slow down a partner-led sale.",
  },
];


const theme = window.appTheme || {
  colors: { primary: "#36C6FF", primaryHover: "#1CB2F0", border: "rgba(103,216,255,0.22)", surface: "#0F1727", surfaceMuted: "rgba(255,255,255,0.03)", textPrimary: "#e9f4f1", textMuted: "#8EA6BF" },
  spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px" },
  radius: { sm: "10px", md: "14px", lg: "18px", pill: "999px" }
};

// ═══════════════════════════════════════════════════════
// GEOMETRY (SVG diagram)
// ═══════════════════════════════════════════════════════
const SZ = 660,
  CX = 330,
  CY = 330;
const R1 = 108,
  R2 = 310,
  RGAP = 3.5;
const R_HEAD = 240; // heading midpoint radius

const toRad = (deg) => ((deg - 90) * Math.PI) / 180;
function ptXY(r, deg) {
  return { x: CX + r * Math.cos(toRad(deg)), y: CY + r * Math.sin(toRad(deg)) };
}
function sectorPath(r1, r2, a1, a2) {
  const s1 = ptXY(r1, a1),
    e1 = ptXY(r1, a2),
    s2 = ptXY(r2, a1),
    e2 = ptXY(r2, a2);
  const lg = a2 - a1 > 180 ? 1 : 0;
  return `M${s2.x},${s2.y} A${r2},${r2} 0 ${lg} 1 ${e2.x},${e2.y} L${e1.x},${e1.y} A${r1},${r1} 0 ${lg} 0 ${s1.x},${s1.y} Z`;
}
const QUADS = {
  "top-left": { a1: 183.5, a2: 266.5 },
  "top-right": { a1: 273.5, a2: 356.5 },
  "bottom-right": { a1: 3.5, a2: 86.5 },
  "bottom-left": { a1: 93.5, a2: 176.5 },
};

// ═══════════════════════════════════════════════════════
// BACKGROUND
// ═══════════════════════════════════════════════════════
function Bg() {
  return (
    <React.Fragment>
      <div className="bg-dots" />
      <div
        className="orb"
        style={{
          width: 700,
          height: 700,
          background: "rgba(54,198,255,0.055)",
          top: -250,
          left: -200,
          animationDelay: "0s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(177,143,255,0.045)",
          bottom: -100,
          right: -80,
          animationDelay: "9s",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(56,80,80,0.05)",
          top: "50%",
          left: "55%",
          animationDelay: "16s",
        }}
      />
    </React.Fragment>
  );
}



function AppPageHeader({ eyebrow, title, subtitle, actions = null }) {
  return (
    <div className="ds-page-header">
      <div className="ds-page-header__content">
        <div>
          {eyebrow && <div className="ds-page-header__eyebrow">{eyebrow}</div>}
          <h1 className="ds-page-header__title">{title}</h1>
          {subtitle && <p className="ds-page-header__subtitle">{subtitle}</p>}
        </div>
        {actions ? <div className="ds-page-header__actions">{actions}</div> : null}
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="ds-section-header">
      {eyebrow ? (
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(103,216,255,0.78)" }}>
          {eyebrow}
        </div>
      ) : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function SectionWrapper({ children, className = "", ...props }) {
  return <section className={`ds-section ${className}`.trim()} {...props}>{children}</section>;
}

function PageSection({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="ds-section">
      <AppPageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />
      {children}
    </section>
  );
}

function StandardCard({ children, className = "", style = {} }) {
  return (
    <div className={`ds-card ds-card--standard ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

function HighlightCard({ children, className = "", style = {} }) {
  return (
    <div className={`ds-card ds-card--highlight ${className}`.trim()} style={style}>
      {children}
    </div>
  );
}

function MetricCard({ label, value, tone = "info", icon = null }) {
  return (
    <StandardCard className="ds-metric-card">
      {icon ? <div className="ds-metric-card__icon">{icon}</div> : null}
      <div className="ds-metric-card__label">{label}</div>
      <div className={`ds-metric-card__value tone-${tone}`}>{value}</div>
    </StandardCard>
  );
}

function StandardButton({ children, className = "", ...props }) {
  return <button className={`ui-btn ui-btn--primary ${className}`.trim()} {...props}>{children}</button>;
}

function SecondaryButton({ children, className = "", ...props }) {
  return <button className={`ui-btn ui-btn--secondary ${className}`.trim()} {...props}>{children}</button>;
}

function GhostButton({ children, className = "", ...props }) {
  return <button className={`ui-btn ui-btn--ghost ${className}`.trim()} {...props}>{children}</button>;
}

function FormField({ as = "input", className = "", ...props }) {
  if (as === "select") return <select className={`ui-field ui-dropdown ${className}`.trim()} {...props} />;
  return <input className={`ui-field ${className}`.trim()} {...props} />;
}

function StatusBadge({ status }) {
  const key = String(status || "").toLowerCase().replace(/\s+/g, "-");
  return <span className={`status-badge status-${key}`}>{status}</span>;
}

function StandardTable({ className = "", children }) {
  return <div className={`table-wrapper ds-table-wrap ${className}`.trim()}>{children}</div>;
}
function AppShell({ sidebar, topbar, children }) {
  return (
    <div className="app-shell app-layout">
      {sidebar}
      <main className="app-main page-container">
        {topbar}
        {children}
      </main>
    </div>
  );
}

function SharedSidebar(props) {
  return <SideNav {...props} />;
}

function PageHeader(props) {
  return <AppPageHeader {...props} />;
}

function SectionBlock({ children, className = "" }) {
  return <SectionWrapper className={className}>{children}</SectionWrapper>;
}

function Card({ children, className = "", style = {} }) {
  return <StandardCard className={className} style={style}>{children}</StandardCard>;
}

function StatTile(props) {
  return <MetricCard {...props} />;
}

function DataTable({ className = "", children }) {
  return <StandardTable className={className}>{children}</StandardTable>;
}


function SectionCard({ children, className = "", style = {} }) {
  return <StandardCard className={className} style={style}>{children}</StandardCard>;
}

function Badge({ children, tone = "info" }) {
  return <span className={`status-badge status-${tone}`}>{children}</span>;
}

function SidebarNavItem({ item, active, onClick, collapsed }) {
  return (
    <button
      className={`sidebar-nav-item ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
      title={collapsed ? item.label : ""}
      aria-current={active ? "page" : undefined}
    >
      <span className="sidebar-nav-icon">{item.icon}</span>
      {!collapsed && (
        <span className="sidebar-nav-text">
          <span className="sidebar-nav-label">{item.label}</span>
        </span>
      )}
    </button>
  );
}

function NavIcon({ name }) {
  const icons = {
    home: "M3 10.5L12 3l9 7.5V21h-6v-6H9v6H3z",
    sparkles: "M12 2l1.9 4.7L19 8.6l-4.4 2.7L16 16l-4-2.6L8 16l1.4-4.7L5 8.6l5.1-1.9z",
    academy: "M3 8l9-4 9 4-9 4-9-4zm2 3.5V16l7 3 7-3v-4.5",
    users: "M16 11a4 4 0 100-8 4 4 0 000 8zM8 13a4 4 0 100-8 4 4 0 000 8zm8 2c3.3 0 6 1.6 6 3.5V21H10v-2.5c0-1.9 2.7-3.5 6-3.5zM8 15c-3.3 0-6 1.6-6 3.5V21h6",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    money: "M4 6h16v12H4zM8 12h8M12 9v6",
    megaphone: "M3 11h4l9-4v10l-9-4H3zM7 14l2 6",
    chart: "M4 19h16M7 15v-4M12 15V8M17 15v-6",
    support: "M12 4a8 8 0 00-8 8v3a2 2 0 002 2h2v-5H6v-1a6 6 0 1112 0v1h-2v5h2a2 2 0 002-2v-3a8 8 0 00-8-8z",
    search: "M11 4a7 7 0 105.1 11.8l4 4 1.4-1.4-4-4A7 7 0 0011 4z",
    checklist: "M4 6h2l1 2 3-4M11 7h9M4 12h2l1 2 3-4M11 13h9M4 18h2l1 2 3-4M11 19h9",
    lightbulb: "M12 3a6 6 0 00-3.8 10.7c.7.6 1.3 1.8 1.4 2.8h4.8c.1-1 .7-2.2 1.4-2.8A6 6 0 0012 3zm-2 16h4m-3 3h2",
    trending: "M4 16l5-5 4 4 7-7M14 8h6v6",
    layers: "M12 3l9 5-9 5-9-5 9-5zm9 9-9 5-9-5m18 4-9 5-9-5",
    badge: "M12 3l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V6h4l3-3zm-2.5 9.5l2 2 4-4",
    scale: "M12 5v14M5 7h14M7 7l-3 5h6l-3-5zm10 0-3 5h6l-3-5",
    cap: "M3 10l9-4 9 4-9 4-9-4zm4 2v4c0 1.6 2.2 3 5 3s5-1.4 5-3v-4",
    chevronDown: "M6 9l6 6 6-6",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={icons[name] || icons.home} />
    </svg>
  );
}

function ActionButton({ children, variant = "primary", className = "", ...props }) {
  const cls = variant === "secondary"
    ? "ui-btn ui-btn--secondary"
    : variant === "ghost"
      ? "ui-btn ui-btn--ghost"
      : "ui-btn ui-btn--primary";
  return <button className={`${cls} ${className}`.trim()} {...props}>{children}</button>;
}

function FilterBar({ children, className = "" }) {
  return <div className={`filter-bar ${className}`.trim()}>{children}</div>;
}


function ThemeToggle() {
  const [mode, setMode] = React.useState(() => window.appTheme?.getMode?.() || "dark");

  React.useEffect(() => {
    const sync = (event) => {
      if (event?.detail?.mode) setMode(event.detail.mode);
      else setMode(window.appTheme?.getMode?.() || "dark");
    };
    window.addEventListener("ipi-theme-change", sync);
    return () => window.removeEventListener("ipi-theme-change", sync);
  }, []);

  const isDark = mode === "dark";

  const toggleTheme = () => {
    const next = isDark ? "light" : "dark";
    setMode(next);
    window.appTheme?.setMode?.(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon" aria-hidden="true">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}

function CogIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v2.2M12 18.8V21M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M3 12h2.2M18.8 12H21M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6" />
      <circle cx="12" cy="12" r="6.1" />
      <circle cx="12" cy="12" r="2.4" />
    </svg>
  );
}

function SettingsMenu({ navSections, hiddenPageIds, onTogglePageVisibility, versionInfo }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);

  const resetVisibility = React.useCallback(() => {
    navSections.forEach((section) => {
      section.items.forEach((item) => {
        if (hiddenPageIds.has(item.id)) {
          onTogglePageVisibility(item.id);
        }
      });
    });
  }, [hiddenPageIds, navSections, onTogglePageVisibility]);

  React.useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (evt) => {
      if (evt.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsideClick = (evt) => {
      if (!menuRef.current?.contains(evt.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("mousedown", closeOnOutsideClick);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("mousedown", closeOnOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="settings-menu" ref={menuRef}>
      <button
        type="button"
        className="settings-menu__trigger"
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label="Open settings menu"
        title="Settings"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <CogIcon />
      </button>

      <div className={`settings-menu__panel ${menuOpen ? "open" : ""}`} role="menu" aria-hidden={!menuOpen}>
        <div className="settings-menu__panel-header">
          <div>
            <div className="settings-menu__panel-title">Platform settings</div>
            <div className="settings-menu__panel-subtitle">Toggle sections visible in the nav</div>
          </div>
          <button type="button" className="settings-menu__panel-close" onClick={() => setMenuOpen(false)} aria-label="Close settings">×</button>
        </div>

        <div className="settings-menu__panel-content">
          {navSections.map((section) => (
            <div key={section.key} className="settings-menu__section">
              <div className="settings-menu__section-title">{section.title}</div>
              <div className="settings-menu__section-items">
                {section.items.map((item) => {
                  const isVisible = !hiddenPageIds.has(item.id);
                  return (
                    <label key={item.id} className="settings-menu__item">
                      <span className="settings-menu__item-label">
                        <span className="settings-menu__item-icon" aria-hidden="true">{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <input
                        className="settings-drawer__switch-input"
                        type="checkbox"
                        role="switch"
                        checked={isVisible}
                        aria-label={`${item.label} visibility`}
                        onChange={() => onTogglePageVisibility(item.id)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="settings-menu__panel-footer">
          <button type="button" className="settings-drawer__reset" onClick={resetVisibility}>↺ Reset defaults</button>
          <div className="settings-drawer__build-title">Build info</div>
          <div>Version {versionInfo.version}</div>
          <div>Build {versionInfo.build}</div>
        </div>
      </div>
    </div>
  );
}

function AppTopBar({ title, sectionTitle, navSections, hiddenPageIds, onTogglePageVisibility, versionInfo }) {
  return (
    <header className="app-topbar">
      <div>
        <div className="app-topbar__eyebrow">IPI Partner Advantage</div>
        {sectionTitle ? <div className="app-topbar__context">{sectionTitle}</div> : null}
        <div className="app-topbar__title">{title}</div>
      </div>
      <div className="app-topbar__actions">
        <SettingsMenu
          navSections={navSections}
          hiddenPageIds={hiddenPageIds}
          onTogglePageVisibility={onTogglePageVisibility}
          versionInfo={versionInfo}
        />
        <ThemeToggle />
      </div>
    </header>
  );
}

// ═══════════════════════════════════════════════════════
// TOGGLE
// ═══════════════════════════════════════════════════════
function Toggle({ complete, onToggle }) {
  return (
    <div className="toggle-wrap" onClick={onToggle}>
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: complete ? "#2A4A42" : "#B8D0CA",
          transition: "color 0.3s",
        }}
      >
        Modular
      </span>
      <div
        className="toggle-track"
        style={{
          background: complete
            ? "rgba(54,198,255,0.18)"
            : "rgba(255,255,255,0.05)",
        }}
      >
        <div className="toggle-thumb" style={{ left: complete ? 24 : 3 }} />
      </div>
      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: complete ? "#B8D0CA" : "#2A4A42",
          transition: "color 0.3s",
        }}
      >
        Complete Platform
      </span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SEGMENT MODAL — shows all products in zone
// ═══════════════════════════════════════════════════════
function SegmentModal({ zone, onClose }) {
  const [selItem, setSelItem] = React.useState(null);

  React.useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") {
        if (selItem) setSelItem(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [selItem, onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          if (selItem) setSelItem(null);
          else onClose();
        }
      }}
    >
      <div
        className="modal-box"
        style={{
          background: `linear-gradient(160deg,#162422,#0E1A18)`,
          border: `1.5px solid ${zone.color}55`,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "28px 28px 20px",
            borderBottom: `1px solid rgba(${zone.glow},0.18)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {/* Zone icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: `rgba(${zone.glow},0.15)`,
                  border: `1.5px solid ${zone.color}55`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                  flexShrink: 0,
                }}
              >
                {zone.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: zone.color,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {zone.shortLabel}
                </div>
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    fontFamily: "'Syne',sans-serif",
                  }}
                >
                  {zone.label} {zone.sublabel}
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "#8EA6BF",
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  {zone.tagline}
                </p>
              </div>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#8aa8a0",
                fontSize: 20,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                outline: "none",
                flexShrink: 0,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "#8aa8a0";
              }}
            >
              ×
            </button>
          </div>

        </div>
        {/* Breadcrumb if item selected */}
        {selItem && (
          <div
            style={{
              padding: "12px 28px 0",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <button
              onClick={() => setSelItem(null)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 12,
                fontWeight: 700,
                color: zone.color,
                opacity: 0.7,
                fontFamily: "'Nunito Sans',sans-serif",
                padding: 0,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.7)}
            >
              ← {zone.shortLabel}
            </button>
            <span style={{ color: "color-mix(in srgb, var(--text-secondary) 65%, transparent)", fontSize: 12 }}>
              ›
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "var(--text-secondary)",
              }}
            >
              {selItem.name}
            </span>
          </div>
        )}

        {/* Body */}
        <div style={{ padding: "20px 28px 28px" }}>
          {!selItem ? (
            /* Product grid */
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))",
                gap: 10,
              }}
            >
              {zone.items.map((item) => (
                <div
                  key={item.name}
                  className="prod-card"
                  onClick={() => setSelItem(item)}
                  style={{
                    background: `rgba(${zone.glow},0.08)`,
                    border: `1px solid ${zone.color}30`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(${zone.glow},0.16)`;
                    e.currentTarget.style.borderColor = `${zone.color}66`;
                    e.currentTarget.style.boxShadow = `0 4px 20px rgba(${zone.glow},0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `rgba(${zone.glow},0.08)`;
                    e.currentTarget.style.borderColor = `${zone.color}30`;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 22, marginBottom: 8 }}>
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#EAF5FF",
                      marginBottom: 4,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#7E97B4",
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      }}
                  >
                    {item.desc}
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 10,
                      fontWeight: 700,
                      color: zone.color,
                      letterSpacing: "0.06em",
                    }}
                  >
                    Learn more →
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Item detail */
            <div className="detail-panel">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 12,
                    background: `rgba(${zone.glow},0.15)`,
                    border: `1px solid ${zone.color}45`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {selItem.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      fontFamily: "'Syne',sans-serif",
                    }}
                  >
                    {selItem.name}
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      background: `rgba(${zone.glow},0.12)`,
                      border: `1px solid ${zone.color}40`,
                      borderRadius: 100,
                      padding: "2px 10px",
                      marginTop: 5,
                    }}
                  >
                    <div
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: zone.color,
                      }}
                    />
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 800,
                        color: zone.color,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {zone.shortLabel}
                    </span>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginBottom: 22,
                }}
              >
                {selItem.desc}
              </p>
              <div
                style={{
                  padding: "16px",
                  background: `rgba(${zone.glow},0.07)`,
                  border: `1px solid ${zone.color}25`,
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: zone.color,
                    opacity: 0.65,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Part of {zone.shortLabel}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {zone.items
                    .filter((i) => i.name !== selItem.name)
                    .map((i) => (
                      <button
                        key={i.name}
                        onClick={() => setSelItem(i)}
                        style={{
                          background: `rgba(${zone.glow},0.1)`,
                          border: `1px solid ${zone.color}30`,
                          borderRadius: 100,
                          padding: "3px 10px",
                          fontSize: 11,
                          fontWeight: 700,
                          color: zone.color,
                          cursor: "pointer",
                          fontFamily: "'Nunito Sans',sans-serif",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `rgba(${zone.glow},0.22)`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `rgba(${zone.glow},0.1)`;
                        }}
                      >
                        {i.icon} {i.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer hint */}
        {!selItem && (
          <div
            style={{
              padding: "0 28px 20px",
              fontSize: 11,
              color: "rgba(110,153,144,0.45)",
              textAlign: "center",
            }}
          >
            Click any product to see full details · Press Esc to close
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// DIAGRAM
// ═══════════════════════════════════════════════════════
function Diagram({ activeZone, complete, onZone }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: SZ,
        margin: "0",
        aspectRatio: "1/1",
      }}
    >
      <svg
        viewBox={`0 0 ${SZ} ${SZ}`}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          overflow: "visible",
        }}
      >
        <defs>
          {DATA.zones.map((z) => (
            <React.Fragment key={z.id}>
              <radialGradient
                id={"gn" + z.id}
                cx="50%"
                cy="50%"
                r="65%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor={z.color} stopOpacity="0.16" />
                <stop offset="100%" stopColor={z.color} stopOpacity="0.04" />
              </radialGradient>
              <radialGradient
                id={"ga" + z.id}
                cx="50%"
                cy="50%"
                r="65%"
                gradientUnits="objectBoundingBox"
              >
                <stop offset="0%" stopColor={z.color} stopOpacity="0.35" />
                <stop offset="100%" stopColor={z.color} stopOpacity="0.10" />
              </radialGradient>
            </React.Fragment>
          ))}
          <radialGradient id="hubG" cx="40%" cy="35%" r="68%">
            <stop offset="0%" stopColor="#203830" />
            <stop offset="55%" stopColor="#131E1A" />
            <stop offset="100%" stopColor="#0A1410" />
          </radialGradient>
          {/* Glow filter for active segments */}
          <filter id="segGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer guide ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R2}
          fill="none"
          stroke={complete ? "rgba(54,198,255,0.22)" : "rgba(255,255,255,0.05)"}
          strokeWidth="1.2"
          strokeDasharray={complete ? null : "5 8"}
          style={{ transition: "stroke 0.5s" }}
        />
        {/* Inner ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R1 + 1}
          fill="none"
          stroke="rgba(54,198,255,0.08)"
          strokeWidth="0.5"
        />

        {/* ── SECTORS ── */}
        {DATA.zones.map((z) => {
          const q = QUADS[z.quadrant];
          const on = activeZone === z.id || complete;
          const d = sectorPath(R1 + 3, R2 - 3, q.a1, q.a2);

          // Icon & heading position — centred in the arc band
          const headR = (R1 + R2) / 2;
          const hp = ptXY(headR, z.mid);
          const iconR = R1 + (R2 - R1) * 0.38;
          const ip = ptXY(iconR, z.mid);
          const textR = R1 + (R2 - R1) * 0.7;
          const tp = ptXY(textR, z.mid);

          return (
            <g key={z.id} className="seg-group" onClick={() => onZone(z.id)}>
              {/* Fill */}
              <path
                d={d}
                className="seg-fill"
                fill={on ? `url(#ga${z.id})` : `url(#gn${z.id})`}
                style={{ transition: "fill 0.35s" }}
              />
              {/* Border */}
              <path
                d={d}
                fill="none"
                stroke={on ? z.color : "rgba(255,255,255,0.09)"}
                strokeWidth={on ? 2.2 : 0.9}
                style={{
                  transition: "stroke 0.35s,stroke-width 0.35s",
                  filter: on
                    ? `drop-shadow(0 0 10px rgba(${z.glow},0.8))`
                    : "none",
                }}
              />

              {/* ── ICON (large, centred in inner half of arc) ── */}
              <text
                x={ip.x}
                y={ip.y + 10}
                textAnchor="middle"
                fontSize={on ? 40 : 32}
                pointerEvents="none"
                style={{
                  transition: "font-size 0.3s",
                  filter: on
                    ? `drop-shadow(0 0 12px rgba(${z.glow},0.9))`
                    : "none",
                }}
              >
                {z.icon}
              </text>

              {/* ── HEADING (outer half of arc) ── */}
              {/* Line 1 */}
              <text
                x={tp.x}
                y={tp.y - 7}
                textAnchor="middle"
                fontFamily="'Syne','Nunito Sans',sans-serif"
                fontSize={on ? 16 : 14}
                fontWeight="800"
                letterSpacing="-0.3"
                fill={on ? z.color : "rgba(200,228,220,0.80)"}
                pointerEvents="none"
                style={{
                  transition: "fill 0.35s,font-size 0.3s",
                  filter: on
                    ? `drop-shadow(0 0 10px rgba(${z.glow},1))`
                    : "none",
                }}
              >
                {z.label}
              </text>
              {/* Line 2 */}
              <text
                x={tp.x}
                y={tp.y + 12}
                textAnchor="middle"
                fontFamily="'Syne','Nunito Sans',sans-serif"
                fontSize={on ? 16 : 14}
                fontWeight="800"
                letterSpacing="-0.3"
                fill={on ? z.color : "rgba(200,228,220,0.80)"}
                pointerEvents="none"
                style={{
                  transition: "fill 0.35s,font-size 0.3s",
                  filter: on
                    ? `drop-shadow(0 0 10px rgba(${z.glow},1))`
                    : "none",
                }}
              >
                {z.sublabel}
              </text>

              {/* "Click to explore" hint when active */}
              {on && !complete && (
                <text
                  x={tp.x}
                  y={tp.y + 30}
                  textAnchor="middle"
                  fontSize="9"
                  fill={z.color}
                  opacity="0.6"
                  fontFamily="'Nunito Sans',sans-serif"
                  fontWeight="700"
                  letterSpacing="0.05em"
                  pointerEvents="none"
                  style={{ animation: "shimmer 1.8s ease-in-out infinite" }}
                >
                  tap to open
                </text>
              )}
            </g>
          );
        })}

        {/* Dividers */}
        {[0, 90, 180, 270].map((a) => {
          const p1 = ptXY(R1 + 3, a),
            p2 = ptXY(R2 - 3, a);
          return (
            <line
              key={a}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="#131E20"
              strokeWidth="7"
            />
          );
        })}

        {/* ── HUB ── */}
        <circle
          cx={CX}
          cy={CY}
          r={R1}
          fill="url(#hubG)"
          stroke={complete ? "rgba(54,198,255,0.9)" : "rgba(54,198,255,0.5)"}
          strokeWidth="2"
          style={{
            animation: "hubPulse 4s ease-in-out infinite",
            transition: "stroke 0.5s",
          }}
        />
        <circle
          cx={CX}
          cy={CY}
          r={R1 - 16}
          fill="none"
          stroke="rgba(54,198,255,0.1)"
          strokeWidth="0.7"
        />
        <circle
          cx={CX}
          cy={CY}
          r={R1 - 34}
          fill="none"
          stroke="rgba(54,198,255,0.06)"
          strokeWidth="0.5"
        />
        <text
          x={CX}
          y={CY - 9}
          textAnchor="middle"
          fontFamily="'Syne',sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="-1.5"
          fill="white"
          pointerEvents="none"
          style={{ filter: "drop-shadow(0 0 20px rgba(54,198,255,0.9))" }}
        >
          ECX
        </text>
        <text
          x={CX}
          y={CY + 10}
          textAnchor="middle"
          fontFamily="'Nunito Sans',sans-serif"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="0.6"
          fill="rgba(103,216,255,0.85)"
          pointerEvents="none"
        >
          Unified Comms &amp;
        </text>
        <text
          x={CX}
          y={CY + 23}
          textAnchor="middle"
          fontFamily="'Nunito Sans',sans-serif"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="0.6"
          fill="rgba(103,216,255,0.85)"
          pointerEvents="none"
        >
          Contact Centre
        </text>
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// PARTNER JOURNEY
// ═══════════════════════════════════════════════════════
function PartnerJourney() {
  const [active, setActive] = React.useState(null);
  return (
    <div
      style={{
        position: "relative",
        background:
          "linear-gradient(135deg,rgba(123,150,163,0.07),rgba(123,150,163,0.02))",
        border: "1.5px dashed rgba(123,150,163,0.30)",
        borderRadius: 20,
        padding: "30px 20px 22px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -13,
          left: "50%",
          transform: "translateX(-50%)",
          background: "#131E20",
          padding: "0 14px",
          whiteSpace: "normal",
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 800,
            color: "#7B96A3",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          ⚙️ Managed Services Wrap — available at every stage
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 55,
            left: "7%",
            right: "7%",
            height: 2,
            background:
              "linear-gradient(90deg,rgba(103,216,255,0.4),rgba(54,198,255,0.55),rgba(177,143,255,0.5),rgba(255,154,108,0.45),rgba(123,150,163,0.4))",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

        {JOURNEY.map((step, i) => {
          const isActive = active === step.stage;
          return (
            <React.Fragment key={step.stage}>
              <div
                className="journey-step"
                onClick={() =>
                  setActive((p) => (p === step.stage ? null : step.stage))
                }
              >
                <div
                  style={{
                    marginBottom: 8,
                    fontSize: 9.5,
                    fontWeight: 800,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: step.color,
                    background: `rgba(${step.glow},0.12)`,
                    border: `1px solid ${step.color}40`,
                    borderRadius: 100,
                    padding: "2px 9px",
                    display: "inline-block",
                    boxShadow: isActive
                      ? `0 0 12px rgba(${step.glow},0.45)`
                      : "none",
                    transition: "box-shadow 0.3s",
                    whiteSpace: "normal",
                  }}
                >
                  {step.tag}
                </div>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: isActive
                      ? `radial-gradient(circle,rgba(${step.glow},0.3),rgba(15,24,22,0.95))`
                      : "rgba(15,24,22,0.9)",
                    border: `2px solid ${isActive ? step.color : "rgba(255,255,255,0.1)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    boxShadow: isActive
                      ? `0 0 24px rgba(${step.glow},0.55),0 0 0 4px rgba(${step.glow},0.12)`
                      : "none",
                    transition: "all 0.3s",
                    marginBottom: 8,
                    zIndex: 2,
                    position: "relative",
                  }}
                >
                  {step.icon}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -4,
                      right: -4,
                      width: 16,
                      height: 16,
                      borderRadius: "50%",
                      background: isActive
                        ? step.color
                        : "rgba(255,255,255,0.15)",
                      fontSize: 9,
                      fontWeight: 900,
                      color: isActive ? "#0F1F1C" : "rgba(255,255,255,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                  >
                    {step.stage}
                  </div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 3,
                    fontWeight: 900,
                    fontSize: 11,
                    lineHeight: 1.3,
                    color: isActive ? step.color : "rgba(200,225,218,0.75)",
                    whiteSpace: "pre-line",
                    transition: "color 0.3s",
                    fontFamily: "'Syne',sans-serif",
                    textShadow: isActive
                      ? `0 0 14px rgba(${step.glow},0.6)`
                      : "none",
                  }}
                >
                  {step.title}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: isActive ? step.color : "rgba(255,255,255,0.22)",
                    background: isActive
                      ? `rgba(${step.glow},0.1)`
                      : "rgba(255,255,255,0.03)",
                    border: `1px solid ${isActive ? step.color + "40" : "rgba(255,255,255,0.07)"}`,
                    borderRadius: 100,
                    padding: "2px 8px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    transition: "all 0.3s",
                    whiteSpace: "normal",
                    marginTop: 6,
                  }}
                >
                  {step.revenue}
                </div>
              </div>
              {i < JOURNEY.length - 1 && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 2px",
                    flexShrink: 0,
                    paddingTop: 28,
                  }}
                >
                  <svg width="22" height="12" viewBox="0 0 22 12">
                    <path
                      d="M0 6 L15 6 M10 1.5 L16.5 6 L10 10.5"
                      stroke={`rgba(${JOURNEY[i].glow},0.45)`}
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {active &&
        (() => {
          const step = JOURNEY.find((s) => s.stage === active);
          return (
            <div
              style={{
                marginTop: 20,
                background: `linear-gradient(135deg,rgba(${step.glow},0.1),rgba(15,24,22,0.7))`,
                border: `1px solid ${step.color}40`,
                borderRadius: 14,
                padding: "18px 22px",
                display: "flex",
                gap: 24,
                flexWrap: "wrap",
                animation: "fadeUp 0.3s ease both",
              }}
            >
              <div style={{ flex: "1", minWidth: 180 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontSize: 20 }}>{step.icon}</span>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 900,
                      color: step.color,
                      lineHeight: 1.1,
                      whiteSpace: "pre-line",
                      fontFamily: "'Syne',sans-serif",
                    }}
                  >
                    {step.title}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {step.value}
                </p>
              </div>
              <div style={{ flex: "1", minWidth: 160 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: step.color,
                    opacity: 0.65,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Key Products
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {step.products.map((p) => (
                    <span
                      key={p}
                      style={{
                        background: `rgba(${step.glow},0.12)`,
                        border: `1px solid ${step.color}40`,
                        borderRadius: 100,
                        padding: "3px 10px",
                        fontSize: 11,
                        fontWeight: 700,
                        color: step.color,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
// PRODUCT DATA (from ECX package sheets & UCaaS)
// ═══════════════════════════════════════════════════════
const PRODUCT_DATA = {
  // ── TELEPHONY / VOICECONNECT ──────────────────────────
  SIP: {
    id: "sip",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony · VoiceConnect",
    tagline: "Enterprise SIP trunking, built for modern cloud CX",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "VoiceConnect is IPI's own voice services platform, delivering SIP trunking over a network built with deep Contact Centre and UC expertise. Rather than just another carrier, VoiceConnect includes cloud AI services baked in, a unique burstable model for demand spikes, and SIPConnect for organisations still in contract with an existing provider.",
    highlights: [
      "SIP trunking with built-in encryption",
      "Burstable model — handle demand spikes without penalties",
      "IPI Cloud AI services integrated — no costly additional integration",
      "SIPConnect: bring your existing carrier, add IPI services on top",
      "Intelligent network-based call routing for deflection & BC/DR",
      "Certified compatibility with Microsoft Teams and Genesys",
      "PSTN access via multiple upstream carriers for resilience",
    ],
    relatedIds: [
      "Numbering",
      "Routing",
      "IVR",
      "Call Recording",
      "VoiceConnect",
    ],
  },
  Numbering: {
    id: "numbering",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony · VoiceConnect",
    tagline: "UK national and international number management",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "VoiceConnect provides robust access to UK and international numbering through multiple upstream carriers. IPI manages number porting, provisioning and assignment — giving partners a complete number management service alongside the voice platform.",
    highlights: [
      "UK national and mobile number provisioning",
      "International number ranges",
      "Number porting from existing providers",
      "Inbound call handling with time-of-day routing options",
      "150 UK national & mobile minutes per user per month (UCaaS)",
      "Managed by IPI's dedicated connectivity team",
    ],
    relatedIds: ["SIP", "Routing", "IVR", "VoiceConnect"],
  },
  Routing: {
    id: "routing",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony · VoiceConnect",
    tagline: "Intelligent network-based call routing",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "VoiceConnect includes intelligent, network-based call routing designed for deflection, business continuity and disaster recovery. Combined with IVR and AI services, routing decisions can be made before a call even reaches an agent — reducing load and improving customer experience from the first ring.",
    highlights: [
      "Network-level intelligent routing",
      "Call deflection to reduce contact centre load",
      "Business continuity & disaster recovery routing",
      "Dynamic path selection based on real-time network conditions",
      "Dial plans and hunt groups",
      "Ring-all, find me / follow me, advanced call flows",
      "Integrates with IVR and AI voicebot for self-service deflection",
    ],
    relatedIds: ["SIP", "IVR", "Numbering", "Call Recording", "VoiceConnect"],
  },
  IVR: {
    id: "ivr",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony · VoiceConnect",
    tagline: "Self-service IVR built for the cloud",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "IPI's IVR capabilities are delivered through VoiceConnect and the ECX platform, enabling self-service voice journeys without on-premise infrastructure. IVR Assist from the Secure Payments suite can also protect existing IVR payment journeys with PCI compliance via a lightweight API integration.",
    highlights: [
      "Cloud-hosted IVR — no on-premise infrastructure",
      "Custom greetings, menus and announcements with Text To Speech",
      "Unlimited auto-attendants and queues",
      "Main number and conference IVR",
      "Graphical menu configuration for IVR and call flows",
      "IVR Assist: PCI-compliant payment journeys within IVR",
      "In-queue callbacks and virtual voicemail",
    ],
    relatedIds: ["Routing", "SIP", "Call Recording", "PCI Cloud", "Voicebot"],
  },
  "Call Recording": {
    id: "call-recording",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony · Compliance",
    tagline: "Compliant call recording across every interaction",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "Call recording is a core capability of the IPI platform, available across VoiceConnect and ElasticCX CCaaS. For environments handling card payments, Pauseable provides automatic pause-and-resume to keep recordings compliant with PCI DSS — protecting customer data without disrupting agent workflow.",
    highlights: [
      "Call recording included as standard across voice",
      "Pause-and-resume via Pauseable for PCI compliance",
      "Automatic recording management at the payment stage",
      "Post-call playback for quality monitoring and training",
      "Coach, barge and monitor for live call supervision",
      "Integrated with AI Insights for transcription and sentiment",
      "Secure storage and compliant data handling",
    ],
    relatedIds: ["Pauseable", "AI Insights", "SIP", "Routing", "VoiceConnect"],
  },
  VoiceConnect: {
    id: "voiceconnect",
    family: "telephony",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "Telephony",
    tagline: "The IPI voice platform for resilience, flexibility and scale",
    url: "https://www.ipintegration.com/solutions/voiceconnect/",
    summary:
      "VoiceConnect is IPI's proprietary voice services platform, built on decades of Contact Centre and UC expertise. It goes far beyond a standard carrier, combining reliable SIP trunking with cloud AI services, burstable capacity, PCI compliance tools and intelligent routing — all in one managed platform.",
    highlights: [
      "Secure voice with built-in encryption",
      "Burstable model — no penalties for demand spikes",
      "IPI Cloud AI baked in — voicebot, ID Me, Q4 Me, Send Me",
      "SIPConnect: add IPI services without changing your current carrier",
      "Intelligent call routing for deflection and BC/DR",
      "Certified with Microsoft Teams and Genesys",
      "Multi-carrier PSTN access for maximum resilience",
      "Full number management and porting",
    ],
    relatedIds: [
      "SIP",
      "Routing",
      "IVR",
      "SiteConnect",
      "AI Insights",
      "Voicebot",
    ],
  },

  // ── UCaaS & CCaaS PLATFORM ────────────────────────────
  "ECX Voice": {
    id: "ecx-voice",
    family: "ecx",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "CCaaS",
    tagline: "A customisable CCaaS solution with powerful voice features",
    summary:
      "Born in the cloud, ECX Voice removes the requirement for outdated on-site infrastructure. Consume capability as you need it, scale with demand, and give every business access to enterprise-grade contact centre features — built-in dialing, in-queue callback and customer surveys included as standard.",
    highlights: [
      "Desktop, browser and mobile app",
      "Progressive and Preview Dialer built in",
      "Remote agent working support",
      "Unlimited auto-attendants, phone numbers, extensions and queues",
      "In-queue call backs & post call surveys",
      "Real time and historic reporting",
      "Local and international dialing + number porting",
      "Call recording, filtering, monitoring — coach, barge & monitor",
      "Custom greetings, menus and announcements with Text To Speech",
      "Hot desking, presence monitoring, virtual voicemail",
      "Advanced call flows, find me/follow me",
      "Optional AI Insights & AI Sidekick bolt-ons",
    ],
    relatedIds: ["ECX Omni", "ECX Max", "ElasticCX UCaaS"],
  },
  "ECX Omni": {
    id: "ecx-omni",
    family: "ecx",
    color: "#67D8FF",
    glow: "54,198,255",
    badge: "CCaaS",
    tagline: "A true omnichannel experience",
    summary:
      "ECX Omni brings voice, webchat, email, SMS and social together into a single intelligent CCaaS platform. By unifying real-time and asynchronous interactions, ECX Omni enables faster resolution, consistent experiences and lower cost-to-serve — ensuring organisations meet rising customer expectations at scale.",
    sections: [
      {
        title: "Email",
        body: "Email remains the preferred channel for complex, non-urgent queries. ECX's smart, orchestrated email management ensures clarity and convenience for every customer interaction.",
      },
      {
        title: "Web Chat",
        body: "With nearly half of customers now preferring webchat and consistently higher satisfaction than voice, webchat is a core capability — available in ECX Omni out of the box.",
      },
      {
        title: "SMS",
        body: "Customers value SMS for instant, convenient updates. ECX ensures every message reaches the right customer at the right time, boosting satisfaction and reducing support load.",
      },
      {
        title: "Social",
        body: "Social channels are now critical touchpoints. ECX ensures timely, consistent responses across WhatsApp, Instagram and Facebook Messenger — protecting brand reputation.",
      },
    ],
    highlights: [
      "Voice, Email, Web Chat, SMS + social (WhatsApp, Instagram, Facebook Messenger)",
      "Omnichannel agent interface with unified history",
      "Central inbox — one interface for all channels",
      "Channel context — adaptive agent tooling per channel",
      "Concurrent sessions — multiple simultaneous digital interactions",
      "Desktop, browser and mobile app",
      "Progressive and Preview Dialer built in",
      "All ECX Voice features included",
      "Optional AI Insights & AI Sidekick bolt-ons",
    ],
    relatedIds: ["ECX Voice", "ECX Max", "ElasticCX UCaaS"],
  },
  "ECX Max": {
    id: "ecx-max",
    family: "ecx",
    color: "#36C6FF",
    glow: "54,198,255",
    badge: "CCaaS · AI Native",
    tagline: "Smarter CX, built-in",
    summary:
      "ECX Max delivers advanced omnichannel capabilities including social channels with native AI built in — AI Insights, AI Sidekick and AI Autopilot. Smart routing with Chat Queue Rules and Sidekick Smart Wrap-Up handle cognitive load so agents spend more time on high-value customer engagement.",
    highlights: [
      "All ECX Voice + Omni features included",
      "AI Insights — post-call transcription, summary, sentiment trend, topics & tagging",
      "AI QM Score Assist — automate quality management with AI-powered evaluations",
      "AI Sidekick — Smart Wrap-Up with real-time transcription, auto summary, suggested next actions",
      "AI Autopilot — flow editor for Voice and Chat bots",
      "Social channel connectors: WhatsApp, Instagram, Facebook Messenger",
      "CRM integration: Salesforce, MS Dynamics, Freshdesk, HubSpot, Zendesk, Zoho, Shopify",
      "Progressive and Preview Dialer built in",
      "Omnichannel agent experience interface",
      "In-queue call backs, post call surveys, call recording, quality monitoring",
    ],
    relatedIds: ["ECX Voice", "ECX Omni", "ElasticCX UCaaS"],
  },
  "ElasticCX UCaaS": {
    id: "ecx-ucaas",
    family: "ucaas",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "UCaaS",
    tagline: "Unlock seamless communication and collaboration",
    summary:
      "ElasticCX Unified Communications as a Service integrates voice tools into a single cloud-based platform — unifying your communications across handsets, PCs and smartphones. Delivered with IPI's digital communication expertise, it includes end-to-end in-life support management.",
    sections: [
      {
        title: "Cost Efficiency",
        body: "Predictable, transparent per-user pricing delivering immediate cost savings and reduced digital communication costs.",
      },
      {
        title: "Agility & Innovation",
        body: "Continuous access to the latest releases — features and integrations available as soon as they're released.",
      },
      {
        title: "Security Built In",
        body: "Encryption, access controls and compliance certifications protect sensitive customer data and ensure regulatory compliance.",
      },
      {
        title: "Scalability & Flexibility",
        body: "Scale mobile worker resources effortlessly. Flex above your current licence subscription on demand, ensuring optimal performance at peak times.",
      },
    ],
    highlights: [
      "PSTN connectivity via SIP",
      "150 UK national & mobile minutes per user per month",
      "Main number and conference IVR",
      "Reporting and analytics with real-time dashboards",
      "Audio conferencing — private room per user",
      "Inbound call handling with time-of-day options",
      "Virtual receptionist, TTS + customised greeting",
      "Graphical IVR / call flow menu configuration",
      "Voicemail per user including VM to email",
      "Caller ID across internal and external numbers",
      "Call forwarding and hotdesking capability",
      "Flexible licence options to scale user counts",
    ],
    relatedIds: ["ECX Voice", "ECX Omni", "ECX Max"],
  },
  "ECX Unified Communications": {
    id: "ecx-uc",
    family: "ucaas",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "UCaaS",
    tagline: "Unified communications across every device",
    summary:
      "Part of the ElasticCX platform, ECX Unified Communications brings voice, presence and collaboration together across desktop, mobile and browser — delivered from the cloud with flexible per-user licensing.",
    highlights: [
      "PSTN connectivity via SIP",
      "Voice across desktop, browser and mobile",
      "Presence and internal messaging",
      "Hot desking and call forwarding",
      "Reporting and analytics",
      "Flexible licence scaling",
    ],
    relatedIds: ["ECX Voice", "ECX Omni", "ECX Max", "ElasticCX UCaaS"],
  },
  "ECX Contact Centre": {
    id: "ecx-cc",
    family: "ecx",
    color: "#36C6FF",
    glow: "54,198,255",
    badge: "CCaaS",
    tagline: "Enterprise contact centre, delivered from the cloud",
    summary:
      "ECX Contact Centre is the cloud-native contact centre engine at the heart of the IPI platform — powering inbound, outbound and blended contact operations with full reporting, quality monitoring and workforce management capabilities.",
    highlights: [
      "Unlimited queues, auto-attendants and phone numbers",
      "Real-time and historic reporting",
      "Call recording and quality monitoring",
      "Progressive and Preview Dialer",
      "In-queue callback and post-call surveys",
      "Remote agent support",
      "CRM integrations",
    ],
    relatedIds: ["ECX Voice", "ECX Omni", "ECX Max"],
  },
  "Omnichannel Engagement": {
    id: "omnichannel",
    family: "ecx",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "CCaaS",
    tagline: "Every channel. One agent experience.",
    summary:
      "Omnichannel Engagement extends the ECX Contact Centre across voice, email, web chat, SMS and social — giving agents a unified inbox with full interaction history and channel-adaptive tooling.",
    highlights: [
      "Voice, Email, Web Chat, SMS",
      "WhatsApp, Instagram, Facebook Messenger",
      "Unified agent inbox with interaction history",
      "Concurrent session handling",
      "Channel context tooling",
      "Available in ECX Omni and ECX Max",
    ],
    relatedIds: ["ECX Omni", "ECX Max", "ECX Contact Centre"],
  },
  "Workforce Enablement": {
    id: "workforce",
    family: "ecx",
    color: "#67D8FF",
    glow: "103,216,255",
    badge: "CCaaS",
    tagline: "Tools that empower every agent",
    summary:
      "Workforce Enablement brings together the scheduling, coaching and performance tools agents and supervisors need — from quality monitoring and call coaching through to AI-assisted wrap-up and smart routing.",
    highlights: [
      "Quality monitoring and call recording",
      "Call coaching — coach, barge and monitor",
      "AI QM Score Assist",
      "Smart wrap-up and disposition suggestions",
      "Real-time and historic reporting dashboards",
      "Post-call surveys",
    ],
    relatedIds: ["ECX Max", "ECX Contact Centre", "Omnichannel Engagement"],
  },

  // ── AI & AUTOMATION ───────────────────────────────────
  Voicebot: {
    id: "voicebot",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · IPI Cloud AI",
    tagline: "Conversational AI for voice — 24/7 self-service",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/",
    summary:
      "IPI's Voicebot is part of the IPI Cloud AI suite — a modular SaaS package that integrates with your existing Contact Centre platform without lengthy integration projects. Voicebots handle conversational AI for inbound voice, deflecting routine calls, resolving queries 24/7 and routing intelligently to the right agent or queue when human intervention is needed.",
    highlights: [
      "Conversational AI for inbound voice channels",
      "24/7 on-demand customer support — no agent required",
      "Reduces average handling time by deflecting routine queries",
      "Accelerates call handling and resolves queries automatically",
      "Seamlessly escalates to live agents when needed",
      "Integrates with existing CCaaS platforms including Genesys, NICE, Five9 and ElasticCX",
      "Pairs with ID Me for biometric caller identification before handoff",
    ],
    relatedIds: [
      "Chatbot",
      "AI Sidekick",
      "AI Insights",
      "ID Me",
      "Q4 Me",
      "Send Me",
    ],
  },
  Chatbot: {
    id: "chatbot",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · IPI Cloud AI",
    tagline: "Conversational AI for digital channels",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/",
    summary:
      "IPI's Chatbot delivers conversational AI across web chat, SMS, WhatsApp and other digital channels — reducing contact volumes, improving first-contact resolution and giving customers instant answers at any time. Part of IPI Cloud AI, it integrates with your existing platform as a SaaS module.",
    highlights: [
      "Conversational AI for web chat, SMS and social channels",
      "Deflects digital enquiries without agent involvement",
      "24/7 availability across all digital touchpoints",
      "Reduces contact volumes and cost-to-serve",
      "Seamlessly escalates to live agents with full context",
      "Works with ElasticCX Omni and Max for omnichannel self-service",
      "Configurable for bookings, FAQs, account queries and payments",
    ],
    relatedIds: ["Voicebot", "AI Sidekick", "AI Insights", "Send Me", "Q4 Me"],
  },
  "AI Sidekick": {
    id: "ai-sidekick",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · ElasticCX Bolt-on",
    tagline: "Real-time AI assistance for every agent conversation",
    summary:
      "AI Sidekick is an AI-powered bolt-on for ElasticCX CCaaS that delivers real-time assistance to agents during live interactions. It provides live transcription directly into the agent's work window, voicemail transcription, and — working alongside AI Insights — surfaces historical conversation summaries, topics and sentiment so agents always have full customer context. Smart Wrap-Up then generates an instant post-call summary with suggested actions and dispositions.",
    sections: [
      {
        title: "Real-time Transcription",
        body: "Captures and converts spoken conversations into written text instantly, relayed into the agent's work window. Agents stay focused on the customer — not on taking notes — improving accuracy, service quality and compliance.",
      },
      {
        title: "Voicemail Transcription",
        body: "Automatically converts voicemail messages into text, enabling agents to read and respond quickly. Eliminates time spent listening to lengthy recordings and ensures no customer query goes unanswered.",
      },
      {
        title: "Historical Conversation Analysis",
        body: "Working with AI Insights, surfaces summaries, key topics and sentiment from past interactions across all channels — giving agents full customer context before they even say hello.",
      },
      {
        title: "Smart Wrap-Up",
        body: "Listens to the full conversation and generates an instant AI-powered summary with recommended actions, key outcomes and suggested dispositions — eliminating after-call work and creating consistent documentation.",
      },
    ],
    highlights: [
      "Real-time call transcription into agent work window",
      "Voicemail transcription for faster response",
      "Historical summary, topics and sentiment via AI Insights",
      "Smart Wrap-Up: auto-summary, suggested actions and dispositions",
      "Reduces after-call work and manual note-taking",
      "Customisable prompts for summaries and suggestions",
      "Included in ECX Max; available as a bolt-on for Voice and Omni",
      "Billed monthly per user — Nvidia and Azure OpenAI UK/EU located",
      "No customer data used for AI model training",
    ],
    relatedIds: ["AI Insights", "ECX Max", "ECX Omni", "Voicebot", "Chatbot"],
  },
  "AI Insights": {
    id: "ai-insights",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · ElasticCX Bolt-on",
    tagline: "Extract valuable insights from every interaction",
    summary:
      "AI Insights is a cutting-edge bolt-on for ElasticCX CCaaS that uses advanced native AI to analyse every customer interaction after it happens. It transforms raw conversation data into strategic assets — giving contact centre managers, supervisors and CX teams post-interaction intelligence at scale. From transcription through to sentiment trend analysis and automated quality scoring, AI Insights amplifies what your data can tell you.",
    sections: [
      {
        title: "Transcription",
        body: "Converts calls into precise text records automatically — eliminating manual note-taking, reducing errors, and ensuring comprehensive records for compliance and quality assurance.",
      },
      {
        title: "Summarisation",
        body: "Distils lengthy conversations into concise summaries with key points and action items, speeding up issue resolution and facilitating better handoffs between agents and departments.",
      },
      {
        title: "Topic Detection",
        body: "Uncovers recurring themes and emerging trends across all interactions — in tagging or free-form format. Invaluable for identifying common customer concerns, market trends and training needs.",
      },
      {
        title: "Sentiment Analysis",
        body: "Evaluates the emotional tone of historical calls and digital conversations, helping managers spot patterns in customer emotions, detect recurring dissatisfaction issues and improve service strategies.",
      },
    ],
    highlights: [
      "Post-call transcription at 0.12p per hour",
      "AI-generated summaries for every interaction",
      "Topic detection — tagging or free-form, fully customisable prompts",
      "Sentiment trend analysis across calls and digital channels",
      "QM Score Assist — score 100% of interactions automatically",
      "Eliminates manual QA reviews — consistent scoring at scale",
      "Included in ECX Max; available as bolt-on for Voice and Omni",
      "Dedicated role-based access — managers, supervisors and CX teams",
      "Nvidia Private instance and Azure OpenAI — UK and EU located",
      "No customer data used for AI model training",
    ],
    relatedIds: [
      "AI Sidekick",
      "ECX Max",
      "ECX Omni",
      "Workforce Enablement",
      "Chatbot",
    ],
  },
  "ID Me": {
    id: "id-me",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · IPI Cloud AI",
    tagline: "Voice biometrics for instant, secure caller identification",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/",
    summary:
      "ID Me brings voice biometrics into the Contact Centre, identifying callers and their intent before the agent even begins the conversation. With a third of consumers leaving companies due to lack of personalisation, ID Me enables Contact Centres to deliver a smoother, more personalised journey — cutting authentication time and improving security.",
    highlights: [
      "Voice biometric caller identification",
      "Identifies caller intent before agent conversation begins",
      "Reduces authentication time and improves CSAT",
      "Enables personalised routing based on customer identity",
      "Eliminates repetitive security questions",
      "Integrates with Voicebot for seamless pre-call qualification",
      "Works with existing CCaaS platforms — no platform change required",
    ],
    relatedIds: ["Voicebot", "Q4 Me", "Send Me", "AI Insights", "AI Sidekick"],
  },
  "Q4 Me": {
    id: "q4-me",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · IPI Cloud AI",
    tagline: "IPI's patented multichannel callback solution",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/",
    summary:
      "Q4 Me is IPI's patented call-back multichannel solution — giving customers the option to be called back rather than waiting in a queue. It reduces abandonment, improves customer satisfaction and allows contact centres to manage demand peaks more efficiently by distributing call volume across available capacity.",
    highlights: [
      "Patented IPI multichannel callback technology",
      "Eliminates in-queue wait time for customers",
      "Reduces call abandonment rates",
      "Distributes volume across available agent capacity",
      "Supports voice and digital channel callbacks",
      "Pairs with Send Me to offer channel choice while in-queue",
      "Configurable callback windows and agent assignment logic",
    ],
    relatedIds: ["Send Me", "ID Me", "Voicebot", "Routing", "IVR"],
  },
  "Send Me": {
    id: "send-me",
    family: "ai",
    color: "#A37992",
    glow: "177,143,255",
    badge: "AI & Automation · IPI Cloud AI",
    tagline: "Deflect callers to digital while they wait",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/",
    summary:
      "Send Me gives customers the option to switch to a digital channel whilst in-queue for voice — sending them an SMS link to continue their journey via webchat, self-service or a bot. It reduces call volumes, improves customer experience and helps contact centres handle demand without increasing headcount.",
    highlights: [
      "Deflects in-queue callers to digital channels",
      "Sends SMS link to webchat, bot or self-service",
      "Reduces live call volumes and handle times",
      "Improves customer experience — no more waiting on hold",
      "Works alongside Chatbot and Voicebot for seamless transitions",
      "Pairs with Q4 Me for full inbound demand management",
      "Integrates with existing CCaaS and IVR platforms",
    ],
    relatedIds: ["Q4 Me", "Voicebot", "Chatbot", "IVR", "Routing"],
  },

  // ── SECURE PAYMENTS ───────────────────────────────────
  Pauseable: {
    id: "pauseable",
    family: "payments",
    color: "#C0887B",
    glow: "255,154,108",
    badge: "Secure Payments · IPI-developed",
    tagline: "Automatic pause-and-resume for PCI-compliant call recording",
    url: "https://www.ipintegration.com/solutions/secure-contact-centre-payments/",
    websiteUrl: "https://pooc.ipi-widgets.com/Matt/cloudpci_platform.html",
    summary:
      "Pauseable is IPI's own pause-and-resume solution — automatically managing call recordings at the payment stage so agents never hear or see customer card data. It works directly with the agent desktop and can be extended with Pay by Link, allowing customers to complete secure transactions on their own devices via SMS, webchat or bot.",
    highlights: [
      "Automatically pauses call recording at payment stage",
      "Agents never hear or see cardholder data",
      "Works directly with the agent desktop — no workflow disruption",
      "Extends to Pay by Link for device-based secure payment completion",
      "Supports agent-enabled and digital payment journeys",
      "Compatible with ElasticCX, Genesys Cloud, NICE, Five9 and more",
      "Reduces PCI DSS scope without infrastructure change",
      "Fast deployment by IPI's expert implementation team",
    ],
    relatedIds: [
      "PCI Cloud",
      "DTMF Suppression",
      "Digital Pay by Link",
      "Call Recording",
      "ECX Omni",
    ],
  },
  "PCI Cloud": {
    id: "pci-cloud",
    family: "payments",
    color: "#C0887B",
    glow: "255,154,108",
    badge: "Secure Payments · Cloud PCI",
    tagline: "Enterprise-grade PCI DSS compliance for contact centres",
    url: "https://www.ipintegration.com/solutions/secure-contact-centre-payments/",
    websiteUrl: "https://pooc.ipi-widgets.com/Matt/cloudpci_platform.html",
    summary:
      "Cloud PCI is IPI's enterprise-grade digital payments solution — allowing contact centres to process payments securely and in full PCI DSS compliance across voice, IVR, SMS, webchat and bot. It works with your existing Contact Centre infrastructure and PSPs, de-scoping your environment entirely from cardholder data without disrupting the customer experience.",
    sections: [
      {
        title: "Security as Standard",
        body: "Agents never hear or see customer payment information. DTMF suppression, Pauseable, and Pay by Link ensure cardholder data is removed entirely from your environment.",
      },
      {
        title: "Omnichannel Flexibility",
        body: "Supports secure payments across voice, IVR, SMS, webchat and bot interactions — consistent for agents and customers alike.",
      },
      {
        title: "Seamless Integration",
        body: "Works with your existing workflows, Contact Centre systems and PSPs. Compatible with PayPal, WorldPay, Adyen, Stripe, Barclaycard, Checkout.com and many more.",
      },
      {
        title: "Rapid Deployment",
        body: "IPI's expert team ensures your deployment is fast and futureproof — from automated pause-and-resume to advanced DTMF masking.",
      },
    ],
    highlights: [
      "Full PCI DSS de-scoping — removes card data from your environment",
      "Supports voice, IVR, SMS, webchat and bot payment journeys",
      "Compatible with Genesys, NICE, Five9, ElasticCX and more",
      "Works with 15+ PSPs including Stripe, Adyen, WorldPay, Barclaycard",
      "Reduces compliance costs — no infrastructure change required",
      "Includes Pauseable, Agent Pay (DTMF), Pay by Link and IVR Assist",
      "SAQ-A eligibility achievable with IVR Assist",
      "Backed by IPI expert implementation and ongoing support",
    ],
    relatedIds: [
      "Pauseable",
      "DTMF Suppression",
      "Digital Pay by Link",
      "Call Recording",
      "ECX Omni",
    ],
  },
  "DTMF Suppression": {
    id: "dtmf",
    family: "payments",
    color: "#C0887B",
    glow: "255,154,108",
    badge: "Secure Payments · Agent Pay",
    tagline: "Prevent card tones entering your environment — Agent Pay",
    url: "https://www.ipintegration.com/solutions/secure-contact-centre-payments/",
    summary:
      "Agent Pay is IPI's DTMF suppression solution — a more comprehensive PCI tool that prevents DTMF tones from entering your environment when customers input card data on their keypad. Unlike Pauseable, Agent Pay masks tones in real time, supporting omnichannel interactions including speech recognition, digital chat and automated voice flows.",
    highlights: [
      "Prevents DTMF tones entering your contact centre environment",
      "Real-time masking as customer inputs card data on keypad",
      "Supports voice, speech recognition, digital chat and automated flows",
      "More comprehensive than pause-and-resume alone",
      "Omnichannel — works across all customer interaction types",
      "Reduces PCI DSS scope to SAQ-A where applicable",
      "Pairs with Pay by Link for hybrid agent and digital payments",
      "Compatible with all major CCaaS platforms",
    ],
    relatedIds: [
      "Pauseable",
      "PCI Cloud",
      "Digital Pay by Link",
      "Call Recording",
    ],
  },
  "Digital Pay by Link": {
    id: "pay-by-link",
    family: "payments",
    color: "#C0887B",
    glow: "255,154,108",
    badge: "Secure Payments · Pay by Link",
    tagline: "Secure payment links across every channel",
    url: "https://www.ipintegration.com/solutions/secure-contact-centre-payments/",
    websiteUrl: "https://pooc.ipi-widgets.com/Matt/cloudpci_platform.html",
    summary:
      "Pay by Link enables agents to send a secure payment link to customers across SMS, email, bot or webchat — allowing the customer to complete the transaction on their own device. This removes the agent entirely from the card data flow, supports both agent-enabled and fully digital payment journeys, and provides real-time monitoring so agents can track payment progress without seeing any card data.",
    highlights: [
      "Sends secure payment links via SMS, email, bot or webchat",
      "Customer completes payment on their own device — agent not in scope",
      "Real-time progress monitoring for agents",
      "Supports both agent-enabled and self-service digital payments",
      "Removes agent entirely from PCI DSS card data flow",
      "Works alongside Pauseable for hybrid payment journeys",
      "Compatible with all major PSPs and CCaaS platforms",
      "Omnichannel — consistent across every digital touchpoint",
    ],
    relatedIds: [
      "Pauseable",
      "PCI Cloud",
      "DTMF Suppression",
      "ECX Omni",
      "Chatbot",
    ],
  },

  // ── MANAGED SERVICES ──────────────────────────────────
  SiteConnect: {
    id: "siteconnect",
    family: "managed",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "Managed Services · Network",
    tagline: "Managed SD-WAN and resilient business connectivity",
    url: "https://www.ipintegration.com/solutions/siteconnect/",
    summary:
      "SiteConnect combines robust, modern network connectivity with IPI's expert managed service — backed by a dedicated team of connectivity consultants, provisioners and support engineers. Leveraging a diverse mix of carriers and SD-WAN technology, SiteConnect delivers resilient, secure and application-aware connectivity specifically designed for contact centre and CX workloads.",
    sections: [
      {
        title: "Managed SD-WAN",
        body: "Software-Defined WAN creates an encrypted virtual overlay on your physical connectivity, with dynamic path selection based on real-time conditions (latency, jitter, packet loss) — automatically rerouting traffic if a connection degrades or fails.",
      },
      {
        title: "Resilient Internet Access",
        body: "High-speed internet from broadband up to 100Gbps, leveraging multiple circuit providers for resilience. Enhanced with Advanced Threat Protection and web filtering.",
      },
      {
        title: "Application-Aware Routing",
        body: "SD-WAN understands application requirements — prioritising real-time voice and video over less critical traffic to ensure optimal performance for business-critical CX applications.",
      },
      {
        title: "Centralised Management",
        body: "A centralised interface for network policy definition, configuration, monitoring and troubleshooting across the entire WAN — simplifying operations at scale.",
      },
    ],
    highlights: [
      "Managed SD-WAN with encrypted virtual overlay",
      "Dynamic path selection — automatic failover based on real-time conditions",
      "Internet speeds from broadband to 100Gbps",
      "Multi-carrier resilience with IPI-managed delivery",
      "Application-aware routing — prioritises voice and CX traffic",
      "Advanced Threat Protection, anti-malware, URL filtering",
      "Centralised management and monitoring",
      "Backed by IPI's connectivity consultants and support engineers",
    ],
    relatedIds: ["SD-WAN", "Managed Cloud", "Platform Support", "VoiceConnect"],
  },
  "SD-WAN": {
    id: "sd-wan",
    family: "managed",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "Managed Services · SiteConnect",
    tagline: "Software-defined networking for CX-grade performance",
    url: "https://www.ipintegration.com/solutions/siteconnect/",
    summary:
      "IPI's managed SD-WAN service, delivered as part of SiteConnect, provides an encrypted virtual network overlay with intelligent path selection, security features and centralised management. Designed to maximise uptime and ensure CX-critical applications like voice and video always get priority over the network.",
    highlights: [
      "Encrypted virtual overlay on physical connectivity layer",
      "Dynamic path selection based on latency, jitter and packet loss",
      "Automatic rerouting if a connection fails or degrades",
      "Security: intrusion prevention, anti-malware, application control, ATP",
      "Centralised policy management across entire WAN",
      "Application-aware prioritisation for voice and CX workloads",
      "Secure access for remote users and cloud applications",
    ],
    relatedIds: [
      "SiteConnect",
      "Managed Cloud",
      "Platform Support",
      "VoiceConnect",
    ],
  },
  "Managed Cloud": {
    id: "managed-cloud",
    family: "managed",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "Managed Services · IPI Cloud",
    tagline: "Enterprise cloud infrastructure across three Tier-3 data centres",
    url: "https://www.ipintegration.com/solutions/managed-cloud-services/",
    summary:
      "IPI Cloud is an enterprise-grade managed cloud infrastructure operating across three fully independent Tier-3 data centres, each with redundant power, cooling and connectivity. From VM Cloud (IaaS) to App Cloud (outcome-based capacity) and Backup as a Service, IPI Cloud gives contact centre operators the flexibility to scale without capital expenditure.",
    sections: [
      {
        title: "VM Cloud",
        body: "Infrastructure-as-a-Service with a fixed pool of computing resources, easily scalable within IPI Cloud. Reduces in-house IT pressure, enhances security, and simplifies upgrade and maintenance cycles.",
      },
      {
        title: "App Cloud",
        body: "Buy cloud capacity as a business outcome — guaranteed capacity per number of agents, 24/7, with no outages. IPI takes full responsibility for consistent performance so agents stay focused on customers.",
      },
      {
        title: "Backup as a Service",
        body: "Secure, cloud-based backup for physical or virtual environments. Handles data compression, deduplication and encrypted transfers — minimising network impact while keeping data safe.",
      },
    ],
    highlights: [
      "Three independent Tier-3 data centres — UK hosted",
      "Redundant power, cooling and connectivity at every site",
      "VM Cloud: IaaS with scalable compute resources",
      "App Cloud: outcome-based capacity per agent — guaranteed uptime",
      "Backup as a Service: encrypted, deduplicated cloud backup",
      "Scales without CapEx — pay for what you use",
      "Fully managed by IPI — reducing in-house IT burden",
      "Rapid provisioning to support contact centre growth",
    ],
    relatedIds: ["SiteConnect", "SD-WAN", "Platform Support", "VoiceConnect"],
  },
  "Platform Support": {
    id: "platform-support",
    family: "managed",
    color: "#7B96A3",
    glow: "123,150,163",
    badge: "Managed Services",
    tagline: "End-to-end managed support for your CX platform",
    url: "https://www.ipintegration.com/services/managed-it-services-provider/",
    summary:
      "IPI's Platform Support service provides end-to-end managed delivery of contact centre and unified communications platforms — covering operations, monitoring, incident management and continuous improvement. With IPI managing the platform, partners and customers can focus on delivering great customer service rather than maintaining the technology underneath it.",
    highlights: [
      "End-to-end managed platform operations",
      "Proactive monitoring and incident management",
      "Single point of contact across the entire tech stack",
      "First-time fix focus with low escalation rates",
      "Covers ElasticCX, Genesys, NICE, Five9 and other leading platforms",
      "Reduces in-house IT burden and downtime",
      "Continuous improvement and patch management",
      "ISO 27001 certified — robust security and compliance",
    ],
    relatedIds: ["Managed Cloud", "SiteConnect", "SD-WAN", "CX Strategy"],
  },

  // ── PROFESSIONAL SERVICES ─────────────────────────────
  "CX Strategy": {
    id: "cx-strategy",
    family: "prosvcs",
    color: "#A37992",
    glow: "177,143,255",
    badge: "Professional Services · Consultancy",
    tagline: "Strategic CX consultancy from the UK's leading experts",
    url: "https://www.ipintegration.com/services/contact-centre-consultancy/",
    summary:
      "IPI's CX Strategy consultancy helps organisations understand where they are, where they need to be, and the best path to get there. With unrivalled knowledge of contact centre operations, technology and human factors, IPI's consultants design strategies that drive measurable improvement in customer satisfaction, operational efficiency and cost-to-serve.",
    highlights: [
      "Contact centre strategy and roadmap development",
      "CX maturity assessment and benchmarking",
      "Technology evaluation and vendor selection support",
      "Channel strategy — voice, digital, self-service and AI",
      "Workforce optimisation strategy",
      "Business case development and ROI modelling",
      "Outcome-focused — every recommendation tied to measurable results",
    ],
    relatedIds: [
      "Solution Design",
      "Integration",
      "Enablement",
      "AI Enablement",
    ],
  },
  "Solution Design": {
    id: "solution-design",
    family: "prosvcs",
    color: "#A37992",
    glow: "177,143,255",
    badge: "Professional Services · Consultancy",
    tagline: "Architecture and solution design for complex CX deployments",
    url: "https://www.ipintegration.com/services/contact-centre-consultancy/",
    summary:
      "IPI's Solution Design team translates CX strategy into technical architecture — designing scalable, integrated contact centre and unified communications solutions that minimise risk and maximise value. With one of the largest in-house developer teams in the UK specialising in CX, IPI designs solutions that work in the real world.",
    highlights: [
      "End-to-end technical architecture for CCaaS and UCaaS deployments",
      "Multi-platform expertise: Genesys, NICE, Five9, ElasticCX and more",
      "CRM integration design: Salesforce, Dynamics, Zendesk and others",
      "AI and automation architecture — voicebot, chatbot, agent assist",
      "Network and connectivity architecture with SiteConnect and SD-WAN",
      "Compliance design — PCI DSS, GDPR and regulatory frameworks",
      "Proof of concept and pilot design",
    ],
    relatedIds: [
      "CX Strategy",
      "Integration",
      "Managed Cloud",
      "Platform Support",
    ],
  },
  Integration: {
    id: "integration",
    family: "prosvcs",
    color: "#A37992",
    glow: "177,143,255",
    badge: "Professional Services · Development",
    tagline: "Bespoke development and integration for CX platforms",
    url: "https://www.ipintegration.com/services/development-and-integrations/",
    summary:
      "IPI has one of the largest in-house teams of developers in the UK specialising in customer experience solutions. From CRM and telephony integrations to custom Contact Centre applications, IPI's experienced problem-solvers handle complex integration challenges across numerous vendors and platforms — reducing costs, enhancing customer experience and expanding what's possible.",
    highlights: [
      "One of the UK's largest in-house CX developer teams",
      "CRM integration: Salesforce, MS Dynamics, Freshdesk, HubSpot, Zendesk, Zoho, Shopify",
      "Contact Centre platform customisation across all major vendors",
      "Bespoke development: booking systems, payment flows, self-service apps",
      "API and middleware integration design and build",
      "Legacy system migration with minimal risk",
      "Co-development with partners for white-label solutions",
    ],
    relatedIds: [
      "Solution Design",
      "CX Strategy",
      "Enablement",
      "ECX Contact Centre",
    ],
  },
  Enablement: {
    id: "enablement",
    family: "prosvcs",
    color: "#A37992",
    glow: "177,143,255",
    badge: "Professional Services · Training",
    tagline: "Training and adoption programmes for CX success",
    url: "https://www.ipintegration.com/services/contact-centre-training/",
    summary:
      "IPI's Enablement and Training services ensure that technology investments deliver their full potential — through structured training, adoption programmes and ongoing learning pathways for agents, supervisors, administrators and technical teams. IPI's Customer Success Management team supports long-term adoption and continuous improvement beyond go-live.",
    highlights: [
      "Structured training for agents, supervisors and administrators",
      "Technical platform training for IT and operations teams",
      "AI and automation adoption programmes",
      "Custom training programmes aligned to your workflows",
      "Customer Success Management for post-go-live adoption",
      "Partner enablement: train-the-trainer programmes available",
      "Digital learning resources and knowledge base access",
    ],
    relatedIds: [
      "CX Strategy",
      "Solution Design",
      "AI Sidekick",
      "AI Insights",
      "Platform Support",
    ],
  },
  "AI Enablement": {
    id: "ai-enablement",
    family: "prosvcs",
    color: "#A37992",
    glow: "177,143,255",
    badge: "Professional Services · AI",
    tagline: "Practical AI adoption for contact centres",
    url: "https://www.ipintegration.com/solutions/ai-contact-centre/ai-pathway/",
    summary:
      "IPI's AI Enablement service takes organisations on a structured journey to practical AI adoption — from initial assessment through to live deployment and ongoing optimisation. IPI's AI Pathway ensures contact centres adopt AI in a way that delivers measurable outcomes, not just technology for technology's sake.",
    highlights: [
      "AI Pathway: structured assessment, design, pilot and deploy",
      "Voicebot and Chatbot deployment and optimisation",
      "AI Sidekick and AI Insights implementation for ElasticCX",
      "ID Me voice biometrics deployment",
      "Use case identification and prioritisation",
      "ROI modelling and business case development",
      "Post-go-live optimisation and prompt tuning",
      "Training for agents and managers on AI tools",
    ],
    relatedIds: [
      "AI Sidekick",
      "AI Insights",
      "Voicebot",
      "Chatbot",
      "CX Strategy",
    ],
  },
};

// ProductModal component
function ProductModal({ productName, onClose, onNavigate }) {
  const p = PRODUCT_DATA[productName];
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!p)
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-box"
          style={{
            background: "#1A2B2E",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: 32,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            style={{
              color: "#8EA6BF",
              fontSize: 14,
              textAlign: "center",
              padding: "40px 0",
            }}
          >
            Product details coming soon for{" "}
            <strong style={{ color: "var(--text-primary)" }}>{productName}</strong>.
          </div>
          <button
            onClick={onClose}
            style={{
              display: "block",
              margin: "20px auto 0",
              background: "rgba(54,198,255,0.12)",
              border: "1px solid rgba(54,198,255,0.3)",
              borderRadius: 100,
              padding: "9px 22px",
              color: "#67D8FF",
              fontSize: 12,
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "inherit",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Close
          </button>
        </div>
      </div>
    );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        style={{
          background: "linear-gradient(160deg,#152224,#0E1A1C)",
          border: `1px solid rgba(${p.glow},0.35)`,
          boxShadow: `0 0 60px rgba(${p.glow},0.15), 0 32px 80px rgba(0,0,0,0.7)`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.14)",
            color: "var(--text-secondary)",
            fontSize: 16,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            fontFamily: "inherit",
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Header */}
        <div
          style={{
            padding: "28px 28px 20px",
            borderBottom: `1px solid rgba(${p.glow},0.15)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                background: `rgba(${p.glow},0.14)`,
                border: `1px solid rgba(${p.glow},0.35)`,
                borderRadius: 100,
                padding: "3px 11px",
                fontSize: 10,
                fontWeight: 800,
                color: p.color,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {p.badge}
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(20px,3vw,28px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 8,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            <span style={{ color: p.color }}>{productName}</span>
          </h2>
          <p
            style={{
              fontSize: 13,
              color: p.color,
              opacity: 0.75,
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            {p.tagline}
          </p>
          <p style={{ fontSize: 13.5, color: "#7AADA0", lineHeight: 1.8 }}>
            {p.summary}
          </p>
        </div>

        {/* Sections (optional) */}
        {p.sections && (
          <div
            style={{
              padding: "20px 28px 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 12,
            }}
          >
            {p.sections.map((s, i) => (
              <div
                key={i}
                style={{
                  background: `rgba(${p.glow},0.06)`,
                  border: `1px solid rgba(${p.glow},0.15)`,
                  borderRadius: 12,
                  padding: "14px 16px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: p.color,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {s.title}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: "#7AADA0",
                    lineHeight: 1.72,
                    margin: 0,
                  }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Key features */}
        <div style={{ padding: "20px 28px 0" }}>
          <div
            style={{
              fontSize: 10,
              fontWeight: 800,
              color: `rgba(${p.glow},0.6)`,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Key Features
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: "6px 14px",
            }}
          >
            {p.highlights.map((h, i) => (
              <div
                key={i}
                style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
              >
                <span
                  style={{
                    color: p.color,
                    fontSize: 11,
                    marginTop: 2,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{ fontSize: 12, color: "#B0CEC8", lineHeight: 1.55 }}
                >
                  {h}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        {p.relatedIds && p.relatedIds.length > 0 && (
          <div style={{ padding: "20px 28px 0" }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: `rgba(${p.glow},0.6)`,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Related Products
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {p.relatedIds.map((name) => {
                const rel = PRODUCT_DATA[name];
                const rc = rel ? rel.color : "#67D8FF";
                const rg = rel ? rel.glow : "103,216,255";
                return (
                  <button
                    key={name}
                    onClick={() => onNavigate(name)}
                    style={{
                      background: `rgba(${rg},0.1)`,
                      border: `1px solid rgba(${rg},0.35)`,
                      borderRadius: 100,
                      padding: "7px 16px",
                      fontSize: 11,
                      fontWeight: 800,
                      color: rc,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      letterSpacing: "0.04em",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `rgba(${rg},0.22)`;
                      e.currentTarget.style.borderColor = `rgba(${rg},0.6)`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `rgba(${rg},0.1)`;
                      e.currentTarget.style.borderColor = `rgba(${rg},0.35)`;
                    }}
                  >
                    {name} →
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Footer: IPI website link */}
        <div
          style={{
            padding: "18px 28px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: `rgba(${p.glow},0.35)`,
              fontWeight: 600,
            }}
          >
            Source: ipintegration.com
          </span>
          {(p.websiteUrl || p.url) && (
            <a
              href={p.websiteUrl || p.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: `rgba(${p.glow},0.1)`,
                border: `1px solid rgba(${p.glow},0.3)`,
                borderRadius: 100,
                padding: "7px 16px",
                fontSize: 11,
                fontWeight: 800,
                color: p.color,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `rgba(${p.glow},0.2)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = `rgba(${p.glow},0.1)`;
              }}
            >
              View on IPI website ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// PLATFORM STACK SECTION
// ═══════════════════════════════════════════════════════
const PRODUCT_ALIASES = {
  "PCI Cloud DTMF Suppression": "DTMF Suppression",
  "PCI Cloud (DTMF Suppression)": "DTMF Suppression",
};

function resolveProductKey(productName) {
  return PRODUCT_DATA[productName] ? productName : PRODUCT_ALIASES[productName] || null;
}

const STACK_LAYERS = [
  {
    id: "prof",
    label: "Professional Services & Consultancy",
    sublabel: "Strategic layer spanning the entire ecosystem",
    icon: "🎯",
    color: "#D4A843",
    glow: "212,168,67",
    bg: "linear-gradient(135deg,rgba(212,168,67,0.22),rgba(212,168,67,0.08))",
    border: "rgba(212,168,67,0.5)",
    items: ["CX Strategy", "Solution Design", "Integration", "Enablement"],
    desc: "Strategic services that guide and optimise every deployment — from customer experience strategy and solution design to integration and enablement.",
    span: "full",
  },
  {
    id: "ai-compliance",
    span: "half-row",
    layers: ["ai", "payments"],
  },
  {
    id: "payments",
    label: "PCI Cloud",
    sublabel: "PCI Cloud add-ons for UCaaS & CCaaS",
    icon: "🔐",
    color: "#C0887B",
    glow: "255,154,108",
    bg: "linear-gradient(135deg,rgba(255,154,108,0.18),rgba(255,154,108,0.07))",
    border: "rgba(255,154,108,0.45)",
    items: ["Pauseable", "PCI Cloud DTMF Suppression", "Digital Pay by Link"],
    desc: "Secure payment add-ons that protect cardholder data and support PCI-DSS compliance without disrupting the live customer conversation.",
    span: "half",
  },
  {
    id: "ai",
    label: "AI & Automation",
    sublabel: "AI add-ons for UCaaS & CCaaS",
    icon: "🤖",
    color: "#A37992",
    glow: "177,143,255",
    bg: "linear-gradient(135deg,rgba(177,143,255,0.18),rgba(177,143,255,0.07))",
    border: "rgba(177,143,255,0.45)",
    items: [
      "Voicebot",
      "Chatbot",
      "AI Sidekick",
      "AI Insights",
      "ID Me",
      "Q4 Me",
      "Send Me",
    ],
    desc: "Intelligent automation and real-time insight that improve self-service outcomes, support agents in-flight and continuously optimise customer interactions.",
    span: "half",
  },
  {
    id: "platform",
    label: "UCaaS & CCaaS Platform",
    sublabel: "Core communications platform",
    icon: "⚡",
    color: "#36C6FF",
    glow: "54,198,255",
    bg: "linear-gradient(135deg,rgba(54,198,255,0.22),rgba(54,198,255,0.08))",
    border: "rgba(54,198,255,0.55)",
    items: [
      "ECX Unified Communications",
      "ECX Contact Centre",
      "Omnichannel Engagement",
      "Workforce Enablement",
    ],
    desc: "The ECX core that powers unified communications and contact centre operations across channels, teams and customer journeys.",
    span: "full",
  },
  {
    id: "telephony",
    label: "Telephony Infrastructure",
    sublabel: "Core voice services",
    icon: "📡",
    color: "#67D8FF",
    glow: "54,198,255",
    bg: "linear-gradient(135deg,rgba(103,216,255,0.18),rgba(103,216,255,0.06))",
    border: "rgba(103,216,255,0.4)",
    items: ["SIP", "Numbering", "Routing", "IVR", "Call Recording"],
    desc: "Resilient telephony infrastructure that provides the voice capability required to run high-performing customer contact operations.",
    span: "full",
  },
  {
    id: "managed",
    label: "Managed Services",
    sublabel: "Foundation layer",
    icon: "⚙️",
    color: "#7B96A3",
    glow: "123,150,163",
    bg: "linear-gradient(135deg,rgba(68,82,92,0.9),rgba(82,102,114,0.88))",
    border: "rgba(123,150,163,0.45)",
    items: ["SiteConnect", "SD-WAN", "Managed Cloud", "Platform Support"],
    desc: "The operational backbone that underpins the full ecosystem, providing managed connectivity, cloud infrastructure and platform support.",
    span: "full",
  },
];

function StackLayerFull({ layer, isActive, onToggle, onProduct }) {
  return (
    <div
      className="stack-layer"
      style={{
        background: isActive
          ? layer.bg.replace(
              /0\.\d+\)/g,
              (m) => String(parseFloat(m) * 1.6) + ")",
            )
          : layer.bg,
        border: `1.5px solid ${isActive ? layer.border : layer.border.replace(/0\.\d+\)/, "0.25)")}`,
        boxShadow: isActive
          ? `0 0 32px rgba(${layer.glow},0.22), 0 8px 32px rgba(0,0,0,0.4)`
          : "0 2px 12px rgba(0,0,0,0.3)",
        padding: "0",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onClick={onToggle}
    >
      {/* Main row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 22px",
          cursor: "pointer",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: 11,
            background: `rgba(${layer.glow},0.15)`,
            border: `1px solid ${layer.color}40`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            flexShrink: 0,
            transition: "all 0.25s",
            boxShadow: isActive ? `0 0 14px rgba(${layer.glow},0.4)` : "none",
          }}
        >
          {layer.icon}
        </div>
        {/* Label */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: isActive ? layer.color : "#D0E8E0",
              letterSpacing: "-0.01em",
              fontFamily: "'Syne',sans-serif",
              transition: "color 0.25s",
              textShadow: isActive
                ? `0 0 16px rgba(${layer.glow},0.6)`
                : "none",
            }}
          >
            {layer.label}
          </div>
          <div
            style={{
              fontSize: 11,
              color: isActive
                ? `rgba(${layer.glow},0.7)`
                : "rgba(110,153,144,0.6)",
              fontWeight: 600,
              marginTop: 2,
              transition: "color 0.25s",
            }}
          >
            {layer.sublabel}
          </div>
        </div>
        {/* Product pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            justifyContent: "flex-end",
            flex: "0 1 auto",
            maxWidth: "55%",
          }}
        >
          {layer.items.map((item) => {
            const productKey = resolveProductKey(item);
            const hasDetail = !!productKey;
            return (
              <span
                key={item}
                className="stack-pill"
                onClick={
                  hasDetail
                    ? (e) => {
                        e.stopPropagation();
                        onProduct && onProduct(productKey);
                      }
                    : undefined
                }
                style={{
                  color: isActive ? layer.color : "rgba(180,210,204,0.65)",
                  borderColor: isActive
                    ? `${layer.color}50`
                    : "rgba(255,255,255,0.1)",
                  background: isActive
                    ? `rgba(${layer.glow},0.12)`
                    : "rgba(255,255,255,0.05)",
                  cursor: hasDetail ? "pointer" : "default",
                  position: "relative",
                }}
              >
                {item}
                {hasDetail && (
                  <span style={{ marginLeft: 4, fontSize: 9, opacity: 0.6 }}>
                    ↗
                  </span>
                )}
              </span>
            );
          })}
        </div>
        {/* Expand chevron */}
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s",
            transform: isActive ? "rotate(180deg)" : "none",
            color: isActive ? layer.color : "rgba(180,210,204,0.4)",
            fontSize: 14,
          }}
        >
          ▾
        </div>
      </div>

      {/* Expanded description */}
      {isActive && (
        <div
          style={{
            padding: "0 22px 18px 80px",
            animation: "fadeUp 0.25s ease both",
          }}
        >
          <div
            style={{
              height: 1,
              background: `linear-gradient(90deg,rgba(${layer.glow},0.2),transparent)`,
              marginBottom: 14,
            }}
          />
          <p style={{ fontSize: 13, color: "#7aa09a", lineHeight: 1.82 }}>
            {layer.desc}
          </p>
        </div>
      )}
    </div>
  );
}

function PlatformStack() {
  const [activeId, setActiveId] = React.useState(null);
  const [productModal, setProductModal] = React.useState(null);

  function toggle(id) {
    setActiveId((prev) => (prev === id ? null : id));
  }

  const layerById = React.useMemo(() => {
    const entries = STACK_LAYERS.filter((layer) => layer.label).map((layer) => [
      layer.id,
      layer,
    ]);
    return new Map(entries);
  }, []);

  const visibleLayers = React.useMemo(
    () =>
      STACK_LAYERS.filter((layer) => layer.span !== "half").map((layer) => {
        if (layer.span === "half-row") {
          return {
            ...layer,
            layers: layer.layers.map((id) => layerById.get(id)).filter(Boolean),
          };
        }
        return layer;
      }),
    [layerById],
  );

  return (
    <React.Fragment>
      <section
        style={{
          maxWidth: "none",
          margin: "0",
          padding: "52px 44px 0",
          width: "100%",
        }}
      >
        {/* Section header removed per design update */}

        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2
            style={{
              fontSize: "clamp(20px,2.8vw,32px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 10,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            How the platform{" "}
            <span style={{ color: "#36C6FF" }}>layers together</span>
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#8EA6BF",
              maxWidth: "none",
              margin: "0",
              lineHeight: 1.75,
            }}
          >
            Each layer can be sold independently or combined into a complete,
            integrated solution. Click any{" "}
            <span style={{ color: "#67D8FF", fontWeight: 700 }}>
              product pill ↗
            </span>{" "}
            to explore full product details.
          </p>
        </div>

        {/* Stack */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            position: "relative",
          }}
        >
          {/* Left rail label */}
          <div
            style={{
              position: "absolute",
              left: -38,
              top: 0,
              bottom: 0,
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                fontSize: 9,
                fontWeight: 800,
                color: "rgba(54,198,255,0.3)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                whiteSpace: "normal",
              }}
            >
              Adding value ↑ · Building upwards
            </div>
          </div>

          {visibleLayers.map((layer, index) => (
            <React.Fragment key={layer.id}>
              {layer.span === "half-row" ? (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 12,
                    width: "100%",
                  }}
                >
                  {layer.layers.map((subLayer) => (
                    <StackLayerFull
                      key={subLayer.id}
                      layer={subLayer}
                      isActive={activeId === subLayer.id}
                      onToggle={() => toggle(subLayer.id)}
                      onProduct={setProductModal}
                    />
                  ))}
                </div>
              ) : (
                <StackLayerFull
                  layer={layer}
                  isActive={activeId === layer.id}
                  onToggle={() => toggle(layer.id)}
                  onProduct={setProductModal}
                />
              )}

              {index < visibleLayers.length - 1 && (
                <div className="stack-connector">
                  <svg
                    width="16"
                    height="22"
                    viewBox="0 0 16 22"
                    style={{ zIndex: 1 }}
                  >
                    <path
                      d="M8 0 L8 22"
                      stroke="rgba(54,198,255,0.3)"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M3 16 L8 22 L13 16"
                      stroke="rgba(54,198,255,0.4)"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}

        </div>
      </section>

      {/* Product Modal */}
      {productModal && (
        <ProductModal
          productName={productModal}
          onClose={() => setProductModal(null)}
          onNavigate={(name) => setProductModal(name)}
        />
      )}
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════
// SIX PRODUCT PILLARS (Page 3)
// ═══════════════════════════════════════════════════════
const PILLARS = [
  {
    id: "telephony",
    num: "01",
    icon: "📡",
    label: "Telephony Infrastructure",
    sublabel: "The foundation of every CX solution",
    color: "#67D8FF",
    glow: "103,216,255",
    bg: "linear-gradient(135deg,rgba(103,216,255,0.14),rgba(103,216,255,0.04))",
    border: "rgba(103,216,255,0.4)",
    positioning: "Enterprise-grade telephony built for modern cloud CX.",
    products: [
      "SIP Trunking",
      "Global Numbering",
      "Intelligent Routing",
      "IVR Solutions",
      "Call Recording",
      "Carrier Services",
    ],
    partnerValue: [
      "Replace legacy telco providers",
      "Enable cloud migration",
      "Support any CCaaS platform",
    ],
    opportunityLabel: "Partner Value",
  },
  {
    id: "ucaas",
    num: "02",
    icon: "⚡",
    label: "UCaaS & CCaaS",
    sublabel: "The core communications platform partners sell",
    color: "#36C6FF",
    glow: "54,198,255",
    bg: "linear-gradient(135deg,rgba(54,198,255,0.18),rgba(54,198,255,0.05))",
    border: "rgba(54,198,255,0.5)",
    positioning:
      "A flexible communications platform for exceptional customer contact.",
    products: [
      "ECX Unified Communications",
      "ECX Contact Centre",
      "Omnichannel Engagement",
      "Workforce Tools",
    ],
    partnerValue: [
      "Replace legacy PBX",
      "Replace on-prem contact centres",
      "Sell digital CX platforms",
    ],
    opportunityLabel: "Partner Opportunity",
    verticals: null,
  },
  {
    id: "ai",
    num: "03",
    icon: "🤖",
    label: "AI & Automation",
    sublabel: "One of the largest growth areas",
    color: "#A37992",
    glow: "177,143,255",
    bg: "linear-gradient(135deg,rgba(177,143,255,0.16),rgba(177,143,255,0.04))",
    border: "rgba(177,143,255,0.45)",
    positioning: "AI that enhances every stage of the customer interaction.",
    products: [
      "Voicebot",
      "Chatbot",
      "AI Sidekick",
      "AI Insights",
      "ID Me",
      "Q4 Me",
      "Send Me",
    ],
    partnerValue: [
      "Reduce call volumes",
      "Improve agent productivity",
      "Deliver automation",
    ],
    opportunityLabel: "Partner Value",
  },
  {
    id: "payments",
    num: "04",
    icon: "🔐",
    label: "Secure Payments",
    sublabel: "A major differentiator for IPI",
    color: "#C0887B",
    glow: "255,154,108",
    bg: "linear-gradient(135deg,rgba(255,154,108,0.16),rgba(255,154,108,0.04))",
    border: "rgba(255,154,108,0.42)",
    positioning:
      "Secure, PCI compliant payment experiences embedded into customer conversations.",
    products: [
      "Pauseable",
      "PCI Cloud",
      "DTMF Suppression",
      "Digital Pay by Link",
    ],
    partnerValue: [
      "Enable secure payments during calls",
      "Sell into regulated industries",
      "Unlock compliance-led deals",
    ],
    opportunityLabel: "Partner Value",
    verticals: ["Financial Services", "Utilities", "Retail", "Insurance"],
  },
  {
    id: "managed",
    num: "05",
    icon: "⚙️",
    label: "Managed Services",
    sublabel: "Fully managed CX environments",
    color: "#7B96A3",
    glow: "123,150,163",
    bg: "linear-gradient(135deg,rgba(123,150,163,0.16),rgba(123,150,163,0.04))",
    border: "rgba(123,150,163,0.42)",
    positioning:
      "Managed infrastructure for mission-critical customer contact.",
    products: [
      "SiteConnect",
      "SD-WAN",
      "Managed Cloud",
      "Network Monitoring",
      "Platform Support",
    ],
    partnerValue: [
      "White-label managed services",
      "Recurring revenue",
      "Customer lifecycle management",
    ],
    opportunityLabel: "Partner Opportunity",
  },
  {
    id: "prosvcs",
    num: "06",
    icon: "🎯",
    label: "Professional Services",
    sublabel: "One of IPI's biggest differentiators",
    color: "#D4A843",
    glow: "212,168,67",
    bg: "linear-gradient(135deg,rgba(212,168,67,0.14),rgba(212,168,67,0.03))",
    border: "rgba(212,168,67,0.4)",
    positioning:
      "Deep CX expertise that helps partners deliver complex customer engagement solutions.",
    products: [
      "CX Consulting",
      "Architecture Design",
      "Platform Deployment",
      "Integration Services",
      "AI Enablement",
      "Training & Adoption",
    ],
    partnerValue: [
      "Win larger enterprise deals",
      "Reduce implementation risk",
      "Deliver transformation projects",
    ],
    opportunityLabel: "Partner Value",
  },
];

function PillarCard({ pillar, isActive, onClick }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: isActive
          ? pillar.bg.replace(
              /0\.\d+\)/g,
              (m) => String(Math.min(parseFloat(m) * 2, 0.55)) + ")",
            )
          : hovered
            ? pillar.bg
            : "rgba(255,255,255,0.025)",
        border: `1.5px solid ${isActive ? pillar.border : hovered ? pillar.border.replace(/0\.\d+\)/, "0.35)") : "rgba(255,255,255,0.08)"}`,
        borderRadius: 18,
        padding: "24px",
        cursor: "pointer",
        transition: "all 0.25s ease",
        boxShadow: isActive
          ? `0 0 40px rgba(${pillar.glow},0.18), 0 12px 40px rgba(0,0,0,0.4)`
          : hovered
            ? `0 0 20px rgba(${pillar.glow},0.1)`
            : "0 2px 10px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Number watermark */}
      <div
        style={{
          position: "absolute",
          top: 12,
          right: 16,
          fontSize: 52,
          fontWeight: 800,
          color: `rgba(${pillar.glow},0.06)`,
          fontFamily: "'Syne',sans-serif",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        {pillar.num}
      </div>

      {/* Icon + label */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 14,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            background: `rgba(${pillar.glow},0.14)`,
            border: `1px solid rgba(${pillar.glow},0.3)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            flexShrink: 0,
            transition: "all 0.25s",
            boxShadow: isActive ? `0 0 14px rgba(${pillar.glow},0.4)` : "none",
          }}
        >
          {pillar.icon}
        </div>
        <div style={{ paddingTop: 2 }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: isActive || hovered ? pillar.color : "#D0E8E0",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              fontFamily: "'Syne',sans-serif",
              transition: "color 0.25s",
              textShadow: isActive
                ? `0 0 16px rgba(${pillar.glow},0.5)`
                : "none",
            }}
          >
            {pillar.label}
          </div>
          <div
            style={{
              fontSize: 11,
              color: `rgba(${pillar.glow},0.6)`,
              fontWeight: 600,
              marginTop: 3,
            }}
          >
            {pillar.sublabel}
          </div>
        </div>
      </div>

      {/* Products */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 14 }}
      >
        {pillar.products.map((p) => (
          <span
            key={p}
            style={{
              background: `rgba(${pillar.glow},0.1)`,
              border: `1px solid rgba(${pillar.glow},0.22)`,
              borderRadius: 100,
              padding: "3px 10px",
              fontSize: 10.5,
              fontWeight: 700,
              color:
                isActive || hovered ? pillar.color : "rgba(180,210,204,0.65)",
              letterSpacing: "0.02em",
              transition: "color 0.2s",
            }}
          >
            {p}
          </span>
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          height: 1,
          background: `linear-gradient(90deg,rgba(${pillar.glow},0.2),transparent)`,
          marginBottom: 12,
        }}
      />

      {/* Partner value */}
      <div style={{ marginBottom: pillar.verticals ? 10 : 0 }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 800,
            color: `rgba(${pillar.glow},0.5)`,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 7,
          }}
        >
          {pillar.opportunityLabel}
        </div>
        {pillar.partnerValue.map((v, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 7,
              marginBottom: 4,
            }}
          >
            <span
              style={{
                color: pillar.color,
                fontSize: 10,
                marginTop: 1,
                flexShrink: 0,
              }}
            >
              →
            </span>
            <span
              style={{ fontSize: 11.5, color: "#7AADA0", lineHeight: 1.55 }}
            >
              {v}
            </span>
          </div>
        ))}
      </div>

      {/* Verticals (payments only) */}
      {pillar.verticals && (
        <div>
          <div
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: `rgba(${pillar.glow},0.5)`,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 7,
            }}
          >
            Target Verticals
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {pillar.verticals.map((v) => (
              <span
                key={v}
                style={{
                  background: `rgba(${pillar.glow},0.08)`,
                  border: `1px solid rgba(${pillar.glow},0.2)`,
                  borderRadius: 6,
                  padding: "2px 8px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: `rgba(${pillar.glow},0.8)`,
                }}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Positioning quote */}
      <div
        style={{
          marginTop: 14,
          paddingTop: 12,
          borderTop: `1px solid rgba(${pillar.glow},0.15)`,
        }}
      >
        <p
          style={{
            fontSize: 11.5,
            color: pillar.color,
            fontStyle: "italic",
            lineHeight: 1.6,
            opacity: 0.85,
            margin: 0,
          }}
        >
          &ldquo;{pillar.positioning}&rdquo;
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// PARTNER ENABLEMENT HUB (Page 2)
// ═══════════════════════════════════════════════════════
const TIERS = [
  {
    id: "gold",
    label: "Gold Partner",
    badge: "Strategic",
    color: "#D4A843",
    glow: "212,168,67",
    bg: "linear-gradient(135deg,rgba(212,168,67,0.15),rgba(212,168,67,0.05))",
    border: "rgba(212,168,67,0.45)",
    icon: "🥇",
    margin: "40%",
    items: [
      { check: true, text: "Dedicated pre-sales support" },
      { check: true, text: "Joint GTM planning" },
      { check: true, text: "Co-funded demand gen" },
      { check: true, text: "Priority deal registration" },
      { check: true, text: "Full demo environment access" },
      { check: true, text: "White label platform option", highlight: true },
    ],
  },
  {
    id: "silver",
    label: "Silver Partner",
    badge: "Preferred",
    color: "#67D8FF",
    glow: "54,198,255",
    bg: "linear-gradient(135deg,rgba(54,198,255,0.15),rgba(54,198,255,0.05))",
    border: "rgba(54,198,255,0.45)",
    icon: "🥈",
    margin: "30%",
    items: [
      { check: true, text: "Pre-sales support on request" },
      { check: true, text: "Deal registration portal" },
      { check: true, text: "Sales enablement kit" },
      { check: true, text: "Sandbox demo access" },
      { check: false, text: "Joint marketing (selective)" },
      { check: true, text: "White label option (selective)", highlight: true },
    ],
  },
  {
    id: "reg",
    label: "Registered",
    badge: "Authorised",
    color: "#7B96A3",
    glow: "123,150,163",
    bg: "linear-gradient(135deg,rgba(123,150,163,0.15),rgba(123,150,163,0.05))",
    border: "rgba(123,150,163,0.40)",
    icon: "🔵",
    margin: "20%",
    items: [
      { check: true, text: "Deal registration" },
      { check: true, text: "Partner portal access" },
      { check: true, text: "Sales collateral pack" },
      { check: false, text: "Pre-sales on strategic deals" },
      { check: false, text: "Co-marketing (case by case)" },
    ],
  },
];

const RESOURCES = [
  {
    id: "sales-kit",
    icon: "📦",
    category: "Sales Enablement",
    title: "Partner Sales Kit",
    desc: "Complete kit including one-pager, battle card, demo script, and pricing guide. Ready to co-brand.",
    tags: ["PDF", "PPTX", "Ready"],
    tagColor: "#67D8FF",
    glow: "54,198,255",
    cta: "Download Kit",
  },
  {
    id: "tech-brief",
    icon: "🏗️",
    category: "Technical",
    title: "Technical Integration Brief",
    desc: "API documentation, SBC requirements, Azure prerequisites, and CCaaS connector matrix.",
    tags: ["Technical Brief"],
    tagColor: "#A37992",
    glow: "177,143,255",
    cta: "View Brief",
  },
  {
    id: "cosell",
    icon: "📊",
    category: "Customer Facing",
    title: "Co-Sell Presentation",
    desc: "Partner-customisable slide deck for joint customer meetings. IPI + partner narrative built in.",
    tags: ["Slide Deck"],
    tagColor: "#36C6FF",
    glow: "54,198,255",
    cta: "Get Deck",
  },
  {
    id: "compliance",
    icon: "🔐",
    category: "Compliance",
    title: "Compliance Summary",
    desc: "PCI DSS 4.0.1 scope summary, descoping proof points, and QSA statement template.",
    tags: ["Compliance Pack"],
    tagColor: "#C0887B",
    glow: "255,154,108",
    cta: "Download Pack",
  },
  {
    id: "cert",
    icon: "🎓",
    category: "Training",
    title: "Partner Certification",
    desc: "Online certification covering product knowledge, objection handling, and demo delivery. Awarded per rep.",
    tags: ["Online", "Self-Service"],
    tagColor: "#D4A843",
    glow: "212,168,67",
    cta: "Start Course",
  },
  {
    id: "deal-reg",
    icon: "🤝",
    category: "Deal Support",
    title: "Deal Registration",
    desc: "Register a Cloud PCI opportunity for protection, partner margin, and access to IPI pre-sales support.",
    tags: ["Portal Access"],
    tagColor: "#67D8FF",
    glow: "54,198,255",
    cta: "Register Deal",
  },
  {
    id: "prospect-search",
    icon: "🔎",
    category: "Deal Intelligence",
    title: "Partner Prospect Tool",
    desc: "Explore, filter and rank channel prospects directly from the in-app CSV-powered dataset.",
    tags: ["Web App", "ICP"],
    tagColor: "#36C6FF",
    glow: "54,198,255",
    cta: "Launch Tool",
  },
];

function EnablementHub({ onBack, onNavigate }) {
  const sectionShell = {
    maxWidth: "none",
    margin: "0",
    padding: "clamp(52px,6vw,72px) 44px 0",
    width: "100%",
  };
  const sectionHeaderWrap = {
    maxWidth: 780,
    marginBottom: 26,
  };
  const sectionEyebrow = {
    margin: "0 0 10px",
    fontSize: 10,
    fontWeight: 800,
    color: "rgba(103,216,255,0.78)",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  };
  const sectionTitle = {
    margin: "0 0 10px",
    fontSize: "clamp(24px,2.7vw,34px)",
    lineHeight: 1.15,
    letterSpacing: "-0.025em",
    color: "#F2FAF7",
    fontFamily: "'Syne',sans-serif",
  };
  const sectionDescription = {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.72,
    color: "#86ABA3",
    maxWidth: 720,
  };
  const standardCard = {
    background: "rgba(255,255,255,0.03)",
    borderRadius: 18,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    boxShadow: "0 14px 32px rgba(6,14,24,0.2)",
  };

  return (
    <React.Fragment>
      <Bg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          animation: "fadeIn 0.35s ease both",
        }}
      >
        <div className="brand-line" style={{ margin: "40px 44px 0" }} />

        {/* PARTNER TIERS */}
        <div
          style={{
            margin: "0 44px",
            height: 1,
            background:
              "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)",
            opacity: 0.7,
          }}
        />
        <div style={sectionShell}>
          <div style={sectionHeaderWrap}>
            <h2 style={sectionTitle}>Partner Tiers</h2>
            <p style={sectionDescription}>
              Each partner tier combines commercial benefits, enablement support,
              and clear commitments designed to drive mutual growth.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            {[
              {
                name: "Gold",
                subtitle: "Strategic growth partners",
                discount: "40% Discount",
                color: "#D4A843",
                glow: "212,168,67",
                featured: true,
                benefits: [
                  "Highest partner margin tier",
                  "Priority partner enablement",
                  "Dedicated partner management",
                  "Marketing collaboration support",
                  "20 hours of SDR resource per month",
                ],
                commitments: [
                  "Attain Certification across Pro Services, Pre Sales & Sales",
                  "Attain Revenue Quotas of £500k per year",
                  "Monthly Pipeline Reviews & Support Reviews",
                  "Quarterly QBRs",
                  "Account Mapping Sessions",
                ],
              },
              {
                name: "Silver",
                subtitle: "Scaling partners",
                discount: "30% Discount",
                color: "#67D8FF",
                glow: "103,216,255",
                benefits: [
                  "Competitive partner margins",
                  "Partner enablement and training",
                  "Marketing support",
                  "Access to sales and solution resources",
                  "8 hours of SDR resource per month",
                ],
                commitments: [
                  "Attain Certification across Pro Services, Pre Sales & Sales",
                  "Attain Revenue Quotas of £250k per year",
                  "Monthly Pipeline Reviews & Bi Monthly Support Reviews",
                  "Quarterly QBRs",
                  "Account Mapping Sessions",
                ],
              },
              {
                name: "Registered",
                subtitle: "Entry partner tier",
                discount: "20% Discount",
                color: "#7B96A3",
                glow: "123,150,163",
                benefits: [
                  "Entry access to the partner program",
                  "Sales and presales onboarding",
                  "Access to partner resources",
                  "Apply for SDR resource for adhoc Campaigns",
                ],
                commitments: [
                  "Attain Certification for Pre Sales & Sales",
                  "Attain Revenue Quotas of £50k per year",
                  "Quarterly Pipeline Reviews",
                  "Bi Annual Business Reviews",
                  "Account Mapping Sessions",
                ],
              },
            ].map((tier) => (
              <div
                key={tier.name}
                style={{
                  background: tier.featured
                    ? `linear-gradient(145deg,rgba(${tier.glow},0.16),rgba(255,255,255,0.03))`
                    : "rgba(255,255,255,0.03)",
                  border: tier.featured
                    ? `1px solid rgba(${tier.glow},0.45)`
                    : `1px solid rgba(${tier.glow},0.24)`,
                  borderRadius: 20,
                  padding: 22,
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                  gap: 16,
                  boxShadow: tier.featured
                    ? `0 14px 34px rgba(${tier.glow},0.2)`
                    : `0 10px 28px rgba(${tier.glow},0.1)`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    borderRadius: 999,
                    padding: "7px 12px",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: "#071315",
                    background: `linear-gradient(135deg, ${tier.color}, rgba(255,255,255,0.92))`,
                    boxShadow: `0 8px 20px rgba(${tier.glow},0.28)`,
                    border: "1px solid rgba(255,255,255,0.45)",
                  }}
                >
                  {tier.discount}
                </div>
                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 28,
                      color: tier.color,
                      letterSpacing: "-0.03em",
                      fontFamily: "'Syne',sans-serif",
                    }}
                  >
                    {tier.name}
                  </h3>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 13,
                      color: "#B7D0CA",
                      fontWeight: 600,
                    }}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "var(--text-secondary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Benefits
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {tier.benefits.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: 13,
                          color: "#D8EBE5",
                          lineHeight: 1.55,
                        }}
                      >
                        <span style={{ color: tier.color, lineHeight: 1 }}>•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "var(--text-secondary)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Commitments
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                    {tier.commitments.map((item) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 8,
                          fontSize: 12,
                          color: "#C6DFD8",
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: tier.color, lineHeight: 1 }}>•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* HOW PARTNERS GROW WITH IPI */}
        <div
          style={{
            ...sectionShell,
            background: "rgba(255,255,255,0.012)",
            borderRadius: 24,
            marginTop: 16,
            paddingBottom: "clamp(24px,3vw,32px)",
          }}
        >
          <div style={sectionHeaderWrap}>
            <p style={sectionEyebrow}>Growth Journey</p>
            <h2 style={sectionTitle}>How Partners Grow With IPI</h2>
            <p style={sectionDescription}>
              Partners can start with one solution, win their first
              opportunities, and then expand into broader customer outcomes and
              larger recurring revenue streams.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 14,
            }}
          >
            {[
              {
                title: "Enable",
                desc: "Prepare partners with the skills, knowledge and resources required to succeed.",
                points: [
                  "Complete sales and presales onboarding",
                  "Achieve certification across relevant roles",
                  "Align on target markets and propositions",
                  "Identify initial opportunities and campaigns",
                ],
                color: "103,216,255",
              },
              {
                title: "Land",
                desc: "Win the first customer opportunities and establish recurring revenue foundations.",
                points: [
                  "Launch active pipeline development",
                  "Progress opportunities with IPI sales and presales support",
                  "Use marketing campaigns and SDR assistance",
                  "Secure initial customer wins",
                ],
                color: "212,168,67",
              },
              {
                title: "Expand",
                desc: "Grow revenue and deepen customer relationships through broader solutions.",
                points: [
                  "Expand within existing customer accounts",
                  "Cross-sell AI, payments and managed services",
                  "Increase recurring and services revenue",
                  "Move toward strategic partner status",
                ],
                color: "123,150,163",
              },
            ].map((step, idx, arr) => (
              <div
                key={step.title}
                style={{
                  ...standardCard,
                  position: "relative",
                  border: `1px solid rgba(${step.color},0.3)`,
                  boxShadow: `0 12px 28px rgba(${step.color},0.12)`,
                }}
              >
                {idx < arr.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: -8,
                      transform: "translateY(-50%)",
                      color: `rgba(${step.color},0.7)`,
                      fontWeight: 800,
                      fontSize: 18,
                    }}
                  >
                    →
                  </div>
                )}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 86,
                    padding: "5px 10px",
                    borderRadius: 999,
                    border: `1px solid rgba(${step.color},0.35)`,
                    background: `rgba(${step.color},0.12)`,
                    fontSize: 11,
                    fontWeight: 800,
                    color: `rgb(${step.color})`,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {step.title}
                </div>
                <p style={{ margin: "0 0 12px", fontSize: 13, color: "#C9DFD9", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {step.points.map((point) => (
                    <div key={point} style={{ display: "flex", gap: 8, fontSize: 13, color: "#C0DAD3", lineHeight: 1.55 }}>
                      <span style={{ color: `rgb(${step.color})` }}>•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO SHOULD PARTNER */}
        <div style={sectionShell}>
          <div style={sectionHeaderWrap}>
            <p style={{ ...sectionEyebrow, color: "rgba(212,168,67,0.72)" }}>Partner Profile</p>
            <h2 style={sectionTitle}>Who Should Partner With Us</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 14,
            }}
          >
            {[
              {
                title: "Reseller Partners",
                who: "Telecom, UC and CX resellers selling directly to end customers.",
                fit: "They already own customer relationships and can embed IPI into broader communications roadmaps.",
                gain: "Platform margin, deployment revenue and recurring account growth.",
                glow: "54,198,255",
              },
              {
                title: "Managed Service Providers",
                who: "Providers packaging solutions as managed services with long-term contracts.",
                fit: "They combine platform delivery with support, monitoring and optimisation expertise.",
                gain: "Recurring margin plus high-value managed services revenue.",
                glow: "123,150,163",
              },
              {
                title: "Consulting Partners",
                who: "CX and transformation consultancies shaping customer strategy and technology choices.",
                fit: "They influence solution selection and lead business case development.",
                gain: "Referral income, project consulting fees and strategic programme engagements.",
                glow: "177,143,255",
              },
              {
                title: "Technology & ISV Partners",
                who: "Software vendors and ecosystem players integrating products with IPI platforms.",
                fit: "They create differentiated joint solutions and improve customer outcomes.",
                gain: "Co-sell motion, integration-led opportunities and shared account expansion.",
                glow: "255,154,108",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(${card.glow},0.26)`,
                  borderRadius: 18,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <h3 style={{ margin: 0, fontSize: 18, color: "#E6F3EF", fontFamily: "'Syne',sans-serif" }}>
                  {card.title}
                </h3>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "#D4A843", textTransform: "uppercase" }}>
                  Who They Are
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#BCD6D0", lineHeight: 1.55 }}>{card.who}</p>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "#67D8FF", textTransform: "uppercase" }}>
                  Why They Fit
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#BCD6D0", lineHeight: 1.55 }}>{card.fit}</p>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", color: "#C4DBD5", textTransform: "uppercase" }}>
                  What They Can Gain
                </div>
                <p style={{ margin: 0, fontSize: 13, color: "#D8ECE7", lineHeight: 1.55 }}>{card.gain}</p>
              </div>
            ))}
          </div>
        </div>

        {/* REVENUE OPPORTUNITIES */}
        <div style={sectionShell}>
          <div style={sectionHeaderWrap}>
            <p style={sectionEyebrow}>Commercial Outcomes</p>
            <h2 style={sectionTitle}>Revenue Opportunities</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 14,
            }}
          >
            {[
              {
                icon: "🔁",
                title: "Recurring Revenue",
                points: [
                  "Monthly recurring revenue from CCaaS and UCaaS platforms",
                  "SIP, telephony and connectivity services",
                  "Ongoing platform subscriptions",
                ],
                glow: "103,216,255",
              },
              {
                icon: "📈",
                title: "Cross-Sell & Upsell",
                points: [
                  "Secure Payments solutions",
                  "AI automation services",
                  "Workforce engagement capabilities",
                  "Additional platform modules",
                ],
                glow: "212,168,67",
              },
              {
                icon: "🛠️",
                title: "Services Revenue",
                points: [
                  "Solution design",
                  "Professional services",
                  "Implementation projects",
                  "Customer consultancy",
                ],
                glow: "123,150,163",
              },
              {
                icon: "🏢",
                title: "Strategic Account Growth",
                points: [
                  "Expansion across departments",
                  "Platform standardisation across organisations",
                  "Multi-site deployments",
                  "Long-term managed service opportunities",
                ],
                glow: "177,143,255",
              },
            ].map((block) => (
              <div
                key={block.title}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(${block.glow},0.26)`,
                  borderRadius: 18,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: 24 }}>{block.icon}</div>
                <h3 style={{ margin: 0, fontSize: 17, color: "#EAF4F1", fontFamily: "'Syne',sans-serif" }}>
                  {block.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {block.points.map((point) => (
                    <div key={point} style={{ display: "flex", gap: 8, fontSize: 13, color: "#C6DFD8", lineHeight: 1.55 }}>
                      <span style={{ color: "#67D8FF" }}>•</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RESOURCES GRID */}
        <div style={sectionShell}>
          <div style={{ ...sectionHeaderWrap, marginBottom: 24 }}>
            <p style={sectionEyebrow}>Enablement Library</p>
            <h2 style={sectionTitle}>Sales & Technical Resources</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 14,
            }}
          >
            {RESOURCES.map((res) => (
              <div
                key={res.id}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16,
                  padding: "22px",
                  transition: "all 0.25s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${res.glow},0.06)`;
                  e.currentTarget.style.borderColor = `rgba(${res.glow},0.25)`;
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 8px 28px rgba(${res.glow},0.12)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Resource header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 11,
                        background: `rgba(${res.glow},0.12)`,
                        border: `1px solid rgba(${res.glow},0.25)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        flexShrink: 0,
                      }}
                    >
                      {res.icon}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          color: res.tagColor,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          opacity: 0.8,
                          marginBottom: 3,
                        }}
                      >
                        {res.category}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#EAF5FF",
                          lineHeight: 1.2,
                          fontFamily: "'Syne',sans-serif",
                        }}
                      >
                        {res.title}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {res.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: `rgba(${res.glow},0.1)`,
                        border: `1px solid rgba(${res.glow},0.3)`,
                        borderRadius: 100,
                        padding: "2px 9px",
                        fontSize: 10,
                        fontWeight: 700,
                        color: res.tagColor,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Description */}
                <p
                  style={{
                    fontSize: 12,
                    color: "#7E97B4",
                    lineHeight: 1.72,
                    flex: 1,
                  }}
                >
                  {res.desc}
                </p>
                {/* CTA */}
                <button
                  style={{
                    background: `rgba(${res.glow},0.12)`,
                    border: `1px solid rgba(${res.glow},0.35)`,
                    borderRadius: 9,
                    padding: "9px 16px",
                    fontSize: 12,
                    fontWeight: 800,
                    color: res.tagColor,
                    cursor: "pointer",
                    fontFamily: "'Nunito Sans',sans-serif",
                    letterSpacing: "0.04em",
                    transition: "all 0.2s",
                    textAlign: "center",
                    width: "100%",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `rgba(${res.glow},0.22)`;
                    e.currentTarget.style.borderColor = `rgba(${res.glow},0.6)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `rgba(${res.glow},0.12)`;
                    e.currentTarget.style.borderColor = `rgba(${res.glow},0.35)`;
                  }}
                  onClick={() => {
                    if (res.id === "prospect-search" && onNavigate) {
                      onNavigate("prospect");
                    }
                  }}
                >
                  {res.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ padding: "40px 44px 44px", marginTop: "auto" }}>
          <div className="brand-line" style={{ marginBottom: 20 }} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: 10,
                color: "rgba(54,198,255,0.3)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              © 2026 IP Integration Ltd · IPI Partner Advantage · Partner
              Confidential
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes liveDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      `}</style>
    </React.Fragment>
  );
}

function ProspectToolPage() {
  const STORAGE_VIEWS_KEY = 'partnerProspectSavedViews';
  const STORAGE_DEFAULT_KEY = 'partnerProspectDefaultViewId';
  const DEFAULT_FILTERS = {
    name: '', industry: '', category: '', channel_role: '', channel_segment: '', country: '', city: '',
    trading_status: '', adopter_profile: '', partnerTierName: '', minEmployees: '', maxEmployees: '', minRevenue: '',
    maxRevenue: '', hasWebsite: false, hasLinkedIn: false, hasEmail: false, minScore: 0
  };
  const ALL_COLUMNS = [
    { key: 'rank', label: '#', essential: true },
    { key: 'displayName', label: 'Company', essential: true },
    { key: 'idealPartnerScore', label: 'Score', essential: true },
    { key: 'partnerTierName', label: 'Tier', essential: true },
    { key: 'channel_role', label: 'Role', essential: true },
    { key: 'channel_segment', label: 'Segment', essential: true },
    { key: 'industry', label: 'Industry' },
    { key: 'category', label: 'Category', hiddenByDefault: true },
    { key: 'displayRevenue', label: '£' },
    { key: 'displayEmployees', label: 'Employees', hiddenByDefault: true },
    { key: 'city', label: 'City', hiddenByDefault: true },
    { key: 'country', label: 'Country', hiddenByDefault: true },
    { key: 'website', label: 'Web' },
    { key: 'linkedin', label: 'LinkedIn', hiddenByDefault: true },
    { key: 'contactCount', label: 'Contacts', hiddenByDefault: true },
    { key: 'trading_status', label: 'Trading Status', hiddenByDefault: true },
    { key: 'actions', label: 'Actions', essential: true }
  ];
  const DEFAULT_VISIBLE_COLUMNS = ALL_COLUMNS.filter((c) => !c.hiddenByDefault).map((c) => c.key);
  const DEFAULT_COLUMN_ORDER = ALL_COLUMNS.map((c) => c.key);

  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [selectedRowId, setSelectedRowId] = React.useState(null);
  const drawerBodyRef = React.useRef(null);
  const [view, setView] = React.useState('table');
  const [top50, setTop50] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('score_desc');
  const [searchInput, setSearchInput] = React.useState('');
  const [filters, setFilters] = React.useState(DEFAULT_FILTERS);
  const [savedViews, setSavedViews] = React.useState([]);
  const [defaultViewId, setDefaultViewId] = React.useState('');
  const [visibleColumns, setVisibleColumns] = React.useState(DEFAULT_VISIBLE_COLUMNS);
  const [columnOrder] = React.useState(DEFAULT_COLUMN_ORDER);
  const [showColumnMenu, setShowColumnMenu] = React.useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = React.useState(false);
  const [saveViewOpen, setSaveViewOpen] = React.useState(false);
  const [saveViewForm, setSaveViewForm] = React.useState({ name: '', description: '', setDefault: false, overwrite: false, error: '' });

  const keyword = useDebouncedValue(searchInput, 180);

  const iconMap = {
    view: '👁', edit: '✏️', delete: '🗑', save: '💾', load: '📥', reset: '↺', filter: '⏷', export: '⬇', clear: '✖',
    defaultOn: '★', defaultOff: '☆', close: '✕', table: '▦', cards: '☷', prev: '←', next: '→', columns: '☰', copy: '⧉'
  };
  const IconButton = ({ icon, label, onClick, className = '', disabled = false, type = 'button' }) => (
    <button type={type} className={`ui-btn ui-btn--secondary prospect-icon-btn ${className}`.trim()} aria-label={label} title={label} onClick={onClick} disabled={disabled}>
      <span aria-hidden="true">{iconMap[icon] || icon}</span>
    </button>
  );

  const loadData = React.useCallback(async () => {
    setLoading(true); setError('');
    try { setRows(await window.ProspectToolUtils.loadProspectsCsv()); }
    catch (e) { setError(e.message || 'Failed to load CSV'); }
    finally { setLoading(false); }
  }, []);

  const getCurrentTableState = React.useCallback(() => ({
    searchTerm: searchInput,
    filters,
    sort,
    pagination: { page, pageSize },
    view,
    top50,
    visibleColumns,
    columnOrder
  }), [searchInput, filters, sort, page, pageSize, view, top50, visibleColumns, columnOrder]);

  const applyTableState = React.useCallback((tableState = {}) => {
    setSearchInput(tableState.searchTerm || '');
    setFilters({ ...DEFAULT_FILTERS, ...(tableState.filters || {}) });
    setSort(tableState.sort || 'score_desc');
    setPageSize(Number(tableState.pagination?.pageSize || 25));
    setPage(Number(tableState.pagination?.page || 1));
    setView(tableState.view || 'table');
    setTop50(Boolean(tableState.top50));
    setVisibleColumns((tableState.visibleColumns || DEFAULT_VISIBLE_COLUMNS).filter((key) => DEFAULT_COLUMN_ORDER.includes(key)));
  }, []);

  React.useEffect(() => { loadData(); }, [loadData]);
  React.useEffect(() => { setPage(1); }, [keyword, filters, sort, top50]);

  React.useEffect(() => {
    try {
      const storedViews = JSON.parse(localStorage.getItem(STORAGE_VIEWS_KEY) || '[]');
      const storedDefault = localStorage.getItem(STORAGE_DEFAULT_KEY) || '';
      if (Array.isArray(storedViews)) setSavedViews(storedViews);
      if (storedDefault) setDefaultViewId(storedDefault);
    } catch (_e) { /* no-op */ }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(STORAGE_VIEWS_KEY, JSON.stringify(savedViews));
  }, [savedViews]);

  React.useEffect(() => {
    if (defaultViewId) localStorage.setItem(STORAGE_DEFAULT_KEY, defaultViewId);
    else localStorage.removeItem(STORAGE_DEFAULT_KEY);
  }, [defaultViewId]);

  React.useEffect(() => {
    if (!rows.length || !savedViews.length || !defaultViewId) return;
    const defaultView = savedViews.find((v) => v.id === defaultViewId);
    if (defaultView?.tableState) applyTableState(defaultView.tableState);
  }, [rows.length, savedViews, defaultViewId, applyTableState]);

  const options = React.useMemo(() => {
    const make = (k) => [...new Set(rows.map((r) => r[k]).filter(Boolean))].sort();
    return {
      industry: make('industry'), category: make('category'), channel_role: make('channel_role'),
      channel_segment: make('channel_segment'), country: make('country'), city: make('city'),
      trading_status: make('trading_status'), adopter_profile: make('adopter_profile')
    };
  }, [rows]);

  const filtered = React.useMemo(() => rows.filter((r) => {
    if (keyword && !r.searchHaystack.includes(keyword.toLowerCase())) return false;
    const textKeys = ['name', 'industry', 'category', 'channel_role', 'channel_segment', 'country', 'city', 'trading_status', 'adopter_profile'];
    for (const k of textKeys) if (filters[k] && (r[k] || '') !== filters[k]) return false;
    if (filters.partnerTierName && (r.partnerTierName || '') !== filters.partnerTierName) return false;
    if (filters.minEmployees && (r.numericEmployees === null || r.numericEmployees < Number(filters.minEmployees))) return false;
    if (filters.maxEmployees && (r.numericEmployees === null || r.numericEmployees > Number(filters.maxEmployees))) return false;
    if (filters.minRevenue && (r.numericRevenue === null || r.numericRevenue < Number(filters.minRevenue))) return false;
    if (filters.maxRevenue && (r.numericRevenue === null || r.numericRevenue > Number(filters.maxRevenue))) return false;
    if (filters.hasWebsite && !r.hasWebsite) return false;
    if (filters.hasLinkedIn && !r.hasLinkedIn) return false;
    if (filters.hasEmail && !r.hasEmail) return false;
    if (r.idealPartnerScore < Number(filters.minScore || 0)) return false;
    return true;
  }), [rows, keyword, filters]);

  const sorted = React.useMemo(() => {
    const list = [...filtered];
    const [field, dir] = sort.split('_');
    list.sort((a, b) => {
      const av = field === 'score' ? a.idealPartnerScore : field === 'revenue' ? a.numericRevenue || 0 : field === 'employees' ? a.numericEmployees || 0 : (a.name || '');
      const bv = field === 'score' ? b.idealPartnerScore : field === 'revenue' ? b.numericRevenue || 0 : field === 'employees' ? b.numericEmployees || 0 : (b.name || '');
      if (typeof av === 'string') return dir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      return dir === 'asc' ? av - bv : bv - av;
    });
    return top50 ? list.slice(0, 50) : list;
  }, [filtered, sort, top50]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const pageRows = sorted.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
  const avgScore = sorted.length ? (sorted.reduce((a, b) => a + b.idealPartnerScore, 0) / sorted.length).toFixed(1) : '0.0';
  const kpis = {
    total: rows.length,
    email: rows.filter((r) => r.hasEmail).length,
    avgAll: rows.length ? (rows.reduce((a, b) => a + b.idealPartnerScore, 0) / rows.length).toFixed(1) : '0.0',
    filtered: sorted.length
  };

  const selectedIndex = React.useMemo(() => sorted.findIndex((r) => r.id === selectedRowId), [sorted, selectedRowId]);
  const selected = selectedIndex >= 0 ? sorted[selectedIndex] : null;

  React.useEffect(() => {
    if (!selectedRowId) return;
    if (selectedIndex === -1) setSelectedRowId(null);
  }, [selectedRowId, selectedIndex]);

  React.useEffect(() => {
    if (!selected) return undefined;
    document.body.classList.add('prospect-drawer-open');
    const lastActive = document.activeElement;
    drawerBodyRef.current?.focus();
    return () => {
      document.body.classList.remove('prospect-drawer-open');
      if (lastActive && typeof lastActive.focus === 'function') lastActive.focus();
    };
  }, [selected]);

  React.useEffect(() => {
    if (!selected) return undefined;
    const handleKeydown = (event) => {
      if (event.key === 'Escape') setSelectedRowId(null);
      if (event.key === 'ArrowLeft' && selectedIndex > 0) {
        event.preventDefault();
        setSelectedRowId(sorted[selectedIndex - 1].id);
      }
      if (event.key === 'ArrowRight' && selectedIndex < sorted.length - 1) {
        event.preventDefault();
        setSelectedRowId(sorted[selectedIndex + 1].id);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [selected, selectedIndex, sorted]);

  React.useEffect(() => {
    if (!selected || !drawerBodyRef.current) return;
    drawerBodyRef.current.scrollTo({ top: 0, behavior: 'auto' });
    const rowEl = document.querySelector(`[data-prospect-row-id="${selected.id}"]`);
    rowEl?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [selected?.id]);

  const exportRows = (records, name) => {
    const blob = new Blob([window.ProspectToolUtils.toCsv(records)], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click(); URL.revokeObjectURL(a.href);
  };

  const getTierClass = (record) => `tier-badge tier-${record.partnerTier?.color || 'gray'}`;
  const activeChips = [keyword && `Search: ${keyword}`, ...Object.entries(filters).filter(([k, v]) => v && v !== 0).map(([k, v]) => `${k}: ${v}`)].filter(Boolean);
  const filterLabels = {
    industry: 'Industry', category: 'Category', channel_role: 'Role', channel_segment: 'Segment', country: 'Country', city: 'City',
    trading_status: 'Trading', adopter_profile: 'Adopter profile', partnerTierName: 'Tier', minEmployees: 'Min employees',
    maxEmployees: 'Max employees', minRevenue: 'Min revenue', maxRevenue: 'Max revenue', hasWebsite: 'Website only',
    hasLinkedIn: 'LinkedIn only', hasEmail: 'Email only', minScore: 'Min score'
  };
  const activeFilterCount = Object.entries(filters).filter(([_, v]) => v && v !== 0).length;
  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS);
    setSearchInput('');
    setTop50(false);
    setSort('score_desc');
    setVisibleColumns(DEFAULT_VISIBLE_COLUMNS);
  };

  const toSummary = (tableState) => {
    const activeFilters = Object.entries(tableState.filters || {}).filter(([_, v]) => v && v !== 0).map(([k, v]) => `${k}:${String(v)}`);
    return {
      filters: activeFilters.length ? activeFilters.join(', ') : 'No filters',
      columns: (tableState.visibleColumns || []).map((k) => ALL_COLUMNS.find((c) => c.key === k)?.label).filter(Boolean).join(', ') || 'Default columns'
    };
  };

  const handleSaveView = () => {
    const trimmedName = saveViewForm.name.trim();
    if (!trimmedName) {
      setSaveViewForm((f) => ({ ...f, error: 'View name is required.' }));
      return;
    }
    const existing = savedViews.find((v) => v.name.toLowerCase() === trimmedName.toLowerCase());
    if (existing && !saveViewForm.overwrite) {
      setSaveViewForm((f) => ({ ...f, error: 'A view with this name already exists. Enable overwrite to replace it.' }));
      return;
    }

    const now = new Date().toISOString();
    const isDefault = saveViewForm.setDefault;
    const newView = {
      id: existing ? existing.id : `view-${Date.now()}`,
      name: trimmedName,
      description: saveViewForm.description.trim(),
      createdAt: existing?.createdAt || now,
      updatedAt: now,
      isDefault,
      tableState: getCurrentTableState()
    };

    let nextViews = existing
      ? savedViews.map((v) => (v.id === existing.id ? newView : v))
      : [...savedViews, newView];

    if (isDefault) {
      nextViews = nextViews.map((v) => ({ ...v, isDefault: v.id === newView.id }));
      setDefaultViewId(newView.id);
    }

    setSavedViews(nextViews);
    setSaveViewOpen(false);
    setSaveViewForm({ name: '', description: '', setDefault: false, overwrite: false, error: '' });
  };

  const loadSavedView = (savedView) => {
    applyTableState(savedView.tableState || {});
    setSelectedRowId(null);
  };

  const deleteSavedView = (savedView) => {
    if (!window.confirm(`Delete saved view "${savedView.name}"?`)) return;
    const next = savedViews.filter((v) => v.id !== savedView.id);
    setSavedViews(next);
    if (defaultViewId === savedView.id) {
      setDefaultViewId('');
      applyTableState({ searchTerm: '', filters: DEFAULT_FILTERS, sort: 'score_desc', pagination: { page: 1, pageSize: 25 }, visibleColumns: DEFAULT_VISIBLE_COLUMNS, columnOrder: DEFAULT_COLUMN_ORDER });
    }
  };

  const setAsDefaultView = (savedView) => {
    setSavedViews((current) => current.map((v) => ({ ...v, isDefault: v.id === savedView.id })));
    setDefaultViewId(savedView.id);
  };

  const clearDefaultView = (savedView) => {
    if (defaultViewId !== savedView.id) return;
    setSavedViews((current) => current.map((v) => ({ ...v, isDefault: false })));
    setDefaultViewId('');
  };

  const visibleColumnDefs = columnOrder.map((key) => ALL_COLUMNS.find((c) => c.key === key)).filter(Boolean).filter((c) => visibleColumns.includes(c.key));

  const renderCell = (record, key, rowIndex) => {
    if (key === 'rank') return <td className="cell-number">{(page - 1) * pageSize + rowIndex + 1}</td>;
    if (key === 'displayName') return <td className="cell-company"><strong>{record.displayName}</strong>{record.ch_link && <div><a href={window.ProspectToolUtils.normalizeUrl(record.ch_link)} target="_blank" rel="noreferrer">Companies House</a></div>}</td>;
    if (key === 'idealPartnerScore') return <td className="cell-number"><span className="score-badge">{record.idealPartnerScore}</span></td>;
    if (key === 'partnerTierName') return <td><span className={getTierClass(record)}>{record.partnerTierName || 'Low Priority'}</span></td>;
    if (key === 'displayRevenue' || key === 'displayEmployees' || key === 'contactCount') return <td className="cell-number">{record[key] || '—'}</td>;
    if (key === 'website') return <td className="cell-icon">{record.website ? <a className="prospect-inline-icon" href={window.ProspectToolUtils.normalizeUrl(record.website)} target="_blank" rel="noreferrer" aria-label="Open Website" title="Open Website">🌐</a> : '—'}</td>;
    if (key === 'linkedin') return <td className="cell-icon">{record.linkedin ? <a className="prospect-inline-icon" href={window.ProspectToolUtils.normalizeUrl(record.linkedin)} target="_blank" rel="noreferrer" aria-label="Open LinkedIn" title="Open LinkedIn">in</a> : '—'}</td>;
    if (key === 'actions') {
      return <td className="cell-actions"><div className="table-row-actions">
        <IconButton icon="view" label={`Open details for ${record.displayName}`} onClick={(event) => { event.stopPropagation(); setSelectedRowId(record.id); }} />
        <IconButton icon="copy" label={`Export ${record.displayName} row`} onClick={(event) => { event.stopPropagation(); exportRows([record], `${record.id}-prospect.csv`); }} />
      </div></td>;
    }
    return <td>{record[key] || '—'}</td>;
  };

  if (loading) return <div className="prospect-shell"><PageHeader title="Partner Prospect Tool" subtitle="Loading CSV dataset…" /><div className="ds-card">Loading data…</div></div>;
  if (error) return <div className="prospect-shell"><PageHeader title="Partner Prospect Tool" subtitle="Unable to load dataset" /><div className="ds-card">{error}<div style={{ marginTop: 10 }}><IconButton icon="load" label="Retry load" onClick={loadData} /></div></div></div>;

  return <div className="prospect-shell">
    <PageHeader title="Partner Prospect Tool" subtitle="Explore, filter and rank reseller prospects from the channel dataset" right={<span className="pill">{rows.length} records</span>} />

    <div className="kpi-grid">
      {[
        ['Total Prospects', kpis.total], ['Prospects with Email', kpis.email], ['Average Score (All)', kpis.avgAll], ['Current Result Set', kpis.filtered]
      ].map(([label, value]) => <div className="kpi-card" key={label}><div className="kpi-label">{label}</div><div className="kpi-value">{value}</div></div>)}
    </div>

    <div className="ds-card prospect-controls" style={{ display: 'grid', gap: 10 }}>
      <div className="prospect-toolbar" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
        <input className="ui-search" placeholder="Search company, role, market, technology…" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <IconButton icon="clear" label="Clear search" onClick={() => setSearchInput('')} disabled={!searchInput} />
        <IconButton icon="reset" label="Reset filters" onClick={resetFilters} />
        <IconButton icon="filter" label={showAdvancedFilters ? 'Hide advanced filters' : 'Show advanced filters'} onClick={() => setShowAdvancedFilters((v) => !v)} className={showAdvancedFilters ? 'is-active' : ''} />
        <IconButton icon="columns" label="Manage columns" onClick={() => setShowColumnMenu((v) => !v)} className={showColumnMenu ? 'is-active' : ''} />
        <IconButton icon="save" label="Save view" onClick={() => setSaveViewOpen(true)} />
        <IconButton icon="export" label="Export filtered CSV" onClick={() => exportRows(sorted, 'prospects-filtered.csv')} />
        <label className="prospect-toggle"><input type="checkbox" checked={top50} onChange={(e) => setTop50(e.target.checked)} /> Top 50 only</label>
        <div style={{ marginLeft: 'auto', display: 'inline-flex', gap: 6 }}>
          <IconButton icon="table" label="Table view" onClick={() => setView('table')} className={view === 'table' ? 'is-active' : ''} />
          <IconButton icon="cards" label="Card view" onClick={() => setView('cards')} className={view === 'cards' ? 'is-active' : ''} />
        </div>
      </div>

      {showColumnMenu && <div className="column-menu">
        {ALL_COLUMNS.map((column) => <label key={column.key}><input type="checkbox" disabled={column.essential} checked={visibleColumns.includes(column.key)} onChange={(e) => {
          if (column.essential) return;
          setVisibleColumns((current) => e.target.checked ? [...current, column.key] : current.filter((k) => k !== column.key));
        }} /> {column.label}{column.essential ? ' (always visible)' : ''}</label>)}
      </div>}

      <div className="filter-grid prospect-filter-grid--primary">
        {['industry', 'category', 'channel_role', 'channel_segment', 'country', 'city', 'trading_status', 'adopter_profile'].map((k) => (
          <select className="ui-search" key={k} value={filters[k]} onChange={(e) => setFilters((f) => ({ ...f, [k]: e.target.value }))}>
            <option value="">{k.replace(/_/g, ' ')}</option>
            {options[k].map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        ))}
        <select className="ui-search" value={filters.partnerTierName} onChange={(e) => setFilters((f) => ({ ...f, partnerTierName: e.target.value }))}><option value="">Partner tier</option>{['Strategic - Tier 1', 'Growth - Tier 2', 'Select - Tier 3', 'Low Priority'].map((v) => <option key={v}>{v}</option>)}</select>
      </div>
      {showAdvancedFilters && <div className="filter-grid prospect-filter-grid--advanced">
        <input className="ui-search" placeholder="Min employees" type="number" value={filters.minEmployees} onChange={(e) => setFilters((f) => ({ ...f, minEmployees: e.target.value }))} />
        <input className="ui-search" placeholder="Max employees" type="number" value={filters.maxEmployees} onChange={(e) => setFilters((f) => ({ ...f, maxEmployees: e.target.value }))} />
        <input className="ui-search" placeholder="Min revenue" type="number" value={filters.minRevenue} onChange={(e) => setFilters((f) => ({ ...f, minRevenue: e.target.value }))} />
        <input className="ui-search" placeholder="Max revenue" type="number" value={filters.maxRevenue} onChange={(e) => setFilters((f) => ({ ...f, maxRevenue: e.target.value }))} />
        <input className="ui-search" placeholder="Min score" type="number" min="0" max="100" value={filters.minScore} onChange={(e) => setFilters((f) => ({ ...f, minScore: e.target.value }))} />
        <select className="ui-search" value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="score_desc">Score ↓</option><option value="score_asc">Score ↑</option><option value="revenue_desc">Revenue ↓</option><option value="revenue_asc">Revenue ↑</option><option value="employees_desc">Employees ↓</option><option value="employees_asc">Employees ↑</option><option value="name_asc">Name A→Z</option><option value="name_desc">Name Z→A</option>
        </select>
        <label><input type="checkbox" checked={filters.hasWebsite} onChange={(e) => setFilters((f) => ({ ...f, hasWebsite: e.target.checked }))} /> Has website</label>
        <label><input type="checkbox" checked={filters.hasLinkedIn} onChange={(e) => setFilters((f) => ({ ...f, hasLinkedIn: e.target.checked }))} /> Has LinkedIn</label>
        <label><input type="checkbox" checked={filters.hasEmail} onChange={(e) => setFilters((f) => ({ ...f, hasEmail: e.target.checked }))} /> Has email</label>
      </div>}
      <div className="chip-row">{activeChips.map((c) => {
        const [rawKey, value] = c.split(': ');
        const label = rawKey === 'Search' ? rawKey : (filterLabels[rawKey] || rawKey);
        return <span className="chip" key={c}>{label}: {value}</span>;
      })}{activeChips.length === 0 && <span className="chip">No active filters</span>}</div>
      <div className="prospect-filter-summary">{activeFilterCount} active filters · {sorted.length} matching rows</div>
    </div>

    {top50 && <div className="ds-card" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', fontSize: 12 }}><strong>Top 50 summary</strong><span>Avg score: {avgScore}</span><span>Websites: {sorted.filter((r) => r.hasWebsite).length}</span><span>LinkedIn: {sorted.filter((r) => r.hasLinkedIn).length}</span><span>Emails: {sorted.filter((r) => r.hasEmail).length}</span></div>}

    {sorted.length === 0 ? <div className="ds-card">No results found.</div> : view === 'table' ? <div className="prospect-table-wrap"><table className="prospect-table"><thead><tr>{visibleColumnDefs.map((h) => <th key={h.key} className={h.key === 'actions' ? 'cell-actions-head' : ''}>{h.label}</th>)}</tr></thead><tbody>{pageRows.map((r, i) => <tr key={r.id} data-prospect-row-id={r.id} className={selectedRowId === r.id ? 'prospect-row-selected' : ''} onClick={() => setSelectedRowId(r.id)} style={{ cursor: 'pointer' }} aria-selected={selectedRowId === r.id}>{visibleColumnDefs.map((col) => <React.Fragment key={`${r.id}-${col.key}`}>{renderCell(r, col.key, i)}</React.Fragment>)}</tr>)}</tbody></table></div> : <div className="prospect-cards">{pageRows.map((r) => <div className={`prospect-card ${selectedRowId === r.id ? 'prospect-card-selected' : ''}`.trim()} key={r.id} onClick={() => setSelectedRowId(r.id)}><div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}><strong>{r.displayName}</strong><div style={{ display: 'flex', gap: 6, alignItems: 'center' }}><span className="score-badge">{r.idealPartnerScore}</span><span className={getTierClass(r)}>{r.partnerTierName || 'Low Priority'}</span></div></div><div>{r.industry || '—'}</div><div>{r.channel_role || '—'} / {r.channel_segment || '—'}</div><div>{r.city || '—'}, {r.country || '—'}</div><div>{r.displayRevenue} · {r.displayEmployees}</div><div className="prospect-card-secondary">{r.keywords || '—'}</div><div style={{ display: 'flex', gap: 8 }}>{r.website && <a href={window.ProspectToolUtils.normalizeUrl(r.website)} target="_blank" rel="noreferrer">Website</a>}{r.linkedin && <a href={window.ProspectToolUtils.normalizeUrl(r.linkedin)} target="_blank" rel="noreferrer">LinkedIn</a>}</div></div>)}</div>}

    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <IconButton icon="prev" label="Previous page" disabled={page <= 1} onClick={() => setPage((p) => p - 1)} />
      <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Page {page} / {pageCount}</span>
      <IconButton icon="next" label="Next page" disabled={page >= pageCount} onClick={() => setPage((p) => p + 1)} />
      <select className="ui-search" value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))} style={{ maxWidth: 90 }}><option>25</option><option>50</option><option>100</option></select>
    </div>

    <div className="saved-views-section ds-card">
      <div className="saved-views-header"><h3>Saved Views</h3><span>{savedViews.length} total</span></div>
      {!savedViews.length && <p style={{ margin: 0, fontSize: 12, color: 'var(--text-secondary)' }}>No saved views yet.</p>}
      <div className="saved-views-grid">
        {savedViews.map((savedView) => {
          const summary = toSummary(savedView.tableState || {});
          return <div key={savedView.id} className="saved-view-card">
            <div className="saved-view-head">
              <strong>{savedView.name}</strong>
              {savedView.id === defaultViewId && <span className="top50-badge">Default</span>}
            </div>
            {savedView.description && <p>{savedView.description}</p>}
            <div className="saved-view-meta">
              <span><b>Filters:</b> {summary.filters}</span>
              <span><b>Columns:</b> {summary.columns}</span>
              <span><b>Updated:</b> {new Date(savedView.updatedAt).toLocaleString()}</span>
            </div>
            <div className="saved-view-actions">
              <IconButton icon="load" label="Load view" onClick={() => loadSavedView(savedView)} />
              <IconButton icon={savedView.id === defaultViewId ? 'defaultOn' : 'defaultOff'} label={savedView.id === defaultViewId ? 'Remove default view' : 'Set default view'} onClick={() => savedView.id === defaultViewId ? clearDefaultView(savedView) : setAsDefaultView(savedView)} />
              <IconButton icon="delete" label="Delete view" onClick={() => deleteSavedView(savedView)} />
            </div>
          </div>;
        })}
      </div>
    </div>

    {saveViewOpen && <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setSaveViewOpen(false); }}>
      <div className="modal-box ds-card" style={{ maxWidth: 560 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Save current view</h3>
          <IconButton icon="close" label="Close save view dialog" onClick={() => setSaveViewOpen(false)} />
        </div>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          <input className="ui-search" placeholder="View name" value={saveViewForm.name} onChange={(e) => setSaveViewForm((f) => ({ ...f, name: e.target.value, error: '' }))} />
          <textarea className="ui-search" placeholder="Description (optional)" value={saveViewForm.description} onChange={(e) => setSaveViewForm((f) => ({ ...f, description: e.target.value }))} rows={3} />
          <label><input type="checkbox" checked={saveViewForm.setDefault} onChange={(e) => setSaveViewForm((f) => ({ ...f, setDefault: e.target.checked }))} /> Set as default view</label>
          <label><input type="checkbox" checked={saveViewForm.overwrite} onChange={(e) => setSaveViewForm((f) => ({ ...f, overwrite: e.target.checked, error: '' }))} /> Overwrite if name already exists</label>
          {saveViewForm.error && <div style={{ color: '#ffb4b4', fontSize: 12 }}>{saveViewForm.error}</div>}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <IconButton icon="save" label="Save view now" onClick={handleSaveView} />
          </div>
        </div>
      </div>
    </div>}

    {selected && <div className="prospect-drawer-layer" role="presentation">
      <button type="button" className="prospect-drawer-backdrop" aria-label="Close details drawer" onClick={() => setSelectedRowId(null)} />
      <aside className="prospect-drawer" role="dialog" aria-modal="true" aria-label={`Partner details for ${selected.displayName}`}>
        <div className="prospect-drawer-header">
          <div className="prospect-drawer-title">
            <h3>{selected.displayName}</h3>
            <div className="prospect-drawer-subtitle">
              <span className={getTierClass(selected)}>{selected.partnerTierName || 'Low Priority'}</span>
              <span className="score-badge">Score {selected.idealPartnerScore}</span>
              <span>{selectedIndex + 1} of {sorted.length}</span>
            </div>
          </div>
          <div className="prospect-drawer-actions">
            <button type="button" className="prospect-icon-link" aria-label={selected.website ? 'Open Website' : 'Website unavailable'} title={selected.website ? 'Open Website' : 'Website unavailable'} disabled={!selected.website} onClick={() => selected.website && window.open(window.ProspectToolUtils.normalizeUrl(selected.website), '_blank', 'noopener,noreferrer')}>🌐</button>
            <button type="button" className="prospect-icon-link" aria-label="Download to CSV" title="Download to CSV" onClick={() => exportRows([selected], `${selected.id}-prospect.csv`)}>⬇</button>
            <button type="button" className="prospect-icon-link" aria-label={selected.linkedin ? 'Open LinkedIn' : 'LinkedIn unavailable'} title={selected.linkedin ? 'Open LinkedIn' : 'LinkedIn unavailable'} disabled={!selected.linkedin} onClick={() => selected.linkedin && window.open(window.ProspectToolUtils.normalizeUrl(selected.linkedin), '_blank', 'noopener,noreferrer')}>in</button>
            <IconButton icon="prev" label="Previous record" disabled={selectedIndex <= 0} onClick={() => setSelectedRowId(sorted[selectedIndex - 1].id)} />
            <IconButton icon="next" label="Next record" disabled={selectedIndex >= sorted.length - 1} onClick={() => setSelectedRowId(sorted[selectedIndex + 1].id)} />
            <IconButton icon="close" label="Close details drawer" onClick={() => setSelectedRowId(null)} className="prospect-drawer-close" />
          </div>
        </div>

        <div className="prospect-drawer-body" ref={drawerBodyRef} tabIndex={-1}>
          <div className="prospect-summary-strip">
            <div><span>Tier</span><strong>{selected.partnerTierName || 'Low Priority'}</strong></div>
            <div><span>Status</span><strong>{selected.trading_status || '—'}</strong></div>
            <div><span>Region</span><strong>{selected.country || '—'}</strong></div>
            <div><span>Type</span><strong>{selected.channel_role || '—'}</strong></div>
          </div>

          <div className="panel-card"><h4>Company details</h4><p>Industry: {selected.industry || '—'}</p><p>Company Type: {selected.category || '—'}</p><p>Employees: {selected.displayEmployees}</p><p>Revenue: {selected.displayRevenue}</p><p>Location: {selected.displayLocation} {selected.postcode}</p></div>
          <div className="panel-card"><h4>Commercial profile</h4><p>Channel Role: {selected.channel_role || '—'}</p><p>Channel Segment: {selected.channel_segment || '—'}</p><p>Adopter Profile: {selected.adopter_profile || '—'}</p><p>Keywords: {selected.keywords || '—'}</p></div>

          <div className="panel-card"><h4>Technology signals</h4><div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{(selected.tech_stack || '').split(/[,;|]/).map((t) => t.trim()).filter(Boolean).map((tech) => <span key={tech} className="tech-tag">{tech}</span>)}{!selected.tech_stack && <span className="tech-tag">No data</span>}</div></div>

          <div className="panel-card"><h4>Contacts</h4>{selected.contacts.length ? selected.contacts.map((c, idx) => <div key={`${c.name}-${idx}`} style={{ display: 'flex', justifyContent: 'space-between', gap: 8, marginBottom: 6 }}><span>{c.name || c.email || '—'}</span><span className="tech-tag">{c.role || 'Role not set'}</span></div>) : <p>—</p>}</div>

          <div className="panel-card"><h4>Score breakdown</h4>{selected.scoreBreakdown.map((f, idx) => {
            const m = f.match(/([+-]?\d+(?:\.\d+)?)/);
            const raw = m ? Number(m[1]) : 0;
            const fill = Math.min(100, Math.max(8, Math.abs(raw) * 5));
            const label = f.replace(/\s*[+-]?\d+(?:\.\d+)?$/, '');
            return <div className="score-bar" key={`${f}-${idx}`}><span>{label}</span><div className="bar"><div className="fill" style={{ width: `${fill}%`, opacity: raw < 0 ? 0.45 : 1 }} /></div></div>;
          })}</div>
        </div>
      </aside>
    </div>}
  </div>;
}

function useDebouncedValue(value, wait) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => { const t = setTimeout(() => setDebounced(value), wait); return () => clearTimeout(t); }, [value, wait]);
  return debounced;
}

const CX_DISCOVERY_STORAGE_KEY = "ipi-cx-discovery-session-v1";

const CX_DISCOVERY_PROFILE_FIELDS = [
  { key: "companyName", label: "Company Name", type: "text", placeholder: "Acme Contact Services" },
  { key: "industry", label: "Industry", type: "text", placeholder: "Retail, Utilities, Financial Services…" },
  { key: "region", label: "Region / Geography", type: "text", placeholder: "UK & Ireland" },
  { key: "agentCount", label: "Number of Agents", type: "number", min: 0, placeholder: "250" },
  { key: "teamSize", label: "Customer Service Team Size", type: "number", min: 0, placeholder: "320" },
  { key: "ccPlatform", label: "Current Contact Centre Platform", type: "text", placeholder: "Genesys / NICE / Five9 / Other" },
  { key: "ucPlatform", label: "Current Telephony / UC Platform", type: "text", placeholder: "Teams, Zoom Phone, Cisco…" },
  { key: "deploymentModel", label: "Deployment Model", type: "select", options: ["On-prem", "Hybrid", "Cloud"] },
  {
    key: "primaryChannels",
    label: "Primary Customer Channels",
    type: "multi-select",
    options: ["Voice", "Email", "Chat", "SMS", "Social", "WhatsApp", "Video"],
  },
  { key: "notes", label: "Notes", type: "textarea", placeholder: "Commercial context, strategic pressures, known blockers…" },
];

const CX_DISCOVERY_SECTIONS = [
  {
    id: "operations",
    title: "Contact Centre Operations",
    category: "Operations",
    questions: [
      { id: "opsPlatform", label: "What contact centre platform do you currently use?", type: "text" },
      { id: "monthlyInteractions", label: "How many customer interactions do you handle per month?", type: "number", min: 0 },
      { id: "routingComplexity", label: "How complex is your routing model?", type: "slider", min: 1, max: 5, step: 1 },
      { id: "multiBusinessUnits", label: "Do you support multiple business units or queues?", type: "boolean" },
      { id: "callbackCapability", label: "Do you have callback capability?", type: "boolean" },
      { id: "adminChangeEase", label: "How easy is it to make admin changes today?", type: "slider", min: 1, max: 5, step: 1 },
    ],
  },
  {
    id: "channels",
    title: "Customer Channels",
    category: "Channels",
    questions: [
      { id: "supportedChannels", label: "Which channels do you currently support?", type: "multi-select", options: ["Voice", "Email", "Chat", "SMS", "Social", "WhatsApp", "Video"] },
      { id: "priorityChannels", label: "Which channels are most important to your customers?", type: "multi-select", options: ["Voice", "Email", "Chat", "SMS", "Social", "WhatsApp", "Video"] },
      { id: "channelSeamless", label: "Can customers move seamlessly between channels?", type: "boolean" },
      { id: "omniHistory", label: "Do you offer true omnichannel interaction history to agents?", type: "boolean" },
      { id: "digitalGaps", label: "Are there gaps in digital channel support?", type: "boolean" },
    ],
  },
  {
    id: "workforce",
    title: "Workforce & Agents",
    category: "Workforce",
    questions: [
      { id: "wfmInUse", label: "Do you use workforce management today?", type: "boolean" },
      { id: "qaApproach", label: "How do you handle QA and coaching?", type: "select", options: ["Manual spreadsheet process", "Basic quality sampling", "Structured scorecards", "Automated QA with coaching insights"] },
      { id: "rampWeeks", label: "How long does agent ramp-up typically take (weeks)?", type: "number", min: 0 },
      { id: "afterCallAdminBurden", label: "Do agents spend significant time on after-call admin?", type: "boolean" },
      { id: "productivityVisibility", label: "How confident are you in agent productivity visibility?", type: "slider", min: 1, max: 5, step: 1 },
    ],
  },
  {
    id: "automation",
    title: "Automation & AI",
    category: "Automation",
    questions: [
      { id: "botsUsed", label: "Do you currently use bots or self-service automation?", type: "boolean" },
      { id: "aiFeatures", label: "Do you use AI for transcription, summarisation, sentiment, or QA?", type: "multi-select", options: ["Transcription", "Summarisation", "Sentiment", "Automated QA", "None"] },
      { id: "agentAssistImportance", label: "How important is AI-enabled agent assist?", type: "slider", min: 1, max: 5, step: 1 },
      { id: "reduceAfterCall", label: "Are you interested in reducing after-call work?", type: "boolean" },
      { id: "automationValue", label: "Where would automation create most value?", type: "multi-select", options: ["Routing", "Self-service", "QA", "Reporting", "Payments", "Knowledge", "Other"] },
    ],
  },
  {
    id: "analytics",
    title: "Reporting & Analytics",
    category: "Analytics",
    questions: [
      { id: "realtimeReporting", label: "Do you have access to real-time reporting?", type: "boolean" },
      { id: "sentimentThemes", label: "Can you analyse sentiment or recurring themes?", type: "boolean" },
      { id: "painPointInsight", label: "How easy is it to identify customer pain points from interaction data?", type: "slider", min: 1, max: 5, step: 1 },
      { id: "qualityScorecards", label: "Do you have quality scorecards?", type: "boolean" },
      { id: "reportingConfidence", label: "How confident are you in your reporting today?", type: "slider", min: 1, max: 5, step: 1 },
    ],
  },
  {
    id: "security",
    title: "Security & Compliance",
    category: "Security",
    questions: [
      { id: "takesPayments", label: "Do you take payments in the contact centre?", type: "boolean" },
      { id: "needsPci", label: "Do you need PCI DSS compliance support?", type: "boolean" },
      { id: "agentsSeeCardData", label: "Do agents currently hear or see payment card data?", type: "boolean" },
      { id: "complianceConcern", label: "Are compliance and audit requirements a major concern?", type: "slider", min: 1, max: 5, step: 1 },
      { id: "regulatedRequirements", label: "Are there regulated industry requirements that affect your CX environment?", type: "boolean" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Connectivity",
    category: "Infrastructure",
    questions: [
      { id: "infraModel", label: "Is your environment cloud, hybrid, or on-prem?", type: "select", options: ["Cloud", "Hybrid", "On-prem"] },
      { id: "remoteAgents", label: "Do you have remote or hybrid agents?", type: "boolean" },
      { id: "networkImpact", label: "Are connectivity or network issues affecting CX performance?", type: "boolean" },
      { id: "secureConnectivityNeed", label: "Do you need secure connectivity between sites, remote workers, and cloud apps?", type: "boolean" },
      { id: "modernWorkplaceEnabled", label: "Is your IT environment modern workplace enabled?", type: "boolean" },
    ],
  },
  {
    id: "vision",
    title: "Future Vision",
    category: "Vision Readiness",
    questions: [
      { id: "priorities", label: "What are your top 3 CX priorities over the next 12–24 months?", type: "multi-select", options: ["Lower cost", "Better experience", "AI", "Security", "Flexibility", "Analytics", "Scalability"] },
      { id: "transformationPlanned", label: "Are you planning a migration or transformation initiative?", type: "boolean" },
      { id: "mostImportant", label: "What matters most today?", type: "select", options: ["Lower cost", "Better experience", "AI", "Security", "Flexibility", "Analytics", "Scalability"] },
      { id: "timeline", label: "What is the expected timeline?", type: "select", options: ["0–3 months", "3–6 months", "6–12 months", "12–24 months", "24+ months"] },
      { id: "blockers", label: "What is blocking progress today?", type: "text" },
    ],
  },
];

function CXDiscoveryQuestionnairePage({ onNavigate }) {
  const wizardRef = React.useRef(null);
  const [step, setStep] = React.useState(0);
  const [profile, setProfile] = React.useState(() => {
    const initial = {};
    CX_DISCOVERY_PROFILE_FIELDS.forEach((field) => {
      initial[field.key] = field.type === "multi-select" ? [] : "";
    });
    return initial;
  });
  const [answers, setAnswers] = React.useState({});
  const [saveMessage, setSaveMessage] = React.useState("");

  const totalSteps = 1 + CX_DISCOVERY_SECTIONS.length;
  const completion = Math.round((step / (totalSteps - 1)) * 100);
  const activeSection = step > 0 ? CX_DISCOVERY_SECTIONS[step - 1] : null;

  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(CX_DISCOVERY_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.profile) setProfile((prev) => ({ ...prev, ...parsed.profile }));
      if (parsed.answers) setAnswers(parsed.answers);
      if (typeof parsed.step === "number") setStep(Math.min(Math.max(parsed.step, 0), totalSteps - 1));
    } catch (_error) {
      // no-op
    }
  }, [totalSteps]);

  React.useEffect(() => {
    try {
      localStorage.setItem(CX_DISCOVERY_STORAGE_KEY, JSON.stringify({ profile, answers, step, savedAt: new Date().toISOString() }));
    } catch (_error) {
      // no-op
    }
  }, [profile, answers, step]);

  const updateProfile = (key, value) => setProfile((prev) => ({ ...prev, [key]: value }));
  const updateAnswer = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }));

  const scores = React.useMemo(() => {
    const s = {
      Channels: 2,
      Operations: 2,
      Workforce: 2,
      Automation: 2,
      Analytics: 2,
      Security: 2,
      Infrastructure: 2,
      "Vision Readiness": 2,
    };
    const channelCount = (answers.supportedChannels || []).length;
    s.Channels = Math.max(1, Math.min(5, 1 + channelCount * 0.45 + (answers.channelSeamless ? 0.8 : 0) + (answers.omniHistory ? 0.7 : 0) - (answers.digitalGaps ? 0.7 : 0)));
    s.Operations = Math.max(1, Math.min(5, 1 + Number(answers.adminChangeEase || 0) * 0.55 + (answers.callbackCapability ? 0.6 : 0) + (answers.multiBusinessUnits ? 0.4 : 0)));
    s.Workforce = Math.max(1, Math.min(5, 1 + Number(answers.productivityVisibility || 0) * 0.6 + (answers.wfmInUse ? 0.7 : 0) - (answers.afterCallAdminBurden ? 0.4 : 0)));
    const aiCount = (answers.aiFeatures || []).filter((item) => item !== "None").length;
    s.Automation = Math.max(1, Math.min(5, 1 + aiCount * 0.6 + (answers.botsUsed ? 0.7 : 0) + Number(answers.agentAssistImportance || 0) * 0.25));
    s.Analytics = Math.max(1, Math.min(5, 1 + (answers.realtimeReporting ? 0.8 : 0) + (answers.sentimentThemes ? 0.8 : 0) + Number(answers.reportingConfidence || 0) * 0.35 + Number(answers.painPointInsight || 0) * 0.3));
    s.Security = Math.max(1, Math.min(5, 1 + (answers.needsPci ? 0.5 : 0) + (answers.regulatedRequirements ? 0.5 : 0) + Number(answers.complianceConcern || 0) * 0.35 - (answers.agentsSeeCardData ? 0.8 : 0)));
    s.Infrastructure = Math.max(1, Math.min(5, 1 + (answers.infraModel === "Cloud" ? 1 : answers.infraModel === "Hybrid" ? 0.5 : 0.2) + (answers.remoteAgents ? 0.4 : 0) - (answers.networkImpact ? 0.7 : 0) + (answers.secureConnectivityNeed ? 0.4 : 0)));
    s["Vision Readiness"] = Math.max(1, Math.min(5, 1 + (answers.transformationPlanned ? 0.8 : 0) + ((answers.priorities || []).length >= 3 ? 0.8 : 0.2) + (answers.timeline === "0–3 months" || answers.timeline === "3–6 months" ? 1 : answers.timeline ? 0.6 : 0.2)));

    return Object.fromEntries(Object.entries(s).map(([key, value]) => [key, Math.round(value * 10) / 10]));
  }, [answers]);

  const recommendations = React.useMemo(() => {
    const recs = [];
    if (answers.takesPayments && (answers.needsPci || answers.agentsSeeCardData || Number(answers.complianceConcern || 0) >= 4)) {
      recs.push({
        title: "Secure payment handling with PCI controls",
        rationale: "Payment interactions are active and compliance risk is material.",
        solutions: ["Cloud PCI"],
      });
    }
    if ((answers.supportedChannels || []).length <= 3 || !answers.channelSeamless || !answers.omniHistory) {
      recs.push({
        title: "Introduce omnichannel routing",
        rationale: "Channel journeys appear fragmented and agent context is inconsistent.",
        solutions: ["ElasticCX CCaaS"],
      });
    }
    if ((answers.supportedChannels || []).includes("Voice") && answers.digitalGaps) {
      recs.push({
        title: "Improve digital channel coverage",
        rationale: "Customers are likely starting in digital channels but support breadth is limited.",
        solutions: ["ElasticCX CCaaS"],
      });
    }
    if (!answers.botsUsed || (answers.aiFeatures || []).includes("None")) {
      recs.push({
        title: "Add AI transcription and summarisation",
        rationale: "AI coverage is low and there is opportunity to reduce manual effort.",
        solutions: ["AI Insights", "AI Sidekick"],
      });
    }
    if (answers.afterCallAdminBurden || answers.reduceAfterCall || Number(answers.agentAssistImportance || 0) >= 4) {
      recs.push({
        title: "Enable real-time agent assist",
        rationale: "Agent productivity friction indicates value from live guidance and smart wrap-up.",
        solutions: ["AI Sidekick"],
      });
    }
    if (!answers.sentimentThemes || !answers.qualityScorecards) {
      recs.push({
        title: "Automate QA and sentiment analysis",
        rationale: "Limited quality intelligence makes it hard to spot recurring customer pain points.",
        solutions: ["AI Insights"],
      });
    }
    if (answers.remoteAgents && answers.networkImpact) {
      recs.push({
        title: "Improve connectivity for hybrid teams",
        rationale: "Distributed operations and network instability are impacting customer outcomes.",
        solutions: ["SD-WAN", "ElasticCX UCaaS"],
      });
    }
    if (answers.mostImportant === "Flexibility" || answers.infraModel === "On-prem") {
      recs.push({
        title: "Modernise telephony and communications",
        rationale: "Platform flexibility requirements suggest value from cloud communications modernisation.",
        solutions: ["ElasticCX UCaaS"],
      });
    }
    if (!answers.modernWorkplaceEnabled) {
      recs.push({
        title: "Support modern workplace operations",
        rationale: "Operational tooling for distributed teams appears immature.",
        solutions: ["DesktopLive"],
      });
    }

    return recs.slice(0, 6);
  }, [answers]);

  const nextSteps = React.useMemo(() => {
    const steps = ["Discovery workshop", "Architecture review"];
    if (scores.Channels < 3 || scores.Operations < 3) steps.push("CX journey workshop");
    if (scores.Automation < 3) steps.push("Proof of concept");
    if (scores.Security < 3) steps.push("Security / compliance assessment");
    return [...new Set(steps)].slice(0, 5);
  }, [scores]);

  const summaryText = React.useMemo(() => {
    const maturityLines = Object.entries(scores).map(([k, v]) => `${k}: ${v}/5`).join("\n");
    const recLines = recommendations.map((r, i) => `${i + 1}. ${r.title} (${r.solutions.join(", ")})`).join("\n") || "No priority opportunities identified yet.";
    const challengeLines = [
      answers.digitalGaps ? "Digital channel support gaps" : null,
      answers.afterCallAdminBurden ? "High after-call admin burden" : null,
      answers.networkImpact ? "Connectivity impacting CX performance" : null,
      answers.agentsSeeCardData ? "Payment data exposed to agents" : null,
      answers.blockers ? `Current blocker: ${answers.blockers}` : null,
    ].filter(Boolean);

    return `Customer Profile\n- Company: ${profile.companyName || "Not provided"}\n- Industry: ${profile.industry || "Not provided"}\n- Region: ${profile.region || "Not provided"}\n- Deployment: ${profile.deploymentModel || "Not provided"}\n\nCurrent State\n- Contact Centre Platform: ${profile.ccPlatform || answers.opsPlatform || "Not provided"}\n- Telephony/UC: ${profile.ucPlatform || "Not provided"}\n- Channels: ${(answers.supportedChannels || profile.primaryChannels || []).join(", ") || "Not provided"}\n\nKey Challenges\n- ${(challengeLines.length ? challengeLines.join("\n- ") : "No major blockers captured yet")}\n\nCX Maturity Snapshot\n${maturityLines}\n\nRecommended Opportunities\n${recLines}\n\nSuggested IPI Solution Stack\n- ${[...new Set(recommendations.flatMap((rec) => rec.solutions))].join("\n- ") || "ElasticCX CCaaS"}\n\nSuggested Next Steps\n- ${nextSteps.join("\n- ")}`;
  }, [profile, answers, scores, recommendations, nextSteps]);

  const saveDiscovery = () => {
    setSaveMessage("Discovery saved locally.");
    setTimeout(() => setSaveMessage(""), 2200);
  };
  const copySummary = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setSaveMessage("Summary copied.");
      setTimeout(() => setSaveMessage(""), 2200);
    } catch (_error) {
      setSaveMessage("Copy unavailable in this browser context.");
      setTimeout(() => setSaveMessage(""), 2200);
    }
  };
  const exportSummary = () => {
    const blob = new Blob([summaryText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cx-discovery-${(profile.companyName || "assessment").toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const renderInput = (field, value, onChange) => {
    if (field.type === "textarea") {
      return <textarea className="ui-field cx-field-textarea" placeholder={field.placeholder || ""} value={value || ""} onChange={(event) => onChange(event.target.value)} />;
    }
    if (field.type === "select") {
      return (
        <select className="ui-field ui-dropdown" value={value || ""} onChange={(event) => onChange(event.target.value)}>
          <option value="">Select an option</option>
          {(field.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      );
    }
    if (field.type === "multi-select") {
      const selected = Array.isArray(value) ? value : [];
      return (
        <div className="cx-multi-grid">
          {field.options.map((option) => (
            <label key={option} className={`cx-chip ${selected.includes(option) ? "is-selected" : ""}`}>
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={(event) => {
                  if (event.target.checked) onChange([...selected, option]);
                  else onChange(selected.filter((item) => item !== option));
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      );
    }
    if (field.type === "boolean") {
      return (
        <div className="cx-boolean-toggle" role="group" aria-label={field.label}>
          {[{ label: "Yes", value: true }, { label: "No", value: false }].map((choice) => (
            <button type="button" key={choice.label} className={`cx-segment-btn ${value === choice.value ? "is-active" : ""}`} onClick={() => onChange(choice.value)}>{choice.label}</button>
          ))}
        </div>
      );
    }
    if (field.type === "slider") {
      return (
        <div className="cx-slider-wrap">
          <input type="range" className="cx-slider" min={field.min || 1} max={field.max || 5} step={field.step || 1} value={value || 1} onChange={(event) => onChange(Number(event.target.value))} />
          <span className="cx-slider-value">{value || 1}/5</span>
        </div>
      );
    }
    return <input className="ui-field" type={field.type || "text"} min={field.min} placeholder={field.placeholder || ""} value={value || ""} onChange={(event) => onChange(field.type === "number" ? Number(event.target.value) || "" : event.target.value)} />;
  };

  return (
    <div className="cx-discovery-page">
      <AppPageHeader
        eyebrow="Tools · CX Consulting"
        title="CX Discovery Questionnaire"
        subtitle="Guide better discovery conversations, assess CX maturity, and identify the right transformation opportunities."
        actions={(
          <div className="cx-hero-actions">
            <StandardButton onClick={() => wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>Start Discovery</StandardButton>
            <SecondaryButton onClick={() => setStep(totalSteps - 1)}>View Example Output</SecondaryButton>
          </div>
        )}
      />

      <SectionWrapper>
        <div className="cx-intro-card ds-card ds-card--highlight">
          <p>Use this tool to structure consultative customer conversations across channels, operations, automation, analytics, compliance, infrastructure, and future vision.</p>
          <div className="cx-summary-grid">
            {["CX Maturity Assessment", "Opportunity Detection", "Solution Mapping", "Exportable Summary"].map((item) => <StandardCard key={item} className="cx-mini-summary-card">{item}</StandardCard>)}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="cx-wizard-shell" id="cx-discovery-wizard" ref={wizardRef}>
        <div className="cx-wizard-main">
          <div className="cx-progress-head">
            <div>
              <h3>{step === 0 ? "Customer Profile" : activeSection.title}</h3>
              <p>Step {step + 1} of {totalSteps}</p>
            </div>
            <div className="cx-progress-pill">{completion}% complete</div>
          </div>
          <div className="cx-progress-bar"><span style={{ width: `${completion}%` }} /></div>

          <div className="cx-stepper-nav">
            <button type="button" className={`cx-stepper-item ${step === 0 ? "is-active" : ""}`} onClick={() => setStep(0)}>Profile</button>
            {CX_DISCOVERY_SECTIONS.map((section, index) => (
              <button key={section.id} type="button" className={`cx-stepper-item ${step === index + 1 ? "is-active" : ""}`} onClick={() => setStep(index + 1)}>{index + 1}. {section.title}</button>
            ))}
          </div>

          {step === 0 ? (
            <div className="cx-form-grid">
              {CX_DISCOVERY_PROFILE_FIELDS.map((field) => (
                <label key={field.key} className={`cx-form-field ${field.type === "textarea" ? "cx-form-field--full" : ""}`}>
                  <span>{field.label}</span>
                  {renderInput(field, profile[field.key], (value) => updateProfile(field.key, value))}
                </label>
              ))}
            </div>
          ) : (
            <div className="cx-question-stack">
              {activeSection.questions.map((question) => (
                <StandardCard key={question.id} className="cx-question-card">
                  <label>
                    <span>{question.label}</span>
                    {renderInput(question, answers[question.id], (value) => updateAnswer(question.id, value))}
                  </label>
                </StandardCard>
              ))}
            </div>
          )}

          <div className="cx-nav-actions">
            <SecondaryButton onClick={() => setStep((prev) => Math.max(0, prev - 1))} disabled={step === 0}>Back</SecondaryButton>
            <StandardButton onClick={() => setStep((prev) => Math.min(totalSteps - 1, prev + 1))} disabled={step === totalSteps - 1}>Next</StandardButton>
          </div>

          <div className="cx-summary-output ds-card ds-card--standard">
            <div className="cx-summary-output__head">
              <h3>Discovery Summary Output</h3>
              <span>Commercially useful and ready to share</span>
            </div>
            <pre>{summaryText}</pre>
            <div className="cx-summary-actions">
              <StandardButton onClick={saveDiscovery}>Save Discovery</StandardButton>
              <SecondaryButton onClick={copySummary}>Copy Summary</SecondaryButton>
              <SecondaryButton onClick={exportSummary}>Export Summary</SecondaryButton>
              <GhostButton onClick={() => setSaveMessage("Sent to Account Planning workspace.")}>Send to Account Planning</GhostButton>
              <GhostButton onClick={() => onNavigate?.("partner-account-plan")}>Open Journey Mapping Tool</GhostButton>
            </div>
            {saveMessage ? <p className="cx-inline-message">{saveMessage}</p> : null}
          </div>
        </div>

        <aside className="cx-score-panel ds-card ds-card--standard">
          <h3>Live CX Maturity Scoring</h3>
          <div className="cx-score-grid">
            {Object.entries(scores).map(([key, value]) => (
              <div key={key} className="cx-score-card">
                <span>{key}</span>
                <strong>{value}/5</strong>
              </div>
            ))}
          </div>
          <div className="cx-radar-sim">
            {Object.entries(scores).map(([key, value]) => (
              <div key={key} className="cx-radar-row">
                <span>{key}</span>
                <div className="cx-radar-track"><i style={{ width: `${(value / 5) * 100}%` }} /></div>
              </div>
            ))}
          </div>

          <div className="cx-opportunity-stack">
            <h4>Opportunity Recommendations</h4>
            {recommendations.length ? recommendations.map((recommendation) => (
              <div className="cx-opportunity-card" key={recommendation.title}>
                <strong>{recommendation.title}</strong>
                <p>{recommendation.rationale}</p>
                <div className="cx-opportunity-tags">
                  {recommendation.solutions.map((solution) => <span key={solution}>{solution}</span>)}
                </div>
              </div>
            )) : <p className="cx-opportunity-empty">Answer a few discovery questions to unlock recommendations.</p>}
          </div>
        </aside>
      </SectionWrapper>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// BUILD · SELL · EXPAND PAGE (Page 2)
// ═══════════════════════════════════════════════════════
function BuildSellExpand() {
  const [activePillar, setActivePillar] = React.useState(null);

  const vendorComparisonCards = [
    {
      title: "Single Solution Vendor Model",
      icon: "📦",
      tone: "muted",
      points: [
        "Vendor promotes a single core product (often CCaaS or UC)",
        "Partner revenue limited to that product category",
        "Upsell options restricted to vendor roadmap",
        "Customer needs outside the platform require third-party vendors",
        "Lower long-term revenue expansion for the partner",
      ],
    },
    {
      title: "IPI Ecosystem Model",
      icon: "🧱",
      tone: "positive",
      points: [
        "Partners can start with any solution in the portfolio",
        "Multiple technology categories across the customer lifecycle",
        "Solutions can be layered over time as customer needs evolve",
        "Enables partners to expand account value significantly",
        "Supports services, integration and managed services revenue",
      ],
    },
  ];

  const journeyPanels = [
    {
      title: "Land",
      text: "Start with the customer’s immediate problem. The entry point could be any solution in the portfolio.",
      benefit: "Partner benefit: more conversations opened across more customer personas.",
    },
    {
      title: "Expand",
      text: "Layer adjacent capabilities to solve broader operational, CX, compliance and automation needs.",
      benefit: "Partner benefit: larger deal sizes and more recurring service attach.",
    },
    {
      title: "Platform",
      text: "Build toward a full-stack customer contact solution that increases recurring revenue, share of wallet and long-term stickiness.",
      benefit: "Partner benefit: stronger account control and higher long-term account value.",
    },
  ];

  const useCaseExamples = [
    {
      title: "Land with Telephony",
      issue: "Customer needs resilient voice operations across sites.",
      solution: "Telephony Infrastructure",
      expand: "UCaaS, CCaaS and Managed Services",
      revenue: "Grows from core infrastructure sale into recurring platform and support revenue.",
    },
    {
      title: "Land with Secure Payments",
      issue: "Customer faces payment compliance and risk pressure.",
      solution: "Secure Payments",
      expand: "Contact Centre, AI and Compliance-led services",
      revenue: "Unlocks compliance-led budgets then expands into CX and managed optimisation.",
    },
    {
      title: "Land with AI & Automation",
      issue: "Customer wants efficiency gains and faster customer response.",
      solution: "AI & Automation",
      expand: "CCaaS, UCaaS and Consultancy",
      revenue: "Turns innovation projects into broader transformation programmes with recurring value.",
    },
    {
      title: "Land with Managed Services",
      issue: "Customer lacks operational capacity to maintain performance.",
      solution: "Managed Services",
      expand: "Core communications and customer engagement platform services",
      revenue: "Service footprint expands into multi-stack ownership and higher account stickiness.",
    },
  ];

  return (
    <React.Fragment>
      <Bg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          animation: "fadeIn 0.35s ease both",
        }}
      >
        <section id="framework" className="bse-section-shell">
          <div className="bse-section-heading">
            <h2>Build · Sell · Expand Framework</h2>
            <p>Start with a strong base offer, sell with repeatable confidence, then expand every account through adjacent services and innovation.</p>
          </div>
          <div className="bse-value-grid">
            {[
              {
                icon: "🏗️",
                color: "#67D8FF",
                glow: "103,216,255",
                title: "Build Your CX Practice",
                body: "Use IPI's modular platform to assemble a CX solution tailored to your customers' needs. Start with telephony, layer in CCaaS, add AI and payments as the relationship grows.",
              },
              {
                icon: "💼",
                color: "#A37992",
                glow: "177,143,255",
                title: "Sell With Confidence",
                body: "IPI provides the sales tools, pre-sales support, co-sell materials and training to help you go to market fast — with a compelling, differentiated story every time.",
              },
              {
                icon: "📈",
                color: "#D4A843",
                glow: "212,168,67",
                title: "Expand Revenue Streams",
                body: "Every customer engagement is an opportunity to expand. Add managed services, AI automation or secure payments to grow recurring revenue without replacing what's already sold.",
              },
            ].map((v, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: `1px solid rgba(${v.glow},0.2)`,
                  borderRadius: 16,
                  padding: "26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${v.glow},0.06)`;
                  e.currentTarget.style.borderColor = `rgba(${v.glow},0.4)`;
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor = `rgba(${v.glow},0.2)`;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 13,
                    background: `rgba(${v.glow},0.14)`,
                    border: `1px solid rgba(${v.glow},0.3)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                  }}
                >
                  {v.icon}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: v.color,
                    fontFamily: "'Syne',sans-serif",
                    lineHeight: 1.25,
                  }}
                >
                  {v.title}
                </div>
                <div style={{ fontSize: 13, color: "#7E97B4", lineHeight: 1.75 }}>{v.body}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="brand-line" style={{ margin: "44px 44px 0" }} />

        <section id="journey" className="bse-section-shell" style={{ paddingTop: 36 }}>
          <div className="bse-section-heading">
            <h2>Revenue Journey</h2>
            <p>Start with any customer need, then expand into a broader platform opportunity over time with clear partner upside at each stage.</p>
          </div>
          <PartnerJourney />

          <div className="prj-journey-panels" style={{ marginTop: 16 }}>
            {journeyPanels.map((card) => (
              <article key={card.title} className="prj-journey-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <span>{card.benefit}</span>
              </article>
            ))}
          </div>

          <div className="prj-use-cases" style={{ marginTop: 14 }}>
            {useCaseExamples.map((example) => (
              <article key={example.title} className="prj-use-case-card">
                <h3>{example.title}</h3>
                <p><strong>Initial customer issue:</strong> {example.issue}</p>
                <p><strong>Initial solution:</strong> {example.solution}</p>
                <p><strong>Expansion opportunity:</strong> {example.expand}</p>
                <p><strong>Revenue outcome:</strong> {example.revenue}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="six-pillars" className="bse-section-shell" style={{ paddingTop: 52 }}>
          <div className="bse-section-heading">
            <h2>Six Product Pillars</h2>
            <p>The core messaging framework for the IPI partner programme: six distinct revenue streams that stand alone, yet create more value when sold together.</p>
          </div>

          <div className="bse-pillars-bar-wrap">
            <div className="bse-pillars-bar">
              {PILLARS.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setActivePillar((prev) => (prev === p.id ? null : p.id))}
                  style={{
                    flex: 1,
                    height: "100%",
                    background: `rgba(${p.glow},${activePillar === p.id ? 0.85 : 0.3})`,
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: activePillar === p.id ? `0 0 12px rgba(${p.glow},0.6)` : "",
                  }}
                />
              ))}
            </div>
            <div className="bse-pillars-numbers">
              {PILLARS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="bse-pillars-number-btn"
                  style={{ color: `rgba(${p.glow},${activePillar === p.id ? 0.9 : 0.4})` }}
                  onClick={() => setActivePillar((prev) => (prev === p.id ? null : p.id))}
                >
                  {p.num}
                </button>
              ))}
            </div>
          </div>

          <div className="bse-pillars-grid">
            {PILLARS.map((pillar) => (
              <PillarCard
                key={pillar.id}
                pillar={pillar}
                isActive={activePillar === pillar.id}
                onClick={() => setActivePillar((prev) => (prev === pillar.id ? null : pillar.id))}
              />
            ))}
          </div>
        </section>

        <section id="ecosystem-comparison" className="bse-section-shell" style={{ paddingTop: 52 }}>
          <div className="bse-section-heading">
            <h2>Why the IPI Ecosystem Model Wins for Partners</h2>
          </div>

          <div className="bse-compare-intro">
            <p>Many technology vendors promote a single-product strategy where partners are encouraged to sell only their platform.</p>
            <p>While this can simplify positioning, it often limits a partner&apos;s ability to deliver broader customer outcomes and reduces long-term revenue opportunities.</p>
            <p>IP Integration takes a different approach.</p>
            <p>The IPI Ecosystem allows partners to start with any solution — telephony, UC, AI, payments, automation, or contact centre — and expand the customer relationship by layering additional capabilities over time.</p>
            <p>This enables partners to grow account value, deepen customer relationships and build recurring revenue streams across multiple services.</p>
          </div>

          <div className="prj-contrast-grid" style={{ marginTop: 16 }}>
            {vendorComparisonCards.map((card) => (
              <article key={card.title} className={`prj-contrast-card ${card.tone}`}>
                <div className="prj-contrast-title-wrap">
                  <span className="prj-contrast-icon" aria-hidden="true">{card.icon}</span>
                  <h3>{card.title}</h3>
                </div>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="bse-takeaway-banner" style={{ marginTop: 18 }}>
            <h3>Key Takeaway</h3>
            <p>Resellers grow faster when they are not limited to a single product line.</p>
            <p>The IPI ecosystem enables partners to land with one solution and expand across a wider technology stack — increasing revenue, customer stickiness and long-term account value.</p>
          </div>
        </section>

        <section id="actions" style={{ padding: "48px 44px 52px", marginTop: "auto" }}>
          <div className="brand-line" style={{ marginBottom: 34 }} />
          <div
            style={{
              maxWidth: "none",
              margin: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 28,
            }}
          >
            <div style={{ maxWidth: "none" }}>
              <h2
                style={{
                  fontSize: "clamp(20px,2.6vw,30px)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  marginBottom: 10,
                  lineHeight: 1.15,
                  fontFamily: "'Syne',sans-serif",
                }}
              >
                One platform. <span style={{ color: "#36C6FF" }}>Multiple revenue opportunities.</span>
              </h2>
              <p style={{ fontSize: 13.5, color: "#8EA6BF", lineHeight: 1.82, marginBottom: 12 }}>
                Start with a single module and grow. Each IPI solution stands alone, or connects into a complete customer contact platform your customers won't want to leave.
              </p>
              <p style={{ fontSize: 12.5, color: "rgba(110,153,144,0.8)", lineHeight: 1.75 }}>
                Next steps: align your target accounts to the framework, identify which pillars attach naturally, and build a co-sell plan with the IPI team.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-p" style={{ fontFamily: "'Nunito Sans',sans-serif", border: "none", cursor: "pointer" }}>
                Download Partner Pack
              </button>
            </div>
          </div>
          <div className="brand-line" style={{ marginTop: 34 }} />
          <p
            style={{
              textAlign: "center",
              marginTop: 16,
              fontSize: 10,
              color: "rgba(54,198,255,0.26)",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
            }}
          >
            © 2026 IP Integration Ltd · IPI Partner Advantage · Partner Confidential
          </p>
        </section>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════
// IPI PARTNER PROGRAM PAGE (Page 5)
// ═══════════════════════════════════════════════════════
const PARTNER_TIERS_DATA = [
  {
    num: "1",
    priority: "Highest Strategic Priority",
    label: "CCaaS Resellers",
    icon: "🎯",
    color: "#36C6FF",
    glow: "54,198,255",
    vendors: ["Genesys", "Five9", "Talkdesk"],
    whyMatter: [
      "Sell contact centre solutions",
      "Have CX decision-maker relationships",
      "Understand customer engagement transformation",
    ],
    opportunity: [
      "AI automation",
      "Secure payments",
      "Flexible telephony",
      "Consultancy expertise",
    ],
    challenges: [
      "They are likely already selling at least one UCaaS or CCaaS vendor. Will they want to engage with another platform?",
      "We must clearly demonstrate what differentiation IPI brings compared with their existing vendor relationships.",
      "Gaining mindshare alongside their current vendors may require strong commercial or solution advantages.",
    ],
    winStrategies: [
      "Lead with differentiation, showing where IPI adds value beyond their incumbent vendor relationships.",
      "Position IPI as complementary where appropriate, rather than forcing a full vendor replacement conversation too early.",
      "Use strong commercial messaging and targeted enablement to show why it is worth their time to engage.",
    ],
    summary:
      "These partners already sell CCaaS — making them the fastest path to platform revenue. IPI lets them differentiate from single-platform vendors by delivering a complete CX ecosystem.",
  },
  {
    num: "2",
    priority: "Large Installed Base Opportunity",
    label: "Telecom & UC Resellers",
    icon: "📡",
    color: "#67D8FF",
    glow: "103,216,255",
    vendors: ["SIP trunking", "PBX systems", "UC platforms"],
    whyMatter: [
      "Large installed voice customer bases",
      "Trusted telecom relationships",
      "Strong recurring revenue models",
    ],
    opportunity: [
      "CCaaS platforms",
      "AI automation",
      "Secure payments",
      "Managed CX solutions",
    ],
    challenges: [
      "They may perceive CCaaS as too complex compared to their current IT or MSP services.",
      "We must simplify the story so they feel comfortable introducing opportunities.",
      "They may need strong presales and enablement support before actively positioning solutions.",
    ],
    winStrategies: [
      "Simplify the proposition into clear business outcomes rather than technical complexity.",
      "Provide easy discovery questions, talk tracks, and first-call support so they feel confident early.",
      "Reassure them that IPI can provide presales, design, and solution expertise while they build confidence.",
    ],
    summary:
      "Strong mid-market voice bases but limited CCaaS capability. IPI transforms them from telecom providers into full CX solution providers.",
  },
  {
    num: "3",
    priority: "High Value Point Solution Partners",
    label: "Specialist Solution Providers",
    icon: "🔧",
    color: "#A37992",
    glow: "177,143,255",
    vendors: [
      "Secure payment providers",
      "Compliance specialists",
      "CX automation vendors",
    ],
    whyMatter: [
      "Introduce IPI through specific high-value solutions",
      "Deep domain expertise in their vertical",
      "Trusted compliance & technical credibility",
    ],
    opportunity: [
      "Secure Payments",
      "AI automation",
      "Call Recording",
      "IVR & Telephony services",
    ],
    challenges: [
      "They may expect deep integration capability across CRM, CX platforms and AI tools.",
      "They may prefer to stay vendor-agnostic rather than recommend a single platform.",
      "We must demonstrate credibility as a CX partner, not just a contact centre vendor.",
    ],
    winStrategies: [
      "Position IPI around CX outcomes, integration flexibility, and broader solution capability.",
      "Show how our portfolio supports their advisory role rather than restricting it.",
      "Use relevant case studies and solution examples to build credibility beyond core CCaaS.",
    ],
    summary:
      "These partners enter accounts through specialist capabilities — enabling IPI to land in enterprise accounts through point solutions, then expand.",
  },
  {
    num: "4",
    priority: "Long-Term Recurring Revenue Partners",
    label: "Managed Service Providers",
    icon: "⚙️",
    color: "#7B96A3",
    glow: "123,150,163",
    vendors: [
      "Cloud infrastructure",
      "Networking",
      "Communications management",
    ],
    whyMatter: [
      "Manage long-term customer environments",
      "Embed CX within managed services",
      "High customer retention and lifecycle value",
    ],
    opportunity: [
      "UCaaS & CCaaS",
      "Network infrastructure",
      "AI automation",
      "Ongoing platform management",
    ],
    challenges: [
      "They will expect strong revenue potential and attractive margins.",
      "They may already have preferred strategic vendors in place.",
      "They will want confidence that we can support pipeline growth and multiple deployments.",
    ],
    winStrategies: [
      "Lead with revenue opportunity, partner economics, and growth potential.",
      "Demonstrate that IPI can support scale through strong presales, delivery, and support capability.",
      "Create joint planning conversations that show commitment to shared growth rather than one-off wins.",
    ],
    summary:
      "MSPs can bundle IPI solutions into fully managed CX environments, creating high-value recurring revenue with long customer lifecycles.",
  },
  {
    num: "5",
    priority: "Strategic Influencers",
    label: "CX & Digital Transformation Consultancies",
    icon: "💡",
    color: "#C0887B",
    glow: "255,154,108",
    vendors: [
      "Contact centre platform strategy",
      "Automation advisory",
      "Customer engagement design",
    ],
    whyMatter: [
      "Influence large enterprise technology decisions",
      "Shape CX architecture before vendor selection",
      "Credibility in C-suite conversations",
    ],
    opportunity: [
      "Strategic advisory engagements",
      "CX architecture design",
      "Transformation projects",
    ],
    challenges: [
      "They often already work with vendors offering SPIFFs or incentives — do we want to compete on this?",
      "Strategic partnerships often require executive sponsorship and longer recruitment cycles.",
      "They will expect strong alignment around enterprise delivery capability and long-term roadmap.",
    ],
    winStrategies: [
      "Avoid relying only on SPIFFs and instead differentiate on strategic value, solution breadth, and services opportunity.",
      "Engage at executive level early to build sponsorship and long-term alignment.",
      "Show confidence in enterprise delivery, roadmap strength, and the ability to support complex strategic opportunities.",
    ],
    summary:
      "Consultancies influence enterprise technology decisions even when they don't sell directly. IPI becomes the recommended CX platform within consultancy-led programmes.",
  },
];

const IPP_CRITERIA = [
  {
    icon: "🏢",
    label: "Company Size",
    desc: "Typically 5–200 employees with a dedicated sales team and existing customer base in technology or CX.",
  },
  {
    icon: "💼",
    label: "Sales Capability",
    desc: "Has a structured sales process, pre-sales capability or willingness to develop one, with quota-carrying reps.",
  },
  {
    icon: "👥",
    label: "Target Customers",
    desc: "Serves mid-market to enterprise customers (50+ seats) in sectors such as financial services, retail, utilities or healthcare.",
  },
  {
    icon: "🌍",
    label: "Geographic Reach",
    desc: "Operates primarily in the UK & Ireland, with appetite to expand into European markets alongside IPI.",
  },
  {
    icon: "🔗",
    label: "Technology Alignment",
    desc: "Currently sells or supports Genesys, Five9, NICE, Microsoft Teams, or complementary CX/UC platforms.",
  },
  {
    icon: "📈",
    label: "Growth Mindset",
    desc: "Actively investing in expanding their portfolio into cloud CX, AI automation, or managed services.",
  },
];

const IPP_SCORING_STORAGE_KEY = "ipi_partner_profile_scoring_evaluations_v1";

const IPP_SCORING_CATEGORIES = [
  {
    id: "customerBaseAlignment",
    title: "A. Customer Base Alignment",
    description:
      "How well the partner’s existing customers match the IP Integration target market.",
    helper:
      "1 = Mostly SMB/general IT customers · 2 = Limited CX relevance · 3 = Some mid-market or UC customers · 4 = Strong mid-market CX/UC customer base · 5 = Established CX/contact centre customer base",
  },
  {
    id: "portfolioSynergy",
    title: "B. Portfolio Synergy",
    description:
      "How well the partner’s current portfolio aligns with and complements IP Integration solutions.",
    helper:
      "1 = No meaningful alignment · 2 = General IT reseller only · 3 = Some UC or networking relevance · 4 = Strong UC/contact centre relevance · 5 = Excellent fit with complementary CX, UC, CC or service portfolio",
  },
  {
    id: "salesCapability",
    title: "C. Sales Capability",
    description:
      "Ability to create pipeline and sell value-led customer experience solutions.",
    helper:
      "1 = No specialist sales capability · 2 = Reactive sales model · 3 = Some consultative sales ability · 4 = Dedicated sales specialists · 5 = Proven CX / solution-selling sales team",
  },
  {
    id: "technicalCapability",
    title: "D. Technical Capability",
    description: "Ability to deploy, support and grow customer solutions.",
    helper:
      "1 = No technical delivery resource · 2 = Basic IT support only · 3 = UC engineering capability · 4 = Contact centre or complex communications capability · 5 = Strong implementation and support capability across relevant areas",
  },
  {
    id: "strategicAlignment",
    title: "E. Strategic Alignment",
    description:
      "How important customer experience, cloud communications or adjacent services are to the partner’s growth strategy.",
    helper:
      "1 = Not strategic · 2 = Opportunistic only · 3 = Moderate interest · 4 = Active growth area · 5 = Core strategic focus",
  },
  {
    id: "growthPotential",
    title: "F. Growth Potential",
    description:
      "Estimated revenue potential and expansion opportunity for IP Integration.",
    helper:
      "1 = Less than £50k potential · 2 = £50k–£100k · 3 = £100k–£250k · 4 = £250k–£500k · 5 = £500k+ potential",
  },
];

const getIppClassification = (score) => {
  if (score >= 25) {
    return {
      label: "Strategic Partner",
      color: "#6FD9AE",
      badgeBg: "rgba(111,217,174,0.14)",
      badgeBorder: "rgba(111,217,174,0.38)",
      interpretation:
        "Strong alignment to the Ideal Partner Profile. Prioritise recruitment and joint planning.",
    };
  }
  if (score >= 20) {
    return {
      label: "High Potential",
      color: "#67D8FF",
      badgeBg: "rgba(103,216,255,0.14)",
      badgeBorder: "rgba(103,216,255,0.38)",
      interpretation: "Good potential, but some capability gaps need validating.",
    };
  }
  if (score >= 15) {
    return {
      label: "Developing Partner",
      color: "#F3C874",
      badgeBg: "rgba(243,200,116,0.14)",
      badgeBorder: "rgba(243,200,116,0.34)",
      interpretation: "Moderate fit. Suitable for selective engagement.",
    };
  }
  if (score >= 10) {
    return {
      label: "Opportunistic Partner",
      color: "#AEB9C8",
      badgeBg: "rgba(174,185,200,0.16)",
      badgeBorder: "rgba(174,185,200,0.32)",
      interpretation: "Moderate fit. Suitable for selective engagement.",
    };
  }
  return {
    label: "Low Priority",
    color: "#FF7A7A",
    badgeBg: "rgba(255,122,122,0.14)",
    badgeBorder: "rgba(255,122,122,0.35)",
    interpretation: "Low fit against current reseller priorities.",
  };
};

function PartnerProgramPage() {
  const [activeT, setActiveT] = React.useState(0);
  const t = PARTNER_TIERS_DATA[activeT];
  const createEmptyEvaluation = React.useCallback(() => ({
    id: null,
    partnerName: "",
    website: "",
    primaryContact: "",
    region: "",
    existingVendorRelationships: "",
    notes: "",
    scores: Object.fromEntries(IPP_SCORING_CATEGORIES.map((cat) => [cat.id, 3])),
    risks: {
      competitorCommitment: false,
      limitedTechnicalResource: false,
      noSalesInvestment: false,
    },
  }), []);

  const [evaluationForm, setEvaluationForm] = React.useState(() =>
    createEmptyEvaluation(),
  );
  const [savedEvaluations, setSavedEvaluations] = React.useState([]);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(IPP_SCORING_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) setSavedEvaluations(parsed);
    } catch (error) {
      console.error("Failed to load saved partner evaluations", error);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(
      IPP_SCORING_STORAGE_KEY,
      JSON.stringify(savedEvaluations),
    );
  }, [savedEvaluations]);

  const totalScore = IPP_SCORING_CATEGORIES.reduce(
    (sum, category) => sum + Number(evaluationForm.scores[category.id] || 0),
    0,
  );
  const classification = getIppClassification(totalScore);
  const hasRiskFlag = Object.values(evaluationForm.risks).some(Boolean);

  const setDetailField = (field, value) => {
    setEvaluationForm((prev) => ({ ...prev, [field]: value }));
  };

  const setCategoryScore = (categoryId, value) => {
    setEvaluationForm((prev) => ({
      ...prev,
      scores: { ...prev.scores, [categoryId]: Number(value) },
    }));
  };

  const setRiskFlag = (flagKey, checked) => {
    setEvaluationForm((prev) => ({
      ...prev,
      risks: { ...prev.risks, [flagKey]: checked },
    }));
  };

  const handleSaveEvaluation = () => {
    const nowIso = new Date().toISOString();
    const record = {
      ...evaluationForm,
      id: evaluationForm.id || `${Date.now()}`,
      totalScore,
      classification: classification.label,
      classificationColor: classification.color,
      interpretation: classification.interpretation,
      dateEvaluated: evaluationForm.id
        ? evaluationForm.dateEvaluated || nowIso
        : nowIso,
      updatedAt: nowIso,
    };

    setSavedEvaluations((prev) => {
      const exists = prev.some((item) => item.id === record.id);
      if (exists) {
        return prev.map((item) => (item.id === record.id ? record : item));
      }
      return [record, ...prev];
    });
    setEvaluationForm(createEmptyEvaluation());
  };

  const handleEditEvaluation = (record) => {
    setEvaluationForm({
      id: record.id,
      partnerName: record.partnerName || "",
      website: record.website || "",
      primaryContact: record.primaryContact || "",
      region: record.region || "",
      existingVendorRelationships: record.existingVendorRelationships || "",
      notes: record.notes || "",
      scores: Object.fromEntries(
        IPP_SCORING_CATEGORIES.map((cat) => [cat.id, Number(record.scores?.[cat.id] || 1)]),
      ),
      risks: {
        competitorCommitment: Boolean(record.risks?.competitorCommitment),
        limitedTechnicalResource: Boolean(record.risks?.limitedTechnicalResource),
        noSalesInvestment: Boolean(record.risks?.noSalesInvestment),
      },
      dateEvaluated: record.dateEvaluated,
    });
  };

  const handleDeleteEvaluation = (recordId) => {
    setSavedEvaluations((prev) => prev.filter((item) => item.id !== recordId));
    setEvaluationForm((prev) =>
      prev.id === recordId ? createEmptyEvaluation() : prev,
    );
  };

  return (
    <React.Fragment>
      <Bg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          animation: "fadeIn 0.35s ease both",
        }}
      >
        {/* TARGET PARTNER PRIORITIES */}
        <div
          style={{
            maxWidth: "none",
            margin: "0",
            padding: "52px 44px 0",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(54,198,255,0.3))",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: "rgba(54,198,255,0.6)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "normal",
              }}
            >
              Target Partner Priorities
            </span>
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,rgba(54,198,255,0.3),transparent)",
              }}
            />
          </div>

          <p
            style={{
              fontSize: 13,
              color: "#8EA6BF",
              lineHeight: 1.75,
              maxWidth: "none",
              marginBottom: 28,
            }}
          >
            Partner recruitment focuses on specific categories based on
            strategic value, speed to revenue and market influence. The tiers
            below represent the priority order for recruitment.
          </p>

          {/* Tier selector tabs */}
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {PARTNER_TIERS_DATA.map((pt, i) => (
              <button
                key={i}
                onClick={() => setActiveT(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background:
                    activeT === i
                      ? `rgba(${pt.glow},0.18)`
                      : "rgba(255,255,255,0.04)",
                  border: `1.5px solid ${activeT === i ? `rgba(${pt.glow},0.65)` : "rgba(255,255,255,0.1)"}`,
                  borderRadius: 10,
                  padding: "9px 16px",
                  cursor: "pointer",
                  color: activeT === i ? pt.color : "rgba(200,220,215,0.55)",
                  fontSize: 12,
                  fontWeight: 800,
                  fontFamily: "'Nunito Sans',sans-serif",
                  letterSpacing: "0.02em",
                  transition: "all 0.2s",
                  boxShadow:
                    activeT === i ? `0 4px 16px rgba(${pt.glow},0.2)` : "none",
                }}
                onMouseEnter={(e) => {
                  if (activeT !== i) {
                    e.currentTarget.style.background = `rgba(${pt.glow},0.08)`;
                    e.currentTarget.style.borderColor = `rgba(${pt.glow},0.3)`;
                    e.currentTarget.style.color = pt.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeT !== i) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(200,220,215,0.55)";
                  }
                }}
              >
                <span style={{ fontSize: 16 }}>{pt.icon}</span>
                <span>Tier {pt.num}</span>
                <span
                  style={{
                    fontWeight: 600,
                    opacity: 0.7,
                    fontSize: 10,
                    whiteSpace: "normal",
                  }}
                >
                  {pt.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active tier detail panel */}
          <div
            key={activeT}
            style={{
              background: `linear-gradient(135deg,rgba(${t.glow},0.1),rgba(${t.glow},0.04))`,
              border: `1.5px solid rgba(${t.glow},0.35)`,
              borderRadius: 18,
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
              animation: "fadeIn 0.25s ease both",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 4,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 15,
                    background: `rgba(${t.glow},0.2)`,
                    border: `1.5px solid rgba(${t.glow},0.45)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                    flexShrink: 0,
                  }}
                >
                  {t.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: `rgba(${t.glow},0.7)`,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    Tier {t.num}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 900,
                      color: t.color,
                      fontFamily: "'Syne',sans-serif",
                      lineHeight: 1.2,
                    }}
                  >
                    {t.label}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: `rgba(${t.glow},0.55)`,
                      fontWeight: 700,
                      marginTop: 2,
                    }}
                  >
                    {t.priority}
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#7AADA0",
                  lineHeight: 1.72,
                  margin: 0,
                }}
              >
                {t.summary}
              </p>
              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 800,
                    color: `rgba(${t.glow},0.55)`,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Key Partner Types
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {t.vendors.map((v, i) => (
                    <span
                      key={i}
                      style={{
                        background: `rgba(${t.glow},0.1)`,
                        border: `1px solid rgba(${t.glow},0.3)`,
                        borderRadius: 100,
                        padding: "3px 10px",
                        fontSize: 10.5,
                        fontWeight: 700,
                        color: t.color,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Ordered playbook sections */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  title: "Benefits",
                  note: "(Why They Matter)",
                  items: t.whyMatter,
                  icon: "✓",
                },
                {
                  title: "Requirements",
                  note: "(Opportunity for IPI)",
                  items: t.opportunity,
                  icon: "→",
                },
                {
                  title: "Partner Acquisition Challenges",
                  items: t.challenges,
                  icon: "•",
                },
                {
                  title: "How We Win This Partner Type",
                  items: t.winStrategies,
                  icon: <NavIcon name="users" />,
                },
              ].map((section) => (
                <div key={section.title}>
                  <div
                    style={{
                      fontSize: 9,
                      fontWeight: 800,
                      color: `rgba(${t.glow},0.6)`,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    {section.title}
                    {section.note && (
                      <span style={{ opacity: 0.7, marginLeft: 4 }}>
                        {section.note}
                      </span>
                    )}
                  </div>
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 10 }}
                  >
                    {section.items.map((text, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 6,
                            background: `rgba(${t.glow},0.15)`,
                            border: `1px solid rgba(${t.glow},0.35)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                            color: t.color,
                            fontSize: 10,
                            fontWeight: 900,
                          }}
                        >
                          {section.icon}
                        </div>
                        <span
                          style={{
                            fontSize: 12.5,
                            color: "var(--text-secondary)",
                            lineHeight: 1.6,
                            fontWeight: 600,
                          }}
                        >
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="brand-line" style={{ margin: "44px 44px 0" }} />

        {/* STRATEGIC RECRUITMENT FOCUS */}
        <div
          style={{
            maxWidth: "none",
            margin: "0",
            padding: "36px 44px 0",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(212,168,67,0.3))",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: "rgba(212,168,67,0.6)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "normal",
              }}
            >
              Strategic Recruitment Focus
            </span>
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,rgba(212,168,67,0.3),transparent)",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 16,
              marginBottom: 0,
            }}
          >
            <div
              style={{
                background:
                  "linear-gradient(135deg,rgba(54,198,255,0.12),rgba(54,198,255,0.04))",
                border: "1.5px solid rgba(54,198,255,0.35)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(54,198,255,0.7)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Primary Focus — Fastest Path to Revenue
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  { num: "1️⃣", label: "CCaaS Resellers", color: "#36C6FF" },
                  {
                    num: "2️⃣",
                    label: "Telecom & UC Resellers",
                    color: "#67D8FF",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <span style={{ fontSize: 20 }}>{r.num}</span>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: r.color,
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#7E97B4",
                  lineHeight: 1.7,
                  marginTop: 14,
                  marginBottom: 0,
                }}
              >
                These partners offer the fastest path to scalable recurring
                revenue through their existing CX and telecom customer
                relationships.
              </p>
            </div>

            <div
              style={{
                background:
                  "linear-gradient(135deg,rgba(177,143,255,0.1),rgba(177,143,255,0.03))",
                border: "1.5px solid rgba(177,143,255,0.28)",
                borderRadius: 16,
                padding: "24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(177,143,255,0.7)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                Secondary Focus — Diverse Ecosystem
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  {
                    num: "3️⃣",
                    label: "Specialist Solution Providers",
                    color: "#A37992",
                  },
                  {
                    num: "4️⃣",
                    label: "Managed Service Providers",
                    color: "#7B96A3",
                  },
                  {
                    num: "5️⃣",
                    label: "CX & Digital Transformation Consultancies",
                    color: "#C0887B",
                  },
                ].map((r, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: 10,
                      padding: "10px 14px",
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{r.num}</span>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 800,
                        color: r.color,
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#7E97B4",
                  lineHeight: 1.7,
                  marginTop: 14,
                  marginBottom: 0,
                }}
              >
                This tiered approach ensures IPI focuses on high-impact partners
                while building a diverse, resilient ecosystem.
              </p>
            </div>
          </div>
        </div>

        <div className="brand-line" style={{ margin: "44px 44px 0" }} />

        {/* IDEAL PARTNER PROFILE */}
        <div
          style={{
            maxWidth: "none",
            margin: "0",
            padding: "36px 44px 52px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,transparent,rgba(54,198,255,0.3))",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 800,
                color: "rgba(54,198,255,0.6)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                whiteSpace: "normal",
              }}
            >
              Ideal Partner Profile (IPP)
            </span>
            <div
              style={{
                height: 1,
                flex: 1,
                background:
                  "linear-gradient(90deg,rgba(54,198,255,0.3),transparent)",
              }}
            />
          </div>
          <p
            style={{
              fontSize: 13,
              color: "#8EA6BF",
              lineHeight: 1.75,
              maxWidth: "none",
              marginBottom: 24,
            }}
          >
            The IPP defines exactly what a "perfect partner" looks like for IPI.
            It helps avoid signing the wrong partners — one of the biggest
            mistakes in channel programs.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 14,
            }}
          >
            {IPP_CRITERIA.map((c, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(54,198,255,0.18)",
                  borderRadius: 14,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(54,198,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(54,198,255,0.35)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.borderColor = "rgba(54,198,255,0.18)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 11,
                      background: "rgba(54,198,255,0.12)",
                      border: "1px solid rgba(54,198,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 800,
                      color: "#67D8FF",
                      fontFamily: "'Syne',sans-serif",
                    }}
                  >
                    {c.label}
                  </div>
                </div>
                <div
                  style={{ fontSize: 12, color: "#7E97B4", lineHeight: 1.72 }}
                >
                  {c.desc}
                </div>
              </div>
            ))}
          </div>


          <div className="brand-line" style={{ margin: "44px 0 0" }} />

          <section style={{ marginTop: 34 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  height: 1,
                  flex: 1,
                  background:
                    "linear-gradient(90deg,transparent,rgba(54,198,255,0.3))",
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: "rgba(54,198,255,0.6)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Ideal Partner Profile Scoring Tool
              </span>
              <div
                style={{
                  height: 1,
                  flex: 1,
                  background:
                    "linear-gradient(90deg,rgba(54,198,255,0.3),transparent)",
                }}
              />
            </div>
            <h3
              style={{
                fontSize: 26,
                color: "var(--text-primary)",
                fontFamily: "'Syne',sans-serif",
                marginBottom: 8,
              }}
            >
              Ideal Partner Profile Scoring Tool
            </h3>
            <p style={{ fontSize: 13, color: "#8EA6BF", lineHeight: 1.75 }}>
              Score prospective reseller partners against the IP Integration ideal partner criteria to identify the strongest recruitment opportunities.
            </p>
            <p style={{ fontSize: 12.5, color: "#7E97B4", lineHeight: 1.75, marginBottom: 24 }}>
              This tool helps IP Integration assess how closely a prospective reseller aligns to the ideal partner profile. It provides a structured, repeatable way to prioritise recruitment effort, highlight strengths and identify gaps before investing time in enablement and onboarding.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14, alignItems: "start" }}>
              <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(54,198,255,0.2)", borderRadius: 14, padding: 18 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(54,198,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                  Partner Details
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 10 }}>
                  {[
                    ["partnerName", "Partner Name"],
                    ["website", "Website"],
                    ["primaryContact", "Primary Contact"],
                    ["region", "Region"],
                    ["existingVendorRelationships", "Existing Vendor Relationships"],
                  ].map(([field, label]) => (
                    <label key={field} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                      <span style={{ fontSize: 11.5, color: "#A3BCD6", fontWeight: 700 }}>{label}</span>
                      <input
                        value={evaluationForm[field] || ""}
                        onChange={(e) => setDetailField(field, e.target.value)}
                        style={{ background: "rgba(9,20,36,0.7)", border: "1px solid rgba(54,198,255,0.24)", borderRadius: 10, color: "#D9ECFF", padding: "10px 12px", fontSize: 12.5 }}
                      />
                    </label>
                  ))}
                  <label style={{ display: "flex", flexDirection: "column", gap: 5, gridColumn: "1 / -1" }}>
                    <span style={{ fontSize: 11.5, color: "#A3BCD6", fontWeight: 700 }}>Notes</span>
                    <textarea
                      value={evaluationForm.notes}
                      onChange={(e) => setDetailField("notes", e.target.value)}
                      rows={4}
                      style={{ background: "rgba(9,20,36,0.7)", border: "1px solid rgba(54,198,255,0.24)", borderRadius: 10, color: "#D9ECFF", padding: "10px 12px", fontSize: 12.5, resize: "vertical" }}
                    />
                  </label>
                </div>
              </div>

              <div style={{ display: "grid", gap: 14 }}>
                <div style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(54,198,255,0.2)", borderRadius: 14, padding: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(54,198,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                    Score Summary
                  </div>
                  <div style={{ fontSize: 52, fontWeight: 900, lineHeight: 1, color: classification.color, fontFamily: "'Syne',sans-serif" }}>
                    {totalScore}<span style={{ fontSize: 20, color: "#8EA6BF" }}>/30</span>
                  </div>
                  <div style={{ marginTop: 10, display: "inline-flex", padding: "6px 12px", borderRadius: 999, border: `1px solid ${classification.badgeBorder}`, background: classification.badgeBg, color: classification.color, fontSize: 12, fontWeight: 800 }}>
                    {classification.label}
                  </div>
                  <p style={{ marginTop: 12, fontSize: 12.5, color: "#A3BCD6", lineHeight: 1.7 }}>{classification.interpretation}</p>
                </div>

                <div style={{ background: "rgba(255,255,255,0.025)", border: `1px solid ${hasRiskFlag ? "rgba(255,122,122,0.5)" : "rgba(54,198,255,0.2)"}`, borderRadius: 14, padding: 18 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: hasRiskFlag ? "rgba(255,122,122,0.84)" : "rgba(54,198,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                    Partner Risk Flags
                  </div>
                  <div style={{ display: "grid", gap: 8 }}>
                    {[
                      ["competitorCommitment", "Already heavily committed to competitor CCaaS vendors"],
                      ["limitedTechnicalResource", "Limited technical resource"],
                      ["noSalesInvestment", "No visible sales investment in CX or cloud communications"],
                    ].map(([key, label]) => (
                      <label key={key} style={{ display: "flex", gap: 8, alignItems: "center", color: "#B6CAE0", fontSize: 12.5 }}>
                        <input type="checkbox" checked={evaluationForm.risks[key]} onChange={(e) => setRiskFlag(key, e.target.checked)} />
                        {label}
                      </label>
                    ))}
                  </div>
                  {hasRiskFlag && (
                    <div style={{ marginTop: 10, background: "rgba(255,122,122,0.14)", border: "1px solid rgba(255,122,122,0.45)", borderRadius: 10, padding: "8px 10px", color: "#FFB7B7", fontSize: 12, fontWeight: 700 }}>
                      Partner risk identified – validate capability and commitment before progressing.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 14, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(54,198,255,0.2)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(54,198,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Scoring Framework
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 10 }}>
                {IPP_SCORING_CATEGORIES.map((category) => (
                  <div key={category.id} style={{ background: "rgba(54,198,255,0.06)", border: "1px solid rgba(54,198,255,0.2)", borderRadius: 12, padding: 12 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 800, color: "#C9E9FF", marginBottom: 6 }}>{category.title}</div>
                    <p style={{ fontSize: 12, color: "#8EA6BF", lineHeight: 1.65, marginBottom: 8 }}>{category.description}</p>
                    <select
                      value={evaluationForm.scores[category.id]}
                      onChange={(e) => setCategoryScore(category.id, e.target.value)}
                      style={{ width: "100%", background: "rgba(9,20,36,0.82)", border: "1px solid rgba(54,198,255,0.28)", borderRadius: 10, color: "#E8F4FF", padding: "9px 10px", fontSize: 13, fontWeight: 700, marginBottom: 6 }}
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <option key={value} value={value}>{value}</option>
                      ))}
                    </select>
                    <div style={{ fontSize: 11, color: "#7E97B4", lineHeight: 1.55 }}>{category.helper}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  {IPP_SCORING_CATEGORIES.map((category) => (
                    <div key={category.id} style={{ display: "grid", gap: 4, minWidth: 80 }}>
                      <span style={{ fontSize: 10.5, color: "#8EA6BF" }}>{category.title.split('. ')[0]}</span>
                      <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                        <span style={{ display: "block", height: "100%", width: `${(evaluationForm.scores[category.id] / 5) * 100}%`, background: "linear-gradient(90deg,#36C6FF,#6FD9AE)" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleSaveEvaluation}
                  style={{ background: "linear-gradient(135deg,#36C6FF,#2C9DDF)", border: "1px solid rgba(54,198,255,0.5)", color: "#041426", borderRadius: 10, fontWeight: 800, fontSize: 13, padding: "10px 16px", cursor: "pointer" }}
                >
                  Save Evaluation
                </button>
              </div>
            </div>

            <div style={{ marginTop: 16, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(54,198,255,0.2)", borderRadius: 14, padding: 18 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "rgba(54,198,255,0.75)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Saved Evaluations
              </div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 760 }}>
                  <thead>
                    <tr>
                      {["Partner Name", "Region", "Total Score", "Classification", "Date Evaluated", "Notes", "Actions"].map((head) => (
                        <th key={head} style={{ textAlign: "left", fontSize: 11, color: "#7E97B4", fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", borderBottom: "1px solid rgba(54,198,255,0.16)", padding: "0 8px 10px" }}>{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {savedEvaluations.length === 0 ? (
                      <tr>
                        <td colSpan={7} style={{ color: "#7E97B4", fontSize: 12.5, padding: "12px 8px" }}>No evaluations saved yet.</td>
                      </tr>
                    ) : (
                      savedEvaluations.map((record) => (
                        <tr key={record.id}>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#D5E9FB", fontSize: 12.5 }}>{record.partnerName || "—"}</td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#B4C8DD", fontSize: 12.5 }}>{record.region || "—"}</td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#D5E9FB", fontSize: 12.5, fontWeight: 800 }}>{record.totalScore}/30</td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}><span style={{ fontSize: 11.5, fontWeight: 800, color: record.classificationColor || "#AEB9C8" }}>{record.classification}</span></td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#B4C8DD", fontSize: 12.5 }}>{record.dateEvaluated ? new Date(record.dateEvaluated).toLocaleDateString() : "—"}</td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)", color: "#B4C8DD", fontSize: 12.5 }}>{record.notes || "—"}</td>
                          <td style={{ padding: "10px 8px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                              <button type="button" onClick={() => handleEditEvaluation(record)} style={{ background: "rgba(103,216,255,0.14)", border: "1px solid rgba(103,216,255,0.34)", color: "#8EDFFF", borderRadius: 8, fontSize: 11, fontWeight: 700, padding: "5px 9px", cursor: "pointer" }}>View</button>
                              <button type="button" onClick={() => handleEditEvaluation(record)} style={{ background: "rgba(243,200,116,0.14)", border: "1px solid rgba(243,200,116,0.34)", color: "#F3C874", borderRadius: 8, fontSize: 11, fontWeight: 700, padding: "5px 9px", cursor: "pointer" }}>Edit</button>
                              <button type="button" onClick={() => handleDeleteEvaluation(record.id)} style={{ background: "rgba(255,122,122,0.14)", border: "1px solid rgba(255,122,122,0.36)", color: "#FF9D9D", borderRadius: 8, fontSize: 11, fontWeight: 700, padding: "5px 9px", cursor: "pointer" }}>Delete</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </React.Fragment>
  );
}

function CommercialFrameworkPage() {
  const hierarchySteps = [
    {
      title: "Reseller Master Agreement",
      subtitle: "Single governing agreement",
    },
    {
      title: "Product Schedules",
      subtitle: "Solution-specific operating terms",
    },
    {
      title: "EULAs & Service Terms",
      subtitle: "End-customer legal documentation",
    },
    {
      title: "Pricing Framework",
      subtitle: "Commercial model and discounting",
    },
  ];
  const scheduleCards = [
    "Telephony Services Schedule",
    "UCaaS & CCaaS Platform Schedule",
    "AI & Automation Schedule",
    "Secure Payments Schedule",
    "Managed Services Schedule",
    "Professional Services Schedule",
  ];
  const eulaExamples = [
    "End User Licence Agreement",
    "Acceptable Use Policy",
    "Service Level Agreements",
    "Data Processing Agreements",
  ];
  const pricingItems = [
    "Wholesale partner pricing",
    "Partner tier discounts",
    "Recommended resale pricing",
    "Usage-based pricing where applicable",
  ];

  return (
    <React.Fragment>
      <Bg />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          padding: "50px 44px 56px",
          animation: "fadeIn 0.35s ease both",
        }}
      >
        <div
          style={{
            maxWidth: "none",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          <section style={{ textAlign: "center", padding: "0 6px" }}>
            <h1
              style={{
                fontSize: "clamp(26px,4vw,50px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                marginBottom: 16,
                fontFamily: "'Syne',sans-serif",
              }}
            >
              Commercial & Legal{" "}
              <span style={{ color: "#36C6FF" }}>Framework</span>
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#8EA6BF",
                lineHeight: 1.85,
                maxWidth: "none",
                margin: "0",
              }}
            >
              The IPI Partner Advantage program is designed to provide a simple,
              scalable and partner-friendly commercial structure. Partners sign
              a single Reseller Master Agreement which governs the overall
              relationship with IP Integration. From that point onward, partners
              can sell any solution within the IPI portfolio using modular
              product schedules, standardised pricing frameworks and published
              legal documentation.
            </p>
            <p
              style={{
                fontSize: 14,
                color: "#8EA6BF",
                lineHeight: 1.85,
                maxWidth: "none",
                margin: "12px auto 0",
              }}
            >
              This structure removes contractual friction and allows partners to
              rapidly expand their portfolio as new solutions are introduced.
            </p>
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#67D8FF",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 18,
              }}
            >
              Designed for scale, flexibility and rapid partner growth.
            </p>
          </section>

          <div className="brand-line" />

          <section
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(54,198,255,0.24)",
              borderRadius: 14,
              padding: "18px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "rgba(54,198,255,0.68)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              1 · Partner Agreement Structure
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                gap: 12,
                marginBottom: 14,
              }}
            >
              {hierarchySteps.map((step, i) => (
                <div
                  key={step.title}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(54,198,255,0.24)",
                    borderRadius: 13,
                    padding: "16px 14px",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: "rgba(54,198,255,0.18)",
                      border: "1px solid rgba(54,198,255,0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#67D8FF",
                      flexShrink: 0,
                    }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13.5,
                        fontWeight: 800,
                        color: "#EAF5FF",
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {step.title}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        color: "#7E97B4",
                        lineHeight: 1.6,
                        marginTop: 4,
                      }}
                    >
                      {step.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: 12,
                color: "rgba(103,216,255,0.85)",
                letterSpacing: "0.05em",
                marginBottom: 18,
              }}
            >
              Master Agreement ↓ Product Schedules ↓ EULAs ↓ Pricing
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(177,143,255,0.32)",
                borderRadius: 14,
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(177,143,255,0.72)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Reseller Master Agreement (RMA)
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#8EA6BF",
                  lineHeight: 1.75,
                  marginBottom: 12,
                }}
              >
                The Reseller Master Agreement defines the overall legal and
                commercial relationship between IP Integration and the partner.
              </p>
              <ul
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                  gap: 8,
                  paddingLeft: 18,
                  color: "#D8B9CB",
                  fontSize: 12,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                <li>partnership terms and conditions</li>
                <li>partner obligations and responsibilities</li>
                <li>partner tier classification</li>
                <li>discount framework</li>
                <li>billing and payment terms</li>
                <li>general commercial governance</li>
              </ul>
              <p
                style={{
                  fontSize: 12,
                  color: "#A88BA0",
                  lineHeight: 1.75,
                  marginTop: 12,
                }}
              >
                Once signed, the RMA allows partners to sell the full IPI
                portfolio without signing new master agreements.
              </p>
            </div>
          </section>

          <section
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(54,198,255,0.24)",
              borderRadius: 14,
              padding: "18px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "rgba(54,198,255,0.68)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              2 · Product Schedules
            </div>
            <p
              style={{
                fontSize: 13,
                color: "#8EA6BF",
                lineHeight: 1.75,
                marginBottom: 14,
              }}
            >
              Each product family has its own schedule. Product Schedules define
              the operational and commercial terms for each solution area.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
                gap: 12,
                marginBottom: 14,
              }}
            >
              {scheduleCards.map((s) => (
                <div
                  key={s}
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(54,198,255,0.2)",
                    borderRadius: 12,
                    padding: "14px 12px",
                    fontSize: 12.5,
                    fontWeight: 700,
                    color: "#B7D7CE",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
            <ul
              style={{
                paddingLeft: 18,
                color: "#67D8FF",
                fontSize: 12.5,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <li>product scope and description</li>
              <li>service delivery model</li>
              <li>support structure</li>
              <li>service levels</li>
              <li>provisioning requirements</li>
            </ul>
            <p
              style={{
                fontSize: 12.5,
                color: "#7FB3A6",
                lineHeight: 1.75,
                marginTop: 12,
              }}
            >
              When a new IPI product is introduced, a new schedule can be added
              without changing the master agreement.
            </p>
          </section>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(177,143,255,0.32)",
                borderRadius: 14,
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(177,143,255,0.72)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                3 · End User Legal Agreements (EULAs)
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#8EA6BF",
                  lineHeight: 1.75,
                  marginBottom: 10,
                }}
              >
                EULAs govern the relationship between IP Integration and the end
                customer using the platform. Partners reference these documents
                when selling IPI services to their customers.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {eulaExamples.map((e) => (
                  <div
                    key={e}
                    style={{
                      background: "rgba(177,143,255,0.1)",
                      border: "1px solid rgba(177,143,255,0.25)",
                      borderRadius: 10,
                      padding: "9px 10px",
                      fontSize: 12,
                      color: "#D8B9CB",
                    }}
                  >
                    {e}
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#A88BA0",
                  lineHeight: 1.75,
                  marginTop: 10,
                }}
              >
                All documents are maintained centrally and published through the
                Trust Portal.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,154,108,0.32)",
                borderRadius: 14,
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(255,154,108,0.74)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                4 · Pricing Framework
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#8EA6BF",
                  lineHeight: 1.75,
                  marginBottom: 10,
                }}
              >
                Partner Pricing Structure
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                  gap: 8,
                }}
              >
                {pricingItems.map((item) => (
                  <div
                    key={item}
                    style={{
                      background: "rgba(255,154,108,0.1)",
                      border: "1px solid rgba(255,154,108,0.25)",
                      borderRadius: 10,
                      padding: "9px 10px",
                      fontSize: 11.5,
                      color: "#DFB6AC",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#C99A8E",
                  lineHeight: 1.75,
                  marginTop: 10,
                }}
              >
                Pricing is maintained separately from legal agreements to allow
                updates without renegotiating contracts. This ensures the
                commercial framework remains agile while protecting the legal
                integrity of the partner agreement.
              </p>
            </div>
          </section>

          <section
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(54,198,255,0.24)",
              borderRadius: 14,
              padding: "18px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "rgba(54,198,255,0.8)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              5 · Portfolio Access Model
            </div>
            <h3
              style={{
                fontSize: 21,
                color: "var(--text-primary)",
                fontFamily: "'Syne',sans-serif",
                marginBottom: 8,
              }}
            >
              One Agreement — Full Portfolio Access
            </h3>
            <p style={{ fontSize: 13, color: "#8EA6BF", lineHeight: 1.75 }}>
              Once a partner signs the Reseller Master Agreement they gain
              access to the entire IPI product portfolio.
            </p>
            <ul
              style={{
                paddingLeft: 18,
                color: "#A6D5C6",
                fontSize: 12.5,
                lineHeight: 1.75,
                margin: "10px 0 0",
              }}
            >
              <li>start by selling a single solution</li>
              <li>expand into additional products over time</li>
              <li>add new services without signing new contracts</li>
            </ul>
            <p
              style={{
                fontSize: 12.5,
                color: "#8EBDAF",
                lineHeight: 1.75,
                marginTop: 10,
              }}
            >
              This allows partners to evolve from selling point solutions to
              delivering full CX platforms.
            </p>
          </section>

          <section
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(123,150,163,0.32)",
                borderRadius: 14,
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(123,150,163,0.78)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                6 · Trust Portal
              </div>
              <h3
                style={{
                  fontSize: 18,
                  color: "var(--text-primary)",
                  fontFamily: "'Syne',sans-serif",
                  marginBottom: 8,
                }}
              >
                Trust & Compliance Portal
              </h3>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#8EA6BF",
                  lineHeight: 1.75,
                  marginBottom: 10,
                }}
              >
                The Partner Portal includes a dedicated Trust Page providing
                access to the latest versions of:
              </p>
              <ul
                style={{
                  paddingLeft: 18,
                  color: "#9DB8C5",
                  fontSize: 12.5,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                <li>Reseller Master Agreement</li>
                <li>Product schedules</li>
                <li>EULAs and service terms</li>
                <li>security and compliance documentation</li>
                <li>service descriptions and SLAs</li>
              </ul>
              <p
                style={{
                  fontSize: 12,
                  color: "#87A3AF",
                  lineHeight: 1.75,
                  marginTop: 10,
                }}
              >
                This ensures partners always have access to the most current
                documentation.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(54,198,255,0.24)",
                borderRadius: 14,
                padding: "18px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "rgba(54,198,255,0.78)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                7 · Why This Model Works
              </div>
              <div
                style={{
                  fontSize: 18,
                  color: "var(--text-primary)",
                  fontFamily: "'Syne',sans-serif",
                  marginBottom: 8,
                }}
              >
                Why This Model Works
              </div>
              <p
                style={{
                  fontSize: 12.5,
                  color: "#8EA6BF",
                  lineHeight: 1.75,
                  marginBottom: 10,
                }}
              >
                The model creates consistent benefits for both partners and IP
                Integration while reducing legal and commercial friction.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                  gap: 12,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: "#67D8FF",
                      marginBottom: 6,
                    }}
                  >
                    Benefits for Partners
                  </div>
                  <ul
                    style={{
                      paddingLeft: 18,
                      color: "#A6D5C6",
                      fontSize: 12.5,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <li>simple onboarding process</li>
                    <li>ability to sell multiple solutions</li>
                    <li>no need to renegotiate contracts for new products</li>
                    <li>faster sales cycles</li>
                  </ul>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 800,
                      color: "#67D8FF",
                      marginBottom: 6,
                    }}
                  >
                    Benefits for IP Integration
                  </div>
                  <ul
                    style={{
                      paddingLeft: 18,
                      color: "#A6D5C6",
                      fontSize: 12.5,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    <li>scalable legal framework</li>
                    <li>faster partner recruitment</li>
                    <li>easier product expansion</li>
                    <li>consistent governance across the ecosystem</li>
                  </ul>
                </div>
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#87A3AF",
                  lineHeight: 1.75,
                  marginTop: 10,
                }}
              >
                This consistent structure supports repeatable partner onboarding
                and predictable commercial scaling.
              </p>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
}

function PartnerTrustPage() {
  const trustPillars = [
    { icon: "🛡️", label: "Governance-First", tone: "blue" },
    { icon: "📘", label: "Single Source of Truth", tone: "purple" },
    { icon: "⚖️", label: "Compliance Ready", tone: "teal" },
  ];

  const purposePoints = [
    { icon: "✅", text: "Ensures partners always reference the latest versions of agreements and policies" },
    { icon: "🚀", text: "Simplifies partner onboarding" },
    { icon: "⏱️", text: "Reduces delays during customer procurement processes" },
    { icon: "🔐", text: "Supports enterprise security and compliance reviews" },
  ];

  const documentGroups = [
    {
      icon: "📄",
      tone: "blue",
      title: "Commercial Agreements",
      description: "Core legal and commercial agreements that define how partners engage and sell with IPI.",
      items: [
        "IPI Reseller Master Agreement",
        "Partner Terms & Conditions",
        "Partner Tier Structure",
        "Partner Commercial Policies",
      ],
    },
    {
      icon: "🧭",
      tone: "purple",
      title: "Product Schedules",
      description: "Each product area has a dedicated schedule defining service terms and operational details.",
      items: [
        "Telephony Services Schedule",
        "UCaaS & CCaaS Platform Schedule",
        "AI & Automation Services Schedule",
        "Secure Payments Schedule",
        "Managed Services Schedule",
        "Professional Services Schedule",
      ],
    },
    {
      icon: "👥",
      tone: "teal",
      title: "End User Legal Documentation",
      description: "Documentation partners can use directly in customer deployments and procurement journeys.",
      items: [
        "End User Licence Agreements (EULAs)",
        "Acceptable Use Policies",
        "Service Descriptions",
        "Service Level Agreements (SLAs)",
        "Data Processing Agreements (DPAs)",
      ],
    },
    {
      icon: "🧪",
      tone: "amber",
      title: "Security & Compliance Documentation",
      description: "Technical and governance collateral to support enterprise security and risk assessments.",
      items: [
        "Data protection policies",
        "Security frameworks",
        "Compliance certifications",
        "PCI related documentation for secure payments services",
      ],
    },
  ];

  const strategicBenefits = [
    {
      icon: "⚡",
      title: "Faster Partner Onboarding",
      text: "Partners can quickly access all documentation required to start selling IPI solutions.",
    },
    {
      icon: "🧾",
      title: "Simplified Procurement",
      text: "Enterprise customers and procurement teams can easily review legal and compliance materials.",
    },
    {
      icon: "🛠️",
      title: "Reduced Operational Overhead",
      text: "IPI teams spend less time responding to document requests.",
    },
    {
      icon: "🌟",
      title: "Improved Partner Confidence",
      text: "Transparency strengthens trust within the partner ecosystem.",
    },
  ];

  return (
    <React.Fragment>
      <AppPageHeader
        eyebrow="Partner Trust"
        title="Partner Trust & Compliance Portal"
        subtitle="To support transparency, compliance and operational efficiency, IP Integration will maintain a central Trust Page accessible via the IPI Partner Portal. This page will serve as the single authoritative source for all legal, compliance and product documentation related to the IPI product and services portfolio. The objective is to ensure partners always have access to the latest approved documentation without requiring direct engagement with legal or commercial teams."
      />

      <SectionWrapper>
        <HighlightCard className="trust-hero-card">
          <div className="trust-hero-layout">
            <div>
              <p className="trust-hero-kicker">Trust at a glance</p>
              <h3 className="trust-hero-title">A visual trust layer for every partner engagement.</h3>
              <p className="trust-copy" style={{ marginBottom: 0 }}>
                The Trust Portal combines legal clarity, compliance confidence and operational governance in one branded experience.
              </p>
            </div>
            <div className="trust-pillars-grid">
              {trustPillars.map((pillar) => (
                <div key={pillar.label} className={`trust-pillar trust-pillar--${pillar.tone}`}>
                  <span>{pillar.icon}</span>
                  <strong>{pillar.label}</strong>
                </div>
              ))}
            </div>
          </div>
        </HighlightCard>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Intro"
          title="Purpose of the Trust Page"
          description="The Trust Page will provide partners with easy access to the latest documentation governing the use, resale and delivery of IPI services."
        />
        <StandardCard>
          <div className="trust-purpose-grid">
            {purposePoints.map((item) => (
              <div key={item.text} className="trust-purpose-item">
                <span>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <p className="trust-note">The Trust Page becomes the central compliance and governance hub for the IPI Partner Advantage program.</p>
        </StandardCard>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Documents Hosted"
          title="Documents Hosted on the Trust Page"
          description="The Trust Page will contain the most current versions of all contractual and product governance documentation."
        />
        <div className="trust-grid">
          {documentGroups.map((group) => (
            <StandardCard key={group.title} className={`trust-doc-card trust-doc-card--${group.tone}`}>
              <div className="trust-doc-heading">
                <span className="trust-doc-icon">{group.icon}</span>
                <h3 className="trust-card-title">{group.title}</h3>
              </div>
              <p className="trust-copy">{group.description}</p>
              <ul className="trust-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Document Governance"
          title="Document Governance & Updates"
          description="To ensure documentation remains current and compliant, the Trust Page will follow a clear governance process."
        />
        <HighlightCard>
          <p className="trust-copy">Key principles:</p>
          <ul className="trust-list">
            <li>Only the latest approved versions of documents will be published</li>
            <li>Document version control will be maintained internally</li>
            <li>Partners will be notified when material updates are made</li>
            <li>Updates will not require partners to sign new agreements unless legally required</li>
          </ul>
          <p className="trust-note">This ensures the commercial framework remains agile while maintaining legal integrity.</p>
        </HighlightCard>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Strategic Benefits"
          title="Strategic Benefits"
          description="Establishing a central Trust Page supports the long-term scalability of the IPI Partner Advantage program."
        />
        <div className="trust-grid trust-grid--benefits">
          {strategicBenefits.map((benefit) => (
            <StandardCard key={benefit.title} className="trust-benefit-card">
              <div className="trust-benefit-icon">{benefit.icon}</div>
              <h3 className="trust-card-title">{benefit.title}</h3>
              <p className="trust-copy">{benefit.text}</p>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader
          eyebrow="Long Term Vision"
          title="Long Term Vision"
          description="Over time, the Trust Page should evolve into a comprehensive partner governance hub."
        />
        <StandardCard>
          <div className="trust-vision-grid">
            <div className="trust-vision-item"><span>📚</span>legal documentation</div>
            <div className="trust-vision-item"><span>🛡️</span>security and compliance resources</div>
            <div className="trust-vision-item"><span>🧩</span>product documentation</div>
            <div className="trust-vision-item"><span>🧾</span>service descriptions</div>
            <div className="trust-vision-item"><span>🗺️</span>implementation guidelines</div>
          </div>
          <p className="trust-note">This reinforces IP Integration’s positioning as a trusted technology and services partner in the CX market.</p>
        </StandardCard>
      </SectionWrapper>
    </React.Fragment>
  );
}

const PARTNER_OPERATIONAL_SUPPORT_SECTIONS = [
  {
    title: "Partner Enablement",
    icon: "🎓",
    accent: "cyan",
    points: [
      "Sales accreditation programmes",
      "Technical certification pathways",
      "Solution architecture documentation",
      "Sales playbooks and competitive positioning",
      "Implementation and deployment guides",
      "Partner onboarding programmes",
    ],
  },
  {
    title: "Sales & Marketing Support",
    icon: "📣",
    accent: "violet",
    points: [
      "Co-branded marketing campaigns",
      "Sales presentation decks",
      "Customer case studies",
      "Campaign assets and messaging guides",
      "Joint webinars and events",
      "Partner landing page support",
    ],
  },
  {
    title: "Demo & Pre-Sales Environments",
    icon: "🧪",
    accent: "teal",
    points: [
      "Partner demo environments",
      "Preconfigured demo scenarios",
      "Sandbox environments for testing",
      "Pre-sales engineering support",
      "Solution architecture validation",
    ],
  },
  {
    title: "Order & Provisioning Management",
    icon: "🧾",
    accent: "amber",
    points: [
      "Deal registration process",
      "Pricing and discount approvals",
      "Partner order submission",
      "Automated provisioning workflows",
      "Contract and agreement management",
    ],
  },
  {
    title: "Service Delivery & Support",
    icon: "🛠️",
    accent: "sky",
    points: [
      "Partner service desk access",
      "Defined escalation paths",
      "Incident management process",
      "Service level agreements (SLA)",
      "Technical support resources",
      "Implementation assistance",
    ],
  },
  {
    title: "Product Communication",
    icon: "📡",
    accent: "purple",
    points: [
      "Quarterly product roadmap briefings",
      "Product release notifications",
      "Technical change documentation",
      "Early access programmes",
      "Feature announcements",
    ],
  },
  {
    title: "Operational Governance",
    icon: "📊",
    accent: "green",
    points: [
      "Monthly pipeline reviews",
      "Partner support reviews",
      "Quarterly business reviews",
      "Partner performance tracking",
      "Strategic planning sessions",
    ],
  },
];

function PartnerOperationalSupportPage() {
  return (
    <React.Fragment>
      <Bg />
      <AppPageHeader
        title="Partner Operational Support Framework"
        subtitle="IP Integration provides structured operational support to enable partners to successfully sell, deploy and support solutions across the IPI ecosystem. This operational framework ensures partners have the tools, processes and support needed to consistently deliver strong customer outcomes."
      />

      <SectionWrapper>
        <SectionHeader
          eyebrow="Introduction"
          title="Structured Support Across the Partner Lifecycle"
          description="Our operational framework is designed to reduce friction, improve execution consistency and help every partner scale with confidence."
        />
        <StandardCard>
          <div className="ops-hero">
            <div>
              <p className="trust-copy" style={{ margin: 0 }}>
                From onboarding and accreditation through to order management,
                service delivery and quarterly governance reviews, partners are
                supported by a repeatable operating model. This ensures teams
                can move faster, maintain quality standards and deliver
                measurable customer outcomes at every stage.
              </p>
              <div className="ops-pillars">
                <span><strong>⚡ Faster</strong> time to first deal</span>
                <span><strong>🧭 Clear</strong> operating playbooks</span>
                <span><strong>🛡️ Stronger</strong> delivery confidence</span>
              </div>
            </div>
            <div className="ops-hero-visual" aria-hidden="true">
              <div>🤝</div>
              <p>Partner Success Engine</p>
            </div>
          </div>
        </StandardCard>
      </SectionWrapper>

      <SectionWrapper>
        <div className="operational-framework-grid">
          {PARTNER_OPERATIONAL_SUPPORT_SECTIONS.map((section, index) => (
            <StandardCard key={section.title} className={`operational-framework-card operational-framework-card--${section.accent} operational-framework-card--${index + 1}`}>
              <div className="operational-framework-step">{String(index + 1).padStart(2, "0")}</div>
              <div className="operational-framework-icon">{section.icon}</div>
              <h3 className="trust-card-title">{section.title}</h3>
              <ul className="trust-list">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>
    </React.Fragment>
  );
}

const GOVERNANCE_ACTIVITIES_LEGACY = [
  {
    id: "1",
    activity: "Define Channel Strategy",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "2",
    activity: "Define Partner Program Structure",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "C",
    legal: "C",
    finance: "C",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "3",
    activity: "Partner Tier Definition",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "I",
    legal: "C",
    finance: "C",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "4",
    activity: "Partner Recruitment Plan",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "I",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "5",
    activity: "Target Partner Identification",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "I",
    product: "I",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "6",
    activity: "Partner Outreach & Recruitment",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "I",
    product: "I",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "7",
    activity: "Partner Program Branding (IPI Partner Advantage)",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "R",
    product: "I",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "8",
    activity: "Partner Marketing Assets",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "R",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "9",
    activity: "Partner Portal Development",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "R",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "R",
    executiveLeadership: "A",
  },
  {
    id: "10",
    activity: "Trust & Compliance Page",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "C",
    legal: "R",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "11",
    activity: "Reseller Master Agreement",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "I",
    legal: "R",
    finance: "C",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "12",
    activity: "Product Schedules",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "R",
    legal: "C",
    finance: "I",
    operationsDelivery: "C",
    executiveLeadership: "A",
  },
  {
    id: "13",
    activity: "Partner Price Lists",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "C",
    legal: "I",
    finance: "R",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "14",
    activity: "Partner Discount Structure",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "I",
    legal: "C",
    finance: "R",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "15",
    activity: "Partner Onboarding Process",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "R",
    executiveLeadership: "A",
  },
  {
    id: "16",
    activity: "Partner Sales Enablement",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "R",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "17",
    activity: "Technical Enablement & Training",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "R",
    legal: "I",
    finance: "I",
    operationsDelivery: "R",
    executiveLeadership: "A",
  },
  {
    id: "18",
    activity: "Partner Deal Registration Process",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "I",
    product: "I",
    legal: "I",
    finance: "C",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
  {
    id: "19",
    activity: "Partner Opportunity Support",
    channelManager: "R",
    salesLeadership: "R",
    marketing: "I",
    product: "C",
    legal: "I",
    finance: "I",
    operationsDelivery: "C",
    executiveLeadership: "A",
  },
  {
    id: "20",
    activity: "Partner Revenue Reporting",
    channelManager: "C",
    salesLeadership: "I",
    marketing: "I",
    product: "I",
    legal: "I",
    finance: "R",
    operationsDelivery: "C",
    executiveLeadership: "A",
  },
  {
    id: "21",
    activity: "Partner Program Performance Review",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "C",
    legal: "I",
    finance: "C",
    operationsDelivery: "C",
    executiveLeadership: "A",
  },
  {
    id: "22",
    activity: "12 Month Partner Recruitment Roadmap",
    channelManager: "R",
    salesLeadership: "C",
    marketing: "C",
    product: "I",
    legal: "I",
    finance: "I",
    operationsDelivery: "I",
    executiveLeadership: "A",
  },
];

const GOVERNANCE_STATUS_OPTIONS = [
  "Not Started",
  "In Progress",
  "Blocked",
  "Complete",
];
const PRIORITY_OPTIONS = ["High", "Medium", "Low"];
const EXECUTION_STORAGE_KEY = "ipi_partner_governance_tracker_v1";
const LEGACY_EXECUTION_STORAGE_KEY = "ipi-governance-execution-v1";
const RACI_CURRENT_STORAGE_KEY = "ipi_raci_current_v1";
const RACI_SAVED_VERSIONS_STORAGE_KEY = "ipi_raci_saved_versions_v1";
const LEGACY_RACI_ROLE_FIELDS = [
  ["channelManager", "Channel Manager"],
  ["salesLeadership", "PreSales"],
  ["executiveLeadership", "Executive"],
  ["legal", "Legal"],
  ["marketing", "Marketing"],
  ["finance", "Finance"],
  ["product", "Product"],
  ["operationsDelivery", "Operations"],
];
const RACI_DROPDOWN_OPTIONS = [
  "Channel Manager",
  "PreSales",
  "Executive",
  "Legal",
  "Marketing",
  "Finance",
  "Product",
  "Operations",
];

const RACI_FIELDS = ["r", "a", "c", "i"];

function safeReadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (error) {
    return fallback;
  }
}

function safeWriteStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

function makeVersionId() {
  return `raci_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function formatTimestamp(dateLike = new Date()) {
  const date = new Date(dateLike);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString();
}

function deepCloneMatrix(matrix) {
  return JSON.parse(JSON.stringify(matrix));
}

function getMatrixOnlyRows(rows) {
  return rows.map((row) => ({
    id: row.id,
    activity: row.activity,
    r: normaliseRoleValue(row.r),
    a: normaliseRoleValue(row.a),
    c: normaliseRoleValue(row.c),
    i: normaliseRoleValue(row.i),
  }));
}

function normaliseRoleValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return [value];
}

function MultiRoleDropdown({ id, label, value, options, onChange }) {
  const selected = normaliseRoleValue(value);
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef(null);

  React.useEffect(() => {
    const handlePointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const toggleOption = (option) => {
    const exists = selected.includes(option);
    onChange(exists ? selected.filter((item) => item !== option) : [...selected, option]);
  };

  return (
    <div className={`raciMultiSelect ${open ? "is-open" : ""}`} ref={wrapRef}>
      <button
        type="button"
        id={id}
        className="raciMultiSelectTrigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={label}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="raciMultiSelectValue">
          {selected.length === 0 ? (
            <span className="raciMultiSelectPlaceholder">Select roles</span>
          ) : selected.length > 2 ? (
            <span className="raciMultiSelectSummary">{selected.length} selected</span>
          ) : (
            selected.map((role) => (
              <span className="raciTag" key={`${id}-${role}`}>
                {role}
              </span>
            ))
          )}
        </span>
        <span className="raciMultiSelectChevron" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="raciMultiSelectMenu" role="listbox" aria-multiselectable="true">
          {options.map((option) => {
            const isSelected = selected.includes(option);
            return (
              <button
                type="button"
                key={`${id}-${option}`}
                className={`raciMultiSelectOption ${isSelected ? "is-selected" : ""}`}
                role="option"
                aria-selected={isSelected}
                onClick={() => toggleOption(option)}
              >
                <input type="checkbox" checked={isSelected} readOnly tabIndex={-1} />
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function buildRoleSummary(rows, roles) {
  return roles
    .map((role) => {
      let responsible = 0;
      let accountable = 0;
      let consulted = 0;
      let informed = 0;

      rows.forEach((row) => {
        if ((row.r || []).includes(role)) responsible += 1;
        if ((row.a || []).includes(role)) accountable += 1;
        if ((row.c || []).includes(role)) consulted += 1;
        if ((row.i || []).includes(role)) informed += 1;
      });

      return {
        name: role,
        responsible,
        accountable,
        consulted,
        informed,
        total: responsible + accountable + consulted + informed,
      };
    })
    .sort((a, b) => b.total - a.total || a.name.localeCompare(b.name));
}

function getTodayISODate() {
  return new Date().toISOString().slice(0, 10);
}

function isTaskOverdue(task) {
  return (
    !!task.targetDate &&
    task.targetDate < getTodayISODate() &&
    task.status !== "Complete"
  );
}

function getLegacyRaciRole(task, assignment) {
  const match = LEGACY_RACI_ROLE_FIELDS.find(
    ([field]) => task[field] === assignment,
  );
  return match ? match[1] : "";
}

const GOVERNANCE_ACTIVITIES = GOVERNANCE_ACTIVITIES_LEGACY.map((task) => ({
  ...task,
  r: getLegacyRaciRole(task, "R"),
  a: getLegacyRaciRole(task, "A"),
  c: getLegacyRaciRole(task, "C"),
  i: getLegacyRaciRole(task, "I"),
}));

function GovernancePage() {
  const [view, setView] = React.useState("matrix");
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [priorityFilter, setPriorityFilter] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [showIncompleteOnly, setShowIncompleteOnly] = React.useState(false);
  const [showOverdueOnly, setShowOverdueOnly] = React.useState(false);
  const [noteTaskId, setNoteTaskId] = React.useState(null);
  const [showVersions, setShowVersions] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [versionForm, setVersionForm] = React.useState({ mode: "create", versionId: "", name: "", description: "" });
  const [savedVersions, setSavedVersions] = React.useState(() => {
    const versions = safeReadStorage(RACI_SAVED_VERSIONS_STORAGE_KEY, []);
    return Array.isArray(versions) ? versions : [];
  });
  const [loadedVersionId, setLoadedVersionId] = React.useState(null);

  const [tasks, setTasks] = React.useState(() => {
    const defaultRows = GOVERNANCE_ACTIVITIES.map((item) => ({
      ...item,
      status: "Not Started",
      completed: false,
      owner: "",
      priority: "Medium",
      targetDate: "",
      notes: "",
      updatedAt: "",
      r: normaliseRoleValue(item.r),
      a: normaliseRoleValue(item.a),
      c: normaliseRoleValue(item.c),
      i: normaliseRoleValue(item.i),
    }));

    const storedCurrent = safeReadStorage(RACI_CURRENT_STORAGE_KEY, null);
    const legacy = safeReadStorage(EXECUTION_STORAGE_KEY, safeReadStorage(LEGACY_EXECUTION_STORAGE_KEY, {}));

    return defaultRows.map((item) => {
      const currentRow = storedCurrent?.find?.((row) => row.id === item.id) || {};
      const legacyRow = legacy?.[item.id] || {};
      return {
        ...item,
        status: legacyRow.status || item.status,
        completed: (legacyRow.status || item.status) === "Complete",
        owner: legacyRow.owner || item.owner,
        priority: legacyRow.priority || item.priority,
        targetDate: legacyRow.targetDate || item.targetDate,
        notes: legacyRow.notes || item.notes,
        updatedAt: legacyRow.updatedAt || item.updatedAt,
        r: normaliseRoleValue(currentRow.r ?? legacyRow.r ?? item.r),
        a: normaliseRoleValue(currentRow.a ?? legacyRow.a ?? item.a),
        c: normaliseRoleValue(currentRow.c ?? legacyRow.c ?? item.c),
        i: normaliseRoleValue(currentRow.i ?? legacyRow.i ?? item.i),
      };
    });
  });

  const initialMatrixRef = React.useRef(JSON.stringify(getMatrixOnlyRows(tasks)));

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2400);
  };

  const persistCurrentRaci = React.useCallback((rows) => {
    safeWriteStorage(RACI_CURRENT_STORAGE_KEY, getMatrixOnlyRows(rows));
  }, []);

  React.useEffect(() => {
    const serializable = tasks.reduce((acc, task) => {
      acc[task.id] = {
        status: task.status,
        owner: task.owner,
        priority: task.priority,
        targetDate: task.targetDate,
        notes: task.notes,
        updatedAt: task.updatedAt,
        r: normaliseRoleValue(task.r),
        a: normaliseRoleValue(task.a),
        c: normaliseRoleValue(task.c),
        i: normaliseRoleValue(task.i),
      };
      return acc;
    }, {});
    safeWriteStorage(EXECUTION_STORAGE_KEY, serializable);
    persistCurrentRaci(tasks);
  }, [tasks, persistCurrentRaci]);

  React.useEffect(() => {
    safeWriteStorage(RACI_SAVED_VERSIONS_STORAGE_KEY, savedVersions);
  }, [savedVersions]);

  const matrixSignature = JSON.stringify(getMatrixOnlyRows(tasks));
  const unsavedChanges = matrixSignature !== initialMatrixRef.current;
  const loadedVersion = savedVersions.find((item) => item.id === loadedVersionId);

  const updateTask = (id, patch) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const next = { ...task, ...patch, updatedAt: new Date().toISOString() };
        if (Object.prototype.hasOwnProperty.call(patch, "completed")) {
          if (patch.completed) next.status = "Complete";
          else if (next.status === "Complete") next.status = "Not Started";
        }
        if (Object.prototype.hasOwnProperty.call(patch, "status")) {
          next.completed = patch.status === "Complete";
        }
        return next;
      }),
    );
  };

  const updateRaciField = (id, field, values) => {
    updateTask(id, { [field]: normaliseRoleValue(values) });
  };

  const clearRaciMatrix = () => {
    if (!window.confirm("Clear all R/A/C/I assignments for every activity?")) return;
    setTasks((prev) => prev.map((task) => ({ ...task, r: [], a: [], c: [], i: [], updatedAt: new Date().toISOString() })));
    showToast("RACI assignments cleared.");
  };

  const saveRaciVersion = () => {
    const name = versionForm.name.trim();
    if (!name) return window.alert("Version name is required.");
    const now = new Date().toISOString();
    const existing = savedVersions.find((item) => item.name.toLowerCase() === name.toLowerCase());
    if (existing && existing.id !== versionForm.versionId) {
      const ok = window.confirm(`A version named "${name}" already exists. Overwrite it?`);
      if (!ok) return;
      overwriteRaciVersion(existing.id, { name, description: versionForm.description.trim() });
      return;
    }
    if (versionForm.mode === "edit" && versionForm.versionId) {
      renameRaciVersion(versionForm.versionId, { name, description: versionForm.description.trim() });
      return;
    }

    const next = {
      id: makeVersionId(),
      name,
      description: versionForm.description.trim(),
      createdAt: now,
      updatedAt: now,
      matrix: deepCloneMatrix(getMatrixOnlyRows(tasks)),
    };
    setSavedVersions((prev) => [next, ...prev]);
    initialMatrixRef.current = matrixSignature;
    setVersionForm({ mode: "create", versionId: "", name: "", description: "" });
    showToast("Version saved.");
  };

  const loadRaciVersion = (versionId) => {
    const version = savedVersions.find((item) => item.id === versionId);
    if (!version) return;
    if (unsavedChanges && !window.confirm("You have unsaved changes. Load selected version anyway?")) return;

    setTasks((prev) => prev.map((task) => {
      const source = version.matrix.find((row) => row.id === task.id) || {};
      return {
        ...task,
        r: normaliseRoleValue(source.r),
        a: normaliseRoleValue(source.a),
        c: normaliseRoleValue(source.c),
        i: normaliseRoleValue(source.i),
        updatedAt: new Date().toISOString(),
      };
    }));
    setLoadedVersionId(versionId);
    initialMatrixRef.current = JSON.stringify(version.matrix);
    showToast(`Loaded version: ${version.name}`);
  };

  const renameRaciVersion = (versionId, updates) => {
    setSavedVersions((prev) => prev.map((item) => item.id === versionId ? { ...item, ...updates, updatedAt: new Date().toISOString() } : item));
    setVersionForm({ mode: "create", versionId: "", name: "", description: "" });
    showToast("Version updated.");
  };

  const overwriteRaciVersion = (versionId, updates = {}) => {
    const version = savedVersions.find((item) => item.id === versionId);
    if (!version) return;
    if (!window.confirm(`Overwrite "${version.name}" with the current matrix?`)) return;
    setSavedVersions((prev) => prev.map((item) => item.id === versionId ? {
      ...item,
      ...updates,
      matrix: deepCloneMatrix(getMatrixOnlyRows(tasks)),
      updatedAt: new Date().toISOString(),
    } : item));
    initialMatrixRef.current = matrixSignature;
    showToast("Version overwritten.");
  };

  const deleteRaciVersion = (versionId) => {
    const version = savedVersions.find((item) => item.id === versionId);
    if (!version) return;
    if (!window.confirm(`Delete version "${version.name}"?`)) return;
    setSavedVersions((prev) => prev.filter((item) => item.id !== versionId));
    if (loadedVersionId === versionId) setLoadedVersionId(null);
    showToast("Version deleted.");
  };

  async function downloadRaciPDF() {
    const source = document.getElementById("raci-export-container");
    if (!source) return;
    if (!window.html2canvas || !window.jspdf?.jsPDF) {
      window.alert("PDF export dependencies are not available.");
      return;
    }

    const exportHost = document.createElement("div");
    exportHost.style.position = "fixed";
    exportHost.style.left = "-99999px";
    exportHost.style.top = "0";
    exportHost.style.width = "1800px";
    exportHost.style.background = getComputedStyle(document.body).backgroundColor || "#0C1518";
    exportHost.style.padding = "20px";

    const clone = source.cloneNode(true);
    exportHost.appendChild(clone);
    document.body.appendChild(exportHost);

    try {
      const canvas = await window.html2canvas(exportHost, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
        windowWidth: exportHost.scrollWidth,
      });
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const margin = 8;
      const headerHeight = 14;
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth - margin * 2;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageContentHeight = pageHeight - (margin * 2 + headerHeight);
      const pageCount = Math.max(1, Math.ceil(imgHeight / pageContentHeight));
      const timestamp = formatTimestamp();

      for (let i = 0; i < pageCount; i += 1) {
        if (i > 0) pdf.addPage();
        pdf.setFontSize(12);
        pdf.text("Partner Governance RACI Matrix", margin, margin + 4);
        pdf.setFontSize(9);
        pdf.text(`Exported: ${timestamp}`, margin, margin + 9);

        const sliceY = i * pageContentHeight;
        pdf.addImage(
          canvas.toDataURL("image/png", 1),
          "PNG",
          margin,
          margin + headerHeight,
          imgWidth,
          imgHeight,
          undefined,
          "FAST",
          0,
          -sliceY,
        );
      }

      const fileDate = new Date().toISOString().slice(0, 10);
      pdf.save(`RACI_Matrix_${fileDate}.pdf`);
      showToast("PDF exported.");
    } finally {
      if (document.body.contains(exportHost)) document.body.removeChild(exportHost);
    }
  }

  const filteredTasks = tasks.filter((task) => {
    const matchStatus = statusFilter === "All" || task.status === statusFilter;
    const matchPriority = priorityFilter === "All" || task.priority === priorityFilter;
    const text = searchTerm.trim().toLowerCase();
    const matchSearch = !text || task.activity.toLowerCase().includes(text) || task.owner.toLowerCase().includes(text);
    const matchIncomplete = !showIncompleteOnly || task.status !== "Complete";
    const matchOverdue = !showOverdueOnly || isTaskOverdue(task);
    return matchStatus && matchPriority && matchSearch && matchIncomplete && matchOverdue;
  });

  const summary = tasks.reduce((acc, task) => {
    acc.total += 1;
    if (task.status === "Complete") acc.complete += 1;
    if (task.status === "In Progress") acc.inProgress += 1;
    if (task.status === "Blocked") acc.blocked += 1;
    if (isTaskOverdue(task)) acc.overdue += 1;
    return acc;
  }, { total: 0, complete: 0, inProgress: 0, blocked: 0, overdue: 0 });

  const completePct = summary.total ? Math.round((summary.complete / summary.total) * 100) : 0;
  const ownershipSummary = buildRoleSummary(tasks, RACI_DROPDOWN_OPTIONS);
  const currentNoteTask = tasks.find((task) => task.id === noteTaskId);

  const getTaskRowStyle = (task) => {
    if (isTaskOverdue(task)) return { background: "rgba(168,67,67,0.18)", borderColor: "rgba(214,138,138,0.45)" };
    if (task.status === "Complete") return { background: "rgba(57,117,87,0.18)", borderColor: "rgba(126,188,158,0.32)" };
    if (task.status === "Blocked") return { background: "rgba(126,95,49,0.18)", borderColor: "rgba(212,168,67,0.35)" };
    if (task.status === "In Progress") return { background: "rgba(66,109,140,0.16)", borderColor: "rgba(103,216,255,0.32)" };
    return { background: "transparent", borderColor: "rgba(123,150,163,0.24)" };
  };

  const iconButton = (icon, label, onClick, danger = false) => (
    <button type="button" className={`raciToolbarIconBtn ${danger ? "is-danger" : ""}`} title={label} aria-label={label} onClick={onClick}>{icon}</button>
  );

  return (
    <React.Fragment>
      <div className="page-shell">
        <div className="content-shell">
          <PageHeader
            eyebrow="Partner Governance"
            title={<React.Fragment>Partner <span style={{ color: "#7B96A3" }}>Governance</span> RACI</React.Fragment>}
            subtitle="A practical governance dashboard for ownership, version control and operational tracking."
          />

          <div className="raciToolbar">
            <div className="raciToolbarLeft">
              {iconButton("💾", "Save version", () => setVersionForm({ mode: "create", versionId: "", name: "", description: "" }))}
              {iconButton("🧽", "Clear RACI", clearRaciMatrix, true)}
              {iconButton("📄", "Download PDF", downloadRaciPDF)}
            </div>
            <div className="raciToolbarRight">
              <div className="raciVersionStatus">
                <div>Currently Loaded: <strong>{loadedVersion?.name || "Working Copy"}</strong></div>
                <div className={`raciDirtyChip ${unsavedChanges ? "is-dirty" : ""}`}>{unsavedChanges ? "Unsaved Changes" : "Saved"}</div>
              </div>
              {iconButton("🗂️", "Open saved versions", () => setShowVersions((v) => !v))}
            </div>
          </div>

          {versionForm.mode !== "idle" && (
            <div className="raciVersionForm">
              <input value={versionForm.name} onChange={(e) => setVersionForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Version name" />
              <input value={versionForm.description} onChange={(e) => setVersionForm((prev) => ({ ...prev, description: e.target.value }))} placeholder="Description (optional)" />
              <button className="ui-btn ui-btn--primary" onClick={saveRaciVersion}>{versionForm.mode === "edit" ? "Update" : "Save"}</button>
              <button className="ui-btn ui-btn--ghost" onClick={() => setVersionForm({ mode: "idle", versionId: "", name: "", description: "" })}>Close</button>
            </div>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10, marginBottom: 12 }}>
            {[{ label: "Total", value: summary.total }, { label: "Complete", value: summary.complete }, { label: "In Progress", value: summary.inProgress }, { label: "Blocked", value: summary.blocked }, { label: "Overdue", value: summary.overdue }, { label: "% Complete", value: `${completePct}%` }].map((card) => (
              <MetricCard key={card.label} label={card.label} value={card.value} />
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr auto auto", gap: 8, marginBottom: 14 }}>
            <FormField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search activity or owner" />
            <FormField as="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ boxShadow: "none" }}>{["All", ...GOVERNANCE_STATUS_OPTIONS].map((v) => <option key={v} value={v}>{v}</option>)}</FormField>
            <FormField as="select" value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} style={{ boxShadow: "none" }}>{["All", ...PRIORITY_OPTIONS].map((v) => <option key={v} value={v}>{v}</option>)}</FormField>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#BFD8D2" }}><input type="checkbox" checked={showIncompleteOnly} onChange={(e) => setShowIncompleteOnly(e.target.checked)} />Incomplete</label>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#BFD8D2" }}><input type="checkbox" checked={showOverdueOnly} onChange={(e) => setShowOverdueOnly(e.target.checked)} />Overdue</label>
          </div>

          <div id="raci-export-container">
            <div className="raciTableWrap">
              <div className="raciTableGrid">
                <div className="raciTableHeader">{["Name of Task", "R", "A", "C", "I", "Status", "Owner"].map((h) => <div key={h} className={`raciHeaderCell ${h.length === 1 ? `col-${h.toLowerCase()}` : ""}`}>{h}</div>)}</div>
                {filteredTasks.map((task, idx) => {
                  const rowStyle = getTaskRowStyle(task);
                  return (
                    <div key={task.id} className="raciTableRow" style={{ borderTop: idx ? `1px solid ${rowStyle.borderColor}` : "none", background: rowStyle.background }}>
                      <div style={{ padding: "10px 14px", fontSize: 12.5, fontWeight: 700, color: "#EAF5FF", display: "flex", alignItems: "center" }}>{task.activity}</div>
                      {[["r", "Responsible"], ["a", "Accountable"], ["c", "Consulted"], ["i", "Informed"]].map(([field, label]) => (
                        <div key={`${task.id}-${field}`} style={{ padding: "10px" }}>
                          <MultiRoleDropdown id={`raci-${task.id}-${field}`} label={`${label} roles for ${task.activity}`} value={task[field]} options={RACI_DROPDOWN_OPTIONS} onChange={(values) => updateRaciField(task.id, field, values)} />
                        </div>
                      ))}
                      <div style={{ padding: "10px" }}><select className="ui-dropdown" value={task.status} onChange={(e) => updateTask(task.id, { status: e.target.value })} style={{ width: "100%", boxShadow: "none" }}>{GOVERNANCE_STATUS_OPTIONS.map((v) => <option key={v} value={v}>{v}</option>)}</select></div>
                      <div style={{ padding: "10px" }}><input value={task.owner} onChange={(e) => updateTask(task.id, { owner: e.target.value })} placeholder="Owner" style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(123,150,163,0.3)", borderRadius: 6, color: "var(--text-primary)", padding: "6px", fontSize: 12 }} /></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {showVersions && (
              <section className="raciVersionsPanel">
                <h3>Saved RACI Versions</h3>
                <div className="raciVersionCards">
                  {savedVersions.length ? savedVersions.map((version) => (
                    <article className="raciVersionCard" key={version.id}>
                      <div className="raciVersionCardHeader">
                        <strong>{version.name}</strong>
                        {loadedVersionId === version.id && <span className="raciChip">Loaded</span>}
                      </div>
                      <p>{version.description || "No description"}</p>
                      <small>Created: {formatTimestamp(version.createdAt)} · Updated: {formatTimestamp(version.updatedAt)}</small>
                      <div className="raciVersionActions">
                        {iconButton("📥", "Load version", () => loadRaciVersion(version.id))}
                        {iconButton("✏️", "Edit version", () => setVersionForm({ mode: "edit", versionId: version.id, name: version.name, description: version.description || "" }))}
                        {iconButton("🔄", "Overwrite version", () => overwriteRaciVersion(version.id))}
                        {iconButton("🗑️", "Delete version", () => deleteRaciVersion(version.id), true)}
                      </div>
                    </article>
                  )) : <div className="raciEmpty">No saved versions yet.</div>}
                </div>
              </section>
            )}

            <section style={{ marginTop: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#9DB8C5", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Key Ownership Summary</div>
              <div className="ownershipDashboard">{ownershipSummary.map((role) => (<div className="ownershipCard" key={role.name}><div className="ownershipHeader"><div className="ownershipRole">{role.name}</div><div className="ownershipTotal">{role.total}</div></div><div className="ownershipMetrics"><div className="metric metric-r"><div className="metricValue">{role.responsible}</div><div className="metricLabel">R</div></div><div className="metric metric-a"><div className="metricValue">{role.accountable}</div><div className="metricLabel">A</div></div><div className="metric metric-c"><div className="metricValue">{role.consulted}</div><div className="metricLabel">C</div></div><div className="metric metric-i"><div className="metricValue">{role.informed}</div><div className="metricLabel">I</div></div></div></div>))}</div>
            </section>
          </div>

          {toast && <div className="raciToast">{toast}</div>}

          {currentNoteTask && (
            <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setNoteTaskId(null); }}>
              <div className="modal-box" style={{ maxWidth: "none", border: "1px solid rgba(123,150,163,0.35)", background: "linear-gradient(160deg,#162422,#0E1A18)", padding: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div><div style={{ fontSize: 11, fontWeight: 800, color: "#67D8FF", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Notes</div><div style={{ fontSize: 16, fontWeight: 800, color: "var(--text-primary)", fontFamily: "'Syne',sans-serif" }}>{currentNoteTask.activity}</div></div>
                  <button onClick={() => setNoteTaskId(null)} style={{ border: "none", background: "rgba(255,255,255,0.08)", color: "var(--text-secondary)", width: 30, height: 30, borderRadius: "50%", cursor: "pointer" }}>×</button>
                </div>
                <textarea value={currentNoteTask.notes} onChange={(e) => updateTask(currentNoteTask.id, { notes: e.target.value })} placeholder="Capture dependencies, blockers, decisions and next actions." style={{ width: "100%", minHeight: 150, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(123,150,163,0.35)", borderRadius: 8, color: "var(--text-primary)", padding: 10, fontSize: 12, lineHeight: 1.6 }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}


const CHANNEL_MANAGER_DATA = {
  mission:
    "Create a repeatable channel operating model that recruits the right partners, enables them effectively and scales shared revenue over time.",
  missionSupport:
    "This Channel Cadence page is designed for Channel Managers to run a practical partner rhythm across recruitment, enablement, joint selling and governance without forcing unrealistic short-term outcomes.",
  kpis: [
    {
      label: "Signed Partners",
      current: "25",
      target: "30",
      trend: "+3 this quarter",
      status: "On Track",
    },
    {
      label: "Active Leads",
      current: "40",
      target: "50",
      trend: "+8 month-on-month",
      status: "Growing",
    },
    {
      label: "Activated Partners",
      current: "10",
      target: "18",
      trend: "+2 this month",
      status: "In Progress",
    },
    {
      label: "Partner Pipeline Value",
      current: "£2.5M",
      target: "£4.0M",
      trend: "Weighted view",
      status: "Building",
    },
    {
      label: "Closed Won Revenue",
      current: "£500k",
      target: "£1.5M",
      trend: "Early-stage contribution",
      status: "Foundation Phase",
    },
    {
      label: "Partner Activation Rate",
      current: "40%",
      target: "60%",
      trend: "+5 pts quarter-on-quarter",
      status: "Improving",
    },
  ],
  lifecycle: [
    {
      stage: "Partner Recruitment",
      what: "Prioritise and engage partners aligned to the Ideal Partner Profile.",
      activities: [
        "Identify target partners aligned to Ideal Partner Profile",
        "Engage existing relationships and personal network",
        "Prioritise strategic targets",
        "Position the IPI partner value proposition",
      ],
      outcome:
        "A qualified target list and initial partner engagement underway",
    },
    {
      stage: "Partner Enablement",
      what: "Build readiness for consistent partner and internal execution.",
      activities: [
        "Onboarding process",
        "Sales and technical enablement",
        "Partner program documentation",
        "Trust/compliance materials",
        "Partner tools, messaging and essentials",
      ],
      outcome:
        "Partners and internal teams are prepared to engage consistently",
    },
    {
      stage: "Pipeline Development",
      what: "Turn readiness into structured joint opportunity planning.",
      activities: [
        "Account mapping",
        "Joint opportunity identification",
        "Co-marketing readiness",
        "Early customer planning",
      ],
      outcome:
        "Partners positioned to begin building pipeline once enabled",
    },
    {
      stage: "Governance & Performance Review",
      what: "Run an ongoing cadence that tracks progress and optimises execution.",
      activities: [
        "Partner reviews",
        "KPI tracking",
        "Internal alignment",
        "Business planning",
        "Program optimisation",
      ],
      outcome:
        "A structured cadence for managing partner progress and performance",
    },
  ],
  first90Days: [
    {
      key: "A",
      title: "Define the Partner Strategy",
      items: [
        "Confirm Ideal Partner Profile",
        "Agree target partner types",
        "Align partner tiers and incentives",
        "Define partner value proposition",
        "Align leadership on expectations and success measures",
      ],
      outcome:
        "Clear strategic agreement on who we want to recruit and how the program will operate",
    },
    {
      key: "B",
      title: "Build the Program Essentials",
      items: [
        "Build core partner program structure",
        "Finalise onboarding approach",
        "Create enablement materials",
        "Build partner messaging and sales tools",
        "Stand up trust/documentation access",
        "Define the channel cadence framework",
      ],
      outcome: "A partner-ready operating foundation",
    },
    {
      key: "C",
      title: "Review Existing Partners",
      items: [
        "Identify current partners / reseller relationships",
        "Assess existing partner potential",
        "Map current engagement levels",
        "Introduce them into a more structured channel journey",
        "Begin transitioning them into proper channel management",
      ],
      outcome:
        "Existing relationships brought into a formal managed partner model",
    },
    {
      key: "D",
      title: "Identify and Engage Priority Targets",
      items: [
        "Leverage personal network",
        "Identify strategic target accounts",
        "Prioritise best-fit partner prospects",
        "Begin discovery and early engagement",
        "Test resonance of the proposition",
      ],
      outcome:
        "Initial recruitment activity focused on quality rather than volume",
    },
    {
      key: "E",
      title: "Establish Internal Alignment",
      items: [
        "Align sales leadership",
        "Align pre-sales support expectations",
        "Align marketing support",
        "Align operations / onboarding / order processes",
        "Agree governance and reporting rhythm",
      ],
      outcome:
        "Internal readiness to support the channel strategy effectively",
    },
  ],
  successMeasures: [
    "Partner strategy agreed",
    "Program essentials defined",
    "Existing partners reviewed",
    "Priority target list created",
    "Discovery meetings started",
    "Internal roles aligned",
    "Cadence and governance model established",
  ],
  engagementMatrix: [
    {
      tier: "Strategic / Gold Partners",
      calls: "Weekly or bi-weekly",
      bdm: "Monthly",
      events: "Quarterly / joint attendance",
      marketing: "Active quarterly planning",
      selling: "Ongoing on priority opportunities",
      reviews: "Quarterly",
      development: "Active feedback and roadmap input",
    },
    {
      tier: "Growth / Silver Partners",
      calls: "Monthly",
      bdm: "Every 6–8 weeks",
      events: "Selective participation",
      marketing: "Campaign-based",
      selling: "On active opportunities",
      reviews: "Twice yearly or quarterly based on activity",
      development: "Periodic feedback",
    },
    {
      tier: "Registered / Developing Partners",
      calls: "Ad hoc / light-touch",
      bdm: "Quarterly where relevant",
      events: "Broad enablement events / webinars",
      marketing: "Optional / syndication-led",
      selling: "Reactive support",
      reviews: "Annual or by exception",
      development: "Nurture into higher engagement where potential exists",
    },
  ],
  workingModel: [
    {
      title: "Communicate Consistently",
      points: [
        "Clear regular touchpoints",
        "Shared priorities",
        "Active follow-up",
        "Predictable engagement rhythm",
      ],
    },
    {
      title: "Plan Together",
      points: [
        "Joint account mapping",
        "Target account selection",
        "Opportunity planning",
        "Shared growth priorities",
      ],
    },
    {
      title: "Sell Together",
      points: [
        "Joint selling on the right opportunities",
        "Access to pre-sales and subject matter experts",
        "Collaborative deal shaping",
        "Support through the sales cycle",
      ],
    },
    {
      title: "Review and Improve",
      points: [
        "Performance tracking",
        "Governance reviews",
        "Program feedback loops",
        "Continuous improvement",
      ],
    },
  ],
  maturityTimeline: [
    {
      phase: "0–90 Days: Foundation",
      items: [
        "Strategy alignment",
        "Program build",
        "Existing partner review",
        "Early target engagement",
      ],
    },
    {
      phase: "3–6 Months: Partner Activation",
      items: [
        "Onboarding",
        "Enablement",
        "First structured joint planning",
        "Initial partner participation",
      ],
    },
    {
      phase: "6–12 Months: Pipeline Growth",
      items: [
        "Account mapping",
        "Co-marketing",
        "Opportunity creation",
        "Joint selling motion begins to scale",
      ],
    },
    {
      phase: "12+ Months: Scaled Ecosystem Revenue",
      items: [
        "Recurring cadence",
        "Strong governance",
        "Repeatable recruitment and activation",
        "Revenue contribution from the ecosystem",
      ],
    },
  ],
  internalAlignment: [
    {
      team: "Sales Leadership",
      desc: "Support channel strategy, align field sales with partner motion and reinforce rules of engagement.",
    },
    {
      team: "Pre-Sales",
      desc: "Support joint opportunities and strengthen enablement with technical credibility.",
    },
    {
      team: "Marketing",
      desc: "Support campaigns, events and co-marketing programs with partner-ready messaging.",
    },
    {
      team: "Operations",
      desc: "Ensure onboarding, ordering and service processes are channel-friendly.",
    },
    {
      team: "Product / Strategy",
      desc: "Provide roadmap context and a clear feedback loop for partner input.",
    },
    {
      team: "Finance / Commercial",
      desc: "Support partner agreements, pricing, incentives and commercial clarity.",
    },
  ],
};

const CHANNEL_CADENCE_KPI_ICONS = {
  "Signed Partners": "🤝",
  "Active Leads": "📈",
  "Activated Partners": "🚀",
  "Partner Pipeline Value": "💷",
  "Closed Won Revenue": "🏁",
  "Partner Activation Rate": "⚡",
};

const CHANNEL_CADENCE_WORKSTREAM_ICONS = {
  A: "🧭",
  B: "🧱",
  C: "🔁",
  D: "🎯",
  E: "🧩",
};

const CHANNEL_CADENCE_TEAM_ICONS = {
  "Sales Leadership": "🧠",
  "Pre-Sales": "🛠️",
  Marketing: "📣",
  Operations: "⚙️",
  "Product / Strategy": "🗺️",
  "Finance / Commercial": "💹",
};

const CHANNEL_LIFECYCLE_VISUALS = ["🧲", "📚", "🌱", "📊"];
const CHANNEL_WORKING_MODEL_ICONS = ["💬", "📝", "🤝", "🔍"];
const CHANNEL_TIMELINE_ICONS = ["🏗️", "🔄", "📡", "🌍"];

function ChannelManagerDashboardPage() {
  return (
    <React.Fragment>
      <Bg />
      <div className="channel-dashboard-page">
        <section className="channel-hero">
          <div className="channel-hero-layout">
            <div>
              <div className="channel-hero-label">Channel Cadence Operating Framework</div>
              <p className="channel-mission">{CHANNEL_MANAGER_DATA.mission}</p>
              <p className="channel-support">{CHANNEL_MANAGER_DATA.missionSupport}</p>
              <div className="channel-hero-tags">
                <span className="channel-chip">🧲 Recruit the right partners</span>
                <span className="channel-chip">🚀 Activate pipeline faster</span>
                <span className="channel-chip">📊 Run a predictable rhythm</span>
              </div>
            </div>
            <div className="channel-hero-visual" aria-hidden="true">
              <div className="channel-hero-visual-main">🗓️</div>
              <p>Quarterly Cadence Engine</p>
              <div className="channel-hero-visual-row">
                <span>📣</span>
                <span>🤝</span>
                <span>💷</span>
                <span>📈</span>
              </div>
            </div>
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Annual Partner KPI Dashboard</h2>
          <div className="channel-grid-kpi">
            {CHANNEL_MANAGER_DATA.kpis.map((kpi) => (
              <div key={kpi.label} className="channel-card channel-kpi-card">
                <div className="channel-kpi-icon" aria-hidden="true">{CHANNEL_CADENCE_KPI_ICONS[kpi.label] || "📌"}</div>
                <div className="channel-kpi-label">{kpi.label}</div>
                <div className="channel-kpi-value">{kpi.current}</div>
                <div className="channel-kpi-meta">Target: {kpi.target}</div>
                <div className="channel-kpi-hint">{kpi.trend}</div>
                <span className="channel-chip">{kpi.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Partner Lifecycle & Operating Plan</h2>
          <div className="channel-lifecycle-flow">
            {CHANNEL_MANAGER_DATA.lifecycle.map((stage, idx) => (
              <React.Fragment key={stage.stage}>
                <article className="channel-card channel-life-stage">
                  <div className="channel-inline-icon" aria-hidden="true">{CHANNEL_LIFECYCLE_VISUALS[idx] || "🔹"}</div>
                  <div className="channel-step">{idx + 1}. {stage.stage}</div>
                  <p className="channel-life-what">{stage.what}</p>
                  <ul className="channel-list">
                    {stage.activities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="channel-outcome">Outcome: {stage.outcome}</div>
                </article>
                {idx < CHANNEL_MANAGER_DATA.lifecycle.length - 1 && (
                  <div className="channel-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Channel Manager Focus: First 90 Days</h2>
          <p className="channel-support">
            The first 90 days should focus on agreeing the strategy, building the essential elements of the partner program, reviewing existing partners, and beginning structured engagement with priority targets. The objective is to create the foundations for scalable channel growth, not to force near-term pipeline too early.
          </p>
          <div className="channel-grid-4">
            {CHANNEL_MANAGER_DATA.first90Days.map((stream) => (
              <article key={stream.key} className="channel-card channel-workstream-card">
                <div className="channel-day">{CHANNEL_CADENCE_WORKSTREAM_ICONS[stream.key]} Workstream {stream.key}</div>
                <h3>{stream.title}</h3>
                <ul className="channel-list">
                  {stream.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="channel-outcome">Outcome: {stream.outcome}</div>
              </article>
            ))}
          </div>
          <div className="channel-closing-panel">
            <h2>Realistic 90-Day Success Measures</h2>
            <div className="channel-measure-list">
              {CHANNEL_MANAGER_DATA.successMeasures.map((item) => (
                <span key={item} className="channel-chip">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Partner Communication & Engagement Cadence</h2>
          <div className="channel-cadence-pill-row">
            <span className="channel-chip">📅 Weekly to quarterly rhythm by tier</span>
            <span className="channel-chip">📣 Blended communication + events + co-marketing</span>
            <span className="channel-chip">🎯 Focus support where joint opportunities are active</span>
          </div>
          <StandardTable className="channel-table-wrap">
            <table className="channel-table">
              <thead>
                <tr>
                  <th>Partner Level</th>
                  <th>Calls</th>
                  <th>Business Development Meetings</th>
                  <th>Events</th>
                  <th>Co-marketing</th>
                  <th>Joint Selling</th>
                  <th>Business Reviews</th>
                  <th>Program Development</th>
                </tr>
              </thead>
              <tbody>
                {CHANNEL_MANAGER_DATA.engagementMatrix.map((row) => (
                  <tr key={row.tier}>
                    <td><strong>{row.tier}</strong></td>
                    <td>{row.calls}</td>
                    <td>{row.bdm}</td>
                    <td>{row.events}</td>
                    <td>{row.marketing}</td>
                    <td>{row.selling}</td>
                    <td>{row.reviews}</td>
                    <td>{row.development}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </StandardTable>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">How We Work Alongside Partners</h2>
          <div className="channel-grid-4">
            {CHANNEL_MANAGER_DATA.workingModel.map((item, idx) => (
              <div key={item.title} className="channel-card">
                <div className="channel-inline-icon" aria-hidden="true">{CHANNEL_WORKING_MODEL_ICONS[idx] || "🔹"}</div>
                <h3>{item.title}</h3>
                <ul className="channel-list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Channel Program Maturity Timeline</h2>
          <div className="channel-timeline-grid">
            {CHANNEL_MANAGER_DATA.maturityTimeline.map((phase, idx) => (
              <article key={phase.phase} className="channel-card channel-timeline-card">
                <div className="channel-inline-icon" aria-hidden="true">{CHANNEL_TIMELINE_ICONS[idx] || "🔹"}</div>
                <div className="channel-step">{phase.phase}</div>
                <ul className="channel-list">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {idx < CHANNEL_MANAGER_DATA.maturityTimeline.length - 1 && (
                  <div className="channel-timeline-line" />
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Internal Alignment Required</h2>
          <div className="channel-grid-3">
            {CHANNEL_MANAGER_DATA.internalAlignment.map((item) => (
              <article key={item.team} className="channel-card">
                <div className="channel-inline-icon" aria-hidden="true">{CHANNEL_CADENCE_TEAM_ICONS[item.team] || "🔹"}</div>
                <h3>{item.team}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

const CHANNEL_MARKETING_MISSION_PILLARS = [
  {
    icon: "🎯",
    title: "Attract the right partners",
    desc: "Target resellers, consultancies and service providers with a strong enterprise CX customer base and growth ambition.",
  },
  {
    icon: "💷",
    title: "Explain the revenue opportunity",
    desc: "Demonstrate how partners create recurring income by landing with one solution and expanding into a full CX stack.",
  },
  {
    icon: "🤝",
    title: "Prove ease of doing business",
    desc: "Show clear onboarding, pre-sales support, delivery services and commercial frameworks that remove partner friction.",
  },
  {
    icon: "🚀",
    title: "Accelerate partner conversion",
    desc: "Use confident proof-led messaging and focused calls to action to move prospects from interest to application quickly.",
  },
];

const PARTNER_SITE_STRUCTURE = [
  ["Partner Landing Page", "Introduce the partner proposition and drive applications.", "Attract"],
  ["Partner Value Proposition", "Explain why IP Integration is different and why partners should care.", "Convert"],
  ["Revenue Opportunity", "Show how partners earn across telephony, UC, CCaaS, AI, payments and services.", "Convert"],
  ["Partner Program", "Explain tiers, benefits, commitments and routes to growth.", "Enable"],
  ["Partner Enablement", "Show the support available across sales, pre-sales, technical and delivery.", "Enable"],
  ["Partner Trust & Compliance", "Provide easy access to legal, compliance, product and governance documents.", "Trust"],
  ["Partner Success Stories", "Show proof that partners can win and grow with IPI.", "Grow"],
  ["Become a Partner", "Convert interest into action with a clear application path.", "Convert"],
].map(([title, summary, badge]) => ({ title, summary, badge }));

const CHANNEL_RESELLER_QUESTIONS = [
  {
    icon: "🧭",
    title: "Why should I partner with you?",
    body: "Resellers need to quickly understand what makes IP Integration commercially and strategically different from other vendors. This includes portfolio breadth, partner support, managed services capability, and the ability to help partners grow beyond a single product sale.",
  },
  {
    icon: "📈",
    title: "How do I make money?",
    body: "The website should show the revenue journey clearly — how a partner can start with any entry point such as SIP, UC, CCaaS, AI or payments and then expand into broader customer opportunities with recurring revenue, services and managed support.",
  },
  {
    icon: "⚙️",
    title: "How easy are you to work with?",
    body: "Partners want confidence that they will receive enablement, pre-sales help, delivery support, governance clarity, commercial simplicity and access to the latest documentation without friction.",
  },
];

function ChannelMarketingPage() {
  return (
    <React.Fragment>
      <Bg />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", paddingBottom: 40 }}>
        <AppPageHeader
          title="Channel Marketing"
          subtitle="Designing a partner-first website experience that helps IP Integration attract, convert and enable reseller partners."
        />

        <SectionWrapper>
          <SectionHeader title="Channel Marketing Mission" description="The website must do more than describe technology. It must sell the business opportunity to a reseller." />
          <HighlightCard className="cm-hero-card">
            <div className="cm-hero-layout">
              <div>
                <p className="cm-highlight-title">Build the partner growth storefront</p>
                <p className="cm-highlight-copy">Build a partner-first digital experience that positions IP Integration as the easiest and most commercially attractive vendor for resellers to grow recurring CX revenue with.</p>
                <div className="cm-proof-bar">
                  <span>🧩 Portfolio breadth</span>
                  <span>📊 Revenue clarity</span>
                  <span>🛠️ Frictionless enablement</span>
                </div>
              </div>
              <div className="cm-hero-visual" aria-hidden="true">
                <div>📣</div>
                <p>Channel Marketing Engine</p>
                <div className="cm-hero-visual-row">
                  <span>🎯</span>
                  <span>💷</span>
                  <span>🤝</span>
                  <span>🚀</span>
                </div>
              </div>
            </div>
            <div className="cm-grid-4">
              {CHANNEL_MARKETING_MISSION_PILLARS.map((pillar) => (
                <StandardCard key={pillar.title} className="cm-mini-card">
                  <span className="cm-icon-badge" aria-hidden="true">{pillar.icon}</span>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </StandardCard>
              ))}
            </div>
          </HighlightCard>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeader title="What Resellers Need to See" description="The three questions every reseller asks are: why should I partner with you, how do I make money, and how easy is it to work with you?" />
          <div className="cm-grid-3">
            {CHANNEL_RESELLER_QUESTIONS.map((item) => (
              <StandardCard key={item.title} className="cm-big-card">
                <div className="cm-big-card-head">
                  <span className="cm-icon-badge" aria-hidden="true">{item.icon}</span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.body}</p>
                <div className="cm-question-footer">Partner decision checkpoint</div>
              </StandardCard>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeader title="Recommended Partner Website Structure" />
          <div className="cm-stack-grid">
            {PARTNER_SITE_STRUCTURE.map((item, idx) => (
              <div key={item.title} className="cm-journey-card">
                <div className="cm-journey-step">{String(idx + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>Purpose: {item.summary}</p>
                </div>
                <span className="channel-chip cm-badge-tone">{item.badge}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeader title="Example Page Experience" description="A visual-first layout that mirrors the look and feel of the Why Work with IPI page." />
          <div className="cm-mock-wrap">
            <div className="cm-mock-topbar">
              <div className="cm-dots"><span /><span /><span /></div>
              <div className="cm-url">partner.ipintegration.com/channel</div>
            </div>
            <div className="cm-mock-content">
              <div className="cm-mock-hero">
                <h3>Grow recurring CX revenue with IPI</h3>
                <p>A partner-ready message that pairs commercial outcomes with clear enablement, proof points and simple next steps.</p>
                <div className="cm-mock-cta">
                  <span className="channel-chip">🤝 Become a Partner</span>
                  <span className="channel-chip">📅 Book a Partner Intro</span>
                </div>
              </div>
              <div className="cm-revenue-row">
                <span>📡 SIP & Connectivity</span>
                <span>☎️ UC & CCaaS</span>
                <span>🤖 AI Services</span>
                <span>💳 Secure Payments</span>
                <span>🛡️ Managed Support</span>
              </div>
              <div className="cm-final-cta">
                <h4>Make the next action obvious.</h4>
                <div>
                  <span className="channel-chip">✅ Download Program Guide</span>
                  <span className="channel-chip">🚀 Start Application</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

      </div>
    </React.Fragment>
  );
}





const PARTNER_ACCOUNT_PLAN_STORAGE_KEY = "ipi_partner_account_plans_v1";
const PARTNER_TIER_OPTIONS = ["Gold", "Silver", "Accredited"];
const PARTNER_TYPE_OPTIONS = ["Reseller", "MSP", "Solution Provider", "Consultant"];
const TARGET_ACCOUNT_STAGE_OPTIONS = ["New", "Rejected", "Qualified", "Selected", "Closed Won", "Closed Lost"];
const SCORECARD_CURRENCY_FIELDS = ["pipelineCurrent", "pipelineTarget", "closedWonCurrent", "closedWonTarget"];

function mapLegacyPartnerTier(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["gold"].includes(normalized)) return "Gold";
  if (["silver"].includes(normalized)) return "Silver";
  if (["accredited", "strategic", "emerging", "other", "bronze"].includes(normalized)) return "Accredited";
  return PARTNER_TIER_OPTIONS.includes(value) ? value : "Accredited";
}

function mapLegacyPartnerType(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["reseller", "uc reseller", "cc specialist", "agent", "distributor"].includes(normalized)) return "Reseller";
  if (["msp"].includes(normalized)) return "MSP";
  if (["solution provider", "si", "systems integrator"].includes(normalized)) return "Solution Provider";
  if (["consultant", "consultancy"].includes(normalized)) return "Consultant";
  return PARTNER_TYPE_OPTIONS.includes(value) ? value : "Reseller";
}

function mapLegacyTargetAccountStage(value) {
  const normalized = String(value || "").trim().toLowerCase();
  if (["new", "prospect"].includes(normalized)) return "New";
  if (["rejected", "disqualified"].includes(normalized)) return "Rejected";
  if (["qualified", "discovery"].includes(normalized)) return "Qualified";
  if (["selected", "proposal"].includes(normalized)) return "Selected";
  if (["closed won", "won"].includes(normalized)) return "Closed Won";
  if (["closed lost", "lost"].includes(normalized)) return "Closed Lost";
  return TARGET_ACCOUNT_STAGE_OPTIONS.includes(value) ? value : "New";
}

const PLAN_SECTIONS = [
  ["overview", "Overview"],
  ["alignment", "Alignment"],
  ["targetAccounts", "Target Accounts"],
  ["enablement", "Enablement"],
  ["governance", "Governance"],
  ["growth", "Growth"],
  ["risks", "Risks"],
  ["scorecard", "Scorecard"],
  ["actionPlan", "90 Day Plan"],
  ["summary", "Summary"],
];

const RAG_OPTIONS = ["Red", "Amber", "Green"];
const RAG_META = {
  Red: { className: "rag-badge rag-red", rank: 0 },
  Amber: { className: "rag-badge rag-amber", rank: 1 },
  Green: { className: "rag-badge rag-green", rank: 2 },
};
const DEFAULT_RAG = "Amber";

function planId() {
  return `plan_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function safeNumber(v) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function formatCurrency(v) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(safeNumber(v));
}

function ratio(current, target) {
  const t = safeNumber(target);
  if (t <= 0) return 0;
  return safeNumber(current) / t;
}

function formatDate(v) {
  if (!v) return "";
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "" : d.toISOString().slice(0, 10);
}

function daysSince(dateValue) {
  if (!dateValue) return null;
  const ms = Date.now() - new Date(dateValue).getTime();
  return Math.max(0, Math.floor(ms / (1000 * 60 * 60 * 24)));
}

function computeOverdueActions(plan) {
  return (plan?.actionPlan90Day || []).filter(
    (x) => x.dueDate && new Date(x.dueDate).getTime() < Date.now() && !["completed", "complete"].includes(String(x.status || "").toLowerCase()),
  ).length;
}

function computeOpenRisks(plan) {
  return (plan?.risksMitigation || []).filter((x) => x.status !== "Closed").length;
}

function computeOpenHighImpactRisks(plan) {
  return (plan?.risksMitigation || []).filter(
    (x) => x.status !== "Closed" && String(x.impact || "").toLowerCase() === "high",
  ).length;
}

function scoreWeightedRatio(current, target, maxWeight) {
  const t = safeNumber(target);
  if (t <= 0) return Math.round(maxWeight * 0.6);
  const pct = Math.max(0, Math.min(1, safeNumber(current) / t));
  return Math.round(pct * maxWeight);
}

function scoreLabel(score) {
  if (score >= 85) return "Strategic Growth";
  if (score >= 70) return "Strong";
  if (score >= 50) return "Moderate";
  return "Needs Attention";
}

function metricRagFromRatio(r) {
  if (r >= 0.8) return "Green";
  if (r >= 0.4) return "Amber";
  return "Red";
}

function computeKpiRag(plan) {
  const sc = plan?.scorecard || {};
  const pipelineHealth = metricRagFromRatio(ratio(sc.pipelineCurrent, sc.pipelineTarget));
  const revRatio = ratio(sc.closedWonCurrent, sc.closedWonTarget);
  const revenueProgress = revRatio >= 0.7 ? "Green" : revRatio >= 0.35 ? "Amber" : "Red";

  const checklistKeys = ["contractSigned", "enablementStarted", "demoEnvironmentLive", "salesTraining", "technicalTraining", "firstOpportunity"];
  const completion = checklistKeys.filter((k) => Boolean(plan?.enablement?.[k])).length / checklistKeys.length;
  const enablementReadiness = completion >= 0.8 ? "Green" : completion >= 0.4 ? "Amber" : "Red";

  const hasQbr = !!plan?.metadata?.nextQbrDate;
  const cadenceCount = (plan?.governanceCadence || []).length;
  const engagementCadence = hasQbr && cadenceCount >= 1 ? "Green" : (hasQbr || cadenceCount >= 1) ? "Amber" : "Red";

  const highRisks = computeOpenHighImpactRisks(plan);
  const riskLevel = highRisks >= 3 ? "Red" : highRisks >= 1 ? "Amber" : "Green";

  const overdue = computeOverdueActions(plan);
  const actionPlanDelivery = overdue >= 3 ? "Red" : overdue >= 1 ? "Amber" : "Green";

  return {
    pipelineHealth,
    revenueProgress,
    enablementReadiness,
    engagementCadence,
    riskLevel,
    actionPlanDelivery,
  };
}

function computeHealthScore(plan) {
  const sc = plan?.scorecard || {};
  const strategic = Math.max(1, Math.min(5, safeNumber(plan?.partnerOverview?.strategicImportanceRating || 3)));
  const strategicScore = Math.round((strategic / 5) * 10);

  const pipelineScore = scoreWeightedRatio(sc.pipelineCurrent, sc.pipelineTarget || plan?.objectives?.pipelineTargetValue, 20);
  const closedWonScore = scoreWeightedRatio(sc.closedWonCurrent, sc.closedWonTarget || plan?.objectives?.closedWonRevenueTarget, 20);
  const activeOppScore = Math.min(15, (plan?.targetAccounts || []).length * 3);

  const cadenceItems = (plan?.governanceCadence || []).length;
  const hasQbr = !!plan?.metadata?.nextQbrDate;
  const governanceScore = Math.min(10, (hasQbr ? 5 : 0) + Math.min(5, cadenceItems * 2));

  const openHigh = computeOpenHighImpactRisks(plan);
  const riskScore = openHigh >= 3 ? 0 : openHigh >= 1 ? 5 : 10;

  const overdue = computeOverdueActions(plan);
  const actionScore = overdue >= 3 ? 0 : overdue >= 1 ? 6 : 10;

  const score = [
    strategicScore,
    pipelineScore,
    closedWonScore,
    activeOppScore,
    governanceScore,
    riskScore,
    actionScore,
  ].reduce((a, b) => a + b, 0);

  return {
    score,
    label: scoreLabel(score),
    breakdown: {
      strategicScore,
      pipelineScore,
      closedWonScore,
      activeOppScore,
      governanceScore,
      riskScore,
      actionScore,
    },
  };
}

function inferOverallRag(plan) {
  const kpi = computeKpiRag(plan);
  const severity = [kpi.pipelineHealth, kpi.revenueProgress, kpi.enablementReadiness, kpi.engagementCadence, kpi.riskLevel, kpi.actionPlanDelivery]
    .map((r) => RAG_META[r]?.rank ?? 1);
  const min = Math.min(...severity);
  if (min === 0) return "Red";
  if (severity.every((x) => x === 2)) return "Green";
  return "Amber";
}

function withPlanDefaults(rawPlan) {
  const base = createEmptyPlan();
  const merged = {
    ...base,
    ...rawPlan,
    partnerOverview: { ...base.partnerOverview, ...(rawPlan?.partnerOverview || {}) },
    contacts: { ...base.contacts, ...(rawPlan?.contacts || {}) },
    strategicAlignment: { ...base.strategicAlignment, ...(rawPlan?.strategicAlignment || {}) },
    objectives: { ...base.objectives, ...(rawPlan?.objectives || {}) },
    enablement: { ...base.enablement, ...(rawPlan?.enablement || {}) },
    scorecard: { ...base.scorecard, ...(rawPlan?.scorecard || {}) },
    metadata: { ...base.metadata, ...(rawPlan?.metadata || {}) },
    targetAccounts: (Array.isArray(rawPlan?.targetAccounts) ? rawPlan.targetAccounts : []).map((account) => {
      const next = { ...account };
      delete next.segment;
      next.targetAccountStage = mapLegacyTargetAccountStage(account?.targetAccountStage || account?.stage);
      delete next.stage;
      return next;
    }),
    pipelineInitiatives: Array.isArray(rawPlan?.pipelineInitiatives) ? rawPlan.pipelineInitiatives : [],
    gtmActivities: Array.isArray(rawPlan?.gtmActivities) ? rawPlan.gtmActivities : [],
    governanceCadence: Array.isArray(rawPlan?.governanceCadence) ? rawPlan.governanceCadence : [],
    growthOpportunities: Array.isArray(rawPlan?.growthOpportunities) ? rawPlan.growthOpportunities : [],
    risksMitigation: Array.isArray(rawPlan?.risksMitigation) ? rawPlan.risksMitigation : [],
    actionPlan90Day: Array.isArray(rawPlan?.actionPlan90Day) ? rawPlan.actionPlan90Day : [],
  };

  merged.partnerOverview.partnerTier = mapLegacyPartnerTier(merged.partnerOverview.partnerTier);
  merged.partnerOverview.partnerType = mapLegacyPartnerType(merged.partnerOverview.partnerType);

  const sectionDefaults = {
    overallRagStatus: DEFAULT_RAG,
    alignmentRag: DEFAULT_RAG,
    objectivesRag: DEFAULT_RAG,
    pipelineRag: DEFAULT_RAG,
    enablementRag: DEFAULT_RAG,
    governanceRag: DEFAULT_RAG,
    growthRag: DEFAULT_RAG,
    riskRag: DEFAULT_RAG,
    actionPlanRag: DEFAULT_RAG,
  };
  const withRag = { ...sectionDefaults, ...merged };
  if (!rawPlan?.overallRagStatus) withRag.overallRagStatus = inferOverallRag(withRag);
  return withRag;
}

function enrichPlan(plan) {
  const p = withPlanDefaults(plan);
  const kpiRag = computeKpiRag(p);
  const health = computeHealthScore(p);
  const overdueActionItems = computeOverdueActions(p);
  const openRisks = computeOpenRisks(p);
  return {
    ...p,
    computed: {
      kpiRag,
      healthScore: health.score,
      healthLabel: health.label,
      healthBreakdown: health.breakdown,
      overdueActionItems,
      openRisks,
      totalTargetAccountValue: (p.targetAccounts || []).reduce((a, b) => a + safeNumber(b.estimatedValue), 0),
      totalPipelineInitiativeExpectedValue: (p.pipelineInitiatives || []).reduce((a, b) => a + safeNumber(b.expectedPipelineValue), 0),
      totalGrowthOpportunityValue: (p.growthOpportunities || []).reduce((a, b) => a + safeNumber(b.revenuePotential), 0),
      daysSinceLastUpdate: daysSince(p.updatedAt),
    },
  };
}

function createEmptyPlan() {
  return {
    id: planId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    overallRagStatus: DEFAULT_RAG,
    alignmentRag: DEFAULT_RAG,
    objectivesRag: DEFAULT_RAG,
    pipelineRag: DEFAULT_RAG,
    enablementRag: DEFAULT_RAG,
    governanceRag: DEFAULT_RAG,
    growthRag: DEFAULT_RAG,
    riskRag: DEFAULT_RAG,
    actionPlanRag: DEFAULT_RAG,
    partnerOverview: {
      partnerName: "",
      partnerTier: "",
      partnerType: "",
      primaryGeography: "",
      verticalStrengths: "",
      coreCapabilities: "",
      existingVendorRelationships: "",
      installedBaseNotes: "",
      strategicImportanceRating: "3",
    },
    contacts: {
      executiveSponsorVendor: "",
      executiveSponsorPartner: "",
      channelManager: "",
      partnerSalesLead: "",
      partnerTechnicalLead: "",
      marketingContact: "",
      customerSuccessContact: "",
    },
    strategicAlignment: { whyThisPartnerMatters: "", marketAccess: "", customerBaseValue: "", technicalCapability: "", growthPotential: "", competitivePositioningNotes: "" },
    objectives: { planningPeriod: "", newCustomerLogoTarget: "", pipelineTargetValue: "", closedWonRevenueTarget: "", partnerLedDemosTarget: "", expansionRevenueTarget: "" },
    targetAccounts: [],
    pipelineInitiatives: [],
    gtmActivities: [],
    enablement: { contractSigned: false, enablementStarted: false, demoEnvironmentLive: false, salesTraining: false, technicalTraining: false, firstOpportunity: false, milestones: [] },
    governanceCadence: [],
    growthOpportunities: [],
    risksMitigation: [],
    scorecard: {
      pipelineCurrent: "", pipelineTarget: "", closedWonCurrent: "", closedWonTarget: "",
    },
    actionPlan90Day: [],
    metadata: { planStatus: "Draft", lastExecutiveReviewDate: "", nextQbrDate: "" },
  };
}

function createSeedPlans() {
  const a = withPlanDefaults(createEmptyPlan());
  a.partnerOverview = { ...a.partnerOverview, partnerName: "Strategic CX Partner UK", partnerTier: "Accredited", partnerType: "Reseller", primaryGeography: "United Kingdom", verticalStrengths: "Financial Services, Retail", coreCapabilities: "Genesys Cloud, SIP migration, AI chat", strategicImportanceRating: "5" };
  a.contacts.channelManager = "Emma Hughes";
  a.contacts.partnerSalesLead = "Marcus Lee";
  a.objectives = { ...a.objectives, planningPeriod: "FY26", pipelineTargetValue: 1200000, closedWonRevenueTarget: 620000, newCustomerLogoTarget: 9 };
  a.targetAccounts = [{ id: planId(), accountName: "NorthBridge Insurance", opportunityType: "CCaaS Migration", estimatedValue: 180000, owner: "Marcus Lee", targetAccountStage: "Qualified", nextStep: "Solution workshop", closeDate: "2026-06-15", strategicNotes: "Board-level digital transformation." }];
  a.pipelineInitiatives = [{ id: planId(), sourceType: "Installed Base", initiativeName: "SIP to UCaaS Conversion", description: "Convert top 20 SIP customers to full UC+CC solution.", owner: "Emma Hughes", startDate: "2026-04-01", targetOutcome: "10 qualified opportunities", expectedPipelineValue: 420000, status: "In Progress" }];
  a.growthOpportunities = [{ id: planId(), solutionArea: "AI Automation", opportunityDescription: "AI virtual agent expansion into retail estate", revenuePotential: 240000, timeline: "This Year" }];
  a.risksMitigation = [{ id: planId(), risk: "Slow technical pre-sales capacity", impact: "High", mitigationPlan: "Add shared solution architect resource", status: "Open" }];
  a.actionPlan90Day = [{ id: planId(), action: "Deliver joint executive alignment session", dueDate: "2026-04-20", priority: "High", status: "In progress", notes: "Include finance and services leaders" }];
  a.scorecard = { ...a.scorecard, pipelineCurrent: 980000, pipelineTarget: 1200000, closedWonCurrent: 510000, closedWonTarget: 620000 };
  a.metadata.planStatus = "Active";
  a.metadata.nextQbrDate = "2026-05-15";
  a.enablement = { ...a.enablement, contractSigned: true, enablementStarted: true, demoEnvironmentLive: true, salesTraining: true, technicalTraining: true, firstOpportunity: true };
  a.overallRagStatus = "Green";

  const b = withPlanDefaults(createEmptyPlan());
  b.partnerOverview = { ...b.partnerOverview, partnerName: "Northern Public Sector Systems", partnerTier: "Gold", partnerType: "Reseller", primaryGeography: "UK North", strategicImportanceRating: "4" };
  b.contacts.channelManager = "Daniel Brooks";
  b.objectives = { ...b.objectives, planningPeriod: "FY26-H1", pipelineTargetValue: 850000, closedWonRevenueTarget: 380000, newCustomerLogoTarget: 6 };
  b.risksMitigation = [{ id: planId(), risk: "Competing vendor discounting", impact: "High", mitigationPlan: "Value-selling enablement + sponsor meetings", status: "Open" }];
  b.actionPlan90Day = [{ id: planId(), action: "Run 2 joint campaigns", dueDate: "2026-06-01", priority: "Medium", status: "Not started", notes: "Focus on healthcare." }];
  b.governanceCadence = [{ id: planId(), meetingType: "Pipeline Review", frequency: "Monthly", purpose: "Pipeline review" }];
  b.scorecard = { ...b.scorecard, pipelineCurrent: 420000, pipelineTarget: 850000, closedWonCurrent: 130000, closedWonTarget: 380000 };
  b.metadata.planStatus = "At Risk";
  b.overallRagStatus = "Amber";

  const c = withPlanDefaults(createEmptyPlan());
  c.partnerOverview = { ...c.partnerOverview, partnerName: "Emerging Regional MSP", partnerTier: "Silver", partnerType: "MSP", primaryGeography: "Ireland", strategicImportanceRating: "2" };
  c.contacts.channelManager = "Sarah Patel";
  c.objectives = { ...c.objectives, planningPeriod: "FY26", pipelineTargetValue: 350000, closedWonRevenueTarget: 180000 };
  c.scorecard = { ...c.scorecard, pipelineCurrent: 80000, pipelineTarget: 350000, closedWonCurrent: 25000, closedWonTarget: 180000 };
  c.risksMitigation = [
    { id: planId(), risk: "Low enablement bandwidth", impact: "High", mitigationPlan: "Partner bootcamp", status: "Open" },
    { id: planId(), risk: "No demo access", impact: "High", mitigationPlan: "Provision shared tenant", status: "Open" },
    { id: planId(), risk: "Delayed campaign launch", impact: "High", mitigationPlan: "Weekly PMO", status: "Open" },
  ];
  c.actionPlan90Day = [
    { id: planId(), action: "Complete certification path", dueDate: "2024-01-01", priority: "High", status: "Not started", notes: "" },
    { id: planId(), action: "Run first webinar", dueDate: "2024-02-01", priority: "Medium", status: "Not started", notes: "" },
    { id: planId(), action: "Submit joint account list", dueDate: "2024-03-01", priority: "High", status: "In progress", notes: "" },
  ];
  c.metadata.planStatus = "At Risk";
  c.overallRagStatus = "Red";

  return [a, b, c].map(withPlanDefaults);
}

function readPlansFromStorage() {
  const raw = window.localStorage.getItem(PARTNER_ACCOUNT_PLAN_STORAGE_KEY);
  if (!raw) return createSeedPlans();
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(withPlanDefaults);
  } catch (_error) {
    console.warn("Partner plan storage was invalid. Falling back to empty list.");
    return [];
  }
}

function writePlansToStorage(plans) {
  window.localStorage.setItem(PARTNER_ACCOUNT_PLAN_STORAGE_KEY, JSON.stringify(plans));
}

function downloadBlob(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  const v = value == null ? "" : String(value);
  return `"${v.replace(/"/g, '""').replace(/\r?\n/g, " ")}"`;
}

function toCsv(headers, rows) {
  const headerRow = headers.map(csvEscape).join(",");
  const body = rows.map((r) => headers.map((h) => csvEscape(r[h])).join(",")).join("\n");
  return `${headerRow}\n${body}`;
}

function RagBadge({ value }) {
  const rag = RAG_META[value] ? value : DEFAULT_RAG;
  return <span className={RAG_META[rag].className} aria-label={`${rag} status`} title={rag} />;
}

function AccountPlanFormSection({ sectionId, title, helper, ragField, ragValue, onRagChange, readOnly = false, children, defaultOpen = true, forceOpen = false }) {
  const [open, setOpen] = React.useState(defaultOpen);
  const isOpen = forceOpen || open;
  return (
    <section id={sectionId ? `plan-section-${sectionId}` : undefined} className="plan-section-card">
      <button type="button" className="plan-section-header" onClick={() => setOpen((v) => !v)}>
        <div>
          <h3>{title}</h3>
          {helper && <p>{helper}</p>}
        </div>
        <div className="plan-section-head-right">
          {ragField ? (
            <select
              className={`ui-search plan-rag-select rag-select-${String(ragValue || DEFAULT_RAG).toLowerCase()}`}
              value={ragValue || DEFAULT_RAG}
              disabled={readOnly}
              onChange={(e) => onRagChange?.(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            >
              {RAG_OPTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          ) : null}
          <span>{isOpen ? "−" : "+"}</span>
        </div>
      </button>
      {isOpen && <div className="plan-section-body">{children}</div>}
    </section>
  );
}

function DynamicTableField({ title, columns, rows, onChange, createRow, readOnly = false }) {
  return (
    <div className="plan-dynamic">
      <div className="plan-dynamic-header">
        <h4>{title}</h4>
        {!readOnly && <button className="ui-btn ui-btn--secondary plan-action-icon-btn" type="button" onClick={() => onChange([...(rows || []), createRow()])} aria-label={`Add ${title} row`} title="Add row">＋</button>}
      </div>
      {!rows?.length ? <div className="plan-empty-inline">No items added yet.</div> : null}
      {(rows || []).map((row, idx) => (
        <div key={row.id || idx} className="plan-dynamic-row">
          <div className="plan-grid-3">
            {columns.map((col) => (
              <label key={col.key} className={col.full ? "plan-field plan-field--full" : "plan-field"}>
                <span>{col.label}</span>
                {col.type === "textarea" ? (
                  <textarea value={row[col.key] || ""} readOnly={readOnly} onChange={(e) => { const next = [...rows]; next[idx] = { ...row, [col.key]: e.target.value }; onChange(next); }} />
                ) : col.type === "select" ? (
                  <select value={row[col.key] || ""} disabled={readOnly} onChange={(e) => { const next = [...rows]; next[idx] = { ...row, [col.key]: e.target.value }; onChange(next); }}>
                    {(col.options || []).map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                ) : (
                  <input type={col.type || "text"} value={col.type === "currency" && readOnly ? formatCurrency(row[col.key]) : row[col.key] || ""} readOnly={readOnly} onChange={(e) => { const next = [...rows]; next[idx] = { ...row, [col.key]: e.target.value }; onChange(next); }} />
                )}
              </label>
            ))}
          </div>
          {!readOnly && <button className="ui-btn ui-btn--ghost plan-action-icon-btn" type="button" onClick={() => onChange(rows.filter((_, i) => i !== idx))} aria-label="Remove row" title="Remove row">🗑</button>}
        </div>
      ))}
    </div>
  );
}

function HealthBreakdown({ breakdown }) {
  const rows = [
    ["Strategic Importance", metricRagFromRatio((breakdown.strategicScore || 0) / 10)],
    ["Pipeline", metricRagFromRatio((breakdown.pipelineScore || 0) / 20)],
    ["Closed Won", metricRagFromRatio((breakdown.closedWonScore || 0) / 20)],
    ["Active Opportunities", metricRagFromRatio((breakdown.activeOppScore || 0) / 15)],
    ["Governance", metricRagFromRatio((breakdown.governanceScore || 0) / 10)],
    ["Risk Profile", metricRagFromRatio((breakdown.riskScore || 0) / 10)],
    ["90-Day Action Plan", metricRagFromRatio((breakdown.actionScore || 0) / 10)],
  ];
  return <div className="health-breakdown">{rows.map(([label,rag]) => <div key={label} className="health-breakdown-row"><span>{label}</span><RagStatusPill value={rag} /></div>)}</div>;
}

function SummaryMetrics({ plans }) {
  const enriched = plans.map(enrichPlan);
  const totals = {
    totalPlans: plans.length,
    pipeline: enriched.reduce((a, p) => a + safeNumber(p.scorecard.pipelineCurrent), 0),
    won: enriched.reduce((a, p) => a + safeNumber(p.scorecard.closedWonCurrent), 0),
    avgHealth: enriched.length ? Math.round(enriched.reduce((a, p) => a + p.computed.healthScore, 0) / enriched.length) : 0,
    green: enriched.filter((p) => p.overallRagStatus === "Green").length,
    amber: enriched.filter((p) => p.overallRagStatus === "Amber").length,
    red: enriched.filter((p) => p.overallRagStatus === "Red").length,
  };
  const cards = [
    { label: "Total Pipeline Value", value: formatCurrency(totals.pipeline), subtitle: "All partner plans", tone: "pipeline" },
    { label: "Total Closed Won Value", value: formatCurrency(totals.won), subtitle: "All partner plans", tone: "won" },
    { label: "Average Health Score", value: `${totals.avgHealth}/100`, subtitle: `${totals.totalPlans} active plans`, tone: "health" },
    { label: "Green Plans", value: totals.green, subtitle: "Low risk", tone: "green" },
    { label: "Amber Plans", value: totals.amber, subtitle: "Watch closely", tone: "amber" },
    { label: "Red Plans", value: totals.red, subtitle: "Needs action", tone: "red" },
  ];
  return (
    <div className="plan-scorecards">{cards.map((card) => <div key={card.label} className={`plan-stat-card plan-stat-card--${card.tone}`}><div className="plan-stat-label">{card.label}</div><div className="plan-stat-value">{card.value}</div><div className="plan-stat-subtitle">{card.subtitle}</div></div>)}</div>
  );
}

function RagStatusPill({ value }) {
  return <span className={`rag-pill rag-pill-${(value || "").toLowerCase()}`}>{value || "—"}</span>;
}

function getSortedPartnerRows(plans) {
  return plans
    .map(enrichPlan)
    .map((plan, index) => ({ plan, index }))
    .sort((a, b) => {
      const scoreDiff = b.plan.computed.healthScore - a.plan.computed.healthScore;
      if (scoreDiff !== 0) return scoreDiff;
      const pipelineDiff = safeNumber(b.plan.scorecard.pipelineCurrent) - safeNumber(a.plan.scorecard.pipelineCurrent);
      if (pipelineDiff !== 0) return pipelineDiff;
      const nameDiff = (a.plan.partnerOverview.partnerName || "").localeCompare(b.plan.partnerOverview.partnerName || "");
      if (nameDiff !== 0) return nameDiff;
      return a.index - b.index;
    })
    .map(({ plan }) => plan);
}

function TopBottomPartnerTables({ plans }) {
  const ranked = getSortedPartnerRows(plans);
  const rows = ranked.map((plan, idx) => ({ ...plan, rank: idx + 1 }));
  const topFive = rows.slice(0, 5);
  const bottomFive = [...rows].reverse().slice(0, 5);

  const renderTable = (title, tableRows) => (
    <section className="plan-section-card ranking-panel">
      <div className="plan-section-body">
        <h3>{title}</h3>
        <div className="ranking-table-wrap">
          <table className="ranking-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Health</th>
                <th>Rank</th>
                <th>£</th>
                <th>RAG</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((plan) => (
                <tr key={`${title}-${plan.id}`}>
                  <td>{plan.partnerOverview.partnerName || "—"}</td>
                  <td className="num">{plan.computed.healthScore}</td>
                  <td className="num">#{plan.rank}</td>
                  <td className="num">{formatCurrency(plan.scorecard.pipelineCurrent)}</td>
                  <td><RagStatusPill value={plan.overallRagStatus} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );

  return <div className="plan-ranking-grid">{renderTable("Top 5 Partners", topFive)}{renderTable("Bottom 5 Partners", bottomFive)}</div>;
}

function SavedPlansTable({ plans, onView, onEdit, onDuplicate, onDelete }) {
  return (
    <div className="plan-table-wrap">
      <table className="plan-table">
        <thead>
          <tr>
            <th>Partner</th>
            <th>RAG</th>
            <th>Health</th>
            <th>Ranking</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Pipeline</th>
            <th>Closed Won</th>
            <th>Overdue</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plans.map((p) => {
            const plan = enrichPlan(p);
            return (
              <tr key={plan.id} className={plan.overallRagStatus === "Red" ? "row-red" : ""}>
                <td>{plan.partnerOverview.partnerName || "—"}</td>
                <td><RagBadge value={plan.overallRagStatus} /></td>
                <td>{plan.computed.healthScore}</td>
                <td>{plan.computed.healthLabel}</td>
                <td>{plan.contacts.channelManager || "—"}</td>
                <td>{plan.metadata.planStatus || "—"}</td>
                <td>{formatCurrency(plan.scorecard.pipelineCurrent)}</td>
                <td>{formatCurrency(plan.scorecard.closedWonCurrent)}</td>
                <td>{plan.computed.overdueActionItems}</td>
                <td>{new Date(plan.updatedAt).toLocaleDateString()}</td>
                <td>
                  <div className="plan-actions-inline">
                    <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => onView(plan)} aria-label="View plan" title="View">
                      👁
                    </button>
                    <button className="ui-btn ui-btn--secondary plan-action-icon-btn" onClick={() => onEdit(plan)} aria-label="Edit plan" title="Edit">
                      ✏️
                    </button>
                    <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => onDuplicate(plan)} aria-label="Duplicate plan" title="Duplicate">
                      ⧉
                    </button>
                    <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => onDelete(plan)} aria-label="Delete plan" title="Delete">
                      🗑
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PartnerAccountPlanToolPage() {
  const [plans, setPlans] = React.useState(() => readPlansFromStorage());
  const [mode, setMode] = React.useState("dashboard");
  const [editingPlan, setEditingPlan] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  const [search, setSearch] = React.useState("");
  const [tierFilter, setTierFilter] = React.useState("all");
  const [typeFilter, setTypeFilter] = React.useState("all");
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [ragFilter, setRagFilter] = React.useState("all");
  const [rankingFilter, setRankingFilter] = React.useState("all");
    const [overdueFilter, setOverdueFilter] = React.useState("all");
  const [sortBy, setSortBy] = React.useState("updated");
  const [printView, setPrintView] = React.useState(false);

  React.useEffect(() => { writePlansToStorage(plans.map(withPlanDefaults)); }, [plans]);

  const filteredPlans = React.useMemo(() => {
    const next = plans.map(enrichPlan).filter((p) => {
      const hit = (p.partnerOverview.partnerName || "").toLowerCase().includes(search.toLowerCase());
      if (!hit) return false;
      if (tierFilter !== "all" && p.partnerOverview.partnerTier !== tierFilter) return false;
      if (typeFilter !== "all" && p.partnerOverview.partnerType !== typeFilter) return false;
      if (statusFilter !== "all" && p.metadata.planStatus !== statusFilter) return false;
      if (ragFilter !== "all" && p.overallRagStatus !== ragFilter) return false;
      if (rankingFilter !== "all" && p.computed.healthLabel !== rankingFilter) return false;
      if (overdueFilter === "high" && p.computed.overdueActionItems < 3) return false;
      if (overdueFilter === "some" && (p.computed.overdueActionItems < 1 || p.computed.overdueActionItems > 2)) return false;
      if (overdueFilter === "none" && p.computed.overdueActionItems !== 0) return false;
      return true;
    });
    next.sort((a, b) => {
      if (sortBy === "name") return (a.partnerOverview.partnerName || "").localeCompare(b.partnerOverview.partnerName || "");
      if (sortBy === "pipeline") return safeNumber(b.scorecard.pipelineCurrent) - safeNumber(a.scorecard.pipelineCurrent);
      if (sortBy === "healthHigh") return b.computed.healthScore - a.computed.healthScore;
      if (sortBy === "healthLow") return a.computed.healthScore - b.computed.healthScore;
      if (sortBy === "rag") return (RAG_META[a.overallRagStatus]?.rank ?? 1) - (RAG_META[b.overallRagStatus]?.rank ?? 1);
      if (sortBy === "overdue") return b.computed.overdueActionItems - a.computed.overdueActionItems;
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    return next;
  }, [plans, search, tierFilter, typeFilter, statusFilter, ragFilter, rankingFilter, overdueFilter, sortBy]);

  const beginNewPlan = () => { setErrors({}); setEditingPlan(withPlanDefaults(createEmptyPlan())); setMode("edit"); };

  const validate = (plan) => {
    const nextErrors = {};
    if (!plan.partnerOverview.partnerName) nextErrors.partnerName = "Partner Name is required.";
    if (!plan.partnerOverview.partnerTier) nextErrors.partnerTier = "Partner Tier is required.";
    if (!plan.partnerOverview.partnerType) nextErrors.partnerType = "Partner Type is required.";
    if (!plan.contacts.channelManager) nextErrors.channelManager = "Channel Manager is required.";
    if (!plan.metadata.planStatus) nextErrors.planStatus = "Plan Status is required.";
    return nextErrors;
  };

  const savePlan = (saveAsNew = false) => {
    if (!editingPlan) return;
    const foundErrors = validate(editingPlan);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length) return;
    const stamp = new Date().toISOString();
    const payload = withPlanDefaults({ ...editingPlan, id: saveAsNew ? planId() : editingPlan.id, createdAt: saveAsNew ? stamp : editingPlan.createdAt, updatedAt: stamp });
    setPlans((prev) => {
      const exists = prev.some((p) => p.id === payload.id);
      return exists ? prev.map((p) => (p.id === payload.id ? payload : p)) : [payload, ...prev];
    });
    setEditingPlan(payload);
    setMode("view");
  };

  const handleDelete = (plan) => {
    if (!window.confirm(`Delete plan for ${plan.partnerOverview.partnerName || "this partner"}?`)) return;
    setPlans((prev) => prev.filter((p) => p.id !== plan.id));
    if (editingPlan?.id === plan.id) { setEditingPlan(null); setMode("dashboard"); }
  };

  const duplicatePlan = (plan) => {
    const stamp = new Date().toISOString();
    const dup = withPlanDefaults({ ...plan, id: planId(), createdAt: stamp, updatedAt: stamp, partnerOverview: { ...plan.partnerOverview, partnerName: `${plan.partnerOverview.partnerName || "Plan"} Copy` } });
    setPlans((prev) => [dup, ...prev]);
  };

  const updateField = (path, value) => {
    setEditingPlan((prev) => {
      const next = { ...prev };
      let ref = next;
      for (let i = 0; i < path.length - 1; i += 1) ref = ref[path[i]];
      ref[path[path.length - 1]] = value;
      return withPlanDefaults(next);
    });
  };

  const jumpToSection = (id) => {
    const target = document.getElementById(`plan-section-${id}`);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const triggerPrint = () => { setPrintView(true); setTimeout(() => window.print(), 150); };

  const exportAllCsv = () => {
    if (!plans.length) return window.alert("No plans available to export.");
    const enriched = plans.map(enrichPlan);
    const headers = ["Partner Name","Partner Tier","Partner Type","Geography","Owner / Channel Manager","Plan Status","Overall RAG","Health Score","Health Ranking","Strategic Importance Rating","Pipeline Current (GBP)","Pipeline Target (GBP)","Closed Won Current (GBP)","Closed Won Target (GBP)","Open Risk Count","Overdue Action Count","Last Updated","Next QBR Date"];
    const rows = enriched.map((p) => ({
      "Partner Name": p.partnerOverview.partnerName,
      "Partner Tier": p.partnerOverview.partnerTier,
      "Partner Type": p.partnerOverview.partnerType,
      Geography: p.partnerOverview.primaryGeography,
      "Owner / Channel Manager": p.contacts.channelManager,
      "Plan Status": p.metadata.planStatus,
      "Overall RAG": p.overallRagStatus,
      "Health Score": p.computed.healthScore,
      "Health Ranking": p.computed.healthLabel,
      "Strategic Importance Rating": p.partnerOverview.strategicImportanceRating,
      "Pipeline Current (GBP)": p.scorecard.pipelineCurrent,
      "Pipeline Target (GBP)": p.scorecard.pipelineTarget,
      "Closed Won Current (GBP)": p.scorecard.closedWonCurrent,
      "Closed Won Target (GBP)": p.scorecard.closedWonTarget,
      "Open Risk Count": p.computed.openRisks,
      "Overdue Action Count": p.computed.overdueActionItems,
      "Last Updated": formatDate(p.updatedAt),
      "Next QBR Date": formatDate(p.metadata.nextQbrDate),
    }));
    downloadBlob("partner-account-plans-export.csv", toCsv(headers, rows), "text/csv;charset=utf-8;");
  };

  const exportExecutiveCsv = () => {
    if (!plans.length) return window.alert("No plans available to export.");
    const enriched = plans.map(enrichPlan);
    const headers = ["Partner Name","Tier","Type","Owner","Overall RAG","Health Score","Ranking Label","Pipeline Current (GBP)","Pipeline Target (GBP)","Closed Won Current (GBP)","Closed Won Target (GBP)","Open Risks","Overdue Actions","Next QBR Date","Last Executive Review Date"];
    const rows = enriched.map((p) => ({
      "Partner Name": p.partnerOverview.partnerName,
      Tier: p.partnerOverview.partnerTier,
      Type: p.partnerOverview.partnerType,
      Owner: p.contacts.channelManager,
      "Overall RAG": p.overallRagStatus,
      "Health Score": p.computed.healthScore,
      "Ranking Label": p.computed.healthLabel,
      "Pipeline Current (GBP)": p.scorecard.pipelineCurrent,
      "Pipeline Target (GBP)": p.scorecard.pipelineTarget,
      "Closed Won Current (GBP)": p.scorecard.closedWonCurrent,
      "Closed Won Target (GBP)": p.scorecard.closedWonTarget,
      "Open Risks": p.computed.openRisks,
      "Overdue Actions": p.computed.overdueActionItems,
      "Next QBR Date": formatDate(p.metadata.nextQbrDate),
      "Last Executive Review Date": formatDate(p.metadata.lastExecutiveReviewDate),
    }));
    downloadBlob("partner-executive-summary.csv", toCsv(headers, rows), "text/csv;charset=utf-8;");
  };

  if (!plans.length && mode === "dashboard") {
    return <div className="partner-plan-page"><div className="plan-empty"><h2>No plans saved yet</h2><p>Create, manage and track strategic account plans for key partners across recruitment, enablement, pipeline development and growth.</p><button className="ui-btn ui-btn--primary plan-action-icon-btn" onClick={beginNewPlan} aria-label="Create new plan" title="New plan">＋</button></div></div>;
  }

  const current = editingPlan ? enrichPlan(editingPlan) : null;

  return (
    <div className={`partner-plan-page ${printView ? "print-mode" : ""}`}>
      <div className="partner-plan-head">
        <div>
          <p>Create, manage and track strategic account plans for key partners across recruitment, enablement, pipeline development and growth.</p>
        </div>
        <div className="plan-actions-inline">
          <button className="ui-btn ui-btn--primary plan-action-icon-btn" onClick={beginNewPlan} aria-label="Create new plan" title="New plan">＋</button>
          <button className="ui-btn ui-btn--secondary plan-action-icon-btn" onClick={exportAllCsv} disabled={!plans.length} aria-label="Export all plans as CSV" title="Export CSV">📤</button>
          <button className="ui-btn ui-btn--secondary plan-action-icon-btn" onClick={exportExecutiveCsv} disabled={!plans.length} aria-label="Export executive summary CSV" title="Executive export">📊</button>
          {current && <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={triggerPrint} aria-label="Print view" title="Print">🖨</button>}
          {printView && <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => setPrintView(false)} aria-label="Exit print view" title="Exit print view">✕</button>}
        </div>
      </div>

      {mode === "dashboard" ? (
        <>
          <SummaryMetrics plans={plans} />
          <TopBottomPartnerTables plans={plans} />
          <div className="plan-filter-grid">
            <input className="ui-search" placeholder="Search by Partner Name" value={search} onChange={(e) => setSearch(e.target.value)} />
            <select className="ui-search" value={tierFilter} onChange={(e) => setTierFilter(e.target.value)}><option value="all">All Tiers</option>{PARTNER_TIER_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select>
            <select className="ui-search" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}><option value="all">All Types</option>{PARTNER_TYPE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select>
            <select className="ui-search" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="all">All Statuses</option><option>Draft</option><option>Active</option><option>At Risk</option><option>On Track</option><option>Closed</option><option>Archived</option></select>
            <select className="ui-search" value={ragFilter} onChange={(e) => setRagFilter(e.target.value)}><option value="all">All RAG</option>{RAG_OPTIONS.map((o) => <option key={o}>{o}</option>)}</select>
            <select className="ui-search" value={rankingFilter} onChange={(e) => setRankingFilter(e.target.value)}><option value="all">All Health Bands</option><option>Strategic Growth</option><option>Strong</option><option>Moderate</option><option>Needs Attention</option></select>
                        <select className="ui-search" value={overdueFilter} onChange={(e) => setOverdueFilter(e.target.value)}><option value="all">Overdue Actions: Any</option><option value="none">Overdue: 0</option><option value="some">Overdue: 1-2</option><option value="high">Overdue: 3+</option></select>
            <select className="ui-search" value={sortBy} onChange={(e) => setSortBy(e.target.value)}><option value="updated">Sort: Last Updated</option><option value="name">Sort: Partner Name</option><option value="pipeline">Sort: Pipeline Value</option><option value="healthHigh">Sort: Health High-Low</option><option value="healthLow">Sort: Health Low-High</option><option value="rag">Sort: RAG Priority</option><option value="overdue">Sort: Overdue Actions</option></select>
          </div>
          {filteredPlans.length ? <SavedPlansTable plans={filteredPlans} onView={(plan) => { setEditingPlan(plan); setMode("view"); }} onEdit={(plan) => { setEditingPlan(JSON.parse(JSON.stringify(plan))); setMode("edit"); setErrors({}); }} onDuplicate={duplicatePlan} onDelete={handleDelete} /> : <div className="plan-empty"><h2>No plans match filters</h2><p>Try widening your filters or create a new plan.</p></div>}
        </>
      ) : current ? (
        <>
          <div className="plan-sticky-actions">
            <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => { setMode("dashboard"); setPrintView(false); }} aria-label="Back to plans" title="Back">←</button>
            {mode === "view" ? <button className="ui-btn ui-btn--secondary plan-action-icon-btn" onClick={() => setMode("edit")} aria-label="Edit plan" title="Edit">✏️</button> : <button className="ui-btn ui-btn--primary plan-action-icon-btn" onClick={() => savePlan(false)} aria-label="Save plan" title="Save">💾</button>}
            {mode === "edit" && <button className="ui-btn ui-btn--secondary plan-action-icon-btn" onClick={() => savePlan(true)} aria-label="Duplicate and save as new" title="Save as new">⧉</button>}
            <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={() => handleDelete(current)} aria-label="Delete plan" title="Delete">🗑</button>
            <button className="ui-btn ui-btn--ghost plan-action-icon-btn" onClick={triggerPrint} aria-label="Print view" title="Print">🖨</button>
          </div>

          {!!Object.keys(errors).length && <div className="plan-error-banner">Please complete required fields before saving.</div>}

          <div className="plan-header-strip">
            <div className="plan-header-primary">
              <div className={`plan-stat-label plan-stat-label--${String(current.metadata.planStatus || "Draft").toLowerCase().replace(/\s+/g, "-")}`}>Partner</div>
              <div className="plan-header-partner">{current.partnerOverview.partnerName || "—"}</div>
              <div className="plan-header-status-row">
                <span className="plan-header-chip">{current.metadata.planStatus}</span>
              </div>
            </div>
            <div className="plan-header-kpi"><div className="plan-stat-label">Health Score</div><div className="plan-header-kpi-value">{current.computed.healthScore}</div></div>
            <div className="plan-header-kpi"><div className="plan-stat-label">Ranking</div><div className="plan-header-kpi-value">{current.computed.healthLabel}</div></div>
            <div className="plan-header-kpi"><div className="plan-stat-label">Pipeline (GBP)</div><div className="plan-header-kpi-value">{formatCurrency(current.scorecard.pipelineCurrent)} <span>/ {formatCurrency(current.scorecard.pipelineTarget)}</span></div></div>
            <div className="plan-header-kpi"><div className="plan-stat-label">Closed Won (GBP)</div><div className="plan-header-kpi-value">{formatCurrency(current.scorecard.closedWonCurrent)} <span>/ {formatCurrency(current.scorecard.closedWonTarget)}</span></div></div>
          </div>

          <div className="plan-section-card">
            <div className="plan-section-body">
              <h3>Health & Performance</h3>
              <div className="plan-health-rag-grid">
                <div className="plan-health-rag-item"><span>Pipeline Health</span><RagStatusPill value={current.computed.kpiRag.pipelineHealth} /></div>
                <div className="plan-health-rag-item"><span>Revenue Progress</span><RagStatusPill value={current.computed.kpiRag.revenueProgress} /></div>
                <div className="plan-health-rag-item"><span>Enablement Readiness</span><RagStatusPill value={current.computed.kpiRag.enablementReadiness} /></div>
                <div className="plan-health-rag-item"><span>Engagement Cadence</span><RagStatusPill value={current.computed.kpiRag.engagementCadence} /></div>
                <div className="plan-health-rag-item"><span>Risk Level</span><RagStatusPill value={current.computed.kpiRag.riskLevel} /></div>
                <div className="plan-health-rag-item"><span>Action Plan Delivery</span><RagStatusPill value={current.computed.kpiRag.actionPlanDelivery} /></div>
              </div>
              <HealthBreakdown breakdown={current.computed.healthBreakdown} />
              <p className="plan-empty-inline">Each indicator now shows its current Red / Amber / Green status.</p>
            </div>
          </div>

          <div className="plan-section-tabs">{PLAN_SECTIONS.map(([id, label]) => <button type="button" key={id} onClick={() => jumpToSection(id)}>{label}</button>)}</div>

          <div className="plan-form-stack">
            <AccountPlanFormSection sectionId="overview" title="Partner Overview" helper="Core profile and strategic positioning." ragField="overallRagStatus" ragValue={current.overallRagStatus} onRagChange={(v)=>updateField(["overallRagStatus"],v)} readOnly={mode==="view"} defaultOpen={true} forceOpen={printView}><div className="plan-grid-3"><label className="plan-field"><span>Partner Name *</span><input value={current.partnerOverview.partnerName} readOnly={mode === "view"} onChange={(e) => updateField(["partnerOverview", "partnerName"], e.target.value)} />{errors.partnerName && <small>{errors.partnerName}</small>}</label><label className="plan-field"><span>Partner Tier *</span><select value={current.partnerOverview.partnerTier} disabled={mode === "view"} onChange={(e) => updateField(["partnerOverview", "partnerTier"], e.target.value)}><option value="">Select</option>{PARTNER_TIER_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select>{errors.partnerTier && <small>{errors.partnerTier}</small>}</label><label className="plan-field"><span>Partner Type *</span><select value={current.partnerOverview.partnerType} disabled={mode === "view"} onChange={(e) => updateField(["partnerOverview", "partnerType"], e.target.value)}><option value="">Select</option>{PARTNER_TYPE_OPTIONS.map((option) => <option key={option} value={option}>{option}</option>)}</select>{errors.partnerType && <small>{errors.partnerType}</small>}</label><label className="plan-field"><span>Primary Geography</span><input value={current.partnerOverview.primaryGeography} readOnly={mode === "view"} onChange={(e) => updateField(["partnerOverview", "primaryGeography"], e.target.value)} /></label><label className="plan-field"><span>Strategic Importance (1-5)</span><input type="number" min="1" max="5" value={current.partnerOverview.strategicImportanceRating} readOnly={mode==="view"} onChange={(e) => updateField(["partnerOverview", "strategicImportanceRating"], e.target.value)} /></label><label className="plan-field"><span>Channel Manager *</span><input value={current.contacts.channelManager} readOnly={mode === "view"} onChange={(e) => updateField(["contacts", "channelManager"], e.target.value)} />{errors.channelManager && <small>{errors.channelManager}</small>}</label></div></AccountPlanFormSection>

            <AccountPlanFormSection sectionId="alignment" title="Strategic Alignment" ragField="alignmentRag" ragValue={current.alignmentRag} onRagChange={(v)=>updateField(["alignmentRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div className="plan-grid-2"><label className="plan-field plan-field--full"><span>Why this partner matters</span><textarea value={current.strategicAlignment.whyThisPartnerMatters} readOnly={mode === "view"} onChange={(e)=>updateField(["strategicAlignment","whyThisPartnerMatters"],e.target.value)} /></label></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="targetAccounts" title="Target Accounts" defaultOpen={false} forceOpen={printView}><div><DynamicTableField readOnly={mode === "view"} title="Target Accounts" rows={current.targetAccounts} onChange={(rows)=>updateField(["targetAccounts"],rows)} createRow={() => ({ id: planId(), accountName: "", opportunityType: "", estimatedValue: "", owner: "", targetAccountStage: "New", nextStep: "", closeDate: "", strategicNotes: "" })} columns={[{ key: "accountName", label: "Account Name" }, { key: "opportunityType", label: "Opportunity Type" }, { key: "estimatedValue", label: "Estimated Value (GBP)", type: "number" }, { key: "owner", label: "Owner" }, { key: "targetAccountStage", label: "Stage", type: "select", options: TARGET_ACCOUNT_STAGE_OPTIONS }, { key: "nextStep", label: "Next Step" }, { key: "closeDate", label: "Close Date", type: "date" }, { key: "strategicNotes", label: "Strategic Notes", type: "textarea", full: true }]} /></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="enablement" title="Enablement" ragField="enablementRag" ragValue={current.enablementRag} onRagChange={(v)=>updateField(["enablementRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div className="plan-grid-3">{[
              ["contractSigned", "Contract Signed"],
              ["enablementStarted", "Enablement Started"],
              ["demoEnvironmentLive", "Demo Environment Live"],
              ["salesTraining", "Sales Training"],
              ["technicalTraining", "Technical Training"],
              ["firstOpportunity", "1st Opportunity"],
            ].map(([key,label]) => <label className="plan-field plan-field--checkbox" key={key}><input type="checkbox" checked={Boolean(current.enablement[key])} disabled={mode === "view"} onChange={(e)=>updateField(["enablement",key],e.target.checked)} /><span>{label}</span></label>)}</div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="governance" title="Governance" ragField="governanceRag" ragValue={current.governanceRag} onRagChange={(v)=>updateField(["governanceRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div><DynamicTableField readOnly={mode === "view"} title="Cadence" rows={current.governanceCadence} onChange={(rows)=>updateField(["governanceCadence"],rows)} createRow={() => ({ id: planId(), meetingType: "Pipeline Review", frequency: "Monthly", purpose: "" })} columns={[{ key: "meetingType", label: "Meeting Type", type: "select", options: ["Pipeline Review", "Support Review", "QBR"] }, { key: "frequency", label: "Frequency", type: "select", options: ["Weekly", "Monthly", "Quarterly", "Annually"] }, { key: "purpose", label: "Purpose", full: true }]} /></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="growth" title="Growth Opportunities" ragField="growthRag" ragValue={current.growthRag} onRagChange={(v)=>updateField(["growthRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div><DynamicTableField readOnly={mode === "view"} title="Growth Opportunities" rows={current.growthOpportunities} onChange={(rows)=>updateField(["growthOpportunities"],rows)} createRow={() => ({ id: planId(), solutionArea: "", opportunityDescription: "", revenuePotential: "", timeline: "This Quarter" })} columns={[{ key: "solutionArea", label: "Product / Solution Area" }, { key: "opportunityDescription", label: "Opportunity Description", full: true }, { key: "revenuePotential", label: "Revenue Potential", type: "currency" }, { key: "timeline", label: "Timeline", type: "select", options: ["This Quarter", "Next Quarter", "This Year", "Next Year"] }]} /></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="risks" title="Risks & Mitigation" ragField="riskRag" ragValue={current.riskRag} onRagChange={(v)=>updateField(["riskRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div><DynamicTableField readOnly={mode === "view"} title="Risk Register" rows={current.risksMitigation} onChange={(rows)=>updateField(["risksMitigation"],rows)} createRow={() => ({ id: planId(), risk: "", impact: "", mitigationPlan: "", status: "Open" })} columns={[{ key: "risk", label: "Risk", full: true }, { key: "impact", label: "Impact" }, { key: "mitigationPlan", label: "Mitigation Plan", full: true }, { key: "status", label: "Status" }]} /></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="scorecard" title="Scorecard" defaultOpen={false} forceOpen={printView}><div className="plan-grid-2">{Object.entries({ pipelineCurrent: "Pipeline Current (GBP)", pipelineTarget: "Pipeline Target (GBP)", closedWonCurrent: "Closed Won Current (GBP)", closedWonTarget: "Closed Won Target (GBP)" }).map(([key,label]) => <label className="plan-field" key={key}><span>{label}</span>{mode === "view" ? <input value={formatCurrency(current.scorecard[key])} readOnly /> : <input type="number" value={current.scorecard[key]} readOnly={mode === "view"} onChange={(e)=>updateField(["scorecard",key],e.target.value)} />}</label>)}</div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="actionPlan" title="90 Day Action Plan" ragField="actionPlanRag" ragValue={current.actionPlanRag} onRagChange={(v)=>updateField(["actionPlanRag"],v)} readOnly={mode==="view"} defaultOpen={false} forceOpen={printView}><div><DynamicTableField readOnly={mode === "view"} title="Action Items" rows={current.actionPlan90Day} onChange={(rows)=>updateField(["actionPlan90Day"],rows)} createRow={() => ({ id: planId(), action: "", dueDate: "", priority: "Medium", status: "Not started", notes: "" })} columns={[{ key: "action", label: "Action", full: true }, { key: "dueDate", label: "Due Date", type: "date" }, { key: "priority", label: "Priority", type: "select", options: ["Low", "Medium", "High"] }, { key: "status", label: "Status", type: "select", options: ["Not started", "In progress", "Blocked", "Complete"] }, { key: "notes", label: "Notes", type: "textarea", full: true }]} /></div></AccountPlanFormSection>
            <AccountPlanFormSection sectionId="summary" title="Plan Status / Metadata" defaultOpen={false} forceOpen={printView}><div className="plan-grid-2"><label className="plan-field"><span>Plan Status *</span><select value={current.metadata.planStatus} disabled={mode === "view"} onChange={(e)=>updateField(["metadata","planStatus"],e.target.value)}><option>Draft</option><option>Active</option><option>At Risk</option><option>On Track</option><option>Closed</option><option>Archived</option></select>{errors.planStatus && <small>{errors.planStatus}</small>}</label><label className="plan-field"><span>Last Executive Review Date</span><input type="date" value={current.metadata.lastExecutiveReviewDate} readOnly={mode === "view"} onChange={(e)=>updateField(["metadata","lastExecutiveReviewDate"],e.target.value)} /></label><label className="plan-field"><span>Next QBR Date</span><input type="date" value={current.metadata.nextQbrDate} readOnly={mode === "view"} onChange={(e)=>updateField(["metadata","nextQbrDate"],e.target.value)} /></label></div></AccountPlanFormSection>
          </div>
        </>
      ) : null}
    </div>
  );
}

const SAMPLE_CUSTOMER_STORIES = [
  {
    id: "coop",
    customerName: "Co-op",
    industry: "Consumer / Membership",
    headline: "Award-winning collaboration delivering a successful cloud contact centre migration",
    shortSummary:
      "IPI partnered with Genesys and a global SI partner to support Co-op's migration to Genesys Cloud while maintaining customer service continuity.",
    challenge:
      "Execute a major migration without interrupting customer support during a critical transformation period.",
    solution:
      "Co-designed and delivered a phased Genesys Cloud migration with close delivery collaboration and service continuity controls.",
    outcomes: ["Successful migration to Genesys Cloud", "Operational continuity", "Award-winning partnership"],
    metrics: ["Succeed Together award", "Zero service interruption in cutover phases"],
    quote:
      "The partnership model made a complex migration feel controlled, collaborative and outcomes-led.",
    quoteAuthor: "Programme Sponsor, Co-op",
    solutionTags: ["Genesys Cloud", "Cloud Migration", "CCaaS"],
    businessOutcomeTags: ["Reliability", "Flexibility", "CX Improvement"],
    partnerRelevance: "Demonstrates how partners can collaborate with IPI on large enterprise migrations.",
    featured: false,
    logoText: "Co-op",
  },
  {
    id: "hillarys",
    customerName: "Hillarys",
    industry: "Retail",
    headline: "Retail contact centre modernisation with ElasticCX CCaaS",
    shortSummary:
      "IPI supported Hillarys on a multi-year transformation journey enabling cloud telephony, hybrid working and improved reliability.",
    challenge: "Modernise legacy contact infrastructure while improving resilience for a distributed workforce.",
    solution:
      "Implemented ElasticCX-enabled CCaaS capabilities in phases, introducing cloud voice and operational tooling.",
    outcomes: ["Flexible cloud platform", "Hybrid workforce enablement", "Improved scalability"],
    metrics: ["Up to 17,000 calls/week", "£500k savings in earlier phase", "99.99% reliability"],
    quote: "The phased model delivered measurable gains at each stage and created a stronger service foundation.",
    quoteAuthor: "Contact Centre Lead, Hillarys",
    solutionTags: ["CCaaS", "Cloud Migration", "Workforce Engagement"],
    businessOutcomeTags: ["Cost Savings", "Flexibility", "Reliability"],
    partnerRelevance: "Retail organisations often need phased migrations to cloud CX platforms.",
    featured: false,
    logoText: "Hillarys",
  },
  {
    id: "liberata",
    customerName: "Liberata",
    industry: "Public Sector",
    headline: "Public sector CX transformation powered by Genesys Cloud",
    shortSummary:
      "IPI supported Liberata in migrating to Genesys Cloud and introducing automation including voice bots and workforce optimisation.",
    challenge:
      "Improve citizen service accessibility while reducing pressure on frontline teams and maintaining governance standards.",
    solution:
      "Migrated core operations to Genesys Cloud, introduced bot automation and workforce optimisation, and implemented queue retention options.",
    outcomes: ["Automation at scale", "Improved citizen access", "Reduced contact centre load"],
    metrics: ["23% interactions resolved by bots", "14% reduction in call volumes", "34% selected queue retention"],
    quote:
      "Automation and cloud migration gave us faster, more reliable service for citizens while reducing avoidable demand.",
    quoteAuthor: "Service Delivery Director, Liberata",
    solutionTags: ["Genesys Cloud", "AI / Automation", "Workforce Engagement"],
    businessOutcomeTags: ["Automation", "CX Improvement", "Reliability"],
    partnerRelevance: "Public sector customers represent a major growth opportunity for partners.",
    featured: true,
    logoText: "Liberata",
  },
  {
    id: "ageas",
    customerName: "Ageas",
    industry: "Insurance",
    headline: "AI voice automation improves verification and reduces call handling time",
    shortSummary:
      "IPI deployed AI-powered identity verification and automation capabilities into Ageas' existing environment.",
    challenge:
      "Reduce verification friction and average handling time while preserving customer trust and security.",
    solution:
      "Embedded AI voice verification into existing workflows with targeted automation for common intents and faster triage.",
    outcomes: ["Improved call efficiency", "More self-service options", "Better agent conversations"],
    metrics: ["Verification on 80% of calls", "40–45 second AHT reduction"],
    quote: "AI verification shortened routine calls and gave agents more time for complex customer needs.",
    quoteAuthor: "Operations Manager, Ageas",
    solutionTags: ["AI / Automation", "CCaaS"],
    businessOutcomeTags: ["Automation", "Cost Savings", "CX Improvement"],
    partnerRelevance: "AI solutions represent a high-margin services opportunity for partners.",
    featured: false,
    logoText: "Ageas",
  },
  {
    id: "boden",
    customerName: "Boden",
    industry: "Retail",
    headline: "Seamless migration to Genesys Cloud with secure payment compliance",
    shortSummary:
      "IPI supported Boden's migration to Genesys Cloud and deployed Pauseable for PCI-compliant payment handling.",
    challenge:
      "Scale digital-first customer service while ensuring PCI-compliant payment journeys with no customer disruption.",
    solution:
      "Delivered Genesys Cloud migration and integrated Pauseable controls to secure card capture without harming UX.",
    outcomes: ["Secure payments", "Cloud scalability", "No disruption to customer experience"],
    metrics: ["PCI controls embedded", "No CX downtime during migration"],
    quote: "Compliance became a strategic enabler rather than a blocker in our CX roadmap.",
    quoteAuthor: "Head of CX, Boden",
    solutionTags: ["Genesys Cloud", "PCI Compliance", "Cloud Migration"],
    businessOutcomeTags: ["Compliance", "Reliability", "Flexibility"],
    partnerRelevance: "Compliance-driven CX transformations are common in retail and ecommerce.",
    featured: false,
    logoText: "Boden",
  },
];

const SAMPLE_CUSTOMER_LOGOS_IMAGE_SRC = "assets/sample-customer-logos-collage.svg";

function SampleCustomersPage() {
  const stories = SAMPLE_CUSTOMER_STORIES;
  const featuredStory = stories.find((story) => story.featured) || stories[0];
  const [search, setSearch] = React.useState("");
  const [industry, setIndustry] = React.useState("all");
  const [solutionType, setSolutionType] = React.useState("all");
  const [businessOutcome, setBusinessOutcome] = React.useState("all");
  const [selectedStory, setSelectedStory] = React.useState(null);

  React.useEffect(() => {
    if (!selectedStory) return undefined;
    const onEsc = (event) => {
      if (event.key === "Escape") setSelectedStory(null);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [selectedStory]);

  const filteredStories = React.useMemo(() => stories.filter((story) => {
    const query = search.trim().toLowerCase();
    const matchesSearch = !query || [story.customerName, story.headline, story.shortSummary, ...(story.solutionTags || [])].join(" ").toLowerCase().includes(query);
    const matchesIndustry = industry === "all" || story.industry === industry;
    const matchesSolution = solutionType === "all" || (story.solutionTags || []).includes(solutionType);
    const matchesOutcome = businessOutcome === "all" || (story.businessOutcomeTags || []).includes(businessOutcome);
    return matchesSearch && matchesIndustry && matchesSolution && matchesOutcome;
  }), [businessOutcome, industry, search, solutionType, stories]);

  return (
    <div className="sample-customers-page">
      <section className="sample-customers-hero ds-card ds-card--highlight">
        <div>
          <h1>Sample Customers</h1>
          <p>See how organisations are using IPI solutions to modernise customer experience, improve efficiency, strengthen compliance and enable growth.</p>
          <div className="sample-stat-grid">
            {["Cloud Transformation", "AI & Automation", "Compliance & Security", "Operational Efficiency"].map((label) => (
              <div key={label} className="sample-stat-tile">
                <div className="sample-stat-icon">✦</div>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="logo-collage" aria-label="Customer logo collage">
          <img
            className="logo-collage-image"
            src={SAMPLE_CUSTOMER_LOGOS_IMAGE_SRC}
            alt="Collage of sample customer logos"
            loading="lazy"
          />
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader eyebrow="Featured Story" title="Customer Success Spotlight" description="A flagship transformation story partners can use in customer conversations." />
        <div className="featured-story-card ds-card">
          <div>
            <div className="status-badge status-info">{featuredStory.industry}</div>
            <h3>{featuredStory.customerName}</h3>
            <h4>{featuredStory.headline}</h4>
            <p>{featuredStory.shortSummary}</p>
          </div>
          <div className="featured-metrics">
            {featuredStory.metrics.slice(0, 3).map((metric) => <span key={metric} className="sample-chip">{metric}</span>)}
            <button className="ui-btn ui-btn--primary" onClick={() => setSelectedStory(featuredStory)}>View Story</button>
          </div>
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="Why These Stories Matter to Partners" />
        <div className="sample-grid-3">
          {[{
            title: "Proven Transformation Experience",
            description: "IPI has delivered successful CX transformations across multiple industries including retail, insurance and public sector.",
          }, {
            title: "Repeatable Solutions",
            description: "Many of the technologies and architectures used in these projects can be replicated by reseller partners.",
          }, {
            title: "Revenue Opportunities",
            description: "Partners can build services, integration and managed offerings around these proven deployments.",
          }].map((item) => (
            <div className="ds-card" key={item.title}><h4>{item.title}</h4><p>{item.description}</p></div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="Customer Story Library" description="Filter by industry, solution and business outcomes." />
        <FilterBar>
          <input className="ui-field" placeholder="Search customer name or keyword" value={search} onChange={(e) => setSearch(e.target.value)} />
          <select className="ui-field" value={industry} onChange={(e) => setIndustry(e.target.value)}>
            <option value="all">Industry</option>
            {['Retail', 'Insurance', 'Public Sector', 'Consumer / Membership', 'Other'].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select className="ui-field" value={solutionType} onChange={(e) => setSolutionType(e.target.value)}>
            <option value="all">Solution Type</option>
            {['CCaaS', 'Genesys Cloud', 'AI / Automation', 'PCI Compliance', 'Workforce Engagement', 'Cloud Migration'].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
          <select className="ui-field" value={businessOutcome} onChange={(e) => setBusinessOutcome(e.target.value)}>
            <option value="all">Business Outcome</option>
            {['Cost Savings', 'CX Improvement', 'Automation', 'Compliance', 'Flexibility', 'Reliability'].map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </FilterBar>

        <div className="sample-story-grid">
          {filteredStories.map((story) => (
            <article key={story.id} className="sample-story-card ds-card">
              <div className="sample-story-card__header">
                <strong>{story.customerName}</strong>
                <span className="status-badge status-neutral">{story.industry}</span>
              </div>
              <h4>{story.headline}</h4>
              <div className="sample-tags">{story.solutionTags.slice(0, 3).map((tag) => <span key={tag} className="sample-chip">{tag}</span>)}</div>
              <div className="sample-tags">{story.businessOutcomeTags.slice(0, 3).map((tag) => <span key={tag} className="sample-chip sample-chip--outcome">{tag}</span>)}</div>
              {story.metrics[0] ? <div className="sample-metric-highlight">{story.metrics[0]}</div> : null}
              <button className="ui-btn ui-btn--secondary" onClick={() => setSelectedStory(story)}>View Story</button>
            </article>
          ))}
        </div>
      </section>

      <section className="sample-cta ds-card ds-card--highlight">
        <h3>Want to position IPI with similar customers?</h3>
        <div className="sample-cta-actions">
          <button className="ui-btn ui-btn--primary">Explore Industry Solutions</button>
          <button className="ui-btn ui-btn--secondary">Open Sales Toolkit</button>
        </div>
      </section>

      <div className={`sample-drawer-backdrop ${selectedStory ? "open" : ""}`} onClick={() => setSelectedStory(null)}>
        <aside className={`sample-story-drawer ${selectedStory ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
          {selectedStory ? (
            <div className="sample-story-drawer__content">
              <button className="ui-btn ui-btn--ghost" onClick={() => setSelectedStory(null)}>Close</button>
              <h2>{selectedStory.customerName}</h2>
              <p>{selectedStory.headline}</p>
              <div className="sample-detail-block"><h4>Customer Overview</h4><p>{selectedStory.shortSummary}</p></div>
              <div className="sample-detail-block"><h4>Challenge / Opportunity</h4><p>{selectedStory.challenge}</p></div>
              <div className="sample-detail-block"><h4>How IPI Enabled It</h4><p>{selectedStory.solution}</p></div>
              <div className="sample-detail-block"><h4>Key Outcomes</h4><ul>{selectedStory.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div>
              <div className="sample-tags">{selectedStory.metrics.map((metric) => <span key={metric} className="sample-chip">{metric}</span>)}</div>
              <blockquote>“{selectedStory.quote}”<cite>{selectedStory.quoteAuthor}</cite></blockquote>
              <div className="sample-detail-block"><h4>Solutions Used</h4><div className="sample-tags">{selectedStory.solutionTags.map((tag) => <span key={tag} className="sample-chip">{tag}</span>)}</div></div>
              <div className="sample-detail-block"><h4>Partner Relevance</h4><p>{selectedStory.partnerRelevance}</p></div>
            </div>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

const COMPETITIVE_MATRIX_DATA = {
  competitors: [
    { id: "elasticcx", name: "ElasticCX", descriptor: "Cloud-native CX platform", logo: "ECX", home: true },
    { id: "avaya", name: "Avaya", descriptor: "Legacy enterprise CX", logo: "AV" },
    { id: "cisco", name: "Cisco", descriptor: "Enterprise comms-led CX", logo: "CS" },
    { id: "five9", name: "Five9", descriptor: "Outbound and cloud specialist", logo: "F9" },
    { id: "genesys", name: "Genesys", descriptor: "Experience orchestration leader", logo: "GY" },
    { id: "nice", name: "NICE", descriptor: "Enterprise AI CX suite", logo: "NC" },
  ],
  matrixCategories: [
    { id: "acd", label: "ACD / PBX / Agent Interface", takeaway: "Balanced voice and agent tooling that supports complex routing scenarios." },
    { id: "self_service", label: "Self-service / Omnichannel", takeaway: "Strong digital orchestration story for unified customer journeys." },
    { id: "reporting", label: "Reporting / Quality Management", takeaway: "Operational visibility and coaching controls that support consistent outcomes." },
    { id: "admin", label: "Admin & Developer / Architecture", takeaway: "Cloud-native architecture and practical administration speed up partner delivery." },
    { id: "dialer", label: "Dialer / Carrier / Integrations", takeaway: "Broad dialer, telephony and integration coverage supports mixed customer needs." },
  ],
  matrixRows: [
    { id: "skill_based_routing", category: "acd", label: "Skill-based routing", ratings: { elasticcx: 4, avaya: 3, cisco: 3, five9: 4, genesys: 4, nice: 3 } },
    { id: "multiple_acd_profiles", category: "acd", label: "Multiple ACD Profiles", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 2 } },
    { id: "intelligent_omnichannel_routing", category: "acd", label: "Intelligent omnichannel, omni media routing", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 2 } },
    { id: "queue_video_media_calls", category: "acd", label: "Queue video & media calls", ratings: { elasticcx: 3, avaya: 1, cisco: 2, five9: 2, genesys: 3, nice: 1 } },
    { id: "integrated_pbx", category: "acd", label: "Integrated PBX", ratings: { elasticcx: 4, avaya: 3, cisco: 4, five9: 2, genesys: 3, nice: 2 } },
    { id: "true_omnichannel_agent_experience", category: "acd", label: "True omnichannel agent experience", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "multi_tasking_policy", category: "acd", label: "Multi-tasking policy", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 2 } },
    { id: "integrated_contact_manager", category: "acd", label: "Integrated contact manager", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 2 } },
    { id: "custom_goal_setting_dashboard", category: "acd", label: "Custom goal setting dashboard", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 3, genesys: 3, nice: 2 } },
    { id: "customisable_agent_ui", category: "acd", label: "Customisable agent UI", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 2 } },
    { id: "ivr", category: "self_service", label: "IVR", ratings: { elasticcx: 4, avaya: 3, cisco: 3, five9: 3, genesys: 4, nice: 3 } },
    { id: "vir", category: "self_service", label: "Visual Interactive Response (VIR)", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 3, genesys: 3, nice: 2 } },
    { id: "process_flow_api_generator", category: "self_service", label: "Process flow & custom API generator tool", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "asr_tts_native", category: "self_service", label: "ASR/TTS native language support", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "drag_drop_ivr", category: "self_service", label: "Drag-and-drop IVR code generator", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "channel_hopping", category: "self_service", label: "Channel Hopping – seamless channel conversion", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "digital_channels", category: "self_service", label: "Digital channels", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 4, genesys: 4, nice: 3 } },
    { id: "add_custom_channels", category: "self_service", label: "Add custom channels", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "social_networks", category: "self_service", label: "Social networks", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "canned_reports", category: "reporting", label: "Canned reports", ratings: { elasticcx: 4, avaya: 3, cisco: 3, five9: 3, genesys: 3, nice: 3 } },
    { id: "activity_capture", category: "reporting", label: "100% activity capture", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 3 } },
    { id: "performance_quadrant", category: "reporting", label: "Performance Quadrant – best practices index", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 3 } },
    { id: "silent_monitor_coach_barge", category: "reporting", label: "Silent monitor, coach and barge", ratings: { elasticcx: 4, avaya: 3, cisco: 3, five9: 3, genesys: 3, nice: 3 } },
    { id: "two_channel_reporting", category: "reporting", label: "Two channel reporting", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "recording_retention", category: "reporting", label: "100% recording with customer retention times", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "omnichannel_scorecards", category: "reporting", label: "Built-in omnichannel scorecards", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 2, genesys: 3, nice: 3 } },
    { id: "diy_implementation", category: "admin", label: "DIY Implementation", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 3, genesys: 3, nice: 2 } },
    { id: "prebuilt_diy_templates", category: "admin", label: "Pre-built and DIY templates", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 3, genesys: 3, nice: 2 } },
    { id: "auto_provision_trial", category: "admin", label: "Auto provision free trial and sandboxes", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "universal_login", category: "admin", label: "Universal log in to multiple accounts", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "admin_tabs", category: "admin", label: "Admin tabs for multi-tasking", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
    { id: "create_your_own_apis", category: "admin", label: "Create your own APIs", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "public_cloud", category: "admin", label: "Public cloud deployment", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 4, genesys: 4, nice: 3 } },
    { id: "multi_cloud", category: "admin", label: "Multi-cloud redundancy", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "micro_services", category: "admin", label: "Micro-services", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "full_featured_api", category: "admin", label: "Full featured API services", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 3, genesys: 4, nice: 3 } },
    { id: "preview", category: "dialer", label: "Preview", ratings: { elasticcx: 4, avaya: 2, cisco: 1, five9: 4, genesys: 3, nice: 3 } },
    { id: "agentless", category: "dialer", label: "Agentless", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 4, genesys: 3, nice: 3 } },
    { id: "progressive", category: "dialer", label: "Progressive", ratings: { elasticcx: 4, avaya: 2, cisco: 1, five9: 4, genesys: 3, nice: 3 } },
    { id: "predictive", category: "dialer", label: "Predictive", ratings: { elasticcx: 4, avaya: 2, cisco: 1, five9: 4, genesys: 3, nice: 3 } },
    { id: "provision_numbers", category: "dialer", label: "Instantly provision phone numbers", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 3, genesys: 3, nice: 2 } },
    { id: "self_service_porting", category: "dialer", label: "Self-service porting", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 3, genesys: 3, nice: 2 } },
    { id: "main_integrations", category: "dialer", label: "Integration with main players", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 4, genesys: 4, nice: 3 } },
    { id: "ai_integration", category: "dialer", label: "AI integration for CX", ratings: { elasticcx: 4, avaya: 1, cisco: 2, five9: 3, genesys: 4, nice: 4 } },
    { id: "native_wfo", category: "dialer", label: "Native WFO integration", ratings: { elasticcx: 4, avaya: 2, cisco: 2, five9: 3, genesys: 3, nice: 4 } },
    { id: "new_integrations_5_days", category: "dialer", label: "New integrations in < 5 days", ratings: { elasticcx: 4, avaya: 1, cisco: 1, five9: 2, genesys: 3, nice: 2 } },
  ],
};

function CompetitiveMatrixHero({ onScrollToMatrix }) {
  return (
    <section className="ds-card matrix-hero">
      <div>
        <Badge tone="info">Competitive Intelligence Tool</Badge>
        <h1>Competitive Matrix</h1>
        <p className="matrix-hero-subtitle">Compare ElasticCX against major CCaaS vendors across routing, omnichannel, reporting, architecture, integrations and more.</p>
        <p>This tool helps reseller partners and sales teams understand where ElasticCX stands out and which strengths matter most in live opportunities.</p>
        <div className="matrix-hero-actions">
          <button className="ui-btn ui-btn--primary" onClick={onScrollToMatrix}>Explore matrix</button>
          <button className="ui-btn ui-btn--secondary">Open Sales Toolkit</button>
        </div>
      </div>
      <div className="matrix-hero-side">
        <div className="matrix-callout">
          <h4>ElasticCX Positioning</h4>
          <p>Business-user friendly, AI-powered, cloud-native CCaaS designed for rapid deployment and flexible orchestration.</p>
        </div>
        <div className="matrix-summary-tiles">
          {["Omnichannel Strength", "AI & Integration Readiness", "Cloud Architecture", "Admin & Deployment Simplicity"].map((tile) => <div key={tile} className="matrix-summary-tile">{tile}</div>)}
        </div>
      </div>
    </section>
  );
}

function MatrixControls({ categories, controls, onChange }) {
  return (
    <FilterBar className="matrix-controls">
      <input className="ui-field" placeholder="Search factors" value={controls.search} onChange={(e) => onChange({ search: e.target.value })} />
      <select className="ui-field" value={controls.category} onChange={(e) => onChange({ category: e.target.value })}>
        <option value="all">All categories</option>
        {categories.map((category) => <option key={category.id} value={category.id}>{category.label}</option>)}
      </select>
      <select className="ui-field" value={controls.view} onChange={(e) => onChange({ view: e.target.value })}>
        <option value="all">Show all rows</option>
        <option value="leaders">ElasticCX-leading rows</option>
        <option value="diff">Differentiators (advantage ≥ 2)</option>
      </select>
      <select className="ui-field" value={controls.sort} onChange={(e) => onChange({ sort: e.target.value })}>
        <option value="category">Sort: category</option>
        <option value="elastic_desc">Sort: ElasticCX score</option>
        <option value="advantage_desc">Sort: biggest ElasticCX advantage</option>
        <option value="alpha">Sort: alphabetical</option>
      </select>
      <label className="matrix-toggle"><input type="checkbox" checked={controls.compact} onChange={(e) => onChange({ compact: e.target.checked })} /> Compact mode</label>
    </FilterBar>
  );
}

function MatrixRowDetailDrawer({ row, categories, competitors, onClose }) {
  if (!row) return null;
  const category = categories.find((item) => item.id === row.category);
  return (
    <div className="matrix-drawer-overlay" onClick={onClose}>
      <aside className="matrix-drawer" onClick={(e) => e.stopPropagation()}>
        <button className="ui-btn ui-btn--ghost" onClick={onClose}>Close</button>
        <h3>{row.label}</h3>
        <p className="matrix-drawer-category">{category?.label}</p>
        <div className="matrix-drawer-ratings">{competitors.map((vendor) => <div key={vendor.id}><strong>{vendor.name}</strong><span>{"★".repeat(row.ratings[vendor.id])}{"☆".repeat(4 - row.ratings[vendor.id])}</span></div>)}</div>
        <div className="matrix-detail-copy">
          <h4>Why it matters</h4>
          <p>{row.label} supports service consistency and operational confidence when customers compare platform fit across channels, teams and growth plans.</p>
          <h4>Why it matters to partners</h4>
          <p>This factor helps partners qualify delivery complexity, define deployment scope and keep platform conversations grounded in commercial outcomes.</p>
          <h4>Partner positioning guidance</h4>
          <p>Position ElasticCX as a practical option for teams that need modern functionality without adding unnecessary admin overhead or fragmented tooling.</p>
        </div>
      </aside>
    </div>
  );
}

function CompetitiveMatrixPage() {
  const { competitors, matrixCategories, matrixRows } = COMPETITIVE_MATRIX_DATA;
  const [selectedRowId, setSelectedRowId] = React.useState(null);
  const [controls, setControls] = React.useState({ search: "", category: "all", view: "all", sort: "category", compact: false });
  const matrixRef = React.useRef(null);
  const sectionRefs = React.useRef({});

  const rowsWithMeta = React.useMemo(() => matrixRows.map((row) => {
    const others = competitors.filter((c) => c.id !== "elasticcx").map((c) => row.ratings[c.id]);
    const bestOther = Math.max(...others);
    const advantage = row.ratings.elasticcx - bestOther;
    const leads = row.ratings.elasticcx >= bestOther;
    return { ...row, advantage, leads };
  }), [competitors, matrixRows]);

  const filteredRows = React.useMemo(() => {
    let next = rowsWithMeta.filter((row) => row.label.toLowerCase().includes(controls.search.toLowerCase()));
    if (controls.category !== "all") next = next.filter((row) => row.category === controls.category);
    if (controls.view === "leaders") next = next.filter((row) => row.leads);
    if (controls.view === "diff") next = next.filter((row) => row.advantage >= 2);
    if (controls.sort === "elastic_desc") next = [...next].sort((a, b) => b.ratings.elasticcx - a.ratings.elasticcx || a.label.localeCompare(b.label));
    if (controls.sort === "advantage_desc") next = [...next].sort((a, b) => b.advantage - a.advantage || b.ratings.elasticcx - a.ratings.elasticcx);
    if (controls.sort === "alpha") next = [...next].sort((a, b) => a.label.localeCompare(b.label));
    if (controls.sort === "category") next = [...next].sort((a, b) => matrixCategories.findIndex((c) => c.id === a.category) - matrixCategories.findIndex((c) => c.id === b.category));
    return next;
  }, [controls, matrixCategories, rowsWithMeta]);

  const categorySummaries = React.useMemo(() => matrixCategories.map((category) => {
    const rows = matrixRows.filter((row) => row.category === category.id);
    const elasticAverage = rows.reduce((sum, row) => sum + row.ratings.elasticcx, 0) / rows.length;
    const bestCompetitorScore = Math.max(...competitors.filter((c) => c.id !== "elasticcx").map((c) => rows.reduce((sum, row) => sum + row.ratings[c.id], 0) / rows.length));
    const leaders = competitors.filter((c) => c.id !== "elasticcx").filter((c) => {
      const avg = rows.reduce((sum, row) => sum + row.ratings[c.id], 0) / rows.length;
      return Math.abs(avg - bestCompetitorScore) < 0.01;
    }).map((c) => c.name);
    const competitorAvg = competitors.filter((c) => c.id !== "elasticcx").reduce((sum, c) => sum + rows.reduce((acc, row) => acc + row.ratings[c.id], 0) / rows.length, 0) / (competitors.length - 1);
    return { ...category, elasticAverage, leaders, competitorAvg };
  }), [competitors, matrixCategories, matrixRows]);

  const selectedRow = filteredRows.find((row) => row.id === selectedRowId) || rowsWithMeta.find((row) => row.id === selectedRowId);

  return (
    <div className="competitive-matrix-page">
      <CompetitiveMatrixHero onScrollToMatrix={() => matrixRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })} />

      <section className="ds-section">
        <div className="matrix-vendor-strip">
          {competitors.map((vendor) => (
            <div key={vendor.id} className={`matrix-vendor-card ${vendor.home ? "home" : ""}`.trim()}>
              <span className="matrix-vendor-logo">{vendor.logo}</span>
              <strong>{vendor.name}</strong>
              <small>{vendor.descriptor}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="Why ElasticCX stands out" description="Built for partner conversations where credibility, speed and practical platform fit matter." />
        <div className="sample-grid-3">
          {["Strong omnichannel depth", "Business-user friendly administration", "Broad API and integration flexibility", "Strong AI/CX integration readiness", "Fast provisioning and deployment", "Balanced contact centre + PBX + admin experience"].map((item) => <div key={item} className="ds-card"><h4>{item}</h4><p>Use this as a concise value anchor when discussing platform fit, operational simplicity and growth readiness with prospects.</p></div>)}
        </div>
      </section>

      <section className="ds-section" ref={matrixRef}>
        <SectionHeader title="Competitive Matrix" description="Filter quickly and focus live conversations on the factors that matter most." />
        <MatrixControls categories={matrixCategories} controls={controls} onChange={(next) => setControls((prev) => ({ ...prev, ...next }))} />
        <div className="matrix-table-wrap">
          <table className={`matrix-table ${controls.compact ? "compact" : ""}`.trim()}>
            <thead>
              <tr>
                <th>Factor</th>
                {competitors.map((vendor) => <th key={vendor.id} className={vendor.home ? "elastic-col" : ""}>{vendor.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {matrixCategories.map((category) => {
                const rows = filteredRows.filter((row) => row.category === category.id);
                if (!rows.length) return null;
                return (
                  <React.Fragment key={category.id}>
                    <tr className="matrix-category-row" ref={(el) => { sectionRefs.current[category.id] = el; }}><td colSpan={7}>{category.label}</td></tr>
                    {rows.map((row) => (
                      <tr key={row.id} onClick={() => setSelectedRowId(row.id)}>
                        <td className="sticky-col"><div>{row.label}</div><span className={`matrix-advantage ${row.advantage > 0 ? "good" : ""}`}>Δ {row.advantage >= 0 ? `+${row.advantage}` : row.advantage}</span></td>
                        {competitors.map((vendor) => <td key={vendor.id} className={vendor.home ? "elastic-col" : ""}><span className={`matrix-rating-chip score-${row.ratings[vendor.id]}`}>{"★".repeat(row.ratings[vendor.id])}</span></td>)}
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="Category Performance Summary" description="Use these summaries to quickly frame strengths by conversation theme." />
        <div className="sample-grid-3">
          {categorySummaries.map((summary) => (
            <div className="ds-card" key={summary.id}>
              <h4>{summary.label}</h4>
              <p>ElasticCX avg score: <strong>{summary.elasticAverage.toFixed(1)}/4</strong></p>
              <p>Best competitor: <strong>{summary.leaders.join(", ") || "—"}</strong></p>
              <p>{summary.takeaway}</p>
              <button className="ui-btn ui-btn--secondary" onClick={() => sectionRefs.current[summary.id]?.scrollIntoView({ behavior: "smooth", block: "center" })}>View factors</button>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="ElasticCX vs competitor average by category" description="Visual view for quick deal strategy discussions." />
        <div className="matrix-bar-grid">
          {categorySummaries.map((summary) => (
            <div key={summary.id} className="ds-card">
              <h4>{summary.label}</h4>
              <div className="matrix-bars"><span>ElasticCX</span><div><i style={{ width: `${(summary.elasticAverage / 4) * 100}%` }} /></div><em>{summary.elasticAverage.toFixed(1)}</em></div>
              <div className="matrix-bars"><span>Comp avg</span><div><i className="avg" style={{ width: `${(summary.competitorAvg / 4) * 100}%` }} /></div><em>{summary.competitorAvg.toFixed(1)}</em></div>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <SectionHeader title="How to position ElasticCX in live opportunities" description="Use this as practical talk-track guidance in joint prospect and customer meetings." />
        <div className="sample-grid-3">
          <div className="ds-card"><h4>Best fit opportunities</h4><ul><li>Customers looking for modern cloud CX</li><li>Organisations balancing voice, digital and admin usability</li><li>Teams seeking rapid deployment with manageable complexity</li></ul></div>
          <div className="ds-card"><h4>Competitive strengths</h4><ul><li>Strong feature coverage across multiple categories</li><li>Broad practical platform balance</li><li>Cloud-native architecture and AI-ready positioning</li><li>Business-user control with flexibility</li></ul></div>
          <div className="ds-card"><h4>Questions to ask prospects</h4><ul><li>Are they trying to unify voice and digital?</li><li>Do they need easier administration?</li><li>Do they need API flexibility and faster integrations?</li><li>Are they planning AI-led growth without excessive complexity?</li></ul></div>
          <div className="ds-card"><h4>Watchouts / where to qualify carefully</h4><ul><li>Validate niche capabilities in detail where requirements are highly specialised.</li><li>Keep claims grounded in the matrix evidence.</li><li>Stay consultative and commercially credible.</li></ul></div>
        </div>
      </section>

      <section className="sample-cta ds-card ds-card--highlight">
        <h3>Use the matrix to shape stronger partner conversations</h3>
        <div className="sample-cta-actions">
          <button className="ui-btn ui-btn--primary">Open Sales Toolkit</button>
          <button className="ui-btn ui-btn--secondary">View Sample Customers</button>
        </div>
      </section>

      <MatrixRowDetailDrawer row={selectedRow} categories={matrixCategories} competitors={competitors} onClose={() => setSelectedRowId(null)} />
    </div>
  );
}

const JOURNEY_TOOL_STORAGE_KEY = "ipi-customer-journey-mapping-state-v1";
const JOURNEY_CHANNEL_OPTIONS = ["Voice", "Chat", "Email", "SMS", "Social", "Web", "App", "Video", "In-person", "Bot / Self-Service"];
const JOURNEY_PAIN_POINT_OPTIONS = [
  "Long wait times", "Repeated authentication", "Poor channel switching", "Lack of visibility", "Manual agent effort", "Low automation", "Inconsistent experience", "Weak reporting", "Payment friction", "Compliance risk", "Connectivity / performance issues", "Knowledge gaps", "Handover problems", "Low first-contact resolution",
];
const JOURNEY_SOLUTION_OPTIONS = ["ElasticCX CCaaS", "AI Insights", "AI Sidekick", "Cloud PCI", "ElasticCX UCaaS", "SD-WAN", "DesktopLive"];
const DEFAULT_JOURNEY_STAGE_NAMES = ["Awareness", "Contact", "Authentication", "Support Interaction", "Resolution", "Follow-up"];

function createJourneyStage(name = "New Stage") {
  return {
    id: `stage-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name,
    channel: "Web",
    touchpoint: "",
    customerGoal: "",
    internalTeam: "",
    experienceScore: 3,
    painPoints: [],
    frictionNotes: "",
    metrics: {
      averageWaitTime: "",
      averageHandleTime: "",
      resolutionRate: "",
      csat: "",
      dropRate: "",
      transferRate: "",
      containmentRate: "",
      paymentSuccessRate: "",
      otherKpi: "",
    },
    opportunities: [],
    automationNotes: "",
  };
}

function JourneyStageCard({ stage, index, total, onUpdate, onRemove, onMove, positive = false }) {
  const [showMetrics, setShowMetrics] = React.useState(false);
  const [showOpportunityForm, setShowOpportunityForm] = React.useState(false);
  const [draftOpportunity, setDraftOpportunity] = React.useState({ title: "", description: "", priority: "Medium", impact: "CX", solution: "ElasticCX CCaaS", notes: "" });

  const togglePainPoint = (painPoint) => {
    const next = stage.painPoints.includes(painPoint)
      ? stage.painPoints.filter((item) => item !== painPoint)
      : [...stage.painPoints, painPoint];
    onUpdate({ painPoints: next });
  };

  const addOpportunity = () => {
    if (!draftOpportunity.title.trim()) return;
    onUpdate({
      opportunities: [
        ...stage.opportunities,
        { id: `opp-${Date.now()}`, ...draftOpportunity, title: draftOpportunity.title.trim() },
      ],
    });
    setDraftOpportunity({ title: "", description: "", priority: "Medium", impact: "CX", solution: "ElasticCX CCaaS", notes: "" });
    setShowOpportunityForm(false);
  };

  const removeOpportunity = (opportunityId) => {
    onUpdate({ opportunities: stage.opportunities.filter((item) => item.id !== opportunityId) });
  };

  return (
    <div className={`journey-stage-card ${positive ? "is-positive" : ""}`}>
      <div className="journey-stage-card__header">
        <strong>Stage {index + 1}</strong>
        <div className="journey-stage-card__actions">
          <GhostButton disabled={index === 0} onClick={() => onMove(index, -1)}>←</GhostButton>
          <GhostButton disabled={index === total - 1} onClick={() => onMove(index, 1)}>→</GhostButton>
          <GhostButton onClick={() => onRemove(stage.id)}>Remove</GhostButton>
        </div>
      </div>

      <FormField value={stage.name} onChange={(e) => onUpdate({ name: e.target.value })} placeholder="Stage Name" />
      <FormField as="select" value={stage.channel} onChange={(e) => onUpdate({ channel: e.target.value })}>
        {JOURNEY_CHANNEL_OPTIONS.map((channel) => <option key={channel} value={channel}>{channel}</option>)}
      </FormField>
      <textarea className="ui-field" rows={2} value={stage.touchpoint} onChange={(e) => onUpdate({ touchpoint: e.target.value })} placeholder="Touchpoint description" />
      <input className="ui-field" value={stage.customerGoal} onChange={(e) => onUpdate({ customerGoal: e.target.value })} placeholder="Customer goal" />
      <input className="ui-field" value={stage.internalTeam} onChange={(e) => onUpdate({ internalTeam: e.target.value })} placeholder="Internal team involved" />
      <label className="journey-score-row">Current experience rating (1–5)
        <input type="range" min="1" max="5" value={stage.experienceScore} onChange={(e) => onUpdate({ experienceScore: Number(e.target.value) })} />
        <span>{stage.experienceScore}</span>
      </label>

      <div className="journey-chip-list">
        {JOURNEY_PAIN_POINT_OPTIONS.map((painPoint) => (
          <button type="button" key={painPoint} onClick={() => togglePainPoint(painPoint)} className={`journey-chip ${stage.painPoints.includes(painPoint) ? "is-active" : ""}`}>{painPoint}</button>
        ))}
      </div>
      <textarea className="ui-field" rows={2} value={stage.frictionNotes} onChange={(e) => onUpdate({ frictionNotes: e.target.value })} placeholder="Friction notes" />

      <div className="journey-stage-card__toggles">
        <SecondaryButton onClick={() => setShowMetrics((v) => !v)}>{showMetrics ? "Hide Metrics" : "Edit Metrics"}</SecondaryButton>
        <SecondaryButton onClick={() => setShowOpportunityForm((v) => !v)}>{showOpportunityForm ? "Hide Opportunity Form" : "Add Opportunity"}</SecondaryButton>
      </div>

      {showMetrics ? (
        <div className="journey-metrics-grid">
          <input className="ui-field" value={stage.metrics.averageWaitTime} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, averageWaitTime: e.target.value } })} placeholder="Average Wait Time" />
          <input className="ui-field" value={stage.metrics.averageHandleTime} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, averageHandleTime: e.target.value } })} placeholder="Average Handle Time" />
          <input className="ui-field" value={stage.metrics.resolutionRate} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, resolutionRate: e.target.value } })} placeholder="Resolution Rate" />
          <input className="ui-field" value={stage.metrics.csat} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, csat: e.target.value } })} placeholder="CSAT" />
          <input className="ui-field" value={stage.metrics.dropRate} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, dropRate: e.target.value } })} placeholder="Drop Rate" />
          <input className="ui-field" value={stage.metrics.transferRate} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, transferRate: e.target.value } })} placeholder="Transfer Rate" />
          <input className="ui-field" value={stage.metrics.containmentRate} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, containmentRate: e.target.value } })} placeholder="Containment Rate" />
          <input className="ui-field" value={stage.metrics.paymentSuccessRate} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, paymentSuccessRate: e.target.value } })} placeholder="Payment Success Rate" />
          <input className="ui-field" value={stage.metrics.otherKpi} onChange={(e) => onUpdate({ metrics: { ...stage.metrics, otherKpi: e.target.value } })} placeholder="Other KPI" />
        </div>
      ) : null}

      {showOpportunityForm ? (
        <div className="journey-opportunity-form">
          <input className="ui-field" placeholder="Opportunity title" value={draftOpportunity.title} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, title: e.target.value }))} />
          <textarea className="ui-field" rows={2} placeholder="Description" value={draftOpportunity.description} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, description: e.target.value }))} />
          <FormField as="select" value={draftOpportunity.priority} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, priority: e.target.value }))}>
            {[
              "Low", "Medium", "High",
            ].map((priority) => <option key={priority}>{priority}</option>)}
          </FormField>
          <FormField as="select" value={draftOpportunity.impact} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, impact: e.target.value }))}>
            {["CX", "Cost", "Productivity", "Compliance", "Revenue"].map((impact) => <option key={impact}>{impact}</option>)}
          </FormField>
          <FormField as="select" value={draftOpportunity.solution} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, solution: e.target.value }))}>
            {JOURNEY_SOLUTION_OPTIONS.map((solution) => <option key={solution}>{solution}</option>)}
          </FormField>
          <textarea className="ui-field" rows={2} placeholder="Notes" value={draftOpportunity.notes} onChange={(e) => setDraftOpportunity((prev) => ({ ...prev, notes: e.target.value }))} />
          <StandardButton onClick={addOpportunity}>Add Opportunity</StandardButton>
        </div>
      ) : null}

      {!!stage.opportunities.length && (
        <div className="journey-opportunity-list">
          {stage.opportunities.map((opportunity) => (
            <div className="journey-opportunity-item" key={opportunity.id}>
              <div>
                <strong>{opportunity.title}</strong>
                <p>{opportunity.description || "No description"}</p>
                <small>{opportunity.priority} priority · {opportunity.impact} · {opportunity.solution}</small>
              </div>
              <GhostButton onClick={() => removeOpportunity(opportunity.id)}>Remove</GhostButton>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function JourneyCanvas({ title, stages, setStages, positive = false }) {
  const updateStage = (stageId, updates) => {
    setStages((prev) => prev.map((stage) => (stage.id === stageId ? { ...stage, ...updates } : stage)));
  };

  const removeStage = (stageId) => {
    setStages((prev) => prev.filter((stage) => stage.id !== stageId));
  };

  const moveStage = (index, direction) => {
    setStages((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  return (
    <SectionWrapper>
      <SectionHeader title={title} description="Connected stages map channels, goals, friction, metrics, and improvement opportunities." />
      <div className="journey-canvas-scroll">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.id}>
            <JourneyStageCard
              stage={stage}
              index={index}
              total={stages.length}
              positive={positive}
              onUpdate={(updates) => updateStage(stage.id, updates)}
              onRemove={removeStage}
              onMove={moveStage}
            />
            {index < stages.length - 1 ? <div className="journey-connector">→</div> : null}
          </React.Fragment>
        ))}
      </div>
      <div style={{ marginTop: 12 }}>
        <SecondaryButton onClick={() => setStages((prev) => [...prev, createJourneyStage(`Stage ${prev.length + 1}`)])}>Add Stage</SecondaryButton>
      </div>
    </SectionWrapper>
  );
}

function CustomerJourneyMappingPage() {
  const builderRef = React.useRef(null);
  const [customerContext, setCustomerContext] = React.useState({ companyName: "", industry: "", journeyName: "", persona: "", serviceScenario: "", currentPlatform: "", notes: "" });
  const [currentJourneyStages, setCurrentJourneyStages] = React.useState(DEFAULT_JOURNEY_STAGE_NAMES.map((name) => createJourneyStage(name)));
  const [futureJourneyStages, setFutureJourneyStages] = React.useState([]);
  const [savedJourneys, setSavedJourneys] = React.useState([]);

  React.useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(JOURNEY_TOOL_STORAGE_KEY) || "{}");
      if (stored.customerContext) setCustomerContext(stored.customerContext);
      if (stored.currentJourneyStages?.length) setCurrentJourneyStages(stored.currentJourneyStages);
      if (stored.futureJourneyStages?.length) setFutureJourneyStages(stored.futureJourneyStages);
      if (stored.savedJourneys?.length) setSavedJourneys(stored.savedJourneys);
    } catch (error) {
      // no-op
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem(JOURNEY_TOOL_STORAGE_KEY, JSON.stringify({ customerContext, currentJourneyStages, futureJourneyStages, savedJourneys }));
  }, [customerContext, currentJourneyStages, futureJourneyStages, savedJourneys]);

  const allPainPoints = currentJourneyStages.reduce((total, stage) => total + stage.painPoints.length, 0);
  const allOpportunities = [...currentJourneyStages, ...futureJourneyStages].flatMap((stage) => stage.opportunities || []);
  const highestFrictionStages = currentJourneyStages
    .map((stage) => ({ name: stage.name, frictionScore: stage.painPoints.length + (5 - Number(stage.experienceScore || 3)) }))
    .sort((a, b) => b.frictionScore - a.frictionScore)
    .slice(0, 3)
    .filter((item) => item.frictionScore > 0);
  const highPriority = allOpportunities.filter((item) => item.priority === "High").map((item) => item.title).slice(0, 4);
  const solutionCounts = allOpportunities.reduce((acc, item) => {
    if (!item.solution) return acc;
    acc[item.solution] = (acc[item.solution] || 0) + 1;
    return acc;
  }, {});
  const suggestedSolutionStack = Object.entries(solutionCounts).sort((a, b) => b[1] - a[1]);

  const summaryText = `Customer Journey Summary\nCompany: ${customerContext.companyName || "Not set"}\nJourney: ${customerContext.journeyName || "Not set"}\nCurrent stages: ${currentJourneyStages.map((stage) => stage.name).join(" → ")}\nTop pain points: ${currentJourneyStages.flatMap((stage) => stage.painPoints).slice(0, 6).join(", ") || "None captured"}\nFuture improvements: ${futureJourneyStages.flatMap((stage) => stage.opportunities?.map((opp) => opp.title) || []).slice(0, 6).join(", ") || "None captured"}\nSuggested platform: ${suggestedSolutionStack.map(([solution]) => solution).join(", ") || "No mapping yet"}\nNext steps: Discovery workshop, Architecture review, Pilot / proof of concept, CX transformation roadmap, Partner account plan follow-up`;

  const saveJourneySnapshot = () => {
    const snapshot = {
      id: `journey-${Date.now()}`,
      label: customerContext.journeyName || `Journey ${savedJourneys.length + 1}`,
      savedAt: new Date().toISOString(),
      customerContext,
      currentJourneyStages,
      futureJourneyStages,
    };
    setSavedJourneys((prev) => [snapshot, ...prev].slice(0, 10));
  };

  const loadSavedJourney = (journeyId) => {
    const selected = savedJourneys.find((item) => item.id === journeyId);
    if (!selected) return;
    setCustomerContext(selected.customerContext);
    setCurrentJourneyStages(selected.currentJourneyStages);
    setFutureJourneyStages(selected.futureJourneyStages);
  };

  const exportJourney = () => {
    const payload = { customerContext, currentJourneyStages, futureJourneyStages, exportedAt: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${(customerContext.journeyName || "customer-journey").replace(/\s+/g, "-").toLowerCase()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="journey-mapping-page">
      <PageHeader title="Customer Journey Mapping" subtitle="Map the current customer journey, identify friction points, and design a better future-state experience." actions={<div style={{ display: "flex", gap: 8 }}><StandardButton onClick={() => builderRef.current?.scrollIntoView({ behavior: "smooth" })}>Start Mapping</StandardButton><SecondaryButton onClick={() => {
        setCustomerContext({ companyName: "Northbridge Retail", industry: "Retail", journeyName: "Returns and Support", persona: "Busy Omnichannel Shopper", serviceScenario: "Post-purchase support", currentPlatform: "Legacy PBX + Email Inbox", notes: "Priority focus on wait time and secure payment handling." });
        setCurrentJourneyStages(DEFAULT_JOURNEY_STAGE_NAMES.map((name) => createJourneyStage(name)));
      }}>View Example Journey</SecondaryButton></div>} />

      <SectionWrapper>
        <div className="journey-summary-cards">
          {["Current Journey View", "Friction Analysis", "Future-State Design", "Solution Mapping"].map((item) => <MetricCard key={item} label={item} value="Workshop-ready" />)}
        </div>
        <p className="journey-intro-copy">Use this tool to visualise stages, channels, pain points, metrics, and transformation opportunities across the end-to-end customer experience.</p>
      </SectionWrapper>

      <SectionWrapper className="journey-workshop-layout" ref={builderRef}>
        <div>
          <SectionHeader title="Customer Context" description="Set the business context before mapping the journey." />
          <div className="journey-context-grid ds-card ds-card--standard">
            <input className="ui-field" placeholder="Company Name" value={customerContext.companyName} onChange={(e) => setCustomerContext((prev) => ({ ...prev, companyName: e.target.value }))} />
            <input className="ui-field" placeholder="Industry" value={customerContext.industry} onChange={(e) => setCustomerContext((prev) => ({ ...prev, industry: e.target.value }))} />
            <input className="ui-field" placeholder="Journey Name" value={customerContext.journeyName} onChange={(e) => setCustomerContext((prev) => ({ ...prev, journeyName: e.target.value }))} />
            <input className="ui-field" placeholder="Primary Customer Type / Persona" value={customerContext.persona} onChange={(e) => setCustomerContext((prev) => ({ ...prev, persona: e.target.value }))} />
            <input className="ui-field" placeholder="Main Service Scenario" value={customerContext.serviceScenario} onChange={(e) => setCustomerContext((prev) => ({ ...prev, serviceScenario: e.target.value }))} />
            <input className="ui-field" placeholder="Current Platform / Environment" value={customerContext.currentPlatform} onChange={(e) => setCustomerContext((prev) => ({ ...prev, currentPlatform: e.target.value }))} />
            <textarea className="ui-field" rows={3} placeholder="Notes" value={customerContext.notes} onChange={(e) => setCustomerContext((prev) => ({ ...prev, notes: e.target.value }))} style={{ gridColumn: "1 / -1" }} />
          </div>
        </div>
        <aside className="journey-insights-panel ds-card ds-card--highlight">
          <h3>Journey Insights</h3>
          <ul>
            <li><strong>{currentJourneyStages.length}</strong> journey stages</li>
            <li><strong>{allPainPoints}</strong> pain points captured</li>
            <li><strong>{allOpportunities.length}</strong> opportunities identified</li>
            <li><strong>{highestFrictionStages.map((item) => item.name).join(", ") || "None yet"}</strong> highest-friction stages</li>
            <li><strong>{highPriority.join(", ") || "None yet"}</strong> highest-priority improvements</li>
            <li><strong>{suggestedSolutionStack.map(([solution]) => solution).join(", ") || "None yet"}</strong> suggested solution stack</li>
          </ul>
          {!!savedJourneys.length && (
            <FormField as="select" onChange={(e) => loadSavedJourney(e.target.value)} value="">
              <option value="">Load saved journey…</option>
              {savedJourneys.map((journey) => <option key={journey.id} value={journey.id}>{journey.label} · {new Date(journey.savedAt).toLocaleDateString()}</option>)}
            </FormField>
          )}
        </aside>
      </SectionWrapper>

      <JourneyCanvas title="Current-State Journey" stages={currentJourneyStages} setStages={setCurrentJourneyStages} />

      <SectionWrapper>
        <SectionHeader title="Future-State Journey" description="Redesign channel orchestration, automation, AI support, secure payments, and proactive follow-up." />
        <div style={{ marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <SecondaryButton onClick={() => setFutureJourneyStages(currentJourneyStages.map((stage) => ({ ...stage, id: `future-${stage.id}`, painPoints: [], frictionNotes: "", automationNotes: "Add automation and proactive CX actions" })))}>Copy Current Journey to Future-State</SecondaryButton>
        </div>
      </SectionWrapper>
      <JourneyCanvas title="Future-State Journey Canvas" stages={futureJourneyStages} setStages={setFutureJourneyStages} positive />

      <SectionWrapper>
        <SectionHeader title="Recommended IPI Solution Mapping" description="Technology recommendations based on identified stage opportunities." />
        <div className="journey-solution-grid">
          {(suggestedSolutionStack.length ? suggestedSolutionStack : JOURNEY_SOLUTION_OPTIONS.map((solution) => [solution, 0])).map(([solution, count]) => (
            <StandardCard key={solution} className="journey-solution-card">
              <h4>{solution}</h4>
              <p>{count ? `${count} mapped opportunities` : "Available for mapping"}</p>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Summary & Export" description="Generate a polished workshop summary and share next actions." />
        <StandardCard>
          <pre className="journey-summary-text">{summaryText}</pre>
          <div className="journey-export-actions">
            <StandardButton onClick={saveJourneySnapshot}>Save Journey</StandardButton>
            <SecondaryButton onClick={() => navigator.clipboard?.writeText(summaryText)}>Copy Summary</SecondaryButton>
            <SecondaryButton onClick={exportJourney}>Export Journey</SecondaryButton>
            <GhostButton onClick={() => window.alert("Added to account planning queue.")}>Send to Account Planning</GhostButton>
            <GhostButton onClick={() => window.alert("Opening CX Discovery Questionnaire workflow.")}>Open CX Discovery Questionnaire</GhostButton>
          </div>
        </StandardCard>
      </SectionWrapper>
    </div>
  );
}


const MARKET_VISION_DATA = {
  heroThemes: [
    { icon: "🌐", label: "Omnichannel Orchestration", value: "Journey continuity across voice and digital." },
    { icon: "🧠", label: "AI-Powered Insights", value: "Intelligence that improves every interaction." },
    { icon: "🔐", label: "Secure CX & Payments", value: "Embedded compliance and trusted transactions." },
    { icon: "☁️", label: "Cloud Communications & Connectivity", value: "Unified comms, UCaaS and resilient SD-WAN." },
  ],
  marketShiftCards: [
    { icon: "🔄", title: "Customers expect seamless omnichannel journeys", text: "Journeys now span channels, teams and moments. Platform orchestration is the new baseline." },
    { icon: "📈", title: "AI is turning every interaction into insight", text: "Conversations are a strategic data asset. Leading organisations operationalise insight at scale." },
    { icon: "⚡", title: "Employee productivity is now part of CX performance", text: "Agent experience, guidance and automation directly impact customer outcomes and economics." },
    { icon: "🛡️", title: "Security, compliance and connectivity are now core platform requirements", text: "Resilience and trust can no longer be bolted on. They must be designed into the platform." },
  ],
  platformPrinciples: [
    { icon: "🧭", title: "Orchestrate every channel" },
    { icon: "🔎", title: "Turn conversations into insight" },
    { icon: "🤝", title: "Empower agents with AI" },
    { icon: "💳", title: "Secure every payment interaction" },
    { icon: "📞", title: "Unify communications" },
    { icon: "🖥️", title: "Connect and support the modern workplace" },
  ],
  platformLayers: [
    { id: "channels", title: "Customer Channels", items: ["Voice", "Chat", "Email", "SMS", "Social", "Bots"], moduleId: "elasticcx-ccaas" },
    { id: "engagement", title: "CX & Engagement Platform", items: ["ElasticCX CCaaS", "Routing", "IVR", "Queue Management", "Callbacks", "Quality Management"], moduleId: "elasticcx-ccaas" },
    { id: "ai", title: "AI & Automation", items: ["AI Insights", "AI Sidekick", "Transcription", "Summaries", "Topic Detection", "Sentiment", "Score Assist", "Smart Wrap-Up"], moduleId: "ai-insights" },
    { id: "payments", title: "Secure Transactions", items: ["Cloud PCI", "Pauseable", "Pay by Link", "DTMF Suppression", "IVR Assist"], moduleId: "cloud-pci" },
    { id: "collaboration", title: "Collaboration", items: ["ElasticCX UCaaS", "Voice", "Mobile", "Collaboration", "Presence", "Reporting"], moduleId: "elasticcx-ucaas" },
    { id: "connectivity", title: "Connectivity & Infrastructure", items: ["SD-WAN", "Secure Cloud Connectivity", "Traffic Optimisation", "Remote Work Support"], moduleId: "sd-wan" },
    { id: "workplace", title: "Digital Workplace", items: ["DesktopLive", "Managed End User Services", "Microsoft 365", "Endpoint Security", "Service Desk"], moduleId: "desktoplive" },
  ],
  architectureModules: [
    {
      id: "elasticcx-ccaas",
      name: "ElasticCX CCaaS",
      description: "Flexible omnichannel contact centre platform with voice, digital and social channels, configurable APIs, cloud releases, scalability and managed services.",
      businessValue: "Accelerates CX modernisation while giving partners a scalable, services-led growth foundation.",
      keyCapabilities: ["Omnichannel routing", "Journey orchestration", "APIs & integrations", "Cloud release cadence"],
      useCases: ["Unify fragmented customer channels", "Scale seasonal demand without infrastructure friction"],
      relatedProducts: ["ElasticCX CCaaS", "ElasticCX UCaaS"],
    },
    {
      id: "ai-insights",
      name: "AI Insights",
      description: "Post-interaction intelligence including transcription, summarisation, topic detection, sentiment analysis and quality monitoring.",
      businessValue: "Turns interaction data into decision-ready intelligence for continuous CX improvement.",
      keyCapabilities: ["Transcription", "Summarisation", "Topic detection", "Sentiment analysis", "Score assist"],
      useCases: ["Detect service issues early", "Scale QA and coaching across more interactions"],
      relatedProducts: ["ECX AI Insights"],
    },
    {
      id: "ai-sidekick",
      name: "AI Sidekick",
      description: "Real-time agent assist with transcription, voicemail transcription, historical conversation insight and smart wrap-up.",
      businessValue: "Improves agent productivity in the moment while increasing consistency and quality.",
      keyCapabilities: ["Real-time guidance", "Smart wrap-up", "Historical context", "Voicemail transcription"],
      useCases: ["Reduce average handling time", "Support new agents during ramp-up"],
      relatedProducts: ["ECX AI Sidekick", "ECX AI Insights"],
    },
    {
      id: "cloud-pci",
      name: "Cloud PCI",
      description: "PCI DSS Level 1 payment security platform supporting pause/resume, pay by link, DTMF suppression and IVR payment journeys.",
      businessValue: "Protects customer trust and reduces compliance risk without disrupting service flow.",
      keyCapabilities: ["Pauseable", "Pay by link", "DTMF suppression", "IVR assist"],
      useCases: ["Take compliant payments in contact centres", "Reduce PCI scope and audit burden"],
      relatedProducts: ["Cloud PCI"],
    },
    {
      id: "elasticcx-ucaas",
      name: "ElasticCX UCaaS",
      description: "Cloud unified communications platform for voice, collaboration, analytics and flexible communications across devices.",
      businessValue: "Connects service, operations and leadership teams on one communication fabric.",
      keyCapabilities: ["Voice and mobile", "Collaboration tools", "Presence", "Reporting and analytics"],
      useCases: ["Enable hybrid teams", "Improve cross-functional response times"],
      relatedProducts: ["ElasticCX UCaaS"],
    },
    {
      id: "sd-wan",
      name: "SD-WAN",
      description: "Secure, resilient connectivity layer with centralised management, traffic optimisation, performance improvement and remote work support.",
      businessValue: "Delivers stable, high-quality experiences across sites, branches and remote teams.",
      keyCapabilities: ["Central policy control", "Traffic optimisation", "Performance visibility", "Remote user support"],
      useCases: ["Prioritise CX traffic", "Support distributed workforces securely"],
      relatedProducts: ["SD-WAN Services"],
    },
    {
      id: "desktoplive",
      name: "DesktopLive",
      description: "Managed digital workplace platform delivering Microsoft 365 services, endpoint security, service desk, support and productivity tooling.",
      businessValue: "Extends CX value into employee experience with secure, managed workplace operations.",
      keyCapabilities: ["Microsoft 365 management", "Endpoint security", "Service desk", "Remote support"],
      useCases: ["Standardise employee tooling", "Improve workplace uptime and user productivity"],
      relatedProducts: ["DesktopLive"],
    },
  ],
  aiCapabilities: [
    { icon: "📝", title: "Transcription", description: "Capture every interaction accurately to improve compliance, searchability and service quality.", why: "Creates reliable interaction intelligence at scale." },
    { icon: "📚", title: "Summarisation", description: "Reduce admin time and accelerate hand-offs with concise AI-generated summaries.", why: "Returns agent capacity to high-value conversations." },
    { icon: "🧩", title: "Topic Detection", description: "Identify emerging themes, customer pain points and training opportunities.", why: "Helps teams act on trends before they escalate." },
    { icon: "💡", title: "Sentiment Analysis", description: "Understand emotional tone over time and improve service strategy.", why: "Improves quality, retention and brand trust." },
    { icon: "✅", title: "Score Assist", description: "Scale QA across more interactions with automated scoring support.", why: "Makes quality programs more consistent and efficient." },
    { icon: "⚙️", title: "Smart Wrap-Up", description: "Reduce after-call work and improve consistency with AI-generated wrap-up recommendations.", why: "Lowers admin friction and improves record quality." },
    { icon: "🎧", title: "Real-Time Agent Assist", description: "Help agents stay focused with live information during conversations.", why: "Improves first-contact outcomes and confidence." },
    { icon: "🕰️", title: "Historical Conversation Insight", description: "Give agents context from previous interactions across channels.", why: "Supports faster and more personalised service." },
  ],
  valueCards: [
    "Better customer journeys",
    "Faster agent productivity",
    "Lower cost to serve",
    "Stronger security and compliance",
    "More flexible cloud operations",
    "Scalable modern workplace support",
  ],
};

function MarketVisionPage({ onNavigate }) {
  const [activeModuleId, setActiveModuleId] = React.useState("elasticcx-ccaas");
  const activeModule = React.useMemo(
    () => MARKET_VISION_DATA.architectureModules.find((module) => module.id === activeModuleId) || MARKET_VISION_DATA.architectureModules[0],
    [activeModuleId],
  );

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page-shell market-vision-page">
      <SectionWrapper className="market-hero">
        <div className="market-hero__panel ds-card ds-card--highlight">
          <p className="market-chip">Overview</p>
          <h1>Our Vision</h1>
          <p className="market-hero__subtitle">The future of customer experience is platform-led, AI-enabled and built for seamless orchestration across every interaction.</p>
          <p className="market-hero__copy">IPI delivers an integrated CX platform that combines communication, intelligence, security and connectivity to help organisations deliver exceptional customer and employee experiences. We are building a complete CX ecosystem combining contact centre, communications, AI, security, connectivity and workplace services.</p>
          <div className="market-hero__actions">
            <StandardButton onClick={() => scrollToId("market-architecture-explorer")}>Explore Architecture</StandardButton>
            <SecondaryButton onClick={() => scrollToId("market-ai-capabilities")}>View AI Capabilities</SecondaryButton>
          </div>
        </div>
        <div className="market-hero__tiles">
          {MARKET_VISION_DATA.heroThemes.map((item) => (
            <StandardCard className="market-theme-card" key={item.label}>
              <span>{item.icon}</span>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Why the market is moving from contact centres to CX platforms" />
        <div className="market-shift-grid">
          {MARKET_VISION_DATA.marketShiftCards.map((card) => (
            <StandardCard className="market-shift-card" key={card.title}>
              <div className="market-shift-card__title"><span>{card.icon}</span><h3>{card.title}</h3></div>
              <p>{card.text}</p>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="The IPI CX Platform Vision" description="IPI combines customer engagement, AI, security, communications, connectivity and managed workplace capabilities into a single integrated platform approach." />
        <div className="market-principles-grid">
          {MARKET_VISION_DATA.platformPrinciples.map((principle) => (
            <StandardCard className="market-principle-card" key={principle.title}>
              <span>{principle.icon}</span>
              <p>{principle.title}</p>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="market-architecture-explorer">
        <SectionHeader title="Integrated platform architecture" description="A layered architecture connecting channels, engagement, intelligence, security, communications, connectivity and workplace services." />
        <div className="market-layer-stack">
          {MARKET_VISION_DATA.platformLayers.map((layer, index) => (
            <button
              key={layer.id}
              type="button"
              className={`market-layer ${activeModuleId === layer.moduleId ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.08}s` }}
              onClick={() => setActiveModuleId(layer.moduleId)}
            >
              <div className="market-layer__title">{layer.title}</div>
              <div className="market-layer__items">{layer.items.map((item) => <span key={item}>{item}</span>)}</div>
            </button>
          ))}
        </div>

        <div className="market-explorer" id="market-explorer-panel">
          <div className="market-explorer__list ds-card ds-card--standard">
            <h3>Architecture Explorer</h3>
            {MARKET_VISION_DATA.architectureModules.map((module) => (
              <button key={module.id} type="button" className={`market-explorer__item ${activeModuleId === module.id ? "active" : ""}`} onClick={() => setActiveModuleId(module.id)}>
                {module.name}
              </button>
            ))}
          </div>
          <div className="market-explorer__detail ds-card ds-card--highlight">
            <h3>{activeModule.name}</h3>
            <p>{activeModule.description}</p>
            <div><strong>Business value:</strong> {activeModule.businessValue}</div>
            <div><strong>Key capabilities:</strong> {activeModule.keyCapabilities.join(" • ")}</div>
            <div><strong>Example use cases:</strong> {activeModule.useCases.join(" • ")}</div>
            <div><strong>Related products:</strong> {activeModule.relatedProducts.join(" • ")}</div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="market-ai-capabilities">
        <SectionHeader title="AI capabilities built into the platform" />
        <div className="market-ai-grid">
          {MARKET_VISION_DATA.aiCapabilities.map((ai) => (
            <StandardCard className="market-ai-card" key={ai.title}>
              <div className="market-ai-card__icon">{ai.icon}</div>
              <h3>{ai.title}</h3>
              <p>{ai.description}</p>
              <small>Why it matters: {ai.why}</small>
            </StandardCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <SectionHeader title="Why this platform model matters" />
        <div className="market-value-grid">
          {MARKET_VISION_DATA.valueCards.map((value) => <StandardCard className="market-value-card" key={value}>{value}</StandardCard>)}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="market-cta ds-card ds-card--highlight">
          <div>
            <h3>Build a partner-led CX growth story with IPI</h3>
            <p>Combine platform innovation, AI, security and communications to create differentiated customer solutions.</p>
          </div>
          <div className="market-cta__actions">
            <StandardButton onClick={() => onNavigate?.("sample-customers")}>Explore Sample Customers</StandardButton>
            <SecondaryButton onClick={() => onNavigate?.("channel-marketing")}>Open Sales Toolkit</SecondaryButton>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// SIDEBAR NAV WRAPPER
// ═══════════════════════════════════════════════════════
const NAV_SECTIONS = [
  {
    key: "overview",
    title: "Overview",
    items: [
      { id: "main", icon: <NavIcon name="sparkles" />, label: "Why IPI" },
      { id: "market-vision", icon: <NavIcon name="layers" />, label: "Our Vision" },
    ],
  },
  {
    key: "proposition",
    title: "Partners",
    items: [
      { id: "bse", icon: <NavIcon name="trending" />, label: "Enable, Land, Expand" },
      { id: "hub", icon: <NavIcon name="layers" />, label: "Partner Tiers" },
      { id: "sample-customers", icon: <NavIcon name="users" />, label: "Sample Customers" },
    ],
  },
  {
    key: "governance",
    title: "Governance",
    items: [
      { id: "program", icon: <NavIcon name="badge" />, label: "Ideal Partner Profile" },
      { id: "commercial", icon: <NavIcon name="scale" />, label: "Legal" },
      { id: "partner-trust", icon: <NavIcon name="shield" />, label: "Trust" },
      { id: "partner-operational-support", icon: <NavIcon name="cap" />, label: "Enablement" },
      { id: "channel-marketing", icon: <NavIcon name="megaphone" />, label: "Marketing" },
      { id: "channel-dashboard", icon: <NavIcon name="chart" />, label: "KPI & Cadence" },
    ],
  },
  {
    key: "tools",
    title: "Tools",
    items: [
      { id: "customer-journey-mapping", icon: <NavIcon name="layers" />, label: "Customer Journey Mapping" },
      { id: "prospect", icon: <NavIcon name="search" />, label: "Prospect Search" },
      { id: "competitive-matrix", icon: <NavIcon name="chart" />, label: "Competitive Matrix" },
      { id: "partner-account-plan", icon: <NavIcon name="checklist" />, label: "Account Planning" },
      { id: "governance", icon: <NavIcon name="badge" />, label: "Governance RACI" },
      { id: "cx-discovery", icon: <NavIcon name="lightbulb" />, label: "CX Discovery Questionnaire" },
    ],
  },
];

const NAV_ITEMS = NAV_SECTIONS.flatMap((section) => section.items);
const APP_VERSION_INFO = {
  version: "1.0.0",
  build: "2026.03.13",
};

const GH_PAGES_BASENAME = "/IPIPartnerAdvantage";

const PAGE_PATHS = {
  main: "/",
  bse: "/build-sell-expand",
  hub: "/partner-enablement",
  program: "/partner-program",
  governance: "/governance-raci",
  commercial: "/commercial-framework",
  "channel-marketing": "/channel-marketing",
  "partner-trust": "/partner-trust",
  "partner-operational-support": "/partner-operational-support",
  "channel-dashboard": "/channel-manager-dashboard",
  "partner-account-plan": "/partner-account-plan-tool",
  "customer-journey-mapping": "/customer-journey-mapping",
  "competitive-matrix": "/competitive-matrix",
  prospect: "/partner-prospect-tool",
  "sample-customers": "/sample-customers",
  "market-vision": "/market-vision",
  "cx-discovery": "/cx-discovery-questionnaire",
  "competitive-matrix": "/competitive-matrix",
};

const PATH_TO_PAGE = Object.fromEntries(
  Object.entries(PAGE_PATHS).map(([page, path]) => [path, page]),
);

function toBaseRelativePath(pathname) {
  if (!pathname) return "/";
  if (pathname === GH_PAGES_BASENAME) return "/";
  if (pathname.startsWith(`${GH_PAGES_BASENAME}/`)) {
    const stripped = pathname.slice(GH_PAGES_BASENAME.length);
    return stripped || "/";
  }
  return pathname;
}

function withBase(pathname) {
  const normalized = pathname === "/" ? "" : pathname;
  return `${GH_PAGES_BASENAME}${normalized}`;
}

function SideNav({ page, setPage, onLayoutChange, navSections = NAV_SECTIONS }) {
  const SIDEBAR_WIDTH = 250;
  const COMPACT_SIDEBAR_WIDTH = 86;
  const [openSections, setOpenSections] = React.useState(() => {
    try {
      const saved = window.localStorage.getItem("ipi-sidebar-open-sections");
      if (saved) return JSON.parse(saved);
    } catch (error) {
      // no-op
    }
    return { overview: true, proposition: true, governance: true, tools: true };
  });
  const [isCompact, setIsCompact] = React.useState(() => {
    try {
      return window.localStorage.getItem("ipi-sidebar-compact") === "true";
    } catch (error) {
      return false;
    }
  });

  React.useEffect(() => {
    const activeSection = navSections.find((section) => section.items.some((item) => item.id === page));
    if (!activeSection) return;
    setOpenSections((prev) => {
      if (prev[activeSection.key] !== false) return prev;
      return { ...prev, [activeSection.key]: true };
    });
  }, [navSections, page]);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  React.useEffect(() => {
    try {
      window.localStorage.setItem("ipi-sidebar-open-sections", JSON.stringify(openSections));
    } catch (error) {
      // no-op
    }
  }, [openSections]);

  React.useEffect(() => {
    try {
      window.localStorage.setItem("ipi-sidebar-compact", String(isCompact));
    } catch (error) {
      // no-op
    }
  }, [isCompact]);

  React.useEffect(() => {
    const width = isCompact ? COMPACT_SIDEBAR_WIDTH : SIDEBAR_WIDTH;
    document.documentElement.style.setProperty("--sidebar-width", `${width}px`);
    onLayoutChange?.({
      isMobile: false,
      isSidebarPinned: true,
      isCollapsed: isCompact,
      isSidebarVisible: true,
      sidebarWidth: width,
    });
    return () => {
      document.documentElement.style.removeProperty("--sidebar-width");
    };
  }, [isCompact, onLayoutChange]);

  return (
    <React.Fragment>
      <aside className={`app-sidebar ${isCompact ? "is-compact" : ""}`}>
        <div className="sidebar-inner">
          <div className="sidebar-top">
            <div className="sidebar-brand">
              <div className="sidebar-brand-mark">IPI</div>
              <div className="sidebar-brand-copy">
                <div className="sidebar-title">Partner Advantage</div>
                <div className="sidebar-subtitle">Channel Workspace</div>
              </div>
            </div>
            <button
              type="button"
              className="sidebar-collapse-toggle"
              onClick={() => setIsCompact((prev) => !prev)}
              aria-label={isCompact ? "Expand sidebar" : "Collapse sidebar"}
              title={isCompact ? "Expand sidebar" : "Collapse sidebar"}
            >
              <span>{isCompact ? "Expand menu" : "Compact menu"}</span>
              <span className={`nav-group-chevron ${isCompact ? "" : "open"}`} aria-hidden="true">
                <NavIcon name="chevronDown" />
              </span>
            </button>
          </div>

          <div className="sidebar-nav-scroll">
            <nav className="sidebar-nav">
              {navSections.map((section, sectionIndex) => {
                const isOpen = openSections[section.key] ?? true;
                return (
                  <React.Fragment key={section.key}>
                    <div className="nav-group">
                      <button
                        type="button"
                        className="nav-group-toggle"
                        aria-expanded={isOpen}
                        onClick={() => toggleSection(section.key)}
                        title={isCompact ? section.title : ""}
                      >
                        <span>{section.title}</span>
                        <span className={`nav-group-chevron ${isOpen ? "open" : ""}`} aria-hidden="true">
                          <NavIcon name="chevronDown" />
                        </span>
                      </button>
                      {isOpen && (
                        <div className="nav-group-items">
                          {section.items.map((item) => {
                            const active = page === item.id;
                            return (
                              <SidebarNavItem
                                key={item.id}
                                item={item}
                                active={active}
                                collapsed={isCompact}
                                onClick={() => {
                                  setPage(item.id);
                                }}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>
                    {sectionIndex < navSections.length - 1 ? <div className="section-divider" aria-hidden="true" /> : null}
                  </React.Fragment>
                );
              })}
            </nav>
          </div>

          <div className="sidebar-footer">
            <div className="sidebar-footer-card">
              <div className="sidebar-footer-title">Channel Workspace</div>
              <div className="sidebar-footer-copy">
                Strategy, governance, enablement and partner planning in one place.
              </div>
            </div>
            <div className="sidebar-footer-meta">© 2026 IP Integration Ltd · Partner Confidential</div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════
function App() {
  const navSections = React.useMemo(() => NAV_SECTIONS, []);
  const allPageIds = React.useMemo(() => navSections.flatMap((section) => section.items.map((item) => item.id)), [navSections]);
  const [hiddenPageIds, setHiddenPageIds] = React.useState(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem("ipi-hidden-pages") || "[]");
      return new Set(Array.isArray(saved) ? saved : []);
    } catch (error) {
      return new Set();
    }
  });
  const [page, setPage] = React.useState(() => {
    const relativePath = toBaseRelativePath(window.location.pathname);
    return PATH_TO_PAGE[relativePath] || "main";
  });
  const [sidebarLayout, setSidebarLayout] = React.useState({
    isMobile: false,
    isSidebarPinned: true,
    isCollapsed: false,
    isSidebarVisible: true,
    sidebarWidth: 250,
  });

  function PageShell({ children, className = "" }) {
    return (
      <div className={`page-shell ${className}`.trim()}>
        {children}
      </div>
    );
  }

  const togglePageVisibility = React.useCallback((pageId) => {
    setHiddenPageIds((prev) => {
      const next = new Set(prev);
      if (next.has(pageId)) {
        next.delete(pageId);
        return next;
      }
      const visibleCount = allPageIds.filter((id) => !next.has(id)).length;
      if (visibleCount <= 1) return prev;
      next.add(pageId);
      return next;
    });
  }, [allPageIds]);

  const visibleNavSections = React.useMemo(
    () => navSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => !hiddenPageIds.has(item.id)),
      }))
      .filter((section) => section.items.length > 0),
    [hiddenPageIds, navSections],
  );

  React.useEffect(() => {
    try {
      window.localStorage.setItem("ipi-hidden-pages", JSON.stringify(Array.from(hiddenPageIds)));
    } catch (error) {
      // no-op
    }
  }, [hiddenPageIds]);

  React.useEffect(() => {
    if (!hiddenPageIds.has(page)) return;
    const firstVisiblePage = allPageIds.find((id) => !hiddenPageIds.has(id)) || "main";
    setPage(firstVisiblePage);
  }, [allPageIds, hiddenPageIds, page]);

  function renderPage() {
    if (page === "channel-dashboard") return <ChannelManagerDashboardPage />;
    if (page === "customer-journey-mapping") return <CustomerJourneyMappingPage />;
    if (page === "partner-account-plan") return <PartnerAccountPlanToolPage />;
    if (page === "competitive-matrix") return <CompetitiveMatrixPage />;
    if (page === "cx-discovery") return <CXDiscoveryQuestionnairePage onNavigate={setPage} />;
    if (page === "hub")
      return (
        <EnablementHub onBack={() => setPage("main")} onNavigate={setPage} />
      );
    if (page === "prospect") return <ProspectToolPage />;
    if (page === "market-vision") return <MarketVisionPage onNavigate={setPage} />;
    if (page === "bse") return <BuildSellExpand />;
    if (page === "program") return <PartnerProgramPage />;
    if (page === "commercial") return <CommercialFrameworkPage />;
    if (page === "channel-marketing") return <ChannelMarketingPage />;
    if (page === "sample-customers") return <SampleCustomersPage />;
    if (page === "partner-trust") return <PartnerTrustPage />;
    if (page === "partner-operational-support")
      return <PartnerOperationalSupportPage />;
    if (page === "governance") return <GovernancePage />;
    if (page === "competitive-matrix") return <CompetitiveMatrixPage />;

    // Page 1 — Home
    return (
      <React.Fragment>
        <Bg />
        <div
          className="home-page-shell"
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* ── PAGE TITLE / HERO HEADING ── */}
          <div
            className="fade-up"
            style={{
              textAlign: "center",
              padding: "22px 40px 0",
              animationDelay: "0.1s",
              paddingLeft: "calc(40px + 0px)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(32px,5.5vw,68px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                lineHeight: 1.02,
                marginBottom: 14,
                fontFamily: "'Syne',sans-serif",
              }}
            >
              IPI Partner{" "}
              <span
                style={{
                  color: "#36C6FF",
                  textShadow: "0 0 40px rgba(54,198,255,0.65)",
                }}
              >
                Advantage
              </span>
            </h1>
            <p
              style={{
                fontSize: 15,
                fontWeight: 500,
                color: "#8EA6BF",
                maxWidth: "none",
                margin: "0",
                lineHeight: 1.78,
              }}
            >
              Enabling our Partners to deliver Exceptional Customer Contact
              through IP Integration's platform, services and expertise.
            </p>
          </div>

          {/* ── CHANNEL PHILOSOPHY ── */}
          <div className="fade-up" style={{ animationDelay: "0.12s" }}>
            <section
              style={{
                maxWidth: "none",
                margin: "36px auto 0",
                padding: "0 44px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    height: 1,
                    flex: 1,
                    background:
                      "linear-gradient(90deg,transparent,rgba(54,198,255,0.35))",
                  }}
                />
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: "#67D8FF",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    whiteSpace: "normal",
                  }}
                >
                  Our Channel Philosophy
                </div>
                <div
                  style={{
                    height: 1,
                    flex: 1,
                    background:
                      "linear-gradient(90deg,rgba(54,198,255,0.35),transparent)",
                  }}
                />
              </div>
              <div style={{ textAlign: "center", marginBottom: 28 }}>
                <p
                  style={{
                    fontSize: 13.5,
                    color: "#8EA6BF",
                    maxWidth: "none",
                    margin: "0",
                    lineHeight: 1.75,
                  }}
                >
                  Four principles that define how IPI works with its partner
                  ecosystem — and what makes us different to work with.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
                  gap: 18,
                }}
              >
                {PHILOSOPHY.map((p, i) => (
                  <div
                    key={i}
                    className="phil-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      padding: "24px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(54,198,255,0.15)",
                      borderRadius: 16,
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 13,
                        background: "rgba(54,198,255,0.12)",
                        border: "1px solid rgba(54,198,255,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: "#EAF5FF",
                        lineHeight: 1.3,
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#7E97B4",
                        lineHeight: 1.7,
                      }}
                    >
                      {p.desc}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* ── PLATFORM STACK ── */}
          <div className="fade-up" style={{ animationDelay: "0.15s" }}>
            <PlatformStack />
          </div>

          {/* ── CTA ── */}
          <div
            className="fade-up"
            style={{ padding: "48px 44px 52px", animationDelay: "0.46s" }}
          >
            <div className="brand-line" style={{ marginBottom: 34 }} />
            <div
              style={{
                maxWidth: "none",
                margin: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 28,
              }}
            >
              <div style={{ maxWidth: "none" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "rgba(54,198,255,0.6)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  IPI Partner Advantage
                </div>
                <h2
                  style={{
                    fontSize: "clamp(20px,2.6vw,30px)",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    letterSpacing: "-0.03em",
                    marginBottom: 10,
                    lineHeight: 1.15,
                    fontFamily: "'Syne',sans-serif",
                  }}
                >
                  One platform.{" "}
                  <span style={{ color: "#36C6FF" }}>
                    Multiple revenue opportunities.
                  </span>
                </h2>
                <p
                  style={{ fontSize: 13.5, color: "#8EA6BF", lineHeight: 1.82 }}
                >
                  Start with a single module and grow. Each IPI solution stands
                  alone — or connects into a complete, unified customer contact
                  platform your customers won't want to leave.
                </p>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  className="btn-p"
                  onClick={() => setPage("hub")}
                  style={{
                    fontFamily: "'Nunito Sans',sans-serif",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Partner Enablement Hub →
                </button>
                <button
                  className="btn-s"
                  style={{
                    fontFamily: "'Nunito Sans',sans-serif",
                    cursor: "pointer",
                  }}
                >
                  Download Partner Pack
                </button>
              </div>
            </div>
            <div className="brand-line" style={{ marginTop: 34 }} />
            <p
              style={{
                textAlign: "center",
                marginTop: 16,
                fontSize: 10,
                color: "rgba(54,198,255,0.26)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              © 2026 IP Integration Ltd · IPI Partner Advantage · Partner
              Confidential
            </p>
          </div>
        </div>
        <style>{`
          @keyframes liveDot{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.3;transform:scale(0.7);}}
          @keyframes hubPulse{0%,100%{filter:drop-shadow(0 0 12px rgba(54,198,255,0.4));}50%{filter:drop-shadow(0 0 30px rgba(54,198,255,0.7));}}
          @keyframes shimmer{0%{opacity:0.5}50%{opacity:1}100%{opacity:0.5}}
        `}</style>
      </React.Fragment>
    );
  }

  React.useEffect(() => {
    if (!window.location.protocol.startsWith("http")) return;
    const nextPath = PAGE_PATHS[page] || "/";
    const nextFullPath = withBase(nextPath);
    if (window.location.pathname !== nextFullPath) {
      window.history.replaceState({}, "", nextFullPath);
    }
  }, [page]);

  React.useEffect(() => {
    const mainContent = document.querySelector(".app-main");
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: "auto" });
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page]);

  React.useEffect(() => {
    const onPopState = () => {
      const relativePath = toBaseRelativePath(window.location.pathname);
      setPage(PATH_TO_PAGE[relativePath] || "main");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const currentPageMeta = NAV_ITEMS.find((item) => item.id === page) || NAV_ITEMS[0];
  const currentSectionMeta = navSections.find((section) => section.items.some((item) => item.id === page));

  return (
    <AppShell
      sidebar={<SharedSidebar page={page} setPage={setPage} onLayoutChange={setSidebarLayout} navSections={visibleNavSections} />}
      topbar={<AppTopBar title={currentPageMeta?.label || "Dashboard"} sectionTitle={currentSectionMeta?.title || "Overview"} navSections={navSections} hiddenPageIds={hiddenPageIds} onTogglePageVisibility={togglePageVisibility} versionInfo={APP_VERSION_INFO} />}
    >
      <div
        className="app-main-inner with-sidebar page-content"
      >
        <PageShell key={page} className="page-fade">{renderPage()}</PageShell>
      </div>
    </AppShell>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App),
);
