import { styled } from "@mui/material";
import { Color, ColorKey } from "./constants";

export const Tag = styled("div")<{ color: ColorKey }>(({ theme, color }) => ({
  display: "inline",
  padding: "3px 16px",
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${Color[color]}`,
  borderRadius: "20px",
  textAlign: "center",
  color: Color[color],
}));
