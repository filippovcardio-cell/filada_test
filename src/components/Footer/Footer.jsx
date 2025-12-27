import { useEffect, useRef, useState } from "react";
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

  // /public/docs/*
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

  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const legalRef = useRef(null);

  useEffect(() => {
    const onDocMouseDown = (e) => {
      if (!legalRef.current) return;
      if (!legalRef.current.contains(e.target)) {
        setIsLegalOpen(false);
      }
    };

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  const toggleLegal = () => setIsLegalOpen((v) => !v);

  const closeLegal = () => setIsLegalOpen(false);

  return (
    <footer className={`footer ${isDarkTheme ? "" : "light"}`}>
      <div className="footer__wrapper">
        {/* ===== Desktop left block ===== */}
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />

          <div className="footer__legal" ref={legalRef}>
            <button
              type="button"
              className={`footer__legal-btn ${isDarkTheme ? "" : "light"}`}
              onClick={toggleLegal}
              aria-expanded={isLegalOpen}
              aria-haspopup="menu"
            >
              Правова інформація
              <span className={`footer__chev ${isLegalOpen ? "open" : ""}`}>
                ▾
              </span>
            </button>

            <div
              className={`footer__legal-menu ${
                isDarkTheme ? "" : "light"
              } ${isLegalOpen ? "open" : ""}`}
              role="menu"
            >
              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={MOZLicenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Ліцензія МОЗ
              </a>

              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={ClientRulesUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Правила перебування пацієнтів
              </a>

              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={OfferAgreementUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Публічний договір-оферта про надання медичних послуг
              </a>
            </div>
          </div>
        </div>

        {/* ===== Mobile top row ===== */}
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

        {/* ===== Mobile social ===== */}
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

        {/* ===== Mobile legal dropdown ===== */}
        <div className="footer__docs-mobile">
          <div className="footer__legal footer__legal--mobile">
            <button
              type="button"
              className={`footer__legal-btn ${isDarkTheme ? "" : "light"}`}
              onClick={toggleLegal}
              aria-expanded={isLegalOpen}
              aria-haspopup="menu"
            >
              Правова інформація
              <span className={`footer__chev ${isLegalOpen ? "open" : ""}`}>
                ▾
              </span>
            </button>

            <div
              className={`footer__legal-menu footer__legal-menu--mobile ${
                isDarkTheme ? "" : "light"
              } ${isLegalOpen ? "open" : ""}`}
              role="menu"
            >
              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={MOZLicenseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Ліцензія МОЗ
              </a>

              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={ClientRulesUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Правила перебування пацієнтів
              </a>

              <a
                role="menuitem"
                className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
                href={OfferAgreementUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeLegal}
              >
                Публічний договір-оферта про надання медичних послуг
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

