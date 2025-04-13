declare module "@mui/material/styles" {
  interface Palette {
    icon: Palette["primary"];
  }

  interface PaletteOptions {
    icon: PaletteOptions["primary"];
  }
}
export const palette = () => {
  return {
    primary: {
      light: "#4484cd",
      main: "#1565c0",
      dark: "#092a51",
    },
    secondary: {
      light: "#FFF",
      main: "#40c4ff",
      dark: "#1b526b",
    },
    neutral: {
      light: "#d0d1db",
      main: "#686a8a",
      dark: "#2c2d3a",
    },
    error: {
      light: "#f6695e",
      main: "#f44336",
      dark: "#ad3026",
    },
    warning: {
      light: "#ffd954",
      main: "#ffc700",
      dark: "#6b5400",
    },
    success: {
      light: "#54da8c",
      main: "#00c853",
      dark: "#005423",
    },
    button: {
      main: "#40c4ff",
    },
    icon: {
      light: "#686a8a",
      main: "#FFF",
      dark: "#40c4ff",
    },
  };
};
