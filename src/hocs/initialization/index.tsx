import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import InitLoader from "~/components/init-loader";
import { setWidth } from "~/stores/main/actions";

const Initialization = (props: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const handleResize = () => {
    dispatch(setWidth(window.innerWidth));
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isInit = true;
  return <>{isInit ? props.children : <InitLoader />}</>;
};
export default Initialization;
