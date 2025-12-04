import { useState } from "react";
import { useSelector } from "react-redux";
import { allServices } from "../../../utils/allServices";
import "./PricesAccordion.css";
import TrianglePrices from "./TrianglePrices/TrianglePrices";
import { Link } from "react-router-dom";

const isMobile = window.innerWidth <= 1199;

const ITEM_HEIGHT = isMobile ? 139 : 80;

function PricesAccordion() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
    setOpenSubCategory(null);
  };

  const toggleSubCategory = (index) => {
    setOpenSubCategory(openSubCategory === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  }

  const getCategoryHeight = (catIndex) => {
    const category = allServices[catIndex];
    if (openCategory === catIndex) {
      if (category.isComplicated) {
        const subCategoryCount = category.subcategorys.length;
        const openSubCat =
          openSubCategory !== null && openSubCategory < subCategoryCount
            ? openSubCategory
            : null;
        const openSubCatServicesCount =
          openSubCat !== null
            ? category.subcategorys[openSubCat].services.length
            : 0;
        return ITEM_HEIGHT * (subCategoryCount + openSubCatServicesCount);
      } else {
        return ITEM_HEIGHT * category.subcategorys[0].services.length;
      }
    }
    return 0;
  };

  const getSubCategoryHeight = (subCatIndex) => {
    if (openSubCategory === subCatIndex) {
      return (
        ITEM_HEIGHT *
        allServices[openCategory].subcategorys[subCatIndex].services.length
      );
    }
    return 0;
  };

  return (
    <div className={`filada-category`}>
      {allServices.map((category, catIndex) => (
        <div
          key={catIndex}
          className={`category ${isDarkTheme ? "" : "light"}`}
          onClick={() => toggleCategory(catIndex)}
        >
          <h2
            className={`category-title arial-r ${isDarkTheme ? "" : "light"}`}
          >
            {category.categoryTitle}
            <span
              className={`tirangle__prices-category ${
                openCategory === catIndex
                  ? "tirangle__prices-category--open"
                  : ""
              }`}
            >
              <TrianglePrices
                width={12}
                height={12}
                path={"M6 12L0 0H12L6 12Z"}
              />
            </span>
          </h2>
          <div
            className={`subcategories ${
              category.isComplicated ? "" : "nocomplicated"
            }`}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: `${getCategoryHeight(catIndex)}px`,
              transition: "max-height 0.4s ease-out",
            }}
          >
            {category.isComplicated
              ? category.subcategorys.map((subCategory, subCatIndex) => (
                  <div key={subCatIndex} className="subcategory">
                    <div
                      className={`subcategory-title ${
                        isDarkTheme ? "" : "light"
                      }`}
                      onClick={() => toggleSubCategory(subCatIndex)}
                    >
                      {subCategory.subcategoryTile}
                      <span
                        className={`tirangle__prices-subcategory ${
                          openSubCategory === subCatIndex
                            ? "tirangle__prices-subcategory--open"
                            : ""
                        }`}
                      >
                        <TrianglePrices
                          width={10}
                          height={10}
                          path={"M5 10L0 0H10L5 10Z"}
                        />
                      </span>
                    </div>
                    <div
                      className="services"
                      style={{
                        maxHeight: `${getSubCategoryHeight(subCatIndex)}px`,
                        transition: "max-height 0.4s ease-out",
                      }}
                    >
                      {subCategory.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className={`accordion-service-body ${
                            isDarkTheme ? "" : "light"
                          }`}
                        >
                          {service.link ? (
                            <Link
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
                            {`${service.price ? "Вартість: " : ""}`}{" "}
                            {service.price}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : category.subcategorys[0].services.map(
                  (service, serviceIndex) => (
                    <div
                      key={serviceIndex}
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
                  )
                )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricesAccordion;
