// main
import { FC } from "react";
import { Stack } from "@mui/material";
// components
import UserChat from "@/src/core/common/user-chat";
import { ChatUserCardData } from "@/src/app/chats/components/data";

const ChatUserList: FC = () => {
  return (
    <Stack pt={2} useFlexGap spacing={1.5}>
      {ChatUserCardData.map((chatCard) => (
        <UserChat
          key={chatCard.id}
          avatar={chatCard.avatar}
          name={chatCard.name}
          message={chatCard.message}
        />
      ))}
    </Stack>
  );
};
export default ChatUserList;
