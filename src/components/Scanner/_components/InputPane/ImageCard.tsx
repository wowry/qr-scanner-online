/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { reset, push, complete } from "../../../../libs/slices/ImageCardSlice";
import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";
import commonStyles from "./commonStyles";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";

export const styles = {
  container: css`
    position: relative;
    width: 100%;
    margin-top: 20px;
  `,
  canvas: css`
    width: 100%;
    height: 100%;
  `,
  loadIcon: css`
    z-index: 1;
    opacity: 0.2;

    svg {
      fill: ${blue[50]};
      transform: scale(3);
    }
  `,
};

interface Props {
  imageUrl: string;
  hideAllIcons: () => void;
  setWarningMessage: React.Dispatch<React.SetStateAction<string>>;
}

const ImageCard: React.VFC<Props> = (props) => {
  const [canvasHeight, setCanvasHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const onload = async () => {
    props.hideAllIcons();

    dispatch(reset());

    setTimeout(() => setIsLoading(true), 200);

    const imgElement: HTMLImageElement | null =
      document.querySelector("#qrcode");
    const canvas: HTMLCanvasElement | null = document.querySelector("#canvas");

    if (!imgElement || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = imgElement.width;
    const height = imgElement.height;

    console.log(width, height);

    setCanvasHeight(canvas.clientWidth * (height / width));

    canvas.height = height;
    canvas.width = width;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(imgElement, 0, 0, width, height);

    const data = ctx.getImageData(0, 0, width, height);

    // ワーカースレッドで検出処理を実行
    const worker = new Worker(
      new URL("../../../../libs/worker", import.meta.url)
    );

    worker.postMessage({ data, width, height });

    // 検出結果を1つずつ取得
    worker.addEventListener(
      "message",
      ({ data: { i, codeNum, pointArray, url } }) => {
        if (codeNum === 0) {
          props.setWarningMessage("画像にQRコードが含まれていません");
          setIsLoading(false);
          return;
        }

        console.log(url);

        const color = `hsl(${(i * 360) / codeNum}, 100%, 40%)`;

        dispatch(push({ url: url, color: color }));

        ctx.strokeStyle = color;
        ctx.lineWidth = 20;

        // lineWidth分オフセットして矩形を描画
        const x = pointArray[0] - ctx.lineWidth / 2;
        const y = pointArray[1] - ctx.lineWidth / 2;
        const width = pointArray[2] - pointArray[0] + ctx.lineWidth;
        const height = pointArray[7] - pointArray[1] + ctx.lineWidth;

        ctx.strokeRect(x, y, width, height);

        // 全コード検出完了
        if (i === codeNum - 1) {
          setIsLoading(false);
          dispatch(complete());
        }
      }
    );
  };

  return (
    <>
      <img
        onLoad={onload}
        src={props.imageUrl}
        alt="QR"
        id="qrcode"
        style={{ display: "none" }}
      />
      <Card
        css={[
          commonStyles.center,
          styles.container,
          css`
            height: ${canvasHeight}px;
          `,
        ]}
      >
        <canvas id="canvas" css={styles.canvas} />
        {isLoading && (
          <CircularProgress css={[commonStyles.center, styles.loadIcon]} />
        )}
      </Card>
    </>
  );
};

export default ImageCard;
