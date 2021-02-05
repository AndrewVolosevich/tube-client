import React from "react";
import classNames from "classnames";
import styles from "./side-bar.module.scss";
import BackDrop from "~/UI/backdrop";
import { getMenuItems } from "~/moky/menu-items";
import SideBarItem from "~/components/header/side-bar/side-bar-item";

const SideBar = (props: { show: boolean; onClose: () => void }) => {
  const sidebarClasses = classNames(styles.sidebar, {
    [styles.show]: props.show,
  });

  const sideBarItems = getMenuItems();

  return (
    <>
      <BackDrop show={props.show} onClick={props.onClose} zIndex={50} />
      <section className={sidebarClasses}>
        {sideBarItems.map((item, idx) => {
          return <SideBarItem item={item} key={idx} />;
        })}
      </section>
    </>
  );
};

export default SideBar;
