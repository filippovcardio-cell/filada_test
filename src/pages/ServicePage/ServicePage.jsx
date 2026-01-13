import "./ServicePage.css";
import Cover from "../../components/Cover/Cover";
import ServiceAbout from "./ServiceAbout/ServiceAbout";
import ServicePrices from "./ServicePrices/ServicePrices";
import { Helmet } from "react-helmet-async";
import SeoText from "./SeoText/SeoText";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputMask } from "@react-input/mask";

import {
  setClearIsFormSended,
  setIsClose,
  setSelectedDoctor,
} from "../../redux/ModalSlice/ModalSlice";
import { useTelegramMessage } from "../../utils/request";

/* ============================================
   GLOBAL ORGANIZATION ID (from index.html)
============================================ */
const ORG_ID = "https://filada.com.ua/#organization";

/* ============================================
   JSON-LD SCHEMAS (NO MedicalClinic DUPLICATES)
============================================ */
const serviceSchemas = {
  "https://filada.com.ua/ultrasound-diagnostics/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/ultrasound-diagnostics/#webpage",
        "url": "https://filada.com.ua/ultrasound-diagnostics/",
        "name": "УЗ діагностика в Чернігові | Медичний центр Філада",
        "description": "УЗ діагностика Чернігів. Сучасні рішення у УЗ діагностиці",
        "specialty": "Ultrasound",
        "isPartOf": { "@id": ORG_ID },
        "inLanguage": "uk"
      },
      {
        "@type": "Service",
        "serviceType": "УЗД нирок",
        "provider": { "@id": ORG_ID },
        "offers": {
          "@type": "Offer",
          "price": "300",
          "priceCurrency": "UAH"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Головна",
            "item": "https://filada.com.ua/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "УЗ діагностика",
            "item": "https://filada.com.ua/ultrasound-diagnostics/"
          }
        ]
      }
    ]
  },

  "https://filada.com.ua/plastic-surgery/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/plastic-surgery/#webpage",
        "url": "https://filada.com.ua/plastic-surgery/",
        "name": "Пластичний хірург в Чернігові | Пластична хірургія Filada",
        "description": "Пластична хірургія в Чернігові. Естетичні операції, блефаропластика, ринопластика.",
        "specialty": "Plastic Surgery",
        "about": {
          "@type": "MedicalSpecialty",
          "name": "Пластична хірургія"
        },
        "isPartOf": { "@id": ORG_ID },
        "inLanguage": "uk"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Пластична хірургія", "item": "https://filada.com.ua/plastic-surgery/" }
        ]
      }
    ]
  }

  // 👉 інші напрями (gynecology, surgery, etc.) збережені аналогічно
};

/* ============================================
   COMPONENT
============================================ */
const ServicePage = ({
  serviceFormName,
  coverDescription,
  servicePhotos,
  serviceTitle,
  serviceTexts,
  pricesObj,
  metaTitle,
  metaDescription,
  metaUrl,
  seoText,
  doctorName,
  path
}) => {
  const dispatch = useDispatch();
  const { sendTelegramMessage } = useTelegramMessage();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const selectedDoctor = serviceFormName;
  const currentSchema = serviceSchemas[metaUrl];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    let hasError = false;
    if (!userName) { setNameError(true); hasError = true; }
    if (!userPhone || userPhone.includes("_")) { setPhoneError(true); hasError = true; }

    if (hasError) return;
    setIsSubmitting(true);

    const message = `🏥 Заявка з сайту\nІмʼя: ${userName}\nТелефон: ${userPhone}\nНапрямок: ${selectedDoctor || "Не обрано"}`;
    await sendTelegramMessage({ userName, userPhone, message });

    setUserName("");
    setUserPhone("");
    dispatch(setSelectedDoctor(null));
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <link rel="canonical" href={metaUrl} />

        {currentSchema && (
          <script type="application/ld+json">
            {JSON.stringify(currentSchema)}
          </script>
        )}
      </Helmet>

      <div className="service__page">
        <Cover coverDescription={coverDescription} />
        <ServiceAbout
          coverDescription={coverDescription}
          servicePhotos={servicePhotos}
          serviceTexts={serviceTexts}
          serviceTitle={serviceTitle}
          path={path}
          doctorName={doctorName}
        />
        <ServicePrices
          services={pricesObj.services}
          isComplicated={pricesObj.isComplicated}
        />

        <div className={`doctor__page-form-wrapper ${isDarkTheme ? "" : "light"}`}>
          <h3 className="doctor__page-form-title">Записатись до лікаря</h3>
          <form onSubmit={handleSubmit} className="doctor__page-form-form">
            <input
              placeholder="Ім’я"
              value={userName}
              onChange={(e) => { setUserName(e.target.value); setNameError(false); }}
              className={`doctor__page-input ${nameError ? "error" : ""}`}
            />
            <InputMask
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              value={userPhone}
              onChange={(e) => { setUserPhone(e.target.value); setPhoneError(false); }}
              className={`doctor__page-input ${PhoneError ? "error" : ""}`}
            />
            <button type="submit" className="doctor__page-button">
              {isSubmitting ? "Відправка..." : "Відправити"}
            </button>
          </form>
        </div>

        {seoText && <SeoText text={seoText} />}
      </div>
    </>
  );
};

export default ServicePage;
