import './MainWelcome.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SliderCard from './SliderCard/SliderCard';
import { useSelector } from 'react-redux';

const MainWelcome = ({welcomeArr}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
    const isMobile = window.innerWidth <= 1199;
  return (
    <section className='main__wellcome'>
        <h2 className={`main__wellcome-title arial-r ${isDarkTheme ? "" : "light"}`}>Ласкаво просимо</h2>
        <div className="slider__wrapper">
        <Swiper
          slidesPerView={isMobile ? 1 : 5}
          loop={true}
          navigation={isMobile ? true : true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {welcomeArr.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <SliderCard
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  )
}

export default MainWelcome