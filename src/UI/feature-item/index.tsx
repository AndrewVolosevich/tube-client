import React from "react";
import styles from "./feature-item.module.scss";

const FeatureItem = (props: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <div className={styles.item_wrapper}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.image_wrapper}>{props.image}</div>
    </div>
  );
};

export default FeatureItem;
