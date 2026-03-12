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
    },
  };

  const dsShared = {
    "--font-primary": "'Proxima Nova', Aptos, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    "--space-1": "4px",
    "--space-2": "8px",
    "--space-3": "12px",
    "--space-4": "16px",
    "--space-5": "24px",
    "--space-6": "32px",
    "--space-7": "40px",
    "--space-8": "56px",
    "--radius-card": "18px",
    "--content-max": "1280px",
    "--shadow-soft": "0 10px 28px rgba(0,0,0,0.08)",
  };

  const media = window.matchMedia("(prefers-color-scheme: dark)");

  function resolveTheme(mode) {
    if (mode === "system") return media.matches ? "dark" : "light";
    return mode === "dark" ? "dark" : "light";
  }

  function getMode() {
    return localStorage.getItem(STORAGE_KEY) || "system";
  }

  function applyMode(mode) {
    const resolved = resolveTheme(mode);
    root.dataset.theme = resolved;
    root.dataset.themeMode = mode;

    Object.entries(dsShared).forEach(([key, value]) => root.style.setProperty(key, value));
    Object.entries(tokens[resolved]).forEach(([key, value]) => root.style.setProperty(key, value));
  }

  function setMode(mode) {
    const safeMode = ["light", "dark", "system"].includes(mode) ? mode : "system";
    localStorage.setItem(STORAGE_KEY, safeMode);
    applyMode(safeMode);
    window.dispatchEvent(new CustomEvent("ipi-theme-change", { detail: { mode: safeMode } }));
  }

  media.addEventListener("change", () => {
    if (getMode() === "system") applyMode("system");
  });

  // Always launch in dark mode, regardless of previously persisted preference.
  setMode("dark");

  window.appTheme = { setMode, getMode, resolveTheme };
})();
