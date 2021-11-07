import { VFC } from "react";
import { Box } from "@mui/material";
import { Biography } from "./internal/Biography";
import { Stats } from "./internal/Stats";
import { Member, SkillScore } from "src/@types/generate/models";

type Props = {
  member: Member;
  skillScore: SkillScore;
};

export const Detail: VFC<Props> = ({ member, skillScore }) => {
  return (
    <Box px="32px" py="48px">
      <Biography member={member} />
      <Box mb="48px" />
      <Stats memberGitHubName={member.github_name} skillScore={skillScore} />
    </Box>
  );
};
