import Head from "next/head";
import { ReactNode, VFC } from "react";
import { Box } from "@mui/material";
import { Header } from "../Header";
import { drawerWidth } from "../Header/internal/Drawer/constants";

type Props = {
  children: ReactNode;
  title: string;
};

export const Layout: VFC<Props> = ({ children, title }) => {
  return (
    <Box
      sx={{
        ml: { md: `${drawerWidth}px` },
      }}
    >
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
    </Box>
  );
};
