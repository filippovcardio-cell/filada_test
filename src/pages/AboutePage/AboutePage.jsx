
import Cover from "../../components/Cover/Cover";
import "./AboutePage.css";
import AbouteValues from "./AbouteValues/AbouteValues";
import { Helmet } from "react-helmet-async";

const AboutePage = () => {

  return (
    <>
      <Helmet>
        <title>Про МЦ Filada | Лікарі клініки в Чернігові</title>
        <meta
          name="description"
          content="Дізнайтеся більше про команду клініки Filada: профіль лікарів, досвід, кваліфікації. Знайомтесь з нашими фахівцями."
        />
        <meta property="og:url" content="https://filada.com.ua/aboute_us" />
        <link rel="canonical" href="https://filada.com.ua/aboute_us/" />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
      <div className="aboute__page">
        <Cover coverDescription={"Тут краса зустрічається зі здоров’ям"} />
        <AbouteValues />
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

export default AboutePage;