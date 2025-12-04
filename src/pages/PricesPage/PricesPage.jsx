import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover/Cover";
import PricesAccordion from "./PricesAccordion/PricesAccordion";
import "./PricesPage.css";
import { useSelector } from "react-redux";

const PricesPage = ({ serviceArr }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
      <Helmet>
        <title>Прайс на послуги клініки Filada в Чернігові</title>
        <meta
          name="description"
          content="Перегляньте актуальні ціни на послуги медичного центру Filada: консультації, аналізи, обстеження, процедури. Прозоре ціноутворення ✔️тел.063-503-04-72"
        />
        <meta property="og:url" content="https://filada.com.ua/prices/" />
        <link rel="canonical" href="https://filada.com.ua/prices/" />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
      <div className="prices__page">
        <Cover coverDescription={"Ціни"} />
        <h1 className={`prices__page-title ${isDarkTheme ? "" : "light"} arial-r`}>Прайс-лист медичних послуг Filada</h1>
        <PricesAccordion serviceArr={serviceArr} />
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

export default PricesPage;
