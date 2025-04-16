// main
import { Stack } from "@mui/material";
import { FC } from "react";
// components
import ChatUserList from "@/src/app/chats/components/chat-user-list";

const Home: FC = () => {
  return (
    <Stack>
      <ChatUserList />
    </Stack>
  );
};
export default Home;
