import React from "react";
import Button from "~/UI/button";
import RightArrowImg from "~/assets/icons/products/arrow-right.svg";
import styles from "./product-item.module.scss";

const ProductItem = (props: { product: any }) => {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.image_wrapper}>
          <img
            src={props.product.src}
            className={styles.product_img}
            alt={props.product.alt}
          />
        </div>
        <div className={styles.text_wrapper}>
          <h3 className={styles.title}>{props.product.title}</h3>
          <p className={styles.description}>{props.product.description}</p>
        </div>
        <Button onClick={() => {}} addedClasses={styles.product_btn}>
          <RightArrowImg />
        </Button>
      </div>
    </>
  );
};

export default ProductItem;
