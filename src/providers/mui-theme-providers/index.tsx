"use client";
import { FC } from "react";
import { ThemeProvider } from "@mui/material";
// types
import { LayoutChildrenProps } from "@/src/config/theme/types";
// components
import ThemeConfigs from "@/src/config/theme";

const MuiThemeProvider: FC<LayoutChildrenProps> = (props) => {
  return (
    <ThemeProvider
      theme={ThemeConfigs({
        fontSize: "1rem",
        matches: true,
        primaryThemeColors: {
          primary: "#1565c0",
          secondary: "#40c4ff",
          neutral: "#686a8a",
          textPrimary: "#FFF",
          textSecondary: "#000",
          textSubtitle: "#686a8a",
          textButton: "#40c4ff",
          error: "#f44336",
          warning: "#ffc700",
          success: "#00c853",
          icon: "#40c4ff",
        },
      })}
    >
      {props.children}
    </ThemeProvider>
  );
};
export default MuiThemeProvider;
