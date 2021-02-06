import React from "react";
import Layout from "~/components/layout";
import Container from "~/UI/containers/container";
import styles from "~/styles/contacts.module.scss";
import MarkerImg from "~/assets/icons/contacts/marker.svg";
import PhoneImg from "~/assets/icons/contacts/phone.svg";
import MailImg from "~/assets/icons/contacts/mail.svg";
import PageTitle from "~/components/page-title/page-title";
import HalfPageContainer from "~/UI/containers/half-page";
import FeedbackForm from "~/components/feedback-form";

const ContactsPage = () => {
  return (
    <Layout>
      <PageTitle title={"Контакты"} />
      <Container>
        <div className={styles.info}>
          <div className={styles.info_item}>
            <MarkerImg className={styles.info_img} />
            <p className={styles.info_text}>
              <b>Офис и Производство:</b>
              {` 194021, Санкт-Петербург, Институтский пер, д.3`}
            </p>
          </div>
          <div className={styles.info_item}>
            <PhoneImg className={styles.info_img} />
            <a href="tel:+375295681664" className={styles.tel}>
              +375 29 568 16 64
            </a>
          </div>
          <div className={styles.info_item}>
            <MailImg className={styles.info_img} />
            <a href="mailto:test@gmail.com" className={styles.tel}>
              test@gmail.com
            </a>
          </div>
        </div>
      </Container>
      <HalfPageContainer>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0887d24463875e33c0f03c6a657dbb4b0c686e5d571f026ada396b0270bd9963&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          />
        </div>
        <div>
          <FeedbackForm />
        </div>
      </HalfPageContainer>
      <br />
    </Layout>
  );
};

export default ContactsPage;
