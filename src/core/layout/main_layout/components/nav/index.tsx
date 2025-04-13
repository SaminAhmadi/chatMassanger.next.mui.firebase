"use client";
// main
import { FC } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
// components
import IconProvider from "@/src/providers/icon-provider";

const BottomNav: FC = () => {
  const theme = useTheme();
  return (
    <Stack width="full" direction="row" justifyContent="space-between">
      <Stack alignItems="center">
        <IconProvider
          icon="Message"
          size={28}
          cursor="pointer"
          color={theme.palette.icon.light}
        />
        <Typography variant="body1">چت ها</Typography>
      </Stack>
      <Stack alignItems="center">
        <IconProvider
          icon="Profile"
          size={28}
          cursor="pointer"
          color={theme.palette.icon.light}
        />
        <Typography variant="body1">پروفایل</Typography>
      </Stack>
      <Stack alignItems="center">
        <IconProvider
          icon="HambergerMenu"
          size={28}
          cursor="pointer"
          color={theme.palette.icon.light}
        />
        <Typography variant="body1">تنظیمات</Typography>
      </Stack>
    </Stack>
  );
};
export default BottomNav;
