/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";

const styles = {
  container: css`
    width: 90%;
    margin-top: 20px;
  `,
};

const Description: React.VFC = () => {
  return (
    <div css={styles.container}>
      <Typography>
        スクリーンショットなどの画像からQRコードを検出するアプリです。
      </Typography>
      <List>
        <ListItem disablePadding>
          <Alert severity="success" sx={{ backgroundColor: "#fff" }}>
            画像のコピー&ペースト、ドラッグ&ドロップに対応
          </Alert>
        </ListItem>
        <ListItem disablePadding>
          <Alert severity="success" sx={{ backgroundColor: "#fff" }}>
            複数のQRコード検出に対応
          </Alert>
        </ListItem>
      </List>
    </div>
  );
};

export default Description;
