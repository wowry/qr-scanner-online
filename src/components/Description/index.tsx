/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";

const styles = {
  container: css`
    width: 90%;
    margin-top: 20px;
  `,
  description: css`
    margin: 0;
    font-size: 1rem;
    font-weight: normal;
  `,
};

const Description: React.VFC = () => {
  return (
    <div css={styles.container}>
      <h1 css={styles.description}>
        スクリーンショットなどの画像からQRコードを検出するアプリです。
      </h1>
      <List>
        <ListItem disablePadding>
          <Alert severity="success" sx={{ backgroundColor: "#fff" }}>
            <h2 css={styles.description}>
              画像のコピー&ペースト、ドラッグ&ドロップに対応
            </h2>
          </Alert>
        </ListItem>
        <ListItem disablePadding>
          <Alert severity="success" sx={{ backgroundColor: "#fff" }}>
            <h2 css={styles.description}>複数のQRコード検出に対応</h2>
          </Alert>
        </ListItem>
      </List>
    </div>
  );
};

export default Description;
