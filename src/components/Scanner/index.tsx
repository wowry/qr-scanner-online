/** @jsxImportSource @emotion/react */
import React from "react";
import InputPane from "./_components/InputPane";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  container: (isPC: boolean) => css`
    display: flex;
    flex-direction: ${isPC ? "row" : "column"};
    flex-grow: 1;
    border-top: 1px solid #eaeaea;
  `,
  pane: (isPC: boolean) => css`
    display: inline-flex;
    flex-grow: 1;
    width: ${isPC ? "50vw" : "100vw"};
    min-height: ${isPC ? "100%" : "40vh"};
  `,
};

const Scanner: React.VFC = () => {
  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div css={styles.container(isPC)}>
      <div css={styles.pane(isPC)}>
        <InputPane />
      </div>
      <div css={styles.pane(isPC)}></div>
    </div>
  );
};

export default Scanner;
