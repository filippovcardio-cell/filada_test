import './Cover.css'
import coverImage from '../../assets/images/CoverHome.webp'
import coverMobile from '../../assets/images/mobile-cover.webp'
import { useLocation } from 'react-router-dom'

const Cover = ({coverDescription}) => {
  const { pathname } = useLocation();

  const isMobile = window.innerWidth <= 1199;
  const LogoDescriptionTag = pathname === "/contacts/" ? 'h1' : 'h2';

  return (
    <div className='cover'>
        <img src={isMobile? coverMobile : coverImage} alt="обкладинка сторінки" className="cover__image" />
        <LogoDescriptionTag className="cover__description mont-r">{coverDescription}</LogoDescriptionTag>
    </div>
  )
}

export default Cover