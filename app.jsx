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

function SectionWrapper({ children, className = "" }) {
  return <section className={`ds-section ${className}`.trim()}>{children}</section>;
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
    >
      <span className="sidebar-nav-icon">{item.icon}</span>
      {!collapsed && (
        <span className="sidebar-nav-text">
          <span className="sidebar-nav-label">{item.label}</span>
          <span className="sidebar-nav-sublabel">{item.sublabel}</span>
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
    search: "M11 4a7 7 0 105.1 11.8l4 4 1.4-1.4-4-4A7 7 0 0011 4z",
    checklist: "M4 6h2l1 2 3-4M11 7h9M4 12h2l1 2 3-4M11 13h9M4 18h2l1 2 3-4M11 19h9",
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
  const [mode, setMode] = React.useState(() => window.appTheme?.getMode?.() || "system");

  React.useEffect(() => {
    const sync = (event) => {
      if (event?.detail?.mode) setMode(event.detail.mode);
      else setMode(window.appTheme?.getMode?.() || "system");
    };
    window.addEventListener("ipi-theme-change", sync);
    return () => window.removeEventListener("ipi-theme-change", sync);
  }, []);

  const changeTheme = (next) => {
    setMode(next);
    window.appTheme?.setMode?.(next);
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Theme selection">
      {["light", "dark", "system"].map((option) => (
        <button
          key={option}
          type="button"
          className={`theme-toggle__btn ${mode === option ? "is-active" : ""}`}
          onClick={() => changeTheme(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

function AppTopBar({ title }) {
  return (
    <header className="app-topbar">
      <div>
        <div className="app-topbar__eyebrow">IPI Partner Advantage</div>
        <div className="app-topbar__title">{title}</div>
      </div>
      <ThemeToggle />
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
                    color: "#fff",
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
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>
              ›
            </span>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "rgba(255,255,255,0.6)",
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
                      color: "#fff",
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
                  color: "#8aaaa0",
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
                <p style={{ fontSize: 13, color: "#8aaaa0", lineHeight: 1.8 }}>
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
            <strong style={{ color: "#fff" }}>{productName}</strong>.
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
            color: "rgba(255,255,255,0.5)",
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
              color: "#fff",
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
          {p.url && (
            <a
              href={p.url}
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
    id: "payments",
    label: "Compliance",
    sublabel: "Embedded compliance layer",
    icon: "🔐",
    color: "#C0887B",
    glow: "255,154,108",
    bg: "linear-gradient(135deg,rgba(255,154,108,0.18),rgba(255,154,108,0.07))",
    border: "rgba(255,154,108,0.45)",
    items: ["Pauseable", "PCI Cloud (DTMF Suppression)", "Digital Pay by Link"],
    desc: "Secure payment add-ons that protect cardholder data and support PCI-DSS compliance without disrupting the live customer conversation.",
    span: "full",
  },
  {
    id: "ai",
    label: "AI & Automation",
    sublabel: "Intelligence and optimisation layer",
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
    span: "full",
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
            const hasDetail = !!PRODUCT_DATA[item];
            return (
              <span
                key={item}
                className="stack-pill"
                onClick={
                  hasDetail
                    ? (e) => {
                        e.stopPropagation();
                        onProduct && onProduct(item);
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
              color: "#fff",
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

          {STACK_LAYERS.map((layer, index) => (
            <React.Fragment key={layer.id}>
              <StackLayerFull
                layer={layer}
                isActive={activeId === layer.id}
                onToggle={() => toggle(layer.id)}
                onProduct={setProductModal}
              />

              {index < STACK_LAYERS.length - 1 && (
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

          <div
            style={{
              textAlign: "center",
              marginTop: 26,
              fontSize: 13,
              color: "#8CB5AC",
              lineHeight: 1.8,
              maxWidth: 940,
              marginInline: "auto",
            }}
          >
            IPI delivers a complete Customer Contact ecosystem. Managed services
            provide the foundation, telephony and ECX power communications, AI
            and Compliance enhance customer engagement, while Professional
            Services ensure successful design, deployment and optimisation.
          </div>
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
        {/* HUB HEADER */}
        <header
          style={{
            padding: "22px 44px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingLeft: 68,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background:
                "linear-gradient(135deg,rgba(212,168,67,0.12),rgba(54,198,255,0.08))",
              border: "1px solid rgba(212,168,67,0.3)",
              borderRadius: 100,
              padding: "7px 18px",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#D4A843",
                boxShadow: "0 0 8px #D4A843",
                animation: "liveDot 2.2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#E8C96A",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              Partner Enablement Hub
            </span>
            <span
              style={{
                fontSize: 9,
                color: "rgba(212,168,67,0.5)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              2026
            </span>
          </div>
          <div style={{ width: 36 }} />
        </header>

        {/* HUB HERO */}
        <div
          style={{
            textAlign: "center",
            padding: "clamp(40px,5vw,64px) 44px 0",
          }}
        >
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto",
              padding: "clamp(28px,3.8vw,42px) clamp(20px,3vw,40px)",
              borderRadius: 24,
              border: "1px solid rgba(103,216,255,0.16)",
              background:
                "linear-gradient(180deg,rgba(15,36,47,0.62) 0%,rgba(10,22,31,0.72) 100%)",
              boxShadow: "0 20px 48px rgba(6,12,20,0.28)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(212,168,67,0.08)",
                border: "1px solid rgba(212,168,67,0.22)",
                borderRadius: 100,
                padding: "6px 15px",
                marginBottom: 12,
                fontSize: 10,
                fontWeight: 800,
                color: "#E8C96A",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Partner Program
            </div>
            <div
              style={{
                marginBottom: 14,
                fontSize: 11,
                fontWeight: 700,
                color: "rgba(232,201,106,0.8)",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
              }}
            >
              IPI Partner Advantage 2026
            </div>
          <h1
            style={{
              fontSize: "clamp(32px,4.8vw,56px)",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              color: "#fff",
              lineHeight: 1.03,
              marginBottom: 16,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            Everything your partners{" "}
            <span
              style={{
                color: "#D4A843",
                textShadow: "0 0 36px rgba(212,168,67,0.5)",
              }}
            >
              need to sell.
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px,1.4vw,16px)",
              color: "#8EB8AF",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.78,
            }}
          >
            Co-sell materials, technical briefs, deal registration guidance, and
            tier information — all in one place for CCaaS and SI partners.
          </p>
          </div>
        </div>

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
            <p style={{ ...sectionEyebrow, color: "rgba(212,168,67,0.72)" }}>
              Program Structure
            </p>
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
                  flexDirection: "column",
                  gap: 16,
                  boxShadow: tier.featured
                    ? `0 14px 34px rgba(${tier.glow},0.2)`
                    : `0 10px 28px rgba(${tier.glow},0.1)`,
                }}
              >
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
                      color: "rgba(255,255,255,0.58)",
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
                      color: "rgba(255,255,255,0.58)",
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
  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  const [selected, setSelected] = React.useState(null);
  const [view, setView] = React.useState('table');
  const [top50, setTop50] = React.useState(false);
  const [pageSize, setPageSize] = React.useState(25);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState('score_desc');
  const [searchInput, setSearchInput] = React.useState('');
  const [filters, setFilters] = React.useState({ name:'', industry:'', category:'', channel_role:'', channel_segment:'', country:'', city:'', trading_status:'', adopter_profile:'', minEmployees:'', maxEmployees:'', minRevenue:'', maxRevenue:'', hasWebsite:false, hasLinkedIn:false, hasEmail:false, minScore:0 });
  const keyword = useDebouncedValue(searchInput, 180);

  const loadData = React.useCallback(async () => {
    setLoading(true); setError('');
    try { setRows(await window.ProspectToolUtils.loadProspectsCsv()); }
    catch (e) { setError(e.message || 'Failed to load CSV'); }
    finally { setLoading(false); }
  }, []);

  React.useEffect(() => { loadData(); }, [loadData]);
  React.useEffect(() => { setPage(1); }, [keyword, filters, sort, top50]);

  const options = React.useMemo(() => {
    const make = (k) => [...new Set(rows.map((r)=>r[k]).filter(Boolean))].sort();
    return { industry:make('industry'), category:make('category'), channel_role:make('channel_role'), channel_segment:make('channel_segment'), country:make('country'), city:make('city'), trading_status:make('trading_status'), adopter_profile:make('adopter_profile') };
  }, [rows]);

  const filtered = React.useMemo(() => rows.filter((r)=>{
    if (keyword && !r.searchHaystack.includes(keyword.toLowerCase())) return false;
    const textKeys=['name','industry','category','channel_role','channel_segment','country','city','trading_status','adopter_profile'];
    for (const k of textKeys) if (filters[k] && (r[k]||'') !== filters[k]) return false;
    if (filters.minEmployees && (r.numericEmployees===null || r.numericEmployees < Number(filters.minEmployees))) return false;
    if (filters.maxEmployees && (r.numericEmployees===null || r.numericEmployees > Number(filters.maxEmployees))) return false;
    if (filters.minRevenue && (r.numericRevenue===null || r.numericRevenue < Number(filters.minRevenue))) return false;
    if (filters.maxRevenue && (r.numericRevenue===null || r.numericRevenue > Number(filters.maxRevenue))) return false;
    if (filters.hasWebsite && !r.hasWebsite) return false;
    if (filters.hasLinkedIn && !r.hasLinkedIn) return false;
    if (filters.hasEmail && !r.hasEmail) return false;
    if (r.idealPartnerScore < Number(filters.minScore||0)) return false;
    return true;
  }), [rows, keyword, filters]);

  const sorted = React.useMemo(() => {
    const list=[...filtered];
    const [field,dir]=sort.split('_');
    list.sort((a,b)=>{
      const av=field==='score'?a.idealPartnerScore:field==='revenue'?a.numericRevenue||0:field==='employees'?a.numericEmployees||0:(a.name||'');
      const bv=field==='score'?b.idealPartnerScore:field==='revenue'?b.numericRevenue||0:field==='employees'?b.numericEmployees||0:(b.name||'');
      if (typeof av==='string') return dir==='asc'?av.localeCompare(bv):bv.localeCompare(av);
      return dir==='asc'?av-bv:bv-av;
    });
    return top50 ? list.slice(0,50) : list;
  }, [filtered, sort, top50]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const pageRows = sorted.slice((page-1)*pageSize, (page-1)*pageSize+pageSize);
  const avgScore = sorted.length ? (sorted.reduce((a,b)=>a+b.idealPartnerScore,0)/sorted.length).toFixed(1) : '0.0';
  const kpis = { total: rows.length, web: rows.filter(r=>r.hasWebsite).length, li: rows.filter(r=>r.hasLinkedIn).length, email: rows.filter(r=>r.hasEmail).length, avgAll: rows.length?(rows.reduce((a,b)=>a+b.idealPartnerScore,0)/rows.length).toFixed(1):'0.0', filtered: sorted.length };

  const exportRows = (records, name) => {
    const blob = new Blob([window.ProspectToolUtils.toCsv(records)], {type:'text/csv;charset=utf-8;'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); URL.revokeObjectURL(a.href);
  };

  const activeChips=[keyword&&`Search: ${keyword}`, ...Object.entries(filters).filter(([k,v])=>v&&v!==0).map(([k,v])=>`${k}: ${v}`)].filter(Boolean);
  const resetFilters=()=>{ setFilters({ name:'', industry:'', category:'', channel_role:'', channel_segment:'', country:'', city:'', trading_status:'', adopter_profile:'', minEmployees:'', maxEmployees:'', minRevenue:'', maxRevenue:'', hasWebsite:false, hasLinkedIn:false, hasEmail:false, minScore:0 }); setSearchInput(''); setTop50(false); };

  if (loading) return <div className="prospect-shell"><PageHeader title="Partner Prospect Tool" subtitle="Loading CSV dataset…" /><div className="ds-card">Loading data…</div></div>;
  if (error) return <div className="prospect-shell"><PageHeader title="Partner Prospect Tool" subtitle="Unable to load dataset" /><div className="ds-card">{error}<div style={{marginTop:10}}><button className="ui-btn" onClick={loadData}>Retry</button></div></div></div>;

  return <div className="prospect-shell">
    <PageHeader title="Partner Prospect Tool" eyebrow="Partner Prospect Tool" subtitle="Explore, filter and rank reseller prospects from the channel dataset" right={<span className="pill">{rows.length} records</span>} />

    <div className="kpi-grid">{[
      ['Total Prospects',kpis.total],['Prospects with Website',kpis.web],['Prospects with LinkedIn',kpis.li],['Prospects with Contact Email',kpis.email],['Average Ideal Partner Score',kpis.avgAll],['Filtered Results',kpis.filtered]
    ].map(([l,v])=><div key={l} className="kpi-card"><div className="kpi-label">{l}</div><div className="kpi-value">{v}</div></div>)}</div>

    <div className="ds-card"><div className="filter-grid">
      <input className="ui-search" placeholder="Global keyword search" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} />
      {['name','industry','category','channel_role','channel_segment','country','city','trading_status','adopter_profile'].map((k)=> k==='name' ? <input key={k} className="ui-search" placeholder="Company name" value={filters.name} onChange={(e)=>setFilters({...filters,name:e.target.value})} /> : <select key={k} className="ui-search" value={filters[k]} onChange={(e)=>setFilters({...filters,[k]:e.target.value})}><option value="">{k.replace('_',' ')}</option>{options[k].map(v=><option key={v} value={v}>{v}</option>)}</select>)}
      <input className="ui-search" placeholder="Min employees" value={filters.minEmployees} onChange={(e)=>setFilters({...filters,minEmployees:e.target.value})} />
      <input className="ui-search" placeholder="Max employees" value={filters.maxEmployees} onChange={(e)=>setFilters({...filters,maxEmployees:e.target.value})} />
      <input className="ui-search" placeholder="Min revenue" value={filters.minRevenue} onChange={(e)=>setFilters({...filters,minRevenue:e.target.value})} />
      <input className="ui-search" placeholder="Max revenue" value={filters.maxRevenue} onChange={(e)=>setFilters({...filters,maxRevenue:e.target.value})} />
      <label><input type="checkbox" checked={filters.hasWebsite} onChange={(e)=>setFilters({...filters,hasWebsite:e.target.checked})} /> Has website</label>
      <label><input type="checkbox" checked={filters.hasLinkedIn} onChange={(e)=>setFilters({...filters,hasLinkedIn:e.target.checked})} /> Has LinkedIn</label>
      <label><input type="checkbox" checked={filters.hasEmail} onChange={(e)=>setFilters({...filters,hasEmail:e.target.checked})} /> Has contact email</label>
      <label style={{fontSize:12,color:'#9bb6b0'}}>Minimum ideal partner score: {filters.minScore}
        <input type="range" min="0" max="100" value={filters.minScore} onChange={(e)=>setFilters({...filters,minScore:Number(e.target.value)})} style={{width:'100%'}} />
      </label>
    </div></div>

    <div className="ds-card" style={{display:'flex',flexWrap:'wrap',gap:8}}>
      <button className="ui-btn secondary" onClick={resetFilters}>Reset Filters</button>
      <button className="ui-btn" onClick={()=>setTop50(true)}>Show Top 50 Ideal Partners</button>
      <button className="ui-btn secondary" onClick={()=>exportRows(sorted,'filtered-prospects.csv')}>Export Filtered CSV</button>
      <button className="ui-btn secondary" onClick={()=>exportRows([...filtered].sort((a,b)=>b.idealPartnerScore-a.idealPartnerScore).slice(0,50),'top-50-prospects.csv')}>Export Top 50 CSV</button>
      <select className="ui-search" value={sort} onChange={(e)=>setSort(e.target.value)} style={{maxWidth:220}}><option value="score_desc">Sort: Score ↓</option><option value="score_asc">Sort: Score ↑</option><option value="name_asc">Sort: Name A-Z</option><option value="employees_desc">Sort: Employees ↓</option><option value="revenue_desc">Sort: Revenue ↓</option></select>
      <button className={`ui-btn ${view==='table'?'':'secondary'}`} onClick={()=>setView('table')}>Table</button>
      <button className={`ui-btn ${view==='cards'?'':'secondary'}`} onClick={()=>setView('cards')}>Cards</button>
      {top50 && <span className="top50-badge">Top 50 mode</span>}
    </div>

    {activeChips.length>0 && <div className="chip-row">{activeChips.map((c)=><span className="chip" key={c}>{c}</span>)}</div>}

    {top50 && <div className="ds-card" style={{display:'flex',gap:12,flexWrap:'wrap',fontSize:12}}><strong>Top 50 summary</strong><span>Avg score: {avgScore}</span><span>Websites: {sorted.filter(r=>r.hasWebsite).length}</span><span>LinkedIn: {sorted.filter(r=>r.hasLinkedIn).length}</span><span>Emails: {sorted.filter(r=>r.hasEmail).length}</span></div>}

    {sorted.length===0 ? <div className="ds-card">No results found.</div> : view==='table' ? <div className="prospect-table-wrap"><table className="prospect-table"><thead><tr>{['Rank','Company Name','Ideal Partner Score','Industry','Category','Channel Role','Channel Segment','Employees','Revenue','City','Country','Website','LinkedIn','Contacts','Trading Status'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{pageRows.map((r,i)=><tr key={r.id} onClick={()=>setSelected(r)} style={{cursor:'pointer'}}><td>{(page-1)*pageSize+i+1}</td><td><strong>{r.displayName}</strong>{r.ch_link&&<div><a href={window.ProspectToolUtils.normalizeUrl(r.ch_link)} target="_blank" rel="noreferrer">Companies House</a></div>}</td><td><span className="score-badge">{r.idealPartnerScore}</span></td><td>{r.industry||'—'}</td><td>{r.category||'—'}</td><td>{r.channel_role||'—'}</td><td>{r.channel_segment||'—'}</td><td>{r.displayEmployees}</td><td>{r.displayRevenue}</td><td>{r.city||'—'}</td><td>{r.country||'—'}</td><td>{r.website?<a href={window.ProspectToolUtils.normalizeUrl(r.website)} target="_blank" rel="noreferrer">Website</a>:'—'}</td><td>{r.linkedin?<a href={window.ProspectToolUtils.normalizeUrl(r.linkedin)} target="_blank" rel="noreferrer">LinkedIn</a>:'—'}</td><td>{r.contactCount}</td><td>{r.trading_status||'—'}</td></tr>)}</tbody></table></div> : <div className="prospect-cards">{pageRows.map((r)=><div className="prospect-card" key={r.id} onClick={()=>setSelected(r)}><div style={{display:'flex',justifyContent:'space-between'}}><strong>{r.displayName}</strong><span className="score-badge">{r.idealPartnerScore}</span></div><div>{r.industry||'—'}</div><div>{r.channel_role||'—'} / {r.channel_segment||'—'}</div><div>{r.city||'—'}, {r.country||'—'}</div><div>{r.displayRevenue} · {r.displayEmployees}</div><div>{r.keywords||'—'}</div><div style={{display:'flex',gap:8}}>{r.website&&<a href={window.ProspectToolUtils.normalizeUrl(r.website)} target="_blank" rel="noreferrer">Website</a>}{r.linkedin&&<a href={window.ProspectToolUtils.normalizeUrl(r.linkedin)} target="_blank" rel="noreferrer">LinkedIn</a>}</div></div>)}</div>}

    <div style={{display:'flex',gap:8,alignItems:'center'}}><button className="ui-btn secondary" disabled={page<=1} onClick={()=>setPage(p=>p-1)}>Prev</button><span style={{fontSize:12,color:'#9bb6b0'}}>Page {page} / {pageCount}</span><button className="ui-btn secondary" disabled={page>=pageCount} onClick={()=>setPage(p=>p+1)}>Next</button><select className="ui-search" value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))} style={{maxWidth:90}}><option>25</option><option>50</option><option>100</option></select></div>

    {selected && <div className="drawer"><button className="ui-btn secondary" onClick={()=>setSelected(null)}>Close</button><h3>{selected.displayName}</h3><div className="score-badge">Ideal Partner Score: {selected.idealPartnerScore}</div><h4>Overview</h4><p>{selected.industry||'—'} · {selected.category||'—'} · {selected.trading_status||'—'}</p><p>Employees {selected.displayEmployees} · Revenue {selected.displayRevenue} · Net Worth {window.ProspectToolUtils.formatCurrency(selected.numericNetWorth)}</p><p>{selected.displayLocation} {selected.postcode}</p><h4>Digital Presence</h4><p>Website: {selected.website||'—'}</p><p>LinkedIn: {selected.linkedin||'—'}</p><p>Email: {selected.email||'—'}</p><h4>Channel Fit</h4><p>{selected.channel_role||'—'} / {selected.channel_segment||'—'} / {selected.adopter_profile||'—'}</p><p>Partners: {selected.partners||'—'}</p><h4>Technology Signals</h4><p>{selected.tech_stack||'—'}</p><p>{selected.keywords||'—'}</p><h4>Contacts</h4>{selected.contacts.length?selected.contacts.map((c,idx)=><div key={idx}>{c.name||'—'} · {c.role||'—'} · {c.email||'—'}</div>):<p>—</p>}<h4>Score Breakdown</h4><ul>{selected.scoreBreakdown.map((f)=><li key={f}>{f}</li>)}</ul><div style={{display:'grid',gap:8,marginTop:10}}><button className="ui-btn secondary" onClick={()=>navigator.clipboard?.writeText(selected.website||'')}>Copy website</button><button className="ui-btn secondary" onClick={()=>navigator.clipboard?.writeText(selected.linkedin||'')}>Copy LinkedIn</button><button className="ui-btn secondary" onClick={()=>navigator.clipboard?.writeText(selected.email||selected.contacts[0]?.email||'')}>Copy email</button><button className="ui-btn" onClick={()=>exportRows([selected],`${selected.id}-prospect.csv`)}>Export this record as CSV row</button></div></div>}
  </div>;
}

function useDebouncedValue(value, wait) {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => { const t = setTimeout(() => setDebounced(value), wait); return () => clearTimeout(t); }, [value, wait]);
  return debounced;
}

// ═══════════════════════════════════════════════════════
// BUILD · SELL · EXPAND PAGE (Page 2)
// ═══════════════════════════════════════════════════════
function BuildSellExpand() {
  const [activePillar, setActivePillar] = React.useState(null);

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

          <div className="prj-contrast-grid" style={{ marginTop: 14 }}>
            <article className="prj-contrast-card muted">
              <h3>Single-Solution Vendor Model</h3>
              <ul>
                <li>Lead with one product only</li>
                <li>Limited expansion paths</li>
                <li>Lower wallet share</li>
                <li>More vulnerable to replacement</li>
                <li>Channel conversation always forced into CCaaS</li>
              </ul>
            </article>
            <article className="prj-contrast-card positive">
              <h3>IPI Ecosystem Model</h3>
              <ul>
                <li>Start from any customer need</li>
                <li>Multiple cross-sell and upsell routes</li>
                <li>Broader customer relevance</li>
                <li>Higher revenue per account</li>
                <li>Greater long-term strategic value to the partner</li>
              </ul>
            </article>
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
                  color: "#fff",
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
        {/* HERO */}
        <div style={{ textAlign: "center", padding: "52px 40px 12px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(54,198,255,0.08)",
              border: "1px solid rgba(54,198,255,0.22)",
              borderRadius: 100,
              padding: "5px 16px",
              marginBottom: 16,
              fontSize: 11,
              fontWeight: 800,
              color: "#67D8FF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            IPI Partner Advantage 2026
          </div>
          <h1
            style={{
              fontSize: "clamp(26px,4.2vw,52px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.03,
              marginBottom: 14,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            IPI Partner{" "}
            <span
              style={{
                color: "#36C6FF",
                textShadow: "0 0 36px rgba(54,198,255,0.6)",
              }}
            >
              Program
            </span>
          </h1>
          <p
            style={{
              fontSize: "clamp(14px,1.4vw,16px)",
              color: "#8EB8AF",
              maxWidth: 640,
              margin: "0 auto",
              lineHeight: 1.78,
            }}
          >
            Defining our recruitment priorities, ideal partner profile, and the
            strategic framework that ensures we build the right ecosystem —
            focused on partners who can drive the fastest path to revenue.
          </p>
          </div>

        <div className="brand-line" style={{ margin: "40px 44px 0" }} />

        {/* TARGET PARTNER PRIORITIES */}
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
                            color: "#C0DDD6",
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
                color: "#fff",
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
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(54,198,255,0.09)",
                border: "1px solid rgba(54,198,255,0.28)",
                borderRadius: 100,
                padding: "6px 15px",
                marginBottom: 16,
                fontSize: 11,
                fontWeight: 800,
                color: "#67D8FF",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Commercial Architecture
            </div>
            <h1
              style={{
                fontSize: "clamp(26px,4vw,50px)",
                fontWeight: 800,
                color: "#fff",
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
                color: "#fff",
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
                  color: "#fff",
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
                  color: "#fff",
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
  const strategicBenefits = [
    {
      title: "Faster Partner Onboarding",
      text: "Partners can quickly access all documentation required to start selling IPI solutions.",
    },
    {
      title: "Simplified Procurement",
      text: "Enterprise customers and procurement teams can easily review legal and compliance materials.",
    },
    {
      title: "Reduced Operational Overhead",
      text: "IPI teams spend less time responding to document requests.",
    },
    {
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
        <SectionHeader
          eyebrow="Intro"
          title="Purpose of the Trust Page"
          description="The Trust Page will provide partners with easy access to the latest documentation governing the use, resale and delivery of IPI services."
        />
        <StandardCard>
          <ul className="trust-list">
            <li>Ensures partners always reference the latest versions of agreements and policies</li>
            <li>Simplifies partner onboarding</li>
            <li>Reduces delays during customer procurement processes</li>
            <li>Supports enterprise security and compliance reviews</li>
          </ul>
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
          <StandardCard>
            <h3 className="trust-card-title">Commercial Agreements</h3>
            <ul className="trust-list">
              <li>IPI Reseller Master Agreement</li>
              <li>Partner Terms & Conditions</li>
              <li>Partner Tier Structure</li>
              <li>Partner Commercial Policies</li>
            </ul>
          </StandardCard>

          <StandardCard>
            <h3 className="trust-card-title">Product Schedules</h3>
            <p className="trust-copy">Each product area will have a dedicated schedule defining service terms and operational details.</p>
            <ul className="trust-list">
              <li>Telephony Services Schedule</li>
              <li>UCaaS & CCaaS Platform Schedule</li>
              <li>AI & Automation Services Schedule</li>
              <li>Secure Payments Schedule</li>
              <li>Managed Services Schedule</li>
              <li>Professional Services Schedule</li>
            </ul>
          </StandardCard>

          <StandardCard>
            <h3 className="trust-card-title">End User Legal Documentation</h3>
            <p className="trust-copy">Partners will also be able to access documentation required for customer deployments.</p>
            <ul className="trust-list">
              <li>End User Licence Agreements (EULAs)</li>
              <li>Acceptable Use Policies</li>
              <li>Service Descriptions</li>
              <li>Service Level Agreements (SLAs)</li>
              <li>Data Processing Agreements (DPAs)</li>
            </ul>
          </StandardCard>

          <StandardCard>
            <h3 className="trust-card-title">Security & Compliance Documentation</h3>
            <p className="trust-copy">To support enterprise procurement and security reviews, the Trust Page may also include:</p>
            <ul className="trust-list">
              <li>Data protection policies</li>
              <li>Security frameworks</li>
              <li>Compliance certifications</li>
              <li>PCI related documentation for secure payments services</li>
            </ul>
          </StandardCard>
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
            <StandardCard key={benefit.title}>
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
          <ul className="trust-list">
            <li>legal documentation</li>
            <li>security and compliance resources</li>
            <li>product documentation</li>
            <li>service descriptions</li>
            <li>implementation guidelines</li>
          </ul>
          <p className="trust-note">This reinforces IP Integration’s positioning as a trusted technology and services partner in the CX market.</p>
        </StandardCard>
      </SectionWrapper>
    </React.Fragment>
  );
}

const PARTNER_OPERATIONAL_SUPPORT_SECTIONS = [
  {
    title: "Partner Enablement",
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
      <AppPageHeader
        eyebrow="Operational Excellence"
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
          <p className="trust-copy" style={{ margin: 0 }}>
            From onboarding and accreditation through to order management,
            service delivery and quarterly governance reviews, partners are
            supported by a repeatable operating model. This ensures teams can
            move faster, maintain quality standards and deliver measurable
            customer outcomes at every stage.
          </p>
        </StandardCard>
      </SectionWrapper>

      <SectionWrapper>
        <div className="trust-grid">
          {PARTNER_OPERATIONAL_SUPPORT_SECTIONS.map((section) => (
            <StandardCard key={section.title}>
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

function normaliseRoleValue(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (!value) return [];
  return [value];
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
  const [tasks, setTasks] = React.useState(() => {
    const stored =
      localStorage.getItem(EXECUTION_STORAGE_KEY) ||
      localStorage.getItem(LEGACY_EXECUTION_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : {};
    return GOVERNANCE_ACTIVITIES.map((item) => ({
      ...item,
      status: parsed[item.id]?.status || "Not Started",
      completed: parsed[item.id]?.status === "Complete",
      owner: parsed[item.id]?.owner || "",
      priority: parsed[item.id]?.priority || "Medium",
      targetDate: parsed[item.id]?.targetDate || "",
      notes: parsed[item.id]?.notes || "",
      updatedAt: parsed[item.id]?.updatedAt || "",
      r: normaliseRoleValue(parsed[item.id]?.r ?? item.r),
      a: normaliseRoleValue(parsed[item.id]?.a ?? item.a),
      c: normaliseRoleValue(parsed[item.id]?.c ?? item.c),
      i: normaliseRoleValue(parsed[item.id]?.i ?? item.i),
    }));
  });

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
    localStorage.setItem(EXECUTION_STORAGE_KEY, JSON.stringify(serializable));
  }, [tasks]);

  const updateTask = (id, patch) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task;
        const next = { ...task, ...patch, updatedAt: new Date().toISOString() };
        if (Object.prototype.hasOwnProperty.call(patch, "completed")) {
          if (patch.completed) {
            next.status = "Complete";
          } else if (next.status === "Complete") {
            next.status = "Not Started";
          }
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

  const exportRaciPDF = () => {
    const element = document.getElementById("raciExportArea");
    if (!element || !window.html2pdf) return;

    const options = {
      margin: 0.4,
      filename: "IPI_RACI_Matrix.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
      jsPDF: { unit: "in", format: "a3", orientation: "landscape" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    window.html2pdf().set(options).from(element).save();
  };

  const filteredTasks = tasks.filter((task) => {
    const matchStatus = statusFilter === "All" || task.status === statusFilter;
    const matchPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    const text = searchTerm.trim().toLowerCase();
    const matchSearch =
      !text ||
      task.activity.toLowerCase().includes(text) ||
      task.owner.toLowerCase().includes(text);
    const matchIncomplete = !showIncompleteOnly || task.status !== "Complete";
    const matchOverdue = !showOverdueOnly || isTaskOverdue(task);
    return (
      matchStatus &&
      matchPriority &&
      matchSearch &&
      matchIncomplete &&
      matchOverdue
    );
  });

  const summary = tasks.reduce(
    (acc, task) => {
      acc.total += 1;
      if (task.status === "Complete") acc.complete += 1;
      if (task.status === "In Progress") acc.inProgress += 1;
      if (task.status === "Blocked") acc.blocked += 1;
      if (isTaskOverdue(task)) acc.overdue += 1;
      return acc;
    },
    { total: 0, complete: 0, inProgress: 0, blocked: 0, overdue: 0 },
  );

  const completePct = summary.total
    ? Math.round((summary.complete / summary.total) * 100)
    : 0;
  const currentNoteTask = tasks.find((task) => task.id === noteTaskId);

  const getTaskRowStyle = (task) => {
    if (isTaskOverdue(task)) {
      return {
        background: "rgba(168,67,67,0.18)",
        borderColor: "rgba(214,138,138,0.45)",
      };
    }
    if (task.status === "In Progress") {
      return {
        background: "rgba(123,150,163,0.1)",
        borderColor: "rgba(123,150,163,0.28)",
      };
    }
    if (task.status === "Complete") {
      return {
        background: "rgba(54,198,255,0.12)",
        borderColor: "rgba(103,216,255,0.32)",
      };
    }
    return {
      background: "transparent",
      borderColor: "rgba(255,255,255,0.07)",
    };
  };

  const ownershipSummary = buildRoleSummary(tasks, RACI_DROPDOWN_OPTIONS);

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
        <header
          style={{
            padding: "22px 44px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingLeft: 68,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background:
                "linear-gradient(135deg,rgba(123,150,163,0.15),rgba(54,198,255,0.08))",
              border: "1px solid rgba(123,150,163,0.35)",
              borderRadius: 100,
              padding: "7px 18px",
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#7B96A3",
                boxShadow: "0 0 8px #7B96A3",
                animation: "liveDot 2.2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#A9C3CE",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
              }}
            >
              Governance & RACI
            </span>
          </div>
          <div style={{ width: 36 }} />
        </header>

        <div
          style={{
            maxWidth: "none",
            margin: "0",
            padding: "34px 44px 0",
            width: "100%",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(24px,3.8vw,46px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fff",
              lineHeight: 1.05,
              marginBottom: 10,
              fontFamily: "'Syne',sans-serif",
            }}
          >
            Partner <span style={{ color: "#7B96A3" }}>Governance</span> RACI
            Matrix
          </h1>
          <p
            style={{
              fontSize: 13.5,
              color: "#8EA6BF",
              maxWidth: "none",
              lineHeight: 1.75,
              marginBottom: 18,
            }}
          >
            This view clarifies delivery accountability across IP Integration,
            partner teams and internal governance functions so opportunities
            progress with clear ownership.
          </p>

          <section
            style={{
              background: "rgba(123,150,163,0.08)",
              border: "1px solid rgba(123,150,163,0.28)",
              borderRadius: 14,
              padding: "16px 18px",
              marginBottom: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#9DB8C5",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Execution Tracking
            </div>
            <p
              style={{
                fontSize: 12.5,
                color: "#C0DDD6",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              This page not only defines governance across the IPI Partner
              Advantage program, it also acts as a lightweight execution tracker
              to manage progress, ownership and next steps across key partner
              program activities.
            </p>
          </section>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
              gap: 12,
              marginBottom: 18,
            }}
          >
            {[
              { k: "R", l: "Responsible", c: "#36C6FF" },
              { k: "A", l: "Accountable", c: "#D4A843" },
              { k: "C", l: "Consulted", c: "#A37992" },
              { k: "I", l: "Informed", c: "#7B96A3" },
            ].map((item) => (
              <div
                key={item.k}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${item.c}55`,
                  borderRadius: 10,
                  padding: "9px 10px",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 6,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 900,
                    background: `${item.c}22`,
                    color: item.c,
                    border: `1px solid ${item.c}66`,
                  }}
                >
                  {item.k}
                </span>
                <span
                  style={{ fontSize: 12, color: "#C0DDD6", fontWeight: 700 }}
                >
                  {item.l}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(6,minmax(0,1fr))",
              gap: 12,
              marginBottom: 14,
            }}
          >
            {[
              {
                label: "Total Activities",
                value: summary.total,
                color: "#9DB8C5",
              },
              { label: "Complete", value: summary.complete, color: "#36C6FF" },
              {
                label: "In Progress",
                value: summary.inProgress,
                color: "#7B96A3",
              },
              { label: "Blocked", value: summary.blocked, color: "#D68A8A" },
              { label: "Overdue", value: summary.overdue, color: "#D4A843" },
              {
                label: "% Complete",
                value: `${completePct}%`,
                color: "#A37992",
              },
            ].map((card) => (
              <MetricCard
                key={card.label}
                label={card.label}
                value={card.value}
                tone={
                  card.label === "Complete"
                    ? "success"
                    : card.label === "Blocked"
                      ? "danger"
                      : card.label === "Overdue"
                        ? "warning"
                        : "info"
                }
              />
            ))}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 10,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(123,150,163,0.3)",
                borderRadius: 999,
                padding: 4,
              }}
            >
              {[
                { id: "matrix", label: "Matrix View" },
                { id: "action", label: "Action Plan View" },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setView(option.id)}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    background:
                      view === option.id
                        ? "rgba(123,150,163,0.28)"
                        : "transparent",
                    color: view === option.id ? "#EAF5FF" : "#8EB1A8",
                    padding: "8px 14px",
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "#7FA39A" }}>
              Status options: Not Started · In Progress · Blocked · Complete
            </div>
            <button className="exportButton" onClick={exportRaciPDF}>
              Download RACI Matrix as PDF
            </button>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr 1fr auto auto",
              gap: 8,
              marginBottom: 14,
            }}
          >
            <FormField
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search activity or owner"
            />
            <FormField as="select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ boxShadow: "none" }}>
              {["All", ...GOVERNANCE_STATUS_OPTIONS].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </FormField>
            <FormField as="select"
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              style={{ boxShadow: "none" }}
            >
              {["All", ...PRIORITY_OPTIONS].map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </FormField>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "#BFD8D2",
              }}
            >
              <input
                type="checkbox"
                checked={showIncompleteOnly}
                onChange={(e) => setShowIncompleteOnly(e.target.checked)}
              />
              Incomplete
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                color: "#BFD8D2",
              }}
            >
              <input
                type="checkbox"
                checked={showOverdueOnly}
                onChange={(e) => setShowOverdueOnly(e.target.checked)}
              />
              Overdue
            </label>
          </div>

          <div id="raciExportArea">
          {view === "matrix" ? (
            <div
              className="raciTableWrap"
            >
              <div className="raciTableGrid">
                <div
                  className="raciTableHeader"
                >
                  {[
                    "Activity",
                    "R",
                    "A",
                    "C",
                    "I",
                    "Status",
                    "Owner",
                    "Priority",
                    "Target Date",
                    "Notes",
                    "Done",
                  ].map((h) => (
                    <div
                      key={h}
                      className={`raciHeaderCell ${h.length === 1 ? `col-${h.toLowerCase()}` : ""}`}
                    >
                      {h}
                    </div>
                  ))}
                </div>
                {filteredTasks.length ? (
                  filteredTasks.map((task, idx) => {
                    const rowStyle = getTaskRowStyle(task);
                    const taskCompleted = task.status === "Complete" || task.status === "Completed";
                    return (
                      <div key={task.id} className="raciTableRow" style={{ borderTop: idx ? `1px solid ${rowStyle.borderColor}` : "none", background: rowStyle.background }}>
                        <div
                          style={{
                            padding: "10px",
                            fontSize: 12,
                            color: "#EAF5FF",
                            fontWeight: 700,
                            minWidth: 0,
                            textDecoration: taskCompleted ? "line-through" : "none",
                            textDecorationColor: taskCompleted ? "rgba(160,214,194,0.9)" : "transparent",
                          }}
                        >
                          {task.activity}
                        </div>
                        {[
                          ["r", "Responsible"],
                          ["a", "Accountable"],
                          ["c", "Consulted"],
                          ["i", "Informed"],
                        ].map(([field, label]) => (
                          <div key={`${task.id}-${field}`} style={{ padding: "10px" }}>
                            <select
                              className="ui-dropdown"
                              multiple
                              value={normaliseRoleValue(task[field])}
                              onChange={(e) =>
                                updateRaciField(
                                  task.id,
                                  field,
                                  [...e.target.selectedOptions].map((option) => option.value),
                                )
                              }
                              style={{
                                width: "100%",
                                boxShadow: "none",
                                minHeight: 94,
                              }}
                            >
                              {RACI_DROPDOWN_OPTIONS.map((role) => (
                                <option key={`${task.id}-${field}-${role}`} value={role}>
                                  {role}
                                </option>
                              ))}
                            </select>
                            <div className="selectedTags">
                              {normaliseRoleValue(task[field]).map((role) => (
                                <span className="raciTag" key={`${task.id}-${field}-${role}`}>
                                  {role}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                        <div style={{ padding: "10px" }}>
                          <select
                            className="ui-dropdown"
                            value={task.status}
                            onChange={(e) =>
                              updateTask(task.id, { status: e.target.value })
                            }
                            style={{
                              width: "100%",
                              boxShadow: "none",
                            }}
                          >
                            {GOVERNANCE_STATUS_OPTIONS.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div style={{ padding: "10px" }}>
                          <input
                            value={task.owner}
                            onChange={(e) =>
                              updateTask(task.id, { owner: e.target.value })
                            }
                            placeholder="Owner"
                            style={{
                              width: "100%",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(123,150,163,0.3)",
                              borderRadius: 6,
                              color: "#D9ECE6",
                              padding: "6px",
                              fontSize: 12,
                            }}
                          />
                        </div>
                        <div style={{ padding: "10px" }}>
                          <select
                            className="ui-dropdown"
                            value={task.priority}
                            onChange={(e) =>
                              updateTask(task.id, { priority: e.target.value })
                            }
                            style={{
                              width: "100%",
                              boxShadow: "none",
                            }}
                          >
                            {PRIORITY_OPTIONS.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div style={{ padding: "10px" }}>
                          <input
                            type="date"
                            value={task.targetDate}
                            onChange={(e) =>
                              updateTask(task.id, { targetDate: e.target.value })
                            }
                            style={{
                              width: "100%",
                              background: "rgba(255,255,255,0.03)",
                              border: "1px solid rgba(123,150,163,0.3)",
                              borderRadius: 6,
                              color: "#D9ECE6",
                              padding: "6px",
                              fontSize: 12,
                            }}
                          />
                        </div>
                        <div style={{ padding: "10px" }}>
                          <button
                            onClick={() => setNoteTaskId(task.id)}
                            style={{
                              width: "100%",
                              border: "1px solid rgba(123,150,163,0.35)",
                              background: task.notes
                                ? "rgba(54,198,255,0.14)"
                                : "rgba(255,255,255,0.03)",
                              color: "#C0DDD6",
                              borderRadius: 6,
                              padding: "6px",
                              fontSize: 11,
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            {task.notes ? "View / Edit" : "Add Notes"}
                          </button>
                        </div>
                        <div
                          style={{
                            padding: "10px",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={(e) =>
                              updateTask(task.id, { completed: e.target.checked })
                            }
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div
                    style={{
                      padding: "24px",
                      fontSize: 12.5,
                      color: "#8EB1A8",
                    }}
                  >
                    No activities match the current filters.
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div style={{ display: "grid", gap: 10 }}>
              {filteredTasks.length ? (
                filteredTasks.map((task) => {
                  const rowStyle = getTaskRowStyle(task);
                  const taskCompleted =
                    task.status === "Complete" || task.status === "Completed";
                  return (
                    <div
                      key={task.id}
                      style={{
                      background: rowStyle.background,
                      border: `1px solid ${rowStyle.borderColor}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                      display: "grid",
                      gridTemplateColumns: "2fr repeat(6,minmax(90px,1fr))",
                      alignItems: "center",
                      gap: 12,
                      }}
                    >
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#EAF5FF",
                          textDecoration: taskCompleted ? "line-through" : "none",
                          textDecorationColor: taskCompleted
                            ? "rgba(160,214,194,0.9)"
                            : "transparent",
                        }}
                      >
                        {task.activity}
                      </div>
                      <div
                        style={{ fontSize: 11, color: "#7FA39A", marginTop: 4 }}
                      >
                        {task.updatedAt
                          ? `Last updated ${new Date(task.updatedAt).toLocaleString()}`
                          : "Not updated yet"}
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <StatusBadge status={task.status} />
                      <select
                        className="ui-dropdown"
                        value={task.status}
                      onChange={(e) =>
                        updateTask(task.id, { status: e.target.value })
                      }
                      style={{ boxShadow: "none" }}
                    >
                      {GOVERNANCE_STATUS_OPTIONS.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                      </select>
                    </div>
                    <input
                      value={task.owner}
                      onChange={(e) =>
                        updateTask(task.id, { owner: e.target.value })
                      }
                      placeholder="Owner"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(123,150,163,0.3)",
                        borderRadius: 6,
                        color: "#D9ECE6",
                        padding: "8px",
                        fontSize: 12,
                      }}
                    />
                    <select
                      className="ui-dropdown"
                      value={task.priority}
                      onChange={(e) =>
                        updateTask(task.id, { priority: e.target.value })
                      }
                      style={{ boxShadow: "none" }}
                    >
                      {PRIORITY_OPTIONS.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                    <input
                      type="date"
                      value={task.targetDate}
                      onChange={(e) =>
                        updateTask(task.id, { targetDate: e.target.value })
                      }
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(123,150,163,0.3)",
                        borderRadius: 6,
                        color: "#D9ECE6",
                        padding: "8px",
                        fontSize: 12,
                      }}
                    />
                    <button
                      onClick={() => setNoteTaskId(task.id)}
                      style={{
                        border: "1px solid rgba(123,150,163,0.35)",
                        background: task.notes
                          ? "rgba(54,198,255,0.14)"
                          : "rgba(255,255,255,0.03)",
                        color: "#C0DDD6",
                        borderRadius: 6,
                        padding: "8px",
                        fontSize: 11,
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      {task.notes ? "View / Edit Notes" : "Add Notes"}
                    </button>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 6,
                        fontSize: 11,
                        color: "#BFD8D2",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={(e) =>
                          updateTask(task.id, { completed: e.target.checked })
                        }
                      />
                      Done
                    </label>
                  </div>
                  );
                })
              ) : (
                <div
                  style={{
                    padding: "24px",
                    fontSize: 12.5,
                    color: "#8EB1A8",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(123,150,163,0.3)",
                    borderRadius: 12,
                  }}
                >
                  No activities match the current filters.
                </div>
              )}
            </div>
          )}

          <section style={{ marginTop: 20 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#9DB8C5",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Key Ownership Summary
            </div>
            <div className="ownershipDashboard">
              {ownershipSummary.map((role) => (
                <div className="ownershipCard" key={role.name}>
                  <div className="ownershipHeader">
                    <div className="ownershipRole">{role.name}</div>
                    <div className="ownershipTotal">{role.total}</div>
                  </div>
                  <div className="ownershipMetrics">
                    <div className="metric metric-r">
                      <div className="metricValue">{role.responsible}</div>
                      <div className="metricLabel">R</div>
                    </div>
                    <div className="metric metric-a">
                      <div className="metricValue">{role.accountable}</div>
                      <div className="metricLabel">A</div>
                    </div>
                    <div className="metric metric-c">
                      <div className="metricValue">{role.consulted}</div>
                      <div className="metricLabel">C</div>
                    </div>
                    <div className="metric metric-i">
                      <div className="metricValue">{role.informed}</div>
                      <div className="metricLabel">I</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          </div>

          <section
            style={{
              marginTop: 14,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(123,150,163,0.24)",
              borderRadius: 12,
              padding: "14px 16px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#9DB8C5",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Why This Matters
            </div>
            <p
              style={{
                fontSize: 12.5,
                color: "#BFD8D2",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              The RACI model remains the governance backbone, while execution
              tracking adds day-to-day clarity around ownership, priorities and
              delivery risk. Leadership gets board-level visibility, and
              delivery teams gain a practical action plan to move the partner
              program forward without losing strategic alignment.
            </p>
          </section>

          {currentNoteTask && (
            <div
              className="modal-overlay"
              onClick={(e) => {
                if (e.target === e.currentTarget) setNoteTaskId(null);
              }}
            >
              <div
                className="modal-box"
                style={{
                  maxWidth: "none",
                  border: "1px solid rgba(123,150,163,0.35)",
                  background: "linear-gradient(160deg,#162422,#0E1A18)",
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 10,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        color: "#67D8FF",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: 6,
                      }}
                    >
                      Notes
                    </div>
                    <div
                      style={{
                        fontSize: 16,
                        fontWeight: 800,
                        color: "#fff",
                        fontFamily: "'Syne',sans-serif",
                      }}
                    >
                      {currentNoteTask.activity}
                    </div>
                  </div>
                  <button
                    onClick={() => setNoteTaskId(null)}
                    style={{
                      border: "none",
                      background: "rgba(255,255,255,0.08)",
                      color: "#C0DDD6",
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    ×
                  </button>
                </div>
                <textarea
                  value={currentNoteTask.notes}
                  onChange={(e) =>
                    updateTask(currentNoteTask.id, { notes: e.target.value })
                  }
                  placeholder="Capture dependencies, blockers, decisions and next actions."
                  style={{
                    width: "100%",
                    minHeight: 150,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(123,150,163,0.35)",
                    borderRadius: 8,
                    color: "#D9ECE6",
                    padding: 10,
                    fontSize: 12,
                    lineHeight: 1.6,
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: "40px 44px 44px", marginTop: "auto" }}>
          <div className="brand-line" style={{ marginBottom: 20 }} />
          <p
            style={{
              textAlign: "center",
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
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
    </React.Fragment>
  );
}

const CHANNEL_MANAGER_DATA = {
  lastUpdated: "Updated 04 Mar 2026",
  mission:
    "Recruit, enable and support partners who can scale the IPI CX ecosystem faster than direct sales alone.",
  missionSupport:
    "The Channel Manager Dashboard is the operating centre for the IPI Partner Advantage program. It provides a clear view of partner recruitment, activation, pipeline development and program execution, helping IP Integration build a scalable and predictable channel revenue engine.",
  kpis: [
    {
      label: "Target Partners",
      value: "50",
      hint: "FY26 recruitment objective",
    },
    {
      label: "Active Recruitment Conversations",
      value: "18",
      hint: "Across all priority types",
    },
    { label: "Signed Partners", value: "14", hint: "Contracts executed" },
    {
      label: "Activated Partners",
      value: "9",
      hint: "Onboarded and selling-ready",
    },
    {
      label: "Registered Opportunities",
      value: "37",
      hint: "Current quarter submissions",
    },
    {
      label: "Partner Pipeline Value",
      value: "£2.8m",
      hint: "Weighted opportunity value",
    },
    {
      label: "Closed Won Revenue",
      value: "£1.1m",
      hint: "YTD channel contribution",
    },
    {
      label: "Partner Activation Rate",
      value: "64%",
      hint: "Activated partners / signed",
    },
  ],
  pillars: [
    {
      title: "Partner Recruitment",
      desc: "Identify, target and recruit the right partners across the priority tiers for IPI Partner Advantage.",
    },
    {
      title: "Partner Enablement",
      desc: "Equip partners with the messaging, training and commercial clarity required to sell the IPI portfolio.",
    },
    {
      title: "Pipeline Development",
      desc: "Work with partners to generate, progress and support qualified revenue opportunities.",
    },
    {
      title: "Governance & Performance",
      desc: "Maintain program visibility through reviews, execution tracking, commercial structure and internal alignment.",
    },
  ],
  cadence: [
    {
      day: "Monday",
      title: "Pipeline & Partner Review",
      desc: "Review partner opportunities, deal registrations, blocked deals and internal sales alignment.",
    },
    {
      day: "Tuesday",
      title: "Partner Recruitment",
      desc: "Prospect target partners, run outreach activity and hold introductory discovery calls.",
    },
    {
      day: "Wednesday",
      title: "Partner Enablement",
      desc: "Deliver training, messaging, product walkthroughs and solution positioning.",
    },
    {
      day: "Thursday",
      title: "Joint Selling",
      desc: "Support live opportunities through account mapping, workshops and joint customer engagement.",
    },
    {
      day: "Friday",
      title: "Strategy & Program Development",
      desc: "Refine partner assets, review progress, update governance trackers and improve the program.",
    },
  ],
  lifecycle: [
    {
      stage: "Recruit",
      desc: "Identify and engage target partners aligned to IPI’s channel strategy.",
    },
    {
      stage: "Onboard",
      desc: "Complete agreements, portal setup and initial program access.",
    },
    {
      stage: "Enable",
      desc: "Deliver sales, technical and commercial readiness.",
    },
    {
      stage: "Sell",
      desc: "Support partner-led pipeline creation and opportunity progression.",
    },
    {
      stage: "Scale",
      desc: "Expand the partner’s footprint, solution mix and revenue contribution.",
    },
  ],
  priorities: [
    {
      rank: 1,
      title: "CCaaS Resellers",
      desc: "Fastest path to platform revenue and CX-led opportunity creation.",
    },
    {
      rank: 2,
      title: "Telecom & UC Resellers",
      desc: "Strong installed bases that can expand into broader CX solutions.",
    },
    {
      rank: 3,
      title: "Specialist Solution Providers",
      desc: "High-value entry point for point solutions such as payments, IVR and AI.",
    },
    {
      rank: 4,
      title: "Managed Service Providers",
      desc: "Long-term recurring revenue potential through managed CX environments.",
    },
    {
      rank: 5,
      title: "CX & Digital Transformation Consultancies",
      desc: "Strategic influencers that can shape enterprise transformation decisions.",
    },
  ],
  recruitment: [
    {
      name: "Nimbus Comms",
      type: "CCaaS Reseller",
      stage: "Discovery Booked",
      action: "Prepare solution overview deck",
      owner: "Channel Manager",
      notes: "Intro call confirmed for Wed",
    },
    {
      name: "Vertex Telecom",
      type: "Telecom & UC Reseller",
      stage: "Commercial Review",
      action: "Align tier and margin model",
      owner: "Finance + Channel",
      notes: "Awaiting revised volume profile",
    },
    {
      name: "FlowDigital CX",
      type: "CX Consultancy",
      stage: "Outreach Sent",
      action: "Follow-up with case studies",
      owner: "Channel Manager",
      notes: "Opened email and downloaded pack",
    },
    {
      name: "SignalPath MSP",
      type: "Managed Service Provider",
      stage: "In Evaluation",
      action: "Book technical architecture workshop",
      owner: "Solutions",
      notes: "Strong fit for managed CX offer",
    },
    {
      name: "Payline Integrations",
      type: "Specialist Provider",
      stage: "Signed",
      action: "Confirm onboarding checklist",
      owner: "Operations",
      notes: "Agreement signed, portal pending",
    },
    {
      name: "Apex Engage",
      type: "CCaaS Reseller",
      stage: "Activated",
      action: "Launch first joint opportunity plan",
      owner: "Sales",
      notes: "First two accounts identified",
    },
  ],
  actions: [
    { task: "Finalise partner tier framework", status: "In Progress" },
    { task: "Launch Trust & Compliance page", status: "Not Started" },
    {
      task: "Complete Reseller Master Agreement review",
      status: "In Progress",
    },
    {
      task: "Build first 25-partner recruitment target list",
      status: "Complete",
    },
    {
      task: "Schedule first partner enablement webinar",
      status: "Not Started",
    },
  ],
  progress: [
    { label: "Partners Signed vs Target", value: "14 / 50", percent: 28 },
    { label: "Activated vs Signed", value: "9 / 14", percent: 64 },
    { label: "Opportunities Registered", value: "37", percent: 74 },
    { label: "Revenue Progress vs Plan", value: "£1.1m / £2.4m", percent: 46 },
  ],
  teams: [
    {
      team: "Sales",
      desc: "Joint selling, opportunity support and pipeline progression.",
    },
    {
      team: "Marketing",
      desc: "Partner campaigns, messaging and enablement assets.",
    },
    {
      team: "Product",
      desc: "Solution positioning, packaging and technical alignment.",
    },
    {
      team: "Legal",
      desc: "Reseller agreements, terms and compliance frameworks.",
    },
    {
      team: "Finance",
      desc: "Pricing, discounting and commercial structures.",
    },
    {
      team: "Operations / Delivery",
      desc: "Onboarding, implementation and service readiness.",
    },
  ],
};

function ChannelManagerDashboardPage() {
  return (
    <React.Fragment>
      <Bg />
      <div className="channel-dashboard-page">
        <header className="channel-dashboard-header">
          <div className="channel-dashboard-pill">
            {CHANNEL_MANAGER_DATA.lastUpdated}
          </div>
        </header>

        <section className="channel-hero">
          <div className="channel-hero-label">Channel Manager Mission</div>
          <h1>Channel Manager Dashboard</h1>
          <p className="channel-mission">{CHANNEL_MANAGER_DATA.mission}</p>
          <p className="channel-support">
            {CHANNEL_MANAGER_DATA.missionSupport}
          </p>
        </section>

        <section className="channel-section">
          <div className="channel-grid-kpi">
            {CHANNEL_MANAGER_DATA.kpis.map((kpi) => (
              <div key={kpi.label} className="channel-card channel-kpi-card">
                <div className="channel-kpi-label">{kpi.label}</div>
                <div className="channel-kpi-value">{kpi.value}</div>
                <div className="channel-kpi-hint">{kpi.hint}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Operating Plan Overview</h2>
          <div className="channel-grid-4">
            {CHANNEL_MANAGER_DATA.pillars.map((item) => (
              <div key={item.title} className="channel-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Weekly Operating Cadence</h2>
          <div className="channel-grid-5">
            {CHANNEL_MANAGER_DATA.cadence.map((item) => (
              <div key={item.day} className="channel-card">
                <div className="channel-day">{item.day}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Partner Lifecycle</h2>
          <div className="channel-lifecycle-wrap">
            {CHANNEL_MANAGER_DATA.lifecycle.map((item, idx) => (
              <React.Fragment key={item.stage}>
                <div className="channel-card channel-life-card">
                  <div className="channel-step">{item.stage}</div>
                  <p>{item.desc}</p>
                </div>
                {idx < CHANNEL_MANAGER_DATA.lifecycle.length - 1 && (
                  <div className="channel-arrow">→</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Target Partner Priority</h2>
          <div className="channel-grid-5">
            {CHANNEL_MANAGER_DATA.priorities.map((item) => (
              <div key={item.title} className="channel-card">
                <div className="channel-priority-rank">{item.rank}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Partner Recruitment Pipeline</h2>
          <StandardTable className="channel-table-wrap">
            <table className="channel-table">
              <thead>
                <tr>
                  <th>Partner Name</th>
                  <th>Partner Type</th>
                  <th>Stage</th>
                  <th>Next Action</th>
                  <th>Owner</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {CHANNEL_MANAGER_DATA.recruitment.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td>{row.type}</td>
                    <td>
                      <span className="channel-chip">{row.stage}</span>
                    </td>
                    <td>{row.action}</td>
                    <td>{row.owner}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </StandardTable>
        </section>

        <section className="channel-section channel-two-col">
          <div>
            <h2 className="channel-title">Channel Manager Priorities</h2>
            <div className="channel-stack">
              {CHANNEL_MANAGER_DATA.actions.map((item) => (
                <div
                  key={item.task}
                  className="channel-card channel-action-card"
                >
                  <span>{item.task}</span>
                  <span className="channel-chip">{item.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="channel-title">Program Progress Snapshot</h2>
            <div className="channel-stack">
              {CHANNEL_MANAGER_DATA.progress.map((metric) => (
                <div key={metric.label} className="channel-card">
                  <div className="channel-metric-head">
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                  <div className="channel-progress">
                    <span style={{ width: `${metric.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="channel-section">
          <h2 className="channel-title">Internal Alignment</h2>
          <div className="channel-grid-3">
            {CHANNEL_MANAGER_DATA.teams.map((item) => (
              <div key={item.team} className="channel-card">
                <h3>{item.team}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="channel-closing-panel">
          <h2>Why This Dashboard Matters</h2>
          <p>
            The Channel Manager Dashboard creates a single operational view of
            how IP Integration recruits, enables and scales partners. It
            connects strategy with execution, helping the business build a
            repeatable channel model, support the right partners and grow
            predictable revenue through the IPI Partner Advantage program.
          </p>
        </section>
      </div>
    </React.Fragment>
  );
}

const CHANNEL_MARKETING_MISSION_PILLARS = [
  {
    title: "Attract the right partners",
    desc: "Target resellers, consultancies and service providers with a strong enterprise CX customer base and growth ambition.",
  },
  {
    title: "Explain the revenue opportunity",
    desc: "Demonstrate how partners create recurring income by landing with one solution and expanding into a full CX stack.",
  },
  {
    title: "Prove ease of doing business",
    desc: "Show clear onboarding, pre-sales support, delivery services and commercial frameworks that remove partner friction.",
  },
  {
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

function ChannelMarketingPage() {
  return (
    <React.Fragment>
      <Bg />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", paddingBottom: 40 }}>
        <AppPageHeader
          eyebrow="Website Strategy"
          title="Channel Marketing"
          subtitle="Designing a partner-first website experience that helps IP Integration attract, convert and enable reseller partners."
        />

        <SectionWrapper>
          <StandardCard>
            <p className="cm-intro-copy">
              The purpose of this section is to define how IP Integration should present itself online to appeal to channel partners. The website must not just describe products — it must sell the commercial opportunity, explain why partners should work with IPI, show how they make money, and prove how easy it is to do business with us.
            </p>
          </StandardCard>
        </SectionWrapper>

        <SectionWrapper>
          <SectionHeader title="Channel Marketing Mission" description="The website must do more than describe technology. It must sell the business opportunity to a reseller." />
          <HighlightCard>
            <h3 className="cm-highlight-title">Channel Marketing Mission</h3>
            <p className="cm-highlight-copy">Build a partner-first digital experience that positions IP Integration as the easiest and most commercially attractive vendor for resellers to grow recurring CX revenue with.</p>
            <div className="cm-grid-4">
              {CHANNEL_MARKETING_MISSION_PILLARS.map((pillar) => (
                <StandardCard key={pillar.title} className="cm-mini-card">
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
            {[
              ["Why should I partner with you?", "Resellers need to quickly understand what makes IP Integration commercially and strategically different from other vendors. This includes portfolio breadth, partner support, managed services capability, and the ability to help partners grow beyond a single product sale."],
              ["How do I make money?", "The website should show the revenue journey clearly — how a partner can start with any entry point such as SIP, UC, CCaaS, AI or payments and then expand into broader customer opportunities with recurring revenue, services and managed support."],
              ["How easy are you to work with?", "Partners want confidence that they will receive enablement, pre-sales help, delivery support, governance clarity, commercial simplicity and access to the latest documentation without friction."],
            ].map(([title, body]) => (
              <StandardCard key={title} className="cm-big-card">
                <h3>{title}</h3>
                <p>{body}</p>
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
                <span className="channel-chip">{item.badge}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

      </div>
    </React.Fragment>
  );
}



// ═══════════════════════════════════════════════════════
// SIDEBAR NAV WRAPPER
// ═══════════════════════════════════════════════════════
const NAV_ITEMS = [
  {
    id: "main",
    icon: <NavIcon name="home" />,
    label: "IPI Overview",
    sublabel: "IPI Overview",
  },
  {
    id: "bse",
    icon: <NavIcon name="sparkles" />,
    label: "Enable, Land, Expand",
    sublabel: "Enable, Land, Expand",
  },
  { id: "hub", icon: <NavIcon name="academy" />, label: "Partner Enablement", sublabel: "Hub 2026" },
  {
    id: "program",
    icon: <NavIcon name="users" />,
    label: "Ideal Partner Profile",
    sublabel: "Recruitment & IPP",
  },
  {
    id: "governance",
    icon: <NavIcon name="checklist" />,
    label: "Partner Governance",
    sublabel: "Roles & Ownership",
  },
  {
    id: "commercial",
    icon: <NavIcon name="money" />,
    label: "Commercial Framework",
    sublabel: "Legal & Pricing Model",
  },
  {
    id: "partner-trust",
    icon: <NavIcon name="shield" />,
    label: "Partner Trust",
    sublabel: "/partner-trust",
  },
  {
    id: "partner-operational-support",
    icon: <NavIcon name="checklist" />,
    label: "Partner Operational Support",
    sublabel: "Support Framework",
  },
  {
    id: "channel-marketing",
    icon: <NavIcon name="megaphone" />,
    label: "Channel Marketing",
    sublabel: "Partner Website Strategy",
  },
  {
    id: "channel-dashboard",
    icon: <NavIcon name="chart" />,
    label: "Channel Cadence",
    sublabel: "Operational Control Centre",
  },
  {
    id: "prospect",
    icon: <NavIcon name="search" />,
    label: "Partner Prospect Tool",
    sublabel: "Deal Intelligence",
  },
];

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
  prospect: "/partner-prospect-tool",
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

function SideNav({ page, setPage, onLayoutChange }) {
  const SIDEBAR_WIDTH = 250;

  React.useEffect(() => {
    onLayoutChange?.({
      isMobile: false,
      isSidebarPinned: true,
      isCollapsed: false,
      isSidebarVisible: true,
      sidebarWidth: SIDEBAR_WIDTH,
    });
  }, [onLayoutChange]);

  return (
    <React.Fragment>
      <aside className="app-sidebar">
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <div className="sidebar-brand-mark">IPI</div>
            <div className="sidebar-brand-copy">
              <div className="sidebar-title">Partner Advantage</div>
              <div className="sidebar-subtitle">Channel Workspace</div>
            </div>
          </div>
        </div>

        <div className="sidebar-section-label">Program</div>
        <nav className="sidebar-nav">
            {NAV_ITEMS.map((item) => {
              const active = page === item.id;
              return (
                <SidebarNavItem
                  key={item.id}
                  item={item}
                  active={active}
                  collapsed={false}
                  onClick={() => {
                    setPage(item.id);
                  }}
                />
              );
            })}
          </nav>

        <div className="sidebar-footer">
          <div className="sidebar-footer-card">
            <div className="sidebar-footer-title">Channel Workspace</div>
            <div className="sidebar-footer-copy">
              Strategy, governance, enablement and partner planning in one place.
            </div>
          </div>
          <div className="sidebar-footer-meta">© 2026 IP Integration Ltd · Partner Confidential</div>
        </div>
      </aside>
    </React.Fragment>
  );
}

// ═══════════════════════════════════════════════════════
// APP
// ═══════════════════════════════════════════════════════
function App() {
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

  function renderPage() {
    if (page === "channel-dashboard") return <ChannelManagerDashboardPage />;
    if (page === "hub")
      return (
        <EnablementHub onBack={() => setPage("main")} onNavigate={setPage} />
      );
    if (page === "prospect") return <ProspectToolPage />;
    if (page === "bse") return <BuildSellExpand />;
    if (page === "program") return <PartnerProgramPage />;
    if (page === "commercial") return <CommercialFrameworkPage />;
    if (page === "channel-marketing") return <ChannelMarketingPage />;
    if (page === "partner-trust") return <PartnerTrustPage />;
    if (page === "partner-operational-support")
      return <PartnerOperationalSupportPage />;
    if (page === "governance") return <GovernancePage />;

    // Page 1 — Home
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
          }}
        >
          {/* ── HEADER ── */}
          <header
            className="fade-up"
            style={{
              padding: "22px 44px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
              animationDelay: "0.05s",
              paddingLeft: 68,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background:
                    "linear-gradient(135deg,rgba(54,198,255,0.12),rgba(177,143,255,0.08))",
                  border: "1px solid rgba(54,198,255,0.3)",
                  borderRadius: 100,
                  padding: "7px 18px",
                }}
              >
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#36C6FF",
                    boxShadow: "0 0 8px #36C6FF",
                    animation: "liveDot 2.2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#67D8FF",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  IPI Partner Advantage
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: "rgba(54,198,255,0.5)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  2026
                </span>
              </div>
            </div>
          </header>

          {/* ── PAGE TITLE / HERO HEADING ── */}
          <div
            className="fade-up"
            style={{
              textAlign: "center",
              padding: "36px 40px 0",
              animationDelay: "0.1s",
              paddingLeft: "calc(40px + 0px)",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(32px,5.5vw,68px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
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
                <h2
                  style={{
                    fontSize: "clamp(18px,2.6vw,30px)",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    marginBottom: 10,
                    fontFamily: "'Syne',sans-serif",
                  }}
                >
                  How we go to market{" "}
                  <span style={{ color: "#36C6FF" }}>with partners</span>
                </h2>
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
                    color: "#fff",
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
    const onPopState = () => {
      const relativePath = toBaseRelativePath(window.location.pathname);
      setPage(PATH_TO_PAGE[relativePath] || "main");
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const currentPageMeta = NAV_ITEMS.find((item) => item.id === page) || NAV_ITEMS[0];

  return (
    <AppShell
      sidebar={<SharedSidebar page={page} setPage={setPage} onLayoutChange={setSidebarLayout} />}
      topbar={<AppTopBar title={currentPageMeta?.label || "Dashboard"} />}
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
