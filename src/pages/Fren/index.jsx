import "./style.scss";
import Lottie from "lottie-react";
import axios from "axios";
import Influencer from "../../assets/animation/Influencer.json";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import BlackTransparent from "../../components/BlackTransparent";
import { BackButton, MainButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
// import { gsap } from 'gsap';
import addCommas from "../../utils/addCommas";
import getLeague from "../../utils/getLeague";
import Pigeon from "../../assets/animation/Pigeon.json";

export default function Fren() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/score`
        );
        setScore(response.data.score);
      } catch (error) {
        console.error("Failed to fetch score:", error);
      }
    };

    fetchScore();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  // const fren_balance = 0;

  const [frensBalance, setFrensBalance] = useState(0);

  useEffect(() => {
    const fetchFrensBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/frens_balance`
        );
        setFrensBalance(response.data.frens_balance);
      } catch (error) {
        console.error("Failed to fetch frens balance:", error);
      }
    };

    fetchFrensBalance();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  const league = getLeague(score);

  const [playAnimation, setPlayAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const handleButtonClick = () => {
    setPlayAnimation(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 2000); // Задержка перед появлением страницы
  }, []);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

  const [starFirst, setStarFirst] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarFirst(true);
    }, 100);
  }, []);

  const [starSecond, setStarSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarSecond(true);
    }, 100);
  }, []);

  const [starThird, setStarThird] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStarThird(true);
    }, 100);
  }, []);

  const [starFourth, setStarFourth] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStarFourth(true);
    }, 100);
  }, []);

  // const [frens, setFrens] = useState([]);

  // useEffect(() => {
  //   const fetchDataFrens = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:8000/users/36/frens"
  //       );
  //       setFrens(response.data);
  //     } catch (error) {
  //       console.error("Error fetching frens:", error);
  //     }
  //   };

  //   fetchDataFrens();
  // }, []);

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
      <BackButton onClick={() => navigate("/")} />
      <div className="page fren-page">
        <div className="background-yellow theme-yellow yhE4"></div>
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
                className="stars_fren-1 star-glitter"
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
                className="stars_fren-2 star-glitter"
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
                className="stars_fren-3 star-glitter"
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
                className="stars_fren-4 star-glitter"
              >
                <path
                  d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                  fill="white"
                />
              </svg>
            </div>
          </CSSTransition>
        </div>
        <div className="container position-relative scrolling">
          <div className="page__content uY4S">
            <CSSTransition
              in={showPage}
              timeout={250}
              className="fren-animation"
              unmountOnExit
            >
              <div>
                <div className="Jh2w I7pd">
                  <div className="HeOi">{parsedData.fren.title}</div>
                </div>
                <BlackTransparent
                  onClick={() => {
                    navigate("/party");
                  }}
                  classes={[
                    "black-transparent-btn_with-icon",
                    "fren-page__header-btn",
                  ]}
                >
                  <div className="fren-page__header-btn-content">
                    <div className="Ip3o">+{addCommas(frensBalance)}</div>
                    <div className="coin-min-icon"></div>
                    <div className="vertical-line"></div>
                    <div className="influencer-icon"></div>
                    <div className="iUeR">{parsedData.fren.top}</div>
                    <div className="OIe4">{parsedData.fren.leaders}</div>
                  </div>
                  <div
                    style={{
                      marginRight: "6px",
                      marginTop: "2px",
                    }}
                  >
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                </BlackTransparent>
                <div className="UsL6">{parsedData.fren.title_invite}</div>
                <div className="black-transparent fGjD">
                  <div className="B0WY">
                    <div className="tjl5">
                      <div className="B0WY">
                        <div className="JfMo">
                          <div className="referral-icon referral-icon__coin-small-icon"></div>
                        </div>
                        <div className="UEiU">
                          <div className="nnot">
                            {parsedData.fren.invite_fren}
                            <br />
                            <div className="lDtF nnot">
                              <div className="Li2p">
                                <div className="penny-icon vBwQ bv0r"></div>
                                <div className="R35h JG3Z bv0r">
                                  {league === "bronze"
                                    ? `20,000`
                                    : league === "silver"
                                    ? `40,000`
                                    : league === "gold"
                                    ? `60,000`
                                    : league === "platinum"
                                    ? `80,000`
                                    : `100,000`}
                                </div>{" "}
                                {parsedData.fren.for_you_and_fren}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="B0WY">
                        <div className="rEQ9">
                          <div className="referral-icon referral-icon__prem-icon"></div>
                        </div>
                        <div className="IY3i">
                          <div className="nnot">
                            {parsedData.fren.fren_with}{" "}
                            <a
                              onClick={() => {
                                WebApp.openTelegramLink("https://t.me/premium");
                              }}
                              className="prem-link"
                            >
                              {parsedData.fren.telegram_premium}
                            </a>
                            <br />
                            <div className="lDtF nnot">
                              <div className="Li2p">
                                <div className="penny-icon vBwQ bv0r"></div>
                                <div className="R35h JG3Z bv0r">
                                  {league === "bronze"
                                    ? `30,000`
                                    : league === "silver"
                                    ? `50,000`
                                    : league === "gold"
                                    ? `70,000`
                                    : league === "platinum"
                                    ? `90,000`
                                    : `120,000`}
                                </div>{" "}
                                {parsedData.fren.for_you_and_fren}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        navigate("/referral");
                      }}
                      className="open-details-btn"
                    >
                      <div className="Jh2w">
                        <div className="Li2p">
                          <div className="Iy4o">
                            {parsedData.fren.open_details}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="OUwl">{parsedData.fren.title_frens_list}</div>
                {/* <ul className="league_skeleton">
                  {frens.map((user, index) => (
                    <li key={user.id} className="league_skeleton__wrapper">
                      <img
                        src={user.url_photo}
                        className="league_skeleton__circle"
                      />

                      <div className="league_element__box1">
                        {user.first_name}
                      </div>
                      <div className="league_element__box2">
                        <div
                          className="penny-icon vBwQ"
                          style={{
                            position: "absolute",
                            display: "inline-block",
                            marginTop: "4px",
                          }}
                        ></div>
                        <div
                          style={{
                            display: "inline",
                            color: "#d4d4d4",
                            marginLeft: "20px",
                          }}
                        >
                          {addCommas(user.score)}
                        </div>
                      </div>
                      {index === 0 ? (
                        <div className="league_element__box3">🥇</div>
                      ) : index === 1 ? (
                        <div className="league_element__box3">🥈</div>
                      ) : index === 2 ? (
                        <div className="league_element__box3">🥉</div>
                      ) : (
                        <div className="league_element__box3">{index + 1}</div>
                      )}
                    </li>
                  ))}
                </ul> */}
                <div className="Sns9">
                  <div className="lgqO">
                    <div
                      onClick={() => {
                        handleButtonClick();
                      }}
                      className="Ihcq"
                    >
                      <Lottie
                        key={animationKey}
                        loop={false}
                        autoPlay={playAnimation}
                        animationData={Pigeon}
                      />
                    </div>
                    <div className="OCW2">
                      {parsedData.fren.empty_frens_list}
                    </div>
                  </div>
                </div>
                {/* <ul className="skeleton">
                  {Array.from(Array(3), (e, i) => {
                    return (
                      <li key={i} className="skeleton__wrapper">
                        <div className="skeleton__circle"></div>
                        <div className="element__box1"></div>
                        <div className="element__box2"></div>
                        <div className="element__box3"></div>
                      </li>
                    );
                  })}
                </ul> */}
                <div
                  onClick={() => {
                    WebApp.openTelegramLink(
                      `https://t.me/share/url?text=${
                        parsedData.referral_system.play_and_earn
                      }${
                        league === "bronze"
                          ? `20%2C000`
                          : league === "silver"
                          ? `40%2C000`
                          : league === "gold"
                          ? `60%2C000`
                          : league === "platinum"
                          ? `80%2C000`
                          : `100%2C000`
                      }${
                        parsedData.referral_system.for_you_and_fren
                      }&url=https://t.me/pixelcoinbot?start=rp_5668476910`
                    );
                  }}
                  className="fren-footer-btn"
                >
                  <div className="Jh2w">
                    <div className="Li2p">
                      <div className="Iy4o">
                        {parsedData.fren.invite_a_fren}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </>
  );
}
