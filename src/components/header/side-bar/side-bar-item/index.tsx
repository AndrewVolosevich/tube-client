import React from "react";
import Link from "next/link";
import styles from "./side-bar-item.module.scss";

const SideBarItem = (props: { item: any }) => {
  return (
    <Link href={props.item.path}>
      <a className={styles.link}>{props.item.title}</a>
    </Link>
  );
};

export default SideBarItem;
