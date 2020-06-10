import React, { Fragment } from "react";
import spider from "./assets/spider.json";
import Lottie from "react-lottie";

const Animation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: spider,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Fragment>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
        style={{ marginRight: "1.4rem" }}
      />
    </Fragment>
  );
};

export default Animation;
