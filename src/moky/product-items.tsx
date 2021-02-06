import { ProductItem } from "~/interfaces/utility-types";

export const getProductsItems = (): ProductItem[] => {
  return [
    {
      title: `Тубусы для алкоголя`,
      description: `Картонные тубусы обладают особым шармом и приятным дизайном, что чрезвычайно важно для правильной подачи и презентации ароматного напитка.`,
      src: "./products/drinks.jpg",
    },
    {
      title: `Тубусы для праздничной продукции`,
      description: `Замечательная упаковка для придания особого шарма вашим подаркам`,
      src: "./products/holiday.jpg",
    },
    {
      title: `Тубусы для бытовой химии и сыпучих продуктов`,
      description: `Картонные упаковочные тубусы можно использовать для упаковки различной насыпной продукции.`,
      src: "./products/loose.jpg",
    },
  ];
};
