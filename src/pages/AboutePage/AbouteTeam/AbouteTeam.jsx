import "./AbouteTeam.css";
import { teamArr } from "../../../utils/teamArr";
import PersonInfoPc from "./PersonInfoPc/PersonInfoPc";
import { useSelector } from "react-redux";
import PersonInfoMobile from "./PersonInfoMobile/PersonInfoMobile";
import { useState } from "react";


const AbouteTeam = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const isMobile = window.innerWidth <= 1199;
  const [openId, setId] = useState(null);

  return (
    <section className={`aboute__team ${isDarkTheme ? "" : "light"}`}>
      <div
        className={`aboute__team-title arial-r ${isDarkTheme ? "" : "light"}`}
      >
        НАША КОМАНДА
      </div>
      <div className="aboute__team-wrapper">
        {teamArr.map((person, idx) => {
          return isMobile ? (
            <PersonInfoMobile
              onClick={() => (idx === openId ? setId(null) : setId(idx))}
              isOpen={idx === openId}
              key={idx}
              scrollId={person.scrollId}
              name={person.name}
              jobTitle={person.jobTitle}
              src={person.src}
              description={person.description}
            />
          ) : (
            <PersonInfoPc
            key={idx}
            scrollId={person.scrollId}
              name={person.name}
              jobTitle={person.jobTitle}
              src={person.src}
              description={person.description}
              isReverce={person.isReverce}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AbouteTeam;
