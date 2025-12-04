import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearIsFormSended, setIsClose } from "../../redux/ModalSlice/ModalSlice";
import { useTelegramMessage } from "../../utils/request";
import CloseIcon from "./CloseIcon/CloseIcon";
import "./ModalForm.css";
import InputMask from "react-input-mask";
import resImg from '../../assets/icons/response-icon.png'

const ModalForm = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const isActive = useSelector((state) => state.modal.isActive);
  const response = useSelector((state) => state.modal.isFormSended);
  const [isResponseActive, setIsResponseActive] = useState(false);
  let timeoutId;
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [PhoneError, setPhoneError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { sendTelegramMessage } = useTelegramMessage();

  useEffect(() => {
    setIsResponseActive(response);

    if (isResponseActive) {
      timeoutId = setTimeout(() => {
        dispatch(setIsClose());
        dispatch(setClearIsFormSended());
      }, 10000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [response, isResponseActive, dispatch]);

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
      return;
    }

    if (!nameErrorFlag && !phoneErrorFlag) {
      const message = `\u{1f3e5}Заявка з сайту\u{1f3e5}\nІм'я: ${userName}\nНомер телефону: ${userPhone}\n`;

      await sendTelegramMessage({ userName,
        userPhone, message});

      setUserName("");
      setUserPhone("");
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
    <div
    onClick={handleModalClose}
      className={`modal__form ${isActive ? "active" : ""}`}
    >
      <div onClick={handlePropagation} className={`modal__form-wrapper ${isDarkTheme ? "" : "light"}`}>
        <div onClick={handleModalClose} className="close__icon-modal">
          <CloseIcon isDarkTheme={isDarkTheme}/>
        </div>
        <div className={`modal__form-body ${isResponseActive ? "hidden" : ""}`}>
          <h2 className="modal__form-body-title mont-r">Заявка на консультацію</h2>
          <p className="modal__form-body-description mont-r">Зателефонуємо вам протягом <span className={`brand-span ${isDarkTheme ? "" : "light"}`}>15 хвилин!</span></p>
          <form onSubmit={handleSubmit} className="modal__form-form">
          <input
                placeholder="Ім’я"
                value={userName}
                onChange={handleNameChange}
                className={`modal__form-input ${
                  nameError ? "error" : ""
                } mont-m`}
                type="text"
              />
          <InputMask
                mask="+380 (99) 999-99-99"
                value={userPhone}
                onChange={handlePhoneNumberChange}
                placeholder="Номер телефону"
                onFocus={(e) => e.target.setSelectionRange(6, 6)}
                onBlur={(e) => {
                  if (e.target.value === "+380 ()") {
                    setUserPhone("");
                  }
                }}
                className={`modal__form-input ${
                  PhoneError ? "error" : ""
                } text-base-r`}
                type="phone"
              />
               <button
              onClick={handleSubmit}
              className={`modal__form-button ${isDarkTheme ? "" : "light"} mont-m`}
              type="submit"
            >
              Передзвоніть мені
            </button>
          </form>
        </div>
        <div className={`response-body ${isResponseActive ? "visible" : ""}`}>
          <img src={resImg} alt="іконка галочки" className="response-image" />
          <h2 className="response-title mont-r">Заявка успішно відправлена</h2>
          <p className="response-description mont-r">Дякуємо за довіру! Ми зв’яжемось з Вами найближчим часом.</p>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
