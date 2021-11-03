import { Paper, styled } from "@mui/material";

export type StyledPaperProps = {
  width: string;
  height: string;
  pt: string;
  pr: string;
  pb: string;
  pl: string;
};

export const StyledPaper = styled(Paper)<StyledPaperProps>(
  ({ width, height, pt, pr, pb, pl }) => ({
    width,
    height,
    padding: `${pt} ${pr} ${pb} ${pl}`,
    borderRadius: "10px",
  })
);
