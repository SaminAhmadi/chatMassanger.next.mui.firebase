// main
import { FC } from "react";
import { Avatar, Stack, Typography } from "@mui/material";

const UserChat: FC = () => {
  return (
    <Stack
      width="100%"
      direction="row"
      useFlexGap
      spacing={1}
      alignItems="flex-start"
      sx={{ borderBottom: "0.1rem solid grey" }}
    >
      <Avatar
        alt="contact profile"
        src="/images/Avatar.png"
        sx={{ width: "3.8rem", height: "3.8rem", objectFit: "fill" }}
      />
      <Stack justifyContent="center">
        <Typography variant="h6">یوسف محمدی</Typography>
        <Typography variant="caption">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
      </Stack>
    </Stack>
  );
};
export default UserChat;
