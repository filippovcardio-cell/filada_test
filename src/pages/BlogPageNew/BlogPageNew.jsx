import "./BlogPageNew.css";
import Cover from "../../components/Cover/Cover";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CONTACTS_ROUTE } from "../../utils/routes";
import { Helmet } from "react-helmet-async";

const BlogPageNew = ({ pageInfo }) => {
  const {
    metaTitle,
    metaDescription,
    metaUrl,
    hrefDetails,
    text,
    imagesArr,
    author,
    coverDescription,
  } = pageInfo;
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

          <Link
            onClick={scrollToTop}
            to={CONTACTS_ROUTE}
            className="seo__blog-page-link"
          >
            Зв’яжіться з нами і ми підберемо зручний час для консультації
          </Link>
        </div>
        <div className="author-card-wrapper">
          <div className={`author-card ${isDarkTheme ? "" : "light"}`}>
            <img
              src={author.image}
              alt={author.name}
              className="author-card-image"
            />
            <div className="author-card-info">
                <p className="author-card-name">Автор статті: <Link onClick={scrollToTop} to={author.link}  className="author-card-name-link">{author.name}</Link></p>
                <p className="author-card-job">{author.job}</p>
            </div>
          </div>
        </div>
        {
imagesArr &&
        <div className="seo__blog-page-images">
            {
                imagesArr.map((img, idx) => {
                    return (
                        <img key={idx} className="seo__blog-page-image" src={img.src} alt={img.alt} />
                    )
                })
            }
        </div>
        }
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

export default BlogPageNew;
