// main
import { FC } from "react";
import { Container } from "@mui/material";
// providers
import MuiThemeProvider from "@/src/providers/mui-theme-providers";
// types
import { MainLayoutProps } from "@/src/core/layout/main_layout/types";
// components
import Header from "@/src/core/layout/main_layout/components/header";
import BottomNav from "@/src/core/layout/main_layout/components/nav";

const MainLayout: FC<MainLayoutProps> = (props) => {
  return (
    <MuiThemeProvider>
      <Container
        component="header"
        maxWidth="sm"
        sx={{
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
        maxWidth="sm"
        sx={{
          height: "calc(80rem - 100vh)",
          bgcolor: "secondary.light",
          overflowY: "scroll",
        }}
      >
        {props.children}
      </Container>
      <Container
        component="nav"
        maxWidth="sm"
        sx={{
          bgcolor: "secondary.light",
          px: 2,
          py: 3,
          boxShadow: "-1px -2px 23px -9px rgba(0,0,0,0.6)",
        }}
      >
        <BottomNav />
      </Container>
    </MuiThemeProvider>
  );
};
export default MainLayout;
