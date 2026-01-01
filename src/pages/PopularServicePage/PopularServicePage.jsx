import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import { popularServicesPagesArr } from "../../utils/popularServicesPagesArr";
import "./PopularServicePage.css";

const PopularServicesPage = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="popular-services-page">
      <Helmet>
        <title>Популярні послуги | Filada</title>
        <meta
          name="description"
          content="Популярні послуги медичного центру Filada: сторінки послуг для швидкого вибору та запису."
        />
        <link rel="canonical" href="https://filada.com.ua/services/" />
      </Helmet>

      <Cover coverDescription="Популярні послуги" />

      <div className={`popular-services-wrapper ${isDarkTheme ? "" : "light"}`}>
        <h1 className={`popular-services-title ${isDarkTheme ? "" : "light"} arial-r`}>
          Популярні послуги
        </h1>

        <div className="popular-services-grid">
          {popularServicesPagesArr.map((p) => (
            <Link
              key={p.slug}
              to={`/services/${p.slug}`}
              onClick={scrollToTop}
              className={`popular-services-card ${isDarkTheme ? "" : "light"}`}
            >
              <div className="popular-services-card-top">
                <h2 className="popular-services-card-title mont-m">
                  {p.pageTitle || p.coverDescription}
                </h2>
                <p className="popular-services-card-desc mont-r">
                  {p.metaDescription || "Детальніше про послугу"}
                </p>
              </div>

              <div className="popular-services-card-bottom mont-r">
                Перейти →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularServicesPage;
