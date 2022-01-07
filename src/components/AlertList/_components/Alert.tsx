/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AlertType, removeAlert } from "../../../libs/slices/AlertSlice";
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
      // ちらつき防止のため遅延表示
      1% {
        transform: translateY(${offset + 30}px);
      }
      2%,
      98% {
        transform: translateY(0px);
      }
      100% {
        transform: translateY(${offset + 30}px);
      }
    }
  `,
};

export interface Props {
  alert: AlertType;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Alert: React.VFC<Props> = (props) => {
  const [hasFirstRendered, setHasFirstRendered] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasFirstRendered) {
      let offset = 0;

      document.querySelectorAll(".alert").forEach((alert) => {
        offset += alert.clientHeight;
      });

      props.setOffset(offset);
    } else {
      // 初回レンダリング -> オフセット設定
      setHasFirstRendered(true);
    }
  }, [hasFirstRendered, props]);

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
