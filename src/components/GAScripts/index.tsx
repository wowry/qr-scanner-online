import React from "react";
import Script from "next/script";
import * as gtag from "../../libs/gtag";

const GAScripts: React.VFC = () => {
  return gtag.GA_TRACKING_ID ? (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
  
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="cookie-consent"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function consentGranted() {
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
            }
          `,
        }}
      />
    </>
  ) : (
    <></>
  );
};

export default GAScripts;
