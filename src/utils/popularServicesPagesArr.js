import smasFace1 from "../assets/images/popularservices/smas-face1.webp";
import smasFace2 from "../assets/images/popularservices/smas-face2.webp";
import smasFace3 from "../assets/images/popularservices/smas-face3.webp";

import labioplastika1 from "../assets/images/popularservices/labioplastika-1.webp";
import labioplastika2 from "../assets/images/popularservices/labioplastika-2.webp";
import labioplastika3 from "../assets/images/popularservices/labioplastika-3.webp";

import abdominoplastyka1 from "../assets/images/popularservices/abdominoplastyka-1.webp";
import abdominoplastyka2 from "../assets/images/popularservices/abdominoplastyka-2.webp";
import abdominoplastyka3 from "../assets/images/popularservices/abdominoplastyka-3.webp";

// тексти (JSX)
import SmasLiftingText from "./popularServicesText/SmasLiftingText";
import LabioplastikaText from "./popularServicesText/LabioplastikaText";
import AbdominoplastykaText from "./popularServicesText/AbdominoplastykaText";

export const popularServicesPagesArr = [
  {
    slug: "smas-lifting",
    metaTitle: "SMAS-ліфтинг у Чернігові | Filada",
    metaDescription:
      "SMAS-ліфтинг (фейсліфтинг) у медичному центрі Filada: консультація, показання, етапи, реабілітація. Запис: 063-503-04-72",
    metaUrl: "https://filada.com.ua/services/smas-lifting/",
    coverDescription: "SMAS-ліфтинг",
    pageTitle: "SMAS-ліфтинг у Чернігові",

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

    // ✅ SMAS лишаємо зі своєю мікророзміткою (як було раніше)
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

  {
    slug: "labioplastika",
    metaTitle: "Лабіопластика у Чернігові | Filada",
    metaDescription:
      "Лабіопластика у медичному центрі Filada: показання, перебіг операції, відновлення та запис на консультацію.",
    metaUrl: "https://filada.com.ua/services/labioplastika/",
    coverDescription: "Лабіопластика",
    pageTitle: "Лабіопластика у Чернігові",

    text: <LabioplastikaText />,
    photos: [labioplastika1, labioplastika2, labioplastika3],

    doctorName: "Лікар-гінеколог Василь Цикал",
    doctorPath: "/doctors/vasyl-tsikal",

    faq: [
      {
        question: "Чи болісна операція лабіопластики?",
        answer:
          "Лабіопластика проводиться під анестезією, тому під час операції болю немає. У перші дні можливий помірний дискомфорт, який добре контролюється знеболювальними препаратами.",
      },
      {
        question: "Скільки триває відновлення після лабіопластики?",
        answer:
          "Початкове відновлення триває 7–10 днів, повне загоєння тканин — близько 6–8 тижнів. Точні терміни залежать від індивідуальних особливостей організму.",
      },
      {
        question: "Чи впливає лабіопластика на чутливість?",
        answer:
          "При правильному виконанні операції чутливість не знижується. У більшості випадків після загоєння зникає дискомфорт і покращується якість інтимного життя.",
      },
    ],

    // ✅ ЛАБІОПЛАСТИКА: повний @graph з правильним URL /services/labioplastika/
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["MedicalClinic", "LocalBusiness"],
          "@id": "https://filada.com.ua/#clinic",
          name: "Медичний Центр Філада",
          legalName: "Медичний Центр Філада",
          identifier: [
            {
              "@type": "PropertyValue",
              propertyID: "ЄДРПОУ",
              value: "45646287",
            },
            {
              "@type": "PropertyValue",
              propertyID: "Ліцензія МОЗ України",
              value: "Наказ МОЗ від 29.08.2024 № 1508",
            },
          ],
          url: "https://filada.com.ua/",
          logo: {
            "@type": "ImageObject",
            url: "https://filada.com.ua/static/media/logo.b0f53fe4f4365fc498a9.png",
          },
          image: "https://filada.com.ua/static/media/logo.b0f53fe4f4365fc498a9.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "вул. Святомиколаївська, 19",
            addressLocality: "Чернігів",
            addressRegion: "Чернігівська область",
            addressCountry: "UA",
          },
          telephone: "+380635030472",
          email: "filada.clinic@gmail.com",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          areaServed: [
            { "@type": "AdministrativeArea", name: "Чернігів" },
            { "@type": "AdministrativeArea", name: "Чернігівська область" },
          ],
          sameAs: [
            "https://www.facebook.com/filada.cernigiv/",
            "https://www.instagram.com/filada_clinic/",
          ],
          knowsLanguage: "uk",
          inLanguage: "uk",
          currenciesAccepted: "UAH",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            reviewCount: "21",
          },
        },
        {
          "@type": ["Service", "MedicalProcedure"],
          "@id": "https://filada.com.ua/services/labioplastika/#service",
          name: "Лабіопластика",
          alternateName: "Пластика статевих губ",
          description:
            "Лабіопластика — це операція зі зміни форми або розміру статевих губ.",
          serviceType: "Гінекологія",
          url: "https://filada.com.ua/services/labioplastika/",
          provider: {
            "@id": "https://filada.com.ua/#clinic",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Чернігів",
          },
          availableLanguage: "uk",
          inLanguage: "uk",
          offers: {
            "@type": "Offer",
            price: "15000",
            priceCurrency: "UAH",
            priceSpecification: {
              "@type": "PriceSpecification",
              minPrice: "15000",
              priceCurrency: "UAH",
              priceType: "https://schema.org/ListPrice",
            },
            availability: "https://schema.org/InStock",
            seller: {
              "@id": "https://filada.com.ua/#clinic",
            },
            areaServed: {
              "@type": "AdministrativeArea",
              name: "Чернігів",
            },
          },
        },
        {
          "@type": "WebPage",
          "@id": "https://filada.com.ua/services/labioplastika/#webpage",
          url: "https://filada.com.ua/services/labioplastika/",
          name: "Лабіопластика у Чернігові — Медичний центр Філада",
          about: {
            "@id": "https://filada.com.ua/services/labioplastika/#service",
          },
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: "https://filada.com.ua/static/media/logo.b0f53fe4f4365fc498a9.png",
          },
          inLanguage: "uk",
          isPartOf: {
            "@type": "WebSite",
            name: "Медичний Центр Філада",
            url: "https://filada.com.ua/",
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Головна",
              item: "https://filada.com.ua/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Лабіопластика",
              item: "https://filada.com.ua/services/labioplastika/",
            },
          ],
        },
      ],
    },
  },

  {
    slug: "abdominoplastyka",
    metaTitle:
      "Абдомінопластика, пластика та підтяжка живота, ціна I Filada Чернігів",
    metaDescription:
      "Абдомінопластика Чернігів ✦ Пластика живота після пологів та схуднення. Повна та мініабдомінопластика від провідних хірургів. Реальні фото, ціна, запис на консультацію.",
    metaUrl: "https://filada.com.ua/services/abdominoplastyka/",
    coverDescription: "Абдомінопластика",
    pageTitle: "Абдомінопластика у Чернігові",

    text: <AbdominoplastykaText />,
    photos: [abdominoplastyka1, abdominoplastyka2, abdominoplastyka3],

    doctorName: "Лікар-пластичний хірург Олександр Косенко",
    doctorPath: "/doctors/oleksandr-kosenko",

    faq: [
      {
        question: "Чи залишиться шрам після операції?",
        answer:
          "Так, абдомінопластика передбачає розрізи. Однак хірург робить горизонтальний розріз дуже низько, в зоні бікіні. З часом косметичний шов світлішає, стає тонкою смужкою і легко ховається під білизною. При схильності до келоїдів лікар може призначити спеціальні пластирі або ін'єкції для покращення вигляду рубця.",
      },
      {
        question: "Чи можна вагітніти після абдомінопластики?",
        answer:
          "Фізично операція на живіт не впливає на репродуктивну функцію та можливість виносити дитину. Але лікарі рекомендують робити операцію тоді, коли ви більше не плануєте дітей. Нова вагітність знову розтягне апоневроз та шкіру, і результат (плоский живіт) буде втрачено. Може знадобитися повторна корекція.",
      },
      {
        question: "Чи допомагає операція прибрати розтяжки?",
        answer:
          "Так, видалення розтяжок є однією з переваг операції. Але видаляються лише ті стрії, які знаходяться на ділянці шкіри, що висікається (зазвичай від пупка до лобка). Розтяжки, розташовані вище пупка, залишаються, але опускаються нижче і стають менш помітними завдяки натягу шкіри.",
      },
    ],

    interlinks: [
      { title: "Пластична хірургія", to: "/plastic-surgery/" },
      { title: "Контакти", to: "/contacts/" },
      { title: "Блог", to: "/blog/" },
    ],

    // ✅ АБДОМІНОПЛАСТИКА: твій @graph, але з URL /services/abdominoplastyka
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalClinic",
          "@id": "https://filada.com.ua/#clinic",
          name: "Filada",
          url: "https://filada.com.ua",
          email: "filada.clinic@gmail.com",
          telephone: "+380635030472",
          medicalSpecialty: "PlasticSurgery",
          image: "https://filada.com.ua/logo.png",
          address: {
            "@type": "PostalAddress",
            streetAddress: "вул. Святомиколаївська, 19",
            addressLocality: "Чернігів",
            addressCountry: "UA",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Послуги пластичної хірургії",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "MedicalProcedure",
                  name: "Абдомінопластика",
                  description:
                    "Хірургічна корекція живота, видалення надлишків шкіри та ушивання діастазу.",
                  url: "https://filada.com.ua/services/abdominoplastyka",
                },
              },
            ],
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Чи залишиться шрам після операції?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Так, абдомінопластика передбачає розрізи. Однак хірург робить горизонтальний розріз дуже низько, в зоні бікіні. З часом косметичний шов світлішає, стає тонкою смужкою і легко ховається під білизною. При схильності до келоїдів лікар може призначити спеціальні пластирі або ін'єкції для покращення вигляду рубця.",
              },
            },
            {
              "@type": "Question",
              name: "Чи можна вагітніти після абдомінопластики?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Фізично операція на живіт не впливає на репродуктивну функцію та можливість виносити дитину. Але лікарі рекомендують робити операцію тоді, коли ви більше не плануєте дітей. Нова вагітність знову розтягне апоневроз та шкіру, і результат (плоский живіт) буде втрачено. Може знадобитися повторна корекція.",
              },
            },
            {
              "@type": "Question",
              name: "Чи допомагає операція прибрати розтяжки?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Так, видалення розтяжок є однією з переваг операції. Але видаляються лише ті стрії, які знаходяться на ділянці шкіри, що висікається (зазвичай від пупка до лобка). Розтяжки, розташовані вище пупка, залишаються, але опускаються нижче і стають менш помітними завдяки натягу шкіри.",
              },
            },
          ],
        },
      ],
    },
  },
];
