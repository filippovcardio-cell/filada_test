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
  SERVICE_CARDIOLOGY_ROUTE,
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
import cardiologyOne from "../assets/images/cardiologyOne.webp";
import cardiologyTwo from "../assets/images/cardiologyTwo.webp";
import cardiologyThree from "../assets/images/cardiologyThree.webp";
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
  textCardiology,
} from "./texts";

export const servicePageArr = [
  {
    path: SERVICE_DERMATOLOGY_ROUTE,
    metaTitle:
      "Приватна клініка дерматології, Чернігів | Filada",
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
              title:
                "Видалення судин діодним лазером (по тілу ділянка 10х10 см)",
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
              title:
                "Plinest one(лікування стріїв,рубців та ліфтинг шкіри тіла) ",
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
    metaTitle:
      "Клініка косметології, Чернігів | Filada",
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
          subCategory:
            "Ін’єкційна косметологія (Біоревіталізація/Біорепарація)",
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
    ],
    aboutePhotos: [ginekologiaOne, ginekologiaTwo, ginekologiaThree],
    doctorPath: "/doctors/vasyl-tsikal",
    pricesObj: {
      isComplicated: true,
      services: [
        {
          subCategory: "Діагностика",
          subCategoryServices: [
            {
              title: "Консультація гінеколога",
              price: "700 грн",
            },
            {
              title: "Повторна консультація гінеколога",
              price: "500 грн",
            },
            {
              title: "Кольпоскопія",
              price: "400 грн",
            },
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
            {
              title: "Рідинна цитологія ПАП-тест",
              price: "650 грн",
            },
            {
              title: "Класичний ПАП тест",
              price: "400 грн",
            },
            {
              title: "Дослідження мікрофлори урогенітального тракту",
              price: "400 грн",
            },
            {
              title: "Фолікулометрія",
              price: "300 грн",
            },
            {
              title: "Ехогістеросальпінгоскопія",
              price: "2900 грн",
            },
            {
              title: "Пайпель-біопсія ендометрію",
              price: "3200 грн",
            },
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
            {
              title: "Видалення внутрішньоматкового контрацептиву",
              price: "800 грн",
            },
            {
              title: "Біопсія шийки матки з гістологічним дослідженням",
              price: "3500 грн",
            },
          ],
        },
        {
          subCategory: "Оперативна гінекологія",
          subCategoryServices: [
            {
              title: "Коагуляція шийки матки",
              price: "3000 грн",
            },
            {
              title: "Видалення папілом зовнішніх статевих органів",
              price: "2000 грн",
            },
            {
              title:
                "Лікувально-діагностичне вишкрібання стінок порожнини матки",
              price: "4900 грн",
            },
            {
              title: "Конізація шийки матки",
              price: "6000 грн",
            },
            {
              title: "Видалення кісти піхви",
              price: "11900 грн",
            },
            {
              title: "Видалення кісти бартолінієвої залози",
              price: "11900 грн",
            },
            {
              title: "Видалення сторонніх тіл з порожнини матки",
              price: "11900 грн",
            },
            {
              title: "Видалення субмукозного вузла",
              price: "11900 грн",
            },
            {
              title: "Пластика промежини",
              price: "18000 грн",
            },
            {
              title: "Задня кольпорафія",
              price: "28500 грн",
            },
            {
              title: "Передня кольпорафія",
              price: "24500 грн",
            },
            {
              title: "Повна вагінопластика",
              price: "47000 грн",
            },
            {
              title: "Діагностична лапароскопія з біопсією",
              price: "21000 грн",
            },
            {
              title: "Лапароскопія з перевіркою прохідності маткових труб (лапароскопія, хромогідротубація)",
              price: "22000 грн",
            },
            {
              title: "Лапароскопія з перевіркою та відновленням прохідності маткових труб (лапароскопія, хромогідротубація, сальпінгооваріолізис)",
              price: "24000 грн",
            },
            {
              title: "Лапароскопічна стерилізація",
              price: "22000 грн",
            },
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
              title: "Лапароскопія з видаленням додатків матки ( аднексектомія) однобічна",
              price: "24000 грн",
            },
            {
              title: "Лапароскопія з видаленням додатків матки ( аднексектомія) двобічна",
              price: "26000 грн",
            },
            {
              title: "Гістерорезектоскопія з поліпектомією (або біопсією ендометрію)",
              price: "14000 грн",
            },
            {
              title: "Гістерорезектоскопія з абляцією ендометрію",
              price: "15000 грн",
            },
            {
              title: "Гістерорезектоскопія з видаленням субмукозного вузла",
              price: "16000 грн",
            },
            {
              title: "Гістерорезектоскопія з висіченням внутрішньоматкової перетинки",
              price: "16000 грн",
            },
            {
              title:
                "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
              price: "2500 грн",
            },
            {
              title: "Загальний наркоз з інтубацією (перша година)",
              price: "3000 грн",
            },
            {
              title: "Кожна наступна година наркозу з інтубацією",
              price: "1200 грн",
            },
            {
              title: "Спинномозкова анестезія (перша година)",
              price: "2800 грн",
            },
            {
              title: "Кожна наступна година спинномозкової анестезії",
              price: "1000 грн",
            },
          ],
        },
        {
          subCategory: "Естетична гінекологія",
          subCategoryServices: [
            {
              title: "Лабіопластика (пластика статевих губ)",
              price: "29000 грн",
            },
            {
              title: "Нитьова перинеопластика (1 комплект)",
              price: "25000 грн",
            },
            {
              title: "Нитьова перинеопластика (2 комплекти)",
              price: "30000 грн",
            },
            {
              title: "Відновлення дівочої плеви",
              price: "33000 грн",
            },
            {
              title:
                "Корекція форми великих статевих губ за допомогою філлерів (1 мл)",
              price: "4400 грн",
            },
            {
              title: "Аугментація (збільшення) точки G",
              price: "4400 грн",
            },
            {
              title: "Біоревіталізація промежини",
              price: "2100 грн",
            },
            {
              title: "Біоревіталізація піхви",
              price: "2700 грн",
            },
            {
              title: "Контурна пластика піхви за допомогою філлерів (1 мл)",
              price: "2600 грн",
            },
            {
              title:
                "Корекція стресового нетримання сечі за допомогою філлерів (1 мл)",
              price: "4400 грн",
            },
            {
              title: "Інтимний пілінг",
              price: "1500 грн",
            },
            {
              title: "PRP – терапія",
              price: "від 2000 грн",
            },
            {
              title: "Інстиляції сечового міхура",
              price: "2200 грн",
            },
          ],
        },
      ],
    },
  },
  {
    path: SERVICE_PASTIC_ROUTE,
    metaTitle:
      "Пластична хірургія, Чернігів | Filada",
    metaDescription:
      "Пластична хірургія у клініці Filada ⭐ сучасні методики, досвідчені хірурги, консультації та реабілітація. ⭐Запис на прийом у Чернігові за тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/plastic-surgery/",
    coverDescription: "Пластична хірургія",
    abouteTitle: "Пластичний хірург в Чернігові",
    doctorName: "Лікар-пластичний хірург Олександр Косенко",
    serviceFormName: "Пластична хірургія",
    seoText: textPlastic,
    abouteTexts: [
      "Як пластична хірургія може змінити ваше життя на краще? Якщо ваш зовнішній вигляд вас не задовольняє. Якщо ваш внутрішній світ не сприймає вашу зовнішність, ваше тіло, то ви в правильному місці. Адже ми вважаємо, що саме Ви заслуговуєте бути щасливими та успішними.",
      "А в цьому вам аж ніяк не обійтись без гарної зовнішності, красивого носика, свіжих не втомлених очей, пружних наповнених грудей та підтягнутого тіла. Кожен обирає для себе те, що йому необхідно.",
      "В медичному центрі FILADA ми використовуємо найсучасніші методики та підходи до корекції зовнішнього вигляду, щоб не просто задовольнити всі ваші потреби та запити, а і зробити це максимально безпечно та комфортно. Всі ваші мрії можуть стати реальністю вже найближчим часом. Запишіться на безкоштовну консультацію до нашого пластичного хірурга та зробіть перший крок на зустріч до вашої мрії!",
    ],
    aboutePhotos: [plasticOne, plasticTwo, plasticThree],
    doctorPath: "/doctors/oleksandr-kosenko",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Збільшення грудей круглими імплантами",
          price: "3000 євро",
          link: "/blog/mammoplasty"
        },
        {
          title: "Збільшення грудей анатомічними імплантами",
          price: "3500 євро",
          link: "/blog/mammoplasty"
        },
        {
          title: "Підтяжка грудей без імплантів",
          price: "3500 євро",
          link: "/blog/mammoplasty"
        },
        {
          title: "Підтяжка з імплантами",
          price: "5000 євро",
          link: "/blog/mammoplasty"
        },
        {
          title: "Заміна імплантів",
          price: "від 4000 євро",
          link: "/blog/mammoplasty"
        },
        {
          title: "Абдомінопластика",
          price: "2500 євро",
          link: "/blog/abdominoplasty/",
        },
        {
          title: "Абдомінопластика з ліпосакцією",
          price: "3000 євро",
          link: "/blog/abdominoplasty/",
        },
        {
          title: "Мініабдомінопластика",
          price: "2000 євро",
          link: "/blog/abdominoplasty/",
        },
        {
          title: "Ліпосакція живота",
          price: "1500 євро",
          link: "/blog/abdominoplasty/",
        },
        {
          title: "Ліпосакція поперекової зони (фланки)",
          price: "900 євро",
          link: "/blog/abdominoplasty/",
        },
        {
          title: "Ліпосакція стегон",
          price: "900 євро",
        },
        {
          title: "Ліпосакція колін",
          price: "700 євро",
        },
        {
          title: "Ліпосакція підборіддя",
          price: "700 євро",
        },
        {
          title: "Ліпофілінг сідниць",
          price: "1000 євро",
        },
        {
          title: "Ліпофілінг грудей",
          price: "1200 євро",
        },
        {
          title:
            "Ліпофілінг параорбітальної зони/носогубні складки/вилиці (вартість однієї зони)",
          price: "200 євро",
        },
        {
          title: "Ліпофілінг губ",
          price: "200-400 євро",
        },
        {
          title: "Ліпофілінг кистей рук",
          price: "500 євро",
        },
        {
          title: "VY-пластика (збільшення верхньої губи без філерів)",
          price: "900 євро",
        },
        {
          title: "Хейлопластика (Булхорн)",
          price: "800 євро",
        },
        {
          title: "Верхня блефаропластика",
          price: "900 євро",
          link: "/blog/blepharoplasty/"
        },
        {
          title: "Нижня блефаропластика",
          price: "1100 євро",
          link: "/blog/blepharoplasty/"
        },
        {
          title: "Кругова блефаропластика",
          price: "1700 євро",
          link: "/blog/blepharoplasty/"
        },
        {
          title: "Кантопексія",
          price: "300 євро",
          link: "/blog/blepharoplasty/"
        },
        {
          title: "Фейсліфтинг SMAS",
          price: "3000 євро",
        },
        {
          title: "Платизмопластика (підтяжка шиї)",
          price: "1500 євро",
        },
        {
          title: "Отопластика однобічна",
          price: "600 євро",
        },
        {
          title: "Отопластика двобічна",
          price: "1000 євро",
        },
        {
          title: "Видалення грудок Біша",
          price: "900 євро",
        },
        {
          title: "Темпоральний ліфтинг",
          price: "800 євро",
        },
        {
          title: "Ендоскопічна підтяжка лоба та брів",
          price: "2400 євро",
        },
        {
          title:
            "*Розрахунок відбувається у гривні, курс обміну - актуальний курс НБУ",
        },
      ],
    },
  },
  {
    path: SERVICE_PROCTOLOGY_ROUTE,
    metaTitle: "Проктолог клініка, Чернігів | Filada",
    metaDescription:
      "Консультація проктолога у Filada ⭐ лікування геморою, тріщин, запалень. Анонімно, без болю, в комфортних умовах в Чернігові ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/proctology/",
    coverDescription: "Проктологія",
    abouteTitle: "Проктолог в Чернігові",
    doctorName: "Лікар-проктолог Євген Івашин",
    serviceFormName: "Проктологія",
    seoText: textProctology,
    abouteTexts: [
      "Найпоширеніше упередження при виникненні проблем з боку заднього проходу – це «соромно прийти на огляд».  Насправді наші комплекси роблять нам ведмежу послугу. Проблема не вирішується, а тільки погіршується з року в рік. В результаті вирішити її без операції стає вкрай важко або не можливо. Але якщо вже захворювання потребує оперативного лікування, то найкращим рішенням буде виконати це із застосуванням сучасних методик, які не потребують тривалого перебування в стаціонарі, безпечні та малотравматичні, а отже і практично безболісні.",
      "В нашому медичному центрі FILADA ми використовуємо HAL-RAR (HAL – гемороїдальне артеріальне лігування, RAR – ректо-анальна реконструкція) – це метод лікування, спрямований на усунення першопричин геморою, тобто лігування патологічно змінених кровоносних судин, розташованих в прямій кишці. Ця методика є малоінвазивною альтернативою традиційним хірургічним процедурам, при застосуванні яких пацієнт має знаходитися в стаціонарі декілька днів або навіть тижнів, а весь післяопераційний період може становити від 25 до 45 днів.",
      "На відміну від класичних хірургічних втручань операція HAL-RAR виконується за допомогою апарату TRILOGY без розрізів. Період перебування в стаціонарі 1-2 дні, а період реабілітації складає всього декілька днів.",
    ],
    aboutePhotos: [proctoOne, proctoTwo, proctoThree],
    doctorPath: "/doctors/eugen-ivashyn",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація проктолога",
          price: "700 грн",
        },
        {
          title: "Повторна консультація проктолога (протягом 2 тижнів)",
          price: "500 грн",
        },
        {
          title: "Аноскопія",
          price: "700 грн",
        },
        {
          title: "Ректороманоскопія",
          price: "1200 грн",
        },
        {
          title:
            "Видалення зовнішнього гемороїдального вузла І категорії складності",
          price: "4500 грн",
        },
        {
          title:
            "Видалення зовнішнього гемороїдального вузла IІ категорії складності",
          price: "5300 грн",
        },
        {
          title:
            "Видалення зовнішнього гемороїдального вузла IІІ категорії складності",
          price: "6300 грн",
        },
        {
          title:
            "Видалення доброякісних новоутворень підвищеної складності (анальна бахромка)",
          price: "5700 грн",
        },
        {
          title: "Видалення анального поліпу I категорії складності",
          price: "3100 грн",
        },
        {
          title: "Видалення анального поліпу IІ категорії складності",
          price: "4200 грн",
        },
        {
          title: "Видалення анального поліпу IІІ категорії складності",
          price: "5300 грн",
        },
        {
          title:
            "Видалення тромбу гемороїдального вузла I категорії складності",
          price: "3800 грн",
        },
        {
          title:
            "Видалення тромбу гемороїдального вузла IІ категорії складності",
          price: "4500 грн",
        },
        {
          title:
            "Видалення тромбу гемороїдального вузла IІІ категорії складності",
          price: "5300 грн",
        },
        {
          title: "Коагуляція гіпертрофованої анальної залози (папілліт)",
          price: "3000 грн",
        },
        {
          title: "Видалення стороннього тіла з анального каналу",
          price: "5200 грн",
        },
        {
          title: "Оперативне лікування анальної тріщини",
          price: "9000 грн",
        },
        {
          title: "Оперативне лікування складних анальних тріщин (двох)",
          price: "14000 грн",
        },
        {
          title:
            "Оперативне лікування складних анальних тріщин зі спазмом сфінктера",
          price: "15500 грн",
        },
        {
          title:
            "Оперативне лікування внутрішнього геморою радіохвильовим методом",
          price: "14000 грн",
        },
        {
          title:
            "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
          price: "2500 грн",
        },
        {
          title: "Загальний наркоз з інтубацією (перша година)",
          price: "3000 грн",
        },
        {
          title: "Кожна наступна година наркозу з інтубацією",
          price: "1200 грн",
        },
        {
          title: "Спинномозкова анестезія (перша година)",
          price: "2800 грн",
        },
        {
          title: "Кожна наступна година спинномозкової анестезії",
          price: "1000 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_OTOLARYNGOLOGY_ROUTE,
    metaTitle: "ЛОР клініка, Чернігів | Filada",
    metaDescription:
      "Отоларинголог у клініці Filada ⭐ лікування вух, горла, носа, промивання пазух, ендоскопія та професійна допомога ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/otolaryngology/",
    coverDescription: "ЛОР",
    abouteTitle: "ЛОР лікар в Чернігові",
    serviceFormName: "ЛОР",
    doctorName: "Лікар-оториноларинголог Ганна Мекшун",
    // seoText: textLor,
    abouteTexts: [
      "Порушення носового дихання, біль, виділення з носу, порушення слуху, утруднене ковтання, викривлення носової перетинки та інші симптоми можуть свідчити про наявність захворювання ЛОР органів. Не варто чекати ускладнень.",
      "В медичному центрі Філада застосовуються найсучасніщі методи діагностики та лікування захворювань верхніх дихальних шляхів та слухового апарату. Це дозволяє визначити точний діагноз, встановити причину ЛОР-патології та призначити ефективне індивідуальне лікування для пацієнта.",
      "Консультативний прийом і операції на ЛОР органах у нашому центрі виконуються з мінімальним дискомфортом і максимальним ефектом для наших пацієнтів! Більшість оперативних втручань при ЛОР захворюваннях виконуються без госпіталізації. В медичному центрі Філада найскладніші хірургічні завдання вирішуються всього за 1 день, завдяки застосуванню відео ендоскопів та малоінвазивних методик оперативного лікування. У разі необхідності госпіталізації, до послуг наших пацієнтів комфортний стаціонар.",
    ],
    aboutePhotos: [lorOne, lorTwo, lorThree],
    doctorPath: "/doctors/hanna-mekshyn",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація ЛОРа",
          price: "700 грн",
        },
        {
          title: "Консультація оториноларинголога з ендоскопічним обстеженням",
          price: "900 грн",
        },
        {
          title: "Повторна консультація ЛОРа (протягом 1 місяця)",
          price: "500 грн",
        },
        {
          title: "Шунтування барабанної перетинки (з однієї сторони)",
          price: "7000 грн",
        },
        {
          title: "Підслизова вазотомія нижніх носових раковин",
          price: "8000 грн",
        },
        {
          title:
            "Ендоскопічна вазотомія з ощадливою конхотомією задніх кінців нижніх носових раковин",
          price: "12000 грн",
        },
        {
          title: "Ендоскопічна септопластика",
          price: "18000 грн",
          link: "/blog/septoplasty-vasotomy/",
        },
        {
          title: "Ендоскопічна гайморотомія однобічна ( з видаленням кісти)",
          price: "15000 грн",
        },
        {
          title:
            "Ендоскопічна гайморотомія однобічна ( з видаленням міцетоми/стороннього тіла)",
          price: "18000 грн",
        },
        {
          title:
            "Ендоскопічна шейверна полісинусотомія однобічна",
          price: "Від 20000 грн",
        },
        {
          title: "Розсічення синехій порожнини носа у дорослого",
          price: "Від 4000 до 8000 грн",
        },
        {
          title: "Видалення кісти Торнвальда",
          price: "Від 10000 до 14000 грн",
        },
        {
          title: "Промивання лакун мигдаликів",
          price: "450 грн",
        },
        {
          title: "Продування слухових труб по Політцеру",
          price: "145 грн",
        },
        {
          title: "Вливання в гортань лікарських засобів",
          price: "290 грн",
        },
        {
          title: "Видалення сірчаної пробки 1 вухо",
          price: "350 грн",
        },
        {
          title: "Туалет носа",
          price: "350 грн",
        },
        {
          title: "Туалет вуха",
          price: "350 грн",
        },
        {
          title:
            "Катеризація слухової труби з введенням лікарських засобів (з однієї сторони)",
          price: "400 грн",
        },
        {
          title: "Тимпанопункція",
          price: "650 грн",
        },
        {
          title: "Пункція верхньощелепної пазухи",
          price: "800 грн",
        },
        {
          title: "ПХО рани",
          price: "від 800 грн",
        },
        {
          title:
            "Хемокаустика (припікання) судин носа, що кровоточать (трихлороцтовою кислотою)",
          price: "500 грн",
        },
        {
          title: "Діатермокоагуляція судин носа",
          price: "700 грн",
        },
        {
          title: "Передня тампонада носа тампоном «мероцель», 1 тампон",
          price: "400 грн",
        },
        {
          title: "Передня тампонада носа марлевим тампоном",
          price: "300 грн",
        },
        {
          title: "Видалення тампонів з носа",
          price: "300 грн",
        },
        {
          title: "Видалення чужорідного тіла з порожнини носа, глотки, вуха",
          price: "500 грн",
        },
        {
          title: "Видалення доброякісних новоутворень ЛОР-органів",
          price: "від 1200 грн",
        },
        {
          title: "Розтин паратонзилярного або парафаренгіального абсцесу",
          price: "1200 грн",
        },
        {
          title: "Ревізія абсцесу",
          price: "500 грн",
        },
        {
          title:
            "Розтин фурункулів зовнішнього носа або зовнішнього вуха, розтин кісти піднебінного мидалика І кат.",
          price: "500 грн",
        },
        {
          title:
            "Розтин фурункулів зовнішнього носа або зовнішнього вуха, розтин кісти піднебінного мигдалика ІІ кат.",
          price: "800 грн",
        },
        {
          title: "Ревізія фурункула",
          price: "300 грн",
        },
        {
          title: "Міринготомія/парацентез",
          price: "1000 грн",
        },
        {
          title: "Взяття біопсії з носа, без вартості ПГД",
          price: "від 650 грн",
        },
        {
          title: "Взяття біопсії з глотки, без вартості ПГД",
          price: "650 грн",
        },
        {
          title: "Розкриття гематоми вуха, носу",
          price: "700 грн",
        },
        {
          title:
            "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
          price: "2500 грн",
        },
        {
          title: "Загальний наркоз з інтубацією (перша година)",
          price: "3000 грн",
        },
        {
          title: "Кожна наступна година наркозу з інтубацією",
          price: "1200 грн",
        },
        {
          title: "Спинномозкова анестезія (перша година)",
          price: "2800 грн",
        },
        {
          title: "Кожна наступна година спинномозкової анестезії",
          price: "1000 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_NEUROLOGY_ROUTE,
    metaTitle: "Клініка неврології, Чернігів | Filada",
    metaDescription:
      "Неврологічна допомога в клініці Filada ⭐ лікування головного болю, невритів, остеохондрозу. Консультації та обстеження ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/neurology/",
    coverDescription: "Неврологія",
    abouteTitle: "Невролог в Чернігові",
    doctorName: "Лікар-невролог Юлія Косенко",
    serviceFormName: "Неврологія",
    seoText: textNeurology,
    abouteTexts: [
      "Неврологія – це галузь медицини, яка відповідає за діагностику та лікування різноманітних захворювань центральної та периферичної нервової системи.",
      "Неврологічні захворювання дуже розповсюджені серед населення, мають дуже багато різноманітних проявів та симптомів. І лише кваліфікований лікар-невролог може встановити правильний діагноз та призначити ефективне лікування, спираючись на сучасні міжнародні рекомендації.",
      "Саме в медичному центрі Філада ви можете отримати всю необхідну допомогу.",
    ],
    aboutePhotos: [lorOne, proctoTwo, neuroThree],
    doctorPath: "/doctors/yulia-kosenko",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація лікаря – невролога",
          price: "700 грн",
        },
        {
          title: "Повторна консультація лікаря – невролога (протягом 2 тижнів)",
          price: "500 грн",
        },
        {
          title:
            "Лікування больових синдромів при хронічній Мігрені з використанням ботоксу Ксеомін (ціна залежить від кількості використаного препарату)",
          price: "від 9000 до 12000 грн",
        },
        {
          title: "Лікування бруксизму (Ксеомін)",
          price: "від 7000 до 9000 грн",
        },
        {
          title:
            "Лікування нейрогенного болю (постгерпетична невралгія, тригемінальна невралгія, діабетична полінейропатія) 25 Од Ксеоміну",
          price: "2750 грн",
        },
        {
          title:
            "Лікування нейрогенного болю (постгерпетична невралгія, тригемінальна невралгія, діабетична полінейропатія) 50 Од Ксеоміну",
          price: "4000 грн",
        },
        {
          title:
            "Лікування нейрогенного болю (постгерпетична невралгія, тригемінальна невралгія, діабетична полінейропатія) 75 Од Ксеоміну",
          price: "5250 грн",
        },
        {
          title:
            "Лікування нейрогенного болю (постгерпетична невралгія, тригемінальна невралгія, діабетична полінейропатія) 100 Од Ксеоміну",
          price: "6500 грн",
        },
        {
          title:
            "Лікування міофасціального синдрому (блокада тригерних точок, одна точка) 5 Од Ксеоміну",
          price: "400 грн",
        },
        {
          title: "Лікування фантомних болей 150 Од Ксеоміну",
          price: "9000 грн",
        },
        {
          title: "Лікування фантомних болей 200 Од Ксеоміну",
          price: "12000 грн",
        },
        {
          title: "Лікування фантомних болей 250 Од Ксеоміну",
          price: "14500 грн",
        },
        {
          title: "Лікування  болей в куксі 150 Од Ксеоміну",
          price: "9000 грн",
        },
        {
          title: "Лікування  болей в куксі 200 Од Ксеоміну",
          price: "12000 грн",
        },
        {
          title: "Лікування  болей в куксі 250 Од Ксеоміну",
          price: "14500 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_ENDOCRINOLOGY_ROUTE,
    metaTitle: "Клініка ендокринології, Чернігів | Filada",
    metaDescription:
      "Ендокринолог у клініці Filada ⭐ лікування щитоподібної залози, діабету та гормональних порушень. Сучасна діагностика ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/endocrinology/",
    coverDescription: "Ендокринологія",
    abouteTitle: "Ендокринолог в Чернігові",
    doctorName: "Лікар-ендокринолог Валентина Титоренко",
    serviceFormName: "Ендокринологія",
    seoText: textEndocrinology,
    abouteTexts: [
      "Ласкаво просимо на сторінку, присвячену ендокринології в Чернігові! Медичний центр Філада пропонує високоякісні медичні послуги для діагностики та лікування захворювань ендокринної системи.",
      "Наші лікарі спеціалізуються на лікуванні цукрового діабету, захворювань щитоподібної залози, гормональних розладів та інших ендокринних проблем. Ми використовуємо сучасні методи діагностики, включаючи лабораторні дослідження та ультразвукову діагностику.",
      "В медичному центрі Філада ми використовуємо тільки сучасні та перевірені методи лікування.",
    ],
    aboutePhotos: [endoOne, endoTwo, endoThree],
    doctorPath: "/doctors/tytorenko-valentyna",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація ендокринолога",
          price: "700 грн",
        },
        {
          title: "Повторна консультація ендокринолога (протягом 1 місяця)",
          price: "500 грн",
        },
        {
          title: "Консультація ендокринолога + УЗД щитоподібної залози",
          price: "900 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_DIETICS_NUTRITION_ROUTE,
    metaTitle:
      "Послуги дієтолога, Чернігів | Filada",
    metaDescription:
      "Дієтолог чи нутріціолог у Filada допоможе скласти план харчування, скинути вагу, скоригувати метаболізм. Здоровий підхід у Чернігові ✔️тел.063-503-04-72",
    coverDescription: "Дієтологія/Нутріціологія",
    abouteTitle: "Дієтолог/нутріціолог в Чернігові",
    doctorName: "Лікар-дієтолог Валентина Титоренко",
    serviceFormName: "Дієтологія/Нутріціологія",
    seoText: textDieteticsNutrition,
    abouteTexts: [
      "Ласкаво просимо на нашу сторінку, присвячену дієтології та нутриціології! Важливість здорового харчування важко переоцінити, адже саме від нього залежать наше самопочуття, енергія та загальний стан здоров'я.",
      "Дієтологія – це наука про харчування, яка вивчає, як їжа впливає на організм. Дієтологи допомагають людям розробити індивідуальні плани харчування, що відповідають їхнім потребам, здоров'ю та способу життя.",
      "Нутриціологія фокусується на ролі харчових речовин, їхніх функціях та взаємодії в організмі. Нутриціологи аналізують, як різні складові їжі впливають на здоров'я та розвиток захворювань.",
    ],
    aboutePhotos: [dietOne, dietTwo, dietThree],
    doctorPath: "/doctors/tytorenko-valentyna",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація дієтолога (нутриціолога)",
          price: "700 грн",
        },
        {
          title:
            "Повторна консультація дієтолога (нутриціололга) (протягом 1 місяця)",
          price: "500 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_SURGERY_ROUTE,
    metaTitle: "Послуги хірурга в Чернігові | Filada",
    metaDescription:
      "Хірургічне лікування у клініці Filada в Чернігові ⭐ планові та амбулаторні операції, професійний підхід, консультації лікаря ✔️тел.063-503-04-72",
    metaUrl: "https://filada.com.ua/surgery/",
    coverDescription: "Хірургія",
    abouteTitle: "Хірург в Чернігові",
    doctorName: "Лікар-хірург Євген Івашин",
    serviceFormName: "Хірургія",
    seoText: textSurgery,
    abouteTexts: [
      "Хірургія в Чернігові може бути комфортною та доступною.   Хірургічне лікування доброякісних новоутворень шкіри та підшкірної клітковини, лікування кил білої лінії живота, пахових та пупкових кил та інші операції вже доступні в нашому медичному центрі ФІЛАДА",
      "Індивідуальний підхід до кожного пацієнта. Довіра до лікаря – запорука успішного лікування. Саме тому в медичному центрі ФІЛАДА кожен пацієнт отримує персональну консультацію та комплексний супровід на всіх етапах лікування. Наші фахівці приділяють особливу увагу не тільки медичній складовій, а й психологічній підтримці, щоб кожен відчував себе комфортно та впевнено.",
      "Запрошуємо вас відвідати наш медичний центр та переконатися у високій якості наших послуг. Зверніться за консультацією вже сьогодні – довірте своє здоров’я професіоналам, які завжди піклуються про вас!",
    ],
    aboutePhotos: [surgeryOne, proctoTwo, surgeryThree],
    doctorPath: "/doctors/eugen-ivashyn",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація хірурга",
          price: "700 грн",
        },
        {
          title: "Повторна консультація хірурга (протягом 2 місяців)",
          price: "500 грн",
        },
        {
          title:
            "Видалення дрібних елементів (папілом, точкових гемангіом тощо) радіохвильовим методом – 1 утворення",
          price: "400 грн",
        },
        {
          title:
            "Видалення дрібних елементів (папілом, точкових гемангіом тощо) радіохвильовим методом – 3 утворення",
          price: "800 грн",
        },
        {
          title:
            "Видалення дрібних елементів (папілом, точкових гемангіом тощо) радіохвильовим методом – 5 утворень",
          price: "1100 грн",
        },
        {
          title:
            "Видалення дрібних елементів (папілом, точкових гемангіом тощо) радіохвильовим методом – 10 утворень і більше",
          price: "2200 грн",
        },
        {
          title:
            "Видалення доброякісних новоутворень шкіри та підшкірної клітковини І категорії",
          price: "2000 грн",
        },
        {
          title:
            "Видалення доброякісних новоутворень шкіри та підшкірної клітковини ІІ категорії",
          price: "3000 грн",
        },
        {
          title:
            "Видалення доброякісних новоутворень шкіри та підшкірної клітковини ІІІ категорії",
          price: "4000 грн",
        },
        {
          title: "Корекція рубця хірургічна (травматичні, післяопераційні)",
          price: "від 5000 грн",
        },
        {
          title: "Зняття швів",
          price: "500 грн",
        },
        {
          title: "Обробка рани (ПХО)",
          price: "600 грн",
        },
        {
          title: "Обробка рани (ПХО) з накладанням швів",
          price: "1000 грн",
        },
        {
          title: "Розтин абсцесу, фурункулу І категорії",
          price: "1500 грн",
        },
        {
          title: "Розтин абсцесу, фурункулу ІІ категорії",
          price: "2500 грн",
        },
        {
          title: "Хірургічне лікування панарицію",
          price: "1500 грн",
        },
        {
          title: "Хірургічне лікування пароніхію",
          price: "1200 грн",
        },
        {
          title:
            "Хірургічне лікування при врослому нігті (крайова резекція з одного боку)",
          price: "1200 грн",
        },
        {
          title:
            "Хірургічне лікування при врослому нігті (крайова резекція з двох боків)",
          price: "1800 грн",
        },
        {
          title: "Хірургічне лікування пупкової кили",
          price: "6500 грн",
        },
        {
          title: "Хірургічне лікування кили білої лінії живота",
          price: "6500 грн",
        },
        {
          title: "Хірургічне лікування пахової кили",
          price: "8500 грн",
        },
        {
          title:
            "Патогістологічне дослідження видаленого новоутворення 1-2 категорії складності (до 3 утворень включно)",
          price: "1200 грн",
        },
        {
          title:
            "Патогістологічне дослідження видаленого новоутворення 3 категорії складності (до 3 утворень включно)",
          price: "1400 грн",
        },
        {
          title:
            "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
          price: "2500 грн",
        },
        {
          title: "Загальний наркоз з інтубацією (перша година)",
          price: "3000 грн",
        },
        {
          title: "Кожна наступна година наркозу з інтубацією",
          price: "1200 грн",
        },
        {
          title: "Спинномозкова анестезія (перша година)",
          price: "2800 грн",
        },
        {
          title: "Кожна наступна година спинномозкової анестезії",
          price: "1000 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_ULTRASOUND_DIAGNOSTICS_ROUTE,
  metaTitle: "Медичний Центр Філада Чернігів | УЗ діагностика Ціни",
  metaDescription: "УЗ діагностика Чернігів. Сучасні рішення у УЗ діагностиці. Filada - Сучасний медичний центр у Чернігові",
  metaUrl: "https://filada.com.ua/ultrasound-diagnostics/",
    coverDescription: "УЗ діагностика",
    doctorName: "Лікар-ендокринолог Валентина Титоренко",
    abouteTitle: "Ультразвукова діагностика (УЗД) в Чернігові",
    serviceFormName: "Ультразвукова діагностика (УЗД)",
    abouteTexts: [
      "Шукаєте, де в Чернігові зробити швидке і точне уз обстеження без черг? В медичному центрі ФІЛАДА працює кабінет УЗД.",
      "Тут ви отримаєте якісне ультразвукове обстеження на сучасному обладнанні, з точними результатами та поясненнями від кваліфікованих лікарів.",
      "Клініка працює щодня з 8:00 до 20:00.",
      "Апаратне обстеження органів можна пройти під час консультації або за попереднім записом.",
    ],
    seoText: ultraSoundDiagnosticsText,
    aboutePhotos: [
      UZDiagnosticOne,
      UZDiagnosticTwo,
      UZDiagnosticThree,
    ],
    doctorPath: "/doctors/tytorenko-valentyna",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "УЗД нирок",
          price: "400 грн",
        },
        {
          title: "УЗД сечового міхура",
          price: "400 грн",
        },
        {
          title: "УЗД нирок та сечового міхура",
          price: "650 грн",
        },
        {
          title: "УЗД органів черевної порожнини",
          price: "500 грн",
        },
        {
          title: "УЗД передміхурової залози",
          price: "400 грн",
        },
        {
          title: "УЗД нирок, сечового міхура та передміхурової залози",
          price: "700 грн",
        },
        {
          title: "УЗД щитоподібної залози",
          price: "400 грн",
        },
        {
          title: "УЗД органів малого тазу (трансабдомінально)",
          price: "400 грн",
        },
        {
          title: "УЗД органів малого тазу (трансвагінально)",
          price: "500 грн",
        },
        {
          title: "УЗД молочних залоз",
          price: "550 грн",
        },
        {
          title: "Дуплексне (триплексне) сканування судин  шиї",
          price: "500 грн",
        },
        {
          title: "УЗД серця (ЕХО КС)",
          price: "650 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_ORTHOPEDICS_TRAUMATOLOGY_ROUTE,
  metaTitle: "Клініка ортопедії і травматології, Чернігів | Filada",
  metaDescription: "Медична консультація травматолога та ортопеда у клініці Filada ⭐️ Сучасні методики лікування опорно-рухового апарату, досвідчені лікарі, обстеження та реабілітація. ⭐️Запис на прийом у Чернігові за тел.063-503-04-72",
  metaUrl: "https://filada.com.ua/orthopedics-traumatology/",
    coverDescription: "Ортопедія та травматологія",
    doctorName: "Лікар-ортопед-травматолог Ігор Небрат",
    abouteTitle: "Ортопедія та травматологія в Чернігові",
    serviceFormName: "Ортопедія та травматологія",
    abouteTexts: [
      "Консультація ортопеда травматолога потрібна при проблемах опорно-рухового апарату. За отриманням професійних послуг варто звернутися у медичний центр Filada, де працюють кваліфіковані лікарі. Наша мета – відновити рухливість, зменшити біль та підвищити якість життя пацієнтів. В нашому медичному центрі  ви можете виконати артроскопію колінного суглобу на сучасному медичному обладнанні німецького виробництва в умовах комфортного стаціонару.",
      "В нашому медичному центрі ви зможете отримати якісні медичні послуги за напрямком ортопедія та травматологія. Оперативні втручаеня на консультації проводять досвідчені лікарі, які виконують широкий спектр маніпуляцій та оперативних втручань на сучасному обладнанні.",
    ],
    seoText: orthopedicsTraumatologyText,
    aboutePhotos: [
      ortopedTravmatOne,
      ortopedTravmatTwo,
      ortopedTravmatThree,
    ],
    doctorPath: "/doctors/ighor-nebrat",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація ортопеда-травматолога",
          price: "700 грн",
        },
        {
          title: "Консультація ортопеда-травматолога повторна (протягом 2 місяців)",
          price: "500 грн",
        },
        {
          title: "Внутрішньосуглобове (внутрішньотканинне) введення плазми, збагаченої тромбоцитами (PRP) дрібний суглоб",
          price: "2000 грн",
        },
        {
          title: "Внутрішньосуглобове (внутрішньотканинне) введення плазми, збагаченої тромбоцитами (PRP) великий суглоб",
          price: "2200 грн",
        },
        {
          title: "Внутрішньосуглобове введення препаратів (Депос)",
          price: "800 грн",
        },
        {
          title: "Параартикулярна блокада",
          price: "800 грн",
        },
        {
          title: "Внутрішньосуглобове введення  гіалуронової кислоти (Promovia 40 мг /4 мл) з вартістю препарату",
          price: "4900 грн",
        },
        {
          title: "Внутрішньосуглобове введення гіалуронової кислоти(Promovia 60 мг /4 мл) з вартістю препарату",
          price: "5900 грн",
        },
        {
          title: "Введення розчину пептидів колагену ARTHRYS (4мг/2мл) з вартістю препарату",
          price: "7000 грн",
        },
        {
          title: "Введення розчину пептидів колагену Arthrys (5мг/1мл) з вартістю препарату",
          price: "7500 грн",
        },
        {
          title: "Введення розчину пептидів колагену ARTHRYS (10мг/2мл) з вартістю препарату",
          price: "9000 грн",
        },
        {
          title: "Артроскопія колінного суглобу",
          price: "24000 грн",
        },
         {
          title: "Ендопротезування суглобу (без вартості протезу)",
          price: "48000 грн",
        },
        {
          title: "Хірургічне лікування контрактури Дюпюїтрена",
          price: "10000 грн",
        },
        {
          title: "Видалення металофіксаторів з кисті та/або стопи",
          price: "10000 грн",
        },
        {
          title: "Хірургічне лікування хвороби Нотта",
          price: "8000 грн",
        },
        {
          title: "Сакральна блокада",
          price: "1800 грн",
        },
        {
          title: "Металоостеосинтез (без вартості металоконструкції)",
          price: "10000 грн",
        },
        {
          title: "Хірургічне лікування вальгусної деформації І пальця стопи",
          price: "10000 грн",
        },
        {
          title:
            "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
          price: "2500 грн",
        },
        {
          title: "Загальний наркоз з інтубацією (перша година)",
          price: "3000 грн",
        },
        {
          title: "Кожна наступна година наркозу з інтубацією",
          price: "1200 грн",
        },
        {
          title: "Спинномозкова анестезія (перша година)",
          price: "2800 грн",
        },
        {
          title: "Кожна наступна година спинномозкової анестезії",
          price: "1000 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_VASCULAR_SURGERY_ROUTE,
  metaTitle: "Судинний хірург, Чернігів | Filada",
  metaDescription: "Судинна хірургія у Чернігові. Консервативні та оперативні методи лікування судин. ⭐Запис на прийом за тел.063-503-04-72",
  metaUrl: "https://filada.com.ua/vascular-surgery/",
    coverDescription: "Судинна хірургія",
    doctorName: "Лікар-судинний хірург Олександр Подоляк",
    abouteTitle: "Хірург судинний в Чернігові",
    serviceFormName: "Судинна хірургія",
    abouteTexts: [
      "Для лікування варикозу, тромбозу та інших захворювань потрібен професійний судинний хірург Чернігів.",
      "Якщо у вас є проблеми з кровообігом, то медичний центр Filada завжди готовий допомогти з їх вирішенням. Ми пропонуємо індивідуальний підхід до кожного пацієнта.",
    ],
    seoText: vascularSurgeryText,
    aboutePhotos: [
      vascularOne,
      vascularTwo,
      vascularThree,
    ],
    doctorPath: "/doctors/oleksandr-podolyak",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація судинного хірурга",
          price: "700 грн",
        },
        {
          title: "Консультація судинного хірурга повторна (протягом 2 місяців)",
          price: "500 грн",
        },
        {
          title: "Консультація судинного хірурга + дуплексне (триплексне) сканування артерій нижніх кінцівок",
          price: "1200 грн",
        },
        {
          title: "Консультація судинного хірурга + дуплексне (триплексне) сканування вен нижніх кінцівок",
          price: "1200 грн",
        },
        {
          title: "Консультація судинного хірурга + дуплексне (триплексне) сканування артерій та вен нижніх кінцівок",
          price: "1600 грн",
        },
        {
          title: "Обробка рани (ПХО), перевʼязка",
          price: "800 грн",
        },
        {
          title: "PRP терапія трофічних виразок (2 пробірки)",
          price: "2400 грн",
        },
        {
          title: "Мікросклеротерапія",
          price: "1000 грн",
        },
        {
          title: "Склеротерапія (одна зона)",
          price: "1500 грн",
        },
        {
          title: "Склеротерапія (однієї кінцівки)",
          price: "3200 грн",
        },
        {
          title: "Склеротерапія (двох кінцівок)",
          price: "4500 грн",
        },
        {
          title: "Мініфлебектомія",
          price: "6000 грн",
        },
        {
          title: "РЧА однієї нижньої кінцівки (система ClosureFast (Medtronic)",
          price: "22000 грн",
        },
        {
          title: "РЧА двох нижніх кінцівок (система ClosureFast (Medtronic)",
          price: "26000 грн",
        },
        {
          title: "РЧА однієї нижньої кінцівки (система ClosureFast (Medtronic) + мініфлебектомія за Мюллер",
          price: "24000 грн",
        },
        {
          title: "РЧА двох нижніх кінцівок (система ClosureFast (Medtronic) + мініфлебектомія за Мюллер",
          price: "27000 грн",
        },
        {
          title: "Кросектомія та стрипінг з мінідоступів (флебектомія) 1 категорія",
          price: "22000 грн",
        },
        {
          title: "Кросектомія та стрипінг з мінідоступів (флебектомія) 2 категорія",
          price: "24000 грн",
        },
        {
          title:
            "Медикаментозний супровід при оперативному лікуванні (внутрішньовенна анестезія)",
          price: "2500 грн",
        },
        {
          title: "Загальний наркоз з інтубацією (перша година)",
          price: "3000 грн",
        },
        {
          title: "Кожна наступна година наркозу з інтубацією",
          price: "1200 грн",
        },
        {
          title: "Спинномозкова анестезія (перша година)",
          price: "2800 грн",
        },
        {
          title: "Кожна наступна година спинномозкової анестезії",
          price: "1000 грн",
        },
      ],
    },
  },
  {
    path: SERVICE_CARDIOLOGY_ROUTE,
    metaTitle: "Кардіолог у Чернігові | Filada",
    metaDescription:
      "Кардіолог у медичному центрі Filada ⭐ діагностика серцево-судинних захворювань, ЕКГ, УЗД серця. Запис у Чернігові ✔️063-503-04-72",
    metaUrl: "https://filada.com.ua/cardiology/",
    coverDescription: "Кардіологія",
    abouteTitle: "Кардіолог в Чернігові",
    serviceFormName: "Кардіологія",
    doctorName: "Лікар-кардіолог Богдан Гришко",
    abouteTexts: [
      "Кардіологія займається діагностикою, лікуванням та профілактикою захворювань серцево-судинної системи.",
      "У медичному центрі Filada пацієнти отримують сучасну кардіологічну допомогу з індивідуальним підходом та точними методами обстеження.",
    ],
    seoText: textCardiology,
    aboutePhotos: [
      cardiologyOne,
      cardiologyTwo,
      cardiologyThree,
    ],
    doctorPath: "/doctors/bohdan-hryshko",
    pricesObj: {
      isComplicated: false,
      services: [
        {
          title: "Консультація кардіолога",
          price: "700 грн",
        },
        {
          title:
            "Повторна консультація кардіолога (протягом 1 місяця)",
          price: "500 грн",
        },
        {
          title: "Консультація кардіолога + УЗД серця",
          price: "1200 грн",
        },
        {
          title:
            "Консультація кардіолога + УЗД серця + ЕКГ",
          price: "1300 грн",
        },
      ],
    },
  },
];
