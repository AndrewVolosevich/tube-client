import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer_wrapper}>
        <h2>
          {`Создание и поддержка сайта  —  `}
          <a href="mailto:volosevich1989@gmail.com">volosevich1989@gmail.com</a>
        </h2>
      </footer>
    </>
  );
};

export default Footer;
