import { useSelector } from 'react-redux';
import Cover from '../../components/Cover/Cover'
import './BlogPage.css'

import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

const BlogPage = ({blogArr}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
     <Helmet>
        <title>Статті та новини від Медичного центру Filada</title>
        <meta name="description" content="Читайте корисні статті та новини від Медичного центру Filada: актуальні медичні поради, нові послуги, події та експертна думка лікарів." />
        <meta property="og:url" content={"https://filada.com.ua/blog/"} />
        <meta property="og:description" content={"Читайте корисні статті та новини від Медичного центру Filada: актуальні медичні поради, нові послуги, події та експертна думка лікарів."} />
        <link rel="canonical" href={"https://filada.com.ua/blog/"} />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
    <div className='blog__page'>
      <Cover coverDescription={"Блог"} />
      <h1 className={`blog__page-title ${isDarkTheme ? "" : "light"} arial-r`}>Блог на медичні теми</h1>

      <div className="blog__cards">
        {
          blogArr.map((card, idx) => {
            return (
              <Link onClick={scrollToTop} to={`/blog${card.path}`} key={idx} className="blog__card">
                <img src={card.previewImage} alt={card.title} className="blog__card-image" />
                <div className="blog__card-text">{card.title}</div>
              </Link>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default BlogPage