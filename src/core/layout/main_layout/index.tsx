// main
import { FC } from "react";
import { Container } from "@mui/material";
// providers
import MuiThemeProvider from "@/src/providers/mui-theme-providers";
// types
import { MainLayoutProps } from "@/src/core/layout/main_layout/types";
// components
import Header from "@/src/core/layout/main_layout/components/header";

const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <MuiThemeProvider>
      <Container
        component="header"
        sx={{
          maxWidth: "12rem",
          bgcolor: "primary.main",
          borderTopLeftRadius: "1.2rem",
          borderTopRightRadius: "1.2rem",
          pt: 10,
          pb: 4,
        }}
      >
        <Header />
      </Container>
      <Container
        component="main"
        sx={{ maxWidth: "12rem", bgcolor: "secondary.main" }}
      >
        {props.children}
      </Container>
      <Container
        component="footer"
        sx={{ maxWidth: "12rem", bgcolor: "secondary.main" }}
      >
        فوتر
      </Container>
    </MuiThemeProvider>
  );
};
export default MainLayout;
