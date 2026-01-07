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
      "Дізнайтеся все про пластичну хірургію: переваги, ризики, види пластичних операцій, вартість та як обрати хірурга для корекції тіла. Відповідаємо чесно — за і проти втручань у зовнішність.",
    metaUrl:
      "https://filada.com.ua/blog/yak-vibrati-plastichnogo-hirurga-kriteriyiv-dlya-prijnyattya-rishennya/",
    coverDescription: "Як вибрати пластичного хірурга",
    text: blogHowToChoosePlasticSurger,
    imagesArr: [
      {
        src: plasticBlogPhoto1,
        alt: "небезпеки пластичної хірургії",
      },
      {
        src: plasticBlogPhoto2,
        alt: "пластичний хірург це",
      },
      {
        src: plasticBlogPhoto3,
        alt: "перша пластична операція",
      },
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
      "Дізнайтеся, як ефективно прибрати живіт: поєднання дієти, вправ і медичних рішень. Читайте поради експертів клініки Filada — шлях до плоского живота починається тут!",
    metaUrl: "https://filada.com.ua/blog/yak-pribrati-zhivit/",
    coverDescription: "Як позбутися живота",
    text: blogHowToLoseBellyFat,
    imagesArr: [
      {
        src: blogHowToLoseBellyFatPhoto1,
        alt: "blogHowToLoseBellyFatPhoto1",
      },
      {
        src: blogHowToLoseBellyFatPhoto2,
        alt: "як позбутися жиру на животі",
      },
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
    metaDescription:
      "Чесні відповіді на найделікатніші питання про збільшення грудей: від чутливості та грудного вигодовування до болю й термінів служби імплантів. Все, що ви хотіли знати, але соромилися запитати.",
    metaUrl:
      "https://filada.com.ua/blog/zbilshennia-hrudei-top-10-pytan/",
    coverDescription: "10 питань про маммопластику",
    text: blogBreastAugmentationTop10QuestionsText,
    imagesArr: [
      {
        src: breastAugmentationPreview1,
        alt: "Збільшення грудей",
      },
       {
        src: breastAugmentationPreview2,
        alt: "Збільшення грудей",
      },
       {
        src: breastAugmentationPreview3,
        alt: "Збільшення грудей",
      },
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
  metaTitle:
    "Вибір грудних імплантів: круглі чи анатомічні | Блог МЦ Filada",
  metaDescription:
    "Як обрати грудні імпланти: круглі чи анатомічні? Порівняння форм, переваг, ризиків і рекомендації пластичного хірурга.",
  metaUrl:
    "https://filada.com.ua/blog/vybir-grudnih-implantiv-krugli-vs-anatomichni/",
  coverDescription: "Вибір грудних імплантів",
  text: blogBreastImplantsChoiceText,
  imagesArr: [
    {
      src: implantsPhoto1,
      alt: "Вибір грудних імплантів",
    },
    {
      src: implantsPhoto2,
      alt: "Круглі та анатомічні грудні імпланти",
    },
    {
      src: implantsPhoto3,
      alt: "Порівняння грудних імплантів",
    },
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

