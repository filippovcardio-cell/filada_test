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
import MOZLicense from "../../assets/docs/1668.pdf";
import clientRules from "../../assets/docs/Правила перебування пацієнтів.pdf";

const Footer = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <footer className={`footer ${isDarkTheme ? "" : "light"}`}>
      <div className="footer__wrapper">
        <div className="footer__logo">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />
          <a
            target={"_blank"}
            rel={"noreferrer"}
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={MOZLicense}
          >
            Ліцензія МОЗ
          </a>
          <a
           target={"_blank"}
           rel={"noreferrer"}
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={clientRules}
          >
            Правила перебування пацієнтів
          </a>
        </div>
        <div className="logo-num-mobile">
          <img className="footer__logo-image" src={logo} alt="filada логотип" />
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+38(063)503-04-72"
          >
            +38(063)503-04-72
          </a>
        </div>
        <div className="footer__contacts">
          <a
            className={`footer__tel ${isDarkTheme ? "" : "light"} mont-r`}
            href="tel:+38(063)503-04-72"
          >
            +38(063)503-04-72
          </a>
          <div className="footer__links">
            <a
              href="https://t.me/filada_clinic"
              target={"_blank"}
              rel={"noreferrer"}
              className="footer__link"
            >
              <img
                src={isDarkTheme ? tgicon : tgicondark}
                alt="посилання на телеграм"
                className="footer__link-icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@filada_clinic
"
              target={"_blank"}
              rel={"noreferrer"}
              className="footer__link"
            >
              <img
                src={isDarkTheme ? tticon : tticondark}
                alt="посилання на тікток"
                className="footer__link-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/filada_clinic"
              className="footer__link"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                src={isDarkTheme ? insticon : insticondark}
                alt="посилання на інстаграм"
                className="footer__link-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562495653062"
              className="footer__link"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                src={isDarkTheme ? fbicon : fbicondark}
                alt="посилання на facebook"
                className="footer__link-icon"
              />
            </a>
          </div>
        </div>
        <div className="footer__links-mobile">
          <a
            href="https://t.me/filada_clinic"
            target={"_blank"}
            rel={"noreferrer"}
            className="footer__link"
          >
            <img
              src={isDarkTheme ? tgicon : tgicondark}
              alt="посилання на телеграм"
              className="footer__link-icon"
            />
          </a>
          <a
            href="https://www.tiktok.com/@filada_clinic
"
            target={"_blank"}
            rel={"noreferrer"}
            className="footer__link"
          >
            <img
              src={isDarkTheme ? tticon : tticondark}
              alt="посилання на тікток"
              className="footer__link-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/filada_clinic"
            className="footer__link"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              src={isDarkTheme ? insticon : insticondark}
              alt="посилання на інстаграм"
              className="footer__link-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61562495653062"
            className="footer__link"
            target={"_blank"}
            rel={"noreferrer"}
          >
            <img
              src={isDarkTheme ? fbicon : fbicondark}
              alt="посилання на facebook"
              className="footer__link-icon"
            />
          </a>
        </div>
        <div className="footer__docs-mobile">
        <a
            target={"_blank"}
            rel={"noreferrer"}
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={MOZLicense}
          >
            Ліцензія МОЗ
          </a>
          <a
           target={"_blank"}
           rel={"noreferrer"}
            className={`footer__doc ${isDarkTheme ? "" : "light"} mont-r`}
            href={clientRules}
          >
            Правила перебування пацієнтів
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
