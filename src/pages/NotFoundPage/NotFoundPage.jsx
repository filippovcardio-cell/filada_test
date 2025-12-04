import './NotFoundPage.css';
import notFoundImage from '../../assets/images/404Image.webp'; 
import notFoundImageMobile from '../../assets/images/404ImageMobile.webp'; 
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const isMobile = window.innerWidth <= 1199;
  const imageSrc = isMobile ? notFoundImageMobile : notFoundImage;
  return (
    <div className='not__found-page'>
        <img src={imageSrc} alt="404 сторінка не знайдена" className="not__found-page-background" />
        <div className="not__found-page-content">
          <h2 className="not__found-page-content-title mont-m">404</h2>
          <p className="not__found-page-content-description mont-r">{"Такої сторінки не існує :("}</p>
          <p className="not__found-page-content-text mont-r">{"Але є багато інших корисних сторінок"}</p>
          <div className="not__found-page-content-links">
            <Link to="/" className="not__found-page-content-link mont-r">Головна</Link>
            <Link to="/all-services/" className="not__found-page-content-link mont-r">Послуги</Link>
            <Link to="/contacts/" className="not__found-page-content-link mont-r">Контакти</Link>
          </div>
        </div>
    </div>
  )
}

export default NotFoundPage