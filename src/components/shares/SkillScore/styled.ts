import { styled } from "@mui/material";

export const Score = styled("div")<{ color: string }>(({ color }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "52px",
  height: "42px",
  backgroundColor: color,
  borderRadius: "8px",
  color: "white",
}));
