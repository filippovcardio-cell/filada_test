import React from "react";
import { useSelector } from "react-redux";

const TrianglePrices = ({width, height, path }) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width} height={height} viewBox={`0 0 ${height} ${height}`}
      fill="none"
    >
     <path d={path}
        fill={`${isDarkTheme ? "white" : "black"}`}
      />
    </svg>
  );
};

export default TrianglePrices;