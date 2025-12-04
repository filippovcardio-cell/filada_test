import { Link } from 'react-router-dom'
import './MainAbout.css'
import { ABOUTE_ROUTE } from '../../../utils/routes'
import { useSelector } from 'react-redux'
import img from '../../../assets/images/outdoorPhoto.webp'

const MainAbout = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  return (
    <section className='main__about'>
        <div className="main__about-wrapper">
            <img src={img} alt="" className="main__about-image" />
            <div className="main__about-texts">
                <h3 className={`main__about-title arial-r ${isDarkTheme ? "" : "light"}`}>Про нашу клініку</h3>
                <p className="main__about-description">
                Медичний центр ФІЛАДА – це колектив однодумців, професіоналів своєї справи, стратегія яких направлена на те, щоб використовуючи новітні технології та сучасні методи лікування, дарувати людям красу, здоров*я, можливість повноцінно відчувати радість життя.
                </p>
                <p className="main__about-description">
                На пацієнтів медичного центру чекають сучасне обладнання, досвідчені руки лікарів та медичних сестер, уважне ставлення кожного співробітника та індивідуальний підхід при вирішенні будь яких задач.
                </p>
                <Link onClick={handleScrollToTop} to={ABOUTE_ROUTE} className="main__about-llink">
                <div className="main__about-more mont-m">
                Детальніше про клініку
                </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default MainAbout