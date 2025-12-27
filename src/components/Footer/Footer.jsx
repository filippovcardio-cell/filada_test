import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./Footer.css";

import logo from "../../assets/icons/logo.png";

import tgicon from "../../assets/icons/tgicon.png";
import tticon from "../../assets/icons/tticon.png";
import insticon from "../../assets/icons/insticon.png";
import fbicon from "../../assets/icons/fbicon-dark.png";

import tgicondark from "../../assets/icons/tgiconlight.png";
import tticondark from "../../assets/icons/tticonlight.png";
import insticondark from "../../assets/icons/intsiconlight.png";
import fbicondark from "../../assets/icons/fbicon.png";

const Footer = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [legalOpen, setLegalOpen] = useState(false);
  const legalRef = useRef(null);

  const MOZLicenseUrl = `${process.env.PUBLIC_URL}/docs/1668.pdf`;
  const ClientRulesUrl = `${process.env.PUBLIC_URL}/docs/patient-rules.pdf`;

  const OfferAgreementFileName = "Договір-оферти-Filada.pdf";
  const OfferAgreementUrl = `${process.env.PUBLIC_URL}/docs/${encodeURIComponent(
    OfferAgreementFileName
  )}`;

  const tgIconSrc = isDarkTheme ? tgicon : tgicondark;
  const ttIconSrc = isDarkTheme ? tticon : tticondark;
  const instIconSrc = isDarkTheme ? insticon : insticondark;
  const fbIconSrc = isDarkTheme ? fbicon : fbicondark;

  const legalItems = useMemo(
    () => [
      { href: MOZLicenseUrl, label: "Ліцензія МОЗ" },
      { href: ClientRulesUrl, label: "Правила перебування пацієнтів" },
      {
        href: OfferAgreementUrl,
        label: "Публічний договір-оферта про надання медичних послуг",
      },
    ],
    [MOZLicenseUrl, ClientRulesUrl, OfferAgreementUrl]
  );

  // Close on outside click / Escape
  useEffect(() => {
    const onDocMouseDown = (e) => {
      if (!legalRef.current) return;
      if (!legalRef.current.contains(e.target)) setLegalOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLegalOpen(false);
    };

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const toggleLegal = () => setLegalOpen((v) => !v);

  return (
    <footer className={`footer ${isDarkTheme ? "" : "light"}`}>
      <div className="footer__wrapper">
        {/* ===== Desktop left block ===== */}
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />

          <div className="footer__legal" ref={legalRef}>
            <button
              type="button"
              className={`footer__legal-btn ${isDarkTheme ? "" : "light"} mont-r`}
              onClick={toggleLegal}
              aria-expanded={legalOpen}
              aria-haspopup="menu"
            >
              Правова інформація
              <span className={`footer__chev ${legalOpen ? "open" : ""}`}>▾</span>
            </button>

            <div
              className={`footer__legal-menu ${legalOpen ? "open" : ""} ${
                isDarkTheme ? "" : "light"
              }`}
              role="menu"
            >
              {legalItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                  role="menuitem"
                  onClick={() => setLegalOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Mobile top line ===== */}
        <div className="logo-num-mobile">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+380635030472"
          >
            +38 (063) 503-04-72
          </a>
        </div>

        {/* ===== Desktop right block ===== */}
        <div className="footer__contacts">
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+380635030472"
          >
            +38 (063) 503-04-72
          </a>

          <div className="footer__links">
            <a
              href="https://t.me/filada_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                src={tgIconSrc}
                alt="посилання на телеграм"
                className="footer__link-icon"
              />
            </a>

            <a
              href="https://www.tiktok.com/@filada_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                src={ttIconSrc}
                alt="посилання на тікток"
                className="footer__link-icon"
              />
            </a>

            <a
              href="https://www.instagram.com/filada_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                src={instIconSrc}
                alt="посилання на інстаграм"
                className="footer__link-icon"
              />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61562495653062"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img
                src={fbIconSrc}
                alt="посилання на facebook"
                className="footer__link-icon"
              />
            </a>
          </div>
        </div>

        {/* ===== Mobile social row ===== */}
        <div className="footer__links-mobile">
          <a
            href="https://t.me/filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={tgIconSrc}
              alt="посилання на телеграм"
              className="footer__link-icon"
            />
          </a>

          <a
            href="https://www.tiktok.com/@filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={ttIconSrc}
              alt="посилання на тікток"
              className="footer__link-icon"
            />
          </a>

          <a
            href="https://www.instagram.com/filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={instIconSrc}
              alt="посилання на інстаграм"
              className="footer__link-icon"
            />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61562495653062"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img
              src={fbIconSrc}
              alt="посилання на facebook"
              className="footer__link-icon"
            />
          </a>
        </div>

        {/* ===== Mobile docs area ===== */}
        <div className="footer__docs-mobile">
          <div className="footer__legal footer__legal--mobile" ref={legalRef}>
            <button
              type="button"
              className={`footer__legal-btn footer__legal-btn--mobile ${
                isDarkTheme ? "" : "light"
              } mont-r`}
              onClick={toggleLegal}
              aria-expanded={legalOpen}
              aria-haspopup="menu"
            >
              Правова інформація
              <span className={`footer__chev ${legalOpen ? "open" : ""}`}>▾</span>
            </button>

            <div
              className={`footer__legal-menu footer__legal-menu--mobile ${
                legalOpen ? "open" : ""
              } ${isDarkTheme ? "" : "light"}`}
              role="menu"
            >
              {legalItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                  role="menuitem"
                  onClick={() => setLegalOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

