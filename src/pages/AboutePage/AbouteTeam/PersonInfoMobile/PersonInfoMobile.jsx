import { useEffect } from 'react';
import { useRef } from 'react';
import './PersonInfoMobile.css'
import PersonInfoMobileTriangle from './PersonInfoMobileTriangle/PersonInfoMobileTriangle';

const PersonInfoMobile = ({name, jobTitle, description, src, onClick, isOpen, scrollId}) => {
  const itemRef = useRef(null);


  return (
    <div onClick={onClick}  className='person__info-mobile'>
        <div id={scrollId} className="person__info-mobile-main">
          <img src={src} alt={`фото співробітника клініки Filada ${name}`} className="person__info-mobile-main-image" />
          <h3 className="person__info-mobile-main-name mont-m">{name}</h3>
          <p className={`person__info-mobile-main-job mont-r`}>{jobTitle}</p>
          <div className="person__info-mobile-main-more">
            <p className="more-mobile">Детальніше</p>
            <div className={`person__info-mobile-main-more-triangle ${isOpen ? "open" : ""}`}>
            <PersonInfoMobileTriangle />
            </div>
          </div>
        </div>
        <div ref={itemRef} className="person__info-mobile-collapse">
          {description}
        </div>
    </div>
  )
}

export default PersonInfoMobile