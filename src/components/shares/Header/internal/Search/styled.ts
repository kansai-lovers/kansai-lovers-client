import { InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: alpha("#949494", 0.2),
  "&:hover": {
    backgroundColor: alpha("#949494", 0.3),
    transition: "0.5s",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: theme.spacing(0, 2),
  color: "#949494",
  pointerEvents: "none",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: "100%",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));
