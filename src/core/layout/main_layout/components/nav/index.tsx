"use client";
// main
import { FC } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
// components
import IconProvider from "@/src/providers/icon-provider";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomNav: FC = () => {
  const theme = useTheme();
  const pathname = usePathname();
  return (
    <Stack width="full" direction="row" justifyContent="space-between">
      <Link href="/chats" style={{ textDecoration: "none" }}>
        <Stack alignItems="center">
          <IconProvider
            icon="Message"
            size={32}
            cursor="pointer"
            color={
              pathname === "/chats"
                ? theme.palette.icon.dark
                : theme.palette.icon.light
            }
            variant={pathname === "/chats" ? "Bold" : "Linear"}
          />
          <Typography variant="body1" sx={{ textDecoration: "none" }}>
            چت ها
          </Typography>
        </Stack>
      </Link>
      <Link href="/profile" style={{ textDecoration: "none" }}>
        <Stack alignItems="center">
          <IconProvider
            icon="Profile"
            size={32}
            cursor="pointer"
            color={
              pathname === "/profile"
                ? theme.palette.icon.dark
                : theme.palette.icon.light
            }
            variant={pathname === "/profile" ? "Bold" : "Linear"}
          />
          <Typography variant="body1" sx={{ textDecoration: "none" }}>
            پروفایل
          </Typography>
        </Stack>
      </Link>
      <Link href="/contacts" style={{ textDecoration: "none" }}>
        <Stack alignItems="center">
          <IconProvider
            icon="People"
            size={32}
            cursor="pointer"
            color={
              pathname === "/contacts"
                ? theme.palette.icon.dark
                : theme.palette.icon.light
            }
            variant={pathname === "/contacts" ? "Bold" : "Linear"}
          />
          <Typography variant="body1">مخاطبین</Typography>
        </Stack>
      </Link>
    </Stack>
  );
};
export default BottomNav;
