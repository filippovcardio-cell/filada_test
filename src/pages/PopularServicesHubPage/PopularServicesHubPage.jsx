import { useSelector } from "react-redux";
import Cover from "../../components/Cover/Cover";
import "./PopularServicesHubPage.css";

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { popularServicesArr } from "../../utils/popularServices/popularServicesArr";

const PopularServicesHubPage = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <Helmet>
        <title>Популярні послуги | Медичний центр Filada</title>
        <meta
          name="description"
          content="Популярні послуги Медичного центру Filada: актуальні напрямки, опис процедур та перехід на сторінки послуг."
        />
        <meta property="og:url" content={"https://filada.com.ua/popular-services"} />
        <meta
          property="og:description"
          content={
            "Популярні послуги Медичного центру Filada: актуальні напрямки, опис процедур та перехід на сторінки послуг."
          }
        />
        <link rel="canonical" href={"https://filada.com.ua/popular-services"} />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>

      <div className="popular-services__page">
        <Cover coverDescription={"Популярні послуги"} />
        <h1 className={`popular-services__page-title ${isDarkTheme ? "" : "light"} arial-r`}>
          Популярні послуги
        </h1>

        <div className="popular-services__cards">
          {popularServicesArr.map((card, idx) => {
            return (
              <Link
                onClick={scrollToTop}
                to={`/services/${card.slug}`}
                key={idx}
                className="popular-services__card"
              >
                <img
                  src={card.previewImage}
                  alt={card.title}
                  className="popular-services__card-image"
                />
                <div className="popular-services__card-text">{card.title}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopularServicesHubPage;



