/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const container = css`
  width: 100%;
`;
const title = css`
  flex-grow: 1;
  font-size: 1.2rem;
`;

const Header: React.FC = () => {
  return (
    <AppBar position="relative">
      <Toolbar css={container}>
        <Typography css={title}>QR Scanner Online</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
