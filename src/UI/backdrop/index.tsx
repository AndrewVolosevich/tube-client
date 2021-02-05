import React from "react";
import classNames from "classnames";
import styles from "./backdrop.module.scss";

const BackDrop = (props: {
  show: boolean;
  onClick: () => void;
  backdropClasses?: string;
  zIndex?: number;
  backdropId?: string;
}) => {
  const backdropClasses = classNames(styles.back, props.backdropClasses, {
    [styles.show]: props.show,
  });
  return (
    <div
      className={backdropClasses}
      onClick={props.onClick || null}
      style={{ zIndex: props.zIndex }}
      id={props.backdropId}
    />
  );
};

export default BackDrop;
