import React, { ChangeEvent } from "react";
import styles from "./text-input.module.scss";

const TextInput = (props: {
  label: string;
  value: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  type?: "text" | "password" | "email" | "tel" | "area" | "number";
}) => {
  return (
    <>
      {props.type === "area" ? (
        <div className={styles.group}>
          <textarea
            required
            value={props.value}
            onChange={props.onChange}
            className={styles.scrollBar}
          />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label>{props.label}</label>
        </div>
      ) : (
        <div className={styles.group}>
          <input
            required
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
          />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label>{props.label}</label>
        </div>
      )}
    </>
  );
};

export default TextInput;
