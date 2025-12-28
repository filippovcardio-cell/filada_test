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

  const legalWrapRef = useRef(null);
  const legalBtnRef = useRef(null);
  const legalMenuRef = useRef(null);

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

  const legalLinks = useMemo(
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

  // Закриваємо dropdown по кліку ЗЗОВНІ (але НЕ ламаємо клік по лінках)
  useEffect(() => {
    const onPointerDownCapture = (e) => {
      if (!legalOpen) return;

      const wrap = legalWrapRef.current;
      if (!wrap) return;

      // якщо клік всередині dropdown/кнопки — нічого не робимо
      if (wrap.contains(e.target)) return;

      setLegalOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDownCapture, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDownCapture, true);
    };
  }, [legalOpen]);

  const toggleLegal = () => setLegalOpen((v) => !v);

  const closeLegal = () => setLegalOpen(false);

  return (
    <footer className={`footer ${isDarkTheme ? "" : "light"}`}>
      <div className="footer__wrapper">
        {/* DESKTOP LEFT */}
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />

          <div className="footer__legal" ref={legalWrapRef}>
            <button
              ref={legalBtnRef}
              type="button"
              className={`footer__legal-btn ${isDarkTheme ? "" : "light"}`}
              onClick={toggleLegal}
              aria-expanded={legalOpen ? "true" : "false"}
              aria-controls="footer-legal-menu"
            >
              Правова інформація
              <span className={`footer__chev ${legalOpen ? "open" : ""}`}>⌃</span>
            </button>

            <div
              ref={legalMenuRef}
              id="footer-legal-menu"
              className={`footer__legal-menu ${legalOpen ? "open" : ""} ${
                isDarkTheme ? "" : "light"
              }`}
              role="menu"
            >
              {legalLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__doc ${isDarkTheme ? "" : "light"}`}
                  role="menuitem"
                  // Важливо: щоб клік по лінку не “з’їдався” логікою закриття
                  onClick={closeLegal}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE TOP ROW */}
        <div className="logo-num-mobile">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+380635030472"
          >
            +38 (063) 503-04-72
          </a>
        </div>

        {/* DESKTOP RIGHT */}
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
              <img src={tgIconSrc} alt="посилання на телеграм" className="footer__link-icon" />
            </a>

            <a
              href="https://www.tiktok.com/@filada_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={ttIconSrc} alt="посилання на тікток" className="footer__link-icon" />
            </a>

            <a
              href="https://www.instagram.com/filada_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={instIconSrc} alt="посилання на інстаграм" className="footer__link-icon" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61562495653062"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              <img src={fbIconSrc} alt="посилання на facebook" className="footer__link-icon" />
            </a>
          </div>
        </div>

        {/* MOBILE SOCIAL */}
        <div className="footer__links-mobile">
          <a
            href="https://t.me/filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={tgIconSrc} alt="посилання на телеграм" className="footer__link-icon" />
          </a>

          <a
            href="https://www.tiktok.com/@filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={ttIconSrc} alt="посилання на тікток" className="footer__link-icon" />
          </a>

          <a
            href="https://www.instagram.com/filada_clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={instIconSrc} alt="посилання на інстаграм" className="footer__link-icon" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61562495653062"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <img src={fbIconSrc} alt="посилання на facebook" className="footer__link-icon" />
          </a>
        </div>

        {/* MOBILE DOCS BUTTON (fixed dropdown) */}
        <div className="footer__docs-mobile">
          <div className="footer__legal footer__legal--mobile" ref={legalWrapRef}>
            <button
              ref={legalBtnRef}
              type="button"
              className={`footer__legal-btn footer__legal-btn--mobile ${
                isDarkTheme ? "" : "light"
              }`}
              onClick={toggleLegal}
              aria-expanded={legalOpen ? "true" : "false"}
              aria-controls="footer-legal-menu-mobile"
            >
              Правова інформація
              <span className={`footer__chev ${legalOpen ? "open" : ""}`}>⌃</span>
            </button>

            <div
              ref={legalMenuRef}
              id="footer-legal-menu-mobile"
              className={`footer__legal-menu footer__legal-menu--mobile ${
                legalOpen ? "open" : ""
              } ${isDarkTheme ? "" : "light"}`}
              role="menu"
            >
              {legalLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`footer__doc ${isDarkTheme ? "" : "light"}`}
                  role="menuitem"
                  onClick={closeLegal}
                >
                  {l.label}
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


