import { ReactNode } from "react";

export interface LayoutChildrenProps {
  children?: ReactNode;
}

export type ThemeProps = {
  matches: boolean;
  fontSize: string;
  primaryThemeColors: {
    primary: string;
    secondary: string;
    neutral: string;
    textPrimary: string;
    textSecondary: string;
    textSubtitle: string;
    textButton: string;
    error: string;
    warning: string;
    success: string;
    icon: string;
  };
};
