import React from "react";
import Layout from "~/components/layout";
import Gallery from "~/UI/gallery";
import HalfPageContainer from "~/UI/containers/half-page";
import { getFeatureItems1, getFeatureItems2 } from "~/moky/feature-items";
import FeatureItem from "~/UI/feature-item";
import styles from "~/styles/index.module.scss";

const images = [
  {
    original: "/main-slider/new-year1.jpg",
    description: "Title 1",
    path: "/page1",
  },
  {
    original: "/main-slider/new-year2.jpg",
    description: "Title 2",
    path: "/page2",
  },
  {
    original: "/main-slider/new-year3.jpg",
    description: "Title 3",
    path: "/page3",
  },
];
const features1 = getFeatureItems1();
const features2 = getFeatureItems2();

const IndexPage = () => {
  return (
    <Layout>
      <Gallery
        items={images}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={false}
        slideDuration={450}
      />

      <HalfPageContainer>
        <div
          className={styles.img_wrapper}
          style={{ backgroundImage: "url(/moks-images/img1.jpg)" }}
        ></div>
        <div className={styles.content_wrapper}>
          {features1.map((item, idx) => {
            return (
              <FeatureItem
                key={idx}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </HalfPageContainer>
      <HalfPageContainer>
        <div className={styles.content_wrapper}>
          {features2.map((item, idx) => {
            return (
              <FeatureItem
                key={idx}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <div
          className={styles.img_wrapper}
          style={{ backgroundImage: "url(/moks-images/img2.jpg)" }}
        ></div>
      </HalfPageContainer>
    </Layout>
  );
};

export default IndexPage;
