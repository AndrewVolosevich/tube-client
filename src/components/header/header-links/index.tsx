import React from "react";
import styles from "./header-links.module.scss";
import { getMenuItems } from "~/moky/menu-items";
import Link from "next/link";

const sideBarItems = getMenuItems();

const HeaderLinks = () => {
  return (
    <>
      <div className={styles.links}>
        {sideBarItems.map((item, idx) => {
          return (
            <Link href={item.path} key={idx}>
              <a className={styles.link}>{item.title}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default HeaderLinks;
