import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./container.module.scss";

const Container = (props: { children: ReactNode; addedClasses?: string }) => {
  const containerClasses = classNames(styles.container, props.addedClasses);
  return (
    <>
      <section className={containerClasses}>{props.children}</section>
    </>
  );
};

export default Container;
