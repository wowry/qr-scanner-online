/** @jsxImportSource @emotion/react */
import React from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { css } from "@emotion/react";
import { red } from "@mui/material/colors";
import SecurityIcon from "@mui/icons-material/Security";
import MuiLink from "@mui/material/Link";

const styles = {
  container: {
    opacity: 0.9,
  },
  content: {
    display: "inline-flex",
    alignItems: "center",
  },
  button: {
    display: "inline-flex",
    borderRadius: "4px",
    margin: 15,
    padding: "0.5rem 1rem",
    flex: "0 0 auto",
    cursor: "pointer",
  },
  approve: {
    backgroundColor: red[500],
    border: `1px solid ${red[500]}`,
    color: "#fff",
  },
  decline: {
    backgroundColor: "#fff",
    border: `1px solid ${red[500]}`,
    color: red[500],
  },
  link: css`
    display: contents;
  `,
};

const CookieConsentBar: React.VFC = () => {
  return (
    <CookieConsent
      buttonText="同意する"
      declineButtonText="拒否する"
      enableDeclineButton
      expires={150}
      disableButtonStyles
      style={styles.container}
      contentStyle={styles.content}
      buttonStyle={{ ...styles.button, ...styles.approve }}
      declineButtonStyle={{ ...styles.button, ...styles.decline }}
      onAccept={() => window.consentGranted()}
      onDecline={() => window.consentDenied()}
    >
      <SecurityIcon style={{ marginRight: "0.5rem" }} />
      当サイトは利便性向上のため、Cookieを使用します。詳細は
      <Link href="/policy" passHref>
        <MuiLink css={styles.link}>プライバシーポリシー</MuiLink>
      </Link>
      をご覧ください。
    </CookieConsent>
  );
};

export default CookieConsentBar;
