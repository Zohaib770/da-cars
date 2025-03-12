import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieBanner() {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Akzeptieren"
            declineButtonText="Ablehnen"
            enableDeclineButton
            cookieName="userConsent"
            style={{ background: "#017cbc" }}
            buttonStyle={{ color: "#4e503b", background: "",fontSize: "13px" }}
            declineButtonStyle={{ color: "#fff", background: "#c00", fontSize: "13px" }}
            expires={150}
        >
            Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.{" "}
            <a href="/haftungsausschluss" style={{ color: "#fff" }}>Mehr erfahren</a>
        </CookieConsent>
    );
}

export default CookieBanner;
