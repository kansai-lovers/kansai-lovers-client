import { Search as SearchIcon } from "@mui/icons-material";
import * as Styled from "./styled";

export const Search = () => {
  return (
    <Styled.Search
      sx={{
        display: { xs: "none", md: "block" },
      }}
    >
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.StyledInputBase
        placeholder="キーワード検索"
        inputProps={{ "aria-label": "search" }}
      />
    </Styled.Search>
  );
};
