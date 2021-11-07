import { VFC } from "react";
import { alpha, Box, Typography } from "@mui/material";
import { Radar } from "react-chartjs-2";
import * as Styled from "./styled";
import { getBackgroundColor } from "./constants";
import { SkillScore as SkillScoreType } from "src/@types/generate/models";

type Props = {
  score: SkillScoreType;
};

export const SkillScore: VFC<Props> = ({ score }) => {
  const data = {
    labels: ["コミュニケーションスキル", "実装スキル", "設計スキル"],
    datasets: [
      {
        label: "偏差値",
        data: [score.communication, score.implementation, score.design],
        backgroundColor: alpha("#E70A0A", 0.5),
        borderColor: alpha("#E70A0A", 0.5),
        pointBackgroundColor: alpha("#E70A0A", 0.5),
        pointBorderColor: alpha("#E70A0A", 0.5),
      },
    ],
  };

  // グラフの上に出るLabel消したい
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    scale: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
      },
    },
  };

  return (
    <Box display="flex" gap="32px" alignItems="center">
      <Box>
        <Radar data={data} options={options} />
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Box display="flex" alignItems="center" gap="10px">
          <Styled.Score color={getBackgroundColor(score.communication)}>
            {score.communication}
          </Styled.Score>
          <Typography variant="h6">コミュニケーションスキル</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Styled.Score color={getBackgroundColor(score.implementation)}>
            {score.implementation}
          </Styled.Score>
          <Typography variant="h6">実装スキル</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Styled.Score color={getBackgroundColor(score.design)}>
            {score.design}
          </Styled.Score>
          <Typography variant="h6">設計スキル</Typography>
        </Box>
      </Box>
    </Box>
  );
};
