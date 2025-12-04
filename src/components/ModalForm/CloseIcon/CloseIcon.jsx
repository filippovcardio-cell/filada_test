import React from "react";

const CloseIcon = ({isDarkTheme}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <rect
        x="13.5508"
        y="12.4056"
        width="34"
        height="1.61905"
        rx="0.809524"
        transform="rotate(45 13.5508 12.4056)"
        fill={isDarkTheme ? "white" : "black"}
      />
      <rect
        x="37.5938"
        y="13.552"
        width="34"
        height="1.61905"
        rx="0.809524"
        transform="rotate(135 37.5938 13.552)"
        fill={isDarkTheme ? "white" : "black"}
      />
    </svg>
  );
};

export default CloseIcon;
