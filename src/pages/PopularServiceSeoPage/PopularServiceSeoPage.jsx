import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

import Cover from "../../components/Cover/Cover";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { popularServicesPagesArr } from "../../utils/popularServices/popularServices";

import "./PopularServiceSeoPage.css";

const PopularServiceSeoPage = () => {
  const { slug } = useParams();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const page = popularServicesPagesArr.find((p) => p.slug === slug);

  if (!page) return <NotFoundPage />;

  return (
    <>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta property="og:url" content={page.metaUrl} />
        <meta property="og:description" content={page.metaDescription} />
        <link rel="canonical" href={page.metaUrl} />
        <script type="application/ld+json">{page.jsonLd}</script>
      </Helmet>

      <div className="popular-service__page">
        <Cover coverDescription={page.title} />
        <h1 className={`popular-service__title ${isDarkTheme ? "" : "light"} arial-r`}>
          {page.h1}
        </h1>

        <div className="popular-service__content">
          {page.text}
        </div>
      </div>
    </>
  );
};

export default PopularServiceSeoPage;



