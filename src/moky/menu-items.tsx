import React from "react";
import { MenuItem } from "~/interfaces/utility-types";
import HomeImg from "~/assets/icons/header/home.svg";
import ProductsImg from "~/assets/icons/header/products.svg";
import ContactsImg from "~/assets/icons/header/contacts.svg";
import OrderImg from "~/assets/icons/header/order.svg";
import UserImg from "~/assets/icons/header/user.svg";

export const getMenuItems = (): MenuItem[] => {
  return [
    {
      title: `Главная`,
      path: "/",
      image: <HomeImg />,
    },
    {
      title: `Наша продукция`,
      path: "/products",
      image: <ProductsImg />,
    },
    {
      title: `Заказать`,
      path: "/order",
      image: <OrderImg />,
    },
    {
      title: `Контакты`,
      path: "/contacts",
      image: <ContactsImg />,
    },
    {
      title: `Вход`,
      path: "/auth",
      image: <UserImg />,
    },
  ];
};
