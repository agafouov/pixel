import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Lottie from "lottie-react";
import Crystal from "../../assets/animation/Crystal.json";
import "./style.scss";

export default function Loader() {

  return (
    //     <div className="page">
    //   <div className="container position-relative">
    //     <div className="page__content">
    <div className="page">
      <div className="container position-relative">
        <div className="page__content">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "85vh",
            }}
          >
            <div className="loader">
              <Lottie animationData={Crystal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
