import { blogBlefaroplastyText } from "./blogBlefaroplastyText";
import oKosenkoAvatar from "../../assets/images/oKosenkoAvatar.png";
import hMekhynAvatar from "../../assets/images/hMekhynAvatar.png";
import { blogSeptoplastyText } from "./blogSeptoplastyText";
import septhoPhoto1 from "../../assets/images/blog/Septho.jpg";
import { blogHowToChoosePlasticSurger } from "./blogHowToChoosePlasticSurger";
import plasticBlogPhoto1 from "../../assets/images/blog/plasticBlogPhoto1.JPG";
import plasticBlogPhoto2 from "../../assets/images/blog/plasticBlogPhoto2.JPG";
import plasticBlogPhoto3 from "../../assets/images/blog/plasticBlogPhoto3.JPG";
import { blogHowToLoseBellyFat } from "./blogHowToLoseBellyFat";
import blogHowToLoseBellyFatPhoto1 from "../../assets/images/blog/blogHowToLoseBellyFatPhoto1.webp";
import blogHowToLoseBellyFatPhoto2 from "../../assets/images/blog/blogHowToLoseBellyFatPhoto2.webp";
import { blogBreastAugmentationTop10QuestionsText } from "./blogBreastAugmentationTop10QuestionsText";
import breastAugmentationPreview1 from "../../assets/images/blog/zbilshennya-grudei-1.webp";
import breastAugmentationPreview2 from "../../assets/images/blog/zbilshennya-grudei-2.webp";
import breastAugmentationPreview3 from "../../assets/images/blog/zbilshennya-grudei-3.webp";
import { blogBreastImplantsChoiceText } from "./blogBreastImplantsChoiceText";
import implantsPhoto1 from "../../assets/images/blog/vybir-grudnih-implantiv-1.webp";
import implantsPhoto2 from "../../assets/images/blog/vybir-grudnih-implantiv-2.webp";
import implantsPhoto3 from "../../assets/images/blog/vybir-grudnih-implantiv-3.webp";

// 🔹 лабіопластика
import { blogLabioplastyText } from "./blogLabioplastyText";
import vTsikalAvatar from "../../assets/images/vTsikalAvatar.png";
import labioPhoto1 from "../../assets/images/blog/Labio1.webp";
import labioPhoto2 from "../../assets/images/blog/Labio2.webp";
import labioPhoto3 from "../../assets/images/blog/Labio3.webp";

// 🔹 фейсліфтинг / SMAS
import { blogReabilitatsiiaPisliaFeisliftynhuText } from "./blogReabilitatsiiaPisliaFeisliftynhuText";
import blogSMASPhoto1 from "../../assets/images/blog/blogSMAS-1.webp";
import blogSMASPhoto2 from "../../assets/images/blog/blogSMAS-2.webp";
import blogSMASPhoto3 from "../../assets/images/blog/blogSMAS-3.webp";

// 🔹 SMAS vs nytky
import { blogSMASvsNytkyText } from "./blogSMASvsNytkyText";
import smasVsNytkyPhoto1 from "../../assets/images/popularservices/smas-face1.webp";
import smasVsNytkyPhoto2 from "../../assets/images/popularservices/smas-face2.webp";
import smasVsNytkyPhoto3 from "../../assets/images/popularservices/smas-face3.webp";

// 🔹 SMAS / revolution
import { blogSmasRevolutionText } from "./blogSmasRevolutionText";
import blogSMASrevolution1 from "../../assets/images/blog/SMAS-lift2.webp";
import blogSMASrevolution2 from "../../assets/images/blog/SMAS-lift1.webp";
import blogSMASrevolution3 from "../../assets/images/blog/SMAS-lift3.webp";

