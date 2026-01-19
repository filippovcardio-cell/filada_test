import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
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
  SERVICE_CARDIOLOGY_ROUTE,
} from "../../utils/routes";

import "./AllServicesPage.css";
import Cover from "../../components/Cover/Cover";
import { Helmet } from "react-helmet-async";

const AllServicesPage = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Helmet>
        <title>Приватні медичні послуги клініки Filada в Чернігові</title>
        <meta
          name="description"
          content={
            "Всі послуги клініки Filada ⭐ Огляд і консультації досвідчених лікарів ✔️ Якісна діагностика✔️ Краще лікування ✔️тел.063-503-04-72"
          }
        />
        <meta
          property="og:url"
          content={"https://filada.com.ua/all-services/"}
        />
        <link
          rel="canonical"
          href={"https://filada.com.ua/all-services/"}
        />
        <script>{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');
        `}</script>
      </Helmet>

      <div className="all__services-page">
        <Cover coverDescription={"Тут краса зустрічається зі здоров’ям"} />

        <div
          className={`all__services-page-wrapper ${
            isDarkTheme ? "" : "light"
          }`}
        >
          <h1
            className={`all__services-page-title ${
              isDarkTheme ? "" : "light"
            } arial-r`}
          >
            Всі послуги Filada
          </h1>

          <div className="all__services-page-services-wrapper">
            <Link
              onClick={handleScrollToTop}
              to={SERVICE_PASTIC_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Пластична хірургія</h3>
              <p className="service__description">
                Як пластична хірургія може змінити ваше життя на краще? Якщо ваш
                зовнішній вигляд вас не задовольняє. Якщо ваш внутрішній світ не
                сприймає вашу зовнішність, ваше тіло, то ви в правильному місці.
                Адже ми вважаємо, що саме Ви заслуговуєте бути щасливими та
                успішними.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_SURGERY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Хірургія</h3>
              <p className="service__description">
                Хірургічне лікування доброякісних новоутворень шкіри та підшкірної
                клітковини, лікування кил білої лінії живота, пахових та пупкових
                кил та інші операції вже доступні в нашому медичному центрі
                «Філада».
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_GINECOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Гінекологія</h3>
              <p className="service__description">
                Чи знаєте ви, як часто кожна жінка повинна відвідувати
                гінеколога? Мінімум 1 раз на рік . Для того, щоб виявляти
                відхилення від норми на ранніх стадіях та проводити профілактику
                різних захворювань.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_COSMETOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Косметологія</h3>
              <p className="service__description">
                Людина, яка доглядає за собою, завжди виділяється серед інших. До
                косметолога звертаються з різних причин: - Для когось важливий
                презентабельний зовнішній вигляд - Комусь це допомагає відчувати
                себе впевненіше в особистому чи професійному житті
              </p>
              <div className="service__footer diff">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_DERMATOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Дерматологія</h3>
              <p className="service__description">
                Захворювання шкіри мають безліч проявів, симптомів та наслідків.
                Кваліфікований лікар-дерматолог спеціалізується на діагностиці та
                лікуванні шкірних захворювань, нігтів та волосся.
              </p>
              <div className="service__footer diff">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_PROCTOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Проктологія</h3>
              <p className="service__description">
                Найпоширеніше упередження при виникненні проблем з боку заднього
                проходу – це «соромно прийти на огляд». Насправді наші комплекси
                роблять нам ведмежу послугу.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_OTOLARYNGOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">ЛОР</h3>
              <p className="service__description">
                Порушення носового дихання, біль, виділення з носу, порушення
                слуху, утруднене ковтання можуть свідчити про наявність
                захворювання ЛОР органів.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_NEUROLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Неврологія</h3>
              <p className="service__description">
                Неврологія – це галузь медицини, яка відповідає за діагностику та
                лікування захворювань центральної та периферичної нервової
                системи.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_ENDOCRINOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Ендокринологія</h3>
              <p className="service__description">
                Медичний центр «Філада» пропонує високоякісні медичні послуги для
                діагностики та лікування захворювань ендокринної системи...
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_DIETICS_NUTRITION_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">
                Дієтологія / Нутріціологія
              </h3>
              <p className="service__description">
                Важливість здорового харчування важко переоцінити, адже саме від
                нього залежать наше самопочуття...
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_ULTRASOUND_DIAGNOSTICS_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">УЗ діагностика</h3>
              <p className="service__description">
                В медичному центрі «Філада» працює кабінет УЗ-діагностики, де
                можна пройти обстеження швидко, якісно та без черг.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_ORTHOPEDICS_TRAUMATOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">
                Ортопедія та травматологія
              </h3>
              <p className="service__description">
                Консультація ортопеда-травматолога потрібна при болю в суглобах,
                обмеженні рухів, травмах, хронічних змінах опорно-рухового
                апарату.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_VASCULAR_SURGERY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Судинна хірургія</h3>
              <p className="service__description">
                Для лікування варикозу, тромбозу та інших судинних захворювань
                потрібен досвідчений судинний хірург і сучасні методики
                лікування.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>

            <Link
              onClick={handleScrollToTop}
              to={SERVICE_CARDIOLOGY_ROUTE}
              className={`service ${isDarkTheme ? "" : "light"}`}
            >
              <h3 className="service__title mont-m">Кардіологія</h3>
              <p className="service__description">
                Діагностика та лікування захворювань серця і судин. Консультація
                кардіолога, ЕКГ, УЗД серця (ЕХО КС), Холтер ЕКГ.
              </p>
              <div className="service__footer">
                <p className="service__footer-text mont-m">
                  Детальніше про напрям
                </p>
                <div className="service__footer-icon-wrapper"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PXTCPNZW"
          height="0"
          width="0"
          title="gtm"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
};

export default AllServicesPage;

