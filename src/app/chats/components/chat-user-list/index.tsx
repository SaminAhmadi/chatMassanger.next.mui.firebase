// main
import { FC } from "react";
import { Stack } from "@mui/material";
// components
import UserChat from "@/src/core/common/user-chat";

const ChatUserList: FC = () => {
  return (
    <Stack pt={2} useFlexGap spacing={1.5}>
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
      <UserChat />
    </Stack>
  );
};
export default ChatUserList;
