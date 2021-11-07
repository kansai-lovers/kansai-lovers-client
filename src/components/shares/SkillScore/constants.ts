import { alpha } from "@mui/material";
import { theme } from "src/config/theme";

export const getBackgroundColor = (score: number) => {
  if (score < 0 || (score > 0 && score <= 30)) {
    return alpha(theme.palette.primary.main, 0.4);
  }

  if (score > 30 && score <= 50) {
    return alpha(theme.palette.primary.main, 0.7);
  }

  return theme.palette.primary.main;
};
