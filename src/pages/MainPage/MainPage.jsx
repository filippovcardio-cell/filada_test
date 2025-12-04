import Cover from "../../components/Cover/Cover";
import { welcomeArr } from "../../utils/welcomeArr";
import MainAbout from "./MainAbout/MainAbout";
import MainFAQ from "./MainFAQ/MainFAQ";
import MainReasons from "./MainReasons/MainReasons";
import MainServices from "./MainServices/MainServices";
import MainWelcome from "./MainWelcome/MainWelcome";
import "./MainPage.css";
import { Helmet } from "react-helmet-async";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Filada: медичний центр Чернігів</title>
        <meta
          name="description"
          content="Приватна клініка в Чернігові ᐉ Filada ⭐ Сучасне обладнання ✔️ Кращі лікарі ✔️ Професійний підхід ✔️ Комфорт та якість обслуговування ✔️тел.063-503-04-72"
        />
        <meta property="og:url" content="https://filada.com.ua/" />
        <link rel="canonical" href="https://filada.com.ua/" />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
      <div className="main__page">
        <Cover coverDescription={"Тут краса зустрічається зі здоров’ям"} />
        <MainAbout />
        <MainServices />
        <MainWelcome welcomeArr={welcomeArr} />
        <MainReasons />
        <MainFAQ />
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

export default MainPage;
