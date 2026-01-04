import { useSelector } from "react-redux";
import "./AddressLink.css";

const AddressLink = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const addressText = "м. Чернігів, вул. Святомиколаївська, 19";
  const googleMapsUrl =
    "https://www.google.com/maps/place/%D0%9C%D0%B5%D0%B4%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D1%86%D0%B5%D0%BD%D1%82%D1%80+%C2%AB%D0%A4%D1%96%D0%BB%D0%B0%D0%B4%D0%B0%C2%BB/@51.4900164,31.3013436,17z/data=!3m1!4b1!4m6!3m5!1s0x46d5492fe0c4212f:0x835a19a342e61be!8m2!3d51.4900131!4d31.3039185!16s%2Fg%2F11w91zpjw5";

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`footer__address ${isDarkTheme ? "" : "light"} mont-r`}
      aria-label="Медичний центр Філада на Google Maps"
    >
      {addressText}
    </a>
  );
};

export default AddressLink;

