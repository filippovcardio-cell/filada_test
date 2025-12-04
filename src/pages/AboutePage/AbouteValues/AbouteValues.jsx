import { useSelector } from "react-redux";
import "./AbouteValues.css";
import img from '../../../assets/images/outdoorPhoto.webp'
import imgTwo from '../../../assets/images/welcome-photo-two.webp'

const AbouteValues = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <section className="aboute__values">
      <div className="aboute__texts">
        <h1
          className={`aboute__texts-title arial-r ${
            isDarkTheme ? "" : "light"
          }`}
        >
          Про клініку та персонал МЦ Filada 
        </h1>
        <p className="aboute__texts-description">
          Медичний центр ФІЛАДА – це колектив однодумців, професіоналів своєї
          справи, стратегія яких направлена на те, щоб використовуючи новітні
          технології та сучасні методи лікування, дарувати людям красу,
          здоров*я, можливість повноцінно відчувати радість життя.
        </p>
        <p className="aboute__texts-description">
          На пацієнтів медичного центру чекають сучасне обладнання, досвідчені
          руки лікарів та медичних сестер, уважне ставлення кожного
          співробітника та індивідуальний підхід при вирішенні будь яких задач.
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
          <h2
            className={`aboute__texts-title arial-r ${
              isDarkTheme ? "" : "light"
            }`}
          >
            НАШІ ЦІННОСТІ
          </h2>
          <p className="aboute__texts-description">
            В нашому медичному центрі ми прагнемо до досконалості в усьому, що
            робимо. Ми використовуємо найсучасніші технології та методики, щоб
            забезпечити найкращі результати та безпеку для наших клієнтів.
            Прагнемо створити атмосферу довіри та комфорту, де кожен відчує себе
            особливим.
          </p>
          <p className="aboute__texts-description">
          Для нас важливо підтримувати високі стандарти медичного обслуговування та  уважно ставитися до навчання і постійного підвищення кваліфікації персоналу, оснащеності клініки, якості придбаних витратних матеріалів, питань стерильності та дезінфекції.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbouteValues;
