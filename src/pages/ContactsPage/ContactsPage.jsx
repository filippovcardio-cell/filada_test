import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import Cover from "../../components/Cover/Cover";
import "./ContactsPage.css";

const ContactsPage = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <>
      <Helmet>
        <title>Контакти приватної клініки Filada в Чернігові</title>
        <meta
          name="description"
          content="Актуальні контакти клініки Filada: адреса, телефон, мапа проїзду, години роботи. Зв’яжіться з нами для запису на прийом."
        />
        <meta property="og:url" content="https://filada.com.ua/contacts/" />
        <link rel="canonical" href="https://filada.com.ua/contacts/" />
        <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Медичний центр Filada",
  "description": "Сучасний медичний центр у Чернігові. Консультації, хірургія, косметологія.",
  "image": "https://filada.com.ua/logo192.png",
  "url": "https://filada.com.ua/contacts/",
  "telephone": "+380635030472",
  "email": "filada.clinic@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "вул. Святомиколаївська, 19",
    "addressLocality": "Чернігів",
    "postalCode": "14000",
    "addressCountry": "UA"
  },
  "openingHours": "Mo-Su 08:00-20:00"
}
`}</script>

<script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');     
      `}</script>
      </Helmet>
      <div className="contacts__page">
        <Cover coverDescription={"Контакти"} />
        <div className="contacts__wrapper">
          <div className={`contacts__adress ${isDarkTheme ? "" : "light"}`}>
            <p className={`adress ${isDarkTheme ? "" : "light"} mont-m`}>
              м. Чернігів
            </p>
            <p className={`adress ${isDarkTheme ? "" : "light"} mont-m`}>
              вул. Святомиколаївська, 19
            </p>
          </div>
          <div className={`contacts__connect ${isDarkTheme ? "" : "light"}`}>
            <a
              className={`contact__tel ${isDarkTheme ? "" : "light"} mont-m`}
              href="tel:+38(063)503-04-72"
            >
              +38(063)503-04-72
            </a>
            <a
              className={`mail ${isDarkTheme ? "" : "light"} mont-m`}
              href="mailto:filada.clinic@gmail.com"
            >
              filada.clinic@gmail.com
            </a>
          </div>
          <div className={`contacts__time ${isDarkTheme ? "" : "light"}`}>
            <p className={`time ${isDarkTheme ? "" : "light"} mont-m`}>
              8:00 - 20:00
            </p>
            <p className={`days ${isDarkTheme ? "" : "light"} mont-m`}>
              Без вихідних
            </p>
          </div>
        </div>
        <section className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9937.058092520356!2d31.3039185!3d51.4900131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5492fe0c4212f%3A0x835a19a342e61be!2sMedychnyy%20Tsentr%20Filada!5e0!3m2!1sru!2sua!4v1726743869362!5m2!1sru!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="карта як нас знайти"
          ></iframe>
        </section>
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

export default ContactsPage;
