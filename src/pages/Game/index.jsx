import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Crystal from "../../assets/animation/Crystal.json";
import Lottie from "lottie-react";

function Search() {
  const assetCurrency = "TON";
  const freeze = false;
  return { assetCurrency, freeze };
}

const Game = () => {
  const result = Search();
  const [index, setIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };
  return (
    <div className="lGlN">
      <div className="LUhj">
        <Swiper
          slidesPerView={1}
          initialSlide={
            (result.assetCurrency === "TON" && 0) ||
            (result.assetCurrency === "USDT" && 1) ||
            (result.assetCurrency === "BTC" && 2)
          }
          onSlideChange={handleSlideChange}
        >
          <div className="nY8p Vr6w NHDE">
            <div className="ULY2">
                {/* <SwiperSlide>
                  <div className="x1Ds">
                    <div className="UQdA Mfze">
                      <h1 className="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div className="hgpf">
                              Поле 2x2
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div className="CVyl AMsP YEnQ rRnL">
                        <div className="PsHq">
                          <div className="">
                            <section
                              className="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                            </section>
                          </div>
                        </div>
                        <div className="IfNG">
                          <div className="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                  <div className="x1Ds">
                    <div className="UQdA Mfze">
                      <h1 className="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div className="hgpf">
                              Поле 2x3
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div className="CVyl AMsP YEnQ rRnL">
                        <div className="PsHq">
                          <div className="">
                            <section
                              className="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                              <div
                                className="nWdk"
                                style={{ width: "42px", height: "42px" }}
                              >
                              </div>
                            </section>
                          </div>
                        </div>
                        <div className="IfNG">
                          <div className="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="x1Ds">
                    <div className="UQdA Mfze">
                      <h1 className="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div className="hgpf">
                            Поле 3x3
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div className="CVyl AMsP YEnQ rRnL">
                        <div className="PsHq">
                          <div className="">
                            <section
                              className="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                              <div
                                className="nWdk"
                                style={{ width: "42px", height: "42px" }}
                              >
                                {/* <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ padding: "4px" }}
                                >
                                  <path
                                    d="M39.397 24.838c-2.671 10.715-13.523 17.235-24.239 14.563C4.448 36.731-2.073 25.877.6 15.164 3.269 4.448 14.121-2.073 24.833.598c10.715 2.672 17.235 13.525 14.564 24.24Z"
                                    fill="#F7931A"
                                  ></path>
                                  <path
                                    d="M28.817 17.155c.398-2.661-1.628-4.092-4.4-5.046l.9-3.606-2.195-.546-.875 3.51c-.577-.144-1.17-.28-1.759-.414l.882-3.533-2.194-.547-.899 3.604a72.497 72.497 0 0 1-1.401-.33l.002-.01-3.026-.757-.584 2.344s1.628.374 1.594.397c.889.221 1.05.81 1.023 1.276l-1.024 4.107c.061.016.14.038.228.074l-.232-.058-1.435 5.754c-.109.27-.385.675-1.006.521.022.032-1.595-.398-1.595-.398l-1.09 2.512 2.857.712c.53.134 1.051.273 1.564.404l-.908 3.647 2.192.547.9-3.608c.598.162 1.18.312 1.748.454l-.896 3.59 2.195.547.908-3.64c3.742.709 6.556.423 7.74-2.962.955-2.725-.047-4.297-2.016-5.322 1.434-.33 2.515-1.274 2.803-3.222h-.001Zm-5.015 7.032c-.678 2.725-5.266 1.252-6.754.882l1.205-4.83c1.488.37 6.258 1.106 5.55 3.948Zm.68-7.071c-.62 2.479-4.439 1.22-5.677.91l1.092-4.381c1.239.309 5.229.885 4.584 3.47Z"
                                    fill="#fff"
                                  ></path>
                                </svg> */}
                              </div>
                              {/* <div
                                className="nw2j"
                                style={{
                                  backgroundImage:
                                    'url("data:image/png;base64,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")',
                                }}
                              ></div> */}
                            </section>
                          </div>
                        </div>
                        <div className="IfNG">
                          <div className="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                                {/* <span className="ECYg kB0J uDr2 sGES">
                                  17X1XFsJ1HB7tJve5
                                  <br />
                                  i9K3nCQxrM8N7rZfK
                                </span> */}
                              </div>
                            </div>
                          </div>
                          {/* <div
                            variant="subtitle2"
                            weight="regular"
                            color="subtitleText"
                            data-testid="receive-address"
                            className="cpHh YLSR PmUA Fx5C"
                          >
                            Your BTC address
                          </div> */}
                        </div>
                      </div>
                      {/* <p className="qV5z d5BK" data-testid="receive-subtitle">
                        Send only <b>Bitcoin (BTC)</b> to this address. Sending
                        other assets may result in permanent loss.
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
            </div>
          </div>
        </Swiper>
          {/* <div className="eDj5">
            <div className="Q6hA">
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 0 ? " vVVX" : ""}`}></div>
              </div>
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 1 ? " vVVX" : ""}`}></div>
              </div>
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 2 ? " vVVX" : ""}`}></div>
              </div>
            </div>
          </div> */}
      </div>
      <section className="HqKJ ls1H">
        <button
          data-testid="receive-copy-address-btn"
          className="r2DG V7r1 EGpD vM7P ROPJ x4dM jKY2"
        >
          <div className="P13Q">
            <div className="dEpV qSw9">
              <span className="S5cS GnzX">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="9"
                    y="6"
                    width="14"
                    height="14"
                    rx="3"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="4.2"
                    y="9.2"
                    width="15.6"
                    height="15.6"
                    rx="3.8"
                    fill="currentColor"
                    stroke="var(--tg-theme-button-color)"
                    strokeWidth="1.6"
                  ></rect>
                </svg>
              </span>
              <div variant="button1" className="cpHh KbDJ m_Vw JelQ">
                Copy
              </div>
            </div>
          </div>
          <div className="gtBI"></div>
        </button>
        <button
          data-testid="receive-copy-address-btn"
          className="r2DG V7r1 EGpD vM7P ROPJ x4dM jKY2"
          style={{ background: "rgba(0, 125, 255, 0.1)" }}
        >
          <div className="P13Q">
            <div className="dEpV qSw9" style={{ color: "var(--tg-theme-accent-text-color)" }}>
              <span className="S5cS GnzX">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="9"
                    y="6"
                    width="14"
                    height="14"
                    rx="3"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="4.2"
                    y="9.2"
                    width="15.6"
                    height="15.6"
                    rx="3.8"
                    fill="currentColor"
                    stroke="var(--tg-theme-button-color)"
                    strokeWidth="1.6"
                  ></rect>
                </svg>
              </span>
              <div variant="button1" className="cpHh KbDJ m_Vw JelQ">
                Share
              </div>
            </div>
          </div>
          <div className="gtBI"></div>
        </button>
      </section>
    </div>
  );
};

export default Game;
