import React from "react";
import TextInput from "~/UI/text-input";
import { useInput } from "~/hooks/useInput";
import styles from "./feedback-form.module.scss";
import Button from "~/UI/button";

const FeedbackForm = () => {
  const nameInput = useInput("");
  const emailInput = useInput("");
  const telInput = useInput("");
  const textInput = useInput("");

  return (
    <>
      <h2 className={styles.title}>Напишите нам</h2>
      <form className={styles.form}>
        <TextInput
          label={`Имя`}
          name={`name`}
          value={nameInput.value}
          onChange={nameInput.onChange}
        />
        <TextInput
          label={`Email`}
          name={`email`}
          value={emailInput.value}
          onChange={emailInput.onChange}
        />
        <TextInput
          type={"tel"}
          name={`tel`}
          label={`Номер телефона`}
          value={telInput.value}
          onChange={telInput.onChange}
        />
        <TextInput
          label={`Текст сообщения`}
          name={`area`}
          type={"area"}
          value={textInput.value}
          onChange={textInput.onChange}
        />
        <Button text={"Отправить"} onClick={() => {}} />
      </form>
    </>
  );
};

export default FeedbackForm;
