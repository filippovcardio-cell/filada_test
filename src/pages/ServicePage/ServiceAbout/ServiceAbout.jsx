import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ServiceAbout.css";

const ServiceAbout = ({
  serviceTitle,
  serviceTexts,
  servicePhotos,
  coverDescription,
  doctorName,
  path
}) => {
  const [serviceTextOne, serviceTextTwo, serviceTextThree, serviceTextFour] = [
    ...serviceTexts,
  ];
  const [servicePhotoOne, servicePhotoTwo, servicePhotoThree] = [
    ...servicePhotos,
  ];
  
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className="service__aboute">
      <div className="service__aboute-texts">
        <h1
          className={`service-about-title arial-r ${
            isDarkTheme ? "" : "light"
          }`}
        >
          {serviceTitle}
        </h1>
        <p className="service-about-description">{serviceTextOne}</p>
        <p className="service-about-description">{serviceTextTwo}</p>
        {serviceTextThree && (
          <p className="service-about-description">{serviceTextThree}</p>
        )}
        {serviceTextFour && (
          <p className="service-about-description">{serviceTextFour}</p>
        )}
        <p className={`service-about-doctor-text ${isDarkTheme ? "" : "light"}`}>{doctorName}</p>
        <Link
        onClick={scrollToTop}
          className={`service-about-doctor-link ${isDarkTheme ? "" : "light"}`}
          to={path}
        >
          Детальніше про лікаря
        </Link>
      </div>
      <div className="service__about-photos">
        <div className="service__about-photos-small">
          <img src={servicePhotoOne} alt={`Фото кабінету клініки МЦ Філада у розділі ${coverDescription}`} className="service__about-image" />
          <img src={servicePhotoTwo} alt={`Друге фото кабінету клініки МЦ Філада у розділі ${coverDescription}`} className="service__about-image" />
        </div>
        <img
          src={servicePhotoThree}
          alt={`Фото лікаря МЦ Філада у напрямі ${coverDescription}`}           className="service__about-image-large"
        />
      </div>
    </section>
  );
};

export default ServiceAbout;
