import Image from "next/image";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const StyledImage = styled(Image)(() => ({
  borderRadius: "10px",
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  padding: "4px 0",
  paddingLeft: "12px",
  borderLeft: `3px solid ${theme.palette.common.black}`,
}));
