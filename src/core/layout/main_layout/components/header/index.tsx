// main
import { FC } from "react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
// components
import IconProvider from "@/src/providers/icon-provider";

const Header: FC = () => {
  return (
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
        <IconProvider icon="Add" size={30} cursor="pointer" />
      </Stack>
    </Stack>
  );
};
export default Header;
