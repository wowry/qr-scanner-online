/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const styles = {
  container: css`
    width: 100%;
  `,
  title: css`
    flex-grow: 1;
    font-size: 1.2rem;
  `,
};

const Header: React.VFC = () => {
  return (
    <AppBar position="relative">
      <Toolbar css={styles.container}>
        <Typography css={styles.title}>QR Scanner Online</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
