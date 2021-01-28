import React from "react";
import { Offline, Online } from "react-detect-offline";
import { wrapper } from "~/stores/rootStore";
import { AppProps } from "next/app";
import OfflineComponent from "~/components/offline";
import Initialization from "~/hocs/initialization";

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
