import React, { ReactNode } from "react";
import styles from "./half-page.module.scss";

const HalfPageContainer = (props: { children: ReactNode }) => {
  return (
    <>
      <section className={styles.container}>{props.children}</section>
    </>
  );
};

export default HalfPageContainer;
