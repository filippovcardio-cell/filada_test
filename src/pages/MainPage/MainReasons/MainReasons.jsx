import './MainReasons.css'
import React from "react";
import Reason from './Reason/Reason';
import { reasonsArr } from '../../../utils/reasonsArr';
import { useSelector } from 'react-redux';
import reasonImage from '../../../assets/images/reason-main-image.webp'

const MainReasons = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  return (
    <section className={`reasons__section ${isDarkTheme ? "" : "light"}`}>
      <h2 className={`reasons__title arial-r ${isDarkTheme ? "" : "light"}`}>6 причин обрати Filada</h2>
      <div className="reasons__section-wrapper">
        <div className="reasons">
          {reasonsArr.map((reason, idx) => {
            return (
              <Reason
                key={idx}
                reasonTitle={reason.title}
                reasonDescription={reason.description}
                reasonNumber={reason.number}
              />
            );
          })}
        </div>
        <img
          src={reasonImage}
          alt="на картинці зображений процес нашої роботи"
          className="reasons__image"
        />
      </div>
    </section>
  );
};

export default MainReasons;
