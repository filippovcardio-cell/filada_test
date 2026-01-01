import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import { servicePageArr } from "./utils/servisePageArr";
import ServicePage from "./pages/ServicePage/ServicePage";
import {
  ABOUTE_ROUTE,
  ALL_SERVICES_ROUTE,
  BLOG_ROUTE,
  CONTACTS_ROUTE,
  PRICES_ROUTE,
} from "./utils/routes";
import AboutePage from "./pages/AboutePage/AboutePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme, setLightTheme } from "./redux/ToggleThemeSlice/ToggleThemeSlice";
import PricesPage from "./pages/PricesPage/PricesPage";
import { HelmetProvider } from "react-helmet-async";
import AllServicesPage from "./pages/AllServicesPage/AllServicesPage";
import { BeforeAfterPagesArr } from "./utils/BeforeAfterPagesArr";
import BeforeAfterPage from "./pages/BeforeAfterPage/BeforeAfterPage";
import { seoPagesArr } from "./utils/seoPagesArr";
import SeoBlogPage from "./pages/SeoBlogPage/SeoBlogPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { teamArr } from "./utils/teamArr";
import DoctorPage from "./pages/DoctorPage/DoctorPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import { allBlogPagesArr } from "./utils/blog/allBlogPagesArr";
import { blogArr } from "./utils/blog/blog";
import BlogPageNew from "./pages/BlogPageNew/BlogPageNew";
import DoctorsHubPage from "./pages/DoctorsHubPage/DoctorsHubPage";
import PopularServicesHubPage from "./pages/PopularServicesHubPage/PopularServicesHubPage";
import PopularServicePage from "./pages/PopularServicePage/PopularServicePage";

setTimeout(() => {
  let nodeArr = document.querySelectorAll(".bingc-phone-button");

  if (nodeArr.length === 1) {
    return;
  } else if (nodeArr.length >= 2) {
    nodeArr.forEach((e, idx) => {
      if (idx !== 0) {
        e.style.setProperty("display", "none", "important");
      }
    });
  }
}, 2000);

function App() {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      if (e.matches) {
        dispatch(setDarkTheme());
      } else {
        dispatch(setLightTheme());
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [dispatch]);

  return (
    <HelmetProvider>
      <div className={`App ${isDarkTheme ? "" : "light"}`}>
        <Router>
          <Routes>
            <Route path="/" element={<AppRouter />}>
              <Route index element={<MainPage />} />
              <Route path={ABOUTE_ROUTE} element={<AboutePage />} />
              <Route path={CONTACTS_ROUTE} element={<ContactsPage />} />
              <Route path={PRICES_ROUTE} element={<PricesPage serviceArr={servicePageArr} />} />
              <Route path={ALL_SERVICES_ROUTE} element={<AllServicesPage />} />

              <Route path={BLOG_ROUTE} element={<BlogPage blogArr={allBlogPagesArr} />} />
              <Route path={"/doctors/"} element={<DoctorsHubPage doctorsArr={teamArr} />} />

              <Route path="/popular-services" element={<PopularServicesHubPage />} />
              <Route path="/services/:slug" element={<PopularServicePage />} />

              {servicePageArr.map((page, idx) => {
                return (
                  <Route
                    key={idx}
                    path={page.path}
                    element={
                      <ServicePage
                        coverDescription={page.coverDescription}
                        servicePhotos={page.aboutePhotos}
                        serviceTexts={page.abouteTexts}
                        serviceTitle={page.abouteTitle}
                        pricesObj={page.pricesObj}
                        metaTitle={page.metaTitle}
                        metaDescription={page.metaDescription}
                        metaUrl={page.metaUrl}
                        seoText={page.seoText}
                        path={page.doctorPath}
                        doctorName={page.doctorName}
                        serviceFormName={page.serviceFormName}
                      />
                    }
                  />
                );
              })}

              {BeforeAfterPagesArr.map((page, idx) => {
                return (
                  <Route
                    key={idx}
                    path={page.path}
                    element={
                      <BeforeAfterPage
                        coverDescription={page.coverDescription}
                        beforeAfterPhotosArr={page.beforeAfterPhotosArr}
                        metaTitle={page.metaTitle}
                        metaDescription={page.metaDescription}
                        metaUrl={page.metaUrl}
                        beforeAfterTexts={page.beforeAfterTexts}
                      />
                    }
                  />
                );
              })}

              {seoPagesArr.map((page, idx) => {
                return (
                  <Route
                    key={idx}
                    path={page.path}
                    element={
                      <SeoBlogPage
                        coverDescription={page.coverDescription}
                        metaTitle={page.metaTitle}
                        hrefDetails={page.hrefDetails}
                        hrefBeforeAfter={page.hrefBeforeAfter}
                        metaDescription={page.metaDescription}
                        metaUrl={page.metaUrl}
                        text={page.text}
                      />
                    }
                  />
                );
              })}

              {teamArr.map((page, idx) => {
                return (
                  <Route key={idx} path={page.path} element={<DoctorPage doctor={page} />} />
                );
              })}

              {blogArr.map((page, idx) => {
                return (
                  <Route
                    key={idx}
                    path={`/blog${page.path}`}
                    element={<BlogPageNew pageInfo={page} doctor={page} />}
                  />
                );
              })}

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;


