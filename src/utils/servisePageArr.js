import { Link } from "react-router-dom";

import {
  SERVICE_COSMETOLOGY_ROUTE,
  SERVICE_DERMATOLOGY_ROUTE,
  SERVICE_DIETICS_NUTRITION_ROUTE,
  SERVICE_ENDOCRINOLOGY_ROUTE,
  SERVICE_GINECOLOGY_ROUTE,
  SERVICE_NEUROLOGY_ROUTE,
  SERVICE_ORTHOPEDICS_TRAUMATOLOGY_ROUTE,
  SERVICE_OTOLARYNGOLOGY_ROUTE,
  SERVICE_PASTIC_ROUTE,
  SERVICE_PROCTOLOGY_ROUTE,
  SERVICE_SURGERY_ROUTE,
  SERVICE_ULTRASOUND_DIAGNOSTICS_ROUTE,
  SERVICE_VASCULAR_SURGERY_ROUTE,
} from "./routes";

import ginekologiaOne from "../assets/images/ginekologia-one.webp";
import ginekologiaTwo from "../assets/images/ginekologia-two.webp";
import ginekologiaThree from "../assets/images/ginekologia-three.webp";
import kosmetOne from "../assets/images/kosmetOne.webp";
import kosmetTwo from "../assets/images/kosmetTwo.webp";
import kosmetThree from "../assets/images/kosmetThree.webp";
import plasticOne from "../assets/images/plasticOne.webp";
import plasticTwo from "../assets/images/plasticTwo.webp";
import plasticThree from "../assets/images/plasticThree.webp";
import proctoOne from "../assets/images/proctoOne.webp";
import proctoTwo from "../assets/images/proctoTwo.webp";
import proctoThree from "../assets/images/proctoThree.webp";
import dermaOne from "../assets/images/dermaOne.webp";
import dermaTwo from "../assets/images/dermaTwo.webp";
import dermaThree from "../assets/images/dermaThree.webp";
import lorOne from "../assets/images/lorOne.webp";
import lorTwo from "../assets/images/lorTwo.webp";
import lorThree from "../assets/images/lorThree.webp";
import neuroThree from "../assets/images/neuroThree.webp";
import endoOne from "../assets/images/endocrinology1.webp";
import endoTwo from "../assets/images/dietology2.webp";
import endoThree from "../assets/images/endocrinology3.webp";
import dietOne from "../assets/images/dietology1.webp";
import dietTwo from "../assets/images/dietology2.webp";
import dietThree from "../assets/images/dietology3.webp";
import surgeryOne from "../assets/images/surgeryOne.webp";
import surgeryThree from "../assets/images/surgeryThree.webp";
import UZDiagnosticOne from "../assets/images/UZDiagnosticOne.webp";
import UZDiagnosticTwo from "../assets/images/UZDiagnosticTwo.webp";
import UZDiagnosticThree from "../assets/images/UZDiagnosticThree.webp";
import ortopedTravmatOne from "../assets/images/ortopedTravmatOne.webp";
import ortopedTravmatTwo from "../assets/images/ortopedTravmatTwo.webp";
import ortopedTravmatThree from "../assets/images/ortopedTravmatThree.webp";
import vascularOne from "../assets/images/vascularOne.webp";
import vascularTwo from "../assets/images/vascularTwo.webp";
import vascularThree from "../assets/images/vascularThree.webp";
import {
  orthopedicsTraumatologyText,
  textCosmetology,
  textDermatology,
  textDieteticsNutrition,
  textEndocrinology,
  textGinecology,
  textLor,
  textNeurology,
  textPlastic,
  textProctology,
  textSurgery,
  ultraSoundDiagnosticsText,
  vascularSurgeryText,
} from "./texts";

