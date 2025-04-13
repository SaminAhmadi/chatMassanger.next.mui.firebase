"use client";
// main
import { FC } from "react";
import { useTheme } from "@mui/material";
import * as Icons from "iconsax-react";
import { IconProps } from "iconsax-react";

// types
interface customIconProps extends IconProps {
  icon: keyof typeof Icons;
  color?: string;
}

const IconProvider: FC<customIconProps> = (props) => {
  const theme = useTheme();
  const IconComponent = Icons[props.icon];
  return (
    <IconComponent
      {...props}
      color={props.color ? props.color : theme.palette.icon.main}
    />
  );
};
export default IconProvider;
