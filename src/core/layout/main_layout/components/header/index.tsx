"use client";
// main
import { FC, useState } from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
// components
import IconProvider from "@/src/providers/icon-provider";
import TopMenu from "@/src/core/layout/main_layout/components/header/top-menu";

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleTopMenu = (newValue: boolean) => {
    setOpen(!newValue);
  };
  return (
    <Stack width="100%" position="relative">
      <Stack
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Stack direction="row" alignItems="center">
          <Image
            src="/images/Logo.png"
            alt="logo"
            width={65}
            height={65}
            priority
            quality={100}
          />
          <Typography variant="h1">ای - چت</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" useFlexGap spacing={2}>
          <IconProvider icon="SearchNormal1" size={30} cursor="pointer" />
          <IconProvider
            icon="Add"
            size={30}
            cursor="pointer"
            onClick={() => handleTopMenu(open)}
          />
        </Stack>
      </Stack>
      {open && (
        <Stack
          width="100%"
          alignItems="end"
          position="absolute"
          top="100%"
          right={0}
          zIndex={10}
        >
          <TopMenu />
        </Stack>
      )}
    </Stack>
  );
};
export default Header;
