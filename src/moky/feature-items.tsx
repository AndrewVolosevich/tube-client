import React from "react";
import { FeatureItem } from "~/interfaces/utility-types";
import GearsImg from "~/assets/icons/features/gears.svg";
import RefreshImg from "~/assets/icons/features/refresh.svg";
import LikeImg from "~/assets/icons/features/like.svg";
import StarImg from "~/assets/icons/features/star.svg";
import UsersImg from "~/assets/icons/features/users.svg";
import TruckImg from "~/assets/icons/features/truck.svg";
import MoneyImg from "~/assets/icons/features/money.svg";
import HappyImg from "~/assets/icons/features/happy.svg";

export const getFeatureItems1 = (): FeatureItem[] => {
  return [
    {
      title: `Собственное производство`,
      description: `Наличие всех необходимых станков для обеспечения полного цикла производства.`,
      image: <GearsImg />,
    },
    {
      title: `Полный цикл`,
      description: `Осуществляем полный цикл работ: от разработки дизайна до готового продукта.`,
      image: <RefreshImg />,
    },
    {
      title: `Качество`,
      description: `Высококачественный картон с высокими прочностными характеристиками.`,
      image: <LikeImg />,
    },
    {
      title: `Опыт и оборудование`,
      description: `Новое современное европейское оборудование и квалифицированный персонал. Опыт работы более 6 лет.`,
      image: <StarImg />,
    },
  ];
};

export const getFeatureItems2 = (): FeatureItem[] => {
  return [
    {
      title: `Индивидуальный подход`,
      description: `Гибкие индивидуальные цены для каждого клиента`,
      image: <UsersImg />,
    },
    {
      title: `Бесплатная доставка`,
      description: `100% экономия на доставке для клиентов СПб`,
      image: <TruckImg />,
    },
    {
      title: `Отсрочка платежей`,
      description: `Предоставляем отсрочку платежа уже после 3-й отгрузки!`,
      image: <MoneyImg />,
    },
    {
      title: `Выгода`,
      description: `Цены ниже, чем у крупных конкурентов при том же качестве`,
      image: <HappyImg />,
    },
  ];
};
