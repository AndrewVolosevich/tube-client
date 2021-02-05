import React from "react";
import { FeatureItem } from "~/interfaces/utility-types";

import GearsImg from "~/assets/icons/home/features/gears.svg";
import RefreshImg from "~/assets/icons/home/features/refresh.svg";
import LikeImg from "~/assets/icons/home/features/like.svg";
import StarImg from "~/assets/icons/home/features/star.svg";

import UsersImg from "~/assets/icons/home/features/users.svg";
import TruckImg from "~/assets/icons/home/features/truck.svg";
import MoneyImg from "~/assets/icons/home/features/money.svg";
import HappyImg from "~/assets/icons/home/features/happy.svg";

import FlagImg from "~/assets/icons/order/flag.svg";
import CartImg from "~/assets/icons/order/cart.svg";
import CommentImg from "~/assets/icons/order/comment.svg";
import CaseImg from "~/assets/icons/order/case.svg";

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

export const getOrderFeatures = (): FeatureItem[] => {
  return [
    {
      title: `Работаем быстрее конкурентов!`,
      description: `Расчет стоимости заказа за 1 день`,
      image: <FlagImg />,
    },
    {
      title: `Лёгкость в общении`,
      description: `С нами легче договориться чем с крупными компаниями`,
      image: <CommentImg />,
    },
    {
      title: `Минимальный объём заказа от 100 штук`,
      description: `Это конечно можно обсудить...`,
      image: <CartImg />,
    },
    {
      title: `Сотрудничество`,
      description: `Сотрудничаем с типографиями и рекламными агентствами`,
      image: <CaseImg />,
    },
  ];
};
