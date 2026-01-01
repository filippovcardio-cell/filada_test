import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import {
  setBurgerIsActive,
  setBurgerIsClose,
} from "../../redux/BurgerSlice/BurgerSlice";
import { toggleTheme } from "../../redux/ToggleThemeSlice/ToggleThemeSlice";
import {
  setClearIsFormSended,
  setIsActive,
  setIsClose,
} from "../../redux/ModalSlice/ModalSlice";
import {
  ALL_SERVICES_ROUTE,
  BEFORE_AFTER_BLEPHAROPLASTY_ROUTE,
  BLOG_ROUTE,
  CONTACTS_ROUTE,
  POPULAR_SERVICES_HUB_ROUTE,
  PRICES_ROUTE,
  SERVICE_COSMETOLOGY_ROUTE,
  SERVICE_DERMATOLOGY_ROUTE,
  SERVICE_DIETICS_NUTRITION_ROUTE,
  SERVICE_ENDOCRINOLOGY_ROUTE,
  SERVICE_GINECOLOGY_ROUTE,
  SERVICE_NEUROLOGY_ROUTE,
  SERVICE_ORTHOPEDICS_TRAUMATOLOGY_ROUTE,
  SERVICE_OTOLARYNGOLOGY_ROUTE,
  SERVICE_PASTIC_ROUTE,
  SERVICE_PROCTOLOGY_ROUTE,
  SERVICE_SURGERY_ROUTE,
  SERVICE_ULTRASOUND_DIAGNOSTICS_ROUTE,
  SERVICE_VASCULAR_SURGERY_ROUTE,
  SERVICE_VESSELS_ROUTE,
} from "../../utils/routes";
import ToggleThemeButton from "../ToggleThemeButton/ToggleThemeButton";
import "./Header.css";
import Triangle from "./Triangle/Triangle";
import Hamburger from "hamburger-react";

