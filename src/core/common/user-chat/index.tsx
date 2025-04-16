// main
import { FC } from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { ChatUserCardProps } from "@/src/app/chats/components/types";

const UserChat: FC<ChatUserCardProps> = (props) => {
  return (
    <>
      <Stack
        width="100%"
        direction="row"
        useFlexGap
        spacing={1}
        alignItems="flex-start"
      >
        <Avatar
          alt="contact profile"
          src={props.avatar}
          sx={{ width: "3.8rem", height: "3.8rem", objectFit: "fill" }}
        />
        <Stack justifyContent="center">
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="caption">{props.message}</Typography>
        </Stack>
      </Stack>
      <hr />
    </>
  );
};
export default UserChat;
