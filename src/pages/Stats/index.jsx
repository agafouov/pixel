import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { BackButton } from "@twa-dev/sdk/react";
import WebApp from "@twa-dev/sdk";
import addCommas from "../../utils/addCommas";
import getLeague from "../../utils/getLeague";
import axios from 'axios';
import "./style.scss";

export default function Stats() {
  const [totalBalance, setTotalBalance] = useState(0);

  const fetchTotalBalance = async () => {
    try {
      const response = await axios.get("http://localhost:8000/total_balance");
      setTotalBalance(response.data.total_balance);
    } catch (error) {
      console.error('Error fetching total balance:', error);
    }
  };

  useEffect(() => {
    fetchTotalBalance();
  }, []);

  const [totalPlayers, setTotalPlayers] = useState(0);

  const fetchTotalPlayers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/total_players");
      setTotalPlayers(response.data.total_players);
    } catch (error) {
      console.error('Error fetching total players:', error);
    }
  };

  useEffect(() => {
    fetchTotalPlayers();
  }, []);

  const [dailyUsers, setDailyUsers] = useState(0);

  const fetchDailyUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/daily_users");
      setDailyUsers(response.data.daily_users);
    } catch (error) {
      console.error('Error fetching daily users:', error);
    }
  };

  useEffect(() => {
    fetchDailyUsers();
  }, []);

  const [online, setOnline] = useState(0);

  const fetchOnline = async () => {
    try {
      const response = await axios.get("http://localhost:8000/online");
      setOnline(response.data.online);
    } catch (error) {
      console.error('Error fetching online:', error);
    }
  };

  useEffect(() => {
    fetchOnline();
  }, []);

  const navigate = useNavigate();

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/users/36/balance`);
        setBalance(response.data.balance);
      } catch (error) {
        console.error('Failed to fetch balance:', error);
      }
    };

    fetchBalance();

    // Очистка эффекта
    return () => {
      // Если нужно выполнить какие-то действия при размонтировании компонента
    };
  }, []);

  const league = getLeague(balance);

  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 50); // Задержка перед появлением страницы
  }, []);

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
      <BackButton onClick={() => navigate(window.history.back())} />
      <CSSTransition
        in={showPage}
        timeout={50}
        className="earn-animation"
        unmountOnExit
      >
        <div>
          <div className="page fren-page">
            <div className="background-yellow theme-yellow yhE4"></div>
            <div className="container position-relative scrolling">
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
                        className="stars_stats-1 star-glitter"
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
                        className="stars_stats-2 star-glitter"
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
                        className="stars_stats-3 star-glitter"
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
                        className="stars_stats-4 star-glitter"
                      >
                        <path
                          d="M4.49419 0.881589C4.67056 0.383777 5.37562 0.386747 5.54778 0.886029L6.538 3.75766C6.59105 3.91149 6.70859 4.03451 6.85985 4.09449L9.65098 5.20141C10.1229 5.38856 10.1201 6.05747 9.6466 6.24063L6.84623 7.32399C6.69448 7.3827 6.5759 7.50472 6.52156 7.65809L5.50717 10.5213C5.3308 11.0191 4.62575 11.0161 4.45358 10.5168L3.46336 7.6452C3.41031 7.49137 3.29277 7.36836 3.14152 7.30837L0.350385 6.20145C-0.121519 6.0143 -0.1187 5.3454 0.354764 5.16223L3.15513 4.07888C3.30688 4.02017 3.42546 3.89815 3.4798 3.74477L4.49419 0.881589Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </CSSTransition>
                </div>
                <div className="Jh2w">
                  <div className="Li2p">
                    <div className="Oud1">
                      {parsedData.stats.balance_text_fiat}
                    </div>
                  </div>
                </div>
                <div className="Jh2w IYsx">
                  <div className="Li2p">
                    <div className="balance-icon"></div>
                    <div className="UYTX">
                      {addCommas(totalBalance)}
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "132px",
                      marginLeft: "18px",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "135px",
                      marginLeft: "21px",
                      zIndex: "2",
                    }}
                  >
                    <div className="OsUY demo-ava-13"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "132px",
                      marginLeft: "48px",
                      zIndex: "3",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "135px",
                      marginLeft: "51px",
                      zIndex: "4",
                    }}
                  >
                    <div className="OsUY demo-ava-1"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "132px",
                      marginLeft: "78px",
                      zIndex: "5",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "135px",
                      marginLeft: "81px",
                      zIndex: "6",
                    }}
                  >
                    <div className="OsUY creator"></div>
                    {/* <img src="https://t.me/i/userpic/320/1Jd12DMPQM7fk4lY5vG4yViFLkHUZisk9sPhTe0L4hEY4GelamngLnk2rfR5W9Ij.svg" className="OsUY creator"/> */}
                    <div></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "126px",
                      marginLeft: "140px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                    >
                      {addCommas(totalPlayers)}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "156px",
                      marginLeft: "140px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "rgba(235, 235, 245, 0.45)",
                      }}
                    >
                      {parsedData.stats.total_players}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      width: "100%",
                      height: "1px",
                      backgroundColor: "rgba(235, 235, 245, 0.1)",
                      marginTop: "193px",
                      marginLeft: "140px",
                    }}
                  ></div>
                </div>
                <div className="position-relative">
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "216px",
                      marginLeft: "18px",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "219px",
                      marginLeft: "21px",
                      zIndex: "2",
                    }}
                  >
                    <div className="OsUY demo-ava-9"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "216px",
                      marginLeft: "48px",
                      zIndex: "3",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "219px",
                      marginLeft: "51px",
                      zIndex: "4",
                    }}
                  >
                    <div className="OsUY demo-ava-6"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "216px",
                      marginLeft: "78px",
                      zIndex: "5",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "219px",
                      marginLeft: "81px",
                      zIndex: "5",
                    }}
                  >
                    <div className="OsUY demo-ava-10"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "210px",
                      marginLeft: "140px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                    >
                      {addCommas(dailyUsers)}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "240px",
                      marginLeft: "140px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "400",
                        color: "rgba(235, 235, 245, 0.45)",
                      }}
                    >
                      {parsedData.stats.daily_users}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      width: "100%",
                      height: "1px",
                      backgroundColor: "rgba(235, 235, 245, 0.1)",
                      marginTop: "278px",
                      marginLeft: "140px",
                    }}
                  ></div>
                </div>
                <div className="position-relative">
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "300px",
                      marginLeft: "18px",
                      zIndex: "1",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "303px",
                      marginLeft: "21px",
                      zIndex: "2",
                    }}
                  >
                    <div className="OsUY demo-ava-12"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "300px",
                      marginLeft: "48px",
                      zIndex: "3",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "303px",
                      marginLeft: "51px",
                      zIndex: "4",
                    }}
                  >
                    <div className="OsUY demo-ava-8"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "300px",
                      marginLeft: "78px",
                      zIndex: "5",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        borderRadius: "20px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "303px",
                      marginLeft: "81px",
                      zIndex: "6",
                    }}
                  >
                    <div className="OsUY demo-ava-2"></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: "0px",
                      marginTop: "294px",
                      marginLeft: "140px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "22px",
                        fontWeight: "600",
                        color: "#fff",
                      }}
                    >
                      {addCommas(online)}
                    </div>
                  </div>
                  <div className="Uty3">
                    <div className="pulse"></div>
                  </div>
                  <div className="Isye">
                    <div className="Ylhc">{parsedData.stats.online}</div>
                  </div>
                </div>
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
                  style={{
                    zIndex: "7",
                  }}
                >
                  <div className="Jh2w">
                    <div className="Li2p">
                      <div className="Iy4o">
                        {parsedData.stats.invite_a_fren}
                      </div>
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
