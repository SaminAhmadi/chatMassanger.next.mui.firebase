"use client";
import { ThemeProps } from "src/config/theme/types";
import { palette } from "src/config/theme/palette";
import { createTheme } from "@mui/material";
import { components } from "src/config/theme/Components";
import { Breakpoints } from "src/config/theme/breakpoints";
import { ZIndex } from "src/config/theme/zIndex";
import { typoGraphy } from "src/config/theme/typography";

const ThemeConfigs = (Props: ThemeProps) => {
  return createTheme({
    palette: palette(),
    typography: typoGraphy(Props),
    components: components(Props),
    breakpoints: Breakpoints(),
    zIndex: ZIndex(),
  });
};
export default ThemeConfigs;
