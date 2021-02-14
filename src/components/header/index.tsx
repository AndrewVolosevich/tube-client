import React from "react";
import styles from "./header.module.scss";
import HamburgerImg from "~/assets/icons/header/hamburger.svg";
import Link from "next/link";
import Container from "~/UI/containers/container";
import HeaderLinks from "~/components/header/header-links";
import { useSelector } from "react-redux";
import { RootState } from "~/interfaces/store-types";

const Header = (props: { show: boolean; onToggleMenu: () => void }) => {
  const width = useSelector((state: RootState) => state.mainStore.width);
  return (
    <header className={styles.header}>
      <Container addedClasses={styles.added_classes}>
        <Link href={"/"}>
          <a className={styles.logo}>Logo</a>
        </Link>
        {width <= 750 ? (
          <button className={styles.menu_btn} onClick={props.onToggleMenu}>
            <HamburgerImg />
          </button>
        ) : (
          <HeaderLinks />
        )}
      </Container>
    </header>
  );
};

export default Header;
