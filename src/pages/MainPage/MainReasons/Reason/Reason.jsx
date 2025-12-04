import { useSelector } from 'react-redux';
import './Reason.css'

const Reason = ({reasonTitle, reasonDescription, reasonNumber}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    return (
      <div className="reason__benefite">
      <div className={`reason__benefite-number mont-m`}>{reasonNumber}</div>
      <div className="creason_benefite-texts">
      <div className="reason__benefite-header">
      <div className={`reason__benefite-number-mobile mont-m`}>{reasonNumber}</div>
  
          <h2 className={`reason__benefite-title ${isDarkTheme ? "" : "light"} mont-r`}>{reasonTitle}</h2>
      </div>
      <p className={`reason__benefite-description ${isDarkTheme ? "" : "light"} mont-r`}>{reasonDescription}</p>
      </div>
  </div>
    )
  }

export default Reason