import React, { ChangeEvent } from "react";
import styles from "./select.module.scss";
import { Option } from "~/interfaces/moky";

const Select = (props: {
  label: string;
  value: string;
  options: Option[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  type?: "text" | "password" | "email" | "tel" | "area" | "number";
}) => {
  return (
    <>
      <div className={styles.group}>
        <select required value={props.value} onChange={props.onChange}>
          <option hidden disabled value="">
            {props.value}
          </option>
          {props.options.map((option, idx) => {
            return (
              <option value={option.value} key={idx}>
                {option.value}
              </option>
            );
          })}
        </select>
        <span className={styles.highlight} />
        <span className={styles.bar} />
        <label>{props.label}</label>
      </div>
    </>
  );
};

export default Select;
