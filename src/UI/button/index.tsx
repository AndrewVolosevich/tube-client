import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

const Button = (props: {
  onClick: () => void;
  size?: "wide" | "normal";
  fashion?: "fill" | "stroke";
  type?: "submit" | "button";
  text?: string;
}) => {
  const buttonClasses = classNames(styles.button, {
    [styles.wide]: props.size === "wide",
    [styles.stroke]: props.fashion === "stroke",
  });
  return (
    <>
      <button className={buttonClasses} type={"submit"} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  );
};

export default Button;
