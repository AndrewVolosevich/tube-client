import React from "react";
import Layout from "~/components/layout";
import PageTitle from "~/components/page-title/page-title";
import Container from "~/UI/containers/container";
import { getProductsItems } from "~/moky/product-items";
import ProductItem from "~/UI/product-item";
import styles from "~/styles/products.module.scss";

const products = getProductsItems();

const ProductsPage = () => {
  return (
    <Layout>
      <PageTitle title={`Наша продукция`} />
      <Container>
        <div className={styles.products_wrapper}>
          {products.map((item) => {
            return <ProductItem product={item} />;
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default ProductsPage;
