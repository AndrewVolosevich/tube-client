import React, { ReactNode, useState } from "react";
import Header from "~/components/header";
import styles from "./layout.module.scss";
import SideBar from "~/components/header/side-bar";
import Footer from "~/components/footer";
import { useSelector } from "react-redux";
import { RootState } from "~/interfaces/store-types";

const Layout = (props: { children: ReactNode | HTMLElement }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const width = useSelector((state: RootState) => state.mainStore.width);
  return (
    <>
      <Header
        show={showMenu}
        onToggleMenu={() => {
          setShowMenu((old) => !old);
        }}
      />
      {width <= 700 ? (
        <SideBar
          show={showMenu}
          onClose={() => {
            setShowMenu(false);
          }}
        />
      ) : null}
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};
export default Layout;
