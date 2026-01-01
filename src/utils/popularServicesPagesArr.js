import smasFace1 from "../assets/images/popularservices/smas-face1.webp";
import smasFace2 from "../assets/images/popularservices/smas-face2.webp";
import smasFace3 from "../assets/images/popularservices/smas-face3.webp";

// тексти (JSX)
import SmasLiftingText from "./popularServicesText/SmasLiftingText";

export const popularServicesPagesArr = [
  {
    slug: "smas-lifting",
    // URL сторінки: /services/smas-lifting
    metaTitle: "SMAS-ліфтинг у Чернігові | Filada",
    metaDescription:
      "SMAS-ліфтинг (фейсліфтинг) у медичному центрі Filada: консультація, показання, етапи, реабілітація. Запис: 063-503-04-72",
    metaUrl: "https://filada.com.ua/services/smas-lifting/",
    coverDescription: "SMAS-ліфтинг",
    pageTitle: "SMAS-ліфтинг у Чернігові",

    // можна JSX або масив рядків — твій PopularServicePage підтримує обидва варіанти
    text: <SmasLiftingText />,

    photos: [smasFace1, smasFace2, smasFace3],

    doctorName: "Лікар-пластичний хірург Олександр Косенко",
    doctorPath: "/doctors/oleksandr-kosenko",

    faq: [
      {
        question: "Чи залишаються рубці після операції?",
        answer:
          "Розрізи розміщуються в малопомітних зонах. З часом рубці стають тонкими та практично непомітними.",
      },
      {
        question: "Чи можна поєднувати SMAS-ліфтинг з іншими операціями?",
        answer:
          "Так, часто його комбінують з блефаропластикою, ліпосакцією підборіддя або ліпофілінгом.",
      },
      {
        question: "Коли видно остаточний результат?",
        answer:
          "Перші зміни помітні через 3–4 тижні, фінальний результат — через 3–6 місяців.",
      },
    ],

    interlinks: [
      { title: "Пластична хірургія", to: "/plastic-surgery/" },
      { title: "Контакти", to: "/contacts/" },
      { title: "Блог", to: "/blog/" },
    ],

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "SMAS-ліфтинг у Чернігові",
      url: "https://filada.com.ua/services/smas-lifting/",
      description:
        "SMAS-ліфтинг у медичному центрі Filada: показання, етапи, реабілітація, запис на консультацію.",
      inLanguage: "uk-UA",
      isPartOf: {
        "@type": "WebSite",
        name: "Медичний центр Філада",
        url: "https://filada.com.ua",
      },
    },
  },
];
