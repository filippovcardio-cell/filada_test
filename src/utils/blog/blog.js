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

// ✅ НОВИЙ ІМПОРТ
import { blogLabioplastyText } from "./blogLabioplastyText";
import vTsikalAvatar from "../../assets/images/vTsikalAvatar.png";
import labioPhoto1 from "../../assets/images/blog/Labio1.webp";
import labioPhoto2 from "../../assets/images/blog/Labio2.webp";
import labioPhoto3 from "../../assets/images/blog/Labio3.webp";

export const blogArr = [
  {
    path: "/plastika-povik-blefaroplastika-koli-potribna-i-yak-prohodit/",
    metaTitle: "Блефаропластика: що це та кому необхідна? | Блог МЦ Filada",
    metaDescription:
      "Дізнайтесь, що таке блефаропластика, кому вона рекомендована та як проходить процедура. Все про показання, переваги та етапи хірургічного втручання — у блозі МЦ Filada.",
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
      "Дізнайтесь, що таке септопластика, кому показана операція, як проходить відновлення та які ризики можуть виникнути. Все про оперативне лікування викривлення носової перегородки — у блозі МЦ Filada.",
    metaUrl:
      "https://filada.com.ua/blog/septoplastika-pokazannya-riziki-ta-period-vidnovlennya/",
    coverDescription: "Септопластика",
    text: blogSeptoplastyText,
    imagesArr: [
      {
        src: septhoPhoto1,
        alt: "Септопластика фото",
      },
    ],
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
    metaTitle: "Пластична хірургія: за проти коррекції тіла | Блог МЦ Filada",
    metaDescription:
      "Дізнайтеся все про пластичну хірургію: переваги, ризики, види пластичних операцій, вартість та як обрати хірурга для корекції тіла.",
    metaUrl:
      "https://filada.com.ua/blog/yak-vibrati-plastichnogo-hirurga-kriteriyiv-dlya-prijnyattya-rishennya/",
    coverDescription: "Як вибрати пластичного хірурга",
    text: blogHowToChoosePlasticSurger,
    imagesArr: [
      { src: plasticBlogPhoto1, alt: "небезпеки пластичної хірургії" },
      { src: plasticBlogPhoto2, alt: "пластичний хірург це" },
      { src: plasticBlogPhoto3, alt: "перша пластична операція" },
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
    metaDescription:
      "Дізнайтеся, як ефективно прибрати живіт: поєднання дієти, вправ і медичних рішень.",
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
    metaTitle:
      "10 питань про маммопластику, які ви боялися поставити хірургу | Блог МЦ Filada",
    metaDescription: "Чесні відповіді на найделікатніші питання про збільшення грудей.",
    metaUrl: "https://filada.com.ua/blog/zbilshennia-hrudei-top-10-pytan/",
    coverDescription: "10 питань про маммопластику",
    text: blogBreastAugmentationTop10QuestionsText,
    imagesArr: [
      { src: breastAugmentationPreview1, alt: "Збільшення грудей" },
      { src: breastAugmentationPreview2, alt: "Маммопластика" },
      { src: breastAugmentationPreview3, alt: "Імпланти грудей" },
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
    metaTitle: "Вибір грудних імплантів: круглі чи анатомічні | Блог МЦ Filada",
    metaDescription: "Як обрати грудні імпланти: круглі чи анатомічні?",
    metaUrl: "https://filada.com.ua/blog/vybir-grudnih-implantiv-krugli-vs-anatomichni/",
    coverDescription: "Вибір грудних імплантів",
    text: blogBreastImplantsChoiceText,
    imagesArr: [
      { src: implantsPhoto1, alt: "Вибір грудних імплантів" },
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
    metaTitle: "Лабіопластика в Україні: причини популярності | Блог МЦ Filada",
    metaDescription:
      "Чому лабіопластика стає все популярнішою серед українок: медичні та естетичні причини, міфи й реальність.",
    metaUrl:
      "https://filada.com.ua/blog/intymna-estetyka-chomu-labioplastyka-staie-vse-populiarnishoiu-v-ukraini",
    coverDescription: "Інтимна естетика та лабіопластика",
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
];
