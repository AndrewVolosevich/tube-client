import { MenuItem } from "~/interfaces/utility-types";

export const getMenuItems = (): MenuItem[] => {
  return [
    {
      title: `Главная`,
      path: "/",
    },
    {
      title: `Наша продукция`,
      path: "/products",
    },
    {
      title: `Заказать`,
      path: "/order",
    },
    {
      title: `Контакты`,
      path: "/contacts",
    },
  ];
};
