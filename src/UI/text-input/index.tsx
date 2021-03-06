import React, { ChangeEvent } from "react";
import styles from "./text-input.module.scss";

const TextInput = (props: {
  name: string;
  label: string;
  value: string | undefined;
  errorMessage?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onBlur?: (
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
            className={styles.scrollBar}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label>{props.label}</label>
        </div>
      ) : (
        <div className={styles.group}>
          <input
            required
            name={props.name}
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
          <span className={styles.highlight} />
          <span className={styles.bar} />
          <label>{props.label}</label>
          <span className={styles.error}>
            {props.errorMessage ? props.errorMessage : " "}
          </span>
        </div>
      )}
    </>
  );
};

export default TextInput;