export const blogArr = [
  {
    path: "/plastika-povik-blefaroplastika-koli-potribna-i-yak-prohodit/",
    metaTitle: "Блефаропластика: що це та кому необхідна? | Блог МЦ Filada",
    metaDescription:
      "Дізнайтесь, що таке блефаропластика, кому вона рекомендована та як проходить процедура.",
    metaUrl:
      "https://filada.com.ua/blog/plastika-povik-blefaroplastika-koli-potribna-i-yak-prohodit/",
    coverDescription: "Блефаропластика",
    text: blogBlefaroplastyText,
    imagesArr: null,
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/septoplastika-pokazannya-riziki-ta-period-vidnovlennya/",
    metaTitle: "Що таке септопластика: все про операцію | Блог МЦ Filada",
    metaDescription:
      "Дізнайтесь, що таке септопластика, кому показана операція та як проходить відновлення.",
    metaUrl:
      "https://filada.com.ua/blog/septoplastika-pokazannya-riziki-ta-period-vidnovlennya/",
    coverDescription: "Септопластика",
    text: blogSeptoplastyText,
    imagesArr: [{ src: septhoPhoto1, alt: "Септопластика фото" }],
    author: {
      name: "Ганна Мекшун",
      job: "Лікар-отоларинголог",
      image: hMekhynAvatar,
      link: "/doctors/hanna-mekshyn",
    },
    hrefDetails: "/otolaryngology/",
  },

  {
    path: "/yak-vibrati-plastichnogo-hirurga-kriteriyiv-dlya-prijnyattya-rishennya/",
    metaTitle: "Пластична хірургія: за і проти | Блог МЦ Filada",
    metaDescription:
      "Переваги, ризики та як правильно обрати пластичного хірурга.",
    metaUrl:
      "https://filada.com.ua/blog/yak-vibrati-plastichnogo-hirurga-kriteriyiv-dlya-prijnyattya-rishennya/",
    coverDescription: "Як вибрати пластичного хірурга",
    text: blogHowToChoosePlasticSurger,
    imagesArr: [
      { src: plasticBlogPhoto1, alt: "небезпеки пластичної хірургії" },
      { src: plasticBlogPhoto2, alt: "пластичний хірург" },
      { src: plasticBlogPhoto3, alt: "пластична операція" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/yak-pribrati-zhivit/",
    metaTitle: "Як позбутися живота? | Блог МЦ Filada",
    metaDescription: "Як ефективно прибрати живіт — поради хірурга.",
    metaUrl: "https://filada.com.ua/blog/yak-pribrati-zhivit/",
    coverDescription: "Як позбутися живота",
    text: blogHowToLoseBellyFat,
    imagesArr: [
      { src: blogHowToLoseBellyFatPhoto1, alt: "жир на животі" },
      { src: blogHowToLoseBellyFatPhoto2, alt: "як прибрати живіт" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/zbilshennia-hrudei-top-10-pytan/",
    metaTitle: "10 питань про маммопластику | Блог МЦ Filada",
    metaDescription: "Відповіді на популярні питання про збільшення грудей.",
    metaUrl: "https://filada.com.ua/blog/zbilshennia-hrudei-top-10-pytan/",
    coverDescription: "10 питань про маммопластику",
    text: blogBreastAugmentationTop10QuestionsText,
    imagesArr: [
      { src: breastAugmentationPreview1, alt: "Збільшення грудей" },
      { src: breastAugmentationPreview2, alt: "Маммопластика" },
      { src: breastAugmentationPreview3, alt: "Імпланти" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/vybir-grudnih-implantiv-krugli-vs-anatomichni/",
    metaTitle: "Вибір грудних імплантів | Блог МЦ Filada",
    metaDescription: "Круглі чи анатомічні імпланти — що краще?",
    metaUrl:
      "https://filada.com.ua/blog/vybir-grudnih-implantiv-krugli-vs-anatomichni/",
    coverDescription: "Вибір грудних імплантів",
    text: blogBreastImplantsChoiceText,
    imagesArr: [
      { src: implantsPhoto1, alt: "Імпланти грудей" },
      { src: implantsPhoto2, alt: "Круглі імпланти" },
      { src: implantsPhoto3, alt: "Анатомічні імпланти" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/blog/intymna-estetyka-chomu-labioplastyka-staie-vse-populiarnishoiu-v-ukraini",
    metaTitle: "Лабіопластика в Україні | Блог МЦ Filada",
    metaDescription:
      "Причини популярності лабіопластики серед українок.",
    metaUrl:
      "https://filada.com.ua/blog/intymna-estetyka-chomu-labioplastyka-staie-vse-populiarnishoiu-v-ukraini",
    coverDescription: "Інтимна естетика",
    text: blogLabioplastyText,
    imagesArr: [
      { src: labioPhoto1, alt: "Лабіопластика" },
      { src: labioPhoto2, alt: "Інтимна естетика" },
      { src: labioPhoto3, alt: "Естетична гінекологія" },
    ],
    author: {
      name: "Василь Цикал",
      job: "Лікар-гінеколог",
      image: vTsikalAvatar,
      link: "/doctors/vasyl-tsikal",
    },
    hrefDetails: "/gynecology/",
  },

  // ✅ НОВА СТАТТЯ — ФЕЙСЛІФТИНГ
  {
    path: "/blog/reabilitatsiia-pislia-feisliftynhu-laifkhaky",
    metaTitle:
      "Реабілітація після фейсліфтингу: поради хірурга | Блог МЦ Filada",
    metaDescription:
      "Як швидше відновитися після фейсліфтингу: лайфхаки, догляд та типові помилки.",
    metaUrl:
      "https://filada.com.ua/blog/reabilitatsiia-pislia-feisliftynhu-laifkhaky",
    coverDescription: "Реабілітація після фейсліфтингу",
    text: blogReabilitatsiiaPisliaFeisliftynhuText,
    imagesArr: [
      { src: blogSMASPhoto1, alt: "Реабілітація після фейсліфтингу" },
      { src: blogSMASPhoto2, alt: "Відновлення після підтяжки обличчя" },
      { src: blogSMASPhoto3, alt: "Фейсліфтинг реабілітація" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },
  
  {
    path: "/blog/smas-vs-nytkovyi-liftynh-shcho-obraty-dlia-pryrodnoho-omolodzhennia",
    metaTitle:
      "Нитки чи SMAS-ліфтинг: який метод омолодження обрати",
    metaDescription:
      "ЯДетально порівнюємо два популярні методи підтяжки обличчя: ефективність, тривалість результату, реабілітацію та вартість. Допомагаємо визначити, який варіант підійде для ваших цілей та віку.",
    metaUrl:
      "https://filada.com.ua/blog/smas-vs-nytkovyi-liftynh-shcho-obraty-dlia-pryrodnoho-omolodzhennia",
    coverDescription: "Нитки чи SMAS-ліфтинг",
    text: blogSMASvsNytkyText,
    imagesArr: [
      { src: smasVsNytkyPhoto1, alt: "Який метод підтяжки обличчя обрати" },
      { src: smasVsNytkyPhoto2, alt: "Відновлення після підтяжки обличчя" },
      { src: smasVsNytkyPhoto3, alt: "SMAS або нитки" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },

  {
    path: "/blog/smas-liftynh-revoliutsiina-metodyka-omolodzhennia",
    metaTitle:
      "SMAS-ліфтинг: як скинути 10 років без шрамів і тривалої реабілітації",
    metaDescription:
      "Розповідаємо, як працює SMAS-ліфтинг, чому він вважається золотим стандартом омолодження та кому підходить ця процедура. Дізнайтеся про переваги методики, терміни відновлення та результати, які зберігаються на роки.",
    metaUrl:
      "https://filada.com.ua/blog/smas-liftynh-revoliutsiina-metodyka-omolodzhennia",
    coverDescription: "SMAS-ліфтинг: революційна методика омолодження",
    text: blogSmasRevolutionText,
    imagesArr: [
      { src: blogSMASrevolution1, alt: "Який метод підтяжки обличчя обрати" },
      { src: blogSMASrevolution2, alt: "Відновлення після підтяжки обличчя" },
      { src: blogSMASrevolution3, alt: "ендоскопія в SMAS" },
    ],
    author: {
      name: "Олександр Косенко",
      job: "Пластичний хірург",
      image: oKosenkoAvatar,
      link: "/doctors/oleksandr-kosenko",
    },
    hrefDetails: "/plastic-surgery/",
  },
];
