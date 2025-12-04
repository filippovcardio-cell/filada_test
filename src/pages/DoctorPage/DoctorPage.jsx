import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setClearIsFormSended,
  setIsClose,
  setSelectedDoctor,
} from "../../redux/ModalSlice/ModalSlice";
import { useTelegramMessage } from "../../utils/request";
import './DoctorPage.css'
import Cover from '../../components/Cover/Cover';
import { InputMask } from "@react-input/mask";

const DoctorPage = ({doctor}) => {

  const { title, name, jobTitle, description, src, isReverce } = doctor
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { sendTelegramMessage } = useTelegramMessage();
  const selectedDoctor = name
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
      const message = `\u{1F3D8}Заявка з сайту\u{1F3D8}\nІм'я: ${userName}\nНомер телефону: ${userPhone}\nОбраний лікар: ${
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
    <div className='doctor__page'>
      <Cover coverDescription={null} />
      <div className="person__info-pc-title-wrapper">
      <h1 className={`person__info-pc-title ${isDarkTheme ? "" : "light"} arial-r`}>{title}</h1>
      </div>
          <div style={{flexDirection: isReverce ? "row-reverse" : "row"}} className='person__info-pc'>
        <div className="person__info-pc-texts">
            <h3 className={`person__info-pc-name ${isDarkTheme ? "" : "light"} mont-m`}>{name}</h3>
            <h3 className="person__info-pc-job">{jobTitle}</h3>
            <h3 className="person__info-pc-description mont-r">{description}</h3>
        </div>
        <img src={src} alt={`фото співробітника клініки Філада, ${name}`} className="person__info-pc-image" />
    </div>
    <div className='person__info-mobile'>
        <div className="person__info-mobile-main">
          <img src={src} alt={`фото співробітника клініки Filada ${name}`} className="person__info-mobile-main-image" />
          <h3 className="person__info-mobile-main-name mont-m">{name}</h3>
          <p className={`person__info-mobile-main-job mont-r`}>{jobTitle}</p>
        </div>
        <div className="person__info-mobile-collapse">
          {description}
        </div>
    </div>
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
    </div>
  )
}

export default DoctorPage