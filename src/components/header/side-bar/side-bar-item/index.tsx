import React from "react";
import Link from "next/link";
import styles from "./side-bar-item.module.scss";
import { MenuItem } from "~/interfaces/utility-types";

const SideBarItem = (props: { item: MenuItem }) => {
  return (
    <Link href={props.item.path}>
      <a className={styles.link}>
        {props.item.image}
        {props.item.title}
      </a>
    </Link>
  );
};

export default SideBarItem;
