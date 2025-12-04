import { Link } from "react-router-dom";
import "./MainServices.css";
import { useSelector } from "react-redux";
import { ALL_SERVICES_ROUTE, SERVICE_COSMETOLOGY_ROUTE, SERVICE_DERMATOLOGY_ROUTE, SERVICE_DIETICS_NUTRITION_ROUTE, SERVICE_ENDOCRINOLOGY_ROUTE, SERVICE_GINECOLOGY_ROUTE, SERVICE_NEUROLOGY_ROUTE, SERVICE_OTOLARYNGOLOGY_ROUTE, SERVICE_PASTIC_ROUTE, SERVICE_PROCTOLOGY_ROUTE, SERVICE_VESSELS_ROUTE } from "../../../utils/routes";

const MainServices = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className={`main__services ${isDarkTheme ? "" : "light"}`}>
      <h2 className={`main__services-title arial-r ${isDarkTheme ? "" : "light"}`}>НАПРЯМКИ РОБОТИ</h2>
      <div className="main__services-wrapper">
        <Link onClick={handleScrollToTop} to={SERVICE_PASTIC_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Пластична хірургія</h3>
          <p className="service__description">
          Як пластична хірургія може змінити ваше життя на краще? Якщо ваш зовнішній вигляд вас не задовольняє. Якщо ваш внутрішній світ не сприймає вашу зовнішність, ваше тіло, то ви в правильному місці. Адже ми вважаємо, що саме Ви заслуговуєте бути щасливими та успішними.
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link>
        <Link onClick={handleScrollToTop} to={SERVICE_GINECOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Гінекологія</h3>
          <p className="service__description">
          Чи знаєте ви, як часто кожна жінка повинна відвідувати гінеколога? Мінімум 1 раз на рік . Для того, щоб виявляти відхилення від норми на ранніх стадіях та проводити профілактику різних захворювань.
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link>
        {/* <Link to={SERVICE_COSMETOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">
            Косметологія
          </h3>
          <p className="service__description">
          Людина, яка доглядає за собою, завжди виділяється серед інших. До косметолога звертаються з різних причин: - Для когось важливий презентабельний зовнішній вигляд - Комусь це допомагає відчувати себе впевненіше в особистому чи професійному житті
          </p>
          <div className="service__footer diff">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        {/* <Link to={SERVICE_DERMATOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">
            Дерматологія
          </h3>
          <p className="service__description">
          Захворювання шкіри мають безліч проявів, симптомів та наслідків. Кваліфікований лікар-дерматолог спеціалізується на діагностиці та лікуванні шкірних захворювань, нігтів та волосся.
          </p>
          <div className="service__footer diff">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        {/* <Link to={SERVICE_PROCTOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Проктологія</h3>
          <p className="service__description">
          Найпоширеніше упередження при виникненні проблем з боку заднього проходу – це «соромно прийти на огляд». Насправді наші комплекси роблять нам ведмежу послугу. Проблема не вирішується, а тільки погіршується з року в рік. В результаті вирішити 
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        <Link onClick={handleScrollToTop} to={SERVICE_OTOLARYNGOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">ЛОР</h3>
          <p className="service__description">
          Порушення носового дихання, біль, виділення з носу, порушення слуху, утруднене ковтання, викривлення носової перетинки та інші симптоми можуть свідчити про наявність захворювання ЛОР органів. Не варто чекати ускладнень.
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link>
        {/* <Link to={SERVICE_NEUROLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Неврологія</h3>
          <p className="service__description">
          Неврологія – це галузь медицини, яка відповідає за діагностику та лікування різноманітних захворювань центральної та периферичної нервової системи.
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        {/* <Link to={SERVICE_ENDOCRINOLOGY_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Ендокринологія</h3>
          <p className="service__description">
          Медичний центр Філада пропонує високоякісні медичні послуги для діагностики та лікування захворювань ендокринної системи...
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        {/* <Link to={SERVICE_DIETICS_NUTRITION_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">Дієтологія / Нутріціологія</h3>
          <p className="service__description">
          Важливість здорового харчування важко переоцінити, адже саме від нього залежать наше самопочуття...
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        {/* <Link to={SERVICE_VESSELS_ROUTE} className={`service ${isDarkTheme ? "" : "light"}`}>
          <h3 className="service__title mont-m">УЗ діагностика</h3>
          <p className="service__description">
            Персоналізований підхід до кожного пацієнта. Наш медичний центр
            пропонує індивідуальні програми лікування та обстеження
          </p>
          <div className="service__footer">
            <p className="service__footer-text mont-m">Детальніше про напрям</p>
            <div className="service__footer-icon-wrapper"></div>
          </div>
        </Link> */}
        <Link onClick={handleScrollToTop} className={`main__services-link-to-all ${isDarkTheme ? "" : "light"} mont-r`} to={ALL_SERVICES_ROUTE}>Переглянути всі</Link>
      </div>
    </section>
  );
};

export default MainServices;
