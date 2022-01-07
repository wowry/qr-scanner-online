/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAlertState } from "../../libs/slices/AlertSlice";
import Alert from "./_components/Alert";
import { css } from "@emotion/react";
import { Container } from "@mui/material";

const styles = {
  container: (width: number, offset: number) => css`
    position: fixed;
    bottom: 20px;
    left: 0px;
    width: ${width}px;
    height: ${offset}px;
  `,
};

const AlertList: React.VFC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const alertState = useSelector(selectAlertState);

  useEffect(() => {
    const inputPaneWidth =
      document.querySelector(".input-pane")?.clientWidth || 0;

    setWidth(inputPaneWidth);
  }, [setWidth]);

  return (
    <Container css={styles.container(width, offset)}>
      {alertState.alertList.map((alert) => (
        <Alert
          key={alert.id}
          alert={alert}
          offset={offset}
          setOffset={setOffset}
        />
      ))}
    </Container>
  );
};

export default AlertList;
