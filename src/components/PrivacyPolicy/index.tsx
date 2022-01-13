/** @jsxImportSource @emotion/react */
import React from "react";
import Link from "next/link";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { css } from "@emotion/react";
import Container from "@mui/material/Container";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const styles = {
  container: css`
    min-height: calc(100vh - 4rem);
    padding-top: 30px;
  `,
  nav: css`
    display: inline-flex;
    align-items: center;
    margin-bottom: 30px;

    svg {
      font-size: 1rem;
      margin-right: 10px;
    }
  `,
  h1: css`
    font-size: 2rem;
    margin-bottom: 20px;
  `,
  h2: css`
    font-size: 1.6rem;
    margin: 30px 0 20px 0;
  `,
  link: css`
    display: inline-flex;
  `,
  spacer: css`
    margin-top: 30px;
  `,
};

const Policy: React.VFC = () => {
  return (
    <Container css={styles.container}>
      <Link href="/" passHref>
        <a css={styles.nav}>
          <ArrowBackIosNewIcon />
          アプリへ戻る
        </a>
      </Link>
      <Typography variant="h1" css={styles.h1}>
        プライバシーポリシー
      </Typography>
      当アプリでは、アクセス解析による利便性向上のため、Cookieを使用しています。
      <Typography variant="h2" css={styles.h2}>
        アクセス解析
      </Typography>
      当アプリでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
      Googleアナリティクスはデータ収集のためにCookieを使用しています。
      データは匿名で収集されており、個人を特定するものではありません。
      この規約に関しての詳細は
      <Link
        href="https://marketingplatform.google.com/about/analytics/terms/jp/"
        passHref
      >
        <MuiLink css={styles.link} target="_blank" rel="noopener noreferrer">
          Googleアナリティクス利用規約
          <OpenInNewIcon />
        </MuiLink>
      </Link>
      のページや
      <Link href="https://policies.google.com/technologies/ads?hl=ja" passHref>
        <MuiLink css={styles.link} target="_blank" rel="noopener noreferrer">
          Googleポリシーと規約
          <OpenInNewIcon />
        </MuiLink>
      </Link>
      のページをご覧ください。
      <div css={styles.spacer} />
      以上
    </Container>
  );
};

export default Policy;