export const servicePageArr = [
  {
    path: SERVICE_DERMATOLOGY_ROUTE,
    metaTitle: "Приватна клініка дерматології, Чернігів | Filada",
    metaDescription:
      "Дерматолог у клініці Filada ⭐діагностика шкірних захворювань, дерматоскопія, лікування акне, псоріазу та інших станів ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/dermatology/",
    coverDescription: "Дерматологія",
    abouteTitle: "Дерматолог в Чернігові",
    serviceFormName: "Дерматологія",
    doctorName: "Лікар-дерматолог Ірина Суслова",
    // seoText: textDermatology,
    abouteTexts: [
      `Захворювання шкіри мають безліч проявів, симптомів та наслідків. Кваліфікований лікар-дерматолог спеціалізується на діагностиці та лікуванні шкірних
      захворювань, нігтів та волосся. В медичному центрі Філада ви можете отримати повний спектр найсучаснішої та ефективної діагностики дерматологічних захворювань і отримати необхідне лікування.`,
      "Під час консультації лікар-дерматолог проводить опитування та огляд, в деяких випадках можуть бути призначені додаткові методи дослідження (загальні клінічні та біохімічні аналізи, дерматоскопія, взяття зіскрібків або біопсії шкіри для уточнення або підтвердження діагнозу).",
      "Після підтвердження діагнозу дерматолог рекомендує лікування. У сучасній дерматології використовують медикаментозні види лікування (місцеве або системне), фізіотерапевтичні, хірургічні або їх комплекс залежно від типу захворювання",
    ],
    aboutePhotos: [dermaTwo, dermaThree, dermaOne],
    doctorPath: "/doctors/iryna-suslova",
    pricesObj: {
      isComplicated: true,
      services: [
        {
          subCategory: "Діагностика",
          subCategoryServices: [
            {
              title: "Консультація лікаря-дерматолога",
              price: "700 грн",
            },
            {
              title: "Повторна консультація лікаря-дерматолога",
              price: "500 грн",
            },
          ],
        },
        {
          subCategory: "Фототерапія",
          subCategoryServices: [
            {
              title: "Фототерапія “Псоролайт” Philips UVB 311Нм один сеанс",
              price: "300 грн",
            },
            {
              title: "Фототерапія “Псоролайт” Philips UVB 311Нм 10 сеансів",
              price: "2500 грн",
            },
            {
              title: "Фототерапія “Псоролайт” Philips UVB 311Нм 20 сеансів",
              price: "4200 грн",
            },
          ],
        },
        {
          subCategory: "Апаратні методики",
          subCategoryServices: [
            {
              title: "Видалення судин діодним лазером (крила носа)",
              price: "1000 грн",
            },
            {
              title: "Видалення судин діодним лазером (ніс повністю)",
              price: "2000 грн",
            },
            {
              title: "Видалення судин діодним лазером (щоки)",
              price: "2600 грн",
            },
            {
              title: "Видалення судин діодним лазером (по тілу ділянка 10х10 см)",
              price: "2700 грн",
            },
            {
              title: "Видалення судин діодним лазером (підборіддя)",
              price: "1200 грн",
            },
            {
              title:
                "Видалення судин діодним лазером (ділянка над верхньою губою)",
              price: "1000 грн",
            },
            {
              title: "Видалення гемангіоми діодним лазером до 3 мм",
              price: "300 грн",
            },
            {
              title:
                "Видалення гемангіом діодним лазером від 10 шт по тілу (за шт)",
              price: "200 грн",
            },
            {
              title:
                "Видалення гемангіом діодним лазером від 10 шт (обличчя, статеві органи, за шт)",
              price: "250 грн",
            },
            {
              title:
                "Видалення гемангіом діодним лазером від 20 шт по тілу (за шт)",
              price: "150 грн",
            },
            {
              title:
                "Видалення гемангіом діодним лазером від 20 шт (обличчя, статеві органи, за шт)",
              price: "200 грн",
            },
            {
              title: "Одиночний імпульс",
              price: "8 грн",
            },
            {
              title: "Гідропілінг",
              price: "900 грн",
            },
            {
              title: "RF-ліфтинг неінвазивний",
              price: "900 грн",
            },
            {
              title: "Киснева мезотерапія",
              price: "900 грн",
            },
            {
              title: "Голівудський догляд",
              price: "1300 грн",
            },
          ],
        },
        {
          subCategory: "Лікування рубців полінуклеотидами",
          subCategoryServices: [
            {
              title: "Rejuran S (лікування рубців/стрій) 1 ml",
              price: "3300 грн",
            },
            {
              title: "Plinest one(лікування стріїв,рубців та ліфтинг шкіри тіла) ",
              price: "1650 грн",
            },
            {
              title: "Лікування рубців ферментами Pbserum  HA 1.5 HIGH",
              price: "8500 грн",
            },
            {
              title: "Лікування рубців ферментами Pbserum",
              price: "2500 грн",
            },
          ],
        },
        {
          subCategory: "PRP-терапія ",
          subCategoryServices: [
            {
              title: "PRP-терапія обличчя (2 пробірки)",
              price: "2200 грн",
            },
            {
              title: "PRP-терапія волосистої частини голови (2 пробірки)",
              price: "2200 грн",
            },
          ],
        },
      ],
    },
  },
  {
    path: SERVICE_COSMETOLOGY_ROUTE,
    metaTitle: "Клініка косметології, Чернігів | Filada",
    metaDescription:
      "Косметологія в медичному центрі Filada ⭐ догляд за обличчям і тілом, апаратні процедури, ін'єкції краси у Чернігові ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/cosmetology/",
    coverDescription: "Косметологія",
    abouteTitle: "Косметолог в Чернігові",
    serviceFormName: "Косметологія",
    doctorName: "Лікар-косметолог Ірина Суслова",
    // seoText: textCosmetology,
    abouteTexts: [
      `Людина, яка доглядає за собою, завжди виділяється серед інших. До косметолога звертаються з різних причин: - Для когось важливий презентабельний зовнішній вигляд - Комусь це допомагає відчувати себе впевненіше в особистому чи професійному житті - Хтось слідкує за трендами і бажає спробувати новітні процедури - А хтось хоче виглядати молодше свого віку`,
      "Не залежно від того, яка мета саме у вас, ми точно знаємо одне – наші фахівці допоможуть її досягнути в найближчий час. Адже в медичному центрі FILADA ми проводимо безпечні та якісні косметологічні процедури різного спектру та направленості дії.",
      "Записуйтесь на консультацію, щоб отримати індивідуальну програму по догляду та/або лікуванню. Ми не просто проводимо процедури, ми даруємо нашим клієнтам красу, молодість та радість життя.",
    ],
    aboutePhotos: [kosmetOne, kosmetTwo, kosmetThree],
    doctorPath: "/doctors/iryna-suslova",
    pricesObj: {
      isComplicated: true,
      services: [
        {
          subCategory: "Діагностика",
          subCategoryServices: [
            {
              title: "Консультація косметолога",
              price: "700 грн",
            },
          ],
        },
        {
          subCategory: "Ін’єкційна косметологія (ботулінотерапія)",
          subCategoryServices: [
            {
              title: "Ботулінотерапія одна зона",
              price: "2000 грн",
            },
            {
              title: "Ботулінотерапія Лоб+міжбрів’я",
              price: "3850 грн",
            },
            {
              title: "Ботулінотерапія Лоб+міжбрів’я+очі",
              price: "5500 грн",
            },
            {
              title: "Ботулінотерапія Full face",
              price: "7700 грн",
            },
            {
              title: "Ботулінотерапія  Платізма (шия)",
              price: "6600 грн",
            },
            {
              title: "Лікування гіпергідрозу (Диспорт)",
              price: "5500 грн",
            },
          ],
        },
        {
          subCategory: "Ін’єкційна косметологія (бланшинг)",
          subCategoryServices: [
            {
              title: "Бланшинг поверхневих зморшок (Belotero Balance)",
              price: "6600 грн",
            },
            {
              title: "Бланшинг поверхневих зморшок (Belotero Soft)",
              price: "6600 грн",
            },
          ],
        },
        {
          subCategory: "Ін’єкційна косметологія (контурна пластика)",
          subCategoryServices: [
            {
              title: "Зона губ Belotero 0,6 ml",
              price: "4500 грн",
            },
            {
              title: "Зона губ Belotero 1 ml",
              price: "5500 грн",
            },
            {
              title: "Зона губ Pluryal 1 ml",
              price: "5000 грн",
            },
            {
              title: "Зона губ Saypha 1ml",
              price: "4000 грн",
            },
            {
              title:
                "Зона вилиць/підборіддя та кути нижної щелепи Belotero 1 ml",
              price: "6600 грн",
            },
            {
              title: "Зона вилиць/підборіддя та кути нижної щелепи Saypha 1 ml",
              price: "4500 грн",
            },
            {
              title:
                "Зона вилиць/підборіддя та кути нижної щелепи Pluryal 1 ml",
              price: "5500 грн",
            },
            {
              title: "Зона губ Juvederm 0.6 мл",
              price: "4800 грн",
            },
            {
              title: "Зона губ Juvederm 1.0 мл",
              price: "6500 грн",
            },
            {
              title: "Зона вилиць Juvederm 1.0 мл",
              price: "7100 грн",
            },
            {
              title: "Зона підборіддя/нижня щелепа борозди Juvederm 1.0 мл",
              price: "7000 грн",
            },
            {
              title: "Зона підборіддя/нижня щелепа борозди Juvederm 0.6 мл",
              price: "6500 грн",
            },
            {
              title: "Розчинення філера препаратом PB-serum",
              price: "1550 грн",
            },
          ],
        },
        {
          subCategory: "Ін’єкційна косметологія (Біоревіталізація/Біорепарація)",
          subCategoryServices: [
            {
              title: "Біоревіталізація/Біорепарація обличчя Saypha Rich 1 ml",
              price: "3300 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація обличчя Belotero Revive 1 ml",
              price: "4400 грн",
            },
            {
              title: "Біоревіталізація/Біорепарація обличчя Rejuran HB 1 ml",
              price: "3850 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація обличчя HYALUAL Electri 1.5 ml",
              price: "3100 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація обличчя HYALUAL Smart 1.8% 1ml",
              price: "3300 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація обличчя HYALUAL booster 2.5 % 1 ml",
              price: "3500 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) TwAc 2.0 3ml",
              price: "5200 грн",
            },
            {
              title:
                "Ін'єккційна косметологія (Біореві+26:46талізація/Біорепарація)",
              price: "5500 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) Plinest (Mastelli) 2 ml",
              price: "4600 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) HP CELL Vitaran і II 2 ml",
              price: "3500 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) HP CELL Vitaran Whitening &Anti-aging 2 мл",
              price: "4300 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) Neauvia Hidro Delux 2.5 ml",
              price: "3300 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) Newest (Mastelli) 2 ml",
              price: "4900 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) HYALUAL Smart 1.8% 2 ml",
              price: "3900 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація (обличча+шия +декольте/руки) HYALUAL booster 2.5% 2 ml",
              price: "4200 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація періорбітальної зони Plinest eye 2 ml",
              price: "4500 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація періорбітальної зони Rejuran I 1 ml",
              price: "3300 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація періорбітальної зони TwAc eyes1 ml",
              price: "3100 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація періорбітальної зони HP CELL Vitaran і 1 ml",
              price: "2600 грн",
            },
            {
              title:
                "Біорепарація+Нанохілінг(обличча+шия+декольте/руки/тіло) Hyalual Perfoskin",
              price: "3500 грн",
            },
            {
              title: "RRS long lastic 3 ml",
              price: "4500 грн",
            },
            {
              title:
                "Біоревіталізація/Біорепарація(обличча+шия+декольте/руки) RRS HYALIFT 75 proactive 5 ml",
              price: "2800 грн",
            },
          ],
        },
        {
          subCategory: "Мезотерапія",
          subCategoryServices: [
            {
              title: "Мезотерапія періорбітальної зони RRS HA Eyes",
              price: "1200 грн",
            },
            {
              title: "Мезотерапія періорбітальної зони Dermaheal Dark Circle",
              price: "1900 грн",
            },
            {
              title: "Мезотерапія волосистої частини голови XL HAIR",
              price: "1600 грн",
            },
            {
              title: "Мезотерапія волосистої частини голови DR. CYJ",
              price: "3600 грн",
            },
            {
              title: "Мезотерапія волосистої частини голови Dermaheal HL",
              price: "1100 грн",
            },
          ],
        },
        {
          subCategory: "Ліполітична терапія",
          subCategoryServices: [
            {
              title: "Ліполітична терапія PBserum",
              price: "3000 грн",
            },
            {
              title: "Ліполітична терапія RRS HA CELLUTRIX",
              price: "2000 грн",
            },
          ],
        },
        {
          subCategory: "Доглядова косметологія",
          subCategoryServices: [
            {
              title: "Комбінована чистка обличчя",
              price: "950 грн",
            },
            {
              title: "Комбінована чистка обличчя + пілінги",
              price: "1100 грн",
            },
            {
              title: "Карбоксітерапія",
              price: "800 грн",
            },
            {
              title: "Експрес догляд(по типу шкіри)",
              price: "800 грн",
            },
            {
              title: "Масаж обличчя, шиї та декольте",
              price: "700 грн",
            },
            {
              title: "Вогонь та лід IS Clinical",
              price: "1400 грн",
            },
            {
              title: "Платиновий антивіковий догляд  MEDIK 8",
              price: "1100 грн",
            },
            {
              title: "Механічна чистка спини+пілінг",
              price: "1400 грн",
            },
            {
              title: "Пілінг мигдалевий",
              price: "900 грн",
            },
            {
              title: "Пілінг азелаїновий",
              price: "900 грн",
            },
            {
              title: "Пілінг освітлюючий",
              price: "900 грн",
            },
            {
              title: "Ретиноловий пілінг периорбітальної зони",
              price: "900 грн",
            },
            {
              title:
                "Поверхнево-серединний пілінг з біоревіталізуючим ефектом  Appex ",
              price: "1700 грн",
            },
            {
              title:
                "Поверхнево-серединний пілінг з біоревіталізуючим ефектом  PRX33 ",
              price: "1800 грн",
            },
          ],
        },
      ],
    },
  },
  {
    path: SERVICE_GINECOLOGY_ROUTE,
    metaTitle: "Клініка гінекології, Чернігів | Filada",
    metaDescription:
      "Гінекологія у клініці Filada в Чернігові ⭐ діагностика, лікування, УЗД та ведення пацієнток. Сучасне обладнання та досвідчені спеціалісти ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/gynecology/",
    coverDescription: "Гінекологія",
    abouteTitle: "Гінеколог в Чернігові",
    doctorName: "Лікар-гінеколог Василь Цикал",
    serviceFormName: "Гінекологія",
    seoText: textGinecology,
    abouteTexts: [
      "Чи знаєте ви, як часто кожна жінка повинна відвідувати гінеколога? Мінімум 1 раз на рік . Для того, щоб виявляти відхилення від норми на ранніх стадіях та проводити профілактику різних захворювань.",
      "А якщо проблема з жіночим здоров’ям вже є, то не варто зволікати з її вирішенням. Адже при несвоєчасному лікуванні значно зростає вірогідність різних ускладнень.",
      "В нашому медичному центрі FILADA ми готові вирішувати ваші гінекологічні проблеми своєчасно, використовуючи при цьому сучасне обладнання та новітні методики.",
      <Link
        to="/doctors/olgha-davydenko"
        style={{ textDecoration: "underline" }}
      >
        Лікар-гінеколог Ольга Давиденко
      </Link>,
      "Детальніше про лікаря",
    ],
    aboutePhotos: [ginekologiaOne, ginekologiaTwo, ginekologiaThree],
    doctorPath: "/doctors/vasyl-tsikal",
    pricesObj: {
      isComplicated: true,
      services: [
        {
          subCategory: "Діагностика",
          subCategoryServices: [
            { title: "Консультація гінеколога", price: "700 грн" },
            { title: "Повторна консультація гінеколога", price: "500 грн" },
            { title: "Кольпоскопія", price: "400 грн" },
            {
              title:
                "Консультація гінеколога + УЗД (трансвагінальне та/або трансабдомінальне)",
              price: "1100 грн",
            },
            {
              title:
                "УЗД органів малого тазу (трансвагінальне та/або трансабдомінальне)",
              price: "500 грн",
            },
            { title: "Рідинна цитологія ПАП-тест", price: "650 грн" },
            { title: "Класичний ПАП тест", price: "400 грн" },
            { title: "Дослідження мікрофлори урогенітального тракту", price: "400 грн" },
            { title: "Фолікулометрія", price: "300 грн" },
            { title: "Ехогістеросальпінгоскопія", price: "2900 грн" },
            { title: "Пайпель-біопсія ендометрію", price: "3200 грн" },
            {
              title:
                'Введення внутрішньоматкового контрацептиву "Мірена" (контрацептив включено до вартості)',
              price: "5700 грн",
            },
            {
              title:
                'Введення внутрішньоматкового контрацептиву "Мірена" (без вартості контрацептиву)',
              price: "3000 грн",
            },
            { title: "Видалення внутрішньоматкового контрацептиву", price: "800 грн" },
            { title: "Біопсія шийки матки з гістологічним дослідженням", price: "3500 грн" },
          ],
        },
        {
          subCategory: "Оперативна гінекологія",
          subCategoryServices: [
            { title: "Коагуляція шийки матки", price: "3000 грн" },
            { title: "Видалення папілом зовнішніх статевих органів", price: "2000 грн" },
            {
              title: "Лікувально-діагностичне вишкрібання стінок порожнини матки",
              price: "4900 грн",
            },
            { title: "Конізація шийки матки", price: "6000 грн" },
            { title: "Видалення кісти піхви", price: "11900 грн" },
            { title: "Видалення кісти бартолінієвої залози", price: "11900 грн" },
            { title: "Видалення сторонніх тіл з порожнини матки", price: "11900 грн" },
            { title: "Видалення субмукозного вузла", price: "11900 грн" },
            { title: "Пластика промежини", price: "18000 грн" },
            { title: "Задня кольпорафія", price: "28500 грн" },
            { title: "Передня кольпорафія", price: "24500 грн" },
            { title: "Повна вагінопластика", price: "47000 грн" },
            { title: "Діагностична лапароскопія з біопсією", price: "21000 грн" },
            {
              title:
                "Лапароскопія з перевіркою прохідності маткових труб (лапароскопія, хромогідротубація)",
              price: "22000 грн",
            },
            {
              title:
                "Лапароскопія з перевіркою та відновленням прохідності маткових труб (лапароскопія, хромогідротубація, сальпінгооваріолізис)",
              price: "24000 грн",
            },
            { title: "Лапароскопічна стерилізація", price: "22000 грн" },
            {
              title: "Лапароскопія з видаленням кісти яєчника ( кістектомія ) однобічна",
              price: "24000 грн",
            },
            {
              title: "Лапароскопія з видаленням кісти яєчника ( кістектомія ) двобічна",
              price: "26000 грн",
            },
            {
              title: "Лапароскопія з видаленням маткової труби ( тубектомія ) однобічна",
              price: "22000 грн",
            },
            {
              title: "Лапароскопія з видаленням маткової труби ( тубектомія ) двобічна",
              price: "24000 грн",
            },
            {
              title: "Лапароскопія з видаленням додатків матки ( аднексектомія) однобічна",
              price: "24000 грн",
            },
            {
              title: "Лапароскопія з видаленням додатків матки ( аднексектомія) двобічна",
              price: "26000 грн",
            },
            { title: "Гістерорезектоскопія з поліпектомією (або біопсією ендометрію)", price: "14000 грн" },
            { title: "Гістерорезектоскопія з абляцією ендометрію", price: "15000 грн" },
            { title: "Гістерорезектоскопія з видаленням субмукозного вузла", price: "16000 грн" },
            { title: "Гістерорезектоскопія з висіченням внутрішньоматкової перетинки", price: "16000 грн" },
            {
              title: "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
              price: "2500 грн",
            },
            { title: "Загальний наркоз з інтубацією (перша година)", price: "3000 грн" },
            { title: "Кожна наступна година наркозу з інтубацією", price: "1200 грн" },
            { title: "Спинномозкова анестезія (перша година)", price: "2800 грн" },
            { title: "Кожна наступна година спинномозкової анестезії", price: "1000 грн" },
          ],
        },
        {
          subCategory: "Естетична гінекологія",
          subCategoryServices: [
            { title: "Лабіопластика (пластика статевих губ)", price: "29000 грн" },
            { title: "Нитьова перинеопластика (1 комплект)", price: "25000 грн" },
            { title: "Нитьова перинеопластика (2 комплекти)", price: "30000 грн" },
            { title: "Відновлення дівочої плеви", price: "33000 грн" },
            {
              title: "Корекція форми великих статевих губ за допомогою філлерів (1 мл)",
              price: "4400 грн",
            },
            { title: "Аугментація (збільшення) точки G", price: "4400 грн" },
            { title: "Біоревіталізація промежини", price: "2100 грн" },
            { title: "Біоревіталізація піхви", price: "2700 грн" },
            { title: "Контурна пластика піхви за допомогою філлерів (1 мл)", price: "2600 грн" },
            {
              title: "Корекція стресового нетримання сечі за допомогою філлерів (1 мл)",
              price: "4400 грн",
            },
            { title: "Інтимний пілінг", price: "1500 грн" },
            { title: "PRP – терапія", price: "від 2000 грн" },
            { title: "Інстиляції сечового міхура", price: "2200 грн" },
          ],
        },
      ],
    },
  },
];
