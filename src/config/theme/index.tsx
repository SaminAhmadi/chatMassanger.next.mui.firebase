"use client";
// types
import { ThemeProps } from "@/src/config/theme/types";
// components
import { palette } from "@/src/config/theme/palette";
import { createTheme } from "@mui/material";
import { components } from "@/src/config/theme/Components";
import { Breakpoints } from "@/src/config/theme/breakpoints";
import { ZIndex } from "@/src/config/theme/zIndex";
import { typography } from "@/src/config/theme/typography";

const ThemeConfigs = (Props: ThemeProps) => {
  return createTheme({
    palette: palette(),
    typography: typography(Props),
    components: components(Props),
    breakpoints: Breakpoints(),
    zIndex: ZIndex(),
  });
};
export default ThemeConfigs;
