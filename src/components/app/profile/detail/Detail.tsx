import { VFC } from "react";
import { Box } from "@mui/material";
import { Biography } from "./internal/Biography";
import { Stats } from "./internal/Stats";
import { Member } from "src/@types/generate/models";

type Props = {
  member: Member;
};

export const Detail: VFC<Props> = ({ member }) => {
  return (
    <Box px="32px" py="48px">
      <Biography
        username={member.login}
        repoUrl={member.url}
        avatarUrl={member.avatar_url}
        joinDate={member.join_date}
        tags={member.tags}
      />
      <Box mb="48px" />
      <Stats username={member.login} />
    </Box>
  );
};
