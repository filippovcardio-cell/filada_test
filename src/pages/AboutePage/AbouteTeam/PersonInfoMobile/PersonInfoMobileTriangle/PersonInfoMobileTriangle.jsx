import { useSelector } from "react-redux";

const PersonInfoMobileTriangle = () => {
    const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="5"
      viewBox="0 0 5 5"
      fill="none"
    >
      <path d="M2.5 5L0 0H5L2.5 5Z" fill={`${isDarkTheme? "white" : "black"}`} />
    </svg>
  );
};

export default PersonInfoMobileTriangle;
