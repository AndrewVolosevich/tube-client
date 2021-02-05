import React from "react";
// import { useRouter } from "next/router";
import styles from "./header.module.scss";
import HamburgerImg from "~/assets/icons/header/hamburger.svg";
import Link from "next/link";
import Container from "~/UI/containers/container";

const Header = (props: { show: boolean; onToggleMenu: () => void }) => {
  // const router = useRouter();

  return (
    <header className={styles.header}>
      <Container addedClasses={styles.added_classes}>
        <Link href={"/"}>
          <a className={styles.logo}>Logo</a>
        </Link>
        <button className={styles.menu_btn} onClick={props.onToggleMenu}>
          <HamburgerImg />
        </button>
      </Container>
    </header>
  );
};

export default Header;
