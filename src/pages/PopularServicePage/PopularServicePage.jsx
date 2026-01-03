import React, { useEffect, useMemo, useState } from "react";
import "./PopularServicePage.css";
import Cover from "../../components/Cover/Cover";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { InputMask } from "@react-input/mask";

import { popularServicesPagesArr } from "../../utils/popularServicesPagesArr";
import { useTelegramMessage } from "../../utils/request";
import { setSelectedDoctor } from "../../redux/ModalSlice/ModalSlice";

const PopularServicePage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const { sendTelegramMessage } = useTelegramMessage();

  const pageData = useMemo(() => {
    return popularServicesPagesArr.find((p) => p.slug === slug);
  }, [slug]);

  const selectedDoctor = useMemo(() => {
    if (!pageData) return "";
    return (
      pageData.serviceFormName ||
      pageData.doctorName ||
      pageData.pageTitle ||
      pageData.coverDescription ||
      pageData.metaTitle ||
      ""
    );
  }, [pageData]);

  // ✅ щоб форма/редакс завжди знали обрану послугу/лікаря
  useEffect(() => {
    if (!pageData) return;
    if (!selectedDoctor) return;
    dispatch(setSelectedDoctor(selectedDoctor));
  }, [dispatch, pageData, selectedDoctor]);

  const metaTitle =
    pageData?.metaTitle ||
    pageData?.pageTitle ||
    pageData?.coverDescription ||
    "Послуга | Filada";

  const metaDescription =
    pageData?.metaDescription || "Детальна інформація про послугу Filada.";

  const canonicalUrlRaw =
    pageData?.metaUrl || `https://filada.com.ua/services/${slug}/`;

  const canonicalUrl = canonicalUrlRaw.endsWith("/")
    ? canonicalUrlRaw
    : `${canonicalUrlRaw}/`;

  const coverDescription =
    pageData?.coverDescription || pageData?.pageTitle || "Послуга";

  const titleH1 =
    pageData?.pageTitle || pageData?.serviceTitle || pageData?.coverDescription;

  const photosArr =
    pageData?.photos ||
    pageData?.servicePhotos ||
    pageData?.imagesArr ||
    pageData?.images ||
    [];

  const textCandidate =
    pageData?.text ||
    pageData?.serviceTexts ||
    pageData?.content ||
    pageData?.description ||
    pageData?.seoText ||
    pageData?.textArr ||
    pageData?.blocks ||
    null;

  const isJsxText = textCandidate && React.isValidElement(textCandidate);

  const textParagraphs = useMemo(() => {
    if (!textCandidate) return [];

    if (Array.isArray(textCandidate)) {
      return textCandidate
        .filter(Boolean)
        .map((x) => (typeof x === "string" ? x : x?.text || x?.value || ""))
        .filter(Boolean);
    }

    if (typeof textCandidate === "string") {
      return textCandidate
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean);
    }

    return [];
  }, [textCandidate]);

  const faqArr = Array.isArray(pageData?.faq) ? pageData.faq : [];
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);

  const toggleFaq = (idx) => {
    setOpenFaqIndex((prev) => (prev === idx ? -1 : idx));
  };

  const faqTitle =
    pageData?.faqTitle || `Часті питання про ${coverDescription}`;

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

    const message = `\u{1F3D8}Заявка з сайту\u{1F3D8}\nІм'я: ${userName}\nНомер телефону: ${userPhone}\nОбрана послуга: ${
      selectedDoctor ? selectedDoctor : "Не обрано"
    }`;

    await sendTelegramMessage({ userName, userPhone, message });

    setUserName("");
    setUserPhone("");
    dispatch(setSelectedDoctor(null));
    setIsSubmitting(false);
  };

  if (!pageData) {
    return (
      <div className="popular-service-page">
        <Cover coverDescription="Послуга" />
        <div
          className={`popular-service-page-wrapper ${
            isDarkTheme ? "" : "light"
          }`}
        >
          <h1
            className={`popular-service-page-title ${
              isDarkTheme ? "" : "light"
            } arial-r`}
          >
            Сторінку не знайдено
          </h1>
          <div className="popular-service-page-content">
            <p
              className={`popular-service-page-text ${
                isDarkTheme ? "" : "light"
              } mont-r-21`}
            >
              Послуга не знайдена у масиві popularServicesPagesArr (перевір slug).
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="popular-service-page">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={canonicalUrl} />

        {pageData?.jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(pageData.jsonLd) }}
          />
        )}
      </Helmet>

      <Cover coverDescription={coverDescription} />

      <div className={`popular-service-page-wrapper ${isDarkTheme ? "" : "light"}`}>
        <h1 className={`popular-service-page-title ${isDarkTheme ? "" : "light"} arial-r`}>
          {titleH1}
        </h1>

        {Array.isArray(photosArr) && photosArr.length > 0 && (
          <div className="popular-service-page-photos">
            {photosArr.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={titleH1}
                className="popular-service-page-photo"
                loading="lazy"
              />
            ))}
          </div>
        )}

        <div className="popular-service-page-content">
          {isJsxText ? (
            textCandidate
          ) : textParagraphs.length > 0 ? (
            textParagraphs.map((t, idx) => (
              <p
                key={idx}
                className={`popular-service-page-text ${isDarkTheme ? "" : "light"} mont-r-21`}
              >
                {t}
              </p>
            ))
          ) : (
            <p className={`popular-service-page-text ${isDarkTheme ? "" : "light"} mont-r-21`}>
              Текст для цієї сторінки не знайдено у popularServicesPagesArr (перевір ключі поля).
            </p>
          )}
        </div>

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
              onChange={handleNameChange}
              className={`doctor__page-input ${isDarkTheme ? "" : "light"} ${
                nameError ? "error" : ""
              } mont-r-21`}
              type="text"
            />

            <InputMask
              mask="+38 (___) ___-__-__"
              replacement={{ _: /\d/ }}
              showMask={true}
              onFocus={(e) => {
                if (e.target.value.length < 5) {
                  e.target.value = "+38 (___) ___-__-__";
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
                phoneError ? "error" : ""
              } mont-r-21`}
              type="phone"
            />

            <button
              className={`doctor__page-button ${isDarkTheme ? "" : "light"} mont-r`}
              type="submit"
            >
              {isSubmitting ? "Відправка..." : "Відправити"}
            </button>
          </form>
        </div>

        {faqArr.length > 0 && (
          <div className="popular-service-page-faq">
            <h2 className={`popular-service-page-faq-title ${isDarkTheme ? "" : "light"} mont-m`}>
              {faqTitle}
            </h2>

            <div className="popular-service-page-faq-list">
              {faqArr.map((item, idx) => {
                const isOpen = openFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`popular-service-page-faq-item ${isDarkTheme ? "" : "light"}`}
                  >
                    <button
                      type="button"
                      className={`popular-service-page-faq-question ${
                        isDarkTheme ? "" : "light"
                      }`}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="popular-service-page-faq-icon">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>

                    <div className={`popular-service-page-faq-panel ${isOpen ? "open" : ""}`}>
                      <div className={`popular-service-page-faq-answer ${isDarkTheme ? "" : "light"}`}>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularServicePage;
