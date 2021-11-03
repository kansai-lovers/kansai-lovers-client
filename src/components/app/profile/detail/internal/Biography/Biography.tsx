import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { GitHub as GitHubIcon } from "@mui/icons-material";
import * as Styled from "./styled";
import { Paper } from "src/components/shares/Paper";

export const Biography = () => {
  return (
    <Box display="flex" gap="24px" flexWrap="wrap">
      <Box display="flex">
        <Styled.StyledImage
          src="/octcat.png"
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
            Hiroki Kondo
          </Typography>
          <Box display="flex" gap="6px" alignItems="center">
            <GitHubIcon fontSize="small" />
            <Typography variant="h6">hirokikondo86</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="105px"
      >
        <Paper pt="12px" pr="24px" pb="12px" pl="24px">
          <Styled.StyledTypography>
            関西LOVERS 〜何度ここへ来てたって大阪弁は上手になれへんし〜
          </Styled.StyledTypography>
        </Paper>
        <Box display="flex" gap={2}>
          <a href="https://qiita.com">
            <Image src="/octcat.png" width="24" height="24" alt="SNS icon" />
          </a>
          <a href="https://note.com">
            <Image src="/octcat.png" width="24" height="24" alt="SNS icon" />
          </a>
          <a href="https://blog.gorinya.me">
            <Image src="/octcat.png" width="24" height="24" alt="SNS icon" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};
