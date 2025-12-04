import React from "react";
import "./ToggleThemeButton.css";

function ToggleThemeButton({ isChecked, onChange }) {
  return (
    <label
      className="theme__button container"
      title={isChecked ? "Activate light mode" : "Activate dark mode"}
      aria-label={isChecked ? "Activate light mode" : "Activate dark mode"}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <div className={`theme__button-wrapper ${isChecked ? "checked" : ""}`}>
        <div className={`theme__button-thumbler ${isChecked ? "checked" : ""}`}></div>
        <div className="theme__icon-wrapper">
        </div>
        <div className="theme__icon-wrapper">
        </div>
      </div>
    </label>
  );
}

export default ToggleThemeButton;
