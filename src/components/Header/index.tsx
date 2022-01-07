/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";

const styles = {
  container: css`
    width: 100%;
  `,
  title: css`
    flex-grow: 1;
    margin-left: 12px;
    font-size: 1.2rem;
  `,
};

const Header: React.VFC = () => {
  return (
    <AppBar position="relative">
      <Toolbar css={styles.container}>
        <img src="/favicon.png" alt="logo" width={28} height={28} />
        <Typography css={styles.title}>QR Scanner Online</Typography>
        <div>
          <a
            href="https://github.com/wowry/qr-scanner-online"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
