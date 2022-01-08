/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectImageCardState } from "../../../../libs/slices/ImageCardSlice";
import ResultCard from "../../../ResultCard";
import { css } from "@emotion/react";
import { blue } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

export const styles = {
  wrapper: css`
    position: relative;
    width: 100%;
    min-height: inherit;
  `,
  container: css`
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  title: css`
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    color: ${blue[900]};

    svg {
      margin-right: 0.5rem;
    }
  `,
};

const OutputPane: React.VFC = () => {
  const imageCardState = useSelector(selectImageCardState);

  const theme = useTheme();
  const isPC = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    if (!isPC && imageCardState.hasCompleted) {
      document.querySelector("#outputPane")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, [isPC, imageCardState.hasCompleted]);

  const cardList = imageCardState.urlList.map((url, i) => (
    <ResultCard key={i} id={i} url={url} />
  ));

  return (
    <div css={styles.wrapper} id="outputPane">
      <Container css={styles.container}>
        <Typography css={styles.title}>
          <SearchIcon />
          検出結果
        </Typography>
        {cardList}
      </Container>
    </div>
  );
};

export default OutputPane;