const Header = () => {
  const dispatch = useDispatch();
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isBeforeAfterMenuActive, setIsBeforeAfterMenuActive] = useState(false);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const [isChecked, setIsChecked] = useState(isDarkTheme);
  const isActive = useSelector((state) => state.burger.isBurgerActive);
  const [isOpen, setOpen] = useState(isActive);

  const handleMenuOpen = () => {
    setIsMenuActive(true);
    setIsBeforeAfterMenuActive(false);
  };

  const handleMenuClose = () => {
    setIsMenuActive(false);
  };

  const handleBeforeAfterMenuOpen = () => {
    setIsMenuActive(false);
    setIsBeforeAfterMenuActive(true);
  };

  const handleBeforeAfterMenuClose = () => {
    setIsBeforeAfterMenuActive(false);
  };

  const handleModalOpen = () => {
    dispatch(setIsActive());
    dispatch(setBurgerIsClose());
    setOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    setIsMenuActive(false);
    setIsBeforeAfterMenuActive(false);
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
    setIsChecked((prev) => !prev);
  };

  useEffect(() => {
    setIsChecked(isDarkTheme);
    setOpen(isActive);
  }, [isDarkTheme, isActive]);

  return (
    <header className={`header ${isDarkTheme ? "" : "light"}`}>
      <div className="header__wrapper">
        <Link onClick={handleScrollToTop} to={"/"}>
          <img
            src={logo}
            alt="логотип медичного центру Філада"
            className="header__logo"
          />
        </Link>

        <nav className="header__nav">
          <div className="header__link-first" onMouseOver={handleMenuOpen}>
            <div
              onMouseLeave={handleMenuClose}
              className={`header__menu ${isDarkTheme ? "" : "light"} ${
                isMenuActive ? "active" : ""
              }`}
            >
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_PASTIC_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Пластична хірургія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_DERMATOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Дерматологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_SURGERY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Хірургія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_COSMETOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Косметологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_PROCTOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Проктологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_NEUROLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Неврологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_GINECOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Гінекологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_ENDOCRINOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Ендокринологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_OTOLARYNGOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                ЛОР
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_DIETICS_NUTRITION_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Дієтологія/Нутріціологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_ORTHOPEDICS_TRAUMATOLOGY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Ортопедія та травматологія
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_ULTRASOUND_DIAGNOSTICS_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                УЗ діагностика
              </Link>
              <Link
                onClick={handleScrollToTop}
                to={SERVICE_VASCULAR_SURGERY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Судинна хірургія
              </Link>
            </div>

            <Link
              onClick={handleScrollToTop}
              to={ALL_SERVICES_ROUTE}
              className={`header__link ${isDarkTheme ? "" : "light"}`}
            >
              Напрямки роботи
            </Link>

            <div className={`triangle ${isMenuActive ? "active" : ""} `}>
              <Triangle isActive={isMenuActive} />
            </div>
          </div>

          {/* ✅ Замість "Про нас" тепер HUB "Популярні послуги" */}
          <Link
            onClick={handleScrollToTop}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            to={POPULAR_SERVICES_HUB_ROUTE}
          >
            Популярні послуги
          </Link>

          <Link
            onClick={handleScrollToTop}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            to={"/doctors/"}
          >
            Лікарі
          </Link>

          <Link
            onClick={handleScrollToTop}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            to={PRICES_ROUTE}
          >
            Ціни
          </Link>

          <div
            onMouseOver={handleBeforeAfterMenuOpen}
            className="before__after-header-wrapper"
          >
            <div
              onMouseLeave={handleBeforeAfterMenuClose}
              className={`header__before-after-menu ${
                isDarkTheme ? "" : "light"
              } ${isBeforeAfterMenuActive ? "active" : ""}`}
            >
              <Link
                onClick={handleScrollToTop}
                to={BEFORE_AFTER_BLEPHAROPLASTY_ROUTE}
                className={`header__menu-link ${
                  isDarkTheme ? "" : "light"
                } mont-r`}
              >
                Блефаропластика
              </Link>
            </div>

            <p className={`header__link large ${isDarkTheme ? "" : "light"}`}>
              До/після
            </p>

            <div className={`triangle ${isBeforeAfterMenuActive ? "active" : ""} `}>
              <Triangle isActive={isBeforeAfterMenuActive} />
            </div>
          </div>

          <Link
            onClick={handleScrollToTop}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            to={CONTACTS_ROUTE}
          >
            Контакти
          </Link>

          <Link
            onClick={handleScrollToTop}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            to={BLOG_ROUTE}
          >
            Блог
          </Link>

          <a
            onClick={handleMenuClose}
            target={"_blank"}
            rel={"noreferrer"}
            className={`header__link ${isDarkTheme ? "" : "light"}`}
            href="https://www.google.com/maps/place/Medychnyy+Tsentr+Filada/@51.490013,31.303919,15z/data=!4m6!3m5!1s0x46d5492fe0c4212f:0x835a19a342e61be!8m2!3d51.4900131!4d31.3039185!16s%2Fg%2F11w91zpjw5?hl=ru&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            Відгуки
          </a>
        </nav>

        <div className="header__buttons">
          <div className="toggle__header-button-wrapper">
            <ToggleThemeButton
              onChange={handleToggleTheme}
              isChecked={!isChecked}
            />
          </div>

          <a
            className={`header__call-button ${isDarkTheme ? "" : "light"}`}
            href="tel:+38(063)503-04-72"
          >
            +38(063)503-04-72
          </a>

          <button
            onClick={handleModalOpen}
            className={`header__taget-button ${isDarkTheme ? "" : "light"}`}
          >
            Консультація
          </button>

          <div className="burger__button">
            <Hamburger
              size={28}
              toggled={isOpen}
              onToggle={(toggled) => {
                if (toggled) {
                  dispatch(setIsClose());
                  dispatch(setBurgerIsActive());
                  dispatch(setClearIsFormSended());
                  setOpen(true);
                } else {
                  dispatch(setBurgerIsClose());
                  setOpen(false);
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
