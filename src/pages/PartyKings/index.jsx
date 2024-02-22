import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import ContentLoader from "react-content-loader";
// import Influencer from "../../assets/animation/Influencer.json";
import Crown from "../../assets/animation/Crown.json";
import Duck_x3_out from "../../assets/animation/Duck_x3_out.json";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./style.scss";
import UsersSkeleton from "../../components/UsersSkeleton";
import getLeague from "../../utils/getLeague";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import axios from "axios";
import addCommas from "../../utils/addCommas";

export default function PartyKings() {
  const navigate = useNavigate();

  const [playAnimation, setPlayAnimation] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const [userLoaded, setUserLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      // setUserLoaded(true);
    }, 5000);
  }, []);

  const handleButtonClick = () => {
    setPlayAnimation(true);
    setAnimationKey((prevKey) => prevKey + 1);
  };

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

  const league = getLeague(score);

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 50); // Задержка перед появлением страницы
  }, []);

  const [isVisible, setIsVisible] = useState(true);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);

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

  const [partyKings, setPartyKings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/party_kings");
        setPartyKings(response.data);
      } catch (error) {
        console.error("Error fetching party kings:", error);
      }
    };

    fetchData();
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
      <BackButton onClick={() => navigate("/")} />
      <CSSTransition
        in={showPage}
        timeout={50}
        className="referral-animation"
        unmountOnExit
      >
        <div>
          <div className="page scrolling">
            {/* <div className="background-influencer"></div> */}
            <div className="background-league theme-league__diamond"></div>
            <div className="container position-relative">
              <div className="page__content">
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
                        className="stars_party-1 star-glitter"
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
                        className="stars_party-2 star-glitter"
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
                        className="stars_party-3 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                </div>
                <div className="sGES">
                  <div onClick={handleButtonClick}>
                    <CSSTransition
                      in={isVisible}
                      timeout={100}
                      className={`slide-down-enter`}
                      unmountOnExit
                    >
                      <div>
                        <Lottie
                          key={animationKey}
                          loop={false}
                          autoPlay={playAnimation}
                          animationData={Crown}
                          // isStopped={!playAnimation}
                          className="Lbr3"
                        />
                      </div>
                    </CSSTransition>
                  </div>
                </div>
                <div className="m72u">{parsedData.party_kings.title}</div>
                <div className="uDr2">{parsedData.party_kings.description}</div>
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
                  className="ccBa"
                >
                  <div className="Jh2w">
                    <div className="Li2p">
                      <div className="Iy4o">
                        {parsedData.party_kings.invite_frens}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="party_skeleton">
                  {partyKings.map((user, index) => (
                    <li key={user.id} className="party_skeleton__wrapper">
                      <img
                        src={user.url_photo}
                        className="party_skeleton__circle"
                      />

                      <div className="party_element__box1">
                        {user.first_name}
                      </div>
                      <div className="party_element__box2">
                        <div style={{ display: "inline", color: "#d4d4d4" }}>
                          {addCommas(user.frens_count)} frens
                        </div>{" "}
                        ·{" "}
                        <div style={{ display: "inline", color: "#fdb927" }}>
                          +{addCommas(user.frens_balance)}
                        </div>
                        <div
                          className="penny-icon vBwQ"
                          style={{
                            position: "absolute",
                            display: "inline-block",
                            marginLeft: "5px",
                            marginTop: "4px",
                          }}
                        ></div>
                      </div>
                      {index === 0 ? (
                        <div className="party_element__box3">🥇</div>
                      ) : index === 1 ? (
                        <div className="party_element__box3">🥈</div>
                      ) : index === 2 ? (
                        <div className="party_element__box3">🥉</div>
                      ) : (
                        <div className="party_element__box3">{index + 1}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}
