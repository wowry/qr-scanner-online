import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Description from "../components/Description";
import Scanner from "../components/Scanner";
import styles from "../styles/Home.module.scss";
import GitHub from "@mui/icons-material/GitHub";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>QR Scanner Online</title>
        <meta
          name="description"
          content="スクリーンショットなどの画像からQRコードを検出するアプリです。画像のコピー&ペースト、ドラッグ&ドロップに対応。複数のQRコード検出に対応。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Description />
        <Scanner />
      </main>

      <footer className={styles.footer}>
        Created by wowry
        <a
          href="https://github.com/wowry"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
