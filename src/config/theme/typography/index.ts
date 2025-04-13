// types
import { ThemeProps } from "@/src/config/theme/types";

export const typography = (Props: ThemeProps) => {
  return {
    h1: {
      fontSize: "3rem",
      fontWeight: 900,
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textPrimary,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "900",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "800",
      lineHeight: "2.5rem",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    h4: {
      fontSize: "1.25rem",
      fontWeight: "800",
      lineHeight: "2rem",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    h5: {
      fontSize: "1.125rem",
      fontWeight: "800",
      lineHeight: "2rem",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "800",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "700",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textPrimary,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: "700",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: "700",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSecondary,
    },
    subtitle1: {
      fontSize: "0.857rem",
      fontWeight: "400",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSubtitle,
    },
    subtitle2: {
      fontSize: "0.857rem",
      fontWeight: "700",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textSubtitle,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: "700",
      letterSpacing: "-1%",
      color: Props.primaryThemeColors.textButton,
    },
    fontWeightRegular: "500",
    fontWeightBold: "600",
    fontSize: Number(Props.fontSize),
    fontFamily: [
      "iranyekan",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  };
};
