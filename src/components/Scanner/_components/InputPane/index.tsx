/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";
import Description from "./Description";
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
    font-size: 8vw;
    z-index: 1;
  `,
};

const InputPane: React.VFC = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const [addIconVisibility, setAddIconVisibility] = useState<boolean>(false);
  const [dropZoneVisibility, setDropZoneVisibility] = useState<boolean>(false);

  // 画像ペーストのトリガー設定
  useEffect(() => {
    const element = document.querySelector("#paste");

    element?.addEventListener("click", paste);

    const keyupHandler = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.ctrlKey && e.key === "v") {
        paste();
      }
    };

    document.addEventListener("keyup", keyupHandler);

    return () => {
      element?.removeEventListener("click", paste);
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
        setErrorMessage("画像がコピーされていません");
      } else {
        throw e;
      }
    }
  }

  const preventDefault = (e: React.DragEvent | React.MouseEvent) => {
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

  const dragLeaveEventHandler = (e: React.DragEvent) => {
    preventDefault(e);
    hideAllIcons();
  };

  const dragEnterEventHandler = (e: React.DragEvent) => {
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
    <div css={styles.wrapper}>
      {dropZoneVisibility && (
        <div
          css={styles.dropZone}
          onMouseLeave={() => hideAllIcons()}
          onDragOver={(e) => dragEnterEventHandler(e)}
          onDragLeave={(e) => dragLeaveEventHandler(e)}
          onDrop={(e) => dropEventHandler(e)}
        />
      )}
      <Container
        id="paste"
        css={styles.container}
        onMouseOver={() => setAddIconVisibility(true)}
        onMouseLeave={() => setAddIconVisibility(false)}
        onDragOver={(e) => dragEnterEventHandler(e)}
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
      </Container>
    </div>
  );
};

export default InputPane;
