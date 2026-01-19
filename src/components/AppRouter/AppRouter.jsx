import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Burger from "../Burger/Burger";
import CallButton from "../CallButton/CallButton";
import CoverLogo from "../CoverLogo/CoverLogo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ModalForm from "../ModalForm/ModalForm";

import "./AppRouter.css";

const AppRouter = () => {

  // ✅ GA4 — універсальне відстеження кліків по телефону
  // Працює для всіх <a href="tel:..."> на сайті
  useEffect(() => {
    const handlePhoneClick = (e) => {
      const link = e.target.closest('a[href^="tel:"]');
      if (!link) return;

      const phone = link
        .getAttribute("href")
        .replace("tel:", "")
        .replace(/[()\s-]/g, "");

      if (window.gtag) {
        window.gtag("event", "click_tel", {
          phone_number: phone,
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", handlePhoneClick);

    return () => {
      document.removeEventListener("click", handlePhoneClick);
    };
  }, []);

  return (
    <div className="global__container">
      <Header />
      <CoverLogo />

      <main className="main">
        <Outlet />
      </main>

      <Footer />
      <Burger />
      <CallButton />
      <ModalForm />
    </div>
  );
};

export default AppRouter;
