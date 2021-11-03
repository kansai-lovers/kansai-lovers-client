import { styled, Toolbar as MUIToolbar } from "@mui/material";

export const Toolbar = styled(MUIToolbar)(({ theme }) => ({
  height: "100%",
  background: theme.palette.common.white,
}));

export const LogoWrapper = styled("div")({
  position: "absolute",
  left: 0,
  right: 0,
  width: "200px",
  margin: "auto",
  textAlign: "center",
});

export const SearchWrapper = styled("div")({
  position: "absolute",
  right: "16px",
  width: "280px",
});
