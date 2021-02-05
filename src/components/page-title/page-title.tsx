import React from "react";
import Container from "~/UI/containers/container";
import styles from "./page-title.module.scss";

const PageTitle = (props: { title: string }) => {
  return (
    <>
      <section className={styles.wrapper}>
        <Container>
          <h1 className={styles.title}>{props.title}</h1>
        </Container>
      </section>
    </>
  );
};

export default PageTitle;
