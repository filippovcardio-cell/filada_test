import "./ServicePage.css";
import Cover from "../../components/Cover/Cover";
import ServiceAbout from "./ServiceAbout/ServiceAbout";
import ServicePrices from "./ServicePrices/ServicePrices";
import { Helmet } from "react-helmet-async";
import SeoText from "./SeoText/SeoText";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputMask } from "@react-input/mask";

import {
  setClearIsFormSended,
  setIsClose,
  setSelectedDoctor,
} from "../../redux/ModalSlice/ModalSlice";
import { useTelegramMessage } from "../../utils/request";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { sendTelegramMessage } = useTelegramMessage();
  const selectedDoctor = serviceFormName
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const handleNameChange = (e) => {
    setUserName(e.target.value);
    setNameError(false);
  };

  const handlePhoneNumberChange = (e) => {
    setUserPhone(e.target.value);
    setPhoneError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    let nameErrorFlag = false;
    let phoneErrorFlag = false;

    if (userName.length < 1) {
      setNameError(true);
      nameErrorFlag = true;
    } else {
      setNameError(false);
    }

    if (userPhone && !userPhone.includes("_")) {
      setPhoneError(false);
    } else {
      setPhoneError(true);
      phoneErrorFlag = true;
    }

    if (nameErrorFlag || phoneErrorFlag) {
      setIsSubmitting(false);
      return;
    }

    if (!nameErrorFlag && !phoneErrorFlag) {
      const message = `\u{1F3D8}Заявка з сайту\u{1F3D8}\nІм'я: ${userName}\nНомер телефону: ${userPhone}\nОбраний напрямок: ${
        selectedDoctor ? selectedDoctor : "Не обрано"
      }`;
      await sendTelegramMessage({ userName, userPhone, message });

      setUserName("");
      setUserPhone("");
      dispatch(setSelectedDoctor(null));
      setIsSubmitting(false);
    }
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  const handleModalClose = () => {
    dispatch(setIsClose());
    dispatch(setClearIsFormSended());
  };
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <link rel="canonical" href={metaUrl} />
        <script>{`
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
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
        />
        <ServicePrices
          services={pricesObj.services}
          isComplicated={pricesObj.isComplicated}
        />
            <div className={`doctor__page-form-wrapper ${isDarkTheme ? "" : "light"}`}>
      <h3 className={`doctor__page-form-title ${isDarkTheme ? "" : "light"} mont-m`}>Записатись до лікаря</h3>
      <p className={`doctor__page-form-text ${isDarkTheme ? "" : "light"} mont-r-21`}>Заповніть форму і ми зв’яжемось з Вами найближчим часом</p>
    <form onSubmit={handleSubmit} className="doctor__page-form-form">
            <input
              placeholder="Ім’я"
              value={userName}
              onChange={handleNameChange}
              className={`doctor__page-input ${isDarkTheme ? "" : "light"} ${nameError ? "error" : ""} mont-r-21`}
              type="text"
            />
            <InputMask
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              showMask={true}
              onFocus={(e) => {
                if (e.target.value.length < 5) {
                  e.target.value = "+38 (___) ___-__-__";
                } else if (e.target.value.length > 5) {
                  return;
                }
              }}
              onBlur={(e) => {
                if (e.target.value === "+38 (___) ___-__-__") {
                  setUserPhone("");
                }
              }}
              value={userPhone}
              onChange={handlePhoneNumberChange}
              placeholder="Номер телефону"
              className={`doctor__page-input ${isDarkTheme ? "" : "light"} ${
                PhoneError ? "error" : ""
              } mont-r-21`}
              type="phone"
            />
            <button
              onClick={handleSubmit}
              className={`doctor__page-button ${isDarkTheme ? "" : "light"} mont-r`}
              type="submit"
            >
              {isSubmitting ? "Відправка..." : "Відправити"}
            </button>
          </form>
          </div>
        {seoText && <SeoText text={seoText} />}
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

export default ServicePage;
