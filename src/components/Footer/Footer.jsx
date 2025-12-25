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

  const MOZLicenseUrl = `${process.env.PUBLIC_URL}/docs/1668.pdf`;
  const ClientRulesUrl = `${process.env.PUBLIC_URL}/docs/patient-rules.pdf`;

  // якщо назва файлу на сервері саме така:
  const OfferAgreementFileName = "Договір-оферти-Filada.pdf";
  const OfferAgreementUrl = `${process.env.PUBLIC_URL}/docs/${encodeURIComponent(
    OfferAgreementFileName
  )}`;

  const tgIconSrc = isDarkTheme ? tgicon : tgicondark;
  const ttIconSrc = isDarkTheme ? tticon : tticondark;
  const instIconSrc = isDarkTheme ? insticon : insticondark;
  const fbIconSrc = isDarkTheme ? fbicon : fbicondark;

  return (
    <footer className={`footer ${isDarkTheme ? "" : "light"}`}>
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={MOZLicenseUrl}
          >
            Ліцензія МОЗ
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={ClientRulesUrl}
          >
            Правила перебування пацієнтів
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={OfferAgreementUrl}
          >
            Публічний договір-оферта про надання медичних послуг
          </a>
        </div>

        <div className="logo-num-mobile">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+380635030472"
          >
            +38 (063) 503-04-72
          </a>
        </div>

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

        <div className="footer__docs-mobile">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={MOZLicenseUrl}
          >
            Ліцензія МОЗ
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={ClientRulesUrl}
          >
            Правила перебування пацієнтів
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={OfferAgreementUrl}
          >
            Публічний договір-оферта про надання медичних послуг
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


