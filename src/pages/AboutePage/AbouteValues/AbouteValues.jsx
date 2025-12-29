import { useSelector } from "react-redux";
import "./AbouteValues.css";
import img from "../../../assets/images/outdoorPhoto.webp";
import imgTwo from "../../../assets/images/welcome-photo-two.webp";

const AbouteValues = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <section className="aboute__values">
      <div className="aboute__texts">
        <h1 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
          Медичний центр «Філада» - сучасна приватна клініка в Чернігові
        </h1>
        <p className="aboute__texts-description">
          Медичний центр «Філада» - це багатопрофільна приватна клініка, яка
          надає повний спектр медичних послуг в одному місці. Ми поєднуємо
          професійну команду лікарів, сучасне медичне обладнання та комплексний
          підхід до діагностики й лікування.
        </p>
        <p className="aboute__texts-description">
          Наша мета - своєчасна, точна та ефективна медична допомога з урахуванням
          індивідуальних потреб кожного пацієнта.
        </p>
      </div>

      <img
        src={img}
        alt="фото нашої клініки Filada Філада"
        className="aboute__image"
      />

      <div className="aboute-image-text-wrapper">
        <img
          src={imgTwo}
          alt="фото нашої клініки Filada Філада"
          className="aboute__image"
        />

        <div className="aboute__texts">
          <h2 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
            Комплексний підхід до здоров’я
          </h2>
          <p className="aboute__texts-description">
            У медичному центрі «Філада» пацієнт може отримати консультацію лікаря,
            пройти інструментальні обстеження та здати лабораторні аналізи в межах
            одного візиту. Це дозволяє швидко поставити діагноз і розпочати лікування
            без зайвих затримок.
          </p>
          <p className="aboute__texts-description">
            Клініка працює за принципом цілісного медичного супроводу, що особливо
            важливо при складних або комбінованих станах, які потребують участі
            декількох спеціалістів.
          </p>
        </div>
      </div>

      <div className="aboute-values-fullwidth">
        <div className="aboute__texts aboute__texts--full">
          <h2 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
            Сучасне обладнання та досвідчені лікарі
          </h2>
          <p className="aboute__texts-description">
            Медичний центр оснащений сучасним діагностичним та хірургічним обладнанням,
            яке відповідає міжнародним стандартам якості та безпеки. Це дає змогу
            проводити точну діагностику, виконувати малоінвазивні втручання та
            контролювати ефективність лікування.
          </p>
          <p className="aboute__texts-description">
            Прийом ведуть лікарі з багаторічним практичним досвідом, які працюють
            відповідно до принципів доказової медицини та актуальних клінічних
            протоколів. Для кожного пацієнта підбирається індивідуальний план
            обстеження та лікування.
          </p>
        </div>

        <div className="aboute__texts aboute__texts--full">
          <h2 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
            Основні напрями роботи
          </h2>
          <p className="aboute__texts-description">
            Медичний центр «Філада» надає широкий перелік медичних послуг, зокрема:
            – консультації лікарів вузьких спеціальностей; – ультразвукова та лабораторна
            діагностика; – гінекологія та супровід жіночого здоров’я; – неврологія та
            ендокринологія; – дерматологія та косметологія; – отоларингологія (ЛОР);
            – ортопедія та травматологія; – загальна та судинна хірургія; – пластична
            хірургія; – проктологія; – терапія; – функціональна діагностика;
            – дієтологія та нутриціологія.
          </p>
        </div>

        <div className="aboute__texts aboute__texts--full">
          <h2 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
            Комфорт і зручність для пацієнта
          </h2>
          <p className="aboute__texts-description">
            Ми створили умови, у яких пацієнт почувається спокійно та впевнено. Прийом
            ведеться за попереднім записом, що дозволяє уникнути черг і раціонально
            планувати час. Персонал клініки забезпечує уважне та коректне ставлення
            на всіх етапах обслуговування.
          </p>
        </div>

        <div className="aboute__texts aboute__texts--full">
          <h2 className={`aboute__texts-title arial-r ${isDarkTheme ? "" : "light"}`}>
            Онлайн-запис до лікаря
          </h2>
          <p className="aboute__texts-description">
            Для зручності пацієнтів доступний онлайн-запис до лікаря. Ви можете обрати
            спеціаліста та зручний час прийому без телефонних дзвінків і очікування.
            За наявності вільних слотів можливий запис на той самий день.
          </p>
          <p className="aboute__texts-description">
            Медичний центр «Філада» - коли важливі точність, професіоналізм і результат
          </p>
          <p className="aboute__texts-description">
            Ми працюємо для пацієнтів, які цінують якісну медицину, системний підхід та
            відповідальне ставлення до власного здоров’я.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbouteValues;


