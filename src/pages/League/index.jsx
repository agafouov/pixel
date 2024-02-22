import React from "react";
import Lottie from "lottie-react";
import Cup from "../../assets/animation/Cup.json";
import Duck_x3_out from "../../assets/animation/Duck_x3_out.json";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import UsersSkeleton from "../../components/UsersSkeleton";
import ProgressBar from "../../components/ProgressBar";
import addCommas from "../../utils/addCommas";
import PlayersList from "../../components/PlayersList";
import getLeague from "../../utils/getLeague";

function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const assetLeague = params.get("assetLeague");
  const type = params.get("type");
  return { assetLeague, type };
}

export default function League() {
  const navigate = useNavigate();
  const location = useLocation();
  // const result = Search();

  // const [result, setResult] = useState(Search());
  const result = Search();

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

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/users/36/balance`
        );
        setBalance(response.data.balance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

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

  const [totalPlayers, setTotalPlayers] = useState(0);

  const fetchTotalPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/total_players");
      setTotalPlayers(response.data.total_players);
    } catch (error) {
      console.error("Error fetching total players:", error);
    }
  };

  useEffect(() => {
    fetchTotalPlayers();
  }, []);

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 500); // Задержка перед появлением страницы
  }, []);

  const [showCup, setShowCup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCup(true);
    }, 0); // Задержка перед появлением страницы
  }, []);

  // const [key, setKey] = useState(0); // Ключ, который будет изменен для перезагрузки компонента

  // useEffect(() => {
  //   const handleLocationChange = () => {
  //     // Здесь вы можете проверить изменения в URL
  //     // Например, если происходит переход с /league?league=bronze на /league?league=silver
  //     // Вы можете вызвать перезагрузку компонента
  //     if (
  //       location.search.includes("league=bronze") &&
  //       !location.search.includes("league=silver")
  //     ) {
  //       // В случае смены на bronze
  //       setKey((prevKey) => prevKey + 1); // Изменяем ключ, чтобы принудительно перерендерить компонент
  //     } else if (
  //       location.search.includes("league=silver") &&
  //       !location.search.includes("league=bronze")
  //     ) {
  //       // В случае смены на silver
  //       setKey((prevKey) => prevKey + 1); // Изменяем ключ, чтобы принудительно перерендерить компонент
  //     }
  //   };

  //   // Подписываемся на изменения в URL
  //   const unlisten = () => {navigate(handleLocationChange)};

  //   // Отписываемся от слежения при размонтировании компонента
  //   return () => unlisten();
  // }, [location, navigate]);

  const savedData = sessionStorage.getItem("pixelcoinLangpack");
  const parsedData = JSON.parse(savedData);
  const [loading, setLoading] = useState(true);
  const [minersLeagueSilver, setMinersLeagueSilver] = useState([]);

  useEffect(() => {
    const fetchDataSilver = async () => {
      try {
        const response = await axios.get("http://localhost:8000/miners_league_silver");
        setMinersLeagueSilver(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching league silver:", error);
      }
    };

    fetchDataSilver();
  }, []);

  const [minersLeagueGold, setMinersLeagueGold] = useState([]);

  useEffect(() => {
    const fetchDataGold = async () => {
      try {
        const response = await axios.get("http://localhost:8000/miners_league_gold");
        setMinersLeagueGold(response.data);
      } catch (error) {
        console.error("Error fetching league gold:", error);
      }
    };

    fetchDataGold();
  }, []);

  const [minersLeaguePlatinum, setMinersLeaguePlatinum] = useState([]);

  useEffect(() => {
    const fetchDataPlatinum = async () => {
      try {
        const response = await axios.get("http://localhost:8000/miners_league_platinum");
        setMinersLeaguePlatinum(response.data);
      } catch (error) {
        console.error("Error fetching league platinum:", error);
      }
    };

    fetchDataPlatinum();
  }, []);

  const [minersLeagueDiamond, setMinersLeagueDiamond] = useState([]);

  useEffect(() => {
    const fetchDataDiamond = async () => {
      try {
        const response = await axios.get("http://localhost:8000/miners_league_diamond");
        setMinersLeagueDiamond(response.data);
      } catch (error) {
        console.error("Error fetching league diamond:", error);
      }
    };

    fetchDataDiamond();
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
      <div className="page scrolling">
        {/* <div key={key}> */}
        <div
          className={`background-league theme-league__${result.assetLeague}`}
        ></div>
        {/* </div> */}
        <div className="container position-relative">
          <div className="page__content uY4S">
            <div onClick={() => navigate("/stats")} className="w4i3">
              <div>
                <div className="jYed IYe4"></div>
                <div className="Nzze"></div>
                <div className="jYed Kebc"></div>
                <div className="nEhw"></div>
                <div className="jYed IYUe"></div>
                {/* <img src="https://t.me/i/userpic/320/1Jd12DMPQM7fk4lY5vG4yViFLkHUZisk9sPhTe0L4hEY4GelamngLnk2rfR5W9Ij.svg" className="Fp2m"/> */}
                <div className="Fp2m"></div>
                <div className="J4ec">
                  {addCommas(totalPlayers)} {parsedData.league.pixelcoiners}
                </div>
              </div>
              <div>
                <div className="JYcc">{parsedData.league.stats}</div>
                <div className="Yevc">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="KYci"
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
            </div>
            <div>
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="_QtZ">
                      {/* <CSSTransition
                        in={showCup}
                        timeout={0}
                        className="slide-down-enter"
                        unmountOnExit
                      >
                        <div>
                          <div
                            className={`league-position ${
                              showCup
                                ? `league-icon__${result.assetLeague}`
                                : ``
                            }`}
                          ></div>
                        </div>
                      </CSSTransition> */}
                      <div>
                        <div
                          className={`league-position league-icon__${result.assetLeague}`}
                        ></div>
                      </div>
                      <button
                        onClick={() => {
                          result.assetLeague !== "bronze" &&
                            navigate(
                              `/league?assetLeague=${
                                (result.assetLeague === "silver" && "bronze") ||
                                (result.assetLeague === "gold" && "silver") ||
                                (result.assetLeague === "platinum" && "gold") ||
                                (result.assetLeague === "diamond" && "platinum")
                              }&type=${result.type}`
                            );
                        }}
                        className={`nav-btn ${
                          (result.assetLeague === "bronze" &&
                            "nav-btn_prev-disable") ||
                          "nav-btn_prev"
                        }`}
                      >
                        <svg
                          height="16px"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 492.004 492.004"
                          className={
                            (result.assetLeague === "bronze" && "I3cl") ||
                            "tVxl"
                          }
                        >
                          <g>
                            <g>
                              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                      <button
                        onClick={() => {
                          result.assetLeague !== "diamond" &&
                            navigate(
                              `/league?assetLeague=${
                                (result.assetLeague === "bronze" && "silver") ||
                                (result.assetLeague === "silver" && "gold") ||
                                (result.assetLeague === "gold" && "platinum") ||
                                (result.assetLeague === "platinum" && "diamond")
                              }&type=${result.type}`
                            );
                        }}
                        className={`nav-btn ${
                          (result.assetLeague === "diamond" &&
                            "nav-btn_next-disable") ||
                          "nav-btn_next"
                        }`}
                      >
                        <svg
                          height="16px"
                          width="16px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 492.004 492.004"
                          className={
                            (result.assetLeague === "diamond" && "I3cl") ||
                            "tVxl"
                          }
                        >
                          <g>
                            <g>
                              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="P8Ey">
                <div className="og0c">
                  {(result.assetLeague === "bronze" &&
                    parsedData.league.bronze_league) ||
                    (result.assetLeague === "silver" &&
                      parsedData.league.silver_league) ||
                    (result.assetLeague === "gold" &&
                      parsedData.league.gold_league) ||
                    (result.assetLeague === "platinum" &&
                      parsedData.league.platinum_league) ||
                    (result.assetLeague === "diamond" &&
                      parsedData.league.diamond_league)}
                </div>
              </div>
            </div>
            <div className="Jh2w bgqq">
              <div className="Zo7S">
                {(result.type == "miners" &&
                  result.assetLeague === "bronze" &&
                  league === "bronze" &&
                  `${addCommas(score)} / 30K`) ||
                  (result.type == "miners" &&
                    result.assetLeague === "silver" &&
                    league === "silver" &&
                    `${addCommas(score - 30000)} / 170K`) ||
                  (result.type == "miners" &&
                    result.assetLeague === "gold" &&
                    league === "gold" &&
                    `${addCommas(score - 200000)} / 300K`) ||
                  (result.type == "miners" &&
                    result.assetLeague === "platinum" &&
                    league === "platinum" &&
                    `${addCommas(score - 500000)} / 500K`) ||
                  (result.type == "miners" &&
                    result.assetLeague === "diamond" &&
                    league === "diamond" &&
                    `${addCommas(score - 1000000)} / ∞`) ||
                  (result.type == "miners" &&
                    result.assetLeague === "bronze" &&
                    parsedData.league.bronze_miners) ||
                  (result.type === "miners" &&
                    result.assetLeague === "silver" &&
                    parsedData.league.silver_miners) ||
                  (result.type === "miners" &&
                    result.assetLeague === "gold" &&
                    parsedData.league.gold_miners) ||
                  (result.type === "miners" &&
                    result.assetLeague === "platinum" &&
                    parsedData.league.platinum_miners) ||
                  (result.type === "miners" &&
                    result.assetLeague === "diamond" &&
                    parsedData.league.diamond_miners) ||
                  (result.type === "squads" &&
                    result.assetLeague === "bronze" &&
                    parsedData.league.bronze_squads) ||
                  (result.type === "squads" &&
                    result.assetLeague === "silver" &&
                    parsedData.league.silver_squads) ||
                  (result.type === "squads" &&
                    result.assetLeague === "gold" &&
                    parsedData.league.gold_squads) ||
                  (result.type === "squads" &&
                    result.assetLeague === "platinum" &&
                    parsedData.league.platinum_squads) ||
                  (result.type === "squads" &&
                    result.assetLeague === "diamond" &&
                    parsedData.league.diamond_squads)}
              </div>
            </div>
            {result.assetLeague === "bronze" &&
            league === "bronze" &&
            result.type === "miners" ? (
              <div className="Ug3o">
                <ProgressBar score={score} />
              </div>
            ) : result.assetLeague === "silver" &&
              league === "silver" &&
              result.type === "miners" ? (
              <div className="Ug3o">
                <ProgressBar score={score} />
              </div>
            ) : result.assetLeague === "gold" &&
              league === "gold" &&
              result.type === "miners" ? (
              <div className="Ug3o">
                <ProgressBar score={score} />
              </div>
            ) : result.assetLeague === "platinum" &&
              league === "platinum" &&
              result.type === "miners" ? (
              <div className="Ug3o">
                <ProgressBar score={score} />
              </div>
            ) : result.assetLeague === "diamond" &&
              league === "diamond" &&
              result.type === "miners" ? (
              <div className="Ug3o">
                <ProgressBar score={score} />
              </div>
            ) : (
              <div className="Iued"></div>
            )}

            <div className="LibrarySegmentedControl LibrarySegmentedControl--state-fixed LibrarySegmentedControl--glider">
              <div
                onClick={() => {
                  navigate(
                    `/league?assetLeague=${result.assetLeague}&type=miners`
                  );
                }}
                className={`LibrarySegmentedControlItem__link ${
                  (result.type === "miners" &&
                    "LibrarySegmentedControlItem__link--active") ||
                  ""
                }`}
              >
                <div
                  className={`LibrarySegmentedControlItem ${
                    (result.type === "miners" &&
                      "LibrarySegmentedControlItem--active") ||
                    ""
                  }`}
                >
                  <div className="Typography LibrarySegmentedControlItem__inner LibraryLabel LibraryLabel--l-1 LibraryLabel--w-semi-bold">
                    {parsedData.league.miners}
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  navigate(
                    `/league?assetLeague=${result.assetLeague}&type=squads`
                  );
                }}
                className={`LibrarySegmentedControlItem__link ${
                  (result.type === "squads" &&
                    "LibrarySegmentedControlItem__link--active") ||
                  ""
                }`}
              >
                <div
                  className={`LibrarySegmentedControlItem ${
                    (result.type === "squads" &&
                      "LibrarySegmentedControlItem--active") ||
                    ""
                  }`}
                >
                  <div className="Typography LibrarySegmentedControlItem__inner LibraryLabel LibraryLabel--l-1 LibraryLabel--w-semi-bold">
                    {parsedData.league.squads}
                  </div>
                </div>
              </div>
              <div
                className="LibrarySegmentedControl__glider"
                style={{
                  width: "calc(50% - 6px)",
                  transform:
                    (result.type === "miners" &&
                      "translateX(calc(0% + 0px))") ||
                    (result.type === "squads" &&
                      "translateX(calc(100% + 4px))"),
                }}
              ></div>
            </div>
            {(result.assetLeague !== "bronze" &&
              result.type === "miners" &&
              // (!userLoaded ? <UsersSkeleton /> : <div></div>))
              (result.assetLeague === "silver" ? (
                (loading ? <UsersSkeleton /> : <ul className="league_skeleton">
                  {minersLeagueSilver.map((user, index) => (
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
                </ul>)
              ) : result.assetLeague === "gold" ? (
                (loading ? <UsersSkeleton /> : <ul className="league_skeleton">
                  {minersLeagueGold.map((user, index) => (
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
                </ul>)
              ) : result.assetLeague === "platinum" ? (
                (loading ? <UsersSkeleton /> : <ul className="league_skeleton">
                  {minersLeaguePlatinum.map((user, index) => (
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
                </ul>)
              ) : (
                (loading ? <UsersSkeleton /> : <ul className="league_skeleton">
                  {minersLeagueDiamond.map((user, index) => (
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
                </ul>)
              ))) ||
              (result.assetLeague !== "bronze" && result.type === "squads" && (
                <div className="UIx1">
                  <div className="lgqO">
                    <div onClick={handleButtonClick} className="JKpY Z5dC">
                      <Lottie
                        key={animationKey}
                        loop={false}
                        autoPlay={playAnimation}
                        animationData={Duck_x3_out}
                        // isStopped={!playAnimation}
                      />
                    </div>
                    <div className="OCW2">{parsedData.league.empty_list}</div>
                  </div>
                </div>
              )) ||
              (result.assetLeague === "bronze" && (
                <div>
                  <div className="wDXF">
                    <div onClick={handleButtonClick} className="UQdA">
                      <Lottie
                        key={animationKey}
                        loop={false}
                        autoPlay={playAnimation}
                        animationData={Cup}
                        // isStopped={!playAnimation}
                      />
                    </div>
                  </div>
                  <div className="NHDE">
                    {(result.type === "miners" && (
                      <div className="lGlN">
                        {parsedData.league.you_will_join_leaderboard}
                        <br />
                        {parsedData.league.in_the_silver_league}
                      </div>
                    )) ||
                      (result.type === "squads" && (
                        <div className="lGlN">
                          {parsedData.league.leaderboard_is_under_construction}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
