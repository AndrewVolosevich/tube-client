import React, { ReactNode } from "react";
import InitLoader from "~/components/init-loader";

const Initialization = (props: { children: ReactNode }) => {
  const isInit = true;
  return <>{isInit ? props.children : <InitLoader />}</>;
};
export default Initialization;
