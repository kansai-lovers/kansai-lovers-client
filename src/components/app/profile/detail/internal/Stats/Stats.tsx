import { VFC } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import * as Styled from "./styled";
import { Paper } from "src/components/shares/Paper";
import { SkillScore } from "src/components/shares/SkillScore";
import { SkillScore as SkillScoreType } from "src/@types/generate/models";
import { theme } from "src/config/theme";

type Props = {
  memberGitHubName: string;
  skillScore: SkillScoreType;
};

export const Stats: VFC<Props> = ({ memberGitHubName, skillScore }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap="16px">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Styled.Img
        src={`https://github-readme-stats.vercel.app/api?username=${memberGitHubName}&count_private=true&show_icons=true`}
        alt="GitHub Stats"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Styled.Img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${memberGitHubName}&langs_count=3`}
        alt="GitHub Stats Language"
      />
      <Paper height="330px" pt="8px" pr="32px" pb="8px" pl="32px">
        <Box my="16px">
          <Typography variant="h5" color={theme.palette.primary.main}>
            Skill Score
          </Typography>
        </Box>
        <SkillScore score={skillScore} />
      </Paper>
    </Box>
  );
};
