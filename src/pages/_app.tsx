import React from "react";
// @ts-ignore
import { Offline, Online } from "react-detect-offline";
import { wrapper } from "~/stores/rootStore";
import { AppProps } from "next/app";
import OfflineComponent from "~/components/offline";
import Initialization from "~/hocs/initialization";
import "~/styles/globals.scss";
import "~/styles/theme.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Initialization>
        <Offline>
          <OfflineComponent />
        </Offline>
        <Online>
          <Component {...pageProps} />
        </Online>
      </Initialization>
    </>
  );
};

export default wrapper.withRedux(WrappedApp);
