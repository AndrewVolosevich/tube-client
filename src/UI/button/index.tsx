import React, { ReactElement } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

const Button = (props: {
  onClick?: () => void;
  color?: "main" | "secondary";
  size?: "wide" | "normal";
  fashion?: "fill" | "stroke";
  type?: "submit" | "button";
  text?: string;
  disabled?: boolean;
  addedClasses?: string;
  children?: ReactElement;
}) => {
  const buttonClasses = classNames(styles.button, props.addedClasses, {
    [styles.wide]: props.size === "wide",
    [styles.stroke]: props.fashion === "stroke",
    [styles.main_color]: props.color === "main",
    [styles.disabled]: props.disabled,
  });
  return (
    <>
      <button
        className={buttonClasses}
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
        {props.text}
      </button>
    </>
  );
};

export default Button;
