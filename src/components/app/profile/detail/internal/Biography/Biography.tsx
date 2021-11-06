import { VFC } from "react";
import { Box, Typography } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import * as Styled from "./styled";
import { Tag } from "src/components/shares/Tag";
import { Member } from "src/@types/generate/models";
import { Chip } from "src/@types/generate/models/chip";

type Props = {
  member: Member;
};

export const Biography: VFC<Props> = ({ member }) => {
  return (
    <Box display="flex" flexWrap="wrap" alignItems="center" gap="24px">
      <Box display="flex">
        <Styled.StyledImage
          src={member.avatar_url}
          width="100"
          height="100"
          alt="user"
        />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          p="16px"
        >
          <Typography variant="h4" fontWeight="bold">
            {member.login}
          </Typography>
          <Box display="flex" gap="6px" alignItems="center">
            <GitHubIcon fontSize="small" />
            <a href={member.url}>
              <Typography variant="h6">{member.login}</Typography>
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="105px"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="8px"
        >
          <Typography variant="h6">入社時期：{member.join_date}</Typography>
          <Box display="flex" flexWrap="wrap" gap="6px">
            {member.chips?.map((chip: Chip, i: number) => (
              <Tag key={i} color={chip.color}>
                {chip.value}
              </Tag>
            )) ?? "タグがありません。"}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
