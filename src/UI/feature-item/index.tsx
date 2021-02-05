import React from "react";
import classNames from "classnames";
import styles from "./feature-item.module.scss";

const FeatureItem = (props: {
  image: any;
  title: string;
  description?: string;
  imgPos?: "top" | "center";
  titleStyle?: "stroke" | "bold";
  addedClasses?: string;
}) => {
  const wrapperClasses = classNames(styles.item_wrapper, props.addedClasses);
  const imageClasses = classNames(styles.image_wrapper, {
    [styles.center]: props.imgPos === "center",
  });
  const titleClasses = classNames(styles.title, {
    [styles.stroke]: props.titleStyle === "stroke",
  });
  return (
    <div className={wrapperClasses}>
      <h3 className={titleClasses}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={imageClasses}>{props.image}</div>
    </div>
  );
};

export default FeatureItem;
