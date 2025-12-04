import "./ServiceAccordion.css";
import { useState } from "react";
import ServiceAccordionItem from "./ServiceAccordionItem/ServiceAccordionItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ServiceAccordion = ({ serviceItems, isComplicated, aaa }) => {
  const location = useLocation();
  const [openId, setId] = useState(null);
  useEffect(() => {
    setId(null);
  }, [location.pathname]);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <ul
      className={`accordion__service ${isComplicated ? "" : "notcomplicated"}`}
    >
      {isComplicated
        ? serviceItems.map((item, id) => {
            return (
              <ServiceAccordionItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                isOpen={id === openId}
                subCategory={item.subCategory}
                subCategoryServices={item.subCategoryServices}
                key={id}
                aaa={aaa}
              />
            );
          })
        : serviceItems.map((service, idx) => {
            return (
              <div
                key={idx}
                className={`accordion-service-body ${
                  isDarkTheme ? "" : "light"
                }`}
              >
                {service.link ? (
                  <Link
                    onClick={scrollToTop}
                    to={service.link}
                    className={`accordion-service-body-service-link ${
                      isDarkTheme ? "" : "light"
                    }`}
                  >
                    {service.title}
                  </Link>
                ) : (
                  <p className="accordion-service-body-service">
                    {service.title}
                  </p>
                )}
                <p className="accordion-service-body-price">
                  {`${service.price ? "Вартість: " : ""}`} {service.price}
                </p>
              </div>
            );
          })}
    </ul>
  );
};

export default ServiceAccordion;
