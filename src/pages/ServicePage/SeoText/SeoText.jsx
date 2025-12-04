import React, { useEffect, useState } from "react";
import './SeoText.css'
import { useLocation } from "react-router-dom";


const SeoText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation(); 
  const toggleText = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]); 

  return (
    <div className="seo-text">
      <div className={`seo-text__content ${isExpanded ? "expanded" : ""}`}>
        {text}
      </div>
      {!isExpanded && (
        <button onClick={toggleText} className="seo-text__button">
  Читати повністю <span className="down-arrow">&#x2193;</span>
        </button>
      )}
    </div>
  );
};

export default SeoText;
