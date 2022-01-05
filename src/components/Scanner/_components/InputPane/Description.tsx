/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";

const styles = {
  container: css`
    width: 100%;
    margin-top: 10px;
    color: ${blue[900]};
    font-size: 12px;
    text-align: center;
  `,
  highlighed: css`
    margin: 0 5px;
    font-weight: bold;
  `,
  shortcutKey: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    margin: 1px 5px;
    border: 1px solid ${blue[900]};
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: bold;
  `,
};

const Description: React.VFC = () => {
  return (
    <>
      <div css={styles.container}>
        <span>
          <div css={styles.shortcutKey}>Ctrl</div>+
          <div css={styles.shortcutKey}>V</div>
        </span>
        または
        <span css={styles.highlighed}>クリック</span>
        でクリップボードから画像を読み込み
      </div>
      <div css={styles.container}>
        もしくは画像をここに
        <span css={styles.highlighed}>ドラッグ＆ドロップ</span>
        してください
      </div>
    </>
  );
};

export default Description;
