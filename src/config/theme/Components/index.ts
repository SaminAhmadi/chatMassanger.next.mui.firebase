import { ThemeProps } from "src/config/theme/types";

export const components = (Props: ThemeProps) => {
  return {
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          padding: "0 !important",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "#000",
            padding: 10,
          },
          "& .MuiInputBase-input::placeholder": {
            fontSize: "1rem",
            color: "#191A23",
            opacity: 1,
          },
          width: "100%",
          backgroundColor: "#e7e8e9",
          borderRadius: "0.5rem",
          "& .MuiOutlinedInput-notchedOutline": {
            color: Props.primaryThemeColors?.primary,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: "0 !important",
        },
      },
    },
  };
};
