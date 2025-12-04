import './CoverLogo.css'
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

const CoverLogo = () => {
  const { pathname } = useLocation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const LogoDescriptionTag = pathname === "/" ? 'h1' : 'h3';

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls, pathname]);

  return (
    <motion.div key={pathname} ref={ref} variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    initial="hidden"
    animate={mainControls}
    transition={{ duration: 1.3, delay: 0.2 }} className="cover__logo">
      <h2 className='cover__logo-title felix-r'>FILADA</h2>
      <LogoDescriptionTag className='cover__logo-description felix-r'>МЕДИЧНИЙ ЦЕНТР Filada</LogoDescriptionTag>
    </motion.div>
  )
}

export default CoverLogo