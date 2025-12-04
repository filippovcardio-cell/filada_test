import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import plusIcon from '../../../../../assets/icons/plusIconDark.png'

function AccordionItem({ item, onClick, isOpen }) {
  const itemRef = useRef(null);
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  useEffect(() => {
    if (isOpen) {
      const height = itemRef.current.scrollHeight;
      itemRef.current.style.height = `${height}px`;
    } else {
      itemRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <li className={`accordion-item ${isDarkTheme ? "" : "light"}`} onClick={onClick}>
      <h3 className={`accordion-header ${isDarkTheme ? "" : "light"} mont-r`}>{item.title}</h3>
      <div className="accordion-collapse" ref={itemRef}>
        <p className="accordion-body text-base-r">{item.content}</p>
      </div>
      <img
        src={plusIcon}
        alt="зображення плюсика. при натисканні відкриється компонент відповіді"
        className={`plus__icon ${isOpen ? "active" : ""}`}
      />
    </li>
  );
}

export default AccordionItem;
