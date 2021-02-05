import React, { ReactNode, useState } from "react";
import Header from "~/components/header";
import styles from "./layout.module.scss";
import SideBar from "~/components/header/side-bar";
import Footer from "~/components/footer";

const Layout = (props: { children: ReactNode | HTMLElement }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <Header
        show={showMenu}
        onToggleMenu={() => {
          setShowMenu((old) => !old);
        }}
      />
      <SideBar
        show={showMenu}
        onClose={() => {
          setShowMenu(false);
        }}
      />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
