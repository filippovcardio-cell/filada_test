import smasCover1 from "../../assets/images/popularservices/smas-face1.webp";

// ✅ правильний шлях згідно твого проєкту:
import  SmasLiftingText  from "../popularServicesText/SmasLiftingText";

const smasLiftingJsonLd = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://filada.com.ua/services/smas-lifting/#webpage",
      "url": "https://filada.com.ua/services/smas-lifting/",
      "name": "SMAS-ліфтинг обличчя в Україні — хірургічна підтяжка з тривалим ефектом",
      "description": "SMAS-ліфтинг — хірургічна підтяжка обличчя з роботою на глибинних тканинах (SMAS) для природного омолодження та довготривалого результату. Консультація та операція в медичному центрі Filada (Чернігів).",
      "inLanguage": "uk",
      "about": {
        "@id": "https://filada.com.ua/services/smas-lifting/#procedure"
      },
      "breadcrumb": {
        "@id": "https://filada.com.ua/services/smas-lifting/#breadcrumbs"
      },
      "publisher": {
        "@id": "https://filada.com.ua/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://filada.com.ua/services/smas-lifting/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Головна",
          "item": "https://filada.com.ua/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "SMAS-ліфтинг",
          "item": "https://filada.com.ua/services/smas-lifting/"
        }
      ]
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://filada.com.ua/services/smas-lifting/#procedure",
      "name": "SMAS-ліфтинг",
      "alternateName": [
        "СМАС підтяжка",
        "Фейсліфтинг SMAS",
        "SMAS-підтяжка обличчя"
      ],
      "description": "Хірургічна підтяжка обличчя з фіксацією поверхневої м’язово-апоневротичної системи (SMAS) для відновлення чіткого овалу та природного омолодження.",
      "procedureType": "Surgical",
      "bodyLocation": "Обличчя та шия",
      "howPerformed": "Хірургічне втручання під загальною анестезією або глибокою седацією (за показаннями).",
      "preparation": "Передопераційне обстеження, аналізи крові, ЕКГ, консультація анестезіолога.",
      "followup": "Післяопераційні огляди та спостереження протягом періоду відновлення.",
      "procedureDuration": "PT4H",
      "recoveryTime": "P21D",
      "provider": {
        "@id": "https://filada.com.ua/#organization"
      }
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://filada.com.ua/#organization",
      "name": "Медичний центр Filada",
      "medicalSpecialty": "PlasticSurgery",
      "url": "https://filada.com.ua/",
      "telephone": "+380635030472",
      "email": "filada.clinic@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "вул. Святомиколаївська, 19",
        "addressLocality": "Чернігів",
        "postalCode": "14000",
        "addressCountry": "UA"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61562495653062"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "20:00"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://filada.com.ua/services/smas-lifting/#faq",
      "url": "https://filada.com.ua/services/smas-lifting/",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "В якому віці краще робити SMAS-ліфтинг?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Найчастіше SMAS-ліфтинг розглядають у віці 45–55 років, коли вікові зміни вже помітні, але тканини ще зберігають добру щільність. Остаточне рішення приймається індивідуально після консультації хірурга."
          }
        },
        {
          "@type": "Question",
          "name": "Чи залишаються рубці після операції?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Розрізи розміщуються в малопомітних зонах (по лінії росту волосся та навколо вуха). З часом рубці світлішають і стають менш помітними. Точний вигляд рубців індивідуальний."
          }
        },
        {
          "@type": "Question",
          "name": "Чи можна поєднувати SMAS-ліфтинг з іншими операціями?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Так, за показаннями SMAS-ліфтинг можуть поєднувати з блефаропластикою, корекцією підборіддя або іншими втручаннями. Можливість комбінування визначає хірург після огляду."
          }
        },
        {
          "@type": "Question",
          "name": "Які ризики та ускладнення можливі?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Як і при будь-якому хірургічному втручанні, існують ризики. Найчастіше це тимчасові набряки, синці та зміни чутливості. Рідше можливі ускладнення, тому важливо проходити операцію після повного обстеження та виконувати рекомендації лікаря."
          }
        }
      ]
    }
  ]
}`;

export const popularServicesPagesArr = [
  {
    slug: "smas-lifting",

    title: "SMAS-ліфтинг обличчя",
    h1: "SMAS-ліфтинг обличчя в Україні — хірургічна підтяжка з тривалим ефектом",

    metaTitle: "SMAS ліфтинг та підтяжка обличчя, ціна в Чернігові на фейсліфтінг",
    metaDescription:
      "SMAS-ліфтинг та підтяжка обличчя в Чернігові. Ціна фейсліфтингу в клініці Filada. Довготривалий результат. Телефонуйте або записуйтесь на консультацію.",
    metaUrl: "https://filada.com.ua/services/smas-lifting/",

    jsonLd: smasLiftingJsonLd,

    previewImage: smasCover1,
    imagesArr: [smasCover1],

    text: SmasLiftingText,
  },
];



