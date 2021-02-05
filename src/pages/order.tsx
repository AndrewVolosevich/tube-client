import React from "react";
import Layout from "~/components/layout";
import PageTitle from "~/components/page-title/page-title";
import HalfPageContainer from "~/UI/containers/half-page";
import styles from "~/styles/order.module.scss";
import FeatureItem from "~/UI/feature-item";
import { getOrderFeatures } from "~/moky/feature-items";
import OrderForm from "~/components/order-form";

const features = getOrderFeatures();

const OrderPage = () => {
  return (
    <Layout>
      <PageTitle title={"Заявка на рассчет"} />
      <section className={styles.order}>
        <HalfPageContainer>
          <OrderForm />
          <div className={styles.order_info}>
            <h2 className={styles.title}>
              Отправьте заявку на бесплатный расчет заказа и получите скидку 10%
            </h2>
            <p className={styles.subtitle}>
              Наш менеджер свяжется с вами в течение 20 минут.
            </p>
            <div className={styles.features_wrapper}>
              {features.map((item, idx) => {
                return (
                  <FeatureItem
                    key={idx}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    titleStyle={"stroke"}
                    imgPos={"center"}
                    addedClasses={styles.added_wrapper}
                  />
                );
              })}
            </div>
          </div>
        </HalfPageContainer>
      </section>
    </Layout>
  );
};

export default OrderPage;
