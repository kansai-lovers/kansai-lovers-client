import { VFC } from "react";
import { Box } from "@mui/system";
import * as Styled from "./styled";

type Props = {
  username: string;
};

export const Stats: VFC<Props> = ({ username }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap="16px">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Styled.Img
        src={`https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&show_icons=true`}
        alt="GitHub Stats"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Styled.Img
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&langs_count=3`}
        alt="GitHub Stats Language"
      />
    </Box>
  );
};
