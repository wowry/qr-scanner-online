/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import favicon from "/assets/favicon.ico";
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHub from "@mui/icons-material/GitHub";
import PolicyIcon from "@mui/icons-material/Policy";
import Tooltip from "@mui/material/Tooltip";

const styles = {
  container: css`
    width: 100%;
  `,
  title: css`
    flex-grow: 1;

    a {
      display: inline-flex;
    }

    p {
      margin-left: 12px;
      font-size: 1.2rem;
    }
  `,
  icons: css`
    margin-left: 20px;
    cursor: pointer;
  `,
};

const Header: React.VFC = () => {
  return (
    <AppBar position="relative">
      <Toolbar css={styles.container}>
        <div css={styles.title}>
          <Link href="/" passHref>
            <a style={{ display: "inline-flex", alignItems: "center" }}>
              <img src={favicon.src} alt="logo" width={28} height={28} />
              <Typography>QR Scanner Online</Typography>
            </a>
          </Link>
        </div>
        <div style={{ display: "inline-flex", justifyContent: "flex-end" }}>
          <Link href="/policy">
            <a css={styles.icons}>
              <Tooltip title="プライバシーポリシー">
                <PolicyIcon />
              </Tooltip>
            </a>
          </Link>
          <a
            css={styles.icons}
            href="https://github.com/wowry/qr-scanner-online"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip title="GitHub">
              <GitHub />
            </Tooltip>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
