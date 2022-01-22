import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import GAScripts from "../components/GAScripts";
import CookieConsentBar from "../components/CookieConsentBar";
import { Provider } from "react-redux";
import { store } from "../libs/store";
import * as gtag from "../libs/gtag";
import "../styles/globals.scss";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    consentGranted: () => any;
    consentDenied: () => any;
  }
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const _router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    _router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      _router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [_router.events]);

  return (
    <>
      <GAScripts />

      <Provider store={store}>
        <Layout noindex={router.pathname == "/policy"}>
          <Component {...pageProps} />
        </Layout>
      </Provider>

      <CookieConsentBar />
    </>
  );
}

export default MyApp;
