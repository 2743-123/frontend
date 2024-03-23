import React, { useEffect } from "react";
import $ from "jquery";
import {ClipLoader}  from "react-spinners";
import * as animationData from "./loader";
import "./style.css";

const Loader = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    $("body").addClass("loading");
    return () => {
      $("body").removeClass("loading");
    }
  }, []);

  return (
    <div className="loadingPanel d-flex align-items-center lottie">
      <ClipLoader  options={defaultOptions} height={400} width={400} />
    </div>
  )
}

export default Loader;