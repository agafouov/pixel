import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Cool from "../../assets/animation/Cool.json";
import Up from "../../assets/animation/Up.json";
import Free from "../../assets/animation/Free.json";
import Bag from "../../assets/animation/Bag.json";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="a7LD">
        <div
          variant="body"
          weight="regular"
          className="cpHh IqPa PmUA NH9b rpx1"
        >
          Total balance
        </div>
        <div>
          <div
            style={{
              maxWidth: "100%",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                transformOrigin: "center center 0px",
                flexGrow: "initial",
                transform: "scale(1)",
              }}
            >
              <div className="YWSF">
                <div className="JLFu htWJ">
                  <span>0</span>
                  <span className="tWFE">.</span>
                  <span className="xAWJ">00</span>
                  <span className="Neh8"> PX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="VFOP EFAG eF4q YE3Y">
        <section className="_LuN">
          <button className="r2DG V7r1 EGpD VpO0 aPJp x4dM PuF7">
            <div className="P13Q">
              <div className="dEpV qSw9" style={{ color: "#fff" }}>
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3Zm4.53 9.47-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72V19a.75.75 0 0 0 1.5 0v-8.19l2.72 2.72a.75.75 0 1 0 1.06-1.06Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="caption2"
                  weight="medium"
                  className="cpHh LMb8 CF5m m_Vw JelQ"
                >
                  Send
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            data-testid="swap-btn"
            className="r2DG V7r1 EGpD VpO0 aPJp x4dM"
            style={{ background: "rgba(0, 125, 255, 0.1)" }}
            // style={{backgroundColor: "var(--tg-theme-accent-text-color)", opacity: "0.1"}}
          >
            <div className="P13Q">
              <div
                className="dEpV qSw9"
                style={{ color: "var(--tg-theme-accent-text-color)" }}
              >
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11Zm-3.434-10.566a.8.8 0 0 0-1.132 1.132l4 4a.8.8 0 0 0 1.132 0l4-4a.8.8 0 0 0-1.132-1.132L14.8 17.07V9.5a.8.8 0 0 0-1.6 0v7.569l-2.634-2.635Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="caption2"
                  weight="medium"
                  className="cpHh LMb8 CF5m m_Vw JelQ"
                >
                  Receive
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            data-testid="deposit-btn"
            className="r2DG V7r1 EGpD VpO0 aPJp x4dM"
            style={{ background: "rgba(0, 125, 255, 0.1)" }}
          >
            <div className="P13Q">
              <div
                className="dEpV qSw9"
                style={{ color: "var(--tg-theme-accent-text-color)" }}
              >
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Zm11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="caption2"
                  weight="medium"
                  className="cpHh LMb8 CF5m m_Vw JelQ"
                >
                  Market
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            data-testid="deposit-btn"
            className="r2DG V7r1 EGpD VpO0 aPJp x4dM"
            style={{ background: "rgba(0, 125, 255, 0.1)" }}
          >
            <div className="P13Q">
              <div
                className="dEpV qSw9"
                style={{ color: "var(--tg-theme-accent-text-color)" }}
              >
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 14.5c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm9.303-5.97c.26.26.26.68 0 .94l-1.364 1.365h7.394a.665.665 0 1 1 0 1.33H10.94l1.364 1.365a.665.665 0 1 1-.94.94l-2.5-2.5a.665.665 0 0 1 0-.94l2.5-2.5c.26-.26.68-.26.94 0Zm3.557 6.94a.665.665 0 1 1 .94-.94l2.5 2.5a.665.665 0 0 1 0 .94l-2.5 2.5a.665.665 0 1 1-.94-.94l1.365-1.365H9.83a.665.665 0 1 1 0-1.33h7.395L15.86 15.47Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="caption2"
                  weight="medium"
                  className="cpHh LMb8 CF5m m_Vw JelQ"
                >
                  Exchange
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
        </section>
      </div>
      {/* <section className="LySH rAGF">
        <div>
          <div
            variant="button1"
            color="sectionHeaderText"
            className="cpHh KbDJ eqZC Rfm7 hCZ1"
          >
            Активы
          </div>
          <div className="ydmx tf4r">
            <div className="mjig ODmG LQUd">
              <div className="tizz wMEh GQO6"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="RkvK">
                      <div
                        className="Oube"
                        style={{ width: "46px", height: "46px" }}
                      >
                        <img
                          src="https://maspx.github.io/website/raffle.png"
                          className="qQ7G vKsn smtz"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Розыгрыш призов
                      </div>
                      <div
                        variant="subtitle1"
                        color="subtitleText"
                        className="cpHh UBSx Fx5C Bgj6 Udan"
                      >
                        У вас 0 билетов
                      </div>
                    </div>
                    <div className="eslG CFak">
                      <div className="jOCs TYgZ HfZf NXXw">
                        <button
                          data-testid="offer-174262-buy-btn"
                          className="r2DG I8tQ enB5"
                          onClick={() => navigate("/raffle")}
                        >
                          <div className="P13Q">Открыть</div>
                          <div className="gtBI"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div className="r2DG tizz wMEh GQO6">
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="RkvK">
                      <div
                        className="Oube"
                        style={{ width: "46px", height: "46px" }}
                      >
                        <img
                          src="https://maspx.github.io/website/logo.png"
                          className="qQ7G vKsn smtz"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Pixelcoin
                      </div>
                      <div
                        variant="subtitle1"
                        color="subtitleText"
                        className="cpHh UBSx Fx5C Bgj6 Udan"
                      >
                        0&nbsp;PX
                      </div>
                    </div>
                    <div className="eslG CFak">
                      <div className="jOCs TYgZ HfZf NXXw">
                        <div
                          variant="body"
                          weight="regular"
                          color="text"
                          className="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                        >
                          $0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="HUpe DN_1" />
      </section> */}
      <section className="LySH rAGF">
        <div>
          <div
            variant="button1"
            color="sectionHeaderText"
            className="cpHh KbDJ eqZC Rfm7 hCZ1"
          >
            Ways to add funds
          </div>
          <div className="ydmx tf4r">
            <div className="mjig ODmG LQUd">
              <div onClick={() => navigate("/game")} className="r2DG tizz">
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Zm11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      {/* <Lottie style={{width: "46px", height: "46px"}} animationData={Cool}/> */}
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Top up using a bank card
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div className="r2DG tizz">
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="29"
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 14.5c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm9.303-5.97c.26.26.26.68 0 .94l-1.364 1.365h7.394a.665.665 0 1 1 0 1.33H10.94l1.364 1.365a.665.665 0 1 1-.94.94l-2.5-2.5a.665.665 0 0 1 0-.94l2.5-2.5c.26-.26.68-.26.94 0Zm3.557 6.94a.665.665 0 1 1 .94-.94l2.5 2.5a.665.665 0 0 1 0 .94l-2.5 2.5a.665.665 0 1 1-.94-.94l1.365-1.365H9.83a.665.665 0 1 1 0-1.33h7.395L15.86 15.47Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Trade on the P2P Market
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div className="r2DG tizz">
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11Zm-3.434-10.566a.8.8 0 0 0-1.132 1.132l4 4a.8.8 0 0 0 1.132 0l4-4a.8.8 0 0 0-1.132-1.132L14.8 17.07V9.5a.8.8 0 0 0-1.6 0v7.569l-2.634-2.635Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Deposit crypto from another wallet
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ydmx tf4r">
          <div className="PsHq">
            <div className="">
              <div>
                <div className="mjig ODmG LQUd"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="HUpe DN_1" />
      </section>
    </>
  );
};

export default Main;
