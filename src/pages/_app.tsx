import React from "react";
import { wrapper } from "../stores/rootStore";
import { AppProps } from "next/app";

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
