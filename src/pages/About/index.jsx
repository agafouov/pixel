import "./style.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import Lottie from "lottie-react";
import Crystal from "../../assets/animation/Crystal.json";
import axios from 'axios';

export default function About() {
  const navigate = useNavigate();

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 50); // Задержка перед появлением страницы
  }, []);

  const [itemFirst, setItemFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItemFirst(true);
    }, 250); // Задержка перед появлением страницы
  }, []);

  const [itemSecond, setItemSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItemSecond(true);
    }, 500); // Задержка перед появлением страницы
  }, []);

  const [itemThird, setItemThird] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItemThird(true);
    }, 750); // Задержка перед появлением страницы
  }, []);

  const [itemFourth, setItemFourth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItemFourth(true);
    }, 1000); // Задержка перед появлением страницы
  }, []);

  const [itemFifth, setItemFifth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setItemFifth(true);
    }, 1250); // Задержка перед появлением страницы
  }, []);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

  const [welcome, setWelcome] = useState(() => {
    const storedWelcome = localStorage.getItem("welcome");
    return storedWelcome ? storedWelcome : false;
  });

  const changeWelcome = () => {
    localStorage.setItem("welcome", true);
  };

  const [starFirst, setStarFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarFirst(true);
    }, 800);
  }, []);

  const [starSecond, setStarSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarSecond(true);
    }, 1200);
  }, []);

  const [starThird, setStarThird] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarThird(true);
    }, 1200);
  }, []);

  const [starFourth, setStarFourth] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStarFourth(true);
    }, 1200);
  }, []);

  const [lastAction, setLastAction] = useState(0);

  // Функция для получения баланса пользователя
  const fetchLastAction = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/users/36/last_action`);
      setLastAction(response.data.last_action);
    } catch (error) {
      console.error("Error fetching last_action:", error);
    }
  };

  // Функция для обновления баланса пользователя
  const updateLastAction = async (newLastAction) => {
    try {
      const response = await axios.put(`http://localhost:8000/users/36/last_action`, {
        last_action: newLastAction,
      });
      setLastAction(response.data.last_action);
    } catch (error) {
      console.error("Error updating last_action:", error);
    }
  };

  // Вызываем функцию получения баланса при монтировании компонента
  useEffect(() => {
    fetchLastAction();
  }, []);

  const currentTime = new Date();
  updateLastAction(currentTime.toLocaleString());

  return (
    <>
      {welcome === "true" && <BackButton onClick={() => navigate("/earn")} />}
      <CSSTransition
        in={showPage}
        timeout={50}
        className="earn-animation"
        unmountOnExit
      >
        <div>
          <div className="page">
            <div className="container scrolling">
              <div className="page__content uY4S">
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <CSSTransition
                    in={starFirst}
                    timeout={800}
                    className="star-animation"
                    unmountOnExit
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        className="stars_about-1 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={starSecond}
                    timeout={1200}
                    className="star-animation"
                    unmountOnExit
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        className="stars_about-2 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={starThird}
                    timeout={1200}
                    className="star-animation"
                    unmountOnExit
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        className="stars_about-3 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={starFourth}
                    timeout={1200}
                    className="star-animation"
                    unmountOnExit
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        className="stars_about-4 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                </div>
                <div className="xMOh">
                  <button className="about-transparent-btn">
                    <div className="Li2p">
                      <div className="bv0r">
                        <div className="B0WY PQc6">
                          <svg
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon-shrink"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.0509 10.9007C9.15013 8.64981 12.5448 7.15417 14.2494 6.42856C19.1009 4.37021 20.1207 4.01481 20.7764 4C20.9221 4 21.2426 4.02962 21.4611 4.20732C21.6359 4.3554 21.6797 4.54791 21.7088 4.69599C21.7379 4.84407 21.7671 5.15505 21.7379 5.39198C21.4757 8.20556 20.3393 15.0322 19.7565 18.1715C19.5088 19.5043 19.0281 19.9485 18.5618 19.993C17.542 20.0818 16.7698 19.3118 15.7937 18.6602C14.2494 17.6384 13.3898 17.0017 11.8891 15.9947C10.1554 14.8397 11.2772 14.2029 12.2679 13.1663C12.5302 12.8998 17.0029 8.75347 17.0904 8.38326C17.1049 8.33883 17.1049 8.16113 17.0029 8.07228C16.901 7.98343 16.7553 8.01305 16.6387 8.04267C16.4784 8.07228 14.0308 9.73081 9.26668 13.0034C8.56736 13.4921 7.94088 13.7291 7.37269 13.7142C6.74621 13.6994 5.55153 13.3588 4.64824 13.0627C3.55555 12.7073 2.6814 12.5148 2.75425 11.8928C2.79795 11.567 3.23503 11.2413 4.0509 10.9007Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="JHs0">{parsedData.about.join}</div>
                    </div>
                  </button>
                  <button className="about-transparent-btn">
                    <div className="Li2p">
                      <div className="TtWO">
                        <div className="TYw1">
                          <div className="x-icon"></div>
                        </div>
                      </div>
                      <div className="JHs0">{parsedData.about.follow}</div>
                    </div>
                  </button>
                </div>
                <div className="Jh2w">
                  <div className="Li2p">
                    <div className="Jye1">Pixelcoin</div>
                  </div>
                </div>
                <CSSTransition
                  in={itemFirst}
                  timeout={250}
                  className="slide-down-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="B0WY">
                      <div className="bvrx">
                        <div className="about-icon">
                          <div>
                            <Lottie animationData={Crystal} />
                          </div>
                          
                        </div>
                      </div>
                      <div className="jbux">
                        <div className="j4YN">
                          {parsedData.about.card_title_play}
                          <br />
                          <div className="Wt6t">
                            {parsedData.about.card_text_play}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={itemSecond}
                  timeout={500}
                  className="slide-down-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="B0WY">
                      <div className="QPvY">
                        <div className="about-icon about-icon__lightning-icon"></div>
                      </div>

                      <div className="QPvY">
                        <div className="j4YN">
                          {parsedData.about.card_title_earn}
                          <br />
                          <div className="Wt6t">
                            {parsedData.about.card_text_earn}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={itemThird}
                  timeout={750}
                  className="slide-down-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="B0WY">
                      <div className="QPvY">
                        <div className="about-icon about-icon__diamond-cup-icon"></div>
                      </div>

                      <div className="QPvY">
                        <div className="j4YN">
                          {parsedData.about.card_title_league}
                          <br />
                          <div className="Wt6t">
                            {parsedData.about.card_text_league}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={itemFourth}
                  timeout={1000}
                  className="slide-down-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="B0WY">
                      <div className="QPvY">
                        <div className="about-icon about-icon__rocket-icon"></div>
                      </div>

                      <div className="QPvY">
                        <div className="j4YN">
                          {parsedData.about.card_title_rocket}
                          <br />
                          <div className="Wt6t">
                            {parsedData.about.card_text_rocket}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={itemFifth}
                  timeout={1250}
                  className="slide-down-enter"
                  unmountOnExit
                >
                  <div>
                    <div className="B0WY">
                      <div className="QPvY">
                        <div className="about-icon about-icon__handshake-icon"></div>
                      </div>

                      <div className="QPvY">
                        <div className="j4YN">
                          {parsedData.about.card_title_squad}
                          <br />
                          <div className="Wt6t">
                            {parsedData.about.card_text_squad}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CSSTransition>
                <div
                  onClick={() =>
                    WebApp.openLink(
                      "https://telegra.ph/Pixelcoin-a-full-guide-01-17",
                      { try_instant_view: true }
                    )
                  }
                  className="Jh2w full-guide Z5dC"
                >
                  <div className="Li2p">
                    <div className="qLoL">{parsedData.about.full_guide}</div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    changeWelcome();
                    navigate("/");
                  }}
                  className="about-footer-btn"
                >
                  <div className="Jh2w">
                    <div className="Li2p">
                      <div className="Iy4o">{parsedData.about.play}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
