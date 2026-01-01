import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import { popularServicesPagesArr } from "../../utils/popularServicesPagesArr";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./PopularServicePage.css";

const PopularServicePage = () => {
  const { slug } = useParams();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const page = useMemo(() => {
    return popularServicesPagesArr.find((p) => p.slug === slug);
  }, [slug]);

  if (!page) {
    return <NotFoundPage />;
  }

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className="popular-service-page">
      <Helmet>
        {page.metaTitle ? <title>{page.metaTitle}</title> : null}
        {page.metaDescription ? (
          <meta name="description" content={page.metaDescription} />
        ) : null}
        {page.metaUrl ? <link rel="canonical" href={page.metaUrl} /> : null}

        {page.jsonLd ? (
          <script type="application/ld+json">
            {JSON.stringify(page.jsonLd)}
          </script>
        ) : null}
      </Helmet>

      <Cover coverDescription={page.coverDescription || "Послуга"} />

      <div className={`popular-service-page-wrapper ${isDarkTheme ? "" : "light"}`}>
        <h1 className={`popular-service-page-title ${isDarkTheme ? "" : "light"} arial-r`}>
          {page.pageTitle || page.coverDescription || "Послуга"}
        </h1>

        <section className="popular-service-page-content">
          {/* 1) Якщо text — JSX (як SmasLiftingText) */}
          {!Array.isArray(page.text) && page.text ? (
            page.text
          ) : null}

          {/* 2) Якщо text — масив рядків (старий формат) */}
          {Array.isArray(page.text) &&
            page.text.map((p, idx) => (
              <p key={idx} className="popular-service-page-text mont-r">
                {p}
              </p>
            ))}
        </section>

        {Array.isArray(page.photos) && page.photos.length > 0 ? (
          <section className="popular-service-page-photos">
            {page.photos.map((src, idx) => (
              <img
                key={idx}
                className="popular-service-page-photo"
                src={src}
                alt={`${page.coverDescription || "Фото"} ${idx + 1}`}
                loading="lazy"
              />
            ))}
          </section>
        ) : null}

        <section className="popular-service-page-appointment">
          <h2 className="popular-service-page-subtitle mont-m">Запис на прийом</h2>

          <div className="popular-service-page-appointment-box">
            <p className="mont-r">
              {page.doctorName
                ? page.doctorName
                : "Лікар буде вказаний після фіналізації сторінки."}
            </p>

            <div className="popular-service-page-appointment-actions">
              <Link
                to={page.doctorPath || "/doctors/"}
                onClick={scrollToTop}
                className="popular-service-page-link mont-m"
              >
                Сторінка лікаря
              </Link>

              <Link
                to="/contacts/"
                onClick={scrollToTop}
                className="popular-service-page-link mont-m"
              >
                Записатися (контакти)
              </Link>
            </div>
          </div>
        </section>

        {Array.isArray(page.faq) && page.faq.length > 0 ? (
          <section className="popular-service-page-faq">
            <h2 className="popular-service-page-subtitle mont-m">FAQ</h2>

            <div className="popular-service-page-faq-list">
              {page.faq.map((item, idx) => (
                <div key={idx} className="popular-service-page-faq-item">
                  <h3 className="popular-service-page-faq-q mont-m">{item.question}</h3>
                  <p className="popular-service-page-faq-a mont-r">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {Array.isArray(page.interlinks) && page.interlinks.length > 0 ? (
          <section className="popular-service-page-links">
            <h2 className="popular-service-page-subtitle mont-m">Корисні посилання</h2>

            <div className="popular-service-page-links-list">
              {page.interlinks.map((l, idx) => (
                <Link
                  key={idx}
                  to={l.to}
                  onClick={scrollToTop}
                  className="popular-service-page-link mont-r"
                >
                  {l.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default PopularServicePage;


