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

const ORG_ID = "https://filada.com.ua/#organization";

// 🔹 Всі JSON-LD схеми для сервіс-сторінок, ключ — metaUrl
const serviceSchemas = {
  "https://filada.com.ua/ultrasound-diagnostics/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/ultrasound-diagnostics/#webpage",
        "url": "https://filada.com.ua/ultrasound-diagnostics/",
        "name": "УЗ діагностика в Чернігові | Медичний центр Філада",
        "description": "УЗ діагностика Чернігів. Сучасні рішення у УЗ діагностиці",
        "specialty": "Ultrasound",
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "Service",
        "serviceType": "УЗД нирок",
        "provider": { "@id": ORG_ID },
        "offers": { "@type": "Offer", "price": "300", "priceCurrency": "UAH" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "УЗ діагностика", "item": "https://filada.com.ua/ultrasound-diagnostics/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/plastic-surgery/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/plastic-surgery/#webpage",
        "url": "https://filada.com.ua/plastic-surgery/",
        "name": "Пластичний хірург в Чернігові | Пластична хірургія Filada",
        "description": "Пластична хірургія в Чернігові. Естетичні операції, блефаропластика, ринопластика. Досвідчені хірурги",
        "specialty": "Plastic Surgery",
        "about": { "@type": "MedicalSpecialty", "name": "Пластична хірургія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
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
  },

  "https://filada.com.ua/gynecology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/gynecology/#webpage",
        "url": "https://filada.com.ua/gynecology/",
        "name": "Гінеколог в Чернігові | Клініка гінекології Filada",
        "description": "Клініка гінекології в Чернігові. Діагностика та лікування жіночих захворювань. Досвідчені лікарі-гінекологи",
        "specialty": "Gynecology",
        "about": { "@type": "MedicalSpecialty", "name": "Гінекологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Гінекологія", "item": "https://filada.com.ua/gynecology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/endocrinology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "url": "https://filada.com.ua/endocrinology/",
        "name": "Ендокринолог в Чернігові | Клініка ендокринології Filada",
        "specialty": "Endocrinology",
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "Service",
        "serviceType": "Консультація ендокринолога",
        "provider": { "@id": ORG_ID },
        "offers": { "@type": "Offer", "price": "700", "priceCurrency": "UAH" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Ендокринологія", "item": "https://filada.com.ua/endocrinology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/dietetics-nutrition/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/dietetics-nutrition/#webpage",
        "url": "https://filada.com.ua/dietetics-nutrition/",
        "name": "Дієтолог/нутріціолог в Чернігові | Filada",
        "description": "Дієтолог чи нутріціолог у Filada допоможе скласти план харчування, скинути вагу, скоригувати метаболізм. Здоровий підхід у Чернігові",
        "specialty": "Dietetics",
        "about": { "@type": "MedicalSpecialty", "name": "Дієтологія та нутриціологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "Physician",
        "@id": "https://filada.com.ua/doctors/tytorenko-valentyna",
        "name": "Валентина Титоренко",
        "jobTitle": "Лікар-дієтолог, нутриціолог",
        "medicalSpecialty": ["Endocrinology", "Dietetics", "Nutrition"],
        "worksFor": { "@id": ORG_ID },
        "url": "https://filada.com.ua/doctors/tytorenko-valentyna"
      },
      {
        "@type": "MedicalTherapy",
        "@id": "https://filada.com.ua/dietetics-nutrition/#therapy-metabolic",
        "name": "Лікування метаболічних порушень",
        "description": "Робота з пацієнтами з інсулінорезистентністю та метаболічним синдромом, профілактика ожиріння",
        "relevantSpecialty": "Dietetics"
      },
      {
        "@type": "Service",
        "@id": "https://filada.com.ua/dietetics-nutrition/#service-consultation",
        "serviceType": "Консультація дієтолога (нутриціолога)",
        "description": "Первинна консультація дієтолога з розробкою індивідуального плану харчування",
        "provider": { "@id": ORG_ID },
        "areaServed": { "@type": "City", "name": "Чернігів" },
        "offers": {
          "@type": "Offer",
          "price": "700",
          "priceCurrency": "UAH",
          "availability": "https://schema.org/InStock",
          "url": "https://filada.com.ua/dietetics-nutrition/"
        }
      },
      {
        "@type": "Service",
        "@id": "https://filada.com.ua/dietetics-nutrition/#service-repeat",
        "serviceType": "Повторна консультація дієтолога",
        "description": "Повторний прийом дієтолога/нутриціолога протягом 1 місяця",
        "provider": { "@id": ORG_ID },
        "areaServed": { "@type": "City", "name": "Чернігів" },
        "offers": {
          "@type": "Offer",
          "price": "500",
          "priceCurrency": "UAH",
          "availability": "https://schema.org/InStock",
          "url": "https://filada.com.ua/dietetics-nutrition/"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Дієтологія/Нутріціологія", "item": "https://filada.com.ua/dietetics-nutrition/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/cosmetology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "url": "https://filada.com.ua/cosmetology/",
        "name": "Косметолог в Чернігові | Клініка косметології Filada",
        "specialty": "Cosmetology",
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "Service",
        "serviceType": "Консультація косметолога",
        "provider": { "@id": ORG_ID },
        "offers": { "@type": "Offer", "price": "700", "priceCurrency": "UAH" }
      },
      {
        "@type": "Service",
        "serviceType": "Ботулінотерапія одна зона",
        "provider": { "@id": ORG_ID },
        "offers": { "@type": "Offer", "price": "2000", "priceCurrency": "UAH" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Косметологія", "item": "https://filada.com.ua/cosmetology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/neurology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/neurology/#webpage",
        "url": "https://filada.com.ua/neurology/",
        "name": "Невролог в Чернігові | Клініка неврології Filada",
        "description": "Клініка неврології в Чернігові. Лікування захворювань нервової системи, головного болю, мігреней. Професійна допомога",
        "specialty": "Neurology",
        "about": { "@type": "MedicalSpecialty", "name": "Неврологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Неврологія", "item": "https://filada.com.ua/neurology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/dermatology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/dermatology/#webpage",
        "url": "https://filada.com.ua/dermatology/",
        "name": "Дерматолог в Чернігові | Приватна клініка дерматології Filada",
        "description": "Клініка дерматології в Чернігові. Лікування захворювань шкіри, акне, дерматитів. Сучасні методи діагностики",
        "specialty": "Dermatology",
        "about": { "@type": "MedicalSpecialty", "name": "Дерматологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Дерматологія", "item": "https://filada.com.ua/dermatology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/vascular-surgery/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/vascular-surgery/#webpage",
        "url": "https://filada.com.ua/vascular-surgery/",
        "name": "Судинний хірург в Чернігові | Filada",
        "description": "Судинна хірургія в Чернігові. Лікування варикозу, тромбозу, судинних захворювань. Досвідчені судинні хірурги",
        "specialty": "Vascular Surgery",
        "about": { "@type": "MedicalSpecialty", "name": "Судинна хірургія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Судинна хірургія", "item": "https://filada.com.ua/vascular-surgery/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/orthopedics-traumatology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/orthopedics-traumatology/#webpage",
        "url": "https://filada.com.ua/orthopedics-traumatology/",
        "name": "Ортопед-травматолог в Чернігові | Клініка ортопедії і травматології Filada",
        "description": "Клініка ортопедії та травматології в Чернігові. Лікування травм, захворювань суглобів та опорно-рухового апарату",
        "specialty": "Orthopedic Surgery",
        "about": { "@type": "MedicalSpecialty", "name": "Ортопедія та травматологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Ортопедія та травматологія", "item": "https://filada.com.ua/orthopedics-traumatology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/otolaryngology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/otolaryngology/#webpage",
        "url": "https://filada.com.ua/otolaryngology/",
        "name": "ЛОР лікар в Чернігові | ЛОР клініка Filada",
        "description": "ЛОР клініка в Чернігові. Лікування захворювань вуха, горла, носа. Професійна отоларингологічна допомога",
        "specialty": "Otolaryngology",
        "about": { "@type": "MedicalSpecialty", "name": "Отоларингологія (ЛОР)" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "ЛОР", "item": "https://filada.com.ua/otolaryngology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/proctology/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/proctology/#webpage",
        "url": "https://filada.com.ua/proctology/",
        "name": "Проктолог в Чернігові | Проктологічна клініка Filada",
        "description": "Проктологічна клініка в Чернігові. Лікування геморою, тріщин, захворювань прямої кишки. Делікатний підхід",
        "specialty": "Proctology",
        "about": { "@type": "MedicalSpecialty", "name": "Проктологія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Проктологія", "item": "https://filada.com.ua/proctology/" }
        ]
      }
    ]
  },

  "https://filada.com.ua/surgery/": {
    "@context": "https://schema.org",
    "@graph": [
      { "@id": ORG_ID },
      {
        "@type": "MedicalWebPage",
        "@id": "https://filada.com.ua/surgery/#webpage",
        "url": "https://filada.com.ua/surgery/",
        "name": "Хірург в Чернігові | Послуги хірурга Filada",
        "description": "Хірургічні послуги в Чернігові. Досвідчені хірурги, сучасне обладнання. Планові та термінові операції",
        "specialty": "Surgery",
        "about": { "@type": "MedicalSpecialty", "name": "Хірургія" },
        "inLanguage": "uk",
        "isPartOf": { "@id": ORG_ID }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Головна", "item": "https://filada.com.ua/" },
          { "@type": "ListItem", "position": 2, "name": "Послуги", "item": "https://filada.com.ua/all-services/" },
          { "@type": "ListItem", "position": 3, "name": "Хірургія", "item": "https://filada.com.ua/surgery/" }
        ]
      }
    ]
  }
};

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
  path,
  secondDoctorName,
  secondPath,
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

    const message = `🏘️Заявка з сайту🏘️\nІм'я: ${userName}\nНомер телефону: ${userPhone}\nОбраний напрямок: ${
      selectedDoctor || "Не обрано"
    }`;

    try {
      /* ================================
         ✅ GA4 + Google Ads conversion
      ================================ */
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "appointment_submit",
        form_type: "service_page",
        doctor_name: selectedDoctor || serviceTitle || coverDescription || "",
        page_path: window.location.pathname,
      });
      await sendTelegramMessage({ userName, userPhone, message });
      setUserName("");
      setUserPhone("");
      dispatch(setSelectedDoctor(null));
      setIsSubmitting(false);
    } catch (err) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <link rel="canonical" href={metaUrl} />
        {currentSchema && (
          <script type="application/ld+json">{JSON.stringify(currentSchema)}</script>
        )}
        <script>{`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXTCPNZW');
        `}</script>
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
          secondDoctorName={secondDoctorName}
          secondPath={secondPath}
        />
        <ServicePrices
          services={pricesObj.services}
          isComplicated={pricesObj.isComplicated}
        />

        <div className={`doctor__page-form-wrapper ${isDarkTheme ? "" : "light"}`}>
          <h3 className={`doctor__page-form-title ${isDarkTheme ? "" : "light"} mont-m`}>
            Записатись до лікаря
          </h3>
          <p className={`doctor__page-form-text ${isDarkTheme ? "" : "light"} mont-r-21`}>
            Заповніть форму і ми зв’яжемось з Вами найближчим часом
          </p>
          <form onSubmit={handleSubmit} className="doctor__page-form-form">
            <input
              placeholder="Ім’я"
              value={userName}
              onChange={(e)=>{setUserName(e.target.value); setNameError(false);}}
              className={`doctor__page-input ${isDarkTheme ? "" : "light"} ${nameError ? "error" : ""} mont-r-21`}
            />
            <InputMask
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              value={userPhone}
              onChange={(e)=>{setUserPhone(e.target.value); setPhoneError(false);}}
              className={`doctor__page-input ${isDarkTheme ? "" : "light"} ${PhoneError ? "error" : ""} mont-r-21`}
            />
            <button className={`doctor__page-button ${isDarkTheme ? "" : "light"} mont-r`} type="submit">
              {isSubmitting ? "Відправка..." : "Відправити"}
            </button>
          </form>
        </div>

        {seoText && <SeoText text={seoText} />}
      </div>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PXTCPNZW"
          height="0"
          width="0"
          style={{display:"none",visibility:"hidden"}}
        />
      </noscript>
    </>
  );
};

export default ServicePage;

