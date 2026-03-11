window.appTheme = {
  colors: {
    background: "#070b14",
    surface: "#0f1727",
    surfaceAlt: "#162033",
    surfaceMuted: "rgba(143, 193, 255, 0.05)",
    border: "rgba(127, 164, 216, 0.22)",
    borderStrong: "rgba(102, 203, 255, 0.45)",
    primary: "#36c6ff",
    primaryHover: "#1cb2f0",
    secondaryBg: "rgba(255,255,255,0.06)",
    textPrimary: "#f5fbff",
    textSecondary: "#c7d9ea",
    textMuted: "#8ea6bf",
    success: "#2fd49f",
    warning: "#f2bd53",
    danger: "#ff6a84",
    info: "#72b5ff"
  },
  typography: {
    fontFamily: "'Nunito Sans','Helvetica Neue',Arial,sans-serif",
    titleFamily: "'Syne',sans-serif",
    pageTitle: "clamp(28px,4vw,54px)",
    sectionTitle: "clamp(22px,2.6vw,34px)",
    cardTitle: "18px",
    body: "14px",
    small: "12px"
  },
  spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px", xxl: "48px" },
  radius: { sm: "12px", md: "18px", lg: "22px", pill: "999px" },
  shadows: {
    subtle: "0 12px 28px rgba(3,10,24,0.32)",
    medium: "0 16px 36px rgba(2,8,20,0.46)",
    elevated: "0 24px 54px rgba(2,8,20,0.6)"
  },
  layout: {
    pagePaddingX: "44px",
    sectionPaddingY: "32px",
    maxContentWidth: "none",
    cardPadding: "24px",
    buttonHeight: "38px"
  },
  zIndex: { base: 1, dropdown: 100, sticky: 1000, modal: 2000 }
};

(function applyTheme(theme) {
  if (!theme || !document?.documentElement) return;
  const root = document.documentElement;
  const vars = {
    '--ds-bg': theme.colors.background,
    '--ds-surface': theme.colors.surface,
    '--ds-surface-soft': theme.colors.surfaceAlt,
    '--ds-surface-muted': theme.colors.surfaceMuted,
    '--ds-border': theme.colors.border,
    '--ds-border-strong': theme.colors.borderStrong,
    '--ds-primary': theme.colors.primary,
    '--ds-primary-hover': theme.colors.primaryHover,
    '--ds-text': theme.colors.textPrimary,
    '--ds-text-secondary': theme.colors.textSecondary,
    '--ds-text-muted': theme.colors.textMuted,
    '--ds-success': theme.colors.success,
    '--ds-warning': theme.colors.warning,
    '--ds-danger': theme.colors.danger,
    '--ds-info': theme.colors.info,
    '--ds-title': theme.typography.titleFamily,
    '--ds-body': theme.typography.fontFamily,
    '--ds-space-xs': theme.spacing.xs,
    '--ds-space-sm': theme.spacing.sm,
    '--ds-space-md': theme.spacing.md,
    '--ds-space-lg': theme.spacing.lg,
    '--ds-space-xl': theme.spacing.xl,
    '--ds-space-xxl': theme.spacing.xxl,
    '--ds-radius-sm': theme.radius.sm,
    '--ds-radius-md': theme.radius.md,
    '--ds-radius-lg': theme.radius.lg,
    '--ds-radius-pill': theme.radius.pill,
    '--ds-shadow-sm': theme.shadows.subtle,
    '--ds-shadow-md': theme.shadows.medium,
    '--ds-shadow-lg': theme.shadows.elevated,
  };
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
})(window.appTheme);
