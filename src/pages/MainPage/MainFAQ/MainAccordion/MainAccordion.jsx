import AccordionItem from "./AccordionItem/AccordionItem";
import "./MainAccordion.css";
import { useState } from "react";

const MainAccordion = ({ faqItems }) => {
  const [openId, setId] = useState(null);

  
  return (
    <ul className="accordion">
      {faqItems.map((item, id) => {
       return <AccordionItem onClick={() => id === openId ? setId(null) : setId(id) } isOpen={id===openId} item={item} key={id} />
      })}
    </ul>
  );
};

export default MainAccordion;
