(function initThemeSystem() {
  const STORAGE_KEY = "ipi_theme_mode_v1";
  const root = document.documentElement;

  const tokens = {
    light: {
      "--bg-app": "#F7FBFC",
      "--bg-surface": "#FFFFFF",
      "--bg-subtle": "#EBFAFF",
      "--bg-tint": "#D7F5FF",
      "--border-soft": "#DCE7EA",
      "--text-primary": "#36454F",
      "--text-secondary": "#5E6A72",
      "--heading-primary": "#4F3645",
      "--brand-primary": "#4F3645",
      "--brand-secondary": "#63AB8F",
      "--brand-accent": "#C8988C",
      "--link": "#2F7F68",
      "--focus": "#A37992",
      "--chart-1": "#4F3645",
      "--chart-2": "#63AB8F",
      "--chart-3": "#C8988C",
      "--chart-4": "#D7F5FF",
      "--chart-5": "#5E6A72",
      "--ds-bg": "#F1F7FA",
      "--ds-surface": "#FFFFFF",
      "--ds-surface-soft": "#EEF5F8",
      "--ds-surface-muted": "rgba(31, 62, 78, 0.04)",
      "--ds-border": "rgba(79, 106, 124, 0.22)",
      "--ds-border-strong": "rgba(79, 106, 124, 0.36)",
      "--ds-text": "#2E3E49",
      "--ds-text-muted": "#5B6B76",
      "--ds-shadow-sm": "0 8px 20px rgba(18,34,46,0.10)",
      "--ds-shadow-md": "0 14px 36px rgba(18,34,46,0.16)",
      "--ds-shadow-lg": "0 22px 48px rgba(18,34,46,0.20)",
    },
    dark: {
      "--bg-app": "#1F272B",
      "--bg-surface": "#263337",
      "--bg-subtle": "#2C3A40",
      "--bg-tint": "#2A3E45",
      "--border-soft": "#3E4B50",
      "--text-primary": "#EFF6F3",
      "--text-secondary": "#D0E5DD",
      "--heading-primary": "#D7B7C8",
      "--brand-primary": "#D7B7C8",
      "--brand-secondary": "#82BBA5",
      "--brand-accent": "#C8988C",
      "--link": "#91C4B0",
      "--focus": "#D7F5FF",
      "--chart-1": "#D7B7C8",
      "--chart-2": "#82BBA5",
      "--chart-3": "#C8988C",
      "--chart-4": "#91C4B0",
      "--chart-5": "#D0E5DD",
      "--ds-bg": "#0F171C",
      "--ds-surface": "#17242B",
      "--ds-surface-soft": "#1C2B33",
      "--ds-surface-muted": "rgba(255,255,255,0.03)",
      "--ds-border": "rgba(145,196,176,0.22)",
      "--ds-border-strong": "rgba(145,196,176,0.36)",
      "--ds-text": "#E9F4F1",
      "--ds-text-muted": "#9BB6B0",
      "--ds-shadow-sm": "0 8px 20px rgba(5,12,18,0.22)",
      "--ds-shadow-md": "0 14px 36px rgba(5,12,18,0.35)",
      "--ds-shadow-lg": "0 22px 48px rgba(5,12,18,0.45)",
    },
  };

  const dsShared = {
    "--font-primary": "'Proxima Nova', Aptos, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "--font-title": "'Syne', 'Proxima Nova', Aptos, Inter, sans-serif",
    "--text-xs": "12px",
    "--text-sm": "14px",
    "--text-md": "16px",
    "--text-lg": "20px",
    "--text-xl": "28px",
    "--space-1": "4px",
    "--space-2": "8px",
    "--space-3": "12px",
    "--space-4": "16px",
    "--space-5": "24px",
    "--space-6": "32px",
    "--space-7": "40px",
    "--space-8": "56px",
    "--section-space": "32px",
    "--section-space-lg": "56px",
    "--radius-xs": "8px",
    "--radius-sm": "10px",
    "--radius-md": "14px",
    "--radius-lg": "18px",
    "--radius-pill": "999px",
    "--radius-card": "18px",
    "--content-max": "1120px",
    "--content-max-wide": "1240px",
    "--shadow-xs": "0 2px 8px rgba(0,0,0,0.06)",
    "--shadow-soft": "0 10px 28px rgba(0,0,0,0.08)",
    "--shadow-md": "0 16px 36px rgba(0,0,0,0.12)",
    "--focus-ring": "0 0 0 3px color-mix(in srgb,var(--focus) 38%, transparent)",
    "--status-success-bg": "color-mix(in srgb,var(--brand-secondary) 20%, transparent)",
    "--status-warning-bg": "rgba(245, 158, 11, 0.18)",
    "--status-danger-bg": "rgba(239, 68, 68, 0.18)",
  };

  function resolveTheme(mode) {
    return mode === "light" ? "light" : "dark";
  }

  function getMode() {
    const savedMode = localStorage.getItem(STORAGE_KEY);
    return savedMode === "light" ? "light" : "dark";
  }

  function applyMode(mode) {
    const resolved = resolveTheme(mode);
    root.dataset.theme = resolved;
    root.dataset.themeMode = mode;

    Object.entries(dsShared).forEach(([key, value]) => root.style.setProperty(key, value));
    Object.entries(tokens[resolved]).forEach(([key, value]) => root.style.setProperty(key, value));
  }

  function setMode(mode) {
    const safeMode = ["light", "dark"].includes(mode) ? mode : "dark";
    localStorage.setItem(STORAGE_KEY, safeMode);
    applyMode(safeMode);
    window.dispatchEvent(new CustomEvent("ipi-theme-change", { detail: { mode: safeMode } }));
  }

  applyMode(getMode());

  window.appTheme = { setMode, getMode, resolveTheme };
})();
