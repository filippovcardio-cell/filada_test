import smasFace1 from "../assets/images/popularservices/smas-face1.webp";
import smasFace2 from "../assets/images/popularservices/smas-face2.webp";
import smasFace3 from "../assets/images/popularservices/smas-face3.webp";

import { SmasLiftingText } from "./popularServicesText/SmasLiftingText";

export const popularServicesPagesArr = [
  {
    slug: "smas-lifting",

    // фактичний URL сторінки (під ваш роут /services/:slug/)
    path: "/services/smas-lifting/",

    metaTitle: "SMAS ліфтинг та підтяжка обличчя, ціна в Чернігові на фейсліфтінг",
    metaDescription:
      "SMAS-ліфтинг та підтяжка обличчя в Чернігові. Ціна фейсліфтингу в клініці Filada. Довготривалий результат. Телефонуйте або записуйтесь на консультацію.",
    metaUrl: "https://filada.com.ua/services/smas-lifting/",

    coverDescription: "SMAS ліфтинг",
    pageTitle: "SMAS ліфтинг",

    doctorName: "Пластичний хірург Олександр Косенко",
    doctorPath: "/doctors/",
    serviceFormName: "SMAS ліфтинг",

    photos: [smasFace1, smasFace2, smasFace3],

    // ✅ SEO-текст тепер JSX з окремого файла
    text: SmasLiftingText,

    faq: [
      {
        question: "Що таке SMAS-ліфтинг?",
        answer:
          "SMAS-ліфтинг — це хірургічна підтяжка обличчя з роботою на рівні поверхневої м’язово-апоневротичної системи (SMAS), що дає більш стабільний та тривалий ефект.",
      },
      {
        question: "Кому підходить SMAS-ліфтинг?",
        answer:
          "Найчастіше — пацієнтам із вираженим птозом тканин (провисанням) та змінами овалу обличчя, коли ін’єкційні або апаратні методики вже не дають бажаного результату.",
      },
      {
        question: "Скільки тримається ефект?",
        answer:
          "У середньому ефект SMAS-ліфтингу зберігається багато років, але залежить від індивідуальних особливостей, віку, способу життя та догляду.",
      },
    ],

    jsonLd: {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: "SMAS ліфтинг",
      description: "SMAS ліфтинг - хірургічна підтяжка обличчя з тривалим ефектом.",
      url: "https://filada.com.ua/services/smas-lifting/",
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Що таке SMAS-ліфтинг?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "SMAS-ліфтинг — це хірургічна підтяжка обличчя з роботою на рівні SMAS-шару для більш тривалого ефекту.",
            },
          },
          {
            "@type": "Question",
            name: "Кому підходить SMAS-ліфтинг?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Підходить пацієнтам із віковими змінами та провисанням тканин, коли косметологічні методи вже неефективні.",
            },
          },
        ],
      },
    },

    interlinks: [
      { title: "Пластична хірургія", to: "/plastic-surgery/" },
      { title: "Ціни", to: "/prices/" },
      { title: "Контакти", to: "/contacts/" },
      { title: "Всі послуги", to: "/all-services/" },
    ],
  },
];







