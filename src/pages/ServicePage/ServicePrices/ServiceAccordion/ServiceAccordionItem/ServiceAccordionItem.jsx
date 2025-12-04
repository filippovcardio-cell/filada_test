import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import TrianglePrices from "../../../../PricesPage/PricesAccordion/TrianglePrices/TrianglePrices";
import { Link } from "react-router-dom";

function ServiceAccordionItem({
  subCategory,
  subCategoryServices,
  onClick,
  isOpen,
}) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const itemRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      const height = itemRef.current.scrollHeight;
      itemRef.current.style.height = `${height}px`;
    } else {
      itemRef.current.style.height = "0px";
    }
  }, [isOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <li className="accordion-service-item">
      <button
        onClick={onClick}
        className={`accordion-service-header ${
          isDarkTheme ? "" : "light"
        } mont-r`}
      >
        {subCategory}
        <span
          className={`tirangle__prices-subcategory ${
            isOpen ? "tirangle__prices-subcategory--open" : ""
          }`}
        >
          <TrianglePrices width={10} height={10} path={"M5 10L0 0H10L5 10Z"} />
        </span>
      </button>
      <div className="accordion-service-collapse" ref={itemRef}>
        {subCategoryServices.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`accordion-service-body ${isDarkTheme ? "" : "light"}`}
            >
              {item.link ? (
                <Link
                  onClick={scrollToTop}
                  to={item.link}
                  className={`accordion-service-body-service-link ${
                    isDarkTheme ? "" : "light"
                  }`}
                >
                  {item.title}
                </Link>
              ) : (
                <p className="accordion-service-body-service">
                  {item.title}
                </p>
              )}
              <p className="accordion-service-body-price">
                {`${item.price ? "Вартість: " : ""}`} {item.price}
              </p>
            </div>
          );
        })}
      </div>
    </li>
  );
}

export default ServiceAccordionItem;
