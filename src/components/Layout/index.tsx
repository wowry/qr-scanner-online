/** @jsxImportSource @emotion/react */
import React from "react";
import Head from "next/head";
import Header from "../Header";
import favicon from "/assets/favicon.ico";
import screenshot from "/assets/screenshot.png";
import { css } from "@emotion/react";
import GitHub from "@mui/icons-material/GitHub";

const styles = {
  main: css`
    width: 100%;
    min-height: calc(100vh - 4rem);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  footer: css`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;

    a {
      display: inline-flex;
      align-items: center;
      height: 1em;
      margin-left: 0.5rem;
    }
  `,
};

interface Props {
  children: React.ReactElement;
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>QR Scanner Online｜画面上のQRコード読み取りサイト</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="画面上のQRコードをスクリーンショットなどから読み取るサイトです。画像のコピペ、ドラッグ&ドロップに対応。複数のQRコードを検出できます。"
        />
        <meta property="og:site_name" content="QR Scanner Online" />
        <meta
          property="og:title"
          content="QR Scanner Online｜画面上のQRコード読み取りサイト"
        />
        <meta
          property="og:description"
          content="画面上のQRコードをスクリーンショットなどから読み取るサイトです。画像のコピペ、ドラッグ&ドロップに対応。複数のQRコードを検出できます。"
        />
        <meta
          property="og:url"
          content="https://qr-scanner-online.wowry.dev/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://qr-scanner-online.wowry.dev${screenshot.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href={favicon.src} />
      </Head>

      <Header />

      <main css={styles.main}>{children}</main>

      <footer css={styles.footer}>
        Developed by wowry
        <a
          href="https://github.com/wowry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </footer>
    </>
  );
};

export default Layout;
