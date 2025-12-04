import { useSelector } from 'react-redux';
import './PersonInfoPc.css'

const PersonInfoPc = ({name, jobTitle, description, src, isReverce, scrollId}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <div id={scrollId} style={{flexDirection: isReverce ? "row-reverse" : "row"}} className='person__info-pc'>
        <div className="person__info-pc-texts">
            <h3 className={`person__info-pc-name ${isDarkTheme ? "" : "light"} mont-m`}>{name}</h3>
            <h3 className="person__info-pc-job">{jobTitle}</h3>
            <h3 className="person__info-pc-description mont-r">{description}</h3>
        </div>
        <img src={src} alt={`фото співробітника клініки Філада, ${name}`} className="person__info-pc-image" />
    </div>
  )
}

export default PersonInfoPc