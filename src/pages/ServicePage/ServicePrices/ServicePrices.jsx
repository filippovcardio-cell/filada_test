import { useSelector } from 'react-redux';
import ServiceAccordion from './ServiceAccordion/ServiceAccordion';
import './ServicePrices.css'

const ServicePrices = ({isComplicated, services}) => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  return (
    <section className={`service__prices ${isDarkTheme ? "" : "light"}`}>
        <h2 className={`service__prices-title arial-r ${isDarkTheme ? "" : "light"}`}>Послуги та ціни</h2>
        <div className="service__prices-wrapper">
            <ServiceAccordion serviceItems={services} isComplicated={isComplicated}/>
        </div>

    </section>
  )
}

export default ServicePrices