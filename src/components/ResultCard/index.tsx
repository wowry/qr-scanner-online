/** @jsxImportSource @emotion/react */
import React from "react";
import { useSelector } from "react-redux";
import { selectImageCardState } from "../../libs/slices/ImageCardSlice";
import { css } from "@emotion/react";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

export const styles = {
  card: (color: string) => css`
    display: flex;
    align-items: center;
    color: inherit;
    min-height: 80px;
    margin-bottom: 20px;
    padding: 10px;
    border: 2px solid ${color};
    border-left-width: 6px;
    animation-name: fadeIn;
    animation-duration: 0.4s;
    overflow-wrap: anywhere;

    @keyframes fadeIn {
      0% {
        transform: translateY(40px);
        opacity: 0;
      }
      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  `,
};

interface Props {
  id: number;
  url: string;
}

const ResultCard: React.VFC<Props> = (props) => {
  const imageCardState = useSelector(selectImageCardState);

  return (
    <MuiLink
      href={props.url}
      target="_blank"
      rel="noreferrer noopenner"
      underline="hover"
    >
      <Card css={styles.card(imageCardState.colorList[props.id])}>
        {props.url}
      </Card>
    </MuiLink>
  );
};

export default ResultCard;
