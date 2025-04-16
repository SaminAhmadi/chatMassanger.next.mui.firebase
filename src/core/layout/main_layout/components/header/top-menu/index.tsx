"use client";
// main
import { FC } from "react";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
// components
import IconProvider from "@/src/providers/icon-provider";

const TopMenu: FC = () => {
  const theme = useTheme();
  return (
    <Paper sx={{ width: "45%", borderRadius: "0.7rem" }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <IconProvider
              icon="User"
              color={theme.palette.icon.light}
              size={22}
            />
          </ListItemIcon>
          <ListItemText>
            <Typography variant="body1" color="textPrimary">
              دوست جدید اضافه کن
            </Typography>
          </ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
};
export default TopMenu;
