/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  pushAlert,
  removeAlert,
  selectAlertState,
  getId,
} from "../../../../libs/slices/AlertSlice";
import Description from "./Description";
import ImageCard from "./ImageCard";
import { alertDisplayTime } from "../../../variables";
import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";
import commonStyles from "./commonStyles";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Add from "@mui/icons-material/Add";

const styles = {
  wrapper: css`
    position: relative;
    width: 100%;
    min-height: inherit;
    background-color: ${blue[50]};
  `,
  dropZone: css`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  `,
  container: css`
    position: relative;
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
      cursor: pointer;
    }
  `,
  title: css`
    font-weight: bold;
    color: ${blue[900]};
    margin-bottom: 10px;
  `,
  addIcon: css`
    fill: ${blue[500]};
    font-size: 6rem;
    z-index: 5;
  `,
};

const InputPane: React.VFC = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [addIconVisibility, setAddIconVisibility] = useState<boolean>(false);
  const [dropZoneVisibility, setDropZoneVisibility] = useState<boolean>(false);
  const alertState = useSelector(selectAlertState);
  const dispatch = useDispatch();

  // 画像ペーストのトリガー設定
  useEffect(() => {
    const element = document.querySelector(".paste");

    element?.addEventListener("click", paste);
    element?.addEventListener("touchstart", paste);

    const keyupHandler = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.ctrlKey && e.key === "v") {
        paste();
      }
    };

    document.addEventListener("keyup", keyupHandler);

    return () => {
      element?.removeEventListener("click", paste);
      element?.removeEventListener("touchstart", paste);
      document.removeEventListener("keyup", keyupHandler);
    };

    async function paste() {
      const item = (await navigator.clipboard.read())[0];
      setImage(item, item.types[0]);
    }
  });

  async function setImage(item: ClipboardItem | File, type: string) {
    try {
      if (type.indexOf("image") === -1) {
        throw new DOMException();
      }

      let objectURL: string;

      if (item instanceof ClipboardItem) {
        const blob = await (item as ClipboardItem).getType(type);
        objectURL = URL.createObjectURL(blob);
      } else {
        objectURL = URL.createObjectURL(item as File);
      }

      setImageUrl(objectURL);
    } catch (e) {
      if (e instanceof DOMException) {
        const id = getId(alertState);

        dispatch(
          pushAlert({
            id: id,
            timeoutId: setTimeout(
              () => dispatch(removeAlert(id)),
              alertDisplayTime * 1000
            ),
            message: "画像がコピーされていません",
            severity: "error",
          })
        );
      } else {
        throw e;
      }
    }
  }

  const preventDefault = (
    e: React.DragEvent | React.MouseEvent | React.TouchEvent
  ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const showAllIcons = () => {
    setAddIconVisibility(true);
    setDropZoneVisibility(true);
  };

  const hideAllIcons = () => {
    setAddIconVisibility(false);
    setDropZoneVisibility(false);
  };

  const dragLeaveEventHandler = (e: React.DragEvent | React.TouchEvent) => {
    preventDefault(e);
    hideAllIcons();
  };

  const dragOverEventHandler = (e: React.DragEvent) => {
    preventDefault(e);
    showAllIcons();
  };

  const dropEventHandler = (e: React.DragEvent) => {
    console.log("drop");

    preventDefault(e);
    hideAllIcons();

    const item = e.dataTransfer.files[0];
    const type = item.type;
    setImage(item, type);
  };

  return (
    <div css={styles.wrapper} className="input-pane">
      {dropZoneVisibility && (
        <div
          css={styles.dropZone}
          onMouseLeave={() => hideAllIcons()}
          onDragOver={(e) => dragOverEventHandler(e)}
          onDragLeave={(e) => dragLeaveEventHandler(e)}
          onDrop={(e) => dropEventHandler(e)}
        />
      )}
      <Container
        className="paste"
        css={styles.container}
        onMouseOver={() => setAddIconVisibility(true)}
        onMouseLeave={() => setAddIconVisibility(false)}
        onTouchStart={() => setAddIconVisibility(true)}
        onTouchEnd={(e) => dragLeaveEventHandler(e)}
        onDragOver={(e) => dragOverEventHandler(e)}
      >
        <Typography css={styles.title}>画像を選択</Typography>
        <Description />
        <Add
          css={[
            commonStyles.center,
            styles.addIcon,
            css`
              transform: scale(${addIconVisibility ? 1 : 0.6});
              opacity: ${addIconVisibility ? 0.6 : 0};
              transition: ${addIconVisibility ? "0.2s" : "0.1s"};
            `,
          ]}
        />

        {imageUrl && (
          <ImageCard imageUrl={imageUrl} hideAllIcons={hideAllIcons} />
        )}
      </Container>
    </div>
  );
};

export default InputPane;
