import { Link } from "react-router-dom";
import Cover from "../../components/Cover/Cover";
import "./SeoBlogPage.css";
import { useSelector } from "react-redux";
import { CONTACTS_ROUTE } from "../../utils/routes";
import { Helmet } from "react-helmet-async";


const SeoBlogPage = ({
  coverDescription,
  text,
  hrefDetails,
  hrefBeforeAfter,
  metaTitle,
  metaDescription,
  metaUrl
}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
    <Helmet>
    <title>{metaTitle}</title>
    <meta name="description" content={metaDescription} />
    <meta property="og:url" content={metaUrl} />
    <meta property="og:description" content={metaDescription} />
    <link rel="canonical" href={metaUrl} />
    <meta name="robots" content="noindex, follow" />
    <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
    </Helmet>
    <div className="seo__blog-page">
      <Cover coverDescription={coverDescription} />
      <div className="seo__blog-page-texts">
        {text}
        {hrefDetails && (
          <Link
            onClick={scrollToTop}
            to={hrefDetails}
            className="seo__blog-page-link"
          >
            Детальніше про напрямок роботи
          </Link>
        )}

        {hrefBeforeAfter && (
          <Link
            onClick={scrollToTop}
            to={hrefBeforeAfter}
            className="seo__blog-page-link"
          >
            Результати робіт (До/Після)
          </Link>
        )}
        <Link
          onClick={scrollToTop}
          to={CONTACTS_ROUTE}
          className="seo__blog-page-link"
        >
          Зв’яжіться з нами і ми підберемо зручний час для консультації
        </Link>
      </div>
    </div>
    {/* <!-- Google Tag Manager (noscript) --> */}
    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PXTCPNZW"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
    </>
  );
};

export default SeoBlogPage;
