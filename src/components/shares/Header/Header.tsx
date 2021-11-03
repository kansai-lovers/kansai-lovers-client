import { useState, VFC } from "react";
import { Box, IconButton, AppBar, Toolbar as MUIToolbar } from "@mui/material";
import { Apple as AppleIcon, Menu as MenuIcon } from "@mui/icons-material";
import { Search } from "./internal/Search";
import { Drawer } from "./internal/Drawer";
import { drawerWidth } from "./internal/Drawer/constants";
import * as Styled from "./styled";

export const Header: VFC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar
          sx={{
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
        >
          <Styled.Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Styled.LogoWrapper>
              <AppleIcon color="info" />
            </Styled.LogoWrapper>
            <Styled.SearchWrapper>
              <Search />
            </Styled.SearchWrapper>
          </Styled.Toolbar>
        </AppBar>
        <Drawer open={drawerOpen} onDrawerToggle={handleDrawerToggle} />
      </Box>
      <MUIToolbar />
    </>
  );
};
