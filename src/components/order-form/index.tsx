import React from "react";
import TextInput from "~/UI/text-input";
import { useInput } from "~/hooks/useInput";
import styles from "./order-form.module.scss";
import Button from "~/UI/button";

const OrderForm = () => {
  const heightInput = useInput("");
  const diameterInput = useInput("");
  const labelInput = useInput("");
  const quantityInput = useInput("");
  const nameInput = useInput("");
  const emailInput = useInput("");
  const telInput = useInput("");

  return (
    <>
      <div>
        <form className={styles.form}>
          <TextInput
            label={`Высота, мм`}
            value={heightInput.value}
            onChange={heightInput.onChange}
            type={"number"}
          />
          <TextInput
            label={`Диаметр, мм`}
            value={diameterInput.value}
            onChange={diameterInput.onChange}
          />
          <TextInput
            label={`Этикетка`}
            value={labelInput.value}
            onChange={labelInput.onChange}
          />
          <TextInput
            label={`Колличество, шт`}
            value={quantityInput.value}
            onChange={quantityInput.onChange}
            type={"number"}
          />
          <TextInput
            label={`Имя`}
            value={nameInput.value}
            onChange={nameInput.onChange}
          />
          <TextInput
            label={`Email`}
            value={emailInput.value}
            onChange={emailInput.onChange}
          />
          <TextInput
            type={"tel"}
            label={`Номер телефона`}
            value={telInput.value}
            onChange={telInput.onChange}
          />
          <Button text={"Отправить"} onClick={() => {}} />
        </form>
      </div>
    </>
  );
};

export default OrderForm;
