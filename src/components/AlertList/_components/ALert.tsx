/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AlertType,
  removeAlert,
  selectAlertState,
} from "../../../libs/slices/AlertSlice";
import { alertDisplayTime } from "../../variables";
import { css } from "@emotion/react";
import MuiAlert from "@mui/material/Alert";

const styles = {
  alert: (offset: number) => css`
    width: 100%;
    animation: ${alertDisplayTime}s ease-in-out fadeIn;
    transform: translateY(100vh);
    z-index: 20;

    @keyframes fadeIn {
      1% {
        transform: translateY(${offset + 25}px);
      }
      2%,
      98% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(${offset + 25}px);
      }
    }
  `,
};

interface Props {
  alert: AlertType;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Alert: React.VFC<Props> = (props) => {
  const alertState = useSelector(selectAlertState);
  const dispatch = useDispatch();

  useEffect(() => {
    const alertHeight = document.querySelector(".alert")?.clientHeight || 0;

    console.log(alertHeight);

    props.setOffset(alertHeight);
  }, [props]);

  return (
    <MuiAlert
      key={props.alert.id}
      className="alert"
      css={styles.alert(props.offset)}
      severity={props.alert.severity}
      elevation={3}
      onClose={() => {
        dispatch(removeAlert(props.alert.id));
      }}
    >
      {props.alert.message}
    </MuiAlert>
  );
};

export default Alert;
