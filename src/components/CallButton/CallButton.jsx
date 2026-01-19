import "./CallButton.css";
import phoneIcon from "../../assets/icons/phone-icon.png";
import phoneIconLight from "../../assets/icons/phone-icon-light.png";
import { useDispatch, useSelector } from "react-redux";
import { setBurgerIsClose } from "../../redux/BurgerSlice/BurgerSlice";
import {
  setClearIsFormSended,
  setIsActive,
} from "../../redux/ModalSlice/ModalSlice";

const CallButton = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    // ✅ GA4 — стабільне відстеження кліку по телефону
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "click_tel",
      phone_number: "380635030472",
      page_path: window.location.pathname,
    });

    dispatch(setIsActive());
    dispatch(setBurgerIsClose());
    dispatch(setClearIsFormSended());
  };

  return (
    <div
      onClick={handleModalOpen}
      className={`btn-call ${isDarkTheme ? "" : "light"}`}
    >
      <div className="btn-call__ico">
        <img
          src={isDarkTheme ? phoneIcon : phoneIconLight}
          alt="іконка виклику"
          className="fas fa-phone-alt"
        />
      </div>
    </div>
  );
};

export default CallButton;
