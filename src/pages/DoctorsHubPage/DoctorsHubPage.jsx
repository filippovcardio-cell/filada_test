import { Link } from "react-router-dom";
import Cover from "../../components/Cover/Cover";
import "./DoctorsHubPage.css";

const DoctorsHubPage = ({ doctorsArr }) => {

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="doctors__page">
      <Cover coverDescription={"Лікарі медичного центру Filada"} />
      <div className="doctors__hub">
        {doctorsArr.map((doctor, idx) => {
          return (
            <Link onClick={handleScrollToTop} to={doctor.path} key={idx} className="doctor__card">
                <img
                  src={doctor.src}
                  alt={doctor.name}
                  className="doctor__photo"
                />
              <div className="doctor__card-text-wrapper">
                <h3 className="doctor__card-name mont-r">{doctor.name}</h3>
                <p className="doctor__card-text mont-r">{doctor.jobTitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorsHubPage;
