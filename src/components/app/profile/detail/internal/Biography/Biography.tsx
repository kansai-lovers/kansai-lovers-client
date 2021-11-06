import { VFC } from "react";
import { Box, Typography } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import * as Styled from "./styled";
import { Tag } from "src/components/shares/Tag";
import { Tag as TagType } from "src/@types/generate/models/tag";

type Props = {
  username: string;
  repoUrl: string;
  avatarUrl: string;
  joinDate: string;
  tags: TagType[] | null;
};

export const Biography: VFC<Props> = ({
  username,
  repoUrl,
  avatarUrl,
  joinDate,
  tags,
}) => {
  return (
    <Box display="flex" gap="24px" flexWrap="wrap">
      <Box display="flex">
        <Styled.StyledImage
          src={avatarUrl}
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
            {username}
          </Typography>
          <Box display="flex" gap="6px" alignItems="center">
            <GitHubIcon fontSize="small" />
            <a href={repoUrl}>
              <Typography variant="h6">{username}</Typography>
            </a>
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap="8px" height="105px">
        <Typography variant="h6">入社時期：{joinDate}</Typography>
        <Box display="flex" flexWrap="wrap" gap="6px">
          {tags?.map((tag, i) => (
            <Tag key={i} color={tag.color}>
              {tag.value}
            </Tag>
          )) ?? "タグがありません。"}
        </Box>
      </Box>
    </Box>
  );
};
