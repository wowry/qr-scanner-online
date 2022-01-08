import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
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

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GAScripts />

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <CookieConsentBar />
    </>
  );
}

export default MyApp;
