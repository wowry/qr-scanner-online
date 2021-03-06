/** @jsxImportSource @emotion/react */
import React from "react";
import { useSelector } from "react-redux";
import { selectAlertState } from "../../libs/slices/AlertSlice";
import InputPane from "./_components/InputPane";
import OutputPane from "./_components/OutputPane";
import AlertList from "../AlertList";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const styles = {
  container: (isPC: boolean) => css`
    display: flex;
    flex-direction: ${isPC ? "row" : "column"};
    flex-grow: 1;
    width: 100%;
    border-top: 1px solid #eaeaea;
  `,
  pane: (isPC: boolean) => css`
    display: inline-flex;
    flex-grow: 1;
    width: ${isPC ? "50%" : "100%"};
    min-height: ${isPC ? "100%" : "40vh"};
  `,
};

const Scanner: React.VFC = () => {
  const alertState = useSelector(selectAlertState);

  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up("sm"), {
    defaultMatches: true,
  });

  return (
    <div css={styles.container(isPC)}>
      <div css={styles.pane(isPC)}>
        <InputPane />
      </div>
      <div css={styles.pane(isPC)}>
        <OutputPane isPC={isPC} />
      </div>
      {alertState.alertList.length > 0 && <AlertList />}
    </div>
  );
};

export default Scanner;
