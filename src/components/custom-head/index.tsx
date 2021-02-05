import React from "react";
import Head from "next/head";
import manifest from "../../../public/manifest.json";

const CustomHead = () => {
  return (
    <>
      <Head>
        <link rel="icon" href={"/favicon.ico"} />
        <link rel="manifest" href={"/manifest.json"} />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat-alternates"
          rel="stylesheet"
        />
        <meta name="title" content={manifest.name} />
        <meta name="description" content={manifest.description} />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
        <title>{manifest.name}</title>
      </Head>
    </>
  );
};

export default CustomHead;
