window.appTheme = {
  colors: {
    background: "#0f171c",
    surface: "#17242b",
    surfaceAlt: "#1c2b33",
    surfaceMuted: "rgba(255,255,255,0.03)",
    border: "rgba(145,196,176,0.22)",
    borderStrong: "rgba(145,196,176,0.36)",
    primary: "#63AB8F",
    primaryHover: "#4D9378",
    secondaryBg: "rgba(255,255,255,0.05)",
    textPrimary: "#e9f4f1",
    textSecondary: "#c5ddd6",
    textMuted: "#9bb6b0",
    success: "#63AB8F",
    warning: "#D4A843",
    danger: "#D68A8A",
    info: "#7B96A3"
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
  radius: { sm: "10px", md: "14px", lg: "18px", pill: "999px" },
  shadows: {
    subtle: "0 8px 20px rgba(5,12,18,0.22)",
    medium: "0 14px 36px rgba(5,12,18,0.35)",
    elevated: "0 22px 48px rgba(5,12,18,0.45)"
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
