import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setBurgerIsClose } from "../../redux/BurgerSlice/BurgerSlice";
import arrowBlack from "../../assets/icons/ArrowBlack.png";
import arrowGold from "../../assets/icons/ArrowGold.png";
import {
  BLOG_ROUTE,
  CONTACTS_ROUTE,
  PRICES_ROUTE,
  POPULAR_SERVICES_HUB_ROUTE,
} from "../../utils/routes";
import "./Burger.css";
import { navArr, navArrBeforeAfter } from "../../utils/navArr";

const Burger = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const isActive = useSelector((state) => state.burger.isBurgerActive);

  const [isSecondLevelBurgerActive, setIsSecondLevelBurgerActive] =
    useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const body = document.body;
    if (isActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isActive, isSecondLevelBurgerActive]);

  const handleSecondLevelMenuOpen = (category) => {
    setActiveCategory(category);
    setIsSecondLevelBurgerActive(true);
  };

  const handleSecondLevelMenuClose = () => {
    setIsSecondLevelBurgerActive(false);
    setActiveCategory(null);
  };

  const handleBurgerClose = () => {
    window.scrollTo(0, 0);
    dispatch(setBurgerIsClose());
    setIsSecondLevelBurgerActive(false);
    setActiveCategory(null);
  };

  return (
    <div className={`burger__menu ${isActive ? "active" : ""}`}>
      <div className={`burger__overlay ${isDarkTheme ? "" : "light"}`}>
        <div className="burger__body">
          <div
            onClick={() => handleSecondLevelMenuOpen("services")}
            className={`burger__item-catalog ${
              isDarkTheme ? "" : "light"
            } mont-r`}
          >
            Напрямки роботи{" "}
            <img
              src={isDarkTheme ? arrowGold : arrowBlack}
              alt="перейти до каталогу"
              className="arrow__mobile"
            />
          </div>

          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"}  mont-r`}
            to={"/"}
          >
            Головна
          </Link>

          {/* ✅ Замість "Про нас" */}
          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            to={POPULAR_SERVICES_HUB_ROUTE}
          >
            Популярні послуги
          </Link>

          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            to={"/doctors/"}
          >
            Лікарі
          </Link>

          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            to={PRICES_ROUTE}
          >
            Ціни
          </Link>

          <div
            onClick={() => handleSecondLevelMenuOpen("beforeAfter")}
            className={`burger__item-catalog ${
              isDarkTheme ? "" : "light"
            } mont-r`}
          >
            До/після{" "}
            <img
              src={isDarkTheme ? arrowGold : arrowBlack}
              alt="перейти до категорій до/після"
              className="arrow__mobile"
            />
          </div>

          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            to={CONTACTS_ROUTE}
          >
            Контакти
          </Link>

          <Link
            onClick={handleBurgerClose}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            to={BLOG_ROUTE}
          >
            Блог
          </Link>

          <a
            onClick={handleBurgerClose}
            target={"_blank"}
            rel={"noreferrer"}
            className={`burger__link ${isDarkTheme ? "" : "light"} mont-r`}
            href="https://www.google.com/maps/place/Medychnyy+Tsentr+Filada/@51.490013,31.303919,15z/data=!4m6!3m5!1s0x46d5492fe0c4212f:0x835a19a342e61be!8m2!3d51.4900131!4d31.3039185!16s%2Fg%2F11w91zpjw5?hl=ru&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          >
            Відгуки
          </a>
        </div>

        <div
          className={`burger__body-second ${isDarkTheme ? "" : "light"} ${
            isSecondLevelBurgerActive ? "active" : ""
          }`}
        >
          <div
            onClick={handleSecondLevelMenuClose}
            className={`burger__body-second-back ${
              isDarkTheme ? "" : "light"
            } mont-r`}
          >
            <span>{"< Назад"}</span>{" "}
            <span>{activeCategory === "beforeAfter" ? "До/після" : "Послуги"}</span>
          </div>

          {activeCategory === "beforeAfter"
            ? navArrBeforeAfter.map((subCategory, idx) => (
                <Link
                  key={idx}
                  onClick={handleBurgerClose}
                  to={subCategory.path}
                  className={`burger__item-catalog ${
                    isDarkTheme ? "" : "light"
                  } mont-r`}
                >
                  {subCategory.title}{" "}
                  <img
                    src={isDarkTheme ? arrowGold : arrowBlack}
                    alt="перейти до підкатегорії"
                    className="arrow__mobile"
                  />
                </Link>
              ))
            : navArr.map((category, idx) => (
                <Link
                  key={idx}
                  onClick={handleBurgerClose}
                  to={category.path}
                  className={`burger__item-catalog ${
                    isDarkTheme ? "" : "light"
                  } mont-r`}
                >
                  {category.title}{" "}
                  <img
                    src={isDarkTheme ? arrowGold : arrowBlack}
                    alt="перейти до підкатегорій"
                    className="arrow__mobile"
                  />
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Burger;
